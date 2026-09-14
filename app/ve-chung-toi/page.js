'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { authors } from '../../data/mockData';

const h = React.createElement;

export default function AboutPage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-6 w-full space-y-10' },
      h(Breadcrumb, { items: [{ name: 'Về chúng tôi' }] }),
      h(
        'header',
        { className: 'space-y-4 text-center max-w-3xl mx-auto' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'Sứ Mệnh Của Chúng Tôi'
        ),
        h('h1', { className: 'text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight' }, 'Đánh Giá Khách Quan. Lựa Chọn Thông Minh.'),
        h('p', { className: 'text-base text-slate-600 leading-relaxed text-justify' }, 'Top Choice được xây dựng nhằm giúp người tiêu dùng Việt Nam tiết kiệm hàng chục giờ tìm kiếm và loại bỏ những băn khoăn khi lựa chọn sản phẩm vật lý cũng như phần mềm số.')
      ),

      // Values Grid
      h(
        'section',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 pt-4' },
        [
          { icon: '🎯', title: 'Độc lập & Khách quan', desc: 'Không nhận tiền để nâng hạng sản phẩm hoặc thay đổi kết quả thử nghiệm.' },
          { icon: '🔬', title: 'Thử nghiệm thực tế', desc: 'Mọi thiết bị và phần mềm đều trải qua quy trình đánh giá và đo đạc chỉ số nghiêm ngặt.' },
          { icon: '🔄', title: 'Cập nhật liên tục', desc: 'Định kỳ xem xét lại bảng xếp hạng và giá bán để dữ liệu luôn tươi mới.' }
        ].map((item, idx) =>
          h(
            'div',
            { key: idx, className: 'p-6 bg-white border border-slate-200 rounded-md space-y-2.5 shadow-sm' },
            h('div', { className: 'text-3xl' }, item.icon),
            h('h3', { className: 'text-lg font-bold text-slate-900' }, item.title),
            h('p', { className: 'text-xs sm:text-sm text-slate-600 leading-relaxed text-justify' }, item.desc)
          )
        )
      ),

      // Editorial Team
      h(
        'section',
        { className: 'space-y-6 pt-6' },
        h('h2', { className: 'text-2xl font-bold text-slate-900 tracking-tight text-center' }, 'Đội ngũ chuyên gia biên tập'),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
          authors.map((author, idx) =>
            h(
              'div',
              { key: idx, className: 'p-6 bg-white border border-slate-200 rounded-md text-center space-y-3 shadow-sm' },
              h('img', { src: author.avatar, alt: author.name, className: 'w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-500 shadow-md' }),
              h('h3', { className: 'font-bold text-base text-slate-900' }, author.name),
              h('div', { className: 'text-xs text-blue-600 font-semibold' }, author.role),
              h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' }, author.bio)
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
