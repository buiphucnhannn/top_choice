'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { products as seedProducts, categories as seedCategories } from '../../../data/mockData';
import { getCategories, saveCategories, getProducts, saveProducts, slugify, DATA_EVENT } from '../../../lib/productStore';
import { showToast } from '../../../components/Toast';

const h = React.createElement;

function field(label, input, err) {
  return h(
    'div',
    { className: 'space-y-1.5' },
    h('div', { className: 'text-xs font-bold text-slate-700' }, label),
    input,
    err && h('p', { className: 'text-[11px] text-rose-600 font-medium' }, err)
  );
}

export default function AdminCategoriesPage() {
  const PAGE_SIZE = 8;
  const [list, setList] = useState(seedCategories);
  const [products, setProducts] = useState(seedProducts);
  const [groupFilter, setGroupFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (typeof document !== 'undefined') document.title = 'Quản lý danh mục | TOP CHOICE';
    const refresh = () => {
      setList(getCategories());
      setProducts(getProducts());
    };
    refresh();
    window.addEventListener(DATA_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(DATA_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const countOf = (slug) => products.filter((p) => p.categorySlug === slug).length;

  const filtered = useMemo(() => {
    if (groupFilter === 'all') return list;
    return list.filter((c) => c.group === groupFilter);
  }, [list, groupFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const openCreate = () => {
    setEditing({
      isNew: true,
      data: { name: '', slug: '', group: 'vat-ly', desc: '' },
      errors: {},
    });
    setNotice('');
  };

  const openEdit = (c) => {
    setEditing({
      isNew: false,
      data: { id: c.id, name: c.name || '', slug: c.slug || '', group: c.group || 'vat-ly', desc: c.desc || '' },
      errors: {},
    });
    setNotice('');
  };

  const setData = (key, value) => {
    setEditing((prev) => {
      if (!prev) return prev;
      const data = { ...prev.data, [key]: value };
      if (key === 'name' && prev.isNew) data.slug = slugify(value);
      return { ...prev, data, errors: { ...prev.errors, [key]: undefined } };
    });
  };

  const handleSave = () => {
    const d = editing.data;
    const errors = {};
    if (!d.name.trim()) errors.name = 'Nhập tên danh mục.';
    const slug = (d.slug || '').trim() || slugify(d.name);
    if (!slug) errors.slug = 'Không tạo được slug.';
    else if (list.some((c) => c.slug === slug && c.id !== d.id)) errors.slug = 'Slug đã tồn tại.';
    if (Object.keys(errors).length > 0) {
      setEditing((prev) => ({ ...prev, errors }));
      return;
    }

    let next;
    if (editing.isNew) {
      next = [
        ...list,
        {
          id: `cat-${Date.now()}`,
          name: d.name.trim(),
          slug,
          group: d.group,
          desc: d.desc.trim() || 'Đang cập nhật mô tả.',
          icon: d.group === 'so' ? 'chip' : 'home',
          featured: false,
          subcategories: [],
        },
      ];
      showToast('Đã thêm danh mục mới.');
    } else {
      const old = list.find((c) => c.id === d.id);
      next = list.map((c) => (c.id === d.id ? { ...c, name: d.name.trim(), slug, group: d.group, desc: d.desc.trim() } : c));
      // Đổi slug -> cập nhật sản phẩm đang thuộc danh mục cũ
      if (old && old.slug !== slug) {
        const prods = getProducts().map((p) => (p.categorySlug === old.slug ? { ...p, categorySlug: slug } : p));
        saveProducts(prods);
        setProducts(prods);
      }
      showToast('Đã lưu thay đổi.');
    }
    setList(next);
    saveCategories(next);
    setEditing(null);
  };

  const tryDelete = (id) => {
    const cat = list.find((c) => c.id === id);
    const n = countOf(cat.slug);
    if (n > 0) {
      setNotice(`Không thể xóa “${cat.name}” vì còn ${n} sản phẩm đang thuộc danh mục này. Hãy chuyển sản phẩm sang danh mục khác trước.`);
      setDeleteId(null);
      return;
    }
    setNotice('');
    setDeleteId(id);
  };

  const handleDelete = () => {
    const next = list.filter((c) => c.id !== deleteId);
    setList(next);
    saveCategories(next);
    setDeleteId(null);
    showToast('Đã xóa danh mục.');
  };

  const inputClass = 'w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800';

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
            h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-600' }, `Quản lý • ${filtered.length} danh mục`),
            h('h1', { className: 'text-2xl font-black text-slate-900 tracking-tight mt-1' }, 'Danh mục sản phẩm')
          ),
          h('button', { type: 'button', onClick: openCreate, className: 'px-4 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-all' }, '+ Thêm danh mục')
        ),

        h(
          'div',
          { className: 'flex gap-2 bg-white border border-slate-200 rounded-md p-3 shadow-sm' },
          [
            { key: 'all', label: 'Tất cả' },
            { key: 'vat-ly', label: 'Vật lý' },
            { key: 'so', label: 'Số' },
          ].map((t) =>
            h(
              'button',
              {
                key: t.key,
                type: 'button',
                onClick: () => { setGroupFilter(t.key); setPage(1); },
                className: `px-4 py-2 text-xs font-bold rounded-md border transition-all ${groupFilter === t.key ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'}`,
              },
              t.label
            )
          )
        ),

        notice && h('p', { className: 'text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2.5' }, notice),

        h(
          'div',
          { className: 'bg-white border border-slate-200 rounded-md shadow-sm overflow-x-auto' },
          h(
            'table',
            { className: 'w-full text-left text-sm min-w-[640px]' },
            h(
              'thead',
              { className: 'bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wide' },
              h(
                'tr',
                null,
                h('th', { className: 'py-3 px-4' }, 'Danh mục'),
                h('th', { className: 'py-3 px-4' }, 'Nhóm'),
                h('th', { className: 'py-3 px-4 text-center' }, 'Sản phẩm'),
                h('th', { className: 'py-3 px-4 text-right' }, 'Thao tác')
              )
            ),
            h(
              'tbody',
              { className: 'divide-y divide-slate-100' },
              filtered.length === 0 &&
                h('tr', null, h('td', { colSpan: 4, className: 'py-10 text-center text-sm text-slate-400' }, 'Chưa có danh mục nào.')),
              paged.map((c) =>
                h(
                  'tr',
                  { key: c.id, className: 'hover:bg-blue-50/40 transition-colors' },
                  h(
                    'td',
                    { className: 'py-3 px-4' },
                    h('div', { className: 'font-bold text-slate-900' }, c.name),
                    h('div', { className: 'text-[11px] text-slate-400 truncate max-w-[320px]' }, `/${c.slug} — ${c.desc || ''}`)
                  ),
                  h('td', { className: 'py-3 px-4' }, h('span', { className: `text-[11px] font-bold px-2 py-0.5 rounded uppercase ${c.group === 'so' ? 'bg-violet-50 text-violet-700 border border-violet-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}` }, c.group === 'so' ? 'Số' : 'Vật lý')),
                  h('td', { className: 'py-3 px-4 text-center font-black text-blue-600' }, countOf(c.slug)),
                  h(
                    'td',
                    { className: 'py-3 px-4' },
                    h(
                      'div',
                      { className: 'flex justify-end gap-2' },
                      h('button', { type: 'button', onClick: () => openEdit(c), className: 'px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded transition-colors' }, 'Sửa'),
                      h('button', { type: 'button', onClick: () => tryDelete(c.id), className: 'px-3 py-1.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded transition-colors' }, 'Xóa')
                    )
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
          h('span', null, filtered.length === 0 ? 'Chưa có danh mục nào.' : `Hiển thị ${paged.length}/${filtered.length} danh mục • Trang ${safePage}/${totalPages}`),
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
      ),

    // Create/Edit modal
    editing &&
      h(
        'div',
        { className: 'fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 animate-fadeIn' },
        h(
          'div',
          { className: 'w-full max-w-lg bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto p-6 space-y-4' },
          h(
            'div',
            { className: 'flex items-start justify-between gap-3' },
            h('h2', { className: 'text-lg font-black text-slate-900' }, editing.isNew ? 'Thêm danh mục mới' : 'Sửa danh mục'),
            h(
              'button',
              { type: 'button', onClick: () => setEditing(null), 'aria-label': 'Đóng', className: 'w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors text-base font-bold' },
              '✕'
            )
          ),
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
            field('Tên danh mục *', h('input', { type: 'text', value: editing.data.name, onChange: (e) => setData('name', e.target.value), placeholder: 'VD: Thiết bị Điện tử', className: inputClass }), editing.errors.name),
            field('Slug *', h('input', { type: 'text', value: editing.data.slug, onChange: (e) => setData('slug', e.target.value), placeholder: 'VD: dien-tu', className: inputClass }), editing.errors.slug)
          ),
          field(
            'Nhóm *',
            h(
              'select',
              { value: editing.data.group, onChange: (e) => setData('group', e.target.value), className: `${inputClass} cursor-pointer` },
              h('option', { value: 'vat-ly' }, 'Sản phẩm vật lý'),
              h('option', { value: 'so' }, 'Sản phẩm số')
            )
          ),
          field('Mô tả', h('textarea', { rows: 3, value: editing.data.desc, onChange: (e) => setData('desc', e.target.value), placeholder: 'Mô tả ngắn về danh mục...', className: `${inputClass} resize-none` })),
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
          h('h2', { className: 'text-base font-black text-slate-900' }, 'Xóa danh mục này?'),
          h('p', { className: 'text-xs text-slate-500' }, 'Danh mục trống nên xóa an toàn. Không thể hoàn tác.'),
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
