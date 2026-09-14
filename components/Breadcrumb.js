'use client';

import React from 'react';

const h = React.createElement;

export default function Breadcrumb({ items = [] }) {
  return h(
    'nav',
    { className: 'w-full py-3 text-xs text-slate-500 font-medium' },
    h(
      'ol',
      { className: 'flex items-center flex-wrap gap-1.5' },
      h(
        'li',
        null,
        h('a', { href: '/', className: 'hover:text-blue-600 transition-colors' }, 'Trang chủ')
      ),
      items.map((item, idx) =>
        h(
          'li',
          { key: idx, className: 'flex items-center gap-1.5' },
          h('span', { className: 'text-slate-400' }, '/'),
          item.href
            ? h('a', { href: item.href, className: 'hover:text-blue-600 transition-colors' }, item.name)
            : h('span', { className: 'text-slate-800 font-semibold truncate max-w-xs' }, item.name)
        )
      )
    )
  );
}
