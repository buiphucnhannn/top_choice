'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { rankings, products, authors } from '../../../data/mockData';

const h = React.createElement;

export default function RankingDetailPage({ params }) {
  const { slug } = params;
  const ranking = rankings.find((r) => r.slug === slug) || rankings[0];
  const author = authors.find((a) => a.id === ranking.authorId) || authors[0];

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      // Breadcrumb
      h(Breadcrumb, {
        items: [
          { name: ranking.group === 'vat-ly' ? 'Sản phẩm vật lý' : 'Sản phẩm số', href: ranking.group === 'vat-ly' ? '/san-pham-vat-ly' : '/san-pham-so' },
          { name: 'Bảng xếp hạng', href: '#' },
          { name: ranking.title }
        ]
      }),

      // Article Header
      h(
        'header',
        { className: 'space-y-4 max-w-4xl' },
        h(
          'div',
          { className: 'inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'Bảng xếp hạng độc lập 2026'
        ),
        h('h1', { className: 'text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight' }, ranking.title),
        h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed' }, ranking.intro),
        // Author info bar
        h(
          'div',
          { className: 'flex items-center gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100' },
          h('img', { src: author.avatar, alt: author.name, className: 'w-10 h-10 rounded-full object-cover border border-slate-200' }),
          h(
            'div',
            null,
            h('div', { className: 'font-semibold text-slate-800' }, author.name),
            h('div', null, `${author.role} • Cập nhật: ${ranking.updatedAt}`)
          )
        )
      ),

      // Quick Picks Section
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm' },
        h('h2', { className: 'text-lg font-bold text-slate-900' }, '🏆 Lựa chọn nhanh của biên tập viên'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
          ranking.quickPicks.bestOverall &&
            h(
              'div',
              { className: 'bg-slate-50 p-4 rounded-md border border-emerald-200/80 shadow-sm space-y-1.5' },
              h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100/80 text-emerald-800 uppercase tracking-wider' }, 'Tốt nhất tổng thể'),
              h('div', { className: 'font-bold text-slate-900 text-sm' }, ranking.quickPicks.bestOverall.name),
              h('p', { className: 'text-xs text-slate-600' }, ranking.quickPicks.bestOverall.reason)
            ),
          ranking.quickPicks.bestValue &&
            h(
              'div',
              { className: 'bg-slate-50 p-4 rounded-md border border-blue-200/80 shadow-sm space-y-1.5' },
              h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100/80 text-blue-800 uppercase tracking-wider' }, 'Giá trị tốt nhất'),
              h('div', { className: 'font-bold text-slate-900 text-sm' }, ranking.quickPicks.bestValue.name),
              h('p', { className: 'text-xs text-slate-600' }, ranking.quickPicks.bestValue.reason)
            ),
          (ranking.quickPicks.budgetPick || ranking.quickPicks.bestCreative) &&
            h(
              'div',
              { className: 'bg-slate-50 p-4 rounded-md border border-amber-200/80 shadow-sm space-y-1.5' },
              h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100/80 text-amber-800 uppercase tracking-wider' }, 'Lựa chọn đặc biệt'),
              h('div', { className: 'font-bold text-slate-900 text-sm' }, (ranking.quickPicks.budgetPick || ranking.quickPicks.bestCreative).name),
              h('p', { className: 'text-xs text-slate-600' }, (ranking.quickPicks.budgetPick || ranking.quickPicks.bestCreative).reason)
            )
        )
      ),

      // Detailed Ranking List
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Danh sách xếp hạng chi tiết'),
        h(
          'div',
          { className: 'space-y-6' },
          ranking.items.map((item, idx) => {
            const prod = products.find((p) => p.id === item.productId) || products[0];
            return h(
              'article',
              {
                key: idx,
                className: 'bg-white border border-slate-200 rounded-md p-6 shadow-sm hover:border-slate-300 transition-all space-y-5'
              },
              // Header row
              h(
                'div',
                { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100' },
                h(
                  'div',
                  { className: 'flex items-center gap-3' },
                  h(
                    'span',
                    { className: 'flex items-center justify-center w-8 h-8 rounded font-black text-sm bg-blue-600 text-white shadow-sm' },
                    item.rank
                  ),
                  h(
                    'div',
                    null,
                    h('span', { className: 'text-xs font-bold text-blue-600 uppercase tracking-wider mr-2' }, item.label),
                    h('h3', { className: 'text-xl font-bold text-slate-900' }, prod.name)
                  )
                ),
                h(
                  'div',
                  { className: 'text-left sm:text-right' },
                  h('div', { className: 'text-2xl font-black text-slate-900' }, `${prod.overallScore}/10`),
                  h('div', { className: 'text-xs text-slate-500 font-medium' }, `Giá tham khảo: ${prod.priceRef}`)
                )
              ),

              // Body content: image + rationale + pros/cons
              h(
                'div',
                { className: 'grid grid-cols-1 md:grid-cols-12 gap-6 items-start' },
                h(
                  'div',
                  { className: 'md:col-span-4' },
                  h('img', {
                    src: prod.image,
                    alt: prod.name,
                    className: 'w-full h-56 object-cover rounded-md border border-slate-200 bg-slate-50'
                  })
                ),
                h(
                  'div',
                  { className: 'md:col-span-8 space-y-4' },
                  h('p', { className: 'text-sm text-slate-700 leading-relaxed font-medium' }, item.rationale),
                  // Pros & Cons
                  h(
                    'div',
                    { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs' },
                    h(
                      'div',
                      { className: 'bg-emerald-50/70 border border-emerald-200/80 rounded p-3 space-y-1.5' },
                      h('div', { className: 'font-bold text-emerald-800 uppercase' }, '✓ Điểm nổi bật'),
                      h(
                        'ul',
                        { className: 'space-y-1 text-slate-700' },
                        prod.pros.slice(0, 3).map((pro, pIdx) => h('li', { key: pIdx }, `• ${pro}`))
                      )
                    ),
                    h(
                      'div',
                      { className: 'bg-rose-50/70 border border-rose-200/80 rounded p-3 space-y-1.5' },
                      h('div', { className: 'font-bold text-rose-800 uppercase' }, '✕ Cần lưu ý'),
                      h(
                        'ul',
                        { className: 'space-y-1 text-slate-700' },
                        prod.cons.slice(0, 2).map((con, cIdx) => h('li', { key: cIdx }, `• ${con}`))
                      )
                    )
                  ),
                  // Action buttons
                  h(
                    'div',
                    { className: 'pt-2 flex flex-wrap items-center gap-3' },
                    h(
                      'a',
                      {
                        href: `/review/${prod.slug}`,
                        className: 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded shadow-sm transition-colors'
                      },
                      'Đọc Review Chi Tiết →'
                    ),
                    h(
                      'a',
                      {
                        href: prod.officialUrl,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded transition-colors'
                      },
                      'Nguồn Chính Thức ↗'
                    )
                  )
                )
              )
            );
          })
        )
      ),

      // Methodology Section
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 space-y-3 shadow-sm' },
        h('h3', { className: 'text-lg font-bold text-slate-900' }, '📋 Phương pháp đánh giá & Tiêu chí xếp hạng'),
        h('p', { className: 'text-sm text-slate-600 leading-relaxed' }, ranking.methodology)
      )
    ),
    h(Footer, null)
  );
}
