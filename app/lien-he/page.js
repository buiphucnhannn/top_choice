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
      { className: 'flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      h(Breadcrumb, { items: [{ name: 'Liên hệ' }] }),
      h(
        'header',
        { className: 'space-y-3 text-center max-w-2xl mx-auto' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'Kênh Phản Hồi & Đóng Góp'
        ),
        h('h1', { className: 'text-3xl font-extrabold text-slate-900 tracking-tight' }, 'Liên Hệ & Đề Xuất Đánh Giá'),
        h('p', { className: 'text-sm sm:text-base text-slate-600' }, 'Bạn muốn đề xuất một sản phẩm để chúng tôi thử nghiệm, hoặc cần hỗ trợ thông tin? Hãy gửi tin nhắn cho chúng tôi.')
      ),

      h(
        'div',
        { className: 'max-w-xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm p-6 sm:p-8' },
        submitted
          ? h(
              'div',
              { className: 'text-center py-8 space-y-3' },
              h('div', { className: 'text-4xl' }, '🎉'),
              h('h3', { className: 'text-lg font-bold text-slate-900' }, 'Tin nhắn đã được gửi thành công!'),
              h('p', { className: 'text-xs text-slate-600' }, 'Cảm ơn bạn đã gửi đóng góp. Ban biên tập sẽ phản hồi qua email trong vòng 24-48 giờ làm việc.')
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
                  rows: 4,
                  required: true,
                  value: formData.message,
                  onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                  placeholder: 'Mô tả chi tiết sản phẩm bạn muốn Top Choice đánh giá...',
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
    h(Footer, null)
  );
}
