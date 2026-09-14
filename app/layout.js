import React from 'react';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://topchoice.vn'),
  title: {
    default: 'TOP CHOICE - Đánh giá khách quan. Lựa chọn thông minh.',
    template: '%s | TOP CHOICE'
  },
  description: 'Chúng tôi mang đến các bài đánh giá chuyên sâu, bảng xếp hạng đáng tin cậy và hướng dẫn hữu ích để giúp bạn lựa chọn sản phẩm phù hợp nhất.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: { index: true, follow: true },
};

const h = React.createElement;

export default function RootLayout(props) {
  return h(
    'html',
    { lang: 'vi' },
    h(
      'body',
      { className: 'bg-[#edf4fb] text-slate-900 min-h-screen antialiased flex flex-col selection:bg-blue-600 selection:text-white' },
      props.children
    )
  );
}
