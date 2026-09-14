'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const h = React.createElement;

export default function MethodologyPage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      h(Breadcrumb, { items: [{ name: 'Phương pháp đánh giá' }] }),
      h(
        'header',
        { className: 'space-y-4' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'Tính Minh Bạch & Độc Lập'
        ),
        h('h1', { className: 'text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight' }, 'Phương Pháp Đánh Giá Sản Phẩm & Thang Điểm'),
        h('p', { className: 'text-base text-slate-600 leading-relaxed' }, 'Để giữ được niềm tin từ hàng trăm nghìn độc giả, chúng tôi áp dụng một quy trình thử nghiệm và chấm điểm chuẩn hóa, minh bạch cho từng nhóm sản phẩm.')
      ),

      // Detailed Steps
      h(
        'section',
        { className: 'space-y-4 pt-2' },
        [
          {
            step: 'Bước 1',
            title: 'Nghiên cứu thị trường & Lựa chọn danh sách',
            content: 'Chúng tôi quét các sản phẩm bán chạy nhất, các công cụ được cộng đồng quốc tế và Việt Nam đánh giá cao để lên danh sách từ 15 đến 20 ứng viên cho mỗi bảng xếp hạng.'
          },
          {
            step: 'Bước 2',
            title: 'Mua mẫu thử hoặc đăng ký tài khoản thực tế',
            content: 'Đội ngũ chuyên gia tự mua sản phẩm tại các cửa hàng bán lẻ hoặc đăng ký các gói trả phí chính thức của phần mềm để đảm bảo trải nghiệm giống 100% với độc giả.'
          },
          {
            step: 'Bước 3',
            title: 'Thử nghiệm theo bộ tiêu chuẩn đo lường định lượng',
            content: 'Mỗi danh mục có bộ bài test riêng: đo nhiệt độ & lượng dầu (nồi chiên), đo phổ tần âm thanh & độ sâu ANC (tai nghe), đo thời gian render & benchmark CPU (laptop), kiểm tra tốc độ phản hồi & logic (AI tools).'
          },
          {
            step: 'Bước 4',
            title: 'Chấm điểm trên thang 10 & Tính trọng số',
            content: 'Điểm số từ 0 đến 10 được làm tròn tối đa một chữ số thập phân. Bảng xếp hạng phản ánh sản phẩm tốt nhất cho số đông người dùng, kèm các khuyến nghị cho từng ngân sách cụ thể.'
          }
        ].map((item, idx) =>
          h(
            'div',
            { key: idx, className: 'p-6 bg-white border border-slate-200 rounded-md space-y-2 shadow-sm' },
            h('span', { className: 'inline-block px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold rounded uppercase tracking-wider' }, item.step),
            h('h3', { className: 'text-lg font-bold text-slate-900' }, item.title),
            h('p', { className: 'text-sm text-slate-600 leading-relaxed' }, item.content)
          )
        )
      )
    ),
    h(Footer, null)
  );
}
