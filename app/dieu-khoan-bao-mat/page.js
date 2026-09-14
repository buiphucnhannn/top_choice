'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const h = React.createElement;

export default function LegalPage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-white text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      h(Breadcrumb, { items: [{ name: 'Chính sách & Điều khoản' }] }),
      h(
        'header',
        { className: 'space-y-3' },
        h('h1', { className: 'text-3xl font-extrabold text-slate-900 tracking-tight' }, 'Điều Khoản Sử Dụng & Chính Sách Bảo Mật'),
        h('p', { className: 'text-xs text-slate-500' }, 'Cập nhật lần cuối: 14/09/2026')
      ),

      h(
        'article',
        { className: 'space-y-6 text-sm text-slate-700 leading-relaxed' },
        h(
          'section',
          { className: 'space-y-2' },
          h('h2', { className: 'text-lg font-bold text-slate-900' }, '1. Tuyên bố miễn trừ trách nhiệm nội dung'),
          h('p', null, 'Mọi thông tin đánh giá, xếp hạng và thông số kỹ thuật trên Top Choice được tổng hợp và thử nghiệm độc lập với mục đích cung cấp tài liệu tham khảo cho người tiêu dùng. Giá bán thực tế có thể thay đổi tùy thuộc vào chính sách của từng nhà bán lẻ tại thời điểm quý khách mua hàng.')
        ),
        h(
          'section',
          { className: 'space-y-2' },
          h('h2', { className: 'text-lg font-bold text-slate-900' }, '2. Chính sách bảo vệ dữ liệu & Cookie'),
          h('p', null, 'Chúng tôi không thu thập thông tin nhận dạng cá nhân nếu không có sự đồng ý rõ ràng của bạn. Cookie chỉ được sử dụng cho mục đích phân tích ẩn danh lưu lượng truy cập và nâng cao trải nghiệm điều hướng của bạn trên website.')
        ),
        h(
          'section',
          { className: 'space-y-2' },
          h('h2', { className: 'text-lg font-bold text-slate-900' }, '3. Quyền sở hữu trí tuệ'),
          h('p', null, 'Toàn bộ nội dung bài viết, phân tích, hình ảnh đồ họa và hệ thống bảng xếp hạng thuộc bản quyền của Top Choice. Mọi hành vi sao chép nhằm mục đích thương mại phải có sự đồng ý bằng văn bản của ban biên tập.')
        )
      )
    ),
    h(Footer, null)
  );
}
