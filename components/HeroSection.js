'use client';

import React, { useState } from 'react';

const h = React.createElement;

function scrollToHash(hash) {
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }
}

export default function HeroSection() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('topchoice:search', { detail: query.trim() }));
    scrollToHash('#san-pham-vat-ly');
  };

  const miniStats = [
    { number: '20+', label: 'sản phẩm tuyển chọn' },
    { number: '8', label: 'danh mục vật lý & số' },
    { number: '3', label: 'chuyên gia kiểm chứng' },
  ];

  return h(
    'section',
    {
      id: 'hero',
      className: 'relative w-full border-b border-slate-200 overflow-hidden bg-[#edf4fb] bg-no-repeat bg-center md:bg-right bg-cover min-h-[100svh] flex items-center',
      style: { backgroundImage: "url('/images/herosection.webp')" },
    },
    h('div', { className: 'absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/95 via-white/85 to-white/40 sm:from-white/90 sm:via-white/60 sm:to-transparent pointer-events-none' }),

    h(
      'div',
      { className: 'relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 w-full z-10 flex flex-col justify-center' },
      h(
        'div',
        { className: 'max-w-xl md:max-w-2xl space-y-5 sm:space-y-6 md:space-y-7 bg-white/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-2xl sm:rounded-none p-5 sm:p-0 border border-white/60 sm:border-0 shadow-lg sm:shadow-none' },
        h('div', { className: 'inline-flex items-center gap-2 text-[11px] sm:text-sm font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50/90 sm:bg-transparent border border-blue-100 sm:border-0 rounded-full sm:rounded-none px-3 py-1.5 sm:p-0' }, 'Đánh giá khách quan • Lựa chọn thông minh'),

        h(
          'h1',
          { className: 'text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight sm:leading-[1.12] text-balance' },
          h('span', { className: 'block' }, 'Tìm đúng sản phẩm.'),
          h('span', { className: 'block text-blue-600 mt-1 sm:mt-1.5' }, 'Chọn đúng quyết định.')
        ),

        h(
          'p',
          { className: 'text-slate-700 font-medium text-[15px] sm:text-base md:text-lg leading-relaxed max-w-xl text-left sm:text-justify' },
          'Tuyển chọn sản phẩm vật lý và sản phẩm số đáng mua nhất — có điểm chấm minh bạch, ưu nhược điểm rõ ràng và trang đánh giá chi tiết cho từng sản phẩm.'
        ),

        // Search -> lọc lưới sản phẩm bên dưới
        h(
          'form',
          {
            onSubmit: handleSearch,
            className: 'flex flex-col sm:flex-row items-stretch gap-2 max-w-xl w-full bg-white p-2 rounded-xl sm:rounded-lg border border-slate-200 shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all',
          },
          h(
            'div',
            { className: 'relative flex-1 flex items-center min-w-0' },
            h('svg', { className: 'w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none flex-shrink-0', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })),
            h('input', {
              type: 'text',
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: 'VD: Nồi chiên, Chat GPT...',
              'aria-label': 'Tìm sản phẩm',
              className: 'w-full min-w-0 pl-11 pr-3 py-3 min-h-[44px] text-[15px] sm:text-base text-slate-800 placeholder:text-slate-400 placeholder:truncate focus:outline-none bg-transparent',
            })
          ),
          h(
            'button',
            { type: 'submit', className: 'px-7 py-3 min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] sm:text-base rounded-lg shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 flex-shrink-0 w-full sm:w-auto' },
            'Tìm sản phẩm'
          )
        ),

        // CTA kép kiểu landing
        h(
          'div',
          { className: 'flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 sm:gap-3 pt-1' },
          h(
            'button',
            { type: 'button', onClick: () => scrollToHash('#san-pham-vat-ly'), className: 'w-full sm:w-auto px-6 py-3 min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] sm:text-sm rounded-xl sm:rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]' },
            'Xem sản phẩm ↓'
          ),
          h(
            'button',
            { type: 'button', onClick: () => scrollToHash('#noi-bat'), className: 'w-full sm:w-auto px-6 py-3 min-h-[44px] bg-white hover:bg-blue-50 text-blue-700 font-bold text-[15px] sm:text-sm rounded-xl sm:rounded-lg border border-blue-200 shadow-sm transition-all active:scale-[0.98]' },
            'Sản phẩm nổi bật'
          )
        ),

        // Mini stats
        h(
          'div',
          { className: 'grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3 pt-2 border-t border-slate-200/70 sm:border-0 mt-1' },
          miniStats.map((s, i) =>
            h(
              'div',
              { key: i, className: 'min-w-0' },
              h('div', { className: 'text-base sm:text-xl font-black text-slate-900' }, s.number),
              h('div', { className: 'text-[11px] sm:text-xs text-slate-500 font-medium leading-snug break-words' }, s.label)
            )
          )
        )
      )
    ),

    h(
      'div',
      {
        className: 'absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer select-none',
        onClick: () => scrollToHash('#tong-quan'),
      },
      h('span', { className: 'text-[11px] font-semibold uppercase tracking-wider' }, 'Khám phá thêm'),
      h('svg', { className: 'w-4 h-4 animate-bounce', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
        h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 14l-7 7m0 0l-7-7' }))
    )
  );
}
