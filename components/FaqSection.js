'use client';

import React, { useState } from 'react';

const h = React.createElement;

const faqs = [
  {
    q: 'Top Choice là gì?',
    a: 'Top Choice là trang tuyển chọn sản phẩm vật lý và sản phẩm số đáng mua nhất. Mỗi sản phẩm đều có điểm số, ưu nhược điểm và trang đánh giá chi tiết riêng để bạn dễ so sánh và ra quyết định.',
  },
  {
    q: 'Điểm số sản phẩm được chấm thế nào?',
    a: 'Mỗi sản phẩm được chấm trên thang 10 theo từng tiêu chí (hiệu năng, thiết kế, độ bền, giá trị...). Điểm tổng và chi tiết từng tiêu chí đều hiển thị trong trang đánh giá riêng của sản phẩm đó.',
  },
  {
    q: 'Giá hiển thị có chính xác không?',
    a: 'Giá là mức tham khảo tại thời điểm kiểm tra (kèm ngày cập nhật trong trang chi tiết). Giá thực tế có thể thay đổi theo nhà bán, bạn nên đối chiếu trước khi mua.',
  },
  {
    q: 'Làm sao để xem chi tiết một sản phẩm?',
      a: 'Bấm vào thẻ sản phẩm trong lưới “Sản phẩm vật lý” hoặc “Sản phẩm số”, hoặc khu “Điểm cao nhất”. Trang chi tiết gồm điểm từng tiêu chí, ưu nhược điểm, thông số kỹ thuật, giá tham khảo và sản phẩm thay thế.',
  },
  {
    q: 'Sản phẩm vật lý và sản phẩm số khác nhau thế nào?',
    a: 'Sản phẩm vật lý là đồ gia dụng, thiết bị điện tử... có giá bán tham khảo bằng VNĐ. Sản phẩm số là AI, phần mềm, VPN, hosting... thường tính giá theo gói hoặc theo tháng, kèm thông tin nền tảng và tính năng.',
  },
  {
    q: 'Tôi có thể đề xuất sản phẩm để đánh giá không?',
    a: 'Hoàn toàn được. Bạn gửi đề xuất qua email hotro@topchoice.vn kèm tên sản phẩm và nhu cầu sử dụng. Ban biên tập sẽ ưu tiên những sản phẩm được nhiều người quan tâm.',
  },
  {
    q: 'Dữ liệu điểm số và giá có được cập nhật không?',
    a: 'Có. Điểm số và giá tham khảo được rà soát định kỳ theo biến động thị trường. Mỗi trang chi tiết đều ghi rõ ngày kiểm tra dữ liệu lần cuối để bạn yên tâm tham khảo.',
  },
  {
    q: 'Tôi cần tư vấn trực tiếp thì làm sao?',
    a: 'Bạn gửi email về hotro@topchoice.vn kèm nhu cầu và ngân sách cụ thể, đội ngũ Top Choice sẽ gợi ý sản phẩm phù hợp trong vòng 24 giờ làm việc — hoàn toàn miễn phí.',
  },
];

export default function FaqSection() {
  // Accordion đơn, mặc định đóng tất cả
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx));

  const renderCard = (faq, idx) => {
    const isOpen = openIdx === idx;
    return h(
      'div',
      {
        key: idx,
        className: `mb-3 sm:mb-4 break-inside-avoid bg-white border rounded-xl p-4 sm:p-4 shadow-sm transition-colors flex flex-col min-w-0 ${isOpen ? 'border-blue-400 shadow-md' : 'border-slate-200 hover:border-blue-300'}`,
      },
      h(
        'button',
        {
          type: 'button',
          onClick: () => toggleFaq(idx),
          'aria-expanded': isOpen,
          className: 'w-full text-left flex items-center justify-between gap-3 group min-h-[44px]',
        },
        h('span', { className: 'text-sm sm:text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors flex-1' }, faq.q),
        h(
          'span',
          {
            className: `w-6 h-6 flex-shrink-0 flex items-center justify-center border rounded text-sm font-bold transition-all ${
              isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'
            }`,
          },
          isOpen ? '−' : '+'
        )
      ),
      h(
        'div',
        {
          className: `grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`,
        },
        h(
          'div',
          { className: 'overflow-hidden' },
          h('div', { className: 'pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed' }, faq.a)
        )
      )
    );
  };

  return h(
    'section',
    { id: 'faq', className: 'w-full pt-10 sm:pt-12 pb-10 bg-[#edf4fb] scroll-mt-20 overflow-x-clip' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6' },
      h(
        'div',
        { className: 'text-center max-w-2xl mx-auto px-1' },
        h('p', { className: 'text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-1' }, 'FAQ'),
        h('h2', { className: 'text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight text-balance' }, 'Câu hỏi thường gặp'),
        h('p', { className: 'text-[13px] sm:text-sm text-slate-500 mt-1' }, 'Những điều cần biết khi chọn sản phẩm trên trang này.')
      ),
      // Chảy 2 cột độc lập (masonry): mở card nào chỉ nở card đó, không kéo card bên cạnh
      h(
        'div',
        { className: 'columns-1 md:columns-2 gap-4' },
        faqs.map((faq, idx) => renderCard(faq, idx))
      )
    )
  );
}
