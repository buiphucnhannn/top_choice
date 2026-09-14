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
  return h('div', { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h('main', { className: 'flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      h(Breadcrumb, { items: [{ name: 'Nguyên tắc biên tập' }] }),
      h('header', { className: 'space-y-4' }, h('span', { className: 'inline-flex px-2.5 py-1 rounded border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider' }, 'Cam kết với độc giả'), h('h1', { className: 'text-3xl sm:text-4xl font-extrabold tracking-tight' }, 'Nguyên Tắc Biên Tập'), h('p', { className: 'text-slate-600 leading-relaxed' }, 'Top Choice ảnh hưởng đến quyết định mua sắm của độc giả, vì vậy chúng tôi đặt tính chính xác, độc lập và tính minh bạch lên hàng đầu.')),
      h('section', { className: 'space-y-4' }, principles.map((item, index) => h('article', { key: item[0], className: 'bg-white rounded-md border border-slate-200 shadow-sm p-5 flex gap-4' }, h('span', { className: 'w-8 h-8 flex-shrink-0 rounded-full bg-blue-600 text-white font-black flex items-center justify-center' }, index + 1), h('div', null, h('h2', { className: 'font-bold text-lg' }, item[0]), h('p', { className: 'mt-1 text-sm text-slate-600 leading-relaxed' }, item[1]))))),
      h('section', { className: 'rounded-md border border-blue-200 bg-blue-50 p-5 text-sm text-blue-950 leading-relaxed' }, h('h2', { className: 'font-bold text-base mb-2' }, 'Góp ý cho tòa soạn'), 'Phát hiện thông tin cần cập nhật? Hãy gửi cho chúng tôi qua trang Liên hệ. Phản hồi của bạn giúp nội dung tốt hơn cho cộng đồng.')
    ),
    h(Footer, null)
  );
}
