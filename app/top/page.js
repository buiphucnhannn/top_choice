'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { rankings } from '../../data/mockData';

const h = React.createElement;

export default function RankingsArchivePage() {
  const [filter, setFilter] = useState('all');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const grp = params.get('group') || params.get('nhom');
      if (grp === 'so' || grp === 'san-pham-so') {
        setFilter('so');
      } else if (grp === 'vat-ly' || grp === 'san-pham-vat-ly') {
        setFilter('vat-ly');
      }
    }
  }, []);

  const filteredRankings = rankings.filter((r) => {
    if (filter === 'all') return true;
    return r.group === filter;
  });

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      h(Breadcrumb, { items: [{ name: 'Bảng xếp hạng' }] }),
      h(
        'header',
        { className: 'space-y-4' },
        h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Bảng Xếp Hạng Sản Phẩm & Phần Mềm Tốt Nhất'),
        h('p', { className: 'text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed text-justify' }, 'Tất cả các bảng xếp hạng được xây dựng dựa trên kết quả kiểm tra thực tế, so sánh tính năng và đánh giá phản hồi người dùng bởi ban biên tập Top Choice.')
      ),

      // Filter tabs
      h(
        'div',
        { className: 'flex items-center gap-2 border-b border-slate-200 pb-4 text-xs sm:text-sm font-semibold' },
        [
          { id: 'all', label: `Tất cả (${rankings.length})` },
          { id: 'vat-ly', label: `Sản phẩm vật lý (${rankings.filter((r) => r.group === 'vat-ly').length})` },
          { id: 'so', label: `Sản phẩm số & AI (${rankings.filter((r) => r.group === 'so').length})` }
        ].map((tab) =>
          h(
            'button',
            {
              key: tab.id,
              onClick: () => setFilter(tab.id),
              className: `px-4 py-2 rounded transition-all ${
                filter === tab.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`
            },
            tab.label
          )
        )
      ),

      // Rankings Grid
      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
        filteredRankings.map((rank, idx) =>
          h(
            'article',
            {
              key: idx,
              className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between space-y-4'
            },
            h(
              'div',
              { className: 'space-y-2' },
              h(
                'div',
                { className: 'flex justify-between items-center text-xs' },
                h(
                  'span',
                  { className: 'inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded text-[11px] font-bold uppercase tracking-wider' },
                  rank.categoryName
                ),
                h('span', { className: 'text-slate-400' }, `Cập nhật: ${rank.updatedAt}`)
              ),
              h(
                'h2',
                { className: 'text-xl font-bold text-slate-900 leading-snug' },
                h('a', { href: `/top/${rank.slug}`, className: 'hover:text-blue-600 transition-colors' }, rank.title)
              ),
              h('p', { className: 'text-xs text-slate-600 line-clamp-3 leading-relaxed text-justify' }, rank.intro)
            ),
            h(
              'div',
              { className: 'pt-4 border-t border-slate-100 flex items-center justify-between' },
              h('span', { className: 'text-xs font-semibold text-slate-500' }, `${rank.items.length} sản phẩm xếp hạng`),
              h('a', { href: `/top/${rank.slug}`, className: 'text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1' }, 'Xem chi tiết bảng xếp hạng →')
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
