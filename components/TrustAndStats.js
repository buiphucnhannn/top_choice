'use client';

import React from 'react';

const h = React.createElement;

// Dải quy trình — phiên bản nền sáng, cùng tông với toàn trang
export default function TrustAndStats() {
  const steps = [
    { title: 'Lướt & lọc sản phẩm', desc: 'Chọn nhóm vật lý hoặc số, lọc theo danh mục hoặc gõ từ khóa để thu hẹp đúng nhu cầu.' },
    { title: 'So điểm & ưu nhược', desc: 'Mỗi sản phẩm có điểm /10 theo từng tiêu chí, kèm ưu nhược điểm rõ ràng để so sánh nhanh.' },
    { title: 'Mở trang chi tiết', desc: 'Bấm vào sản phẩm để xem đánh giá đầy đủ: thông số, giá tham khảo và gợi ý thay thế.' },
  ];

  return h(
    'section',
    { id: 'quy-trinh', className: 'w-full bg-[#edf4fb] py-10 sm:py-12 scroll-mt-20 overflow-x-clip' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8' },
      // Steps header
      h(
        'div',
        { className: 'text-center max-w-2xl mx-auto space-y-2 px-1' },
        h('p', { className: 'text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600' }, 'Cách hoạt động'),
        h('h2', { className: 'text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight text-balance' }, 'Chọn sản phẩm trong 3 bước'),
        h('p', { className: 'text-[13px] sm:text-sm text-slate-500 leading-relaxed' }, 'Chỉ cần lướt, lọc và mở trang chi tiết là đủ để ra quyết định.')
      ),

      // Steps: connected stepper
      h(
        'div',
        { className: 'relative grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6' },
        // connecting dashed line (desktop)
        h('div', { className: 'hidden md:block absolute top-9 left-[18%] right-[18%] border-t-2 border-dashed border-blue-200 pointer-events-none', 'aria-hidden': true }),
        steps.map((s, idx) =>
          h(
            'div',
            { key: idx, className: 'relative bg-white border border-slate-200 rounded-xl p-5 sm:p-6 text-center shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all' },
            h(
              'div',
              { className: 'relative z-10 w-[72px] h-[72px] mx-auto mb-4 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center' },
              h(
                'span',
                { className: 'w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-black flex items-center justify-center shadow-md' },
                String(idx + 1)
              )
            ),
            h('h3', { className: 'text-sm sm:text-base font-bold text-slate-900 mb-1.5' }, s.title),
            h('p', { className: 'text-xs text-slate-500 leading-relaxed' }, s.desc)
          )
        )
      )
    )
  );
}
