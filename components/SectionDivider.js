'use client';

import React from 'react';

const h = React.createElement;

// Dải ngăn cách giữa các section: line — diamond — line, xanh dương mờ
export default function SectionDivider() {
  return h(
    'div',
    { className: 'w-full bg-[#edf4fb] py-1 select-none', 'aria-hidden': true },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-center gap-3' },
      h('span', { className: 'h-px w-24 sm:w-44 bg-gradient-to-r from-transparent to-blue-300/70' }),
      h('span', { className: 'w-1.5 h-1.5 rotate-45 bg-blue-400/60' }),
      h('span', { className: 'h-px w-24 sm:w-44 bg-gradient-to-l from-transparent to-blue-300/70' })
    )
  );
}
