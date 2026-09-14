# QUY TẮC DỰ ÁN & TUÂN THỦ YÊU CẦU (PROJECT RULES)

Tài liệu này là quy chuẩn bắt buộc cho mọi hành động phát triển mã nguồn, tạo component, xây dựng dữ liệu và cấu hình giao diện trong workspace này.

---

## 1. Nguồn Chân Lý (Single Source of Truth)
- Toàn bộ tính năng, cấu trúc trang, mô hình dữ liệu, danh sách màn hình và tiêu chí nghiệm thu PHẢI bám sát 100% tài liệu [docs/REQUIREMENTS.md](file:///d:/Career/DUDI_01/docs/REQUIREMENTS.md).
- Không tự ý thêm bớt các luồng tính năng nằm ngoài phạm vi demo đã định nghĩa (ví dụ: không làm cổng thanh toán thật, không làm affiliate tracking phức tạp).

---

## 2. Ràng Buộc Kỹ Thuật Bắt Buộc (Strict Constraints)

### 2.1 100% Pure JavaScript - KHÔNG DÙNG JSX
- **Cấm hoàn toàn cú pháp JSX**: Không dùng `<div ...>`, `<Header ...>`, không tạo file đuôi `.jsx` hay `.tsx`.
- Mọi component phải viết bằng pure JavaScript sử dụng hàm `React.createElement(...)`.
- Khuyến nghị quy ước alias ngắn gọn ở đầu mỗi file component:
  ```javascript
  import React from 'react';
  const h = React.createElement;
  ```
- Khi truyền props và children:
  ```javascript
  return h('div', { className: 'p-4 bg-slate-900' },
    h('h1', { className: 'text-lg font-bold' }, title),
    h('p', null, content)
  );
  ```

### 2.2 Framework & Router
- Sử dụng **Next.js App Router** (`app/` directory).
- Các file page: `app/page.js`, `app/san-pham-vat-ly/page.js`, `app/top/[slug]/page.js`, `app/admin/page.js`, v.v.
- Client Component khi có tương tác / state: Bắt buộc đặt `'use client';` ở dòng đầu tiên.

### 2.3 Styling (Tailwind CSS)
- Sử dụng Tailwind CSS qua thuộc tính `className` trong props của `React.createElement`.
- Thiết kế giao diện hiện đại, thẩm mỹ cao (Dark theme / Slate palette, Glassmorphism, Micro-animations, bóng đổ tinh tế).
- Responsive chuẩn xác từ Mobile (tối thiểu 360px), Tablet đến Desktop. Tuyệt đối không để xảy ra cuộn ngang trang ngoài ý muốn.

---

## 3. Quy Chuẩn Kiến Trúc & Dữ Liệu

### 3.1 Cấu trúc URL
Tuân thủ chính xác bảng định danh URL:
- Trang chủ: `/`
- Hub vật lý: `/san-pham-vat-ly`
- Hub số: `/san-pham-so`
- Danh mục: `/{nhom}/{danh-muc}`
- Bảng xếp hạng Top 10: `/top/{slug}`
- Review chi tiết: `/review/{slug}`
- So sánh: `/so-sanh/{slug}`
- Hướng dẫn: `/huong-dan/{slug}`
- Tìm kiếm: `/tim-kiem?q={tu-khoa}`
- Admin: `/admin`, `/admin/login`, `/admin/products`, `/admin/categories`, `/admin/rankings`, `/admin/content`, `/admin/comparisons`

### 3.2 Bộ Dữ Liệu Mẫu Tối Thiểu (Minimum Dataset)
Khi xây dựng mock data (`data/` hoặc `mock/`), phải đáp ứng đủ số lượng:
- **8 Danh mục**: 4 vật lý (gia dụng, điện tử, thời trang, sức khỏe...) & 4 số (công cụ AI, SaaS, hosting, VPN...).
- **12 Sản phẩm**: 6 vật lý & 6 số.
- **4 Bảng xếp hạng Top 10**: 2 vật lý & 2 số.
- **6 Review chi tiết**: Phân bổ đều giữa vật lý và số.
- **2 Trang so sánh**: 1 cặp vật lý & 1 cặp số.
- **4 Bài hướng dẫn chọn mua**: 2 vật lý & 2 số.
- **3 Hồ sơ chuyên gia**: Chuyên môn công nghệ, gia dụng, phần mềm.

### 3.3 Quy tắc Dữ liệu & UI
- Điểm số sản phẩm: Thang điểm 0 - 10, làm tròn tối đa 1 số thập phân.
- Header: Đúng 5 điểm vào (Sản phẩm vật lý, Sản phẩm số, Bảng xếp hạng, Hướng dẫn, Tìm kiếm).
- Footer thống nhất cho toàn bộ trang người dùng.
- Breadcrumb trên mọi trang nội dung con.
- Admin: Dữ liệu mô phỏng CRUD trực quan, có validation và thông báo kết quả lưu.
