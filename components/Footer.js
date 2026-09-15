'use client';

import React from 'react';

const h = React.createElement;

function go(hash) {
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  } else {
    window.location.href = `/${hash}`;
  }
}

const anchor = (label, hash, key) =>
  h(
    'li',
    { key },
    h(
      'a',
      {
        href: hash,
        onClick: (e) => { e.preventDefault(); go(hash); },
        className: 'text-slate-400 hover:text-white transition-colors',
      },
      label
    )
  );

export default function Footer() {
  const sections = [
    { label: 'Tổng quan', hash: '#tong-quan' },
    { label: 'Vật lý', hash: '#san-pham-vat-ly' },
    { label: 'Số', hash: '#san-pham-so' },
    { label: 'Nổi bật', hash: '#noi-bat' },
    { label: 'Đánh giá', hash: '#danh-gia' },
  ];
  const trust = [
    { label: 'Cách hoạt động', hash: '#quy-trinh' },
    { label: 'FAQ', hash: '#faq' },
  ];

  return h(
    'footer',
    { className: 'w-full bg-[#0B1528] text-slate-300 pt-10 sm:pt-14 pb-8 border-t-4 border-blue-600 overflow-x-clip' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8' },
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80' },
        // Brand
        h(
          'div',
          { className: 'lg:col-span-2 space-y-4' },
          h(
            'div',
            { className: 'flex flex-col' },
            h(
              'div',
              { className: 'flex items-baseline tracking-tight' },
              h('span', { className: 'text-2xl font-black text-white tracking-tighter' }, 'TOP'),
              h('span', { className: 'text-2xl font-black text-blue-400 ml-1 tracking-tighter' }, 'CHOICE')
            ),
            h('span', { className: 'text-xs text-slate-400 font-medium tracking-tight mt-0.5' }, 'Đánh giá khách quan. Lựa chọn thông minh.')
          ),
          h('p', { className: 'text-xs text-slate-500 leading-relaxed max-w-sm' }, 'Nền tảng tuyển chọn sản phẩm vật lý và sản phẩm số đáng mua nhất — mỗi sản phẩm đều có trang đánh giá chi tiết với điểm số, ưu nhược điểm và giá tham khảo.'),
          h(
            'button',
            { type: 'button', onClick: () => go('#san-pham-vat-ly'), className: 'px-5 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition-all' },
            'Xem sản phẩm ngay →'
          )
        ),
        // Khám phá
        h(
          'div',
          { className: 'space-y-3' },
          h('h4', { className: 'text-xs font-bold text-white tracking-wide uppercase border-b border-slate-700 pb-2' }, 'Khám phá'),
          h('ul', { className: 'space-y-2 text-xs' }, sections.map((s) => anchor(s.label, s.hash, s.hash)))
        ),
        // Tin cậy
        h(
          'div',
          { className: 'space-y-3' },
          h('h4', { className: 'text-xs font-bold text-white tracking-wide uppercase border-b border-slate-700 pb-2' }, 'Tin cậy'),
          h('ul', { className: 'space-y-2 text-xs' }, trust.map((s) => anchor(s.label, s.hash, s.hash)))
        )
      ),
      h(
        'div',
        { className: 'pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500' },
        h('div', null, '© 2026 Top Choice. Tất cả quyền được bảo lưu.'),
        h('div', { className: 'italic font-medium text-slate-400' }, 'Sản phẩm tốt hơn. Cuộc sống tốt hơn.')
      )
    )
  );
}
