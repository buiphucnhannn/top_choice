'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const h = React.createElement;

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      category: 'methodology',
      q: 'Làm thế nào để Top Choice đánh giá và thử nghiệm sản phẩm?',
      a: 'Đội ngũ chuyên gia của chúng tôi thu thập sản phẩm mẫu thực tế từ thị trường bán lẻ chính hãng hoặc đăng ký tài khoản trả phí thực tế (đối với phần mềm/SaaS). Mọi sản phẩm đều được kiểm thử theo bộ chỉ số định lượng khắt khe trước khi tiến hành chấm điểm và xếp hạng.'
    },
    {
      id: 2,
      category: 'methodology',
      q: 'Các bảng xếp hạng Top 10 được xây dựng dựa trên tiêu chí nào?',
      a: 'Mỗi bảng xếp hạng kết hợp nhiều trọng số: chất lượng tính năng (35%), giá thành & giá trị mang lại (25%), độ bền bỉ / độ ổn định (20%) và dịch vụ bảo hành/hỗ trợ người dùng (20%). Chúng tôi không xếp hạng theo cảm tính hay thỏa thuận thương mại.'
    },
    {
      id: 3,
      category: 'methodology',
      q: 'Thang điểm đánh giá của Top Choice được tính như thế nào?',
      a: 'Thang điểm chuẩn hóa từ 0 đến 10, được làm tròn tối đa 1 chữ số thập phân. Sản phẩm từ 9.0 trở lên thuộc nhóm Xuất Sắc (Top Tier), từ 8.0 đến 8.9 là Rất Tốt, từ 7.0 đến 7.9 là Khá Tốt. Điểm tổng kết được tính từ trung bình có trọng số của các tiêu chí cốt lõi.'
    },
    {
      id: 4,
      category: 'pricing',
      q: 'Thông tin giá tham khảo trên website có được cập nhật thường xuyên không?',
      a: 'Dữ liệu giá tham khảo được ban biên tập quét và cập nhật định kỳ hàng tuần từ các sàn thương mại điện tử lớn (Shopee, Tiki, Lazada) và các đại lý bán lẻ chính hãng tại Việt Nam nhằm đảm bảo độ chính xác cao nhất.'
    },
    {
      id: 5,
      category: 'pricing',
      q: 'Top Choice có trực tiếp bán hàng hoặc giao nhận sản phẩm không?',
      a: 'Top Choice là nền tảng đánh giá và so sánh sản phẩm độc lập, chúng tôi KHÔNG trực tiếp bán hàng hay thu tiền của người dùng. Chúng tôi cung cấp đường dẫn đến các nhà bán lẻ uy tín và đối tác ủy quyền chính hãng để người dùng an tâm đặt mua.'
    },
    {
      id: 6,
      category: 'pricing',
      q: 'Giá bán thực tế khi mua có thể khác với giá trên website không?',
      a: 'Có thể có chênh lệch nhỏ tùy theo các chương trình khuyến mãi chớp nhoáng (flash sale), mã giảm giá riêng của sàn hoặc phí vận chuyển tại từng khu vực. Chúng tôi khuyến khích người đọc bấm vào nút "Xem nơi bán tốt nhất" để đối chiếu giá thời gian thực.'
    },
    {
      id: 7,
      category: 'digital',
      q: 'Đối với sản phẩm số & công cụ AI, tiêu chí đánh giá có gì khác biệt?',
      a: 'Đối với phần mềm và công cụ số, chúng tôi đánh giá sâu về tốc độ phản hồi, độ chính xác của mô hình AI, giao diện UX/UI, độ tương thích đa nền tảng, tính minh bạch về bảo mật dữ liệu người dùng và chính sách hoàn tiền/dùng thử miễn phí.'
    },
    {
      id: 8,
      category: 'digital',
      q: 'Các gói giá phần mềm SaaS có tự động gia hạn không?',
      a: 'Hầu hết các dịch vụ quốc tế (VPN, Hosting, AI Tools) đều mặc định kích hoạt tự động gia hạn. Trong từng bài đánh giá chi tiết, Top Choice luôn có ghi chú cảnh báo và hướng dẫn người dùng cách tắt tự động gia hạn nếu chỉ muốn dùng thử trong ngắn hạn.'
    },
    {
      id: 9,
      category: 'digital',
      q: 'Tôi có thể dùng thẻ thanh toán tại Việt Nam để mua các dịch vụ quốc tế không?',
      a: 'Hầu hết các công cụ số được chúng tôi đề xuất đều hỗ trợ thẻ Visa/Mastercard phát hành tại Việt Nam, một số dịch vụ phổ biến còn chấp nhận thanh toán qua PayPal, MoMo hoặc chuyển khoản ngân hàng nội địa.'
    },
    {
      id: 10,
      category: 'policy',
      q: 'Các nhãn hàng có thể trả tiền để mua vị trí Top 1 được không?',
      a: 'Tuyệt đối KHÔNG. Nguyên tắc số một của Top Choice là tính độc lập và khách quan biên tập. Không có bất kỳ nhãn hàng nào có thể chi trả tiền để thay đổi thứ hạng sản phẩm hay mua chuộc điểm số đánh giá của chuyên gia.'
    },
    {
      id: 11,
      category: 'policy',
      q: 'Tôi có thể đề xuất một sản phẩm để Top Choice thử nghiệm và đánh giá không?',
      a: 'Hoàn toàn được! Bạn có thể gửi tên sản phẩm cùng lý do đề xuất qua trang Liên hệ. Ban biên tập sẽ tổng hợp mức độ quan tâm của cộng đồng độc giả để đưa vào kế hoạch thử nghiệm trong các đợt tiếp theo.'
    },
    {
      id: 12,
      category: 'policy',
      q: 'Làm thế nào để báo cáo một lỗi sai hoặc thông tin chưa chính xác?',
      a: 'Chúng tôi rất trân trọng mọi đóng góp xây dựng. Nếu phát hiện thông số kỹ thuật, đường dẫn hỏng hoặc thông tin giá chưa đúng, vui lòng gửi email về ban biên tập qua trang Liên hệ để được kiểm tra và chỉnh sửa trong vòng 24 giờ.'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tất cả câu hỏi' },
    { id: 'methodology', label: 'Phương pháp & Chấm điểm' },
    { id: 'pricing', label: 'Giá cả & Mua sắm' },
    { id: 'digital', label: 'Sản phẩm số & SaaS' },
    { id: 'policy', label: 'Chính sách & Độc lập' }
  ];

  const filtered = faqItems.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 w-full space-y-8' },
      h(Breadcrumb, { items: [{ name: 'Câu hỏi thường gặp' }] }),

      // Header
      h(
        'header',
        { className: 'space-y-4 text-center max-w-2xl mx-auto' },
        h(
          'div',
          { className: 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs font-bold uppercase tracking-wider' },
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-blue-600' }),
          'Trung Tâm Hỗ Trợ & Giải Đáp'
        ),
        h('h1', { className: 'text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight' }, 'Câu Hỏi Thường Gặp (FAQ)'),
        h('p', { className: 'text-sm sm:text-base text-slate-600 leading-relaxed' }, 'Tổng hợp các câu hỏi phổ biến nhất về quy trình đánh giá độc lập, nguồn gốc dữ liệu giá và các chính sách bảo đảm của Top Choice.')
      ),

      // Search Box inside FAQ page
      h(
        'div',
        { className: 'relative max-w-xl mx-auto' },
        h(
          'div',
          { className: 'relative flex items-center bg-white border border-slate-300 rounded-md p-1 focus-within:ring-2 focus-within:ring-blue-500 shadow-sm' },
          h(
            'svg',
            { className: 'w-5 h-5 text-slate-400 ml-3 pointer-events-none', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
          ),
          h('input', {
            type: 'text',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: 'Tìm kiếm nhanh câu hỏi bạn quan tâm...',
            className: 'w-full pl-3 pr-4 py-2.5 text-sm bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400'
          }),
          searchQuery &&
            h(
              'button',
              {
                onClick: () => setSearchQuery(''),
                className: 'mr-2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded w-5 h-5 flex items-center justify-center'
              },
              '✕'
            )
        )
      ),

      // Filter Tabs
      h(
        'div',
        { className: 'flex items-center justify-center flex-wrap gap-2 border-b border-slate-200 pb-4 text-xs sm:text-sm font-semibold' },
        categories.map((cat) =>
          h(
            'button',
            {
              key: cat.id,
              onClick: () => setActiveCategory(cat.id),
              className: `px-3.5 py-1.5 rounded transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`
            },
            cat.label
          )
        )
      ),

      // Accordion List
      h(
        'div',
        { className: 'space-y-3 pt-2' },
        filtered.length === 0
          ? h(
              'div',
              { className: 'text-center py-12 bg-white rounded-md border border-slate-200 shadow-sm space-y-2' },
              h('div', { className: 'text-3xl' }, '🔍'),
              h('h3', { className: 'text-base font-bold text-slate-800' }, 'Không tìm thấy câu hỏi phù hợp'),
              h('p', { className: 'text-xs text-slate-500' }, 'Hãy thử tìm bằng từ khóa khác hoặc liên hệ trực tiếp với chúng tôi.')
            )
          : filtered.map((item) => {
              const isOpen = openIndex === item.id;
              return h(
                'div',
                {
                  key: item.id,
                  className: 'bg-white border border-slate-200 rounded-md p-4 shadow-sm hover:border-blue-300 transition-all'
                },
                h(
                  'button',
                  {
                    onClick: () => toggleAccordion(item.id),
                    className: 'w-full text-left flex items-start justify-between gap-3 text-slate-800 hover:text-blue-600 transition-colors group'
                  },
                  h(
                    'span',
                    { className: 'text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex-1' },
                    item.q
                  ),
                  h(
                    'span',
                    {
                      className: `w-6 h-6 flex-shrink-0 flex items-center justify-center border rounded text-sm font-bold transition-all ${
                        isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'
                      }`
                    },
                    isOpen ? '−' : '+'
                  )
                ),
                isOpen &&
                  h(
                    'div',
                    { className: 'mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn' },
                    item.a
                  )
              );
            })
      ),

      // Help Box
      h(
        'div',
        { className: 'bg-white border border-blue-200 rounded-lg p-6 text-center space-y-3 shadow-sm mt-8' },
        h('h3', { className: 'text-base font-bold text-slate-900' }, 'Bạn vẫn còn thắc mắc cần giải đáp?'),
        h('p', { className: 'text-xs text-slate-600 max-w-md mx-auto leading-relaxed' }, 'Nếu câu hỏi của bạn chưa có trong danh sách trên, đừng ngần ngại gửi tin nhắn cho ban biên tập. Chúng tôi sẽ phản hồi nhanh chóng.'),
        h(
          'a',
          {
            href: '/lien-he',
            className: 'inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-sm transition-all'
          },
          'Gửi câu hỏi / Liên hệ ngay →'
        )
      )
    ),
    h(Footer, null)
  );
}
