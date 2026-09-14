'use client';

import React from 'react';

const h = React.createElement;

export default function RankingAndEditorPicks() {
  const rankingItems = [
    {
      rank: 1,
      name: 'Aircook Pro 6L',
      category: 'Nồi chiên không dầu',
      image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=160&auto=format&fit=crop&q=80',
      rationale: 'Hiệu suất cao, dễ sử dụng, thiết kế hiện đại',
      score: '9.5/10',
      price: '2.490.000đ',
      slug: 'aircook-pro-6l',
      rankBadgeClass: 'bg-amber-400 text-slate-900 font-bold'
    },
    {
      rank: 2,
      name: 'SoundMax Air',
      category: 'Tai nghe không dây',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=160&auto=format&fit=crop&q=80',
      rationale: 'Chất âm tốt, pin lâu, thoải mái khi đeo',
      score: '9.2/10',
      price: '1.990.000đ',
      slug: 'soundmax-air',
      rankBadgeClass: 'bg-slate-300 text-slate-800 font-bold'
    },
    {
      rank: 3,
      name: 'LiteBook 14',
      category: 'Laptop văn phòng',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=160&auto=format&fit=crop&q=80',
      rationale: 'Hiệu năng ổn định, thiết kế mỏng nhẹ',
      score: '9.0/10',
      price: '14.990.000đ',
      slug: 'litebook-14',
      rankBadgeClass: 'bg-amber-600/30 text-amber-900 font-bold'
    },
    {
      rank: 4,
      name: 'FitTrack S',
      category: 'Đồng hồ thông minh',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=160&auto=format&fit=crop&q=80',
      rationale: 'Theo dõi sức khỏe chính xác, ứng dụng dễ dùng',
      score: '8.8/10',
      price: '3.290.000đ',
      slug: 'fittrack-s',
      rankBadgeClass: 'bg-slate-100 text-slate-600 font-semibold'
    },
    {
      rank: 5,
      name: 'CleanBot X1',
      category: 'Robot hút bụi',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=160&auto=format&fit=crop&q=80',
      rationale: 'Lực hút mạnh, tự động dọn dẹp thông minh',
      score: '8.6/10',
      price: '5.990.000đ',
      slug: 'cleanbot-x1',
      rankBadgeClass: 'bg-slate-100 text-slate-600 font-semibold'
    }
  ];

  const editorPicks = [
    {
      badge: 'LỰA CHỌN TỐT NHẤT',
      badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      title: 'LiteBook 14',
      category: 'Laptop văn phòng',
      score: '9.0/10',
      desc: 'Cân bằng hoàn hảo giữa hiệu năng, thiết kế và giá thành.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=240&auto=format&fit=crop&q=80',
      slug: 'litebook-14'
    },
    {
      badge: 'GIÁ TRỊ TỐT NHẤT',
      badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200',
      title: 'SoundMax Air',
      category: 'Tai nghe không dây',
      score: '9.2/10',
      desc: 'Chất âm ấn tượng trong tầm giá.',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=240&auto=format&fit=crop&q=80',
      slug: 'soundmax-air'
    },
    {
      badge: 'PHỔ BIẾN NHẤT',
      badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200',
      title: 'Aircook Pro 6L',
      category: 'Nồi chiên không dầu',
      score: '9.5/10',
      desc: 'Lựa chọn hàng đầu cho mọi gia đình.',
      image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=240&auto=format&fit=crop&q=80',
      slug: 'aircook-pro-6l'
    }
  ];

  return h(
    'section',
    { className: 'w-full py-10 bg-[#edf4fb]' },
    h(
      'div',
      { className: 'max-w-[1400px] mx-auto px-4 sm:px-8' },
      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch' },
        // Left Column: Bảng xếp hạng nổi bật (8 cols)
        h(
          'div',
          { className: 'lg:col-span-8 flex flex-col' },
          // Header
          h(
            'div',
            { className: 'flex items-center justify-between flex-wrap gap-2 mb-4 min-h-[36px]' },
            h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, 'Bảng xếp hạng nổi bật'),
            h(
              'div',
              { className: 'flex items-center gap-3 text-xs' },
              h('span', { className: 'text-slate-400' }, 'Cập nhật 14/09/2026'),
              h(
                'a',
                { href: '/top', className: 'font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors' },
                'Xem tất cả bảng xếp hạng',
                h('span', null, '→')
              )
            )
          ),

          // Table Container
          h(
            'div',
            { className: 'flex-1 bg-white border border-slate-200 rounded-md shadow-sm overflow-x-auto flex flex-col' },
            h(
              'table',
              { className: 'w-full text-left text-sm border-collapse min-w-[680px] flex-1' },
              h(
                'thead',
                { className: 'bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider' },
                h(
                  'tr',
                  null,
                  h('th', { className: 'py-3.5 px-4 w-12 text-center whitespace-nowrap' }, '#'),
                  h('th', { className: 'py-3.5 px-4 whitespace-nowrap' }, 'Sản phẩm'),
                  h('th', { className: 'py-3.5 px-4' }, 'Lý do nổi bật'),
                  h('th', { className: 'py-3.5 px-3 w-20 text-center whitespace-nowrap' }, 'Điểm'),
                  h('th', { className: 'py-3.5 px-4 whitespace-nowrap text-right' }, 'Giá tham khảo'),
                  h('th', { className: 'py-3.5 px-4 w-28 text-right whitespace-nowrap' }, '')
                )
              ),
              h(
                'tbody',
                { className: 'divide-y divide-slate-100' },
                rankingItems.map((item, idx) =>
                  h(
                    'tr',
                    { key: idx, className: 'hover:bg-blue-50/30 transition-colors' },
                    // Rank badge
                    h(
                      'td',
                      { className: 'py-4 px-4 text-center' },
                      h('span', { className: `inline-flex items-center justify-center w-7 h-7 rounded text-xs ${item.rankBadgeClass}` }, item.rank)
                    ),
                    // Product info (Clickable Image & Title)
                    h(
                      'td',
                      { className: 'py-4 px-4' },
                      h(
                        'a',
                        {
                          href: `/review/${item.slug}`,
                          className: 'flex items-center gap-3 group transition-colors'
                        },
                        h('img', {
                          src: item.image,
                          alt: item.name,
                          className: 'w-11 h-11 rounded object-cover border border-slate-100 bg-slate-50 flex-shrink-0 group-hover:scale-105 transition-transform'
                        }),
                        h(
                          'div',
                          null,
                          h('div', { className: 'font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors' }, item.name),
                          h('div', { className: 'text-xs text-slate-500' }, item.category)
                        )
                      )
                    ),
                    // Rationale
                    h('td', { className: 'py-4 px-4 text-xs text-slate-600 leading-relaxed' }, item.rationale),
                    // Score
                    h(
                      'td',
                      { className: 'py-4 px-3 text-center' },
                      h('span', { className: 'font-extrabold text-blue-600 text-sm' }, item.score)
                    ),
                    // Price (No wrap)
                    h(
                      'td',
                      { className: 'py-4 px-4 text-right font-semibold text-slate-900 text-xs sm:text-sm whitespace-nowrap' },
                      item.price
                    ),
                    // Link
                    h(
                      'td',
                      { className: 'py-4 px-4 text-right' },
                      h(
                        'a',
                        {
                          href: `/review/${item.slug}`,
                          className: 'text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline whitespace-nowrap'
                        },
                        'Xem review →'
                      )
                    )
                  )
                )
              )
            )
          )
        ),

        // Right Column: Lựa chọn biên tập viên (4 cols)
        h(
          'div',
          { className: 'lg:col-span-4 flex flex-col' },
          // Header
          h(
            'div',
            { className: 'flex items-center justify-between mb-4 min-h-[36px]' },
            h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' }, 'Lựa chọn biên tập viên'),
            h(
              'a',
              { href: '/top', className: 'text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors' },
              'Xem tất cả →'
            )
          ),

          // 3 Cards Stack - flex-1 with gap to match height of the left table exactly
          h(
            'div',
            { className: 'flex-1 flex flex-col justify-between gap-3.5' },
            editorPicks.map((pick, idx) =>
              h(
                'a',
                {
                  key: idx,
                  href: `/review/${pick.slug}`,
                  className: 'flex-1 flex items-center p-4 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group'
                },
                h(
                  'div',
                  { className: 'flex items-center gap-4 w-full' },
                  // Image
                  h('img', {
                    src: pick.image,
                    alt: pick.title,
                    className: 'w-20 h-20 sm:w-22 sm:h-22 rounded-md object-cover border border-slate-100 flex-shrink-0 bg-slate-50'
                  }),
                  // Content
                  h(
                    'div',
                    { className: 'flex-1 min-w-0 flex flex-col justify-center' },
                    // Badge & Score row
                    h(
                      'div',
                      { className: 'flex items-center justify-between gap-2 mb-1.5' },
                      h('span', { className: `text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${pick.badgeClass}` }, pick.badge),
                      h('span', { className: 'text-sm font-extrabold text-blue-600' }, pick.score)
                    ),
                    // Title
                    h('h3', { className: 'font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors truncate' }, pick.title),
                    h('p', { className: 'text-[11px] text-slate-400 -mt-0.5 mb-1' }, pick.category),
                    // Description
                    h('p', { className: 'text-xs text-slate-600 line-clamp-2 leading-relaxed text-justify' }, pick.desc)
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
