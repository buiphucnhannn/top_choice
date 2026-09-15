'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const h = React.createElement;

const HEADER_OFFSET = 80;

export function scrollToSection(hash, behavior) {
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior: behavior || 'smooth' });
  }
}

// Nhảy thẳng tới section, không lướt qua hero gây giật.
// Ép scrollBehavior='auto' vì globals.css đang để html { scroll-behavior: smooth }
// (behavior:'auto' sẽ ăn theo CSS nên vẫn trượt mượt nếu không ép).
export function scrollToSectionInstant(hash) {
  const el = document.querySelector(hash);
  if (!el) return false;
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = prev;
  });
  return true;
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

  // Link dạng /#section: ở trang chủ thì cuộn mượt tại chỗ.
  // Ở trang khác thì về '/' (URL sạch, không #) rồi nhảy thẳng tới section
  // bằng instant (không lướt qua hero nên hết giật). Poll nhanh 40ms để
  // gần như không thấy hero lóe lên. Không dùng sessionStorage để tránh
  // StrictMode double-effect làm mất lệnh cuộn.
  const handleAnchorClick = (e, href) => {
    if (!href.startsWith('/#')) return;
    e.preventDefault();
    const hash = href.slice(1); // '#san-pham-vat-ly'
    const cleanUrl = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
    };
    if (pathname === '/') {
      scrollToSection(hash, 'smooth');
      setTimeout(cleanUrl, 50);
    } else {
      router.push('/', { scroll: false });
      cleanUrl();
      let tries = 0;
      if (scrollToSectionInstant(hash)) return;
      const timer = setInterval(() => {
        tries += 1;
        if (scrollToSectionInstant(hash) || tries > 60) {
          clearInterval(timer);
        }
      }, 40);
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
