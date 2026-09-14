'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { products, authors, categories } from '../../../data/mockData';

const h = React.createElement;

export default function ProductReviewPage({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug) || products[0];
  const category = categories.find((c) => c.slug === product.categorySlug) || categories[0];
  const subCategory = category.subcategories?.find((s) => s.slug === product.subCategorySlug);
  const groupHref = product.type === 'vat-ly' ? '/san-pham-vat-ly' : '/san-pham-so';
  const groupLabel = product.type === 'vat-ly' ? 'Sản phẩm vật lý' : 'Sản phẩm số';
  const author = authors[0];
  const alternatives = products.filter((item) => item.type === product.type && item.id !== product.id).slice(0, 3);
  const suitableFor = product.type === 'vat-ly'
    ? 'người cần một lựa chọn đáng tin cậy, dễ dùng và muốn tối ưu giá trị theo nhu cầu sử dụng thực tế.'
    : 'cá nhân hoặc nhóm nhỏ cần công cụ linh hoạt, dễ bắt đầu và có lộ trình nâng cấp rõ ràng.';

  const [helpfulVotes, setHelpfulVotes] = useState(128);
  const [voted, setVoted] = useState(false);

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-8 pt-5 pb-16 w-full space-y-5' },
      // Breadcrumb
      h(Breadcrumb, {
        items: [
          { name: groupLabel, href: groupHref },
          { name: category.name, href: `${groupHref}/${category.slug}` },
          ...(subCategory ? [{ name: subCategory.name, href: `/${category.slug}/${subCategory.slug}` }] : []),
          { name: `Đánh giá ${product.name}` }
        ]
      }),

      // Product Hero Section (Distance to breadcrumb matches header-to-breadcrumb)
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
        // Left Column: Product Image
        h(
          'div',
          { className: 'lg:col-span-5' },
          h('img', {
            src: product.image,
            alt: product.name,
            className: 'w-full h-80 object-cover rounded-md border border-slate-200 shadow-sm bg-white'
          })
        ),
        // Right Column: Details & Overall Score
        h(
          'div',
          { className: 'lg:col-span-7 space-y-4' },
          h(
            'div',
            { className: 'flex items-center gap-2' },
            h('span', { className: 'px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200' }, product.brand),
            h('span', { className: 'text-xs text-slate-400 font-medium' }, `Mã SP: ${product.id}`)
          ),
          h('h1', { className: 'text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug' }, `Đánh Giá Chi Tiết ${product.name}`),
          h('p', { className: 'text-slate-600 text-sm leading-relaxed text-justify' }, product.summary),

          // Price & Verdict Box
          h(
            'div',
            { className: 'p-4 bg-slate-50 border border-slate-200/80 rounded-md flex flex-wrap items-center justify-between gap-4' },
            h(
              'div',
              null,
              h('div', { className: 'text-xs text-slate-500 font-medium' }, 'Mức giá tham khảo'),
              h('div', { className: 'text-xl font-extrabold text-blue-600' }, product.priceRef)
            ),
            h(
              'div',
              { className: 'text-right' },
              h('div', { className: 'text-xs text-slate-500 font-medium' }, 'Điểm chuyên gia'),
              h('div', { className: 'text-2xl font-black text-blue-600' }, `${product.overallScore}/10`)
            )
          ),

          // Buy button
          h(
            'div',
            { className: 'pt-2 flex items-center gap-4' },
            h(
              'a',
              {
                href: product.officialUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded shadow-sm transition-colors'
              },
              'Xem Nơi Bán Tốt Nhất →'
            )
          )
        )
      ),

      // Remaining Sections Wrapper
      h(
        'div',
        { className: 'space-y-10 pt-5' },

        // Quick conclusion
        h(
          'section',
          { className: 'grid grid-cols-1 lg:grid-cols-3 gap-5' },
          h(
            'div',
            { className: 'lg:col-span-2 bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-3' },
            h('span', { className: 'inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded' }, 'Kết luận nhanh'),
            h('h2', { className: 'text-xl font-bold text-slate-900' }, `${product.name} có đáng chọn không?`),
            h('p', { className: 'text-sm leading-relaxed text-slate-700 text-justify' }, `${product.name} đạt ${product.overallScore}/10 nhờ ${product.pros[0]?.toLowerCase() || 'những điểm mạnh nổi bật'}. Sản phẩm phù hợp với ${suitableFor}`)
          ),
          h(
            'div',
            { className: 'bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-3' },
            h('h2', { className: 'text-sm font-bold text-slate-900' }, 'Cần cân nhắc nếu'),
            h('ul', { className: 'space-y-2 text-xs text-slate-600' }, product.cons.slice(0, 3).map((item, index) => h('li', { key: index, className: 'flex gap-2' }, h('span', { className: 'text-rose-500 font-bold' }, '•'), item)))
          )
        ),

        // Score Breakdown & Pros/Cons Grid
        h(
          'section',
          { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8' },
          // Score Breakdown (6 cols)
          h(
            'div',
            { className: 'lg:col-span-6 bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-4' },
            h('h2', { className: 'text-xl font-bold text-slate-900' }, 'Đánh giá theo tiêu chí chi tiết'),
            h(
              'div',
              { className: 'space-y-3.5' },
              product.scores.map((s, idx) =>
                h(
                  'div',
                  { key: idx, className: 'space-y-1.5' },
                  h(
                    'div',
                    { className: 'flex justify-between text-xs font-semibold' },
                    h('span', { className: 'text-slate-700' }, s.criterion),
                    h('span', { className: 'text-blue-600 font-bold' }, `${s.value}/10`)
                  ),
                  h(
                    'div',
                    { className: 'w-full h-2.5 bg-slate-100 rounded-sm overflow-hidden' },
                    h('div', {
                      className: 'h-full bg-blue-600 rounded-sm transition-all duration-500',
                      style: { width: `${(s.value / 10) * 100}%` }
                    })
                  )
                )
              )
            )
          ),

        // Pros & Cons (6 cols)
        h(
          'div',
          { className: 'lg:col-span-6 bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-4 flex flex-col justify-between' },
          h('h2', { className: 'text-xl font-bold text-slate-900' }, 'Ưu điểm & Nhược điểm'),
          h(
            'div',
            { className: 'space-y-3 flex-1' },
            // Pros
            h(
              'div',
              { className: 'bg-emerald-50/70 border border-emerald-200/80 rounded p-4 space-y-2' },
              h('div', { className: 'text-xs font-bold text-emerald-800 uppercase tracking-wider' }, '✓ Điểm cộng nổi bật'),
              h(
                'ul',
                { className: 'space-y-1.5 text-xs sm:text-sm text-slate-800' },
                product.pros.map((p, pIdx) => h('li', { key: pIdx, className: 'flex items-start gap-1.5' }, h('span', { className: 'text-emerald-600 font-bold' }, '•'), p))
              )
            ),
            // Cons
            h(
              'div',
              { className: 'bg-rose-50/70 border border-rose-200/80 rounded p-4 space-y-2' },
              h('div', { className: 'text-xs font-bold text-rose-800 uppercase tracking-wider' }, '✕ Điểm cần cân nhắc'),
              h(
                'ul',
                { className: 'space-y-1.5 text-xs sm:text-sm text-slate-800' },
                product.cons.map((c, cIdx) => h('li', { key: cIdx, className: 'flex items-start gap-1.5' }, h('span', { className: 'text-rose-600 font-bold' }, '•'), c))
              )
            )
          )
        )
      ),

      // Technical Specifications Table
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-md p-6 sm:p-8 shadow-sm space-y-4' },
        h('h2', { className: 'text-xl font-bold text-slate-900' }, '⚙️ Thông số kỹ thuật & Chi tiết gói'),
        h(
          'div',
          { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
          Object.entries(product.specs).map(([key, value], idx) =>
            h(
              'div',
              { key: idx, className: 'flex justify-between p-3 bg-slate-50 rounded border border-slate-200 text-sm' },
              h('span', { className: 'text-slate-500 font-medium' }, key),
              h('span', { className: 'font-semibold text-slate-900 text-right' }, value)
            )
          )
        )
      ),

      // Editorial analysis, price context and alternatives
      h(
        'section',
        { className: 'grid grid-cols-1 lg:grid-cols-2 gap-8' },
        h(
          'div',
          { className: 'bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-3' },
          h('h2', { className: 'text-xl font-bold text-slate-900' }, '🔎 Trải nghiệm & đánh giá chuyên sâu'),
          h('p', { className: 'text-sm text-slate-700 leading-relaxed text-justify' }, `${product.summary} Trong quá trình đánh giá, ban biên tập đối chiếu trải nghiệm sử dụng, tính năng cốt lõi, mức độ hoàn thiện và giá trị nhận lại trong tầm giá.`),
          h('p', { className: 'text-sm text-slate-700 leading-relaxed text-justify' }, `Điểm mạnh đáng chú ý là ${product.pros.slice(0, 2).join(' và ').toLowerCase()}. Trước khi chọn mua, hãy cân nhắc ${product.cons[0]?.toLowerCase() || 'nhu cầu sử dụng thực tế'} để chọn đúng phiên bản hoặc gói phù hợp.`)
        ),
        h(
          'div',
          { className: 'bg-white border border-slate-200 rounded-md p-6 shadow-sm space-y-3' },
          h('h2', { className: 'text-xl font-bold text-slate-900' }, '💳 Giá & thông tin kiểm tra'),
          h('div', { className: 'rounded bg-blue-50 border border-blue-100 p-4' }, h('div', { className: 'text-xs text-blue-700 font-semibold' }, 'Giá tham khảo'), h('div', { className: 'mt-1 text-2xl text-slate-900 font-black' }, product.priceRef)),
          h('p', { className: 'text-xs text-slate-600 leading-relaxed' }, `Giá và cấu hình có thể thay đổi theo nhà bán hoặc gói dịch vụ. Dữ liệu được kiểm tra lần cuối: ${product.updatedAt}.`),
          h('a', { href: product.officialUrl, target: '_blank', rel: 'noopener noreferrer', className: 'inline-flex text-xs font-bold text-blue-600 hover:underline' }, 'Xem nguồn chính thức ↗')
        )
      ),

      alternatives.length > 0 && h(
        'section',
        { className: 'space-y-4' },
        h('h2', { className: 'text-xl font-bold text-slate-900' }, 'Sản phẩm thay thế đáng cân nhắc'),
        h('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' }, alternatives.map((item) => h(
          'a',
          { key: item.id, href: `/review/${item.slug}`, className: 'bg-white border border-slate-200 rounded-md p-4 hover:border-blue-400 hover:shadow-sm transition-all space-y-2' },
          h('div', { className: 'flex items-center justify-between gap-3' }, h('h3', { className: 'font-bold text-sm text-slate-900' }, item.name), h('span', { className: 'font-black text-blue-600 text-sm' }, `${item.overallScore}/10`)),
          h('p', { className: 'text-xs text-slate-600 line-clamp-2' }, item.summary),
          h('span', { className: 'text-xs font-semibold text-blue-600' }, 'Xem review →')
        )))
      ),

      h(
        'section',
        { className: 'bg-slate-50 border border-slate-200 rounded-md p-5 text-xs text-slate-600 leading-relaxed' },
        h('h2', { className: 'font-bold text-slate-900 text-sm mb-1' }, 'Phương pháp đánh giá'),
        'Điểm số tổng hợp từ chất lượng, tính năng, mức độ dễ dùng, giá trị và hỗ trợ. Ban biên tập tham chiếu thông tin chính thức, đối chiếu cùng lựa chọn trong danh mục và cập nhật nội dung khi dữ liệu thay đổi.'
      ),

      // Reader Interaction & Helpful Feedback (FR06)
      h(
        'section',
        { className: 'p-6 bg-white border border-slate-200 rounded-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4' },
        h(
          'div',
          { className: 'space-y-1 text-center sm:text-left' },
          h('div', { className: 'text-sm font-bold text-slate-900' }, 'Bài viết này có hữu ích với bạn không?'),
          h('div', { className: 'text-xs text-slate-500' }, '👁️ 4.250 lượt xem • ⏱️ 5 phút đọc • Đã kiểm duyệt nội dung')
        ),
        h(
          'div',
          { className: 'flex items-center gap-3' },
          h(
            'button',
            {
              disabled: voted,
              onClick: () => {
                if (!voted) {
                  setHelpfulVotes(helpfulVotes + 1);
                  setVoted(true);
                }
              },
              className: `px-4 py-2 text-xs font-bold rounded border transition-all flex items-center gap-1.5 ${
                voted
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 cursor-default'
                  : 'bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-700 border-slate-200 shadow-xs active:scale-95'
              }`
            },
            'Hữu ích',
            h('span', { className: 'ml-1 px-1.5 py-0.2 bg-slate-100 rounded font-mono' }, helpfulVotes)
          ),
          voted && h('span', { className: 'text-xs text-emerald-600 font-semibold' }, 'Cảm ơn phản hồi của bạn!')
        )
      ),

      // Author & Editorial Verification Bar
      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-md shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4' },
        h('img', { src: author.avatar, alt: author.name, className: 'w-12 h-12 rounded object-cover border border-slate-200 shadow-xs' }),
        h(
          'div',
          { className: 'space-y-1 text-center sm:text-left' },
          h(
            'div',
            { className: 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 border border-blue-200' },
            h('span', { className: 'w-1 h-1 rounded-full bg-blue-600' }),
            'Kiểm chứng độc lập'
          ),
          h('div', { className: 'font-bold text-slate-900' }, `Biên tập viên: ${author.name} • ${author.credentials}`),
          h('p', { className: 'text-xs text-slate-600 text-justify' }, author.bio)
        )
      )
      )
    ),
    h(Footer, null)
  );
}
