'use client';

import React from 'react';

const h = React.createElement;

export default function CategoryExplorer() {
  const physicalCategories = [
    {
      name: 'Gia dụng',
      href: '/san-pham-vat-ly/gia-dung',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
        )
    },
    {
      name: 'Thời trang',
      href: '/san-pham-vat-ly/thoi-trang',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M7 4h10l1 4-4 2v10H10V10L6 8l1-4z' })
        )
    },
    {
      name: 'Điện tử',
      href: '/san-pham-vat-ly/dien-tu',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
        )
    },
    {
      name: 'Sức khỏe',
      href: '/san-pham-vat-ly/suc-khoe',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
        )
    },
    {
      name: 'Mẹ & Bé',
      href: '/san-pham-vat-ly/me-be',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('circle', { cx: '12', cy: '12', r: '9', strokeWidth: 1.8 }),
          h('path', { strokeLinecap: 'round', strokeWidth: 1.8, d: 'M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0' })
        )
    },
    {
      name: 'Thể thao',
      href: '/san-pham-vat-ly/the-thao',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M6 8v8m12-8v8M4 10v4m16-4v4M6 12h12' })
        )
    }
  ];

  const digitalCategories = [
    {
      name: 'Ứng dụng',
      href: '/san-pham-so/ung-dung',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('rect', { x: '4', y: '4', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 }),
          h('rect', { x: '14', y: '4', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 }),
          h('rect', { x: '4', y: '14', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 }),
          h('rect', { x: '14', y: '14', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 })
        )
    },
    {
      name: 'Công cụ AI',
      href: '/san-pham-so/cong-cu-ai',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('rect', { x: '7', y: '7', width: '10', height: '10', rx: '2', strokeWidth: 1.8 }),
          h('path', { strokeLinecap: 'round', strokeWidth: 1.8, d: 'M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3' })
        )
    },
    {
      name: 'Phần mềm',
      href: '/san-pham-so/phan-mem',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
        )
    },
    {
      name: 'Hosting',
      href: '/san-pham-so/hosting',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('rect', { x: '3', y: '4', width: '18', height: '6', rx: '2', strokeWidth: 1.8 }),
          h('rect', { x: '3', y: '14', width: '18', height: '6', rx: '2', strokeWidth: 1.8 }),
          h('circle', { cx: '7', cy: '7', r: '1', fill: 'currentColor' }),
          h('circle', { cx: '7', cy: '17', r: '1', fill: 'currentColor' })
        )
    },
    {
      name: 'VPN',
      href: '/san-pham-so/vpn',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M12 3s8 3 8 9c0 5-4.5 9-8 10-3.5-1-8-5-8-10 0-6 8-9 8-9z' })
        )
    },
    {
      name: 'Marketing',
      href: '/san-pham-so/marketing',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
        )
    },
    {
      name: 'Khóa học',
      href: '/san-pham-so/khoa-hoc',
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M12 14l9-5-9-5-9 5 9 5z' }),
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' })
        )
    }
  ];

  return h(
    'section',
    { className: 'w-full py-10 bg-[#edf4fb]' },
    h(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-8 space-y-6' },
      // Section Header
      h(
        'div',
        { className: 'flex items-center justify-between' },
        h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, 'Khám phá theo danh mục'),
        h(
          'a',
          { href: '/san-pham-vat-ly', className: 'text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors' },
          'Xem tất cả danh mục',
          h('span', null, '→')
        )
      ),

      // Row 1: Sản phẩm vật lý
      h(
        'div',
        { className: 'flex flex-col md:flex-row items-stretch gap-3' },
        // Label box
        h(
          'div',
          { className: 'w-full md:w-36 flex-shrink-0 bg-white border border-slate-200 rounded-md p-3 flex flex-col justify-center items-center text-center' },
          h('span', { className: 'text-sm font-bold text-slate-800' }, 'Sản phẩm'),
          h('span', { className: 'text-sm font-bold text-blue-600' }, 'vật lý')
        ),
        // Cards Grid
        h(
          'div',
          { className: 'grid grid-cols-3 sm:grid-cols-6 gap-3 flex-1' },
          physicalCategories.map((item, idx) =>
            h(
              'a',
              {
                key: idx,
                href: item.href,
                className: 'flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-md hover:border-blue-500 hover:shadow-md hover:text-blue-600 transition-all duration-200 group text-slate-700'
              },
              item.icon({ className: 'w-6 h-6 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-200' }),
              h('span', { className: 'text-xs font-semibold mt-2' }, item.name)
            )
          )
        )
      ),

      // Row 2: Sản phẩm số
      h(
        'div',
        { className: 'flex flex-col md:flex-row items-stretch gap-3' },
        // Label box
        h(
          'div',
          { className: 'w-full md:w-36 flex-shrink-0 bg-white border border-slate-200 rounded-md p-3 flex flex-col justify-center items-center text-center' },
          h('span', { className: 'text-sm font-bold text-slate-800' }, 'Sản phẩm'),
          h('span', { className: 'text-sm font-bold text-blue-600' }, 'số')
        ),
        // Cards Grid
        h(
          'div',
          { className: 'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 flex-1' },
          digitalCategories.map((item, idx) =>
            h(
              'a',
              {
                key: idx,
                href: item.href,
                className: 'flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-md hover:border-blue-500 hover:shadow-md hover:text-blue-600 transition-all duration-200 group text-slate-700'
              },
              item.icon({ className: 'w-6 h-6 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-200' }),
              h('span', { className: 'text-xs font-semibold mt-2 text-center' }, item.name)
            )
          )
        )
      )
    )
  );
}
