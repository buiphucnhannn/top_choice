'use client';

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import { categories as initialCategories } from '../../../data/mockData';

const h = React.createElement;

export default function AdminCategoriesPage() {
  const [catList, setCatList] = useState(initialCategories);
  const [toastMsg, setToastMsg] = useState('');

  const toggleFeatured = (id) => {
    setCatList(
      catList.map((c) => (c.id === id ? { ...c, featured: !c.featured } : c))
    );
    setToastMsg('Đã cập nhật trạng thái hiển thị Mega Menu.');
    setTimeout(() => setToastMsg(''), 3000);
  };

  return h(
    'div',
    { className: 'min-h-screen flex bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'categories' }),
    h(
      'main',
      { className: 'flex-1 p-8 space-y-6 overflow-y-auto' },
      // Toast notification
      toastMsg &&
        h(
          'div',
          { className: 'fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-md shadow-xl text-sm font-semibold flex items-center gap-2 z-50 animate-fadeIn' },
          h('span', { className: 'text-emerald-400 font-bold' }, '✓'),
          toastMsg
        ),

      // Header
      h(
        'header',
        null,
        h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Quản Lý Danh Mục & Mega Menu'),
        h('p', { className: 'text-xs text-slate-500' }, 'Cấu hình cây phân cấp danh mục vật lý và số cho toàn bộ hệ thống')
      ),

      // Categories Grid
      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
        catList.map((cat) =>
          h(
            'div',
            { key: cat.id, className: 'bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-4' },
            h(
              'div',
              { className: 'flex items-center justify-between' },
              h(
                'div',
                null,
                h(
                  'span',
                  { className: `text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mr-2 border ${cat.group === 'vat-ly' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-purple-50 text-purple-700 border-purple-200'}` },
                  cat.group === 'vat-ly' ? 'Vật lý' : 'Số / SaaS'
                ),
                h('h3', { className: 'text-base font-bold text-slate-900 inline' }, cat.name)
              ),
              h(
                'button',
                {
                  onClick: () => toggleFeatured(cat.id),
                  className: `px-2.5 py-1 text-xs font-bold rounded transition-colors ${
                    cat.featured ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`
                },
                cat.featured ? '✓ Mega Menu' : 'Ẩn Menu'
              )
            ),
            h('p', { className: 'text-xs text-slate-600' }, cat.desc),
            // Subcategories list
            h(
              'div',
              { className: 'pt-3 border-t border-slate-100 space-y-1.5' },
              h('div', { className: 'text-xs font-semibold text-slate-500' }, 'Danh mục con (Cấp 2):'),
              h(
                'div',
                { className: 'flex flex-wrap gap-1.5' },
                cat.subcategories.map((sub, sIdx) =>
                  h('span', { key: sIdx, className: 'px-2.5 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700 border border-slate-200' }, sub.name)
                )
              )
            )
          )
        )
      )
    )
  );
}
