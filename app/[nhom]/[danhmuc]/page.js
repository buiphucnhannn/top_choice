'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { categories, products, rankings, guides } from '../../../data/mockData';

const h = React.createElement;

const allCategories = categories;

export default function SubCategoryPage({ params }) {
  const { nhom, danhmuc } = params;

  const isGroupNhom = nhom === 'san-pham-vat-ly' || nhom === 'san-pham-so' || nhom === 'vat-ly' || nhom === 'so';
  const defaultGroup = (nhom === 'san-pham-so' || nhom === 'so') ? 'so' : 'vat-ly';

  let currentCategory = null;
  let currentSub = null;
  let isSubcategoryView = false;

  if (isGroupNhom) {
    currentCategory = allCategories.find((c) => c.slug === danhmuc) || {
      name: danhmuc.replace(/-/g, ' ').toUpperCase(),
      slug: danhmuc,
      group: defaultGroup,
      desc: 'Khám phá các sản phẩm nổi bật và bảng xếp hạng độc lập mới nhất.',
      subcategories: []
    };
    currentSub = { name: currentCategory.name, slug: danhmuc };
  } else {
    currentCategory = allCategories.find((c) => c.slug === nhom) || allCategories[0];
    currentSub = currentCategory.subcategories?.find((s) => s.slug === danhmuc) || { name: danhmuc.replace(/-/g, ' '), slug: danhmuc };
    isSubcategoryView = true;
  }

  // Filter items: When viewing a subcategory, strictly match only products belonging to that subcategory
  let matchedProducts = [];
  if (isSubcategoryView) {
    matchedProducts = products.filter(
      (p) => p.subCategorySlug === danhmuc || (currentSub && p.subCategorySlug === currentSub.slug)
    );
  } else {
    matchedProducts = products.filter((p) => p.categorySlug === currentCategory.slug);
  }

  // Filter rankings: prioritize subcategory, fallback to category/group
  let matchedRankings = rankings.filter((r) => {
    if (isSubcategoryView) {
      return (
        r.slug.includes(danhmuc) ||
        (currentSub && r.slug.includes(currentSub.slug)) ||
        (r.title && r.title.toLowerCase().includes(currentSub.name.toLowerCase()))
      );
    }
    return r.categoryName === currentCategory.name;
  });
  if (matchedRankings.length === 0) {
    matchedRankings = rankings.filter((r) => r.group === currentCategory.group);
  }

  const groupLabel = currentCategory.group === 'vat-ly' ? 'Sản phẩm vật lý' : 'Sản phẩm số';
  const groupHref = currentCategory.group === 'vat-ly' ? '/san-pham-vat-ly' : '/san-pham-so';

  const breadcrumbItems = isSubcategoryView
    ? [
        { name: groupLabel, href: groupHref },
        { name: currentCategory.name, href: `${groupHref}/${currentCategory.slug}` },
        { name: currentSub.name }
      ]
    : [
        { name: groupLabel, href: groupHref },
        { name: currentCategory.name }
      ];

  const bannerDesc = isSubcategoryView
    ? `Tổng hợp các bài đánh giá chuyên sâu, thử nghiệm thực tế và bảng xếp hạng những sản phẩm ${currentSub.name.toLowerCase()} đáng mua nhất trên thị trường hiện nay.`
    : (currentCategory.desc || `Tổng hợp các bài đánh giá khách quan và bảng xếp hạng độc lập mới nhất.`);

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full space-y-10' },
      // Breadcrumb
      h(Breadcrumb, { items: breadcrumbItems }),

      // Header Banner
      h(
        'header',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-4' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          groupLabel
        ),
        h('h1', { className: 'text-2xl sm:text-3xl font-black text-slate-900 tracking-tight' }, `Đánh Giá & Xếp Hạng: ${currentSub.name}`),
        h('p', { className: 'text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed text-justify' }, bannerDesc),

        // Subcategories Chips
        currentCategory.subcategories && currentCategory.subcategories.length > 0 &&
          h(
            'div',
            { className: 'flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100' },
            h('span', { className: 'text-xs text-slate-500 font-semibold mr-1' }, 'Nhánh sản phẩm:'),
            currentCategory.subcategories.map((sub, sIdx) =>
              h(
                'a',
                {
                  key: sIdx,
                  href: `/${currentCategory.slug}/${sub.slug}`,
                  className: `px-2.5 py-1 rounded text-xs font-semibold transition-all border ${
                    sub.slug === danhmuc
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 text-slate-700 border-slate-200'
                  }`
                },
                sub.name
              )
            )
          )
      ),

      // Matched Products
      h(
        'section',
        { className: 'space-y-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Sản phẩm nổi bật trong phân khúc'),
        matchedProducts.length > 0
          ? h(
              'div',
              { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' },
              matchedProducts.map((prod, idx) =>
                h(
                  'a',
                  {
                    key: idx,
                    href: `/review/${prod.slug}`,
                    className: 'bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all group flex flex-col justify-between'
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
                      h('span', { className: 'text-blue-600 font-semibold' }, 'Xem chi tiết →')
                    )
                  )
                )
              )
            )
          : h('p', { className: 'text-sm text-slate-500 italic' }, 'Đang cập nhật thêm sản phẩm trong danh mục này.')
      ),

      // Related Rankings
      matchedRankings.length > 0 &&
        h(
          'section',
          { className: 'space-y-4' },
          h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight' }, 'Bảng xếp hạng liên quan'),
          h(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
            matchedRankings.map((r, idx) =>
              h(
                'a',
                {
                  key: idx,
                  href: `/top/${r.slug}`,
                  className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm hover:border-blue-400 transition-all block group'
                },
                h('h3', { className: 'font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors' }, r.title),
                h('p', { className: 'text-xs text-slate-600 mt-2 line-clamp-2 text-justify' }, r.intro),
                h('span', { className: 'text-xs font-semibold text-blue-600 inline-block mt-3' }, 'Xem bảng xếp hạng →')
              )
            )
          )
        )
    ),
    h(Footer, null)
  );
}
