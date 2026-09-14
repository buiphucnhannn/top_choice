'use client';

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import { guides as initialGuides, products } from '../../../data/mockData';

const h = React.createElement;

export default function AdminContentPage() {
  const [guidesList, setGuidesList] = useState(initialGuides);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [formData, setFormData] = useState({ title: '', type: 'vat-ly', excerpt: '' });

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    const newGuide = {
      id: `guide-${Date.now()}`,
      slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
      title: formData.title,
      type: formData.type,
      updatedAt: '14/09/2026',
      excerpt: formData.excerpt || 'Tóm tắt bài viết...',
      sections: [{ title: '1. Mở đầu', content: formData.excerpt }]
    };

    setGuidesList([newGuide, ...guidesList]);
    setShowModal(false);
    setToastMsg(`Đã tạo thành công bài viết "${formData.title}"!`);
    setTimeout(() => setToastMsg(''), 3000);
    setFormData({ title: '', type: 'vat-ly', excerpt: '' });
  };

  const filtered = guidesList.filter((g) =>
    !searchTerm || g.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return h(
    'div',
    { className: 'min-h-screen flex flex-col md:flex-row bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'content' }),
    h(
      'main',
      { className: 'flex-1 p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 overflow-y-auto' },
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
        { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
        h(
          'div',
          null,
          h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Quản Lý Bài Viết & Cẩm Nang Hướng Dẫn'),
          h('p', { className: 'text-xs text-slate-500' }, `Tổng cộng ${guidesList.length} bài hướng dẫn và ${products.length} bài review sản phẩm`)
        ),
        h(
          'button',
          {
            onClick: () => setShowModal(true),
            className: 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-sm transition-colors'
          },
          '+ Soạn Bài Hướng Dẫn Mới'
        )
      ),

      // Search & Table
      h(
        'div',
        { className: 'bg-white rounded-md border border-slate-200 shadow-sm overflow-hidden' },
        h(
          'div',
          { className: 'p-4 border-b border-slate-100' },
          h('input', {
            type: 'text',
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            placeholder: 'Tìm kiếm bài viết theo tiêu đề...',
            className: 'w-full sm:w-80 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded focus:outline-none'
          })
        ),
        h(
          'div',
          { className: 'overflow-x-auto' },
          h(
            'table',
            { className: 'w-full text-left text-sm border-collapse min-w-[600px]' },
            h(
              'thead',
              { className: 'bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500' },
              h(
                'tr',
                null,
                h('th', { className: 'py-3.5 px-4' }, 'Tiêu Đề Bài Viết'),
                h('th', { className: 'py-3.5 px-4' }, 'Phân Loại'),
                h('th', { className: 'py-3.5 px-4' }, 'Trạng Thái'),
                h('th', { className: 'py-3.5 px-4 text-right' }, 'Ngày Cập Nhật'),
                h('th', { className: 'py-3.5 px-4 text-right' }, 'Hành Động')
              )
            ),
            h(
              'tbody',
              { className: 'divide-y divide-slate-100 text-xs' },
              filtered.map((item) =>
                h(
                  'tr',
                  { key: item.id, className: 'hover:bg-slate-50/60 transition-colors' },
                  h(
                    'td',
                    { className: 'py-3.5 px-4' },
                    h('div', { className: 'font-bold text-slate-900' }, item.title),
                    h('div', { className: 'text-[11px] text-slate-400 truncate max-w-sm' }, item.excerpt)
                  ),
                  h(
                    'td',
                    { className: 'py-3.5 px-4' },
                    h(
                      'span',
                      {
                        className: `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          item.type === 'vat-ly' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`
                      },
                      item.type === 'vat-ly' ? 'Vật lý' : 'Số / AI'
                    )
                  ),
                  h(
                    'td',
                    { className: 'py-3.5 px-4' },
                    h('span', { className: 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider' }, 'Published')
                  ),
                  h('td', { className: 'py-3.5 px-4 text-right text-slate-400' }, item.updatedAt),
                  h(
                    'td',
                    { className: 'py-3.5 px-4 text-right' },
                    h('a', { href: `/huong-dan/${item.slug}`, target: '_blank', className: 'text-blue-600 hover:underline font-bold' }, 'Xem bài')
                  )
                )
              )
            )
          )
        )
      ),

      // Modal Create Guide
      showModal &&
        h(
          'div',
          { className: 'fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn' },
          h(
            'div',
            { className: 'bg-white rounded-lg p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4' },
            h(
              'div',
              { className: 'flex justify-between items-center pb-3 border-b border-slate-100' },
              h('h3', { className: 'text-lg font-bold text-slate-900' }, 'Soạn Bài Hướng Dẫn Mới (Demo Form)'),
              h(
                'button',
                { onClick: () => setShowModal(false), className: 'text-slate-400 hover:text-slate-600 font-bold' },
                '✕'
              )
            ),
            h(
              'form',
              { onSubmit: handleSave, className: 'space-y-3 text-xs' },
              h(
                'div',
                { className: 'space-y-1' },
                h('label', { className: 'font-bold text-slate-700' }, 'Tiêu Đề Bài Viết *'),
                h('input', {
                  type: 'text',
                  required: true,
                  value: formData.title,
                  onChange: (e) => setFormData({ ...formData, title: e.target.value }),
                  placeholder: 'Ví dụ: Cách chọn màn hình đồ họa chuyên nghiệp...',
                  className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                })
              ),
              h(
                'div',
                { className: 'space-y-1' },
                h('label', { className: 'font-bold text-slate-700' }, 'Nhóm Chủ Đề'),
                h(
                  'select',
                  {
                    value: formData.type,
                    onChange: (e) => setFormData({ ...formData, type: e.target.value }),
                    className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                  },
                  h('option', { value: 'vat-ly' }, 'Sản phẩm vật lý'),
                  h('option', { value: 'so' }, 'Phần mềm & AI')
                )
              ),
              h(
                'div',
                { className: 'space-y-1' },
                h('label', { className: 'font-bold text-slate-700' }, 'Đoạn Trích Tóm Tắt (Excerpt)'),
                h('textarea', {
                  rows: 3,
                  value: formData.excerpt,
                  onChange: (e) => setFormData({ ...formData, excerpt: e.target.value }),
                  placeholder: 'Mô tả ngắn gọn nội dung hướng dẫn...',
                  className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                })
              ),
              h(
                'div',
                { className: 'pt-3 flex justify-end gap-2' },
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: () => setShowModal(false),
                    className: 'px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded'
                  },
                  'Hủy'
                ),
                h(
                  'button',
                  {
                    type: 'submit',
                    className: 'px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-sm'
                  },
                  'Xuất Bản Bài Viết'
                )
              )
            )
          )
        )
    )
  );
}
