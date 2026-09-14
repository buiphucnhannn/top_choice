'use client';

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import { rankings as initialRankings } from '../../../data/mockData';

const h = React.createElement;

export default function AdminRankingsPage() {
  const [rankingList] = useState(initialRankings);

  return h(
    'div',
    { className: 'min-h-screen flex flex-col md:flex-row bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'rankings' }),
    h(
      'main',
      { className: 'flex-1 p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 overflow-y-auto' },
      h(
        'header',
        null,
        h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Quản Lý Bảng Xếp Hạng Top 10 (Ranking Builder)'),
        h('p', { className: 'text-xs text-slate-500' }, 'Xem và quản lý các danh sách xếp hạng biên tập mẫu')
      ),

      h(
        'div',
        { className: 'space-y-4' },
        rankingList.map((rank) =>
          h(
            'div',
            { key: rank.id, className: 'bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-4' },
            h(
              'div',
              { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-2' },
              h(
                'div',
                null,
                h('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider mr-2' }, rank.categoryName),
                h('h3', { className: 'text-lg font-bold text-slate-900 inline' }, rank.title)
              ),
              h('a', { href: `/top/${rank.slug}`, target: '_blank', className: 'text-xs font-bold text-blue-600 hover:underline' }, 'Xem Trang Công Khai ↗')
            ),
            h('p', { className: 'text-xs text-slate-600' }, rank.intro),
            h(
              'div',
              { className: 'p-4 bg-slate-50 border border-slate-200 rounded space-y-2' },
              h('div', { className: 'text-xs font-bold text-slate-700' }, 'Các sản phẩm trong bảng xếp hạng:'),
              h(
                'div',
                { className: 'space-y-1.5' },
                rank.items.map((item, idx) =>
                  h(
                    'div',
                    { key: idx, className: 'flex items-center justify-between text-xs bg-white p-2.5 rounded border border-slate-200' },
                    h('div', { className: 'font-semibold text-slate-800' }, `#${item.rank} - ${item.label}`),
                    h('div', { className: 'text-slate-500 italic' }, item.rationale)
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
