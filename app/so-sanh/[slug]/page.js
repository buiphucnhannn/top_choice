import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { comparisons, products } from '../../../data/mockData';

const h = React.createElement;

export function generateMetadata({ params }) {
  const comparison = comparisons.find((item) => item.slug === params.slug);
  if (!comparison) return { title: 'Không tìm thấy trang so sánh' };
  return { title: comparison.title, description: comparison.summaryWinner };
}

export default function ComparisonPage({ params }) {
  const { slug } = params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) notFound();
  const prodA = products.find((p) => p.id === comp.productAId) || products[0];
  const prodB = products.find((p) => p.id === comp.productBId) || products[1];

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      // Breadcrumb
      h(Breadcrumb, {
        items: [
          { name: 'So sánh sản phẩm', href: '/so-sanh' },
          { name: `${prodA.name} vs ${prodB.name}` }
        ]
      }),

      // Comparison Header
      h(
        'header',
        { className: 'text-center max-w-4xl mx-auto space-y-4' },
        h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, comp.title),
        h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed text-justify' }, comp.summaryWinner)
      ),

      // Side by side Cards
      h(
        'section',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch' },
        // Product A
        h(
          'div',
          {
            className: `relative p-6 sm:p-7 rounded-xl border-2 transition-all flex flex-col justify-between space-y-4 ${
              comp.winnerId === prodA.id
                ? 'border-amber-400 bg-white shadow-xl ring-4 ring-amber-400/20'
                : 'border-slate-200 bg-white shadow-sm'
            }`
          },
          h(
            'div',
            { className: 'space-y-4' },
            comp.winnerId === prodA.id
              ? h(
                  'div',
                  { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md' },
                  h('span', { className: 'text-sm' }, '👑'),
                  'CHIẾN THẮNG TỔNG THỂ'
                )
              : h(
                  'div',
                  { className: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-xs uppercase tracking-wider' },
                  'ĐÁNH GIÁ ĐỐI ĐẦU'
                ),
            h('img', { src: prodA.image, alt: prodA.name, className: 'w-full h-56 object-cover rounded-lg border border-slate-100 bg-white shadow-xs' }),
            h('div', { className: 'flex justify-between items-baseline gap-2' },
              h('h2', { className: 'text-2xl font-bold text-slate-900' }, prodA.name),
              h('span', { className: `text-2xl font-black ${comp.winnerId === prodA.id ? 'text-amber-600' : 'text-blue-600'}` }, `${prodA.overallScore}/10`)
            ),
            h('div', { className: 'text-sm font-semibold text-slate-700' }, `Giá tham khảo: ${prodA.priceRef}`),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, prodA.summary)
          ),
          h('div', { className: 'pt-2 border-t border-slate-100' },
            h('a', { href: `/review/${prodA.slug}`, className: 'inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline' }, `Đọc review đầy đủ của ${prodA.name} →`)
          )
        ),

        // Product B
        h(
          'div',
          {
            className: `relative p-6 sm:p-7 rounded-xl border-2 transition-all flex flex-col justify-between space-y-4 ${
              comp.winnerId === prodB.id
                ? 'border-amber-400 bg-white shadow-xl ring-4 ring-amber-400/20'
                : 'border-slate-200 bg-white shadow-sm'
            }`
          },
          h(
            'div',
            { className: 'space-y-4' },
            comp.winnerId === prodB.id
              ? h(
                  'div',
                  { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md' },
                  h('span', { className: 'text-sm' }, '👑'),
                  'CHIẾN THẮNG TỔNG THỂ'
                )
              : h(
                  'div',
                  { className: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-xs uppercase tracking-wider' },
                  'ĐÁNH GIÁ ĐỐI ĐẦU'
                ),
            h('img', { src: prodB.image, alt: prodB.name, className: 'w-full h-56 object-cover rounded-lg border border-slate-100 bg-white shadow-xs' }),
            h('div', { className: 'flex justify-between items-baseline gap-2' },
              h('h2', { className: 'text-2xl font-bold text-slate-900' }, prodB.name),
              h('span', { className: `text-2xl font-black ${comp.winnerId === prodB.id ? 'text-amber-600' : 'text-blue-600'}` }, `${prodB.overallScore}/10`)
            ),
            h('div', { className: 'text-sm font-semibold text-slate-700' }, `Giá tham khảo: ${prodB.priceRef}`),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, prodB.summary)
          ),
          h('div', { className: 'pt-2 border-t border-slate-100' },
            h('a', { href: `/review/${prodB.slug}`, className: 'inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline' }, `Đọc review đầy đủ của ${prodB.name} →`)
          )
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
        { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-sm' },
        h('h3', { className: 'text-2xl font-bold tracking-tight text-slate-900' }, '🎯 Kết luận biên tập: Bạn nên mua sản phẩm nào?'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
          h(
            'div',
            { className: 'bg-blue-50/50 p-5 rounded-md border border-blue-200/80 space-y-2' },
            h('h4', { className: 'text-base font-bold text-blue-700' }, `Chọn ${prodA.name} nếu:`),
            h('p', { className: 'text-xs sm:text-sm text-slate-700 leading-relaxed text-justify' }, comp.verdict.chooseAIf)
          ),
          h(
            'div',
            { className: 'bg-indigo-50/50 p-5 rounded-md border border-indigo-200/80 space-y-2' },
            h('h4', { className: 'text-base font-bold text-indigo-700' }, `Chọn ${prodB.name} nếu:`),
            h('p', { className: 'text-xs sm:text-sm text-slate-700 leading-relaxed text-justify' }, comp.verdict.chooseBIf)
          )
        )
      )
    ),
    h(Footer, null)
  );
}
