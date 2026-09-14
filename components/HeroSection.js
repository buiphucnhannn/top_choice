'use client';

import React, { useState } from 'react';

const h = React.createElement;

export default function HeroSection() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/tim-kiem?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return h(
    'section',
    {
      className: 'relative w-full border-b border-slate-200 overflow-hidden bg-[#edf4fb] bg-no-repeat bg-center md:bg-right bg-cover min-h-[calc(100vh-68px)] flex items-center',
      style: {
        backgroundImage: "url('/images/herosection.webp')",
      }
    },
    // Gradient overlay: soft translucency so background image is clearly visible
    h('div', {
      className: 'absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 to-transparent pointer-events-none'
    }),

    // Inner Container
    h(
      'div',
      { className: 'relative max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16 w-full z-10 flex flex-col justify-center' },
      // Left column content
      h(
        'div',
        { className: 'max-w-xl md:max-w-2xl space-y-6 md:space-y-7' },
        // Eyebrow text
        h(
          'div',
          { className: 'text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-600' },
          'TOP CHOICE - ĐÁNH GIÁ KHÁCH QUAN, LỰA CHỌN THÔNG MINH'
        ),

        // Main Title
        h(
          'h1',
          { className: 'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.12]' },
          h('span', { className: 'block' }, 'Tìm đúng sản phẩm.'),
          h('span', { className: 'block text-blue-600 mt-1.5' }, 'Chọn đúng quyết định.')
        ),

        // Description
        h(
          'p',
          { className: 'text-slate-700 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-xl' },
          'Chúng tôi mang đến các bài đánh giá chuyên sâu, bảng xếp hạng đáng tin cậy và hướng dẫn hữu ích để giúp bạn lựa chọn sản phẩm phù hợp nhất.'
        ),

        // Search Box in Hero
        h(
          'form',
          {
            onSubmit: handleSearch,
            className: 'flex flex-col sm:flex-row items-stretch gap-2 max-w-xl w-full bg-white p-2 rounded-md border border-slate-300 shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all'
          },
          h(
            'div',
            { className: 'relative flex-1 flex items-center' },
            h(
              'svg',
              { className: 'w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
            ),
            h('input', {
              type: 'text',
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: 'Bạn đang tìm sản phẩm hoặc công cụ gì?',
              className: 'w-full pl-11 pr-3 py-3 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent'
            })
          ),
          h(
            'button',
            {
              type: 'submit',
              className: 'px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 flex-shrink-0'
            },
            h(
              'svg',
              { className: 'w-4 h-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
            ),
            'Tìm kiếm'
          )
        ),

        // Quick Exploration Links
        h(
          'div',
          { className: 'flex flex-wrap items-center gap-6 pt-1 text-sm sm:text-base font-semibold' },
          h(
            'a',
            { href: '/san-pham-vat-ly', className: 'inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 hover:underline transition-colors' },
            'Khám phá sản phẩm vật lý',
            h('span', { className: 'ml-0.5' }, '→')
          ),
          h(
            'a',
            { href: '/san-pham-so', className: 'inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 hover:underline transition-colors' },
            'Khám phá sản phẩm số',
            h('span', { className: 'ml-0.5' }, '→')
          )
        )
      )
    ),

    // Subtle scroll cue at the bottom
    h(
      'div',
      {
        className: 'absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer select-none',
        onClick: () => {
          window.scrollTo({ top: window.innerHeight - 68, behavior: 'smooth' });
        }
      },
      h('span', { className: 'text-[11px] font-semibold uppercase tracking-wider' }, 'Khám phá thêm'),
      h(
        'svg',
        { className: 'w-4 h-4 animate-bounce', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
        h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 14l-7 7m0 0l-7-7' })
      )
    )
  );
}
