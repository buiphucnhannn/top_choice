'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAdminEmail, logoutAdmin } from '../lib/productStore';

const h = React.createElement;

const LINKS = [
  { key: 'dashboard', label: 'Tổng quan', href: '/admin', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { key: 'products', label: 'Sản phẩm', href: '/admin/products', d: 'M20 7L9 18l-5-5' },
  { key: 'categories', label: 'Danh mục', href: '/admin/categories', d: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
];

export default function AdminSidebar({ active = 'dashboard' }) {
  const router = useRouter();
  const email = getAdminEmail();

  const handleLogout = () => {
    logoutAdmin();
    router.replace('/admin/login');
  };

  return h(
    'aside',
    { className: 'w-full lg:w-60 flex-shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex lg:flex-col lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden' },
    h(
      'div',
      { className: 'hidden lg:flex flex-col px-5 pt-6 pb-4 border-b border-slate-100' },
      h(
        'div',
        { className: 'flex items-baseline tracking-tight' },
        h('span', { className: 'text-xl font-black text-slate-900 tracking-tighter' }, 'TOP'),
        h('span', { className: 'text-xl font-black text-blue-600 ml-1 tracking-tighter' }, 'CHOICE')
      ),
      h('span', { className: 'text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1' }, 'Trang quản trị'),
      email && h('span', { className: 'text-[11px] text-slate-500 mt-2 truncate' }, email)
    ),
    h(
      'nav',
      { className: 'flex lg:flex-col gap-1 p-3 lg:p-4 flex-1 lg:overflow-y-auto overflow-x-auto', 'aria-label': 'Menu quản trị' },
      LINKS.map((l) =>
        h(
          Link,
          {
            key: l.key,
            href: l.href,
            scroll: false,
            className: `flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold rounded-md whitespace-nowrap transition-colors ${active === l.key ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'}`,
          },
          h('svg', { className: 'w-5 h-5 flex-shrink-0', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: l.d })),
          l.label
        )
      ),
      h(
        'a',
        { href: '/', className: 'hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold rounded-md whitespace-nowrap text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors' },
        h('svg', { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M10 19l-7-7m0 0l7-7m-7 7h18' })),
        'Về trang chủ'
      )
    ),
    h(
      'div',
      { className: 'hidden lg:block p-4 border-t border-slate-100' },
      h(
        'button',
        { type: 'button', onClick: handleLogout, className: 'w-full px-3.5 py-2.5 text-sm font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-md transition-colors' },
        'Đăng xuất'
      )
    )
  );
}
