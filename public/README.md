# Thư mục chứa tài nguyên tĩnh (Public Assets)

Tất cả các file đặt trong thư mục `public` này sẽ được Next.js phục vụ trực tiếp từ đường dẫn gốc (`/`).

## 📁 Cấu trúc khuyến nghị

- `/public/logos/`: Chứa logo trang web (ví dụ: `/logos/logo.svg`).
- `/public/icons/`: Chứa icon, favicon, app icon (ví dụ: `/icons/star.svg`).
- `/public/images/`: Chứa ảnh sản phẩm, banner, avatar chuyên gia (ví dụ: `/images/products/aircook.jpg`).

## 💡 Cách dùng trong mã nguồn Pure JavaScript:

```javascript
// Sử dụng thẻ img thông thường:
h('img', {
  src: '/logos/logo.svg',
  alt: 'Website Logo',
  className: 'h-8 w-auto'
});

// Hoặc sử dụng trong background style:
// className="bg-[url('/images/hero-banner.jpg')]"
```
