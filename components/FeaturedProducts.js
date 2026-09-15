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

  const scoreVal = (p) => {
    const v = Number(p.overallScore);
    return p.overallScore === '' || p.overallScore === null || p.overallScore === undefined || Number.isNaN(v) ? -1 : v;
  };
  const top = [...allProducts].sort((a, b) => scoreVal(b) - scoreVal(a)).slice(0, 3);
  if (top.length === 0) return null;
  const [first, ...rest] = top;

  return h(
    'section',
    { id: 'noi-bat', className: 'w-full py-10 sm:py-12 bg-[#edf4fb] scroll-mt-20 overflow-x-clip' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6' },
      h(
        'div',
        { className: 'flex flex-col sm:flex-row sm:flex-wrap sm:items-end sm:justify-between gap-2' },
        h(
          'div',
          { className: 'min-w-0' },
          h('p', { className: 'text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-1' }, 'Nổi bật'),
          h('h2', { className: 'text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight text-balance' }, 'Điểm cao nhất tuần này'),
          h('p', { className: 'text-[13px] sm:text-sm text-slate-500 mt-1' }, 'Ba sản phẩm được chấm điểm cao nhất — bấm để xem đánh giá chi tiết.')
        ),
        h('span', { className: 'text-[11px] sm:text-xs text-slate-400 font-medium' }, 'Chấm trên thang 10 • Cập nhật 14/09/2026')
      ),

      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-2 gap-5' },
        // Spotlight lớn
        h(
          'a',
          { href: `/review/${first.slug}`, className: 'group relative overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all bg-slate-900 min-h-[280px] sm:min-h-[320px] flex' },
          first.image
            ? h('img', { src: first.image, alt: first.name || 'Sản phẩm', loading: 'lazy', className: 'absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500' })
            : h('div', { className: 'absolute inset-0 flex items-center justify-center text-sm italic text-slate-400 bg-slate-800' }, 'Không có ảnh'),
          h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10' }),
          h(
            'div',
            { className: 'relative mt-auto p-5 sm:p-6 space-y-2 text-white min-w-0 w-full' },
            h(
              'div',
              { className: 'flex items-center gap-2 flex-wrap' },
              h('span', { className: 'text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider bg-amber-400 text-slate-900' }, '★ Lựa chọn số 1'),
              h('span', { className: 'text-xs font-black text-amber-300' }, scoreVal(first) >= 0 ? `${first.overallScore}/10` : 'Không có')
            ),
            h('h3', { className: 'text-lg sm:text-2xl font-black tracking-tight break-words' }, first.name || 'Không có'),
            h('p', { className: 'text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-lg break-words' }, first.summary || 'Không có'),
            h('div', { className: 'flex items-center gap-3 pt-1 flex-wrap' },
              h('span', { className: 'text-sm font-extrabold text-white break-words' }, first.priceRef || 'Không có'),
              h('span', { className: 'text-xs font-bold text-blue-200 group-hover:text-white group-hover:underline' }, 'Xem đánh giá chi tiết →'))
          )
        ),
        // 2 cards nhỏ
        h(
          'div',
          { className: 'flex flex-col gap-4 sm:gap-5' },
          rest.map((p, idx) =>
            h(
              'a',
              { key: p.id, href: `/review/${p.slug}`, className: 'flex-1 flex items-center gap-3 sm:gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 hover:shadow-md transition-all group min-w-0' },
              p.image
                ? h('img', { src: p.image, alt: p.name || 'Sản phẩm', loading: 'lazy', className: 'w-20 h-20 sm:w-28 sm:h-28 rounded-lg object-cover border border-slate-200 shadow-sm flex-shrink-0 bg-slate-50' })
                : h('div', { className: 'w-20 h-20 sm:w-28 sm:h-28 rounded-lg border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-[11px] italic text-slate-400 flex-shrink-0 text-center px-1' }, 'Không có'),
              h(
                'div',
                { className: 'flex-1 min-w-0' },
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2 mb-1' },
                  h('span', { className: `text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border flex-shrink-0 ${idx === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}` }, idx === 0 ? 'Top 2' : 'Top 3'),
                  h('span', { className: 'text-sm font-black text-blue-600 flex-shrink-0' }, scoreVal(p) >= 0 ? `${p.overallScore}/10` : 'Không có')
                ),
                h('h3', { className: 'font-bold text-slate-900 text-[15px] sm:text-base group-hover:text-blue-600 transition-colors truncate' }, p.name || 'Không có'),
                h('p', { className: 'text-xs text-slate-500 line-clamp-2 mt-0.5 break-words' }, p.summary || 'Không có'),
                h('div', { className: 'flex items-center justify-between gap-2 mt-2' },
                  h('span', { className: 'text-xs font-extrabold text-slate-900 truncate min-w-0' }, p.priceRef || 'Không có'),
                  h('span', { className: 'text-xs font-bold text-blue-600 flex-shrink-0' }, 'Xem chi tiết →'))
              )
            )
          )
        )
      )
    )
  );
}
