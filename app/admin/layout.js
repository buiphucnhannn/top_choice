'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from '../../components/AdminSidebar';
import { isAdmin } from '../../lib/productStore';

const h = React.createElement;

// Layout dùng chung cho toàn bộ /admin: sidebar + guard đăng nhập chỉ chạy 1 lần,
// chuyển tab không remount nên hết giật màn hình.
export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const isLogin = pathname === '/admin/login';
  const active = pathname.startsWith('/admin/products')
    ? 'products'
    : pathname.startsWith('/admin/categories')
      ? 'categories'
      : 'dashboard';

  useEffect(() => {
    if (isLogin) {
      setChecked(true);
      return;
    }
    if (!isAdmin()) router.replace('/admin/login');
    else setChecked(true);
  }, [isLogin, router]);

  if (isLogin) return children;

  // Chỉ hiện 1 lần lúc vào admin lần đầu; chuyển tab sau đó render ngay
  if (!checked) {
    return h('div', { className: 'min-h-screen flex items-center justify-center bg-[#edf4fb] text-sm text-slate-500' }, 'Đang tải trang quản trị...');
  }

  return h(
    'div',
    { className: 'min-h-screen bg-[#edf4fb] flex flex-col lg:flex-row' },
    h(AdminSidebar, { active }),
    h('div', { className: 'flex-1 min-w-0' }, children)
  );
}
