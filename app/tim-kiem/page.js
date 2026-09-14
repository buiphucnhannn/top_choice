'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { products, rankings, guides, comparisons, categories } from '../../data/mockData';

const h = React.createElement;

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // all, product, ranking, guide, comparison
  const [groupFilter, setGroupFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [minScore, setMinScore] = useState('all');
  const [updatedFilter, setUpdatedFilter] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const q = urlParams.get('q');
      if (q) setSearchTerm(q);
    }
  }, []);

  // Filter items matching search term
  const term = searchTerm.toLowerCase().trim();

  const matchesGroup = (item) => groupFilter === 'all' || item.type === groupFilter || item.group === groupFilter;
  const matchesCategory = (item) => categoryFilter === 'all' || item.categorySlug === categoryFilter;
  const matchesUpdated = (item) => updatedFilter === 'all' || (item.updatedAt && item.updatedAt.endsWith('/09/2026'));
  const filteredProducts = products.filter((p) =>
    (!term || p.name.toLowerCase().includes(term) || p.summary.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term)) && matchesGroup(p) && matchesCategory(p) && (minScore === 'all' || p.overallScore >= Number(minScore)) && matchesUpdated(p)
  );

  const filteredRankings = rankings.filter(
    (r) => (!term || r.title.toLowerCase().includes(term) || r.intro.toLowerCase().includes(term)) && matchesGroup(r) && matchesUpdated(r)
  );

  const filteredGuides = guides.filter(
    (g) => (!term || g.title.toLowerCase().includes(term) || g.excerpt.toLowerCase().includes(term)) && matchesGroup(g) && matchesUpdated(g)
  );

  const filteredComparisons = comparisons.filter(
    (c) => (!term || c.title.toLowerCase().includes(term)) && matchesGroup(c) && matchesUpdated(c)
  );

  const totalCount = filteredProducts.length + filteredRankings.length + filteredGuides.length + filteredComparisons.length;
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(Math.max(filteredProducts.length, filteredRankings.length, filteredGuides.length, filteredComparisons.length) / pageSize));
  const pageSlice = (items) => items.slice((page - 1) * pageSize, page * pageSize);
  const resetFilters = () => { setGroupFilter('all'); setCategoryFilter('all'); setMinScore('all'); setUpdatedFilter('all'); setPage(1); };

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      // Breadcrumb
      h(Breadcrumb, { items: [{ name: 'Tìm kiếm' }] }),

      // Search Header Input
      h(
        'div',
        { className: 'max-w-3xl mx-auto space-y-4 text-center' },
        h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Tìm Kiếm Sản Phẩm & Bài Đánh Giá'),
        h(
          'div',
          { className: 'relative flex items-center bg-white border border-slate-300 rounded-md p-1.5 focus-within:ring-2 focus-within:ring-blue-500 shadow-sm' },
          h(
            'svg',
            { className: 'w-5 h-5 text-slate-400 ml-3 pointer-events-none', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
          ),
          h('input', {
            type: 'text',
            value: searchTerm,
            onChange: (e) => { setSearchTerm(e.target.value); setPage(1); },
            placeholder: 'Nhập tên sản phẩm, thương hiệu hoặc chủ đề...',
            className: 'w-full pl-3 pr-4 py-2.5 text-base bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400'
          }),
          searchTerm &&
            h(
              'button',
              {
                onClick: () => setSearchTerm(''),
                className: 'mr-2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded w-5 h-5 flex items-center justify-center'
              },
              '✕'
            )
        )
      ),

      // Advanced filters
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-md p-4 shadow-sm flex flex-col lg:flex-row gap-3 lg:items-end' },
        h('div', { className: 'grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1' },
          h('label', { className: 'text-xs font-semibold text-slate-600 space-y-1' }, 'Nhóm', h('select', { value: groupFilter, onChange: (e) => { setGroupFilter(e.target.value); setPage(1); }, className: 'block w-full rounded border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs' }, h('option', { value: 'all' }, 'Tất cả'), h('option', { value: 'vat-ly' }, 'Vật lý'), h('option', { value: 'so' }, 'Sản phẩm số'))),
          h('label', { className: 'text-xs font-semibold text-slate-600 space-y-1' }, 'Danh mục', h('select', { value: categoryFilter, onChange: (e) => { setCategoryFilter(e.target.value); setPage(1); }, className: 'block w-full rounded border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs' }, h('option', { value: 'all' }, 'Mọi danh mục'), categories.map((category) => h('option', { key: category.id, value: category.slug }, category.name)))),
          h('label', { className: 'text-xs font-semibold text-slate-600 space-y-1' }, 'Điểm tối thiểu', h('select', { value: minScore, onChange: (e) => { setMinScore(e.target.value); setPage(1); }, className: 'block w-full rounded border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs' }, h('option', { value: 'all' }, 'Mọi mức điểm'), h('option', { value: '9' }, 'Từ 9.0'), h('option', { value: '8' }, 'Từ 8.0'))),
          h('label', { className: 'text-xs font-semibold text-slate-600 space-y-1' }, 'Cập nhật', h('select', { value: updatedFilter, onChange: (e) => { setUpdatedFilter(e.target.value); setPage(1); }, className: 'block w-full rounded border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs' }, h('option', { value: 'all' }, 'Mọi thời điểm'), h('option', { value: 'september' }, 'Tháng 09/2026')))
        ),
        h('button', { type: 'button', onClick: resetFilters, className: 'px-3 py-2 text-xs font-bold text-slate-600 hover:text-blue-600' }, 'Xóa bộ lọc')
      ),

      // Filter Tabs
      h(
        'div',
        { className: 'flex items-center justify-center flex-wrap gap-2 border-b border-slate-200 pb-4 text-xs sm:text-sm font-semibold' },
        [
          { id: 'all', label: `Tất cả (${totalCount})` },
          { id: 'product', label: `Sản phẩm (${filteredProducts.length})` },
          { id: 'ranking', label: `Bảng xếp hạng (${filteredRankings.length})` },
          { id: 'guide', label: `Hướng dẫn (${filteredGuides.length})` },
          { id: 'comparison', label: `So sánh (${filteredComparisons.length})` }
        ].map((tab) =>
          h(
            'button',
            {
              key: tab.id,
              onClick: () => setActiveTab(tab.id),
              className: `px-4 py-2 rounded transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`
            },
            tab.label
          )
        )
      ),

      // Search Results List
      h(
        'div',
        { className: 'space-y-4' },
        totalCount === 0
          ? h(
              'div',
              { className: 'text-center py-16 space-y-3 bg-white rounded-md border border-slate-200 shadow-sm' },
              h('div', { className: 'text-4xl' }, '🔍'),
              h('h3', { className: 'text-lg font-bold text-slate-800' }, 'Không tìm thấy kết quả phù hợp'),
              h('p', { className: 'text-sm text-slate-500 max-w-md mx-auto' }, 'Hãy thử tìm kiếm với các từ khóa phổ biến: nồi chiên, tai nghe, laptop, AI, VPN hoặc duyệt qua menu danh mục.')
            )
          : h(
              'div',
              { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
              // Products
              (activeTab === 'all' || activeTab === 'product') &&
                filteredProducts.map((p, idx) =>
                  h(
                    'a',
                    {
                      key: `prod-${idx}`,
                      href: `/review/${p.slug}`,
                      className: 'flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all group shadow-xs'
                    },
                    h('img', { src: p.image, alt: p.name, className: 'w-16 h-16 rounded object-cover border border-slate-100 flex-shrink-0' }),
                    h(
                      'div',
                      { className: 'flex-1 min-w-0' },
                      h('span', { className: 'inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded text-[10px] font-bold uppercase tracking-wider' }, 'Sản phẩm'),
                      h('h4', { className: 'font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-1' }, p.name),
                      h('p', { className: 'text-xs text-slate-500 line-clamp-1' }, p.summary),
                      h('div', { className: 'text-xs font-extrabold text-slate-900 mt-1' }, `${p.overallScore}/10 • ${p.priceRef}`)
                    )
                  )
                ),

              // Rankings
              (activeTab === 'all' || activeTab === 'ranking') &&
                filteredRankings.map((r, idx) =>
                  h(
                    'a',
                    {
                      key: `rank-${idx}`,
                      href: `/top/${r.slug}`,
                      className: 'flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all group shadow-xs'
                    },
                    h('div', { className: 'w-12 h-12 rounded bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0' },
                      h('svg', { className: 'w-6 h-6 text-amber-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.75 },
                        h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.004 0V4.5a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 008.625 4.5v9.75' })
                      )
                    ),
                    h(
                      'div',
                      { className: 'flex-1 min-w-0' },
                      h('span', { className: 'inline-flex items-center px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded text-[10px] font-bold uppercase tracking-wider' }, 'Bảng xếp hạng Top 10'),
                      h('h4', { className: 'font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-1' }, r.title),
                      h('p', { className: 'text-xs text-slate-500 line-clamp-1' }, r.intro)
                    )
                  )
                ),

              // Guides
              (activeTab === 'all' || activeTab === 'guide') &&
                filteredGuides.map((g, idx) =>
                  h(
                    'a',
                    {
                      key: `guide-${idx}`,
                      href: `/huong-dan/${g.slug}`,
                      className: 'flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all group shadow-xs'
                    },
                    h('div', { className: 'w-12 h-12 rounded bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0' },
                      h('svg', { className: 'w-6 h-6 text-sky-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.75 },
                        h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' })
                      )
                    ),
                    h(
                      'div',
                      { className: 'flex-1 min-w-0' },
                      h('span', { className: 'inline-flex items-center px-2 py-0.5 bg-sky-50 text-sky-800 border border-sky-200 rounded text-[10px] font-bold uppercase tracking-wider' }, 'Hướng dẫn chọn mua'),
                      h('h4', { className: 'font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-1' }, g.title),
                      h('p', { className: 'text-xs text-slate-500 line-clamp-1' }, g.excerpt)
                    )
                  )
                ),

              // Comparisons
              (activeTab === 'all' || activeTab === 'comparison') &&
                filteredComparisons.map((c, idx) =>
                  h(
                    'a',
                    {
                      key: `comp-${idx}`,
                      href: `/so-sanh/${c.slug}`,
                      className: 'flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all group shadow-xs'
                    },
                    h('div', { className: 'w-12 h-12 rounded bg-indigo-50 border border-indigo-200 flex items-center justify-center flex-shrink-0' },
                      h('svg', { className: 'w-6 h-6 text-indigo-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.75 },
                        h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5' })
                      )
                    ),
                    h(
                      'div',
                      { className: 'flex-1 min-w-0' },
                      h('span', { className: 'inline-flex items-center px-2 py-0.5 bg-indigo-50 text-indigo-800 border border-indigo-200 rounded text-[10px] font-bold uppercase tracking-wider' }, 'So sánh sản phẩm'),
                      h('h4', { className: 'font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-1' }, c.title),
                      h('p', { className: 'text-xs text-slate-500 line-clamp-1' }, c.summaryWinner)
                    )
                  )
                )
            )
      )
    ),
    h(Footer, null)
  );
}
