'use client';

import React from 'react';

const h = React.createElement;

export default function IntroSection() {
  const highlights = [
    {
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
        ),
      title: 'Đánh giá độc lập',
      desc: 'Thử nghiệm thực tế, chấm điểm minh bạch theo tiêu chí rõ ràng.'
    },
    {
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' })
        ),
      title: 'So sánh trực quan',
      desc: 'Đối chiếu sản phẩm song song với ma trận tiêu chí chi tiết.'
    },
    {
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
        ),
      title: 'Xếp hạng Top 10',
      desc: 'Bảng xếp hạng cập nhật hàng tuần dựa trên dữ liệu mới nhất.'
    },
    {
      icon: (props) =>
        h(
          'svg',
          { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })
        ),
      title: 'Hướng dẫn chọn mua',
      desc: 'Cẩm nang từ chuyên gia giúp bạn tránh sai lầm khi mua sắm.'
    }
  ];

  return h(
    'section',
    { className: 'w-full py-10 bg-[#edf4fb]' },
    h(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-8' },
      // Section header
      h(
        'div',
        { className: 'text-center max-w-2xl mx-auto mb-8 space-y-2' },
        h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, 'Nền tảng đánh giá sản phẩm đáng tin cậy'),
        h('p', { className: 'text-sm text-slate-500 leading-relaxed' }, 'Chúng tôi nghiên cứu, thử nghiệm và so sánh hàng trăm sản phẩm vật lý lẫn sản phẩm số — từ đồ gia dụng, thiết bị điện tử đến công cụ AI và phần mềm SaaS — để đưa ra những khuyến nghị khách quan nhất.')
      ),

      // 4 Highlights grid
      h(
        'div',
        { className: 'grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6' },
        highlights.map((item, idx) =>
          h(
            'div',
            { key: idx, className: 'flex flex-col items-center text-center p-4 sm:p-5 bg-white border border-slate-200 rounded-md shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200 group' },
            h(
              'div',
              { className: 'w-10 h-10 flex items-center justify-center bg-blue-50 border border-blue-100 rounded-md mb-3 group-hover:border-blue-300 transition-colors' },
              item.icon({ className: 'w-5 h-5 text-blue-600' })
            ),
            h('h3', { className: 'text-sm font-bold text-slate-900 mb-1' }, item.title),
            h('p', { className: 'text-xs text-slate-500 leading-relaxed' }, item.desc)
          )
        )
      )
    )
  );
}
