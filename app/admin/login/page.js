'use client';

import React, { useState } from 'react';

const h = React.createElement;

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFillDemo = () => {
    setEmail('admin@topchoice.vn');
    setPassword('demo2026');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu demo.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/admin';
    }, 600);
  };

  return h(
    'div',
    { className: 'min-h-screen flex items-center justify-center bg-slate-900 px-4 font-sans' },
    h(
      'div',
      { className: 'max-w-md w-full bg-white rounded-lg p-8 shadow-2xl space-y-6 border border-slate-800/10' },
      // Brand
      h(
        'div',
        { className: 'text-center space-y-2' },
        h(
          'div',
          { className: 'flex items-baseline justify-center tracking-tight' },
          h('span', { className: 'text-2xl font-black text-slate-900 tracking-tighter' }, 'TOP'),
          h('span', { className: 'text-2xl font-black text-blue-600 ml-1 tracking-tighter' }, 'CHOICE'),
          h('span', { className: 'text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded ml-2 uppercase tracking-wider' }, 'ADMIN')
        ),
        h('h1', { className: 'text-xl font-bold text-slate-800' }, 'Đăng Nhập Quản Trị Demo'),
        h('p', { className: 'text-xs text-slate-500' }, 'Sử dụng tài khoản mẫu để trải nghiệm các tính năng biên tập nội dung')
      ),

      // Demo quick fill button
      h(
        'div',
        { className: 'p-3.5 bg-blue-50/80 border border-blue-200 rounded-md flex items-center justify-between' },
        h(
          'div',
          null,
          h('div', { className: 'text-xs font-bold text-blue-900' }, 'Tài khoản demo có sẵn'),
          h('div', { className: 'text-[11px] text-blue-700 font-mono' }, 'admin@topchoice.vn')
        ),
        h(
          'button',
          {
            type: 'button',
            onClick: handleFillDemo,
            className: 'px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors shadow-xs'
          },
          'Điền nhanh'
        )
      ),

      // Form
      h(
        'form',
        { onSubmit: handleSubmit, className: 'space-y-4 text-xs' },
        error &&
          h(
            'div',
            { className: 'p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded text-xs font-medium' },
            error
          ),
        h(
          'div',
          { className: 'space-y-1.5 text-left' },
          h('label', { className: 'font-bold text-slate-700' }, 'Email Quản Trị'),
          h('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'admin@topchoice.vn',
            className: 'w-full p-3 bg-slate-50 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ),
        h(
          'div',
          { className: 'space-y-1.5 text-left' },
          h('label', { className: 'font-bold text-slate-700' }, 'Mật Khẩu'),
          h('input', {
            type: 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: '••••••••',
            className: 'w-full p-3 bg-slate-50 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ),
        h(
          'button',
          {
            type: 'submit',
            disabled: loading,
            className: 'w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2'
          },
          loading ? 'Đang xác thực...' : 'Đăng Nhập Vào Dashboard →'
        )
      ),

      h(
        'div',
        { className: 'text-center' },
        h('a', { href: '/', className: 'text-xs text-slate-500 hover:text-slate-800' }, '← Quay lại trang chủ website')
      )
    )
  );
}
