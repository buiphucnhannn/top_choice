'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { authors } from '../../data/mockData';

const h = React.createElement;

export default function ExpertsPage() {
  return h('div', { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h('main', { className: 'flex-1 max-w-6xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      h(Breadcrumb, { items: [{ name: 'Đội ngũ chuyên gia' }] }),
      h('header', { className: 'max-w-3xl space-y-4' },
        h('span', { className: 'inline-flex px-2.5 py-1 rounded border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider' }, 'Hồ sơ chuyên môn'),
        h('h1', { className: 'text-3xl sm:text-4xl font-extrabold tracking-tight' }, 'Đội Ngũ Chuyên Gia'),
        h('p', { className: 'text-slate-600 leading-relaxed' }, 'Mỗi bài đánh giá của Top Choice được nghiên cứu, kiểm tra và biên tập bởi những người có chuyên môn phù hợp với danh mục sản phẩm.')
      ),
      h('section', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' }, authors.map((author) => h('article', { key: author.id, className: 'bg-white rounded-md border border-slate-200 shadow-sm p-6 text-center space-y-4' },
        h('img', { src: author.avatar, alt: `Ảnh của ${author.name}`, className: 'w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-100' }),
        h('div', null, h('h2', { className: 'text-lg font-bold' }, author.name), h('p', { className: 'mt-1 text-sm font-semibold text-blue-600' }, author.role)),
        h('p', { className: 'text-sm leading-relaxed text-slate-600 text-left' }, author.bio),
        h('div', { className: 'border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500 text-left' }, h('span', { className: 'block font-bold uppercase tracking-wide text-slate-700 mb-1' }, 'Chuyên môn'), author.credentials)
      )))
    ),
    h(Footer, null)
  );
}
