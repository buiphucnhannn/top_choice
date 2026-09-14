'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const h = React.createElement;

export default function LegalPage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      h(Breadcrumb, { items: [{ name: 'Chính sách & Điều khoản' }] }),

      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },

        // Left Content (8 cols)
        h(
          'div',
          { className: 'lg:col-span-8 space-y-6' },
          h(
            'header',
            { className: 'space-y-3' },
            h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Điều Khoản Sử Dụng & Chính Sách Bảo Mật'),
            h('p', { className: 'text-xs text-slate-500' }, 'Cập nhật lần cuối: 14/09/2026 • Áp dụng cho toàn bộ người dùng Top Choice')
          ),

          h(
            'article',
            { className: 'space-y-6 text-sm text-slate-700 leading-relaxed' },
            h(
              'section',
              { id: 'sec-1', className: 'p-6 bg-white border border-slate-200 rounded-lg shadow-xs space-y-3 scroll-mt-24 sm:scroll-mt-28' },
              h('h2', { className: 'text-xl font-bold text-slate-900' }, '1. Tuyên bố miễn trừ trách nhiệm nội dung'),
              h('p', { className: 'leading-relaxed text-justify' }, 'Mọi thông tin đánh giá, xếp hạng và thông số kỹ thuật trên Top Choice được tổng hợp và thử nghiệm độc lập với mục đích cung cấp tài liệu tham khảo cho người tiêu dùng. Giá bán thực tế, khuyến mãi và tồn kho có thể thay đổi tùy thuộc vào chính sách của từng nhà bán lẻ tại thời điểm quý khách mua hàng.'),
              h('p', { className: 'leading-relaxed text-justify text-slate-600 text-xs' }, 'Chúng tôi khuyến khích độc giả kiểm tra kỹ thông tin bảo hành và chính sách đổi trả trực tiếp trên website của bên bán trước khi tiến hành thanh toán.')
            ),
            h(
              'section',
              { id: 'sec-2', className: 'p-6 bg-white border border-slate-200 rounded-lg shadow-xs space-y-3 scroll-mt-24 sm:scroll-mt-28' },
              h('h2', { className: 'text-xl font-bold text-slate-900' }, '2. Chính sách bảo vệ dữ liệu & Cookie'),
              h('p', { className: 'leading-relaxed text-justify' }, 'Chúng tôi tôn trọng quyền riêng tư cá nhân và cam kết không thu thập thông tin nhận dạng nếu không có sự đồng ý rõ ràng của bạn. Cookie chỉ được sử dụng cho mục đích phân tích ẩn danh lưu lượng truy cập, ghi nhớ tùy chọn bộ lọc và nâng cao trải nghiệm điều hướng của bạn trên website.'),
              h('p', { className: 'leading-relaxed text-justify text-slate-600 text-xs' }, 'Bạn hoàn toàn có thể vô hiệu hóa cookie trong phần cài đặt của trình duyệt bất cứ lúc nào mà không ảnh hưởng đến khả năng xem các bài đánh giá.')
            ),
            h(
              'section',
              { id: 'sec-3', className: 'p-6 bg-white border border-slate-200 rounded-lg shadow-xs space-y-3 scroll-mt-24 sm:scroll-mt-28' },
              h('h2', { className: 'text-xl font-bold text-slate-900' }, '3. Quyền sở hữu trí tuệ'),
              h('p', { className: 'leading-relaxed text-justify' }, 'Toàn bộ nội dung bài viết, phân tích chuyên sâu, hình ảnh đồ họa đo lường và hệ thống thuật toán bảng xếp hạng thuộc bản quyền của Top Choice. Mọi hành vi sao chép, trích xuất dữ liệu tự động nhằm mục đích thương mại phải có sự đồng ý bằng văn bản của ban biên tập.')
            )
          )
        ),

        // Right Sticky Sidebar (4 cols)
        h(
          'aside',
          { className: 'lg:col-span-4 space-y-6 lg:sticky lg:top-24' },

          // 1. Mục lục điều khoản
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' },
              'Mục lục điều khoản'
            ),
            h(
              'div',
              { className: 'space-y-2 text-xs font-semibold' },
              [
                { title: '1. Miễn trừ trách nhiệm', href: '#sec-1' },
                { title: '2. Dữ liệu cá nhân & Cookie', href: '#sec-2' },
                { title: '3. Quyền sở hữu trí tuệ', href: '#sec-3' }
              ].map((item, idx) =>
                h(
                  'a',
                  {
                    key: idx,
                    href: item.href,
                    className: 'flex items-center justify-between p-2 rounded hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors'
                  },
                  h('span', null, item.title),
                  h('span', { className: 'text-slate-400' }, '→')
                )
              )
            )
          ),

          // 2. Kênh giải quyết khiếu nại
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' },
              'Bộ phận pháp chế'
            ),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' },
              'Mọi yêu cầu liên quan đến bản quyền hoặc khiếu nại thông tin xin vui lòng gửi về bộ phận pháp chế của Top Choice.'
            ),
            h(
              'a',
              {
                href: '/lien-he',
                className: 'block text-center w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold shadow-xs transition-colors'
              },
              'Liên hệ bộ phận pháp chế →'
            )
          ),

          // 3. Tiêu chuẩn biên tập
          h(
            'div',
            { className: 'p-5 bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200/80 rounded-lg shadow-sm space-y-2.5' },
            h('h4', { className: 'text-xs font-bold text-blue-900 uppercase tracking-wider' }, 'Cam kết minh bạch'),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' },
              'Tìm hiểu thêm về các quy chuẩn đo lường và cách chúng tôi bảo vệ quyền lợi người tiêu dùng.'
            ),
            h(
              'a',
              {
                href: '/nguyen-tac-bien-tap',
                className: 'inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline'
              },
              'Xem nguyên tắc biên tập →'
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
