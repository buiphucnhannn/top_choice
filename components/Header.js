'use client';

import React, { useState } from 'react';

const h = React.createElement;

const Icons = {
  home: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
    ),
  laptop: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ),
  shirt: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M7 4h10l1 4-4 2v10H10V10L6 8l1-4z' })
    ),
  heart: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
    ),
  baby: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('circle', { cx: '12', cy: '12', r: '9', strokeWidth: 1.8 }),
      h('path', { strokeLinecap: 'round', strokeWidth: 1.8, d: 'M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0' })
    ),
  sports: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ),
  ai: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' })
    ),
  software: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('rect', { x: '3', y: '4', width: '18', height: '16', rx: '2', strokeWidth: 1.8 }),
      h('path', { strokeLinecap: 'round', strokeWidth: 1.8, d: 'M3 10h18M7 7h.01M10 7h.01M13 7h.01' })
    ),
  cloud: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' })
    ),
  shield: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ),
  app: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('rect', { x: '4', y: '4', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 }),
      h('rect', { x: '14', y: '4', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 }),
      h('rect', { x: '4', y: '14', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 }),
      h('rect', { x: '14', y: '14', width: '6', height: '6', rx: '1.5', strokeWidth: 1.8 })
    ),
  chart: (props) =>
    h('svg', { className: props.className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.8, d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
    )
};

const physicalMegaMenu = [
  {
    name: 'Gia dụng & Nhà bếp',
    slug: 'gia-dung',
    href: '/san-pham-vat-ly/gia-dung',
    icon: Icons.home,
    subs: [
      { name: 'Nồi chiên không dầu', href: '/gia-dung/noi-chien' },
      { name: 'Robot hút bụi thông minh', href: '/gia-dung/robot-hut-bui' },
      { name: 'Máy lọc không khí', href: '/gia-dung/may-loc-khong-khi' }
    ]
  },
  {
    name: 'Thiết bị Điện tử',
    slug: 'dien-tu',
    href: '/san-pham-vat-ly/dien-tu',
    icon: Icons.laptop,
    subs: [
      { name: 'Laptop văn phòng & Đồ họa', href: '/dien-tu/laptop' },
      { name: 'Tai nghe không dây (TWS)', href: '/dien-tu/tai-nghe' },
      { name: 'Đồng hồ thông minh Smartwatch', href: '/dien-tu/smartwatch' }
    ]
  },
  {
    name: 'Thời trang & Phụ kiện',
    slug: 'thoi-trang',
    href: '/san-pham-vat-ly/thoi-trang',
    icon: Icons.shirt,
    subs: [
      { name: 'Giày thể thao sneaker', href: '/thoi-trang/giay-the-thao' },
      { name: 'Balo laptop chống sốc', href: '/thoi-trang/balo' }
    ]
  },
  {
    name: 'Sức khỏe & Làm đẹp',
    slug: 'suc-khoe',
    href: '/san-pham-vat-ly/suc-khoe',
    icon: Icons.heart,
    subs: [
      { name: 'Bàn chải điện sóng âm Sonic', href: '/suc-khoe/ban-chai-dien' },
      { name: 'Máy massage cổ vai gáy', href: '/suc-khoe/may-massage' }
    ]
  },
  {
    name: 'Mẹ & Bé',
    slug: 'me-be',
    href: '/san-pham-vat-ly/me-be',
    icon: Icons.baby,
    subs: [
      { name: 'Máy tiệt trùng bình sữa', href: '/me-be/may-tiet-trung' },
      { name: 'Xe đẩy & Ghế ngồi ô tô', href: '/me-be/xe-day' }
    ]
  },
  {
    name: 'Thể Thao & Dã Ngoại',
    slug: 'the-thao',
    href: '/san-pham-vat-ly/the-thao',
    icon: Icons.sports,
    subs: [
      { name: 'Dụng cụ tập thể hình tại nhà', href: '/the-thao/tap-gym' },
      { name: 'Đồ dã ngoại & lều trại', href: '/the-thao/da-ngoai' }
    ]
  }
];

