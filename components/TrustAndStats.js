'use client';

import React from 'react';

const h = React.createElement;

export default function TrustAndStats() {
  const stats = [
    { number: '500+', label: 'bảng xếp hạng đã công bố' },
    { number: '5.000+', label: 'giờ nghiên cứu thực tế' },
    { number: '12.000+', label: 'sản phẩm đã đánh giá' }
  ];

  const steps = [
    { step: '01', title: 'Thu thập & Nghiên cứu', desc: 'Khảo sát thị trường, thu thập sản phẩm mẫu từ nhà sản xuất chính hãng.' },
    { step: '02', title: 'Thử nghiệm thực tế', desc: 'Đội ngũ chuyên gia sử dụng và đo lường hiệu năng trong điều kiện thực tế.' },
    { step: '03', title: 'Chấm điểm & Xếp hạng', desc: 'Đánh giá theo 5 tiêu chí trọng số, công bố minh bạch phương pháp.' }
  ];

  return h(
    'section',
    { className: 'w-full bg-[#0f172a] text-white py-14' },
    h(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-8' },

      // Stats row
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mb-12 text-center' },
        stats.map((s, idx) =>
          h(
            'div',
            { key: idx, className: 'space-y-1' },
            h('div', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black text-blue-400 tracking-tight' }, s.number),
            h('div', { className: 'text-xs sm:text-sm text-slate-400 font-medium' }, s.label)
          )
        )
      ),

      // Methodology section
      h(
        'div',
        { className: 'border-t border-slate-700 pt-10' },
        h(
          'div',
          { className: 'text-center max-w-2xl mx-auto mb-8' },
          h('h2', { className: 'text-xl sm:text-2xl font-bold text-white tracking-tight mb-2' }, 'Phương pháp đánh giá minh bạch'),
          h('p', { className: 'text-sm text-slate-400 leading-relaxed' }, 'Quy trình 3 bước để đảm bảo mọi khuyến nghị đều chính xác, khách quan và đáng tin cậy.')
        ),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
          steps.map((s, idx) =>
            h(
              'div',
              { key: idx, className: 'bg-slate-800/60 border border-slate-700 rounded-md p-5 space-y-2' },
              h('div', { className: 'text-xs font-bold text-blue-400 uppercase tracking-wider' }, `Bước ${s.step}`),
              h('h3', { className: 'text-base font-bold text-white' }, s.title),
              h('p', { className: 'text-xs text-slate-400 leading-relaxed' }, s.desc)
            )
          )
        ),
        h(
          'div',
          { className: 'text-center mt-8' },
          h(
            'a',
            {
              href: '/phuong-phap-danh-gia',
              className: 'inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors'
            },
            'Tìm hiểu chi tiết phương pháp đánh giá',
            h('span', null, '→')
          )
        )
      )
    )
  );
}
