'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { products as seedProducts, categories as seedCategories } from '../../../data/mockData';
import { getProducts, getCategories, DATA_EVENT } from '../../../lib/productStore';

const h = React.createElement;
const EMPTY = 'Không có';
const emptyCls = 'text-sm italic text-slate-400';

export default function ProductReviewPage({ params }) {
  const { slug } = params;
  const [storeProducts, setStoreProducts] = useState(seedProducts);
  const [storeCategories, setStoreCategories] = useState(seedCategories);

  useEffect(() => {
    const refresh = () => {
      setStoreProducts(getProducts());
      setStoreCategories(getCategories());
    };
    refresh();
    window.addEventListener(DATA_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(DATA_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const found = storeProducts.find((p) => p.slug === slug) || storeProducts[0] || seedProducts[0];
  const raw = found || {};
  const rawScore = raw.overallScore;
  const hasOverallScore =
    rawScore !== '' && rawScore !== null && rawScore !== undefined && !Number.isNaN(Number(rawScore));
  const overallDisplay = hasOverallScore ? `${Math.round(Number(rawScore) * 10) / 10}/10` : EMPTY;
  const product = {
    id: raw.id || 'unknown',
    slug: raw.slug || slug,
    name: typeof raw.name === 'string' ? raw.name.trim() : '',
    brand: typeof raw.brand === 'string' ? raw.brand.trim() : '',
    type: raw.type === 'so' ? 'so' : 'vat-ly',
    categorySlug: raw.categorySlug || '',
    summary: typeof raw.summary === 'string' ? raw.summary.trim() : '',
    image: typeof raw.image === 'string' ? raw.image.trim() : '',
    overallScore: hasOverallScore ? Math.round(Number(rawScore) * 10) / 10 : null,
    overallDisplay,
    hasOverallScore,
    priceRef: typeof raw.priceRef === 'string' ? raw.priceRef.trim() : '',
    officialUrl: typeof raw.officialUrl === 'string' ? raw.officialUrl.trim() : '',
    updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt.trim() : String(raw.updatedAt || '').trim(),
    scores: Array.isArray(raw.scores)
      ? raw.scores
          .map((s) => ({
            criterion: typeof s.criterion === 'string' ? s.criterion.trim() : '',
            value: Number(s.value),
          }))
          .filter((s) => s.criterion && !Number.isNaN(s.value))
      : [],
    pros: Array.isArray(raw.pros) ? raw.pros.map((s) => String(s || '').trim()).filter(Boolean) : [],
    cons: Array.isArray(raw.cons) ? raw.cons.map((s) => String(s || '').trim()).filter(Boolean) : [],
    specs:
      raw.specs && typeof raw.specs === 'object'
        ? Object.fromEntries(
            Object.entries(raw.specs)
              .map(([k, v]) => [String(k || '').trim(), String(v ?? '').trim()])
              .filter(([k, v]) => k && v)
          )
        : {},
    verdict: typeof raw.verdict === 'string' ? raw.verdict.trim() : '',
    considerations: Array.isArray(raw.considerations)
      ? raw.considerations.map((s) => String(s || '').trim()).filter(Boolean)
      : [],
    reviewBody: typeof raw.reviewBody === 'string' ? raw.reviewBody.trim() : '',
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = product.name ? `${product.name} | TOP CHOICE` : 'Đánh giá sản phẩm | TOP CHOICE';
  }, [product.name]);

  const alternatives = storeProducts.filter((item) => item.type === product.type && item.id !== product.id).slice(0, 3);
  const reviewParagraphs = product.reviewBody
    ? product.reviewBody.split(/\n+/).map((s) => s.trim()).filter(Boolean)
    : [];
  const specEntries = Object.entries(product.specs);
  const hasOfficial = !!product.officialUrl && product.officialUrl !== '#';
  const displayName = product.name || EMPTY;

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900 font-sans overflow-x-clip' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[84px] sm:pt-[92px] pb-12 sm:pb-16 w-full space-y-5 sm:space-y-6 min-w-0' },
      h(Breadcrumb, {
        items: [
          {
            name: product.type === 'so' ? 'Sản phẩm số' : 'Sản phẩm vật lý',
            href: product.type === 'so' ? '/#san-pham-so' : '/#san-pham-vat-ly',
          },
          { name: displayName }
        ]
      }),

      h(
        'section',
        { className: 'bg-white border border-slate-200 rounded-xl p-5 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start' },
        h(
          'div',
          { className: 'lg:col-span-5 min-w-0' },
          product.image
            ? h('img', {
                src: product.image,
                alt: displayName,
                className: 'w-full aspect-[4/3] sm:h-80 sm:aspect-auto object-cover rounded-lg border border-slate-200 shadow-sm bg-slate-50'
              })
            : h(
                'div',
                { className: 'w-full aspect-[4/3] sm:h-80 rounded-lg border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center' },
                h('span', { className: 'text-sm italic text-slate-400' }, EMPTY)
              )
        ),
        h(
          'div',
          { className: 'lg:col-span-7 space-y-4 min-w-0' },
          h(
            'div',
            { className: 'flex items-center gap-2 flex-wrap' },
            product.brand
              ? h('span', { className: 'px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 break-words max-w-full' }, product.brand)
              : h('span', { className: 'px-2.5 py-1 rounded-md text-xs italic bg-slate-50 text-slate-400 border border-dashed border-slate-300' }, EMPTY)
          ),
          h('h1', { className: 'text-[22px] sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight break-words' }, product.name ? `Đánh Giá Chi Tiết ${product.name}` : 'Đánh Giá Chi Tiết'),
          product.summary
            ? h('p', { className: 'text-slate-600 text-sm leading-relaxed text-left sm:text-justify break-words' }, product.summary)
            : h('p', { className: emptyCls }, EMPTY),

          h(
            'div',
            { className: 'p-4 bg-slate-50 border border-slate-200/80 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3' },
            h(
              'div',
              { className: 'min-w-0' },
              h('div', { className: 'text-xs text-slate-500 font-medium' }, 'Mức giá tham khảo'),
              product.priceRef
                ? h('div', { className: 'text-lg sm:text-xl font-extrabold text-blue-600 break-words' }, product.priceRef)
                : h('div', { className: 'text-sm italic text-slate-400 mt-0.5' }, EMPTY)
            ),
            h(
              'div',
              { className: 'sm:text-right' },
              h('div', { className: 'text-xs text-slate-500 font-medium' }, 'Điểm đánh giá'),
              product.hasOverallScore
                ? h('div', { className: 'text-2xl font-black text-blue-600' }, product.overallDisplay)
                : h('div', { className: 'text-sm italic text-slate-400 mt-0.5' }, EMPTY)
            )
          ),

          h(
            'div',
            { className: 'pt-1 flex flex-col sm:flex-row sm:items-center gap-3' },
            hasOfficial
              ? h(
                  'a',
                  {
                    href: product.officialUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'inline-flex justify-center items-center min-h-[44px] px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors w-full sm:w-auto'
                  },
                  'Xem Nơi Bán Tốt Nhất →'
                )
              : h('span', { className: emptyCls }, `${EMPTY} link chính thức`)
          )
        )
      ),

      h(
        'div',
        { className: 'space-y-5 sm:space-y-8 lg:space-y-10 pt-1 sm:pt-2' },

        h(
          'section',
          { className: 'grid grid-cols-1 lg:grid-cols-3 gap-5' },
          h(
            'div',
            { className: 'lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-3 min-w-0' },
            h('span', { className: 'inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md' }, 'Kết luận nhanh'),
            h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900 break-words' }, product.name ? `${product.name} có đáng chọn không?` : 'Sản phẩm có đáng chọn không?'),
            product.verdict
              ? h('p', { className: 'text-sm leading-relaxed text-slate-700 text-left sm:text-justify break-words' }, product.verdict)
              : h('p', { className: emptyCls }, EMPTY)
          ),
          h(
            'div',
            { className: 'bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-3 min-w-0' },
            h('h2', { className: 'text-sm font-bold text-slate-900' }, 'Cần cân nhắc nếu'),
            product.considerations.length > 0
              ? h('ul', { className: 'space-y-2 text-xs sm:text-sm text-slate-600' }, product.considerations.map((item, index) => h('li', { key: index, className: 'flex gap-2 break-words' }, h('span', { className: 'text-rose-500 font-bold flex-shrink-0' }, '•'), h('span', { className: 'min-w-0' }, item))))
              : h('p', { className: emptyCls }, EMPTY)
          )
        ),

        h(
          'section',
          { className: 'grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6' },
          h(
            'div',
            { className: 'lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4 min-w-0' },
            h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900' }, 'Đánh giá theo tiêu chí chi tiết'),
            product.scores.length > 0
              ? h(
                  'div',
                  { className: 'space-y-3.5' },
                  product.scores.map((s, idx) =>
                    h(
                      'div',
                      { key: idx, className: 'space-y-1.5' },
                      h(
                        'div',
                        { className: 'flex justify-between gap-2 text-xs font-semibold' },
                        h('span', { className: 'text-slate-700 break-words min-w-0' }, s.criterion),
                        h('span', { className: 'text-blue-600 font-bold flex-shrink-0' }, `${s.value}/10`)
                      ),
                      h(
                        'div',
                        { className: 'w-full h-2.5 bg-slate-100 rounded-full overflow-hidden' },
                        h('div', {
                          className: 'h-full bg-blue-600 rounded-full transition-all duration-500',
                          style: { width: `${Math.min(100, Math.max(0, (s.value / 10) * 100))}%` }
                        })
                      )
                    )
                  )
                )
              : h('p', { className: emptyCls }, EMPTY)
          ),

          h(
            'div',
            { className: 'lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4 flex flex-col min-w-0' },
            h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900' }, 'Ưu điểm & Nhược điểm'),
            h(
              'div',
              { className: 'space-y-3 flex-1' },
              h(
                'div',
                { className: 'bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-4 space-y-2' },
                h('div', { className: 'text-xs font-bold text-emerald-800 uppercase tracking-wider' }, '✓ Điểm cộng nổi bật'),
                product.pros.length > 0
                  ? h(
                      'ul',
                      { className: 'space-y-1.5 text-xs sm:text-sm text-slate-800' },
                      product.pros.map((p, pIdx) => h('li', { key: pIdx, className: 'flex items-start gap-1.5 break-words' }, h('span', { className: 'text-emerald-600 font-bold flex-shrink-0' }, '•'), h('span', { className: 'min-w-0' }, p)))
                    )
                  : h('p', { className: emptyCls }, EMPTY)
              ),
              h(
                'div',
                { className: 'bg-rose-50/70 border border-rose-200/80 rounded-lg p-4 space-y-2' },
                h('div', { className: 'text-xs font-bold text-rose-800 uppercase tracking-wider' }, '✕ Điểm cần cân nhắc'),
                product.cons.length > 0
                  ? h(
                      'ul',
                      { className: 'space-y-1.5 text-xs sm:text-sm text-slate-800' },
                      product.cons.map((c, cIdx) => h('li', { key: cIdx, className: 'flex items-start gap-1.5 break-words' }, h('span', { className: 'text-rose-600 font-bold flex-shrink-0' }, '•'), h('span', { className: 'min-w-0' }, c)))
                    )
                  : h('p', { className: emptyCls }, EMPTY)
              )
            )
          )
        ),

        h(
          'section',
          { className: 'bg-white border border-slate-200 rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm space-y-4 min-w-0' },
          h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900 break-words' }, '⚙️ Thông số kỹ thuật & Chi tiết gói'),
          specEntries.length > 0
            ? h(
                'div',
                { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4' },
                specEntries.map(([key, value], idx) =>
                  h(
                    'div',
                    { key: idx, className: 'flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm min-w-0' },
                    h('span', { className: 'text-slate-500 font-medium flex-shrink-0' }, key),
                    h('span', { className: 'font-semibold text-slate-900 text-left sm:text-right break-words min-w-0' }, value)
                  )
                )
              )
            : h('p', { className: emptyCls }, EMPTY)
        ),

        h(
          'section',
          { className: 'grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6' },
          h(
            'div',
            { className: 'bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-3 min-w-0' },
            h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900 break-words' }, '🔎 Trải nghiệm & đánh giá chuyên sâu'),
            reviewParagraphs.length > 0
              ? reviewParagraphs.map((para, i) =>
                  h('p', { key: i, className: 'text-sm text-slate-700 leading-relaxed text-left sm:text-justify break-words' }, para)
                )
              : h('p', { className: emptyCls }, EMPTY)
          ),
          h(
            'div',
            { className: 'bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-3 min-w-0' },
            h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900 break-words' }, '💳 Giá & thông tin kiểm tra'),
            h('div', { className: 'rounded-lg bg-blue-50 border border-blue-100 p-4' }, h('div', { className: 'text-xs text-blue-700 font-semibold' }, 'Giá tham khảo'), product.priceRef ? h('div', { className: 'mt-1 text-xl sm:text-2xl text-slate-900 font-black break-words' }, product.priceRef) : h('div', { className: 'mt-1 text-sm italic text-slate-400' }, EMPTY)),
            product.updatedAt
              ? h('p', { className: 'text-xs text-slate-600 leading-relaxed break-words' }, `Giá và cấu hình có thể thay đổi theo nhà bán hoặc gói dịch vụ. Dữ liệu được kiểm tra lần cuối: ${product.updatedAt}.`)
              : h('p', { className: emptyCls }, `${EMPTY} thông tin kiểm tra`),
            hasOfficial
              ? h('a', { href: product.officialUrl, target: '_blank', rel: 'noopener noreferrer', className: 'inline-flex min-h-[44px] items-center text-xs sm:text-sm font-bold text-blue-600 hover:underline break-words' }, 'Xem nguồn chính thức ↗')
              : h('p', { className: emptyCls }, `${EMPTY} nguồn chính thức`)
          )
        ),

        h(
          'section',
          { className: 'space-y-4' },
          h('h2', { className: 'text-lg sm:text-xl font-bold text-slate-900' }, 'Sản phẩm thay thế đáng cân nhắc'),
          alternatives.length > 0
            ? h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' }, alternatives.map((item) => h(
                'a',
                { key: item.id, href: `/review/${item.slug}`, className: 'bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all space-y-2 min-w-0 flex flex-col' },
                h('div', { className: 'flex items-center justify-between gap-3' }, h('h3', { className: 'font-bold text-sm text-slate-900 truncate min-w-0 flex-1' }, item.name || EMPTY), h('span', { className: 'font-black text-blue-600 text-sm flex-shrink-0' }, item.overallScore !== '' && item.overallScore !== null && item.overallScore !== undefined ? `${item.overallScore}/10` : EMPTY)),
                h('p', { className: 'text-xs text-slate-600 line-clamp-2 leading-relaxed break-words flex-1' }, item.summary || EMPTY),
                h('span', { className: 'text-xs font-semibold text-blue-600' }, 'Xem review →')
              )))
            : h('div', { className: 'bg-white border border-dashed border-slate-300 rounded-xl p-6 text-center' }, h('p', { className: emptyCls }, EMPTY))
        )
      )
    ),
    h(Footer, null)
  );
}
