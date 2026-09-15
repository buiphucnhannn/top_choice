'use client';

import React, { useEffect, useState } from 'react';
import { products as seedProducts, categories as seedCategories } from '../../data/mockData';
import { getProducts, getCategories, getAdminEmail, DATA_EVENT } from '../../lib/productStore';

const h = React.createElement;

export default function AdminDashboardPage() {
  // Khởi tạo bằng seed để SSR/hydration khớp, effect nạp store ngay sau đó
  const [products, setProducts] = useState(seedProducts);
  const [categories, setCategories] = useState(seedCategories);

  useEffect(() => {
    if (typeof document !== 'undefined') document.title = 'Tổng quan quản trị | TOP CHOICE';
    const refresh = () => {
      setProducts(getProducts());
      setCategories(getCategories());
    };
    refresh();
    window.addEventListener(DATA_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(DATA_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const vatLy = products.filter((p) => p.type === 'vat-ly').length;
  const so = products.filter((p) => p.type === 'so').length;
  const validScores = products
    .map((p) => (p.overallScore === '' || p.overallScore === null || p.overallScore === undefined ? NaN : Number(p.overallScore)))
    .filter((v) => typeof v === 'number' && !Number.isNaN(v));
  const avg = validScores.length === 0 ? 'Không có' : `${(validScores.reduce((s, v) => s + v, 0) / validScores.length).toFixed(1)}/10`;

  const cards = [
    { label: 'Tổng sản phẩm', value: products.length, href: '/admin/products', note: `${vatLy} vật lý • ${so} số` },
    { label: 'Danh mục', value: categories.length, href: '/admin/categories', note: 'vật lý & số' },
    { label: 'Điểm trung bình', value: avg, href: '/admin/products', note: 'toàn bộ sản phẩm có điểm' },
  ];

  const recent = [...products].slice(-5).reverse();

  return h(
    'main',
    { className: 'p-4 sm:p-8 animate-fadeIn' },
    h(
      'div',
      { className: 'max-w-[1100px] mx-auto space-y-6' },
      h(
        'div',
        null,
        h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-600' }, `Xin chào, ${getAdminEmail()}`),
        h('h1', { className: 'text-2xl font-black text-slate-900 tracking-tight mt-1' }, 'Tổng quan quản trị')
      ),
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-3 gap-4' },
        cards.map((c) =>
          h(
            'a',
            { key: c.label, href: c.href, className: 'bg-white border border-slate-200 rounded-md p-5 shadow-sm hover:border-blue-300 hover:shadow transition-all' },
            h('div', { className: 'text-3xl font-black text-blue-600 tracking-tight' }, c.value),
            h('div', { className: 'text-sm font-bold text-slate-900 mt-1' }, c.label),
            h('div', { className: 'text-[11px] text-slate-400 mt-0.5' }, c.note)
          )
        )
      ),
      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-2 gap-4' },
        h(
          'div',
          { className: 'bg-white border border-slate-200 rounded-md p-5 shadow-sm' },
          h('h2', { className: 'text-sm font-black text-slate-900 mb-3' }, 'Thao tác nhanh'),
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            h('a', { href: '/admin/products', className: 'px-4 py-3 text-sm font-bold text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-all' }, '+ Thêm sản phẩm'),
            h('a', { href: '/admin/categories', className: 'px-4 py-3 text-sm font-bold text-center bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded-md transition-all' }, '+ Thêm danh mục')
          ),
          h('p', { className: 'text-[11px] text-slate-400 mt-3 leading-relaxed' }, 'Mọi thay đổi được lưu ngay và hiển thị trên landing page (lưới sản phẩm, khu nổi bật, trang chi tiết).')
        ),
        h(
          'div',
          { className: 'bg-white border border-slate-200 rounded-md p-5 shadow-sm' },
          h(
            'div',
            { className: 'flex items-center justify-between mb-3' },
            h('h2', { className: 'text-sm font-black text-slate-900' }, 'Sản phẩm mới nhất'),
            h('a', { href: '/admin/products', className: 'text-xs font-bold text-blue-600 hover:underline' }, 'Quản lý →')
          ),
          h(
            'ul',
            { className: 'divide-y divide-slate-100' },
            recent.length === 0 && h('li', { className: 'py-3 text-xs text-slate-400' }, 'Chưa có sản phẩm nào.'),
            recent.map((p) =>
              h(
                'li',
                { key: p.id, className: 'py-2.5 flex items-center justify-between gap-3' },
                h('span', { className: 'text-sm font-semibold text-slate-800 truncate' }, p.name || 'Không có'),
                p.overallScore !== '' && p.overallScore !== null && p.overallScore !== undefined
                  ? h('span', { className: 'text-xs font-black text-blue-600 flex-shrink-0' }, `${p.overallScore}/10`)
                  : h('span', { className: 'text-xs italic text-slate-400 flex-shrink-0' }, 'Không có')
              )
            )
          )
        )
      )
    )
  );
}
