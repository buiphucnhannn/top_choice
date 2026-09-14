'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const h = React.createElement;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      h(Breadcrumb, { items: [{ name: 'Liên hệ & Tư vấn' }] }),
      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },

        // Left Column: Header + Form (7 cols)
        h(
          'div',
          { className: 'lg:col-span-7 space-y-6' },
          h(
            'header',
            { className: 'space-y-3' },
            h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Liên Hệ & Tư Vấn Chuyên Môn'),
            h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed text-justify' }, 'Bạn muốn đặt câu hỏi cho chuyên gia, đề xuất sản phẩm thử nghiệm hoặc cần hỗ trợ thông tin? Hãy gửi tin nhắn cho đội ngũ biên tập Top Choice.')
          ),

          h(
            'div',
            { className: 'bg-white border border-slate-200 rounded-lg shadow-sm p-6 sm:p-8' },
            submitted
              ? h(
                  'div',
                  { className: 'text-center py-8 space-y-4' },
                  h('div', { className: 'w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200' },
                    h('svg', { className: 'w-8 h-8', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 },
                      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M5 13l4 4L19 7' })
                    )
                  ),
                  h('h3', { className: 'text-lg font-bold text-slate-900' }, 'Câu hỏi / Tin nhắn đã được gửi thành công!'),
                  h('p', { className: 'text-xs text-slate-600 max-w-md mx-auto leading-relaxed' }, 'Cảm ơn bạn đã liên hệ. Đội ngũ chuyên gia và ban biên tập sẽ giải đáp chi tiết qua email của bạn trong vòng 24-48 giờ làm việc.'),
                  h(
                    'button',
                    {
                      onClick: () => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      },
                      className: 'mt-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded transition-colors'
                    },
                    'Gửi thêm câu hỏi khác'
                  )
                )
              : h(
                  'form',
                  { onSubmit: handleSubmit, className: 'space-y-4 text-left' },
                  h(
                    'div',
                    { className: 'space-y-1.5' },
                    h('label', { className: 'text-xs font-bold text-slate-700' }, 'Họ và tên *'),
                    h('input', {
                      type: 'text',
                      required: true,
                      value: formData.name,
                      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                      placeholder: 'Ví dụ: Nguyễn Văn A',
                      className: 'w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    })
                  ),
                  h(
                    'div',
                    { className: 'space-y-1.5' },
                    h('label', { className: 'text-xs font-bold text-slate-700' }, 'Địa chỉ Email *'),
                    h('input', {
                      type: 'email',
                      required: true,
                      value: formData.email,
                      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                      placeholder: 'email@example.com',
                      className: 'w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    })
                  ),
                  h(
                    'div',
                    { className: 'space-y-1.5' },
                    h('label', { className: 'text-xs font-bold text-slate-700' }, 'Nội dung tin nhắn / Đề xuất sản phẩm *'),
                    h('textarea', {
                      rows: 5,
                      required: true,
                      value: formData.message,
                      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                      placeholder: 'Mô tả chi tiết sản phẩm bạn muốn Top Choice đánh giá, hoặc thông tin bạn muốn phản ánh...',
                      className: 'w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    })
                  ),
                  h(
                    'button',
                    {
                      type: 'submit',
                      className: 'w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded shadow-sm transition-all active:scale-[0.98]'
                    },
                    'Gửi tin nhắn đề xuất'
                  )
                )
          )
        ),

        // Right Sticky Sidebar: Contact Details (5 cols)
        h(
          'aside',
          { className: 'lg:col-span-5 space-y-6 lg:sticky lg:top-24' },

          // 1. Thông tin văn phòng & hotline
          h(
            'div',
            { className: 'p-6 bg-white border border-slate-200 rounded-lg shadow-sm space-y-4' },
            h('h3', { className: 'text-sm font-bold text-slate-900 uppercase tracking-wider' },
              'Thông tin liên hệ trực tiếp'
            ),
            h(
              'div',
              { className: 'space-y-3.5 text-xs' },
              h(
                'div',
                { className: 'space-y-1' },
                h('div', { className: 'font-bold text-slate-900' }, 'Văn phòng thử nghiệm & Biên tập'),
                h('div', { className: 'text-slate-600 leading-relaxed' }, 'Tầng 8, Tòa nhà TechCenter, 123 Đường Công Nghệ, Cầu Giấy, Hà Nội')
              ),
              h(
                'div',
                { className: 'space-y-1 pt-2 border-t border-slate-100' },
                h('div', { className: 'font-bold text-slate-900' }, 'Đường dây nóng độc giả'),
                h('div', { className: 'text-blue-600 font-extrabold' }, '1900 6868 (Miễn phí cuộc gọi)')
              ),
              h(
                'div',
                { className: 'space-y-1 pt-2 border-t border-slate-100' },
                h('div', { className: 'font-bold text-slate-900' }, 'Hộp thư điện tử'),
                h('div', { className: 'text-slate-600' }, 'banbientap@topchoice.vn • hotro@topchoice.vn')
              ),
              h(
                'div',
                { className: 'space-y-1 pt-2 border-t border-slate-100' },
                h('div', { className: 'font-bold text-slate-900' }, 'Thời gian làm việc'),
                h('div', { className: 'text-slate-600' }, 'Thứ 2 - Thứ 6: 08:30 - 18:00 (Hỗ trợ online 24/7)')
              )
            )
          ),

          // 2. Kênh hỗ trợ hữu ích
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' }, 'Có thể bạn đang tìm kiếm'),
            h(
              'div',
              { className: 'space-y-2 text-xs font-semibold' },
              [
                { title: 'Câu hỏi thường gặp (FAQ)', href: '/cau-hoi-thuong-gap' },
                { title: 'Phương pháp thử nghiệm & đo lường', href: '/phuong-phap-danh-gia' },
                { title: 'Nguyên tắc kiểm soát chất lượng biên tập', href: '/nguyen-tac-bien-tap' }
              ].map((item, idx) =>
                h(
                  'a',
                  {
                    key: idx,
                    href: item.href,
                    className: 'flex items-center justify-between p-2.5 rounded hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-100 transition-colors'
                  },
                  h('span', null, item.title),
                  h('span', { className: 'text-slate-400' }, '→')
                )
              )
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
