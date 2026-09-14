import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { guides, authors, products, rankings } from '../../../data/mockData';
import ExpertConsultationCard from '../../../components/ExpertConsultationCard';

const h = React.createElement;

export function generateMetadata({ params }) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) return { title: 'Không tìm thấy bài hướng dẫn' };
  return { title: guide.title, description: guide.excerpt };
}

export default function GuideDetailPage({ params }) {
  const { slug } = params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();
  const author = authors.find((a) => a.id === guide.authorId) || authors[0];
  const suggestedProds = products.filter((p) => guide.suggestedProducts?.includes(p.id));
  const relatedRankings = rankings.filter((r) => r.group === guide.type).slice(0, 2);
  const relatedGuides = guides.filter((g) => g.slug !== slug && g.type === guide.type).slice(0, 3);

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
          { name: 'Hướng dẫn', href: '/huong-dan' },
          { name: guide.title }
        ]
      }),

      // 2-Column Responsive Layout
      h(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },

        // Main Column (8 cols)
        h(
          'div',
          { className: 'lg:col-span-8 space-y-8' },
          // Header
          h(
            'header',
            { className: 'space-y-4' },
            h('h1', { className: 'text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]' }, guide.title),
            h('p', { className: 'text-base sm:text-lg text-slate-600 leading-relaxed text-justify' }, guide.excerpt),
            // Author info
            h(
              'div',
              { className: 'flex items-center gap-3 pt-3 border-t border-slate-200/80 text-xs text-slate-500' },
              h('img', { src: author.avatar, alt: author.name, className: 'w-10 h-10 rounded-full object-cover border border-slate-200' }),
              h(
                'div',
                null,
                h('div', { className: 'font-semibold text-slate-900' }, author.name),
                h('div', null, `${author.role} • Cập nhật: ${guide.updatedAt}`)
              )
            )
          ),

          // In-article Table of Contents Box
          h(
            'nav',
            { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
            h('h3', { className: 'text-sm font-bold text-slate-900 uppercase tracking-wider' },
              'Mục lục nội dung'
            ),
            h(
              'ul',
              { className: 'space-y-2 text-xs sm:text-sm text-blue-600 font-medium' },
              guide.sections.map((sec, idx) =>
                h(
                  'li',
                  { key: idx },
                  h(
                    'a',
                    {
                      href: `#sec-${idx}`,
                      className: 'hover:text-blue-700 hover:underline transition-colors block py-0.5'
                    },
                    sec.title
                  )
                )
              )
            )
          ),

          // Contiguous Article Content Box
          h(
            'article',
            { className: 'bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-8' },
            guide.sections.map((sec, idx) =>
              h(
                'section',
                {
                  key: idx,
                  id: `sec-${idx}`,
                  className: 'space-y-3 scroll-mt-24 sm:scroll-mt-28'
                },
                h('h2', { className: 'text-xl sm:text-2xl font-bold text-slate-900 tracking-tight' },
                  sec.title
                ),
                h('p', { className: 'text-sm sm:text-base text-slate-700 leading-relaxed text-justify font-normal' }, sec.content)
              )
            )
          ),

          // Suggested Products for this Guide
          suggestedProds.length > 0 &&
            h(
              'section',
              { className: 'pt-6 border-t border-slate-200 space-y-4' },
              h('h3', { className: 'text-xl font-bold text-slate-900' }, 'Sản phẩm tiêu biểu được khuyến nghị'),
              h(
                'div',
                { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
                suggestedProds.map((prod, idx) =>
                  h(
                    'a',
                    {
                      key: idx,
                      href: `/review/${prod.slug}`,
                      className: 'group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer block'
                    },
                    h('img', { src: prod.image, alt: prod.name, className: 'w-16 h-16 rounded object-cover border border-slate-200 bg-white group-hover:scale-105 transition-transform flex-shrink-0' }),
                    h(
                      'div',
                      { className: 'flex-1 min-w-0' },
                      h('h4', { className: 'font-bold text-sm text-slate-900 truncate group-hover:text-blue-600 transition-colors' }, prod.name),
                      h('div', { className: 'text-xs text-blue-600 font-extrabold mt-0.5' }, `${prod.overallScore}/10 - ${prod.priceRef}`),
                      h('span', { className: 'text-xs text-slate-500 group-hover:text-blue-600 font-semibold inline-flex items-center gap-1 mt-1 transition-colors' }, 'Đọc review chi tiết →')
                    )
                  )
                )
              )
            )
        ),

        // Right Sticky Sidebar (4 cols)
        h(
          'aside',
          { className: 'lg:col-span-4 space-y-6 lg:sticky lg:top-24' },

          // 1. Related Ranking Card (with clickable title)
          relatedRankings.length > 0 &&
            h(
              'div',
              { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
              h(
                'div',
                { className: 'pb-2.5 border-b border-slate-100' },
                h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' },
                  'Bảng xếp hạng liên quan'
                )
              ),
              h(
                'h4',
                { className: 'font-bold text-base text-slate-900 leading-snug' },
                h('a', { href: `/top/${relatedRankings[0].slug}`, className: 'hover:text-blue-600 transition-colors' }, relatedRankings[0].title)
              ),
              h('p', { className: 'text-xs text-slate-600 line-clamp-2 text-justify leading-relaxed' }, relatedRankings[0].intro),
              h(
                'a',
                {
                  href: '/top',
                  className: 'inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline pt-1'
                },
                'Xem các bảng xếp hạng khác →'
              )
            ),

          // 2. Other Guides in the Same Category (clickable title)
          relatedGuides.length > 0 &&
            h(
              'div',
              { className: 'p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3' },
              h(
                'div',
                { className: 'pb-2.5 border-b border-slate-100' },
                h('h4', { className: 'text-xs font-bold text-slate-900 uppercase tracking-wider' },
                  'Cẩm nang cùng chủ đề'
                )
              ),
              h(
                'div',
                { className: 'space-y-3 divide-y divide-slate-100' },
                relatedGuides.map((g, idx) =>
                  h(
                    'a',
                    {
                      key: idx,
                      href: `/huong-dan/${g.slug}`,
                      className: 'block pt-2.5 first:pt-0 group'
                    },
                    h('div', { className: 'text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug' }, g.title),
                    h('div', { className: 'text-[11px] text-slate-400 mt-1' }, `Cập nhật: ${g.updatedAt}`)
                  )
                )
              )
            ),

          // 3. Expert Consultation & Contact Card with Interactive Modal Demo
          h(ExpertConsultationCard, { author })
        )
      )
    ),
    h(Footer, null)
  );
}
