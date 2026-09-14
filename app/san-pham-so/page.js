'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { categories, products, rankings, guides } from '../../data/mockData';

const h = React.createElement;

export default function DigitalHubPage() {
  const digitalCategories = categories.filter((c) => c.group === 'so');
  const digitalProducts = products.filter((p) => p.type === 'so');
  const digitalRankings = rankings.filter((r) => r.group === 'so');
  const digitalGuides = guides.filter((g) => g.type === 'so');

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full space-y-12' },
      // Breadcrumb
      h(Breadcrumb, { items: [{ name: 'Sản phẩm số & Phần mềm' }] }),

      // Hub Hero
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm space-y-4' },
        h(
          'div',
          { className: 'inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-purple-600' }),
          'Trung Tâm Đánh Giá Phần Mềm & Dịch Vụ Số'
        ),
        h('h1', { className: 'text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight' }, 'Công Cụ AI, Nền Tảng SaaS, Cloud & Bảo Mật'),
        h('p', { className: 'text-slate-600 max-w-2xl leading-relaxed text-sm sm:text-base text-justify' }, 'Tổng hợp các công cụ trí tuệ nhân tạo, phần mềm quản lý công việc và dịch vụ đám mây hàng đầu giúp nâng tầm hiệu suất làm việc của cá nhân và doanh nghiệp.')
      ),

      // Categories Grid
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Danh mục dịch vụ số'),
        h(
          'div',
          { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
          digitalCategories.map((cat, idx) =>
            h(
              'div',
              { key: idx, className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-purple-400 transition-all space-y-3' },
              h('h3', { className: 'font-bold text-lg text-slate-900' }, cat.name),
              h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, cat.desc),
              h(
                'div',
                { className: 'pt-2 flex flex-wrap gap-1.5' },
                cat.subcategories.map((sub, sIdx) =>
                  h(
                    'a',
                    {
                      key: sIdx,
                      href: `/${cat.slug}/${sub.slug}`,
                      className: 'text-[11px] font-semibold px-2.5 py-1 bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-700 rounded transition-colors'
                    },
                    sub.name
                  )
                )
              )
            )
          )
        )
      ),

      // Top 10 Digital Rankings
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Bảng xếp hạng phần mềm & AI'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
          digitalRankings.map((rank, idx) =>
            h(
              'a',
              {
                key: idx,
                href: `/top/${rank.slug}`,
                className: 'block p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-purple-500 transition-all group'
              },
              h(
                'span',
                { className: 'inline-block text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 rounded uppercase tracking-wider' },
                rank.categoryName
              ),
              h('h3', { className: 'text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-purple-600 transition-colors' }, rank.title),
              h('p', { className: 'text-xs text-slate-600 line-clamp-2 text-justify' }, rank.intro),
              h('div', { className: 'mt-4 text-xs font-bold text-purple-600 inline-flex items-center gap-1' }, 'Xem Bảng Xếp Hạng Chi Tiết →')
            )
          )
        )
      ),

      // Featured Digital Products
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Sản phẩm số nổi bật'),
        h(
          'div',
          { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' },
          digitalProducts.map((prod, idx) =>
            h(
              'a',
              {
                key: idx,
                href: `/review/${prod.slug}`,
                className: 'flex flex-col bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all group'
              },
              h('img', { src: prod.image, alt: prod.name, className: 'w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' }),
              h(
                'div',
                { className: 'p-5 flex-1 flex flex-col justify-between space-y-3' },
                h(
                  'div',
                  null,
                  h(
                    'div',
                    { className: 'flex justify-between items-center text-xs mb-1.5' },
                    h('span', { className: 'font-semibold text-slate-500' }, prod.brand),
                    h('span', { className: 'px-2 py-0.5 bg-purple-50 text-purple-700 font-extrabold text-xs rounded border border-purple-200/60' }, `${prod.overallScore}/10`)
                  ),
                  h('h3', { className: 'font-bold text-slate-900 text-base group-hover:text-purple-600 transition-colors' }, prod.name),
                  h('p', { className: 'text-xs text-slate-600 line-clamp-2 mt-1 text-justify' }, prod.summary)
                ),
                h(
                  'div',
                  { className: 'pt-3 border-t border-slate-100 flex items-center justify-between text-xs' },
                  h('span', { className: 'font-bold text-slate-900' }, prod.priceRef),
                  h('span', { className: 'text-purple-600 font-semibold' }, 'Xem chi tiết →')
                )
              )
            )
          )
        )
      ),

      // Buying Guides
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Hướng dẫn lựa chọn công nghệ'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
          digitalGuides.map((guide, idx) =>
            h(
              'a',
              {
                key: idx,
                href: `/huong-dan/${guide.slug}`,
                className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:border-purple-300 transition-all block'
              },
              h('h3', { className: 'font-bold text-base text-slate-900 mb-2' }, guide.title),
              h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, guide.excerpt),
              h('span', { className: 'text-xs font-semibold text-purple-600 inline-block mt-3' }, 'Đọc toàn bộ cẩm nang →')
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
