'use client';

import React from 'react';

const h = React.createElement;

// Section "Tổng quan": vì sao nên chọn sản phẩm ở đây — chỉ nói về sản phẩm
export default function IntroSection() {
  const highlights = [
    {
      icon: (props) =>
        h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })),
      title: 'Tuyển chọn kỹ',
      desc: 'Chỉ giữ sản phẩm đáng mua: điểm cao, được kiểm chứng, thông tin rõ ràng.',
    },
    {
      icon: (props) =>
        h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' })),
      title: 'Giá & điểm minh bạch',
      desc: 'Mỗi sản phẩm có điểm /10, giá tham khảo và ngày cập nhật cụ thể.',
    },
    {
      icon: (props) =>
        h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })),
      title: '2 nhóm rõ ràng',
      desc: 'Sản phẩm vật lý (gia dụng, điện tử...) và sản phẩm số (AI, phần mềm, VPN...).',
    },
    {
      icon: (props) =>
        h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })),
      title: 'Xem chi tiết 1 chạm',
      desc: 'Bấm vào bất kỳ sản phẩm nào để mở trang đánh giá chi tiết đầy đủ.',
    },
  ];

  return h(
    'section',
    { id: 'tong-quan', className: 'w-full py-10 sm:py-12 bg-[#edf4fb] scroll-mt-20 overflow-x-clip' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8' },
      h(
        'div',
        { className: 'text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 px-1' },
        h('p', { className: 'text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600' }, 'Tổng quan'),
        h('h2', { className: 'text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight text-balance leading-snug' }, 'Mọi sản phẩm đáng mua, gói gọn trong một trang'),
        h('p', { className: 'text-[13px] sm:text-sm text-slate-500 leading-relaxed text-balance' }, 'Từ nồi chiên không dầu, tai nghe, laptop đến trợ lý AI, VPN và hosting — mỗi sản phẩm đều được chấm điểm minh bạch, liệt kê ưu nhược điểm rõ ràng và có trang đánh giá chi tiết riêng.')
      ),
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5' },
        highlights.map((item, idx) =>
          h(
            'div',
            { key: idx, className: 'flex sm:flex-col flex-row sm:items-center sm:text-center text-left items-start gap-3 sm:gap-0 p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 group' },
            h('div', { className: 'w-11 h-11 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-blue-50 border border-blue-100 rounded-xl sm:rounded-lg sm:mb-3 group-hover:border-blue-300 transition-colors' },
              item.icon({ className: 'w-5 h-5 text-blue-600' })),
            h(
              'div',
              { className: 'min-w-0' },
              h('h3', { className: 'text-[15px] sm:text-sm font-bold text-slate-900 mb-1' }, item.title),
              h('p', { className: 'text-[13px] sm:text-xs text-slate-500 leading-relaxed break-words' }, item.desc)
            )
          )
        )
      )
    )
  );
}
