import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import SectionDivider from '../components/SectionDivider';
import ProductSection from '../components/ProductSection';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustAndStats from '../components/TrustAndStats';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const h = React.createElement;

export const metadata = {
  title: 'Top Choice — Landing sản phẩm tuyển chọn',
  description: 'Một trang duy nhất để khám phá sản phẩm vật lý và sản phẩm số đáng mua nhất, kèm trang đánh giá chi tiết cho từng sản phẩm.',
};

// Cấu trúc landing chuẩn, chỉ giữ những gì liên quan tới sản phẩm:
// Hero -> Tổng quan -> Danh mục -> Sản phẩm -> Nổi bật -> Quy trình -> Đánh giá -> FAQ -> CTA
export default function HomePage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900' },
    h(Header, null),
    h(
      'main',
      { className: 'flex-1 flex flex-col bg-[#edf4fb]' },
      h(HeroSection, null),
      h(IntroSection, null),
      h(SectionDivider, null),
      h(ProductSection, {
        id: 'san-pham-vat-ly',
        eyebrow: 'Sản phẩm vật lý',
        title: 'Sản phẩm vật lý tuyển chọn',
        desc: 'Đồ gia dụng, thiết bị điện tử, thời trang và chăm sóc sức khỏe. Bấm vào từng sản phẩm để mở trang đánh giá chi tiết.',
        type: 'vat-ly',
        searchPlaceholder: 'Nhập từ khóa: nồi chiên, tai nghe, laptop...',
      }),
      h(SectionDivider, null),
      h(ProductSection, {
        id: 'san-pham-so',
        eyebrow: 'Sản phẩm số',
        title: 'Sản phẩm số tuyển chọn',
        desc: 'Trợ lý AI, phần mềm, VPN, hosting và công cụ số. Bấm vào từng sản phẩm để mở trang đánh giá chi tiết.',
        type: 'so',
        searchPlaceholder: 'Nhập từ khóa: AI, VPN, hosting...',
      }),
      h(SectionDivider, null),
      h(FeaturedProducts, null),
      h(SectionDivider, null),
      h(TrustAndStats, null),
      h(SectionDivider, null),
      h(Testimonials, null),
      h(SectionDivider, null),
      h(FaqSection, null),
      h(SectionDivider, null),
      h(CtaSection, null)
    ),
    h(Footer, null)
  );
}
