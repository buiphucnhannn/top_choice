'use client';

import React from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { products, categories, rankings, guides } from '../../data/mockData';

const h = React.createElement;

export default function AdminDashboardPage() {
  const kpis = [
    { title: 'Tổng Sản Phẩm', value: products.length, change: '+12 mẫu', color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Danh Mục', value: categories.length, change: '8 danh mục', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Bảng Xếp Hạng', value: rankings.length, change: '4 active', color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'Bài Hướng Dẫn', value: guides.length, change: '4 bài viết', color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  return h(
    'div',
    { className: 'min-h-screen flex flex-col md:flex-row bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'dashboard' }),
    h(
      'main',
      { className: 'flex-1 p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 overflow-y-auto' },
      // Top header
      h(
        'header',
        { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
        h(
          'div',
          null,
          h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Bảng Quản Trị Nội Dung (Demo)'),
          h('p', { className: 'text-xs text-slate-500' }, 'Theo dõi trạng thái xuất bản và quản lý dữ liệu sản phẩm mẫu')
        ),
        h(
          'div',
          { className: 'flex items-center gap-3' },
          h('a', { href: '/admin/products', className: 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-sm transition-colors' }, '+ Thêm sản phẩm mới'),
          h('a', { href: '/', target: '_blank', className: 'px-4 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded hover:bg-slate-50 transition-colors' }, 'Xem Website ↗')
        )
      ),

      // KPI Cards Grid
      h(
        'section',
        { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5' },
        kpis.map((kpi, idx) =>
          h(
            'div',
            { key: idx, className: 'bg-white p-5 rounded-md border border-slate-200 shadow-sm space-y-2' },
            h('span', { className: 'text-xs font-semibold text-slate-500 uppercase tracking-wider' }, kpi.title),
            h(
              'div',
              { className: 'flex items-baseline justify-between' },
              h('span', { className: `text-3xl font-black ${kpi.color}` }, kpi.value),
              h('span', { className: `text-[10px] font-bold px-2 py-0.5 rounded border border-current/20 ${kpi.bg} ${kpi.color}` }, kpi.change)
            )
          )
        )
      ),

      // Recent Contents Table
      h(
        'section',
        { className: 'bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-4' },
        h('h2', { className: 'text-lg font-bold text-slate-900' }, 'Nội dung cập nhật gần đây'),
        h(
          'div',
          { className: 'overflow-x-auto' },
          h(
            'table',
            { className: 'w-full text-left text-sm border-collapse min-w-[500px]' },
            h(
              'thead',
              { className: 'bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500' },
              h(
                'tr',
                null,
                h('th', { className: 'py-3 px-4' }, 'Tên nội dung / Sản phẩm'),
                h('th', { className: 'py-3 px-4' }, 'Phân loại'),
                h('th', { className: 'py-3 px-4' }, 'Điểm / Giá'),
                h('th', { className: 'py-3 px-4' }, 'Trạng thái'),
                h('th', { className: 'py-3 px-4 text-right' }, 'Ngày cập nhật')
              )
            ),
            h(
              'tbody',
              { className: 'divide-y divide-slate-100 text-xs' },
              products.slice(0, 6).map((p, idx) =>
                h(
                  'tr',
                  { key: idx, className: 'hover:bg-slate-50/60 transition-colors' },
                  h('td', { className: 'py-3.5 px-4 font-bold text-slate-800' }, p.name),
                  h('td', { className: 'py-3.5 px-4 text-slate-500' }, p.type === 'vat-ly' ? 'Sản phẩm vật lý' : 'Sản phẩm số'),
                  h('td', { className: 'py-3.5 px-4 font-semibold text-blue-600' }, `${p.overallScore}/10 (${p.priceRef})`),
                  h(
                    'td',
                    { className: 'py-3.5 px-4' },
                    h('span', { className: 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider' }, p.status)
                  ),
                  h('td', { className: 'py-3.5 px-4 text-right text-slate-400' }, p.updatedAt)
                )
              )
            )
          )
        )
      )
    )
  );
}
