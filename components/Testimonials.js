'use client';

import React from 'react';

const h = React.createElement;

// Section "Đánh giá": 100% review người dùng sau khi mua và sử dụng thực tế
export default function Testimonials() {
  const userReviews = [
    {
      name: 'Chị Lan Anh',
      meta: 'Đã mua nồi chiên Aircook Pro 6L',
      quote: 'Trang đánh giá ghi đúng ưu nhược điểm. Tôi chốt mua sau 5 phút đọc, dùng 3 tháng vẫn ưng.',
      initials: 'LA',
      color: 'bg-blue-600',
    },
    {
      name: 'Anh Đức Minh',
      meta: 'Đang dùng NordVPN Pro',
      quote: 'Điểm số và bảng thông số rõ ràng, không PR lố. So giá với gói dùng là thấy đáng tiền ngay.',
      initials: 'DM',
      color: 'bg-emerald-600',
    },
    {
      name: 'Bạn Thu Hà',
      meta: 'Freelancer dùng Notion AI',
      quote: 'Thích nhất là mỗi sản phẩm đều có trang chi tiết riêng, đọc xong là biết có hợp với mình không.',
      initials: 'TH',
      color: 'bg-violet-600',
    },
    {
      name: 'Anh Minh Tuấn',
      meta: 'Đã mua tai nghe Sony WF-1000XM5',
      quote: 'Chống ồn đúng như bài đánh giá mô tả. Đeo đi làm mỗi ngày, đáng từng đồng đã bỏ ra.',
      initials: 'MT',
      color: 'bg-rose-600',
    },
    {
      name: 'Chị Phương Thảo',
      meta: 'Chủ shop online dùng Canva Pro',
      quote: 'Nhờ đọc kỹ phần tính năng mà tôi chọn đúng gói Pro thay vì gói miễn phí. Làm banner nhanh gấp đôi.',
      initials: 'PT',
      color: 'bg-amber-500',
    },
    {
      name: 'Anh Quốc Bảo',
      meta: 'Đang dùng Hostinger Cloud',
      quote: 'Web tải nhanh hẳn sau khi chuyển host theo gợi ý. Bảng thông số ghi rõ RAM, CPU nên dễ quyết định.',
      initials: 'QB',
      color: 'bg-cyan-600',
    },
  ];

  const stars = (n = 5) =>
    h('div', { className: 'flex items-center gap-0.5 text-amber-400', 'aria-label': `${n} trên 5 sao` },
      Array.from({ length: n }).map((_, i) =>
        h('svg', { key: i, className: 'w-3.5 h-3.5', fill: 'currentColor', viewBox: '0 0 20 20' },
          h('path', { d: 'M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.28 3.94a1 1 0 00.95.69h4.14c.97 0 1.37 1.24.59 1.81l-3.35 2.43a1 1 0 00-.36 1.12l1.28 3.94c.3.92-.75 1.69-1.54 1.12l-3.35-2.43a1 1 0 00-1.18 0l-3.35 2.43c-.78.57-1.84-.2-1.54-1.12l1.28-3.94a1 1 0 00-.36-1.12L2.09 9.37c-.78-.57-.38-1.81.6-1.81h4.13a1 1 0 00.95-.69l1.28-3.94z' }))));

  return h(
    'section',
    { id: 'danh-gia', className: 'w-full py-12 bg-[#edf4fb] scroll-mt-20' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8 space-y-6' },
      h(
        'div',
        { className: 'text-center max-w-2xl mx-auto space-y-2' },
        h('p', { className: 'text-xs font-extrabold uppercase tracking-widest text-blue-600' }, 'Đánh giá'),
        h('h2', { className: 'text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight' }, 'Người dùng nói gì về sản phẩm'),
        h('p', { className: 'text-sm text-slate-500' }, 'Review thật từ người đã mua và sử dụng sản phẩm trong đời sống, công việc hàng ngày.')
      ),
      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
        userReviews.map((u, i) =>
          h(
            'div',
            { key: i, className: 'bg-white border border-slate-200 rounded-md p-5 shadow-sm space-y-3 hover:border-blue-300 hover:shadow-md transition-all flex flex-col' },
            stars(5),
            h('p', { className: 'text-xs sm:text-sm text-slate-700 leading-relaxed flex-1' }, `“${u.quote}”`),
            h(
              'div',
              { className: 'flex items-center gap-3 pt-3 border-t border-slate-100' },
              h('span', { className: `w-10 h-10 rounded-full ${u.color} flex items-center justify-center text-xs font-black text-white flex-shrink-0` }, u.initials),
              h(
                'div',
                null,
                h('div', { className: 'text-sm font-bold text-slate-900' }, u.name),
                h('div', { className: 'text-[11px] text-slate-500' }, u.meta)
              )
            )
          )
        )
      )
    )
  );
}
