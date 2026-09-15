'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { products as seedProducts, categories as seedCategories } from '../../../data/mockData';
import { getProducts, saveProducts, getCategories, slugify, DATA_EVENT } from '../../../lib/productStore';
import { showToast } from '../../../components/Toast';

const h = React.createElement;
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&auto=format&fit=crop&q=80';

const emptyForm = {
  name: '',
  brand: '',
  type: 'vat-ly',
  categorySlug: '',
  priceRef: '',
  overallScore: '9.0',
  summary: '',
  image: '',
  officialUrl: '',
  verdict: '',
  reviewBody: '',
  considerations: [''],
  scores: [{ criterion: '', value: '' }],
  pros: [''],
  cons: [''],
  specs: [{ key: '', value: '' }],
};

function field(label, input, err) {
  return h(
    'div',
    { className: 'space-y-1.5' },
    h('div', { className: 'text-xs font-bold text-slate-700' }, label),
    input,
    err && h('p', { className: 'text-[11px] text-rose-600 font-medium' }, err)
  );
}

function sectionTitle(title, hint) {
  return h(
    'div',
    { className: 'pt-2 border-t border-slate-100' },
    h('div', { className: 'text-xs font-black uppercase tracking-widest text-blue-700 pt-3' }, title),
    hint && h('div', { className: 'text-[11px] text-slate-400 mt-0.5' }, hint)
  );
}

const inputClass = 'w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800';
// Ô điểm tiêu chí: KHÔNG dùng inputClass vì w-full sẽ đè mất w-24 (thứ tự CSS Tailwind)
const scoreInputClass = 'px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 w-24 shrink-0 text-center';

function toFormData(p) {
  return {
    id: p.id,
    name: p.name || '',
    brand: p.brand || '',
    type: p.type || 'vat-ly',
    categorySlug: p.categorySlug || '',
    priceRef: p.priceRef || '',
    overallScore: String(p.overallScore ?? ''),
    summary: p.summary || '',
    image: p.image || '',
    officialUrl: p.officialUrl && p.officialUrl !== '#' ? p.officialUrl : '',
    verdict: p.verdict || '',
    reviewBody: p.reviewBody || '',
    considerations: (p.considerations && p.considerations.length > 0 ? p.considerations : ['']).slice(),
    scores: (p.scores && p.scores.length > 0 ? p.scores : [{ criterion: '', value: '' }]).map((s) => ({ criterion: s.criterion || '', value: String(s.value ?? '') })),
    pros: (p.pros && p.pros.length > 0 ? p.pros : ['']).slice(),
    cons: (p.cons && p.cons.length > 0 ? p.cons : ['']).slice(),
    specs: (p.specs ? Object.entries(p.specs) : []).map(([key, value]) => ({ key, value: String(value ?? '') })),
  };
}

