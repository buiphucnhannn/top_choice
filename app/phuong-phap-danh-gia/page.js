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
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      h(Breadcrumb, { items: [{ name: 'Phương pháp đánh giá' }] }),

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
            h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, 'Phương Pháp Đánh Giá Sản Phẩm & Thang Điểm'),
            h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed text-justify' }, 'Để giữ được niềm tin từ hàng trăm nghìn độc giả, chúng tôi áp dụng một quy trình thử nghiệm và chấm điểm chuẩn hóa, minh bạch cho từng nhóm sản phẩm.')
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
                { key: idx, className: 'p-6 bg-white border border-slate-200 rounded-lg space-y-2 shadow-xs' },
                h('span', { className: 'inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold rounded uppercase tracking-wider' }, item.step),
                h('h3', { className: 'text-lg font-bold text-slate-900' }, item.title),
                h('p', { className: 'text-sm text-slate-600 leading-relaxed text-justify' }, item.content)
              )
            )
          ),

          // Core philosophy callout
          h(
            'section',
            { className: 'p-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 rounded-lg space-y-2 text-justify' },
            h('h3', { className: 'font-bold text-base text-blue-900' }, 'Trách nhiệm đối với dữ liệu thử nghiệm'),
            h('p', { className: 'text-xs sm:text-sm text-slate-700 leading-relaxed' },
              'Mọi thông số kỹ thuật, bài test nhiệt độ, độ bền hay hiệu năng phần mềm đều được ghi hình và lưu trữ trong cơ sở dữ liệu nội bộ của Top Choice. Khi sản phẩm có bản cập nhật firmware hoặc nhà sản xuất thay đổi linh kiện, chúng tôi sẽ tiến hành kiểm định lại để cập nhật điểm số.'
            )
          )
        ),

        // Right Sticky Sidebar (4 cols)
        h(
          'aside',
          { className: 'lg:col-span-4 space-y-6 lg:sticky lg:top-24' },

          // 1. Thang điểm đánh giá chuẩn
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3.5' },
            h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' },
              'Quy chuẩn thang điểm 10'
            ),
            h(
              'div',
              { className: 'space-y-2.5 text-xs' },
              [
                { score: '9.0 - 10', label: 'Xuất sắc', desc: 'Sản phẩm vượt trội, khuyên dùng hàng đầu', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                { score: '8.0 - 8.9', label: 'Rất tốt', desc: 'Cân bằng hoàn hảo giữa tính năng & giá tiền', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' },
                { score: '7.0 - 7.9', label: 'Tốt', desc: 'Đáp ứng tốt các nhu cầu thông thường', badgeClass: 'bg-amber-50 text-amber-700 border-amber-200' },
                { score: '< 7.0', label: 'Cân nhắc', desc: 'Có nhược điểm cần lưu ý trước khi mua', badgeClass: 'bg-rose-50 text-rose-700 border-rose-200' }
              ].map((tier, idx) =>
                h(
                  'div',
                  { key: idx, className: 'p-2.5 bg-slate-50/70 border border-slate-100 rounded' },
                  h('div', { className: 'flex items-center justify-between font-bold' },
                    h('span', { className: 'text-slate-900' }, tier.score),
                    h('span', { className: `px-1.5 py-0.5 rounded border text-[10px] uppercase font-extrabold ${tier.badgeClass}` }, tier.label)
                  ),
                  h('p', { className: 'text-[11px] text-slate-500 mt-1 leading-snug' }, tier.desc)
                )
              )
            )
          ),

          // 2. Liên kết Bảng xếp hạng thực tế
          h(
            'div',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' },
              'Bảng xếp hạng áp dụng'
            ),
            h(
              'div',
              { className: 'space-y-2 text-xs font-semibold' },
              [
                { title: 'Top 10 Nồi chiên không dầu tốt nhất', href: '/top/noi-chien-khong-dau' },
                { title: 'Top 10 Tai nghe chống ồn tốt nhất', href: '/top/tai-nghe-khong-day' },
                { title: 'Top 10 Công cụ AI tăng hiệu suất', href: '/top/cong-cu-ai-tot-nhat' },
                { title: 'Top 10 Dịch vụ VPN bảo mật cao', href: '/top/vpn-tot-nhat' }
              ].map((item, idx) =>
                h(
                  'a',
                  {
                    key: idx,
                    href: item.href,
                    className: 'flex items-center justify-between p-2 rounded hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors'
                  },
                  h('span', { className: 'line-clamp-1' }, item.title),
                  h('span', { className: 'text-slate-400 flex-shrink-0' }, '→')
                )
              )
            ),
            h(
              'a',
              {
                href: '/top',
                className: 'block text-center pt-2 text-xs font-bold text-blue-600 hover:underline border-t border-slate-100'
              },
              'Xem tất cả bảng xếp hạng →'
            )
          ),

          // 3. Khối Liên hệ gửi mẫu thử nghiệm
          h(
            'div',
            { className: 'p-5 bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200/80 rounded-lg shadow-sm space-y-3' },
            h('h4', { className: 'text-xs font-bold text-blue-900 uppercase tracking-wider' }, 'Gửi sản phẩm thử nghiệm'),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed text-justify' },
              'Bạn là nhà sản xuất hoặc phát triển phần mềm muốn sản phẩm được đưa vào phòng thử nghiệm của Top Choice?'
            ),
            h(
              'a',
              {
                href: '/lien-he',
                className: 'block text-center w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold shadow-xs transition-colors'
              },
              'Liên hệ phòng thử nghiệm →'
            )
          )
        )
      )
    ),
    h(Footer, null)
  );
}
