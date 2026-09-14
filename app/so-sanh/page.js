'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { comparisons, products } from '../../data/mockData';

const h = React.createElement;

export default function ComparisonsArchivePage() {
  const [filter, setFilter] = useState('all');

  const filteredComparisons = comparisons.filter((c) => {
    if (filter === 'all') return true;
    const prodA = products.find((p) => p.id === c.productAId);
    return prodA && prodA.type === filter;
  });

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      h(Breadcrumb, { items: [{ name: 'So sánh sản phẩm' }] }),
      h(
        'header',
        { className: 'space-y-4' },
        h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'So Sánh Sản Phẩm Đối Đầu Trực Diện'),
        h('p', { className: 'text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed text-justify' }, 'Các bài phân tích, đo đạc thông số và đối đầu trực diện giữa các thiết bị và phần mềm hàng đầu giúp bạn đưa ra quyết định mua sắm tối ưu nhất.')
      ),

      // Filter tabs
      h(
        'div',
        { className: 'flex items-center gap-2 border-b border-slate-200 pb-4 text-xs sm:text-sm font-semibold' },
        [
          { id: 'all', label: `Tất cả (${comparisons.length})` },
          { id: 'vat-ly', label: `Sản phẩm vật lý (${comparisons.filter((c) => products.find((p) => p.id === c.productAId)?.type === 'vat-ly').length})` },
          { id: 'so', label: `Công cụ số & AI (${comparisons.filter((c) => products.find((p) => p.id === c.productAId)?.type === 'so').length})` }
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

      // Comparisons Grid
      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6' },
        filteredComparisons.map((comp) => {
          const prodA = products.find((p) => p.id === comp.productAId) || products[0];
          const prodB = products.find((p) => p.id === comp.productBId) || products[1];
          const winnerProd = comp.winnerId === prodA.id ? prodA : prodB;

          return h(
            'a',
            {
              key: comp.id,
              href: `/so-sanh/${comp.slug}`,
              className: 'group bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all p-6 space-y-5 block'
            },
            // Duel images header
            h(
              'div',
              { className: 'grid grid-cols-2 gap-3 relative' },
              h(
                'div',
                { className: 'relative rounded-lg overflow-hidden border border-slate-100 bg-slate-50' },
                h('img', { src: prodA.image, alt: prodA.name, className: 'w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300' }),
                h('div', { className: 'absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2.5 text-white font-bold text-xs truncate' }, prodA.name)
              ),
              h(
                'div',
                { className: 'relative rounded-lg overflow-hidden border border-slate-100 bg-slate-50' },
                h('img', { src: prodB.image, alt: prodB.name, className: 'w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300' }),
                h('div', { className: 'absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2.5 text-white font-bold text-xs truncate' }, prodB.name)
              ),
              // Center VS Badge
              h(
                'div',
                { className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center shadow-lg border-2 border-white' },
                'VS'
              )
            ),

            // Text Info
            h(
              'div',
              { className: 'space-y-2.5' },
              h(
                'div',
                { className: 'flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-flex' },
                h('span', null, '👑'),
                `Chiến thắng: ${winnerProd.name}`
              ),
              h('h3', { className: 'text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug' }, comp.title),
              h('p', { className: 'text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 text-justify' }, comp.summaryWinner)
            ),

            // Card Footer
            h(
              'div',
              { className: 'pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold' },
              h('span', { className: 'text-slate-500' }, `${comp.matrix?.length || 4} tiêu chí đối đầu`),
              h('span', { className: 'text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1' }, 'Xem so sánh chi tiết →')
            )
          );
        })
      )
    ),
    h(Footer, null)
  );
}
