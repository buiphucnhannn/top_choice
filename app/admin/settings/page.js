'use client';

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';

const h = React.createElement;
const initialSettings = { siteName: 'TOP CHOICE', tagline: 'Đánh giá khách quan. Lựa chọn thông minh.', email: 'hello@topchoice.vn', facebook: 'https://facebook.com/topchoicevn', youtube: 'https://youtube.com/@topchoicevn' };

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState(initialSettings);
  const [message, setMessage] = useState('');
  const update = (field, value) => setSettings((current) => ({ ...current, [field]: value }));
  const save = (event) => {
    event.preventDefault();
    if (!settings.siteName.trim() || !settings.email.trim()) { setMessage('Vui lòng nhập tên website và email liên hệ.'); return; }
    window.localStorage.setItem('topchoice-demo-settings', JSON.stringify(settings));
    setMessage('Đã lưu thiết lập demo.');
  };
  const field = (id, label, type, value, placeholder) => h('div', { className: 'space-y-1.5' }, h('label', { htmlFor: id, className: 'block text-xs font-bold text-slate-700' }, label), h('input', { id, type, value, placeholder, onChange: (event) => update(id, event.target.value), className: 'w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500' }));
  return h('div', { className: 'min-h-screen flex flex-col md:flex-row bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'settings' }),
    h('main', { className: 'flex-1 p-4 sm:p-6 md:p-8' }, h('div', { className: 'max-w-3xl space-y-6' },
      h('header', null, h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Thiết Lập Website'), h('p', { className: 'mt-1 text-sm text-slate-500' }, 'Cấu hình nhận diện và kênh liên hệ cho phiên bản demo.')),
      h('form', { onSubmit: save, className: 'space-y-6 rounded-md border border-slate-200 bg-white p-5 sm:p-6 shadow-sm' },
        message && h('div', { role: 'status', className: `rounded border px-3 py-2 text-sm ${message.startsWith('Đã') ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}` }, message),
        h('section', { className: 'space-y-4' }, h('h2', { className: 'font-bold text-slate-900' }, 'Thông tin chung'), field('siteName', 'Tên website *', 'text', settings.siteName, 'TOP CHOICE'), field('tagline', 'Tagline', 'text', settings.tagline, 'Mô tả ngắn')),
        h('section', { className: 'space-y-4 border-t border-slate-100 pt-5' }, h('h2', { className: 'font-bold text-slate-900' }, 'Liên kết & liên hệ'), field('email', 'Email liên hệ *', 'email', settings.email, 'hello@example.com'), field('facebook', 'Facebook URL', 'url', settings.facebook, 'https://facebook.com/...'), field('youtube', 'YouTube URL', 'url', settings.youtube, 'https://youtube.com/...')),
        h('div', { className: 'flex flex-col-reverse sm:flex-row sm:justify-end gap-3 border-t border-slate-100 pt-5' }, h('button', { type: 'button', onClick: () => { setSettings(initialSettings); setMessage(''); }, className: 'rounded border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50' }, 'Khôi phục mẫu'), h('button', { type: 'submit', className: 'rounded bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700' }, 'Lưu thiết lập'))
      )
    ))
  );
}
