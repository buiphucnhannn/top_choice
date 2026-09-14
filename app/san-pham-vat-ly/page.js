'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { categories, products, rankings, guides } from '../../data/mockData';

const h = React.createElement;

export default function PhysicalHubPage() {
  const physicalCategories = categories.filter((c) => c.group === 'vat-ly');
  const physicalProducts = products.filter((p) => p.type === 'vat-ly');
  const physicalRankings = rankings.filter((r) => r.group === 'vat-ly');
  const physicalGuides = guides.filter((g) => g.type === 'vat-ly');

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      // Breadcrumb
      h(Breadcrumb, { items: [{ name: 'Sản phẩm vật lý' }] }),

      // Hub Hero Card (Distance to breadcrumb matches header-to-breadcrumb)
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-10 md:p-12 shadow-sm space-y-4' },
        h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Thiết Bị Điện Tử, Đồ Gia Dụng & Phong Cách Sống'),
        h('p', { className: 'text-slate-600 max-w-3xl leading-relaxed text-sm sm:text-base md:text-lg text-justify' }, 'Khám phá các bài thử nghiệm thực tế, bảng xếp hạng Top 10 và hướng dẫn chọn mua đồ dùng gia đình, thiết bị công nghệ với thông tin giá cập nhật chính xác.')
      ),

      // Remaining Sections Wrapper
      h(
        'div',
        { className: 'space-y-12 pt-6' },

        // Categories Grid
        h(
          'section',
          { className: 'space-y-6' },
          h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Danh mục sản phẩm chính'),
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
            physicalCategories.map((cat, idx) =>
              h(
                'div',
                { key: idx, className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 transition-all space-y-3.5 flex flex-col justify-between' },
                h(
                  'div',
                  { className: 'space-y-2' },
                  h(
                    'h3',
                    { className: 'font-bold text-lg text-slate-900' },
                    h(
                      'a',
                      {
                        href: `/san-pham-vat-ly/${cat.slug}`,
                        className: 'hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 group'
                      },
                      cat.name,
                      h('span', { className: 'text-xs text-blue-500 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all' }, '→')
                    )
                  ),
                  h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, cat.desc)
                ),
                h(
                  'div',
                  { className: 'pt-2 flex flex-wrap gap-2' },
                  cat.subcategories.map((sub, sIdx) =>
                    h(
                      'a',
                      {
                        key: sIdx,
                        href: `/${cat.slug}/${sub.slug}`,
                        className: 'text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-md transition-all shadow-xs'
                      },
                      sub.name
                    )
                  )
                )
              )
            )
          )
        ),

      // Top 10 Rankings in Physical Hub
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Bảng xếp hạng nổi bật'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
          physicalRankings.map((rank, idx) =>
            h(
              'a',
              {
                key: idx,
                href: `/top/${rank.slug}`,
                className: 'block p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-blue-500 transition-all group'
              },
              h(
                'span',
                { className: 'inline-block text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded uppercase tracking-wider' },
                rank.categoryName
              ),
              h('h3', { className: 'text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors' }, rank.title),
              h('p', { className: 'text-xs text-slate-600 line-clamp-2 text-justify' }, rank.intro),
              h('div', { className: 'mt-4 text-xs font-bold text-blue-600 inline-flex items-center gap-1' }, 'Xem Bảng Xếp Hạng Chi Tiết →')
            )
          )
        )
      ),

      // Featured Products Grid
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Sản phẩm đánh giá cao'),
        h(
          'div',
          { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' },
          physicalProducts.map((prod, idx) =>
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
                    h('span', { className: 'px-2 py-0.5 bg-blue-50 text-blue-700 font-extrabold text-xs rounded border border-blue-200/60' }, `${prod.overallScore}/10`)
                  ),
                  h('h3', { className: 'font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors' }, prod.name),
                  h('p', { className: 'text-xs text-slate-600 line-clamp-2 mt-1 text-justify' }, prod.summary)
                ),
                h(
                  'div',
                  { className: 'pt-3 border-t border-slate-100 flex items-center justify-between text-xs' },
                  h('span', { className: 'font-bold text-slate-900' }, prod.priceRef),
                  h('span', { className: 'text-blue-600 font-semibold' }, 'Xem review →')
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
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Hướng dẫn chọn mua'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
          physicalGuides.map((guide, idx) =>
            h(
              'a',
              {
                key: idx,
                href: `/huong-dan/${guide.slug}`,
                className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:border-blue-300 transition-all block'
              },
              h('h3', { className: 'font-bold text-base text-slate-900 mb-2' }, guide.title),
              h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, guide.excerpt),
              h('span', { className: 'text-xs font-semibold text-blue-600 inline-block mt-3' }, 'Đọc toàn bộ hướng dẫn →')
            )
          )
        )
      )
    )
  ),
  h(Footer, null)
);
}
