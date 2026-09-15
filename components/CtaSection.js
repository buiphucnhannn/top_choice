'use client';

import React from 'react';

const h = React.createElement;

// CTA cuối landing — 2 cột: nội dung + checklist bên trái, thẻ hành động bên phải
export default function CtaSection() {
  const go = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const checks = [
    'Chấm điểm /10 minh bạch từng tiêu chí',
    'Mỗi sản phẩm có trang đánh giá chi tiết',
    'Lọc theo nhu cầu, xem miễn phí',
  ];

  const checkIcon = h(
    'svg',
    { className: 'w-4 h-4 text-blue-200 flex-shrink-0 mt-0.5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.5, d: 'M5 13l4 4L19 7' })
  );

  return h(
    'section',
    { className: 'w-full pt-10 pb-16 bg-[#edf4fb]' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8' },
      h(
        'div',
        { className: 'relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 sm:p-12 text-white shadow-lg' },
        h('div', { className: 'absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10' }),
        h('div', { className: 'absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/10' }),
        h(
          'div',
          { className: 'relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center' },
          // Left: nội dung + checklist
          h(
            'div',
            { className: 'space-y-4 text-center lg:text-left' },
            h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-100' }, 'Bắt đầu ngay'),
            h('h2', { className: 'text-2xl sm:text-3xl font-black tracking-tight' }, 'Sẵn sàng chọn sản phẩm phù hợp?'),
            h('p', { className: 'text-sm sm:text-base text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0' }, 'Lướt lưới sản phẩm, bấm vào món bạn quan tâm để đọc đánh giá chi tiết: điểm số, ưu nhược điểm, thông số và giá tham khảo.'),
            h(
              'ul',
              { className: 'space-y-2 pt-1 text-left max-w-md mx-auto lg:mx-0' },
              checks.map((c) =>
                h('li', { key: c, className: 'flex items-start gap-2.5 text-sm font-medium text-white' }, checkIcon, c)
              )
            )
          ),
          // Right: thẻ hành động
          h(
            'div',
            { className: 'bg-white rounded-md shadow-xl p-6 sm:p-8 space-y-4 text-center' },
            h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-600' }, 'Khám phá miễn phí'),
            h('h3', { className: 'text-lg font-black text-slate-900 tracking-tight' }, 'Tìm sản phẩm của bạn trong 1 phút'),
            h(
              'div',
              { className: 'space-y-2.5' },
              h('button', { type: 'button', onClick: () => go('#san-pham-vat-ly'), className: 'w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-md shadow transition-all active:scale-[0.99]' }, 'Xem sản phẩm vật lý →'),
              h('button', { type: 'button', onClick: () => go('#san-pham-so'), className: 'w-full px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-sm rounded-md border border-blue-200 transition-all active:scale-[0.99]' }, 'Xem sản phẩm số →'),
              h('button', { type: 'button', onClick: () => go('#noi-bat'), className: 'w-full px-6 py-2.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors' }, 'hoặc xem sản phẩm nổi bật')
            ),
            h('p', { className: 'text-[11px] text-slate-400' }, 'Không cần đăng nhập • Dữ liệu cập nhật định kỳ')
          )
        )
      )
    )
  );
}
