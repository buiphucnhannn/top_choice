'use client';

import React from 'react';

const h = React.createElement;

export default function Breadcrumb({ items = [] }) {
  const schemaItems = [
    { name: 'Trang chủ', href: '/' },
    ...items
  ].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.href ? { item: `https://topchoice.vn${item.href}` } : {})
  }));

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems
  });

  return h(
    'nav',
    { className: 'w-full py-3 text-xs text-slate-500 font-medium', 'aria-label': 'Điều hướng phân cấp' },
    h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: breadcrumbSchema } }),
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
            : h('span', { className: 'text-slate-800 font-semibold truncate max-w-sm sm:max-w-md md:max-w-xl', 'aria-current': 'page' }, item.name)
        )
      )
    )
  );
}
