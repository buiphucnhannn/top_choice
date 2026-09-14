'use client';

import React from 'react';

const h = React.createElement;

export default function Footer() {
  const footerLinks = {
    categories: [
      { name: 'Sản phẩm vật lý', href: '/san-pham-vat-ly' },
      { name: 'Sản phẩm số', href: '/san-pham-so' },
      { name: 'Bảng xếp hạng', href: '/top' },
      { name: 'Hướng dẫn', href: '/huong-dan' }
    ],
    content: [
      { name: 'Bài viết mới', href: '/huong-dan' },
      { name: 'Review sản phẩm', href: '/review/aircook-pro-6l' },
      { name: 'So sánh sản phẩm', href: '/so-sanh/aircook-pro-vs-homechef-dual' },
      { name: 'Hướng dẫn sử dụng', href: '/huong-dan' }
    ],
    about: [
      { name: 'Giới thiệu', href: '/ve-chung-toi' },
      { name: 'Phương pháp đánh giá', href: '/phuong-phap-danh-gia' },
      { name: 'Câu hỏi thường gặp', href: '/cau-hoi-thuong-gap' },
      { name: 'Liên hệ', href: '/lien-he' }
    ],
    legal: [
      { name: 'Điều khoản sử dụng', href: '/dieu-khoan-bao-mat' },
      { name: 'Chính sách bảo mật', href: '/dieu-khoan-bao-mat' },
      { name: 'Cookie', href: '/dieu-khoan-bao-mat' },
      { name: 'Tuyên bố miễn trừ trách nhiệm', href: '/dieu-khoan-bao-mat' }
    ]
  };

  return h(
    'footer',
    { className: 'w-full bg-[#0B1528] text-slate-300 pt-14 pb-8 border-t-4 border-blue-600' },
    h(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-8' },
      // Top Grid: Brand & 4 Columns
      h(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800/80' },
        // Brand Column (2 cols)
        h(
          'div',
          { className: 'lg:col-span-2 space-y-4' },
          h(
            'div',
            { className: 'flex flex-col' },
            h(
              'div',
              { className: 'flex items-baseline tracking-tight' },
              h('span', { className: 'text-2xl font-black text-white tracking-tighter' }, 'TOP'),
              h('span', { className: 'text-2xl font-black text-blue-400 ml-1 tracking-tighter' }, 'CHOICE')
            ),
            h('span', { className: 'text-xs text-slate-400 font-medium tracking-tight mt-0.5' }, 'Đánh giá khách quan. Lựa chọn thông minh.')
          ),
          h('p', { className: 'text-xs text-slate-500 leading-relaxed max-w-xs' }, 'Nền tảng đánh giá sản phẩm hàng đầu Việt Nam — nghiên cứu độc lập, thử nghiệm thực tế, khuyến nghị trung thực.'),
          // Social Icons
          h(
            'div',
            { className: 'flex items-center gap-4 pt-2' },
            // Facebook
            h(
              'a',
              { href: '#', 'aria-label': 'Facebook', className: 'text-slate-500 hover:text-white transition-colors' },
              h(
                'svg',
                { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                h('path', { d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' })
              )
            ),
            // YouTube
            h(
              'a',
              { href: '#', 'aria-label': 'YouTube', className: 'text-slate-500 hover:text-white transition-colors' },
              h(
                'svg',
                { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                h('path', { d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' })
              )
            ),
            // X (Twitter)
            h(
              'a',
              { href: '#', 'aria-label': 'X Twitter', className: 'text-slate-500 hover:text-white transition-colors' },
              h(
                'svg',
                { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                h('path', { d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' })
              )
            ),
            // Instagram
            h(
              'a',
              { href: '#', 'aria-label': 'Instagram', className: 'text-slate-500 hover:text-white transition-colors' },
              h(
                'svg',
                { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
              )
            )
          )
        ),

        // Column 1: Danh mục
        h(
          'div',
          { className: 'space-y-3' },
          h('h4', { className: 'text-xs font-bold text-white tracking-wide uppercase border-b border-slate-700 pb-2' }, 'Danh mục'),
          h(
            'ul',
            { className: 'space-y-2 text-xs' },
            footerLinks.categories.map((link, idx) =>
              h(
                'li',
                { key: idx },
                h('a', { href: link.href, className: 'text-slate-400 hover:text-white transition-colors' }, link.name)
              )
            )
          )
        ),

        // Column 2: Nội dung
        h(
          'div',
          { className: 'space-y-3' },
          h('h4', { className: 'text-xs font-bold text-white tracking-wide uppercase border-b border-slate-700 pb-2' }, 'Nội dung'),
          h(
            'ul',
            { className: 'space-y-2 text-xs' },
            footerLinks.content.map((link, idx) =>
              h(
                'li',
                { key: idx },
                h('a', { href: link.href, className: 'text-slate-400 hover:text-white transition-colors' }, link.name)
              )
            )
          )
        ),

        // Column 3: Về chúng tôi
        h(
          'div',
          { className: 'space-y-3' },
          h('h4', { className: 'text-xs font-bold text-white tracking-wide uppercase border-b border-slate-700 pb-2' }, 'Về chúng tôi'),
          h(
            'ul',
            { className: 'space-y-2 text-xs' },
            footerLinks.about.map((link, idx) =>
              h(
                'li',
                { key: idx },
                h('a', { href: link.href, className: 'text-slate-400 hover:text-white transition-colors' }, link.name)
              )
            )
          )
        ),

        // Column 4: Pháp lý
        h(
          'div',
          { className: 'space-y-3' },
          h('h4', { className: 'text-xs font-bold text-white tracking-wide uppercase border-b border-slate-700 pb-2' }, 'Pháp lý'),
          h(
            'ul',
            { className: 'space-y-2 text-xs' },
            footerLinks.legal.map((link, idx) =>
              h(
                'li',
                { key: idx },
                h('a', { href: link.href, className: 'text-slate-400 hover:text-white transition-colors' }, link.name)
              )
            )
          )
        )
      ),

      // Bottom Bar
      h(
        'div',
        { className: 'pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500' },
        h('div', null, '© 2026 Top Choice. Tất cả quyền được bảo lưu.'),
        h('div', { className: 'italic font-medium text-slate-400' }, 'Sản phẩm tốt hơn. Cuộc sống tốt hơn.')
      )
    )
  );
}
