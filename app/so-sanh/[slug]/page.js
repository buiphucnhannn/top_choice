'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { comparisons, products } from '../../../data/mockData';

const h = React.createElement;

export default function ComparisonPage({ params }) {
  const { slug } = params;
  const comp = comparisons.find((c) => c.slug === slug) || comparisons[0];
  const prodA = products.find((p) => p.id === comp.productAId) || products[0];
  const prodB = products.find((p) => p.id === comp.productBId) || products[1];

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full space-y-10' },
      // Breadcrumb
      h(Breadcrumb, {
        items: [
          { name: 'So sánh sản phẩm', href: '#' },
          { name: `${prodA.name} vs ${prodB.name}` }
        ]
      }),

      // Comparison Header
      h(
        'header',
        { className: 'text-center max-w-3xl mx-auto space-y-3' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'So Sánh Đối Đầu Trực Diện'
        ),
        h('h1', { className: 'text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight' }, comp.title),
        h('p', { className: 'text-sm sm:text-base text-slate-600' }, comp.summaryWinner)
      ),

      // Side by side Cards
      h(
        'section',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
        // Product A
        h(
          'div',
          { className: `p-6 rounded-md border ${comp.winnerId === prodA.id ? 'border-blue-500 bg-blue-50/20 shadow-md ring-1 ring-blue-500/20' : 'border-slate-200 bg-white shadow-sm'} space-y-4` },
          comp.winnerId === prodA.id && h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white uppercase tracking-wider' }, '👑 Chiến Thắng Tổng Thể'),
          h('img', { src: prodA.image, alt: prodA.name, className: 'w-full h-56 object-cover rounded-md border border-slate-100 bg-white' }),
          h('div', { className: 'flex justify-between items-baseline' },
            h('h2', { className: 'text-2xl font-bold text-slate-900' }, prodA.name),
            h('span', { className: 'text-2xl font-black text-blue-600' }, `${prodA.overallScore}/10`)
          ),
          h('div', { className: 'text-sm font-semibold text-slate-700' }, `Giá tham khảo: ${prodA.priceRef}`),
          h('p', { className: 'text-xs text-slate-600 leading-relaxed' }, prodA.summary),
          h('a', { href: `/review/${prodA.slug}`, className: 'inline-block text-xs font-bold text-blue-600 hover:underline' }, 'Đọc review đầy đủ của sản phẩm A →')
        ),

        // Product B
        h(
          'div',
          { className: `p-6 rounded-md border ${comp.winnerId === prodB.id ? 'border-blue-500 bg-blue-50/20 shadow-md ring-1 ring-blue-500/20' : 'border-slate-200 bg-white shadow-sm'} space-y-4` },
          comp.winnerId === prodB.id && h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white uppercase tracking-wider' }, '👑 Chiến Thắng Tổng Thể'),
          h('img', { src: prodB.image, alt: prodB.name, className: 'w-full h-56 object-cover rounded-md border border-slate-100 bg-white' }),
          h('div', { className: 'flex justify-between items-baseline' },
            h('h2', { className: 'text-2xl font-bold text-slate-900' }, prodB.name),
            h('span', { className: 'text-2xl font-black text-blue-600' }, `${prodB.overallScore}/10`)
          ),
          h('div', { className: 'text-sm font-semibold text-slate-700' }, `Giá tham khảo: ${prodB.priceRef}`),
          h('p', { className: 'text-xs text-slate-600 leading-relaxed' }, prodB.summary),
          h('a', { href: `/review/${prodB.slug}`, className: 'inline-block text-xs font-bold text-blue-600 hover:underline' }, 'Đọc review đầy đủ của sản phẩm B →')
        )
      ),

      // Criteria Matrix Table
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm space-y-4 p-6 sm:p-8' },
        h('h3', { className: 'text-xl font-bold text-slate-900' }, '📊 Ma trận so sánh tiêu chí chi tiết'),
        h(
          'div',
          { className: 'overflow-x-auto' },
          h(
            'table',
            { className: 'w-full text-left text-sm border-collapse min-w-[580px]' },
            h(
              'thead',
              { className: 'bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase' },
              h(
                'tr',
                null,
                h('th', { className: 'py-3.5 px-4' }, 'Tiêu chí đánh giá'),
                h('th', { className: 'py-3.5 px-4' }, prodA.name),
                h('th', { className: 'py-3.5 px-4' }, prodB.name),
                h('th', { className: 'py-3.5 px-4 text-center w-28' }, 'Bên thắng')
              )
            ),
            h(
              'tbody',
              { className: 'divide-y divide-slate-100 text-xs sm:text-sm' },
              comp.matrix.map((row, idx) =>
                h(
                  'tr',
                  { key: idx, className: 'hover:bg-slate-50/70 transition-colors' },
                  h('td', { className: 'py-3.5 px-4 font-semibold text-slate-800' }, row.criterion),
                  h('td', { className: 'py-3.5 px-4 text-slate-600' }, row.productA),
                  h('td', { className: 'py-3.5 px-4 text-slate-600' }, row.productB),
                  h(
                    'td',
                    { className: 'py-3.5 px-4 text-center font-bold' },
                    row.winner === 'A'
                      ? h('span', { className: 'text-blue-600 bg-blue-50 px-2 py-0.5 rounded' }, prodA.name.split(' ')[0])
                      : row.winner === 'B'
                      ? h('span', { className: 'text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded' }, prodB.name.split(' ')[0])
                      : h('span', { className: 'text-slate-400' }, 'Hòa')
                  )
                )
              )
            )
          )
        )
      ),

      // Final Verdict Box
      h(
        'section',
        { className: 'bg-slate-900 text-white rounded-lg p-8 space-y-6 shadow-md' },
        h('h3', { className: 'text-2xl font-bold tracking-tight' }, '🎯 Kết luận biên tập: Bạn nên mua sản phẩm nào?'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
          h(
            'div',
            { className: 'bg-slate-800/80 p-5 rounded-md border border-slate-700 space-y-2' },
            h('h4', { className: 'text-base font-bold text-blue-400' }, `Chọn ${prodA.name} nếu:`),
            h('p', { className: 'text-xs sm:text-sm text-slate-300 leading-relaxed' }, comp.verdict.chooseAIf)
          ),
          h(
            'div',
            { className: 'bg-slate-800/80 p-5 rounded-md border border-slate-700 space-y-2' },
            h('h4', { className: 'text-base font-bold text-indigo-400' }, `Chọn ${prodB.name} nếu:`),
            h('p', { className: 'text-xs sm:text-sm text-slate-300 leading-relaxed' }, comp.verdict.chooseBIf)
          )
        )
      )
    ),
    h(Footer, null)
  );
}