const digitalMegaMenu = [
  {
    name: 'Công cụ AI & Trợ lý ảo',
    slug: 'cong-cu-ai',
    href: '/san-pham-so/cong-cu-ai',
    icon: Icons.ai,
    subs: [
      { name: 'Trợ lý AI & Chatbot thông minh', href: '/cong-cu-ai/tro-ly-ao' },
      { name: 'AI tạo hình ảnh & đồ họa', href: '/cong-cu-ai/tao-anh-ai' },
      { name: 'AI viết nội dung & SEO', href: '/cong-cu-ai/viet-noi-dung' }
    ]
  },
  {
    name: 'Phần mềm & SaaS',
    slug: 'phan-mem',
    href: '/san-pham-so/phan-mem',
    icon: Icons.software,
    subs: [
      { name: 'Quản lý dự án & Ghi chú', href: '/phan-mem/quan-ly-du-an' },
      { name: 'Thiết kế đồ họa online', href: '/phan-mem/thiet-ke' }
    ]
  },
  {
    name: 'Hosting & Cloud',
    slug: 'hosting',
    href: '/san-pham-so/hosting',
    icon: Icons.cloud,
    subs: [
      { name: 'Cloud Hosting tốc độ cao', href: '/hosting/cloud-hosting' },
      { name: 'VPS giá rẻ cấu hình cao', href: '/hosting/vps' }
    ]
  },
  {
    name: 'VPN & An ninh mạng',
    slug: 'vpn',
    href: '/san-pham-so/vpn',
    icon: Icons.shield,
    subs: [
      { name: 'VPN cá nhân mã hóa', href: '/vpn/vpn-ca-nhan' },
      { name: 'Phần mềm diệt virus', href: '/vpn/antivirus' }
    ]
  },
  {
    name: 'Ứng Dụng & Tiện Ích',
    slug: 'ung-dung',
    href: '/san-pham-so/ung-dung',
    icon: Icons.app,
    subs: [
      { name: 'Ứng dụng ghi chú & Notion', href: '/ung-dung/ghi-chu' },
      { name: 'Quản lý tài chính cá nhân', href: '/ung-dung/tai-chinh' }
    ]
  },
  {
    name: 'Marketing & Khóa Học Số',
    slug: 'marketing',
    href: '/san-pham-so/marketing',
    icon: Icons.chart,
    subs: [
      { name: 'Email Marketing tự động', href: '/marketing/email-marketing' },
      { name: 'Nghiên cứu từ khóa & SEO', href: '/marketing/seo-analytics' },
      { name: 'Khóa học lập trình & AI', href: '/khoa-hoc/lap-trinh' }
    ]
  }
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVatLyOpen, setMobileVatLyOpen] = useState(false);
  const [mobileSoOpen, setMobileSoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const renderMegaMenu = (title, hubHref, hubLabel, menuData, hotRankings, leftOffsetClass) => {
    return h(
      'div',
      { className: `absolute ${leftOffsetClass} top-full pt-2 w-[820px] lg:w-[880px] z-50 animate-fadeIn` },
      h(
        'div',
        { className: 'bg-white rounded-md shadow-2xl border border-slate-200 overflow-hidden' },
        
        // Top Header of Mega Menu
        h(
          'div',
          { className: 'flex items-center justify-between px-5 py-2.5 bg-slate-50/90 border-b border-slate-200/80' },
          h(
            'div',
            { className: 'flex items-center gap-2' },
            h('span', { className: 'w-2 h-2 rounded-full bg-blue-600' }),
            h('span', { className: 'text-xs font-bold uppercase tracking-wider text-slate-700' }, title)
          ),
          h(
            'a',
            {
              href: hubHref,
              className: 'text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 transition-colors'
            },
            hubLabel,
            h('span', null, '→')
          )
        ),

        // Grid of 6 Distinct, Clean Cards with Icons
        h(
          'div',
          { className: 'grid grid-cols-3 gap-3.5 p-5 bg-white' },
          menuData.map((cat, idx) =>
            h(
              'div',
              {
                key: idx,
                className: 'bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-blue-300 rounded-md p-3 transition-all flex flex-col justify-between group shadow-sm hover:shadow'
              },
              // Card Header: Icon + Category Name + Arrow Link
              h(
                'a',
                {
                  href: cat.href,
                  className: 'flex items-center gap-2.5 pb-2 border-b border-slate-200/60 group/header'
                },
                h(
                  'div',
                  { className: 'w-7 h-7 rounded flex items-center justify-center bg-blue-100/80 text-blue-600 group-hover/header:bg-blue-600 group-hover/header:text-white transition-colors flex-shrink-0' },
                  cat.icon({ className: 'w-3.5 h-3.5' })
                ),
                h(
                  'span',
                  { className: 'text-xs font-bold text-slate-900 group-hover/header:text-blue-600 transition-colors flex-1 truncate' },
                  cat.name
                ),
                h(
                  'svg',
                  { className: 'w-3.5 h-3.5 text-slate-300 group-hover/header:text-blue-600 group-hover/header:translate-x-0.5 transition-all flex-shrink-0', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' })
                )
              ),

              // Clean Subcategories (No noisy bullets, soft hover highlight)
              h(
                'ul',
                { className: 'space-y-0.5 pt-1.5' },
                cat.subs.map((sub, sIdx) =>
                  h(
                    'li',
                    { key: sIdx },
                    h(
                      'a',
                      {
                        href: sub.href,
                        className: 'text-xs text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 px-2 py-1 rounded flex items-center justify-between transition-all group/item'
                      },
                      h('span', { className: 'truncate font-normal group-hover/item:font-medium' }, sub.name),
                      h('span', { className: 'text-[11px] text-slate-300 group-hover/item:text-blue-600 transition-colors ml-1' }, '›')
                    )
                  )
                )
              )
            )
          )
        ),

        // Bottom Strip: Hot Rankings Pills
        h(
          'div',
          { className: 'px-5 py-2.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs' },
          h(
            'div',
            { className: 'flex items-center gap-2 text-slate-600 flex-wrap' },
            h('span', { className: 'font-bold text-blue-700 uppercase tracking-wide text-[10px] px-1.5 py-0.5 bg-blue-100 rounded' }, 'BẢNG XẾP HẠNG HOT:'),
            hotRankings.map((r, rIdx) =>
              h(
                'a',
                {
                  key: rIdx,
                  href: r.href,
                  className: 'px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-medium transition-all shadow-2xs'
                },
                r.name
              )
            )
          ),
          h(
            'a',
            { href: '/top', className: 'font-bold text-blue-600 hover:text-blue-700 hover:underline flex-shrink-0 ml-2' },
            'Tất cả bảng xếp hạng →'
          )
        )
      )
    );
  };

  return h(
    'header',
    { className: 'w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm' },
    // Main header bar
    h(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4' },
      // Brand Logo
      h(
        'a',
        { href: '/', className: 'flex flex-col group flex-shrink-0' },
        h(
          'div',
          { className: 'flex items-baseline tracking-tight' },
          h('span', { className: 'text-2xl font-black text-slate-900 tracking-tighter' }, 'TOP'),
          h('span', { className: 'text-2xl font-black text-blue-600 ml-1 tracking-tighter' }, 'CHOICE')
        ),
        h('span', { className: 'text-[10px] text-slate-500 font-medium tracking-tight -mt-0.5' }, 'Đánh giá khách quan. Lựa chọn thông minh.')
      ),

      // Desktop Nav Links
      h(
        'nav',
        { className: 'hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-slate-700 relative' },
        
        // Dropdown Sản phẩm vật lý
        h(
          'div',
          {
            className: 'relative group',
            onMouseEnter: () => setActiveDropdown('vat-ly'),
            onMouseLeave: () => setActiveDropdown(null)
          },
          h(
            'button',
            {
              onClick: () => toggleDropdown('vat-ly'),
              className: `flex items-center gap-1 hover:text-blue-600 transition-colors py-2 border-b-2 ${
                activeDropdown === 'vat-ly' ? 'text-blue-600 border-blue-600' : 'border-transparent'
              }`
            },
            'Sản phẩm vật lý',
            h(
              'svg',
              {
                className: `w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform ${activeDropdown === 'vat-ly' ? 'rotate-180 text-blue-600' : ''}`,
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor'
              },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' })
            )
          ),
          // Mega menu vật lý
          activeDropdown === 'vat-ly' &&
            renderMegaMenu(
              'Danh Mục Sản Phẩm Vật Lý',
              '/san-pham-vat-ly',
              'Xem trang Hub Vật Lý',
              physicalMegaMenu,
              [
                { name: 'Top 10 Nồi chiên', href: '/top/noi-chien-khong-dau' },
                { name: 'Top 10 Tai nghe', href: '/top/tai-nghe-khong-day' },
                { name: 'Top 10 Balo', href: '/top/balo-laptop-chong-soc' }
              ],
              'left-0'
            )
        ),

        // Dropdown Sản phẩm số
        h(
          'div',
          {
            className: 'relative group',
            onMouseEnter: () => setActiveDropdown('so'),
            onMouseLeave: () => setActiveDropdown(null)
          },
          h(
            'button',
            {
              onClick: () => toggleDropdown('so'),
              className: `flex items-center gap-1 hover:text-blue-600 transition-colors py-2 border-b-2 ${
                activeDropdown === 'so' ? 'text-blue-600 border-blue-600' : 'border-transparent'
              }`
            },
            'Sản phẩm số',
            h(
              'svg',
              {
                className: `w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform ${activeDropdown === 'so' ? 'rotate-180 text-blue-600' : ''}`,
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor'
              },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' })
            )
          ),
          // Mega menu số
          activeDropdown === 'so' &&
            renderMegaMenu(
              'Dịch Vụ Số & Công Cụ Công Nghệ',
              '/san-pham-so',
              'Xem trang Hub Số',
              digitalMegaMenu,
              [
                { name: 'Top Công cụ AI', href: '/top/cong-cu-ai-van-phong' },
                { name: 'Top 5 VPN', href: '/top/vpn-tot-nhat' },
                { name: 'Top Cloud Hosting', href: '/top/cloud-hosting-toc-do-cao' }
              ],
              '-left-32 lg:-left-24'
            )
        ),

        // Link Bảng xếp hạng
        h('a', { href: '/top', className: 'hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600' }, 'Bảng xếp hạng'),

        // Link Hướng dẫn
        h('a', { href: '/huong-dan', className: 'hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600' }, 'Hướng dẫn')
      ),

      // Search Bar & Login Button on Header
      h(
        'div',
        { className: 'hidden sm:flex items-center gap-3 flex-shrink-0' },
        h(
          'form',
          { onSubmit: handleSearchSubmit, className: 'relative w-44 md:w-52 lg:w-64' },
          h(
            'div',
            { className: 'relative w-full flex items-center' },
            h('input', {
              type: 'text',
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: 'Tìm kiếm sản phẩm...',
              className: 'w-full pl-3 pr-8 py-1.5 text-xs bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 text-slate-800'
            }),
            h(
              'button',
              {
                type: 'submit',
                'aria-label': 'Tìm kiếm',
                className: 'absolute right-1 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors'
              },
              h(
                'svg',
                { className: 'w-3.5 h-3.5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
              )
            )
          )
        ),
        // Nút Đăng nhập
        h(
          'a',
          {
            href: '/admin/login',
            className: 'px-3.5 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm hover:shadow transition-all flex items-center gap-1.5 flex-shrink-0 active:scale-[0.98]'
          },
          h(
            'svg',
            { className: 'w-3.5 h-3.5 text-white', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
          ),
          'Đăng nhập'
        )
      ),

      // Mobile Hamburger Button
      h(
        'button',
        {
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: 'md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none'
        },
        h(
          'svg',
          { className: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' })
        )
      )
    ),

    // Mobile Menu Drawer
    mobileMenuOpen &&
      h(
        'div',
        { className: 'md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-3 animate-fadeIn max-h-[80vh] overflow-y-auto' },
        h(
          'form',
          { onSubmit: handleSearchSubmit, className: 'relative' },
          h('input', {
            type: 'text',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: 'Tìm kiếm sản phẩm, công cụ...',
            className: 'w-full pl-3 pr-9 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md'
          }),
          h(
            'button',
            { type: 'submit', className: 'absolute right-2 top-2.5 text-slate-500' },
            h(
              'svg',
              { className: 'w-4 h-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
            )
          )
        ),
        h(
          'div',
          { className: 'flex flex-col space-y-1 text-sm font-semibold text-slate-700' },
          
          // Mobile: Sản phẩm vật lý Accordion
          h(
            'div',
            { className: 'border-b border-slate-100 pb-1' },
            h(
              'button',
              {
                onClick: () => setMobileVatLyOpen(!mobileVatLyOpen),
                className: 'w-full py-2.5 px-1 flex items-center justify-between text-left hover:text-blue-600'
              },
              h('span', { className: 'font-bold' }, 'Sản phẩm vật lý'),
              h('span', { className: 'text-xs text-slate-400 font-bold' }, mobileVatLyOpen ? '−' : '+')
            ),
            mobileVatLyOpen &&
              h(
                'div',
                { className: 'pl-3 pr-1 pb-2 space-y-3 bg-slate-50 rounded-md p-2 mt-1' },
                h(
                  'a',
                  { href: '/san-pham-vat-ly', className: 'block text-xs font-bold text-blue-600 hover:underline' },
                  '→ Vào trang Hub Sản Phẩm Vật Lý'
                ),
                physicalMegaMenu.map((cat, idx) =>
                  h(
                    'div',
                    { key: idx, className: 'space-y-1' },
                    h(
                      'a',
                      { href: cat.href, className: 'block text-xs font-bold text-slate-800 hover:text-blue-600' },
                      cat.name
                    ),
                    h(
                      'div',
                      { className: 'pl-2 space-y-1 border-l-2 border-slate-200' },
                      cat.subs.map((sub, sIdx) =>
                        h(
                          'a',
                          { key: sIdx, href: sub.href, className: 'block text-[11px] text-slate-600 hover:text-blue-600 py-0.5' },
                          '• ', sub.name
                        )
                      )
                    )
                  )
                )
              )
          ),

          // Mobile: Sản phẩm số Accordion
          h(
            'div',
            { className: 'border-b border-slate-100 pb-1' },
            h(
              'button',
              {
                onClick: () => setMobileSoOpen(!mobileSoOpen),
                className: 'w-full py-2.5 px-1 flex items-center justify-between text-left hover:text-blue-600'
              },
              h('span', { className: 'font-bold' }, 'Sản phẩm số'),
              h('span', { className: 'text-xs text-slate-400 font-bold' }, mobileSoOpen ? '−' : '+')
            ),
            mobileSoOpen &&
              h(
                'div',
                { className: 'pl-3 pr-1 pb-2 space-y-3 bg-slate-50 rounded-md p-2 mt-1' },
                h(
                  'a',
                  { href: '/san-pham-so', className: 'block text-xs font-bold text-blue-600 hover:underline' },
                  '→ Vào trang Hub Sản Phẩm Số'
                ),
                digitalMegaMenu.map((cat, idx) =>
                  h(
                    'div',
                    { key: idx, className: 'space-y-1' },
                    h(
                      'a',
                      { href: cat.href, className: 'block text-xs font-bold text-slate-800 hover:text-blue-600' },
                      cat.name
                    ),
                    h(
                      'div',
                      { className: 'pl-2 space-y-1 border-l-2 border-slate-200' },
                      cat.subs.map((sub, sIdx) =>
                        h(
                          'a',
                          { key: sIdx, href: sub.href, className: 'block text-[11px] text-slate-600 hover:text-blue-600 py-0.5' },
                          '• ', sub.name
                        )
                      )
                    )
                  )
                )
              )
          ),

          // Other Links
          h('a', { href: '/top', className: 'py-2 px-1 hover:text-blue-600 border-b border-slate-100' }, 'Bảng xếp hạng'),
          h('a', { href: '/huong-dan', className: 'py-2 px-1 hover:text-blue-600 border-b border-slate-100' }, 'Hướng dẫn'),
          h(
            'a',
            {
              href: '/admin/login',
              className: 'mt-3 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center font-bold'
            },
            'Đăng nhập Quản Trị'
          )
        )
      )
  );
}
