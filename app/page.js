import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import CategoryExplorer from '../components/CategoryExplorer';
import RankingAndEditorPicks from '../components/RankingAndEditorPicks';
import RecentArticles from '../components/RecentArticles';
import TrustAndStats from '../components/TrustAndStats';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const h = React.createElement;

export default function HomePage() {
  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-[#edf4fb] text-slate-900' },
    // 1. Header with Mega Menu
    h(Header, null),

    // Main Content
    h(
      'main',
      { className: 'flex-1 flex flex-col bg-[#edf4fb]' },
      // 2. Hero Section
      h(HeroSection, null),

      // 3. Intro Section (Giới thiệu nội dung - Requirements 3.1)
      h(IntroSection, null),

      // 4. Category Explorer
      h(CategoryExplorer, null),

      // 5. Ranking & Editor's Picks
      h(RankingAndEditorPicks, null),

      // 6. Recent Articles (Review / So sánh / Hướng dẫn)
      h(RecentArticles, null),

      // 7. Trust, Numbers & Methodology
      h(TrustAndStats, null),

      // 8. Frequently Asked Questions (FAQ)
      h(FaqSection, null)
    ),

    // 9. Footer
    h(Footer, null)
  );
}
