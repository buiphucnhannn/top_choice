'use client';

import React from 'react';

const h = React.createElement;

export default function RecentArticles() {
  const articles = [
    {
      badge: 'REVIEW',
      badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200/60',
      title: 'Đánh giá Aircook Pro 6L: Có đáng mua trong năm 2026?',
      desc: 'Thiết kế hiện đại, nhiều tính năng thông minh nhưng liệu có thực sự tốt như kỳ vọng?',
      date: '12/09/2026',
      image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&auto=format&fit=crop&q=80',
      href: '/review/aircook-pro-6l'
    },
    {
      badge: 'SO SÁNH',
      badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200/60',
      title: 'ChatGPT Plus vs Notion AI: Nên Chọn Công Cụ Nào?',
      desc: 'So sánh chi tiết trợ lý AI đa năng và AI tích hợp trong không gian làm việc.',
      date: '10/09/2026',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=80',
      href: '/so-sanh/chatgpt-plus-vs-notion-ai'
    },
    {
      badge: 'HƯỚNG DẪN',
      badgeClass: 'bg-sky-50 text-sky-700 border border-sky-200/60',
      title: 'Cách chọn tai nghe phù hợp với nhu cầu của bạn',
      desc: 'Hướng dẫn chi tiết giúp bạn chọn được chiếc tai nghe phù hợp nhất.',
      date: '08/09/2026',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
      href: '/huong-dan/cach-chon-tai-nghe'
    }
  ];

  return h(
    'section',
    { className: 'w-full py-10 bg-[#edf4fb]' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8 space-y-6' },
      // Header
      h(
        'div',
        { className: 'flex items-center justify-between' },
        h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, 'Bài viết mới'),
        h(
          'a',
          { href: '/huong-dan', className: 'text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors' },
          'Xem tất cả bài viết',
          h('span', null, '→')
        )
      ),

      // Grid of 3 Cards
      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
        articles.map((item, idx) =>
          h(
            'a',
            {
              key: idx,
              href: item.href,
              className: 'flex flex-col bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group'
            },
            // Card Image
            h(
              'div',
              { className: 'relative w-full h-48 overflow-hidden bg-slate-100' },
              h('img', {
                src: item.image,
                alt: item.title,
                className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              })
            ),
            // Content
            h(
              'div',
              { className: 'p-5 flex-1 flex flex-col justify-between space-y-4' },
              h(
                'div',
                { className: 'space-y-2' },
                h('span', { className: `inline-block text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${item.badgeClass}` }, item.badge),
                h('h3', { className: 'font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors' }, item.title),
                h('p', { className: 'text-xs text-slate-600 line-clamp-2 leading-relaxed text-justify' }, item.desc)
              ),
              h(
                'div',
                { className: 'pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-medium' },
                item.date
              )
            )
          )
        )
      )
    )
  );
}
