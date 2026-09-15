'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { products as seedProducts, categories as seedCategories } from '../data/mockData';
import { getProducts, getCategories, DATA_EVENT } from '../lib/productStore';

const h = React.createElement;

// Chuẩn hóa chuỗi để tìm kiếm: bỏ dấu, thường hóa, bỏ khoảng trắng
// "chat GPT" và "chatGPT", "nồi chiên" và "noi chien" đều khớp nhau
const norm = (s) =>
  (s || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

function ProductCard(item) {
  return h(
    'a',
    {
      key: item.id,
      href: `/review/${item.slug}`,
      className: 'flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200 group min-w-0',
    },
    h(
      'div',
      { className: 'relative w-full h-44 overflow-hidden bg-slate-100' },
      item.image
        ? h('img', {
            src: item.image,
            alt: item.name || 'Sản phẩm',
            loading: 'lazy',
            className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
          })
        : h('div', { className: 'w-full h-full flex items-center justify-center text-xs italic text-slate-400 bg-slate-50' }, 'Không có ảnh'),
      h(
        'span',
        { className: 'absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-white/95 border border-slate-200 text-slate-700' },
        item.type === 'vat-ly' ? 'Vật lý' : 'Số'
      ),
      h(
        'span',
        { className: 'absolute top-2 right-2 text-xs font-black px-2 py-0.5 rounded bg-blue-600 text-white shadow' },
        item.overallScore !== '' && item.overallScore !== null && item.overallScore !== undefined ? `${item.overallScore}/10` : 'Không có'
      )
    ),
    h(
      'div',
      { className: 'p-4 flex-1 flex flex-col gap-2 min-w-0' },
      h('div', { className: 'text-[11px] font-semibold text-slate-400 uppercase tracking-wide truncate' }, item.brand || 'Không có'),
      h('h3', { className: 'font-bold text-slate-900 text-[15px] sm:text-base leading-snug group-hover:text-blue-600 transition-colors break-words' }, item.name || 'Không có'),
      h('p', { className: 'text-xs text-slate-600 line-clamp-2 leading-relaxed break-words' }, item.summary || 'Không có'),
      h(
        'div',
        { className: 'mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2' },
        h('span', { className: 'text-sm font-extrabold text-blue-600 truncate' }, item.priceRef || 'Không có'),
        h('span', { className: 'text-xs font-bold text-slate-700 group-hover:text-blue-600 flex-shrink-0' }, 'Xem chi tiết →')
      )
    )
  );
}

// Một section sản phẩm cho 1 nhóm cố định (vat-ly | so), giao diện giống hệt nhau
export default function ProductSection({ id, eyebrow, title, desc, type, searchPlaceholder }) {
  const PAGE_SIZE = 8;
  const [categorySlug, setCategorySlug] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState(seedProducts);
  const [allCategories, setAllCategories] = useState(seedCategories);

  const resetPage = () => setPage(1);

  const scrollToGrid = () => {
    const el = document.querySelector(`#${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onSearch = (e) => { setQuery(e.detail || ''); resetPage(); };
    const refreshData = () => {
      setAllProducts(getProducts());
      setAllCategories(getCategories());
      resetPage();
    };
    refreshData();
    window.addEventListener('topchoice:search', onSearch);
    window.addEventListener(DATA_EVENT, refreshData);
    window.addEventListener('storage', refreshData);
    return () => {
      window.removeEventListener('topchoice:search', onSearch);
      window.removeEventListener(DATA_EVENT, refreshData);
      window.removeEventListener('storage', refreshData);
    };
  }, []);

  const groupCats = useMemo(() => allCategories.filter((c) => c.group === type), [allCategories, type]);

  const filtered = useMemo(() => {
    const tokens = query.trim().split(/\s+/).filter(Boolean).map(norm).filter(Boolean);
    return allProducts.filter((p) => {
      if (p.type !== type) return false;
      if (categorySlug !== 'all' && p.categorySlug !== categorySlug) return false;
      if (tokens.length === 0) return true;
      const hay = norm(`${p.name} ${p.brand} ${p.summary}`);
      return tokens.every((t) => hay.includes(t));
    });
  }, [type, categorySlug, query, allProducts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const rangeStart = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(safePage * PAGE_SIZE, filtered.length);

  const goToPage = (p) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    scrollToGrid();
  };

  return h(
    'section',
    { id, className: 'w-full py-10 sm:py-12 bg-[#edf4fb] scroll-mt-20 overflow-x-clip' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6' },
      // Header
      h(
        'div',
        { className: 'text-center max-w-2xl mx-auto space-y-2 px-1' },
        h('p', { className: 'text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600' }, eyebrow),
        h('h2', { className: 'text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight text-balance leading-snug' }, title),
        h('p', { className: 'text-[13px] sm:text-sm text-slate-500 leading-relaxed text-balance' }, desc)
      ),

      // Search box (đồng bộ với ô tìm ở header/hero)
      h(
        'div',
        { className: 'flex justify-center' },
        h(
          'div',
          { className: 'relative w-full max-w-md' },
          h(
            'svg',
            { className: 'w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
          ),
          h('input', {
            type: 'text',
            value: query,
            onChange: (e) => { setQuery(e.target.value); resetPage(); },
            placeholder: searchPlaceholder,
            'aria-label': 'Tìm kiếm sản phẩm',
            className: 'w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-slate-300 transition-all placeholder:text-slate-400 text-slate-800',
          }),
          query &&
            h(
              'button',
              {
                type: 'button',
                onClick: () => { setQuery(''); resetPage(); },
                'aria-label': 'Xóa từ khóa',
                className: 'absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm font-bold',
              },
              '✕'
            )
        )
      ),

      // Category pills + reset
      h(
        'div',
        { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-3 sm:px-4 py-3 shadow-sm' },
        h(
          'div',
          { className: 'flex sm:flex-wrap items-center gap-2 overflow-x-auto sm:overflow-visible justify-start sm:justify-center pb-1 sm:pb-0 -mx-1 px-1 snap-x no-scrollbar' },
          h(
            'button',
            { type: 'button', onClick: () => { setCategorySlug('all'); resetPage(); }, className: `flex-shrink-0 snap-start min-h-[36px] px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors ${categorySlug === 'all' ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'}` },
            'Tất cả'
          ),
          groupCats.map((c) =>
            h(
              'button',
              { key: c.id, type: 'button', onClick: () => { setCategorySlug(c.slug); resetPage(); }, className: `flex-shrink-0 snap-start min-h-[36px] px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors whitespace-nowrap ${categorySlug === c.slug ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'}` },
              c.name
            )
          )
        ),
        (query.trim() || categorySlug !== 'all') &&
          h(
            'button',
            { type: 'button', onClick: () => { setQuery(''); setCategorySlug('all'); resetPage(); }, className: 'text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex-shrink-0 min-h-[36px] px-2 self-center' },
            'Bỏ lọc ✕'
          )
      ),

      // Result meta
      h('div', { className: 'flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium' },
        h('span', null, `Hiển thị ${rangeStart}–${rangeEnd} / ${filtered.length} sản phẩm${query.trim() ? ` cho từ khóa “${query.trim()}”` : ''}.`),
        totalPages > 1 && h('span', null, `Trang ${safePage}/${totalPages}`)
      ),

      // Grid
      filtered.length > 0
        ? h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 scroll-mt-24' },
            paged.map((p) => ProductCard(p))
          )
        : h(
            'div',
            { className: 'bg-white border border-slate-200 rounded-xl p-8 sm:p-10 text-center space-y-2 scroll-mt-24' },
            h('div', { className: 'text-3xl' }, '🔍'),
            h('h3', { className: 'font-bold text-slate-900' }, 'Không tìm thấy sản phẩm phù hợp'),
            h('p', { className: 'text-sm text-slate-500' }, 'Thử từ khóa khác hoặc bấm “Bỏ lọc” để xem toàn bộ sản phẩm.'),
            h('button', { type: 'button', onClick: () => { setQuery(''); setCategorySlug('all'); resetPage(); }, className: 'mt-2 px-5 py-2.5 min-h-[44px] text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700' }, 'Xem tất cả sản phẩm')
          ),

      // Pagination
      totalPages > 1 && filtered.length > 0 &&
        h(
          'nav',
          { className: 'flex items-center justify-center gap-1.5 pt-2 flex-wrap', 'aria-label': 'Phân trang sản phẩm' },
          h(
            'button',
            {
              type: 'button',
              disabled: safePage === 1,
              onClick: () => goToPage(safePage - 1),
              className: `px-3.5 py-2 text-xs font-bold rounded-md border transition-all ${safePage === 1 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-sm'}`,
            },
            '← Trước'
          ),
          Array.from({ length: totalPages }).map((_, i) => {
            const p = i + 1;
            return h(
              'button',
              {
                key: p,
                type: 'button',
                onClick: () => goToPage(p),
                'aria-label': `Trang ${p}`,
                'aria-current': safePage === p ? 'page' : undefined,
                className: `min-w-[36px] px-3 py-2 text-xs font-bold rounded-md border transition-all ${safePage === p ? 'bg-blue-600 text-white border-blue-600 shadow' : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-sm'}`,
              },
              String(p)
            );
          }),
          h(
            'button',
            {
              type: 'button',
              disabled: safePage === totalPages,
              onClick: () => goToPage(safePage + 1),
              className: `px-3.5 py-2 text-xs font-bold rounded-md border transition-all ${safePage === totalPages ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-sm'}`,
            },
            'Sau →'
          )
        )
    )
  );
}
