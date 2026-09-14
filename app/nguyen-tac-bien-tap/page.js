'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const h = React.createElement;
const principles = [
  ['Độc lập', 'Xếp hạng không bị chi phối bởi nhà sản xuất, nhà bán lẻ hay ngân sách tài trợ.'],
  ['Có cấu trúc kiểm chứng', 'Mỗi nhận định quan trọng được đối chiếu với bài test, tài liệu kỹ thuật hoặc trải nghiệm thực tế.'],
  ['Minh bạch cập nhật', 'Chúng tôi ghi rõ tác giả, ngày cập nhật và phương pháp đánh giá trên các trang nội dung.'],
  ['Tách bạch quảng cáo', 'Nội dung được tài trợ, nếu có, sẽ được gán nhãn rõ ràng và không thay đổi kết luận biên tập.'],
  ['Sửa sai kịp thời', 'Độc giả có thể liên hệ để báo lỗi; đội ngũ sẽ xem xét và chỉnh sửa thông tin cần thiết.']
];

export default function EditorialPrinciplesPage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      h(Breadcrumb, { items: [{ name: 'Nguyên tắc biên tập' }] }),

      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },

        // Left Content (8 cols)
        h(
          'div',
          { className: 'lg:col-span-8 space-y-6' },
          h(
            'header',
            { className: 'space-y-4' },
            h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Nguyên Tắc Biên Tập'),
            h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed text-justify' }, 'Top Choice ảnh hưởng đến quyết định mua sắm của độc giả, vì vậy chúng tôi đặt tính chính xác, độc lập và tính minh bạch lên hàng đầu.')
          ),
          h(
            'section',
            { className: 'space-y-4' },
            principles.map((item, index) =>
              h(
                'article',
                { key: item[0], className: 'bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex gap-4 items-start' },
                h('span', { className: 'w-9 h-9 flex-shrink-0 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs' }, index + 1),
                h(
                  'div',
                  null,
                  h('h2', { className: 'font-bold text-lg text-slate-900' }, item[0]),
                  h('p', { className: 'mt-1.5 text-sm text-slate-600 leading-relaxed text-justify' }, item[1])
                )
              )
            )
          ),
          h(
            'section',
            { className: 'rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-sky-50/50 p-6 text-sm text-blue-950 leading-relaxed space-y-2' },
            h('h2', { className: 'font-bold text-base text-blue-900' }, 'Góp ý cho tòa soạn'),
            h('p', { className: 'text-xs sm:text-sm text-slate-700 leading-relaxed text-justify' }, 'Phát hiện thông tin cần cập nhật hoặc dữ liệu kỹ thuật chưa chính xác? Hãy gửi cho chúng tôi qua trang Liên hệ. Mọi phản hồi của bạn đều được ban biên tập tiếp nhận và xác minh kỹ lưỡng trong vòng 48 giờ.')
          )
        ),

        // Right Sticky Sidebar (4 cols)
        h(
          'aside',
          { className: 'lg:col-span-4 space-y-6 lg:sticky lg:top-24' },

          // 1. Cam kết độc lập
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('span', { className: 'inline-flex items-center px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-bold uppercase tracking-wider' },
              'Cam kết độc lập 100%'
            ),
            h('h4', { className: 'font-bold text-sm text-slate-900' }, 'Không bán vị trí xếp hạng'),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' },
              'Thứ hạng trong các bài Top 10 hoàn toàn do kết quả đo lường và trải nghiệm thực tế quyết định. Không một nhãn hàng nào có thể chi trả để mua vị trí số 1.'
            )
          ),

          // 2. Liên kết thông tin liên quan
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' }, 'Nội dung liên quan'),
            h(
              'div',
              { className: 'space-y-2 text-xs font-semibold' },
              [
                { title: 'Phương pháp đánh giá sản phẩm', href: '/phuong-phap-danh-gia' },
                { title: 'Đội ngũ chuyên gia & Tác giả', href: '/chuyen-gia' },
                { title: 'Về sứ mệnh Top Choice', href: '/ve-chung-toi' },
                { title: 'Câu hỏi thường gặp (FAQ)', href: '/cau-hoi-thuong-gap' }
              ].map((link, idx) =>
                h(
                  'a',
                  {
                    key: idx,
                    href: link.href,
                    className: 'flex items-center justify-between p-2.5 rounded hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-100 transition-all'
                  },
                  h('span', null, link.title),
                  h('span', { className: 'text-slate-400' }, '→')
                )
              )
            )
          ),

          // 3. Khối Liên hệ tòa soạn
          h(
            'div',
            { className: 'p-5 bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200/80 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-blue-900 uppercase tracking-wider' }, 'Liên hệ ban biên tập'),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' },
              'Bạn có câu hỏi, đề xuất đánh giá sản phẩm mới hoặc khiếu nại về nội dung?'
            ),
            h(
              'a',
              {
                href: '/lien-he',
                className: 'block text-center w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold shadow-xs transition-colors'
              },
              'Gửi phản ánh / Đề xuất →'
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
