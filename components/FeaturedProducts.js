'use client';

import React, { useEffect, useState } from 'react';
import { products as seedProducts } from '../data/mockData';
import { getProducts, DATA_EVENT } from '../lib/productStore';

const h = React.createElement;

// Section "Nổi bật": top điểm cao nhất — thay thế bảng xếp hạng cũ
export default function FeaturedProducts() {
  const [allProducts, setAllProducts] = useState(seedProducts);

  useEffect(() => {
    const refresh = () => setAllProducts(getProducts());
    refresh();
    window.addEventListener(DATA_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(DATA_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const top = [...allProducts].sort((a, b) => b.overallScore - a.overallScore).slice(0, 3);
  if (top.length === 0) return null;
  const [first, ...rest] = top;

  return h(
    'section',
    { id: 'noi-bat', className: 'w-full py-12 bg-[#edf4fb] scroll-mt-20' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8 space-y-6' },
      h(
        'div',
        { className: 'flex flex-wrap items-end justify-between gap-2' },
        h(
          'div',
          null,
          h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-1' }, 'Nổi bật'),
          h('h2', { className: 'text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight' }, 'Điểm cao nhất tuần này'),
          h('p', { className: 'text-xs sm:text-sm text-slate-500 mt-1' }, 'Ba sản phẩm được chấm điểm cao nhất — bấm để xem đánh giá chi tiết.')
        ),
        h('span', { className: 'text-xs text-slate-400 font-medium' }, 'Chấm trên thang 10 • Cập nhật 14/09/2026')
      ),

      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-2 gap-5' },
        // Spotlight lớn
        h(
          'a',
          { href: `/review/${first.slug}`, className: 'group relative overflow-hidden rounded-md border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-slate-900 min-h-[320px] flex' },
          h('img', { src: first.image, alt: first.name, loading: 'lazy', className: 'absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500' }),
          h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' }),
          h(
            'div',
            { className: 'relative mt-auto p-6 space-y-2 text-white' },
            h(
              'div',
              { className: 'flex items-center gap-2' },
              h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-amber-400 text-slate-900' }, '★ Lựa chọn số 1'),
              h('span', { className: 'text-xs font-black text-amber-300' }, `${first.overallScore}/10`)
            ),
            h('h3', { className: 'text-xl sm:text-2xl font-black tracking-tight' }, first.name),
            h('p', { className: 'text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-lg' }, first.summary),
            h('div', { className: 'flex items-center gap-3 pt-1' },
              h('span', { className: 'text-sm font-extrabold text-white' }, first.priceRef),
              h('span', { className: 'text-xs font-bold text-blue-300 group-hover:text-white group-hover:underline' }, 'Xem đánh giá chi tiết →'))
          )
        ),
        // 2 cards nhỏ
        h(
          'div',
          { className: 'flex flex-col gap-5' },
          rest.map((p, idx) =>
            h(
              'a',
              { key: p.id, href: `/review/${p.slug}`, className: 'flex-1 flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md shadow-sm hover:border-blue-300 hover:shadow-md transition-all group' },
              h('img', { src: p.image, alt: p.name, loading: 'lazy', className: 'w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover border border-white shadow-sm flex-shrink-0 bg-white' }),
              h(
                'div',
                { className: 'flex-1 min-w-0' },
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2 mb-1' },
                  h('span', { className: `text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${idx === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}` }, idx === 0 ? 'Top 2' : 'Top 3'),
                  h('span', { className: 'text-sm font-black text-blue-600' }, `${p.overallScore}/10`)
                ),
                h('h3', { className: 'font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors truncate' }, p.name),
                h('p', { className: 'text-xs text-slate-500 line-clamp-2 mt-0.5' }, p.summary),
                h('div', { className: 'flex items-center justify-between mt-2' },
                  h('span', { className: 'text-xs font-extrabold text-slate-900' }, p.priceRef),
                  h('span', { className: 'text-xs font-bold text-blue-600' }, 'Xem chi tiết →'))
              )
            )
          )
        )
      )
    )
  );
}
