'use client';

import React, { useState } from 'react';

const h = React.createElement;

export default function FaqSection() {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      q: 'Làm thế nào để chúng tôi đánh giá sản phẩm?',
      a: 'Đội ngũ chuyên gia của chúng tôi thu thập mẫu thực tế, đo lường các chỉ số hiệu năng, thiết kế, độ bền và phân tích phản hồi từ người dùng thực tế để đưa ra số điểm khách quan nhất.'
    },
    {
      q: 'Các bảng xếp hạng được xây dựng dựa trên tiêu chí nào?',
      a: 'Mỗi bảng xếp hạng kết hợp nhiều trọng số: chất lượng tính năng (35%), giá thành & giá trị mang lại (25%), độ bền bỉ (20%) và dịch vụ bảo hành/hỗ trợ người dùng (20%).'
    },
    {
      q: 'Thông tin giá có được cập nhật thường xuyên không?',
      a: 'Dữ liệu giá tham khảo được cập nhật định kỳ hàng tuần từ các nhà bán lẻ và website phân phối chính thức nhằm đảm bảo tính chính xác tại thời điểm người dùng tham khảo.'
    },
    {
      q: 'Tôi có thể đề xuất sản phẩm để được đánh giá không?',
      a: 'Hoàn toàn được! Bạn có thể gửi yêu cầu đánh giá qua trang Liên hệ. Ban biên tập sẽ xem xét mức độ quan tâm của cộng đồng và tiến hành thử nghiệm trong các bài viết tiếp theo.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const renderCard = (faq, idx) => {
    const isOpen = !!openItems[idx];
    return h(
      'div',
      {
        key: idx,
        className: 'bg-white border border-slate-200 rounded-md p-4 shadow-sm hover:border-blue-300 transition-all'
      },
      h(
        'button',
        {
          type: 'button',
          onClick: () => toggleFaq(idx),
          className: 'w-full text-left flex items-start justify-between gap-3 text-slate-800 hover:text-blue-600 transition-colors group'
        },
        h(
          'span',
          { className: 'text-sm sm:text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors flex-1' },
          faq.q
        ),
        h(
          'span',
          {
            className: `w-6 h-6 flex-shrink-0 flex items-center justify-center border rounded text-sm font-bold transition-all ${
              isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'
            }`
          },
          isOpen ? '−' : '+'
        )
      ),
      isOpen &&
        h(
          'div',
          { className: 'mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn' },
          faq.a
        )
    );
  };

  const colLeft = [
    { faq: faqs[0], idx: 0 },
    { faq: faqs[2], idx: 2 }
  ];
  const colRight = [
    { faq: faqs[1], idx: 1 },
    { faq: faqs[3], idx: 3 }
  ];

  return h(
    'section',
    { className: 'w-full pt-12 pb-16 bg-[#edf4fb]' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8 space-y-6' },
      // Header
      h(
        'div',
        { className: 'flex items-center justify-between' },
        h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, 'Câu hỏi thường gặp'),
        h(
          'a',
          { href: '/cau-hoi-thuong-gap', className: 'text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors' },
          'Xem tất cả câu hỏi',
          h('span', null, '→')
        )
      ),

      // 2 Independent Columns
      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 items-start' },
        h(
          'div',
          { className: 'flex flex-col gap-4' },
          colLeft.map((item) => renderCard(item.faq, item.idx))
        ),
        h(
          'div',
          { className: 'flex flex-col gap-4' },
          colRight.map((item) => renderCard(item.faq, item.idx))
        )
      )
    )
  );
}
