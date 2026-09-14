'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { products, authors, categories } from '../../../data/mockData';

const h = React.createElement;

export default function ProductReviewPage({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug) || products[0];
  const category = categories.find((c) => c.slug === product.categorySlug) || categories[0];
  const author = authors[0];

  const [helpfulVotes, setHelpfulVotes] = useState(128);
  const [voted, setVoted] = useState(false);

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
          { name: product.type === 'vat-ly' ? 'Sản phẩm vật lý' : 'Sản phẩm số', href: product.type === 'vat-ly' ? '/san-pham-vat-ly' : '/san-pham-so' },
          { name: category.name, href: `/${category.slug}/${product.subCategorySlug || ''}` },
          { name: `Đánh giá ${product.name}` }
        ]
      }),

      // Product Hero Section
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
        // Left Column: Product Image
        h(
          'div',
          { className: 'lg:col-span-5' },
          h('img', {
            src: product.image,
            alt: product.name,
            className: 'w-full h-80 object-cover rounded-md border border-slate-200 shadow-sm bg-white'
          })
        ),
        // Right Column: Details & Overall Score
        h(
          'div',
          { className: 'lg:col-span-7 space-y-5' },
          h(
            'div',
            { className: 'flex items-center justify-between gap-4 flex-wrap' },
            h(
              'div',
              { className: 'inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200' },
              h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
              product.brand
            ),
            h(
              'div',
              { className: 'flex items-baseline gap-1 bg-slate-50 px-3.5 py-1.5 rounded-md border border-slate-200 shadow-xs' },
              h('span', { className: 'text-3xl font-black text-blue-600' }, product.overallScore),
              h('span', { className: 'text-xs font-bold text-slate-500' }, '/10 Điểm Đánh Giá')
            )
          ),
          h('h1', { className: 'text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight' }, `Đánh Giá Chi Tiết ${product.name}`),
          h('p', { className: 'text-base text-slate-600 leading-relaxed' }, product.summary),
          h(
            'div',
            { className: 'p-4 bg-slate-50 rounded-md border border-slate-200 flex items-center justify-between gap-4 flex-wrap' },
            h(
              'div',
              null,
              h('div', { className: 'text-xs text-slate-500 font-medium' }, 'Giá tham khảo chính thức'),
              h('div', { className: 'text-xl font-black text-slate-900' }, product.priceRef)
            ),
            h(
              'a',
              {
                href: product.officialUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded shadow-sm transition-colors'
              },
              'Xem Nơi Bán Tốt Nhất →'
            )
          )
        )
      ),

      // Score Breakdown & Pros/Cons Grid
      h(
        'section',
        { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8' },
        // Score Breakdown (6 cols)
        h(
          'div',
          { className: 'lg:col-span-6 bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-4' },
          h('h2', { className: 'text-xl font-bold text-slate-900' }, '📊 Đánh giá theo tiêu chí chi tiết'),
          h(
            'div',
            { className: 'space-y-3.5' },
            product.scores.map((s, idx) =>
              h(
                'div',
                { key: idx, className: 'space-y-1.5' },
                h(
                  'div',
                  { className: 'flex justify-between text-xs font-semibold' },
                  h('span', { className: 'text-slate-700' }, s.criterion),
                  h('span', { className: 'text-blue-600 font-bold' }, `${s.value}/10`)
                ),
                h(
                  'div',
                  { className: 'w-full h-2.5 bg-slate-100 rounded-sm overflow-hidden' },
                  h('div', {
                    className: 'h-full bg-blue-600 rounded-sm transition-all duration-500',
                    style: { width: `${(s.value / 10) * 100}%` }
                  })
                )
              )
            )
          )
        ),

        // Pros & Cons (6 cols)
        h(
          'div',
          { className: 'lg:col-span-6 bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-4 flex flex-col justify-between' },
          h('h2', { className: 'text-xl font-bold text-slate-900' }, 'Ưu điểm & Nhược điểm'),
          h(
            'div',
            { className: 'space-y-3 flex-1' },
            // Pros
            h(
              'div',
              { className: 'bg-emerald-50/70 border border-emerald-200/80 rounded p-4 space-y-2' },
              h('div', { className: 'text-xs font-bold text-emerald-800 uppercase tracking-wider' }, '✓ Điểm cộng nổi bật'),
              h(
                'ul',
                { className: 'space-y-1.5 text-xs sm:text-sm text-slate-800' },
                product.pros.map((p, pIdx) => h('li', { key: pIdx, className: 'flex items-start gap-1.5' }, h('span', { className: 'text-emerald-600 font-bold' }, '•'), p))
              )
            ),
            // Cons
            h(
              'div',
              { className: 'bg-rose-50/70 border border-rose-200/80 rounded p-4 space-y-2' },
              h('div', { className: 'text-xs font-bold text-rose-800 uppercase tracking-wider' }, '✕ Điểm cần cân nhắc'),
              h(
                'ul',
                { className: 'space-y-1.5 text-xs sm:text-sm text-slate-800' },
                product.cons.map((c, cIdx) => h('li', { key: cIdx, className: 'flex items-start gap-1.5' }, h('span', { className: 'text-rose-600 font-bold' }, '•'), c))
              )
            )
          )
        )
      ),

      // Technical Specifications Table
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-md p-6 sm:p-8 shadow-sm space-y-4' },
        h('h2', { className: 'text-xl font-bold text-slate-900' }, '⚙️ Thông số kỹ thuật & Chi tiết gói'),
        h(
          'div',
          { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
          Object.entries(product.specs).map(([key, value], idx) =>
            h(
              'div',
              { key: idx, className: 'flex justify-between p-3 bg-slate-50 rounded border border-slate-200 text-sm' },
              h('span', { className: 'text-slate-500 font-medium' }, key),
              h('span', { className: 'font-semibold text-slate-900 text-right' }, value)
            )
          )
        )
      ),

      // Reader Interaction & Helpful Feedback (FR06)
      h(
        'section',
        { className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4' },
        h(
          'div',
          { className: 'space-y-1 text-center sm:text-left' },
          h('div', { className: 'text-sm font-bold text-slate-900' }, 'Bài viết này có hữu ích với bạn không?'),
          h('div', { className: 'text-xs text-slate-500' }, '👁️ 4.250 lượt xem • ⏱️ 5 phút đọc • Đã kiểm duyệt nội dung')
        ),
        h(
          'div',
          { className: 'flex items-center gap-3' },
          h(
            'button',
            {
              disabled: voted,
              onClick: () => {
                if (!voted) {
                  setHelpfulVotes(helpfulVotes + 1);
                  setVoted(true);
                }
              },
              className: `px-4 py-2 text-xs font-bold rounded border transition-all flex items-center gap-1.5 ${
                voted
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 cursor-default'
                  : 'bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-700 border-slate-200 shadow-xs active:scale-95'
              }`
            },
            '👍 Hữu ích',
            h('span', { className: 'ml-1 px-1.5 py-0.2 bg-slate-100 rounded font-mono' }, helpfulVotes)
          ),
          voted && h('span', { className: 'text-xs text-emerald-600 font-semibold' }, 'Cảm ơn phản hồi của bạn!')
        )
      ),

      // Author & Editorial Verification Bar
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-md shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4' },
        h('img', { src: author.avatar, alt: author.name, className: 'w-12 h-12 rounded object-cover border border-slate-200 shadow-xs' }),
        h(
          'div',
          { className: 'space-y-1 text-center sm:text-left' },
          h(
            'div',
            { className: 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 border border-blue-200' },
            h('span', { className: 'w-1 h-1 rounded-full bg-blue-600' }),
            'Kiểm chứng độc lập'
          ),
          h('div', { className: 'font-bold text-slate-900' }, `Biên tập viên: ${author.name} • ${author.credentials}`),
          h('p', { className: 'text-xs text-slate-600' }, author.bio)
        )
      )
    ),
    h(Footer, null)
  );
}
