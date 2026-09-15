'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const h = React.createElement;

// 5 điểm neo landing page (chỉ sản phẩm) + 1 CTA
const NAV_LINKS = [
  { label: 'Tổng quan', href: '#tong-quan' },
  { label: 'Vật lý', href: '#san-pham-vat-ly' },
  { label: 'Số', href: '#san-pham-so' },
  { label: 'Nổi bật', href: '#noi-bat' },
  { label: 'Đánh giá', href: '#danh-gia' },
  { label: 'FAQ', href: '#faq' },
];

const HEADER_OFFSET = 80;

function scrollToHash(hash) {
  if (typeof window === 'undefined') return;
  if (hash === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  } else if (window.location.pathname !== '/') {
    window.location.href = `/${hash}`;
  }
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Trang chủ: trong suốt trên nền hero, chuyển đặc khi cuộn.
  // Trang khác (VD: chi tiết sản phẩm): luôn nền đặc cho cùng màu nền trang.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mở thẳng URL có hash (VD: /#san-pham-so): đợi render xong rồi cuộn trừ hao header
  useEffect(() => {
    if (pathname !== '/' || !window.location.hash) return;
    const hash = window.location.hash;
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      const el = document.querySelector(hash);
      if (el || tries > 15) {
        clearInterval(timer);
        if (el) scrollToHash(hash);
      }
    }, 150);
    return () => clearInterval(timer);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('topchoice:search', { detail: q }));
    }
    scrollToHash('#san-pham-vat-ly');
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToHash(href);
    setMobileMenuOpen(false);
  };

  const solid = !isHome || scrolled || mobileMenuOpen;

  return h(
    'header',
    {
      className: `w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`,
    },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3' },
      // Brand
      h(
        'a',
        {
          href: '/',
          onClick: (e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          },
          className: 'flex flex-col group flex-shrink-0 min-w-0'
        },
        h(
          'div',
          { className: 'flex items-baseline tracking-tight' },
          h('span', { className: 'text-xl sm:text-2xl font-black text-slate-900 tracking-tighter' }, 'TOP'),
          h('span', { className: 'text-xl sm:text-2xl font-black text-blue-600 ml-1 tracking-tighter' }, 'CHOICE')
        ),
        h('span', { className: 'text-[10px] text-slate-500 font-medium tracking-tight -mt-0.5 truncate max-w-[200px] sm:max-w-none' }, 'Đánh giá khách quan. Lựa chọn thông minh.')
      ),

      // Desktop anchor nav (không active/underline — chỉ cuộn tới section)
      h(
        'nav',
        { className: 'hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-slate-700', 'aria-label': 'Điều hướng landing page' },
        NAV_LINKS.map((link) =>
          h(
            'a',
            {
              key: link.href,
              href: link.href,
              onClick: (e) => handleNavClick(e, link.href),
              className: 'py-2 hover:text-blue-600 transition-colors',
            },
            link.label
          )
        )
      ),

      // Search + CTA
      h(
        'div',
        { className: 'hidden sm:flex items-center gap-3 flex-shrink-0' },
        h(
          'form',
          { onSubmit: handleSearchSubmit, className: 'relative w-44 md:w-52 lg:w-60' },
          h(
            'div',
            { className: 'relative w-full flex items-center' },
            h('input', {
              type: 'text',
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: 'Tìm sản phẩm...',
              'aria-label': 'Tìm sản phẩm',
              className: 'w-full pl-3 pr-8 py-1.5 text-xs bg-white/80 hover:bg-white focus:bg-white border border-slate-200 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 text-slate-800 shadow-sm',
            }),
            h(
              'button',
              { type: 'submit', 'aria-label': 'Tìm kiếm', className: 'absolute right-1 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors' },
              h('svg', { className: 'w-3.5 h-3.5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' }))
            )
          )
        ),
        h(
          'a',
          {
            href: '/admin/login',
            className: 'px-4 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm hover:shadow transition-all active:scale-[0.98] flex-shrink-0',
          },
          'Đăng nhập'
        )
      ),

      // Mobile hamburger
      h(
        'button',
        {
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: 'md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-95 transition-all flex-shrink-0',
          'aria-label': mobileMenuOpen ? 'Đóng menu' : 'Mở menu',
          'aria-expanded': mobileMenuOpen,
        },
        h('svg', { className: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' }))
      )
    ),

    // Mobile drawer
    mobileMenuOpen &&
      h(
        'div',
        { className: 'md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 py-4 space-y-3 animate-fadeIn max-h-[calc(100dvh-68px)] overflow-y-auto shadow-xl' },
        h(
          'form',
          { onSubmit: handleSearchSubmit, className: 'relative' },
          h('input', {
            type: 'text',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: 'Tìm sản phẩm...',
            'aria-label': 'Tìm sản phẩm',
            className: 'w-full pl-4 pr-11 py-3 min-h-[44px] text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder:text-slate-400',
          }),
          h('button', { type: 'submit', className: 'absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors', 'aria-label': 'Tìm kiếm' },
            h('svg', { className: 'w-4 h-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })))
        ),
        h(
          'nav',
          { className: 'flex flex-col text-[15px] font-semibold text-slate-700', 'aria-label': 'Menu di động' },
          NAV_LINKS.map((link) =>
            h(
              'a',
              {
                key: link.href,
                href: link.href,
                onClick: (e) => handleNavClick(e, link.href),
                className: 'py-3 px-2 min-h-[44px] flex items-center border-b border-slate-100 hover:text-blue-600 hover:bg-blue-50/50 hover:pl-3 rounded-lg transition-all',
              },
              link.label
            )
          ),
          h(
            'a',
            {
              href: '/admin/login',
              className: 'mt-3 py-3 px-3 min-h-[44px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-center font-bold shadow-sm active:scale-[0.98] transition-all',
            },
            'Đăng nhập'
          )
        )
      )
  );
}

export { scrollToHash };
