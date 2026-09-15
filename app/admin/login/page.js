'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAdmin, loginAdmin } from '../../../lib/productStore';

const h = React.createElement;

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@topchoice.vn');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof document !== 'undefined') document.title = 'Đăng nhập quản trị | TOP CHOICE';
    if (isAdmin()) router.replace('/admin');
    else setChecking(false);
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = loginAdmin(email, password);
    if (err) setError(err);
    else router.replace('/admin');
  };

  if (checking) {
    return h('div', { className: 'min-h-screen flex items-center justify-center bg-[#edf4fb] text-sm text-slate-500' }, 'Đang kiểm tra phiên đăng nhập...');
  }

  const inputClass = 'w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-800';

  return h(
    'div',
    { className: 'min-h-screen flex items-center justify-center bg-[#edf4fb] px-4 py-10' },
    h(
      'div',
      { className: 'w-full max-w-md bg-white border border-slate-200 rounded-lg shadow-lg p-6 sm:p-8 space-y-6' },
      h(
        'div',
        { className: 'text-center space-y-1' },
        h(
          'div',
          { className: 'flex items-baseline justify-center tracking-tight' },
          h('span', { className: 'text-2xl font-black text-slate-900 tracking-tighter' }, 'TOP'),
          h('span', { className: 'text-2xl font-black text-blue-600 ml-1 tracking-tighter' }, 'CHOICE')
        ),
        h('h1', { className: 'text-lg font-black text-slate-900 pt-2' }, 'Đăng nhập quản trị'),
        h('p', { className: 'text-xs text-slate-500' }, 'Quản lý sản phẩm và danh mục hiển thị trên landing page.')
      ),
      h(
        'form',
        { onSubmit: handleSubmit, className: 'space-y-4' },
        h(
          'div',
          { className: 'space-y-1.5' },
          h('label', { htmlFor: 'ad-email', className: 'text-xs font-bold text-slate-700' }, 'Email'),
          h('input', { id: 'ad-email', type: 'email', value: email, onChange: (e) => { setEmail(e.target.value); setError(''); }, placeholder: 'admin@topchoice.vn', className: inputClass })
        ),
        h(
          'div',
          { className: 'space-y-1.5' },
          h('label', { htmlFor: 'ad-pass', className: 'text-xs font-bold text-slate-700' }, 'Mật khẩu'),
          h('input', { id: 'ad-pass', type: 'password', value: password, onChange: (e) => { setPassword(e.target.value); setError(''); }, placeholder: '••••••••', className: inputClass })
        ),
        error && h('p', { className: 'text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-md px-3 py-2' }, error),
        h('button', { type: 'submit', className: 'w-full px-5 py-3 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition-all active:scale-[0.99]' }, 'Đăng nhập →')
      ),
      h(
        'div',
        { className: 'pt-2 border-t border-slate-100 text-center space-y-2' },
        h('p', { className: 'text-[11px] text-slate-400' }, 'Tài khoản demo đã điền sẵn — chỉ cần bấm Đăng nhập.'),
        h('a', { href: '/', className: 'inline-block text-xs font-semibold text-blue-600 hover:underline' }, '← Về trang chủ')
      )
    )
  );
}
