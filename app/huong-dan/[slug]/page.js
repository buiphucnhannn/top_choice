'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { guides, authors, products } from '../../../data/mockData';

const h = React.createElement;

export default function GuideDetailPage({ params }) {
  const { slug } = params;
  const guide = guides.find((g) => g.slug === slug) || guides[0];
  const author = authors.find((a) => a.id === guide.authorId) || authors[0];
  const suggestedProds = products.filter((p) => guide.suggestedProducts?.includes(p.id));

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      // Breadcrumb
      h(Breadcrumb, {
        items: [
          { name: 'Hướng dẫn chọn mua', href: '#' },
          { name: guide.title }
        ]
      }),

      // Header
      h(
        'header',
        { className: 'space-y-4' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'Cẩm Nang Người Tiêu Dùng'
        ),
        h('h1', { className: 'text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight' }, guide.title),
        h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed' }, guide.excerpt),
        // Author info
        h(
          'div',
          { className: 'flex items-center gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500' },
          h('img', { src: author.avatar, alt: author.name, className: 'w-10 h-10 rounded-full object-cover border border-slate-200' }),
          h(
            'div',
            null,
            h('div', { className: 'font-semibold text-slate-900' }, author.name),
            h('div', null, `${author.role} • Cập nhật: ${guide.updatedAt}`)
          )
        )
      ),

      // Table of Contents
      h(
        'nav',
        { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-2.5' },
        h('h3', { className: 'text-sm font-bold text-slate-900 uppercase tracking-wider' }, '📑 Mục lục nội dung'),
        h(
          'ul',
          { className: 'space-y-1.5 text-xs sm:text-sm text-blue-600 font-medium' },
          guide.sections.map((sec, idx) =>
            h('li', { key: idx }, h('a', { href: `#sec-${idx}`, className: 'hover:underline' }, sec.title))
          )
        )
      ),

      // Content Sections
      h(
        'article',
        { className: 'space-y-8 pt-2' },
        guide.sections.map((sec, idx) =>
          h(
            'section',
            { key: idx, id: `sec-${idx}`, className: 'space-y-3' },
            h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, sec.title),
            h('p', { className: 'text-sm sm:text-base text-slate-700 leading-relaxed' }, sec.content)
          )
        )
      ),

      // Suggested Products for this Guide
      suggestedProds.length > 0 &&
        h(
          'section',
          { className: 'pt-6 border-t border-slate-200 space-y-4' },
          h('h3', { className: 'text-xl font-bold text-slate-900' }, '💡 Sản phẩm tiêu biểu được khuyến nghị'),
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
            suggestedProds.map((prod, idx) =>
              h(
                'div',
                { key: idx, className: 'flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md shadow-sm' },
                h('img', { src: prod.image, alt: prod.name, className: 'w-16 h-16 rounded object-cover border border-slate-200 bg-white' }),
                h(
                  'div',
                  { className: 'flex-1 min-w-0' },
                  h('h4', { className: 'font-bold text-sm text-slate-900 truncate' }, prod.name),
                  h('div', { className: 'text-xs text-blue-600 font-extrabold' }, `${prod.overallScore}/10 - ${prod.priceRef}`),
                  h('a', { href: `/review/${prod.slug}`, className: 'text-xs text-slate-600 hover:text-blue-600 font-semibold block mt-1' }, 'Đọc review chi tiết →')
                )
              )
            )
          )
        )
    ),
    h(Footer, null)
  );
}
