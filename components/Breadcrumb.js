'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const h = React.createElement;

const HEADER_OFFSET = 80;

export function scrollToSection(hash) {
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }
}

export default function Breadcrumb({ items = [] }) {
  const router = useRouter();
  const pathname = usePathname();

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

  // Link dạng /#section: nếu đang ở trang chủ thì cuộn tại chỗ (trừ hao header),
  // nếu ở trang khác thì sang trang chủ rồi mới cuộn đúng section
  const handleAnchorClick = (e, href) => {
    if (!href.startsWith('/#')) return;
    e.preventDefault();
    const hash = href.slice(1); // '#san-pham-vat-ly'
    if (pathname === '/') {
      scrollToSection(hash);
    } else {
      router.push(href);
      // Đợi trang chủ render xong rồi cuộn (thử lại vài lần cho chắc)
      let tries = 0;
      const timer = setInterval(() => {
        tries += 1;
        const el = document.querySelector(hash);
        if (el || tries > 15) {
          clearInterval(timer);
          if (el) scrollToSection(hash);
        }
      }, 150);
    }
  };

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
            ? h('a', { href: item.href, onClick: (e) => handleAnchorClick(e, item.href), className: 'hover:text-blue-600 transition-colors' }, item.name)
            : h('span', { className: 'text-slate-800 font-semibold truncate max-w-sm sm:max-w-md md:max-w-xl', 'aria-current': 'page' }, item.name)
        )
      )
    )
  );
}
