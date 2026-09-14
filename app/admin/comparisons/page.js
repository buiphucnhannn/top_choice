'use client';

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import { comparisons as initialComparisons } from '../../../data/mockData';

const h = React.createElement;

export default function AdminComparisonsPage() {
  const [compList] = useState(initialComparisons);

  return h(
    'div',
    { className: 'min-h-screen flex bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'comparisons' }),
    h(
      'main',
      { className: 'flex-1 p-8 space-y-6 overflow-y-auto' },
      h(
        'header',
        null,
        h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Quản Lý Trang So Sánh Đối Đầu'),
        h('p', { className: 'text-xs text-slate-500' }, 'Xem và quản lý ma trận so sánh các cặp sản phẩm mẫu')
      ),

      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
        compList.map((c) =>
          h(
            'div',
            { key: c.id, className: 'bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-4' },
            h(
              'div',
              { className: 'flex justify-between items-start gap-2' },
              h(
                'div',
                null,
                h(
                  'span',
                  { className: `text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mr-2 border ${c.type === 'vat-ly' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-purple-50 text-purple-700 border-purple-200'}` },
                  c.type === 'vat-ly' ? 'Vật lý' : 'Số'
                ),
                h('h3', { className: 'text-base font-bold text-slate-900 mt-1' }, c.title)
              ),
              h('a', { href: `/so-sanh/${c.slug}`, target: '_blank', className: 'text-xs font-bold text-blue-600 hover:underline flex-shrink-0' }, 'Xem trang ↗')
            ),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed' }, c.summaryWinner),
            h(
              'div',
              { className: 'p-3 bg-slate-50 border border-slate-200 rounded space-y-1 text-xs' },
              h('div', { className: 'font-semibold text-slate-700' }, `Số tiêu chí trong ma trận: ${c.matrix.length} tiêu chí`),
              h('div', { className: 'text-slate-500' }, `Cập nhật lần cuối: ${c.updatedAt}`)
            )
          )
        )
      )
    )
  );
}
