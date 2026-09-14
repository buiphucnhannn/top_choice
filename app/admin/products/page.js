'use client';

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import { products as initialProducts } from '../../../data/mockData';

const h = React.createElement;

export default function AdminProductsPage() {
  const [productList, setProductList] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    type: 'vat-ly',
    overallScore: 9.0,
    priceRef: '',
    summary: ''
  });

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.priceRef) return;

    const newProd = {
      id: `prod-${Date.now()}`,
      slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
      name: formData.name,
      brand: formData.brand || 'Thương hiệu',
      type: formData.type,
      overallScore: parseFloat(formData.overallScore) || 9.0,
      priceRef: formData.priceRef,
      summary: formData.summary || 'Mô tả tóm tắt sản phẩm...',
      image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=80',
      status: 'Published',
      updatedAt: '14/09/2026',
      scores: [],
      pros: ['Được biên tập viên đánh giá cao'],
      cons: ['Đang cập nhật'],
      specs: { 'Tình trạng': 'Mới phát hành' }
    };

    setProductList([newProd, ...productList]);
    setShowModal(false);
    setToastMsg(`Đã thêm thành công sản phẩm "${formData.name}"!`);
    setTimeout(() => setToastMsg(''), 4000);
    setFormData({ name: '', brand: '', type: 'vat-ly', overallScore: 9.0, priceRef: '', summary: '' });
  };

  const handleDelete = (id, name) => {
    if (confirm(`Bạn có chắc muốn xóa sản phẩm "${name}" khỏi danh sách demo?`)) {
      setProductList(productList.filter((p) => p.id !== id));
      setToastMsg(`Đã xóa sản phẩm "${name}".`);
      setTimeout(() => setToastMsg(''), 3000);
    }
  };

  const filtered = productList.filter((p) => {
    const matchType = filterType === 'all' || p.type === filterType;
    const matchSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchType && matchSearch;
  });

  return h(
    'div',
    { className: 'min-h-screen flex bg-slate-100 font-sans' },
    h(AdminSidebar, { active: 'products' }),
    h(
      'main',
      { className: 'flex-1 p-8 space-y-6 overflow-y-auto' },
      // Toast notification
      toastMsg &&
        h(
          'div',
          { className: 'fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-md shadow-xl border border-slate-700 text-sm font-semibold flex items-center gap-2 z-50 animate-fadeIn' },
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
          h('h1', { className: 'text-2xl font-black text-slate-900' }, 'Quản Lý Sản Phẩm (Products)'),
          h('p', { className: 'text-xs text-slate-500' }, `Tổng cộng ${productList.length} sản phẩm mẫu trong hệ thống`)
        ),
        h(
          'button',
          {
            onClick: () => setShowModal(true),
            className: 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-sm transition-colors'
          },
          '+ Thêm Sản Phẩm Mới'
        )
      ),

      // Filter Toolbar
      h(
        'div',
        { className: 'bg-white p-4 rounded-md border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between' },
        h('input', {
          type: 'text',
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          placeholder: 'Tìm kiếm sản phẩm theo tên, thương hiệu...',
          className: 'w-full sm:w-80 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        }),
        h(
          'div',
          { className: 'flex items-center gap-2 text-xs font-semibold' },
          h('span', { className: 'text-slate-500' }, 'Lọc loại:'),
          h(
            'select',
            {
              value: filterType,
              onChange: (e) => setFilterType(e.target.value),
              className: 'px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:outline-none'
            },
            h('option', { value: 'all' }, 'Tất cả sản phẩm'),
            h('option', { value: 'vat-ly' }, 'Sản phẩm vật lý'),
            h('option', { value: 'so' }, 'Sản phẩm số')
          )
        )
      ),

      // Product Table
      h(
        'div',
        { className: 'bg-white rounded-md border border-slate-200 shadow-sm overflow-x-auto' },
        h(
          'table',
          { className: 'w-full text-left text-sm border-collapse min-w-[650px]' },
          h(
            'thead',
            { className: 'bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500' },
            h(
              'tr',
              null,
              h('th', { className: 'py-3.5 px-4' }, 'Tên Sản Phẩm'),
              h('th', { className: 'py-3.5 px-4' }, 'Thương Hiệu'),
              h('th', { className: 'py-3.5 px-4' }, 'Loại'),
              h('th', { className: 'py-3.5 px-4' }, 'Điểm / Giá Tham Khảo'),
              h('th', { className: 'py-3.5 px-4' }, 'Trạng Thái'),
              h('th', { className: 'py-3.5 px-4 text-right' }, 'Thao Tác')
            )
          ),
          h(
            'tbody',
            { className: 'divide-y divide-slate-100 text-xs' },
            filtered.map((prod) =>
              h(
                'tr',
                { key: prod.id, className: 'hover:bg-slate-50/60 transition-colors' },
                h(
                  'td',
                  { className: 'py-3.5 px-4' },
                  h(
                    'div',
                    { className: 'flex items-center gap-3' },
                    h('img', { src: prod.image, alt: prod.name, className: 'w-10 h-10 rounded object-cover border border-slate-100' }),
                    h(
                      'div',
                      null,
                      h('div', { className: 'font-bold text-slate-900' }, prod.name),
                      h('div', { className: 'text-[11px] text-slate-400' }, `/review/${prod.slug}`)
                    )
                  )
                ),
                h('td', { className: 'py-3.5 px-4 font-medium text-slate-700' }, prod.brand),
                h(
                  'td',
                  { className: 'py-3.5 px-4' },
                  h(
                    'span',
                    {
                      className: `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        prod.type === 'vat-ly' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                      }`
                    },
                    prod.type === 'vat-ly' ? 'Vật lý' : 'Số / SaaS'
                  )
                ),
                h('td', { className: 'py-3.5 px-4 font-semibold text-slate-800' }, `${prod.overallScore}/10 (${prod.priceRef})`),
                h(
                  'td',
                  { className: 'py-3.5 px-4' },
                  h('span', { className: 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider' }, prod.status)
                ),
                h(
                  'td',
                  { className: 'py-3.5 px-4 text-right space-x-2' },
                  h('a', { href: `/review/${prod.slug}`, target: '_blank', className: 'text-blue-600 hover:underline font-bold' }, 'Xem'),
                  h(
                    'button',
                    {
                      onClick: () => handleDelete(prod.id, prod.name),
                      className: 'text-rose-600 hover:underline font-bold ml-2'
                    },
                    'Xóa'
                  )
                )
              )
            )
          )
        )
      ),

      // Modal Create Product
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
              h('h3', { className: 'text-lg font-bold text-slate-900' }, 'Thêm Sản Phẩm Mới (Demo Form)'),
              h(
                'button',
                { onClick: () => setShowModal(false), className: 'text-slate-400 hover:text-slate-600 font-bold' },
                '✕'
              )
            ),
            h(
              'form',
              { onSubmit: handleSaveProduct, className: 'space-y-3 text-xs' },
              h(
                'div',
                { className: 'space-y-1' },
                h('label', { className: 'font-bold text-slate-700' }, 'Tên Sản Phẩm *'),
                h('input', {
                  type: 'text',
                  required: true,
                  value: formData.name,
                  onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                  placeholder: 'Ví dụ: Tai nghe Sony WH-1000XM5',
                  className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                })
              ),
              h(
                'div',
                { className: 'grid grid-cols-2 gap-3' },
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'font-bold text-slate-700' }, 'Thương Hiệu'),
                  h('input', {
                    type: 'text',
                    value: formData.brand,
                    onChange: (e) => setFormData({ ...formData, brand: e.target.value }),
                    placeholder: 'Sony',
                    className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                  })
                ),
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'font-bold text-slate-700' }, 'Loại Sản Phẩm'),
                  h(
                    'select',
                    {
                      value: formData.type,
                      onChange: (e) => setFormData({ ...formData, type: e.target.value }),
                      className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                    },
                    h('option', { value: 'vat-ly' }, 'Sản phẩm vật lý'),
                    h('option', { value: 'so' }, 'Sản phẩm số')
                  )
                )
              ),
              h(
                'div',
                { className: 'grid grid-cols-2 gap-3' },
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'font-bold text-slate-700' }, 'Điểm Đánh Giá (0-10)'),
                  h('input', {
                    type: 'number',
                    step: '0.1',
                    min: '0',
                    max: '10',
                    value: formData.overallScore,
                    onChange: (e) => setFormData({ ...formData, overallScore: e.target.value }),
                    className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                  })
                ),
                h(
                  'div',
                  { className: 'space-y-1' },
                  h('label', { className: 'font-bold text-slate-700' }, 'Giá Tham Khảo *'),
                  h('input', {
                    type: 'text',
                    required: true,
                    value: formData.priceRef,
                    onChange: (e) => setFormData({ ...formData, priceRef: e.target.value }),
                    placeholder: '6.990.000đ',
                    className: 'w-full p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none'
                  })
                )
              ),
              h(
                'div',
                { className: 'space-y-1' },
                h('label', { className: 'font-bold text-slate-700' }, 'Mô Tả Tóm Tắt'),
                h('textarea', {
                  rows: 2,
                  value: formData.summary,
                  onChange: (e) => setFormData({ ...formData, summary: e.target.value }),
                  placeholder: 'Tóm tắt ưu điểm và tính năng chính...',
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
                  'Lưu Sản Phẩm'
                )
              )
            )
          )
        )
    )
  );
}
