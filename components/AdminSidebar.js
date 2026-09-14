'use client';

import React from 'react';

const h = React.createElement;

export default function AdminSidebar({ active = 'dashboard' }) {
  const menuItems = [
    { id: 'dashboard', label: '📊 Dashboard Tổng Quan', href: '/admin' },
    { id: 'categories', label: '📁 Quản Lý Danh Mục', href: '/admin/categories' },
    { id: 'products', label: '📦 Quản Lý Sản Phẩm', href: '/admin/products' },
    { id: 'rankings', label: '🏆 Quản Lý Bảng Xếp Hạng', href: '/admin/rankings' },
    { id: 'content', label: '📝 Quản Lý Bài Viết & Review', href: '/admin/content' },
    { id: 'comparisons', label: '⚖️ Quản Lý Trang So Sánh', href: '/admin/comparisons' }
  ];

  return h(
    'aside',
    { className: 'w-64 bg-slate-900 text-slate-300 min-h-screen p-5 flex flex-col justify-between flex-shrink-0' },
    h(
      'div',
      { className: 'space-y-6' },
      // Logo / Brand
      h(
        'div',
        { className: 'pb-4 border-b border-slate-800' },
        h(
          'a',
          { href: '/', className: 'flex items-baseline gap-1' },
          h('span', { className: 'text-xl font-black text-white' }, 'TOP'),
          h('span', { className: 'text-xl font-black text-blue-500' }, 'CHOICE'),
          h('span', { className: 'text-[10px] font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded ml-2' }, 'ADMIN')
        )
      ),

      // Nav Links
      h(
        'nav',
        { className: 'space-y-1 text-sm font-semibold' },
        menuItems.map((item) =>
          h(
            'a',
            {
              key: item.id,
              href: item.href,
              className: `block px-3.5 py-2.5 rounded transition-all ${
                active === item.id
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'hover:bg-slate-800 hover:text-white text-slate-400'
              }`
            },
            item.label
          )
        )
      )
    ),

    // Bottom info
    h(
      'div',
      { className: 'pt-4 border-t border-slate-800 text-xs text-slate-500 space-y-2' },
      h('div', null, 'Phiên bản Demo v1.0'),
      h('a', { href: '/', className: 'text-blue-400 hover:underline font-semibold block' }, '← Quay lại Trang Chủ')
    )
  );
}