export default function AdminProductsPage() {
  const PAGE_SIZE = 8;
  const [list, setList] = useState(seedProducts);
  const [categories, setCategories] = useState(seedCategories);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null); // null | {isNew, data, errors}
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const refresh = () => {
      setList(getProducts());
      setCategories(getCategories());
    };
    refresh();
    window.addEventListener(DATA_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(DATA_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const parseScore = (v) => Number(String(v).replace(',', '.'));

  const isValidUrl = (s) => /^https?:\/\/.+\..+/.test((s || '').trim());

  const avgOf = (scores) => {
    const vals = (scores || [])
      .map((s) => parseScore(s.value))
      .filter((v) => !Number.isNaN(v) && v >= 0 && v <= 10);
    if (vals.length === 0) return null;
    return Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10;
  };

  // Trung bình trực tiếp từ form đang mở (hiển thị gợi ý + nút tự tính)
  const liveAvg = editing ? avgOf(editing.data.scores) : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return list.filter((p) => {
      if (typeFilter !== 'all' && p.type !== typeFilter) return false;
      if (q && !`${p.name} ${p.brand}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [list, query, typeFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const openCreate = () => {
    const firstCat = categories.find((c) => c.group === 'vat-ly') || categories[0];
    setEditing({ isNew: true, data: { ...emptyForm, scores: [{ criterion: '', value: '' }], pros: [''], cons: [''], specs: [{ key: '', value: '' }], categorySlug: firstCat ? firstCat.slug : '' }, errors: {} });
  };

  const openEdit = (p) => {
    setEditing({ isNew: false, data: toFormData(p), errors: {} });
  };

  const setData = (key, value) => {
    setEditing((prev) => {
      if (!prev) return prev;
      const data = { ...prev.data, [key]: value };
      if (key === 'type') {
        const first = categories.find((c) => c.group === value);
        data.categorySlug = first ? first.slug : '';
      }
      return { ...prev, data, errors: { ...prev.errors, [key]: undefined } };
    });
  };

  const setListField = (fieldName, idx, key, value) => {
    setEditing((prev) => {
      if (!prev) return prev;
      const arr = prev.data[fieldName].slice();
      if (typeof arr[idx] === 'object' && arr[idx] !== null && key) arr[idx] = { ...arr[idx], [key]: value };
      else arr[idx] = value;
      const errors = { ...prev.errors, [fieldName]: undefined };
      if (fieldName === 'scores') errors.overallScore = undefined;
      return { ...prev, data: { ...prev.data, [fieldName]: arr }, errors };
    });
  };

  const addListRow = (fieldName, template) => {
    setEditing((prev) => {
      if (!prev) return prev;
      return { ...prev, data: { ...prev.data, [fieldName]: [...prev.data[fieldName], template] }, errors: { ...prev.errors, [fieldName]: undefined } };
    });
  };

  const removeListRow = (fieldName, idx) => {
    setEditing((prev) => {
      if (!prev) return prev;
      if (prev.data[fieldName].length <= 1) return prev;
      return { ...prev, data: { ...prev.data, [fieldName]: prev.data[fieldName].filter((_, i) => i !== idx) } };
    });
  };

  const handleSave = () => {
    const d = editing.data;
    const errors = {};
    if (!d.name.trim()) errors.name = 'Nhập tên sản phẩm.';
    if (!d.brand.trim()) errors.brand = 'Nhập thương hiệu.';
    if (!d.priceRef.trim()) errors.priceRef = 'Nhập giá tham khảo.';
    if (!d.summary.trim()) errors.summary = 'Nhập mô tả ngắn cho sản phẩm.';
    else if (d.summary.trim().length < 10) errors.summary = 'Mô tả tối thiểu 10 ký tự.';
    if (d.image.trim() && !isValidUrl(d.image)) errors.image = 'Link ảnh phải bắt đầu bằng http(s)://.';
    if (d.officialUrl.trim() && !isValidUrl(d.officialUrl)) errors.officialUrl = 'Link phải bắt đầu bằng http(s)://.';
    const score = parseScore(d.overallScore);
    if (Number.isNaN(score) || score < 0 || score > 10) errors.overallScore = 'Điểm từ 0 đến 10.';
    if (!d.categorySlug) errors.categorySlug = 'Chọn danh mục.';

    const cleanScores = d.scores
      .map((s) => ({ criterion: (s.criterion || '').trim(), value: parseScore(s.value) }))
      .filter((s) => s.criterion || !Number.isNaN(s.value));
    const badScore = cleanScores.find((s) => !s.criterion || Number.isNaN(s.value) || s.value < 0 || s.value > 10);
    if (badScore) errors.scores = 'Mỗi dòng điểm cần tên tiêu chí và điểm 0–10.';
    if (!errors.scores && cleanScores.length === 0) errors.scores = 'Cần ít nhất 1 điểm thành phần để tính điểm tổng.';
    const cleanPros = d.pros.map((s) => (s || '').trim()).filter(Boolean);
    const cleanCons = d.cons.map((s) => (s || '').trim()).filter(Boolean);
    if (cleanPros.length === 0) errors.pros = 'Cần ít nhất 1 ưu điểm.';
    if (cleanCons.length === 0) errors.cons = 'Cần ít nhất 1 nhược điểm.';
    const cleanConsider = d.considerations.map((s) => (s || '').trim()).filter(Boolean);
    const cleanSpecs = d.specs
      .map((s) => ({ key: (s.key || '').trim(), value: (s.value || '').trim() }))
      .filter((s) => s.key || s.value);
    const badSpec = cleanSpecs.find((s) => !s.key || !s.value);
    if (badSpec) errors.specs = 'Mỗi dòng thông số cần cả tên và giá trị.';

    // Điểm tổng bắt buộc bằng trung bình điểm thành phần (làm tròn 1 chữ số)
    if (!errors.scores && !errors.overallScore && cleanScores.length > 0) {
      const avg = Math.round((cleanScores.reduce((a, s) => a + s.value, 0) / cleanScores.length) * 10) / 10;
      if (score !== avg) {
        const msg = `Điểm tổng phải bằng trung bình điểm thành phần (${avg}), đang nhập ${score}.`;
        errors.overallScore = msg;
        setEditing((prev) => (prev ? { ...prev, errors } : prev));
        showToast(msg, true);
        return;
      }
    }

    if (Object.keys(errors).length > 0) {
      setEditing((prev) => (prev ? { ...prev, errors } : prev));
      showToast('Vui lòng kiểm tra lại các trường báo lỗi.', true);
      return;
    }

    const specsObj = {};
    cleanSpecs.forEach((s) => { specsObj[s.key] = s.value; });

    let next;
    if (editing.isNew) {
      let slug = slugify(d.name) || `san-pham-${Date.now()}`;
      if (list.some((p) => p.slug === slug)) slug = `${slug}-${Date.now().toString().slice(-4)}`;
      next = [
        ...list,
        {
          id: `prod-${Date.now()}`,
          slug,
          name: d.name.trim(),
          brand: d.brand.trim(),
          type: d.type,
          categorySlug: d.categorySlug,
          subCategorySlug: '',
          summary: d.summary.trim() || 'Đang cập nhật mô tả.',
          image: d.image.trim() || DEFAULT_IMAGE,
          overallScore: Math.round(score * 10) / 10,
          priceRef: d.priceRef.trim(),
          currency: 'VND',
          status: 'Published',
          updatedAt: new Date().toLocaleDateString('vi-VN'),
          verdict: d.verdict.trim(),
          reviewBody: d.reviewBody.trim(),
          considerations: cleanConsider,
          scores: cleanScores.map((s) => ({ criterion: s.criterion, value: Math.round(s.value * 10) / 10 })),
          pros: cleanPros,
          cons: cleanCons,
          specs: specsObj,
          officialUrl: d.officialUrl.trim() || '#',
        },
      ];
      showToast('Đã thêm sản phẩm mới.');
    } else {
      next = list.map((p) =>
        p.id === d.id
          ? {
              ...p,
              name: d.name.trim(),
              brand: d.brand.trim(),
              type: d.type,
              categorySlug: d.categorySlug,
              priceRef: d.priceRef.trim(),
              overallScore: Math.round(score * 10) / 10,
              summary: d.summary.trim() || p.summary,
              image: d.image.trim() || p.image,
              officialUrl: d.officialUrl.trim() || p.officialUrl || '#',
              updatedAt: new Date().toLocaleDateString('vi-VN'),
              verdict: d.verdict.trim(),
              reviewBody: d.reviewBody.trim(),
              considerations: cleanConsider,
              scores: cleanScores.map((s) => ({ criterion: s.criterion, value: Math.round(s.value * 10) / 10 })),
              pros: cleanPros,
              cons: cleanCons,
              specs: specsObj,
            }
          : p
      );
      showToast('Đã lưu thay đổi.');
    }
    setList(next);
    saveProducts(next);
    setEditing(null);
  };

  const handleDelete = () => {
    const next = list.filter((p) => p.id !== deleteId);
    setList(next);
    saveProducts(next);
    setDeleteId(null);
    showToast('Đã xóa sản phẩm.');
  };

  const catsOfType = categories.filter((c) => !editing || c.group === editing.data.type);

  const addRowBtn = (label, onClick) =>
    h('button', { type: 'button', onClick, className: 'px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded transition-colors' }, label);

  const removeRowBtn = (onClick) =>
    h('button', { type: 'button', onClick, 'aria-label': 'Xóa dòng', className: 'px-2.5 py-2 text-xs font-bold text-rose-500 hover:text-white hover:bg-rose-500 border border-rose-200 hover:border-rose-500 rounded transition-colors flex-shrink-0' }, '✕');

  return h(
    'main',
    { className: 'p-4 sm:p-8 animate-fadeIn' },
    h(
      'div',
      { className: 'max-w-[1100px] mx-auto space-y-5' },
      h(
        'div',
        { className: 'flex flex-wrap items-end justify-between gap-3' },
        h(
          'div',
          null,
          h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-600' }, `Quản lý • ${filtered.length} sản phẩm`),
          h('h1', { className: 'text-2xl font-black text-slate-900 tracking-tight mt-1' }, 'Sản phẩm')
        ),
        h('button', { type: 'button', onClick: openCreate, className: 'px-4 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-all' }, '+ Thêm sản phẩm')
      ),

      // Filter bar
      h(
        'div',
        { className: 'flex flex-col sm:flex-row gap-2 bg-white border border-slate-200 rounded-md p-3 shadow-sm' },
          h('input', {
            type: 'text',
            value: query,
            onChange: (e) => { setQuery(e.target.value); setPage(1); },
            placeholder: 'Tìm theo tên, thương hiệu...',
            'aria-label': 'Tìm sản phẩm',
            className: `${inputClass} flex-1 min-w-0`,
          }),
          h(
            'select',
            { value: typeFilter, onChange: (e) => { setTypeFilter(e.target.value); setPage(1); }, 'aria-label': 'Lọc nhóm', className: `${inputClass} sm:w-44 cursor-pointer` },
          h('option', { value: 'all' }, 'Tất cả nhóm'),
          h('option', { value: 'vat-ly' }, 'Vật lý'),
          h('option', { value: 'so' }, 'Số')
        )
      ),

      // Table
      h(
        'div',
        { className: 'bg-white border border-slate-200 rounded-md shadow-sm overflow-x-auto' },
        h(
          'table',
          { className: 'w-full text-left text-sm min-w-[720px]' },
          h(
            'thead',
            { className: 'bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wide' },
            h(
              'tr',
              null,
              h('th', { className: 'py-3 px-4' }, 'Sản phẩm'),
              h('th', { className: 'py-3 px-4' }, 'Nhóm'),
              h('th', { className: 'py-3 px-4 text-center' }, 'Điểm'),
              h('th', { className: 'py-3 px-4 text-right' }, 'Giá'),
              h('th', { className: 'py-3 px-4 text-right' }, 'Thao tác')
            )
          ),
            h(
              'tbody',
              { className: 'divide-y divide-slate-100' },
              filtered.length === 0 &&
                h('tr', null, h('td', { colSpan: 5, className: 'py-10 text-center text-sm text-slate-400' }, 'Không có sản phẩm nào khớp.')),
              paged.map((p) =>
              h(
                'tr',
                { key: p.id, className: 'hover:bg-blue-50/40 transition-colors' },
                h(
                  'td',
                  { className: 'py-3 px-4' },
                  h(
                    'div',
                    { className: 'flex items-center gap-3' },
                    h('img', { src: p.image, alt: p.name, loading: 'lazy', className: 'w-11 h-11 rounded object-cover border border-slate-200 bg-slate-50 flex-shrink-0' }),
                      h(
                        'div',
                        { className: 'min-w-0' },
                        h('a', { href: `/review/${p.slug}`, target: '_blank', rel: 'noopener noreferrer', title: 'Mở trang chi tiết (tab mới)', className: 'font-bold text-slate-900 hover:text-blue-600 hover:underline truncate max-w-[260px] inline-block' }, p.name),
                        h('div', { className: 'text-[11px] text-slate-400' }, p.brand)
                      )
                  )
                ),
                h('td', { className: 'py-3 px-4' }, h('span', { className: `text-[11px] font-bold px-2 py-0.5 rounded uppercase ${p.type === 'vat-ly' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-violet-50 text-violet-700 border border-violet-200'}` }, p.type === 'vat-ly' ? 'Vật lý' : 'Số')),
                h('td', { className: 'py-3 px-4 text-center font-black text-blue-600' }, `${p.overallScore}/10`),
                h('td', { className: 'py-3 px-4 text-right font-semibold text-slate-800 text-xs whitespace-nowrap' }, p.priceRef),
                h(
                  'td',
                  { className: 'py-3 px-4' },
                  h(
                    'div',
                    { className: 'flex justify-end gap-2' },
                    h('button', { type: 'button', onClick: () => openEdit(p), className: 'px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded transition-colors' }, 'Sửa'),
                    h('button', { type: 'button', onClick: () => setDeleteId(p.id), className: 'px-3 py-1.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded transition-colors' }, 'Xóa')
                  )
                )
              )
            )
          )
        ),

        // Pagination footer
        h(
          'div',
          { className: 'flex flex-wrap items-center justify-between gap-2 bg-white border border-slate-200 rounded-md px-4 py-2.5 shadow-sm text-xs text-slate-500 font-medium' },
          h('span', null, filtered.length === 0 ? 'Không có sản phẩm nào.' : `Hiển thị ${paged.length}/${filtered.length} sản phẩm • Trang ${safePage}/${totalPages}`),
          totalPages > 1 &&
            h(
              'div',
              { className: 'flex items-center gap-1.5' },
              h(
                'button',
                { type: 'button', disabled: safePage === 1, onClick: () => setPage(safePage - 1), className: `px-3 py-1.5 font-bold rounded border transition-colors ${safePage === 1 ? 'text-slate-300 border-slate-200 cursor-not-allowed' : 'text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'}` },
                '← Trước'
              ),
              Array.from({ length: totalPages }).map((_, i) =>
                h(
                  'button',
                  { key: i + 1, type: 'button', onClick: () => setPage(i + 1), className: `min-w-[30px] px-2 py-1.5 font-bold rounded border transition-colors ${safePage === i + 1 ? 'bg-blue-600 text-white border-blue-600' : 'text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'}` },
                  String(i + 1)
                )
              ),
              h(
                'button',
                { type: 'button', disabled: safePage === totalPages, onClick: () => setPage(safePage + 1), className: `px-3 py-1.5 font-bold rounded border transition-colors ${safePage === totalPages ? 'text-slate-300 border-slate-200 cursor-not-allowed' : 'text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'}` },
                'Sau →'
              )
            )
        )
      )
    ),

    // Create/Edit modal — đầy đủ trường như trang chi tiết hiển thị
    editing &&
      h(
        'div',
        { className: 'fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 animate-fadeIn' },
        h(
          'div',
          { className: 'w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto p-6 space-y-4' },
          h(
            'div',
            { className: 'flex items-start justify-between gap-3' },
            h(
              'div',
              null,
              h('h2', { className: 'text-lg font-black text-slate-900' }, editing.isNew ? 'Thêm sản phẩm mới' : 'Sửa sản phẩm'),
              !editing.isNew && h('span', { className: 'text-[11px] text-slate-400 font-medium' }, `Slug: ${list.find((p) => p.id === editing.data.id)?.slug || ''}`)
            ),
            h(
              'button',
              { type: 'button', onClick: () => setEditing(null), 'aria-label': 'Đóng', className: 'w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors text-base font-bold' },
              '✕'
            )
          ),

          sectionTitle('Thông tin chung', 'Tên, thương hiệu, nhóm, giá, điểm tổng — hiển thị ở thẻ sản phẩm và đầu trang chi tiết.'),
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
            field('Tên sản phẩm *', h('input', { type: 'text', value: editing.data.name, onChange: (e) => setData('name', e.target.value), placeholder: 'VD: Aircook Pro 6L', className: inputClass }), editing.errors.name),
            field('Thương hiệu *', h('input', { type: 'text', value: editing.data.brand, onChange: (e) => setData('brand', e.target.value), placeholder: 'VD: AirCook', className: inputClass }), editing.errors.brand),
            field(
              'Nhóm *',
              h(
                'select',
                { value: editing.data.type, onChange: (e) => setData('type', e.target.value), className: `${inputClass} cursor-pointer` },
                h('option', { value: 'vat-ly' }, 'Sản phẩm vật lý'),
                h('option', { value: 'so' }, 'Sản phẩm số')
              )
            ),
            field(
              'Danh mục *',
              h(
                'select',
                { value: editing.data.categorySlug, onChange: (e) => setData('categorySlug', e.target.value), className: `${inputClass} cursor-pointer` },
                catsOfType.length === 0 && h('option', { value: '' }, 'Chưa có danh mục'),
                catsOfType.map((c) => h('option', { key: c.id, value: c.slug }, c.name))
              ),
              editing.errors.categorySlug
            ),
            field('Giá tham khảo *', h('input', { type: 'text', value: editing.data.priceRef, onChange: (e) => setData('priceRef', e.target.value), placeholder: 'VD: 2.490.000đ', className: inputClass }), editing.errors.priceRef),
            field(
              'Điểm tổng (0–10) *',
              h(
                'div',
                { className: 'space-y-1.5' },
                h('input', { type: 'text', inputMode: 'decimal', value: editing.data.overallScore, onChange: (e) => setData('overallScore', e.target.value), placeholder: 'VD: 9.5', className: inputClass }),
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2' },
                  h('span', { className: 'text-[11px] text-slate-400' }, liveAvg === null ? 'Chưa có điểm thành phần' : `TB thành phần: ${liveAvg}`),
                  h(
                    'button',
                    {
                      type: 'button',
                      disabled: liveAvg === null,
                      onClick: () => setData('overallScore', String(liveAvg)),
                      className: `px-2.5 py-1 text-[11px] font-bold rounded border transition-colors ${liveAvg === null ? 'text-slate-300 border-slate-200 cursor-not-allowed' : 'text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-200'}`,
                    },
                    'Tự tính từ TB'
                  )
                )
              ),
              editing.errors.overallScore
            )
          ),
          field('Mô tả ngắn *', h('textarea', { rows: 2, value: editing.data.summary, onChange: (e) => setData('summary', e.target.value), placeholder: 'Tóm tắt điểm nổi bật của sản phẩm...', className: `${inputClass} resize-none` }), editing.errors.summary),
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
            field('Link ảnh', h('input', { type: 'text', value: editing.data.image, onChange: (e) => setData('image', e.target.value), placeholder: 'https://... (trống = ảnh mặc định)', className: inputClass }), editing.errors.image),
            field('Link trang chính thức', h('input', { type: 'text', value: editing.data.officialUrl, onChange: (e) => setData('officialUrl', e.target.value), placeholder: 'https://... (nút “Xem nơi bán”)', className: inputClass }), editing.errors.officialUrl)
          ),

          sectionTitle('Nội dung chi tiết'),
          field('Kết luận nhanh', h('textarea', { rows: 3, value: editing.data.verdict, onChange: (e) => setData('verdict', e.target.value), placeholder: 'VD: NordVPN Pro đạt 9.4/10 nhờ tốc độ vượt trội... (trống = ẩn khối)', className: `${inputClass} resize-none` })),
          field('Trải nghiệm chuyên sâu', h('textarea', { rows: 5, value: editing.data.reviewBody, onChange: (e) => setData('reviewBody', e.target.value), placeholder: 'Viết 1–2 đoạn đánh giá chi tiết, xuống dòng để tách đoạn... (trống = ẩn khối)', className: `${inputClass} resize-none` })),

          sectionTitle('Điểm theo tiêu chí', 'Các thanh điểm trong khối “Đánh giá theo tiêu chí chi tiết”.'),
          h(
            'div',
            { className: 'space-y-2' },
            editing.data.scores.map((s, i) =>
              h(
                'div',
                { key: i, className: 'flex gap-2' },
                h('input', { type: 'text', value: s.criterion, onChange: (e) => setListField('scores', i, 'criterion', e.target.value), placeholder: `Tiêu chí ${i + 1} (VD: Thời lượng pin)`, 'aria-label': `Tên tiêu chí ${i + 1}`, className: `${inputClass} flex-1 min-w-0` }),
                h('input', { type: 'text', inputMode: 'decimal', value: s.value, onChange: (e) => setListField('scores', i, 'value', e.target.value), placeholder: 'Điểm', 'aria-label': `Điểm tiêu chí ${i + 1}`, className: scoreInputClass }),
                removeRowBtn(() => removeListRow('scores', i))
              )
            ),
            h(
              'div',
              { className: 'flex items-center justify-between' },
              addRowBtn('+ Thêm tiêu chí', () => addListRow('scores', { criterion: '', value: '' })),
              editing.errors.scores && h('span', { className: 'text-[11px] text-rose-600 font-medium' }, editing.errors.scores)
            )
          ),

          sectionTitle('Ưu điểm', 'Danh sách xanh trong khối “Ưu điểm & Nhược điểm”. Dòng đầu còn dùng cho kết luận nhanh.'),
          h(
            'div',
            { className: 'space-y-2' },
            editing.data.pros.map((text, i) =>
              h(
                'div',
                { key: i, className: 'flex gap-2' },
                h('input', { type: 'text', value: text, onChange: (e) => setListField('pros', i, null, e.target.value), placeholder: `Ưu điểm ${i + 1}`, 'aria-label': `Ưu điểm ${i + 1}`, className: `${inputClass} flex-1 min-w-0` }),
                removeRowBtn(() => removeListRow('pros', i))
              )
            ),
            addRowBtn('+ Thêm ưu điểm', () => addListRow('pros', ''))
          ),
          editing.errors.pros &&
            h('p', { className: 'text-[11px] text-rose-600 font-medium' }, editing.errors.pros),

          sectionTitle('Nhược điểm', 'Danh sách đỏ trong khối “Ưu điểm & Nhược điểm”.'),
          h(
            'div',
            { className: 'space-y-2' },
            editing.data.cons.map((text, i) =>
              h(
                'div',
                { key: i, className: 'flex gap-2' },
                h('input', { type: 'text', value: text, onChange: (e) => setListField('cons', i, null, e.target.value), placeholder: `Nhược điểm ${i + 1}`, 'aria-label': `Nhược điểm ${i + 1}`, className: `${inputClass} flex-1 min-w-0` }),
                removeRowBtn(() => removeListRow('cons', i))
              )
            ),
            addRowBtn('+ Thêm nhược điểm', () => addListRow('cons', ''))
          ),
          editing.errors.cons &&
            h('p', { className: 'text-[11px] text-rose-600 font-medium' }, editing.errors.cons),

          sectionTitle('Cần cân nhắc nếu', 'Hộp “Cần cân nhắc nếu” cạnh khối kết luận. Bỏ trống = ẩn hộp.'),
          h(
            'div',
            { className: 'space-y-2' },
            editing.data.considerations.map((text, i) =>
              h(
                'div',
                { key: i, className: 'flex gap-2' },
                h('input', { type: 'text', value: text, onChange: (e) => setListField('considerations', i, null, e.target.value), placeholder: `Điểm cần cân nhắc ${i + 1}`, 'aria-label': `Điểm cần cân nhắc ${i + 1}`, className: `${inputClass} flex-1 min-w-0` }),
                removeRowBtn(() => removeListRow('considerations', i))
              )
            ),
            addRowBtn('+ Thêm điểm cân nhắc', () => addListRow('considerations', ''))
          ),

          sectionTitle('Thông số kỹ thuật', 'Bảng “Thông số kỹ thuật & Chi tiết gói” trên trang chi tiết.'),
          h(
            'div',
            { className: 'space-y-2' },
            editing.data.specs.map((s, i) =>
              h(
                'div',
                { key: i, className: 'flex gap-2' },
                h('input', { type: 'text', value: s.key, onChange: (e) => setListField('specs', i, 'key', e.target.value), placeholder: 'Tên (VD: Dung tích)', 'aria-label': `Tên thông số ${i + 1}`, className: `${inputClass} flex-1 min-w-0` }),
                h('input', { type: 'text', value: s.value, onChange: (e) => setListField('specs', i, 'value', e.target.value), placeholder: 'Giá trị (VD: 6.0 Lít)', 'aria-label': `Giá trị thông số ${i + 1}`, className: `${inputClass} flex-1 min-w-0` }),
                removeRowBtn(() => removeListRow('specs', i))
              )
            ),
            h(
              'div',
              { className: 'flex items-center justify-between' },
              addRowBtn('+ Thêm thông số', () => addListRow('specs', { key: '', value: '' })),
              editing.errors.specs && h('span', { className: 'text-[11px] text-rose-600 font-medium' }, editing.errors.specs)
            )
          ),

          h(
            'div',
            { className: 'flex justify-end gap-2 border-t border-slate-200 pt-4 mt-2' },
            h('button', { type: 'button', onClick: () => setEditing(null), className: 'px-4 py-2.5 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors' }, 'Hủy'),
            h('button', { type: 'button', onClick: handleSave, className: 'px-5 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-all' }, editing.isNew ? 'Thêm mới' : 'Lưu lại')
          )
        )
      ),

    // Delete confirm
    deleteId &&
      h(
        'div',
        { className: 'fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 animate-fadeIn' },
        h(
          'div',
          { className: 'w-full max-w-sm bg-white rounded-lg shadow-xl p-6 space-y-3 text-center' },
          h('h2', { className: 'text-base font-black text-slate-900' }, 'Xóa sản phẩm này?'),
          h('p', { className: 'text-xs text-slate-500' }, 'Sản phẩm sẽ biến mất khỏi hệ thống ngay lập tức. Không thể hoàn tác.'),
          h(
            'div',
            { className: 'flex justify-center gap-2 pt-1' },
            h('button', { type: 'button', onClick: () => setDeleteId(null), className: 'px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors' }, 'Hủy'),
            h('button', { type: 'button', onClick: handleDelete, className: 'px-4 py-2 text-sm font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-md transition-colors' }, 'Xác nhận xóa')
          )
        )
      )
  );
}
