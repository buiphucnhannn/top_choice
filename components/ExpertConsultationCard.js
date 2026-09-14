'use client';

import React, { useState } from 'react';

const h = React.createElement;

export default function ExpertConsultationCard({ author }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', question: '' });
    }, 200);
  };

  return h(
    'div',
    { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
    h(
      'div',
      { className: 'flex items-center gap-3 pb-2.5 border-b border-slate-100' },
      h('img', { src: author.avatar, alt: author.name, className: 'w-10 h-10 rounded-full object-cover border border-slate-200' }),
      h(
        'div',
        null,
        h('div', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' }, 'Tư vấn chuyên môn'),
        h('div', { className: 'text-[11px] text-slate-500' }, author.name)
      )
    ),
    h(
      'p',
      { className: 'text-xs text-slate-600 leading-relaxed text-justify' },
      'Đội ngũ chuyên gia Top Choice sẵn sàng giải đáp thắc mắc chọn mua sản phẩm của bạn hoàn toàn miễn phí và khách quan.'
    ),
    h(
      'button',
      {
        type: 'button',
        onClick: () => setIsOpen(true),
        className: 'w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold shadow-xs transition-colors cursor-pointer text-center block'
      },
      'Gửi câu hỏi cho chuyên gia →'
    ),

    // Modal Demo
    isOpen &&
      h(
        'div',
        { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs' },
        h(
          'div',
          { className: 'relative w-full max-w-md bg-white border border-slate-200 rounded-lg shadow-xl p-6 space-y-4' },
          // Close button
          h(
            'button',
            {
              type: 'button',
              onClick: handleClose,
              className: 'absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-600 text-lg font-bold w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors'
            },
            '✕'
          ),

          submitted
            ? h(
                'div',
                { className: 'text-center py-6 space-y-3' },
                h(
                  'div',
                  { className: 'w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200' },
                  h('svg', { className: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 },
                    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M5 13l4 4L19 7' })
                  )
                ),
                h('h4', { className: 'text-base font-bold text-slate-900' }, 'Đã gửi câu hỏi thành công!'),
                h(
                  'p',
                  { className: 'text-xs text-slate-600 leading-relaxed' },
                  `Cảm ơn bạn. Chuyên gia ${author.name} và ban biên tập sẽ gửi câu trả lời phân tích chi tiết tới email của bạn trong thời gian sớm nhất.`
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: handleClose,
                    className: 'mt-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors'
                  },
                  'Hoàn tất'
                )
              )
            : h(
                'form',
                { onSubmit: handleSubmit, className: 'space-y-3.5 text-left' },
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('h3', { className: 'text-sm font-bold text-slate-900' }, `Đặt câu hỏi cho ${author.name}`),
                  h('p', { className: 'text-xs text-slate-500' }, 'Nhận tư vấn trực tiếp từ chuyên gia để chọn sản phẩm phù hợp nhất.')
                ),
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'text-xs font-semibold text-slate-700' }, 'Họ và tên của bạn *'),
                  h('input', {
                    type: 'text',
                    required: true,
                    value: formData.name,
                    onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                    placeholder: 'Ví dụ: Tuấn Hưng',
                    className: 'w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  })
                ),
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'text-xs font-semibold text-slate-700' }, 'Email nhận phản hồi *'),
                  h('input', {
                    type: 'email',
                    required: true,
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                    placeholder: 'tuanhung@example.com',
                    className: 'w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  })
                ),
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'text-xs font-semibold text-slate-700' }, 'Câu hỏi / Thắc mắc cần tư vấn *'),
                  h('textarea', {
                    rows: 3,
                    required: true,
                    value: formData.question,
                    onChange: (e) => setFormData({ ...formData, question: e.target.value }),
                    placeholder: 'Ví dụ: Ngân sách 3 triệu cho gia đình 4 người nên mua nồi chiên nào bền nhất?...',
                    className: 'w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  })
                ),
                h(
                  'div',
                  { className: 'pt-1 flex items-center justify-end gap-2' },
                  h(
                    'button',
                    {
                      type: 'button',
                      onClick: handleClose,
                      className: 'px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded transition-colors'
                    },
                    'Hủy bỏ'
                  ),
                  h(
                    'button',
                    {
                      type: 'submit',
                      className: 'px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-xs'
                    },
                    'Gửi câu hỏi ngay'
                  )
                ),
                h(
                  'div',
                  { className: 'pt-2 border-t border-slate-100 text-[11px] text-center text-slate-400' },
                  'Hoặc bạn có thể truy cập ',
                  h('a', { href: '/lien-he', className: 'text-blue-600 hover:underline font-semibold' }, 'trang liên hệ chính thức')
                )
              )
        )
      )
  );
}
