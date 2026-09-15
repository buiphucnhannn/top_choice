'use client';

import React, { useState, useEffect } from 'react';

const h = React.createElement;

// Helper gọi toast từ bất kỳ file nào (client-side)
export function showToast(message, type = 'success', title = '') {
  if (typeof window !== 'undefined') {
    const actualType = type === true ? 'error' : type === false ? 'success' : type || 'success';
    const defaultTitle = actualType === 'error' ? 'Có lỗi xảy ra' : actualType === 'info' ? 'Thông tin' : 'Thành công';

    const event = new CustomEvent('dudi_toast', {
      detail: {
        id: Date.now() + Math.random().toString(36).substring(2, 9),
        message,
        type: actualType, // 'success' | 'error' | 'info'
        title: title || defaultTitle,
      }
    });
    window.dispatchEvent(event);
  }
}

// Gắn sẵn vào window để dễ dàng gọi ở mọi nơi nếu cần
if (typeof window !== 'undefined') {
  window.showToast = showToast;
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (e) => {
      const newToast = e.detail;
      if (!newToast) return;

      setToasts((prev) => [...prev, newToast]);

      // Tự động đóng sau 3.5 giây
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3500);
    };

    window.addEventListener('dudi_toast', handleToast);
    return () => window.removeEventListener('dudi_toast', handleToast);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return h(
    'div',
    {
      className: 'fixed top-4 right-4 left-4 sm:left-auto sm:top-5 sm:right-5 z-[9999] flex flex-col gap-3 sm:max-w-sm sm:w-full pointer-events-none'
    },
    toasts.map((toast) => {
      const isError = toast.type === 'error';
      const isInfo = toast.type === 'info';
      const isSuccess = !isError && !isInfo;

      // Màu sắc viền & icon theo type
      const borderClass = isError
        ? 'border-rose-200/80'
        : isInfo
          ? 'border-blue-200/80'
          : 'border-emerald-200/80';

      const iconBg = isError
        ? 'bg-rose-100 text-rose-600'
        : isInfo
          ? 'bg-blue-100 text-blue-600'
          : 'bg-emerald-100 text-emerald-600';

      // SVG Icon
      const iconSvg = isError
        ? h(
            'svg',
            { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' })
          )
        : isInfo
          ? h(
              'svg',
              { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
            )
          : h(
              'svg',
              { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2.2 },
              h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M5 13l4 4L19 7' })
            );

      return h(
        'div',
        {
          key: toast.id,
          className: `pointer-events-auto bg-white/95 backdrop-blur-md border ${borderClass} shadow-xl rounded-xl p-4 flex items-start gap-3.5 transition-all duration-300 transform translate-x-0 animate-slideInRight`
        },
        // Icon
        h(
          'div',
          { className: `w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}` },
          iconSvg
        ),
        // Nội dung
        h(
          'div',
          { className: 'flex-1 min-w-0 pt-0.5' },
          h('div', { className: 'text-xs font-bold text-slate-900 leading-tight' }, toast.title),
          h('div', { className: 'text-xs text-slate-600 mt-1 leading-relaxed' }, toast.message)
        ),
        // Nút tắt
        h(
          'button',
          {
            type: 'button',
            onClick: () => removeToast(toast.id),
            className: 'text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors flex-shrink-0',
            'aria-label': 'Đóng thông báo'
          },
          h(
            'svg',
            { className: 'w-4 h-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M6 18L18 6M6 6l12 12' })
          )
        )
      );
    })
  );
}
