# CẨM NANG HƯỚNG DẪN & DỮ LIỆU DEMO (DEMO CHEAT SHEET)

Tài liệu này tổng hợp toàn bộ thông tin đăng nhập, dữ liệu mẫu và các kịch bản demo để bạn tự tin trình diễn hoặc kiểm thử toàn bộ hệ thống website.

---

## 🔐 1. Tài Khoản Quản Trị Admin Demo

- **URL Đăng Nhập:** [`/admin/login`](http://localhost:3000/admin/login)
- **Tài khoản:** `admin@topchoice.vn`
- **Mật khẩu:** `demo2026`
- *(Giao diện có sẵn nút **"Điền nhanh"** để đăng nhập ngay mà không cần gõ phím).*

---

## 🗺️ 2. Kịch Bản & Hành Trình Trình Diễn (Demo Journey)

### Kịch Bản 1: Khám Phá Trang Chủ & Điều Hướng
1. Mở trang chủ [`/`](http://localhost:3000/):
   - Hero Section nền ảnh panorama liền mạch với ô tìm kiếm lớn.
   - Bấm vào **"Sản phẩm vật lý ⌵"** hoặc **"Sản phẩm số ⌵"** trên Header để xem Mega Menu.
   - Thử ô tìm kiếm trên Header hoặc Hero: gõ `nồi chiên`, `tai nghe`, `AI` và bấm Tìm kiếm để chuyển sang trang `/tim-kiem`.
   - Xem khối **Khám phá theo danh mục**: thử bấm vào các icon danh mục con.
   - Xem khối **Bảng xếp hạng nổi bật** (#1 AirCook Pro 6L) đối chiếu cùng **Lựa chọn biên tập viên** (LiteBook 14, SoundMax Air).
   - Click thử câu hỏi tại khối **FAQ** để xem hiệu ứng mở/đóng accordion mượt mà.

### Kịch Bản 2: Đọc Bảng Xếp Hạng Top 10 Chuyên Sâu
1. Bấm vào menu **"Bảng xếp hạng"** trên Header để mở trang danh sách [`/top`](http://localhost:3000/top).
2. Chọn xem bảng xếp hạng Nồi chiên không dầu [`/top/noi-chien-khong-dau`](http://localhost:3000/top/noi-chien-khong-dau) hoặc Công cụ AI [`/top/cong-cu-ai-tot-nhat`](http://localhost:3000/top/cong-cu-ai-tot-nhat):
   - Xem khối **Quick Picks** (Tốt nhất tổng thể, Giá trị tốt nhất).
   - Xem bảng xếp hạng chi tiết có điểm số, hình ảnh, ưu nhược điểm và nút CTA đọc review.
   - Xem phương pháp đánh giá minh bạch của ban biên tập.

### Kịch Bản 3: Xem Bài Đánh Giá Chi Tiết (Product Review)
1. Bấm vào bất kỳ nút **"Xem review"** để mở trang review chi tiết:
   - [`/review/aircook-pro-6l`](http://localhost:3000/review/aircook-pro-6l)
   - [`/review/soundmax-air`](http://localhost:3000/review/soundmax-air)
   - [`/review/chatgpt-plus`](http://localhost:3000/review/chatgpt-plus)
2. Quan sát:
   - Thang điểm chi tiết 5 tiêu chí với thanh phần trăm trực quan.
   - Bảng so sánh ưu điểm và nhược điểm thực tế.
   - Bảng thông số kỹ thuật chuẩn hóa.
   - Thẻ chứng nhận kiểm duyệt độc lập của chuyên gia kèm avatar.

### Kịch Bản 4: So Sánh Đối Đầu 2 Sản Phẩm (Comparison)
1. Truy cập trang so sánh nồi chiên [`/so-sanh/aircook-pro-vs-homechef-dual`](http://localhost:3000/so-sanh/aircook-pro-vs-homechef-dual) hoặc laptop [`/so-sanh/macbook-air-m4-vs-dell-xps-13`](http://localhost:3000/so-sanh/macbook-air-m4-vs-dell-xps-13):
   - Hai thẻ sản phẩm đối đầu trực diện, nổi bật sản phẩm thắng cuộc tổng thể.
   - Ma trận so sánh chi tiết từng tiêu chí (dung tích, công suất, giá, độ dễ rửa).
   - Khối kết luận biên tập: *"Chọn A nếu... / Chọn B nếu..."*.

### Kịch Bản 5: Quản Trị Viên Biên Tập Dữ Liệu Mẫu (Admin Demo)
1. Mở [`/admin`](http://localhost:3000/admin):
   - Xem KPI cards thống kê tổng quan.
2. Vào [`/admin/products`](http://localhost:3000/admin/products):
   - Thử lọc sản phẩm theo loại (*Tất cả / Vật lý / Số*).
   - Thử tìm kiếm theo tên hoặc thương hiệu.
   - Bấm **"+ Thêm Sản Phẩm Mới"**, điền form và bấm **"Lưu Sản Phẩm"** → Toast thông báo màu xanh hiển thị thành công và sản phẩm lập tức xuất hiện đầu bảng!
   - Thử nút **"Xóa"** với hộp thoại xác nhận.
3. Vào [`/admin/categories`](http://localhost:3000/admin/categories):
   - Bấm nút bật/tắt hiển thị danh mục trong **Mega Menu**.

---

## 📋 3. Bảng Tổng Hợp Dữ Liệu Mẫu Đang Có Trong Hệ Thống

### 📦 12 Sản Phẩm Mẫu:
| Tên Sản Phẩm | Phân Loại | Điểm | Giá Tham Khảo | URL Xem |
| :--- | :--- | :--- | :--- | :--- |
| **Aircook Pro 6L** | Vật lý (Gia dụng) | 9.5 | 2.490.000đ | `/review/aircook-pro-6l` |
| **SoundMax Air** | Vật lý (Điện tử) | 9.2 | 1.990.000đ | `/review/soundmax-air` |
| **LiteBook 14** | Vật lý (Laptop) | 9.0 | 14.990.000đ | `/review/litebook-14` |
| **FitTrack S** | Vật lý (Smartwatch) | 8.8 | 3.290.000đ | `/review/fittrack-s` |
| **CleanBot X1** | Vật lý (Robot hút bụi) | 8.6 | 5.990.000đ | `/review/cleanbot-x1` |
| **HomeChef Dual** | Vật lý (Nồi chiên 2 ngăn) | 9.1 | 2.890.000đ | `/review/homechef-dual` |
| **ChatGPT Plus** | Số (Trợ lý AI) | 9.6 | 490.000đ/tháng | `/review/chatgpt-plus` |
| **Notion AI** | Số (Quản lý dự án) | 9.3 | 240.000đ/tháng | `/review/notion-ai` |
| **NordVPN Pro** | Số (VPN bảo mật) | 9.4 | 89.000đ/tháng | `/review/nordvpn-pro` |
| **Hostinger Cloud** | Số (Cloud Hosting) | 9.0 | 199.000đ/tháng | `/review/hostinger-cloud` |
| **Canva Pro** | Số (Thiết kế đồ họa) | 9.2 | 149.000đ/tháng | `/review/canva-pro` |
| **Midjourney v6** | Số (Tạo ảnh AI) | 9.1 | 240.000đ/tháng | `/review/midjourney-v6` |

---

### 🏆 4 Bảng Xếp Hạng Top 10:
- **Top 10 Nồi chiên không dầu tốt nhất 2026:** `/top/noi-chien-khong-dau`
- **Top 10 Tai nghe không dây chống ồn:** `/top/tai-nghe-khong-day`
- **Top 10 Công cụ AI tăng hiệu suất 2026:** `/top/cong-cu-ai-tot-nhat`
- **Top 10 Dịch vụ VPN bảo mật cao nhất:** `/top/vpn-tot-nhat`

---

### 📖 4 Cẩm Nang Hướng Dẫn Mua Hàng:
- **Cách chọn tai nghe phù hợp:** `/huong-dan/cach-chon-tai-nghe`
- **Cẩm nang chọn mua nồi chiên không dầu:** `/huong-dan/cach-chon-noi-chien`
- **Lựa chọn công cụ AI cho văn phòng:** `/huong-dan/cach-chon-cong-cu-ai`
- **5 Tiêu chí vàng chọn dịch vụ VPN:** `/huong-dan/cach-chon-vpn`

---

### 👥 3 Chuyên Gia Đánh Giá:
1. **Nguyễn Hoàng Nam:** Trưởng ban Đánh giá Công nghệ (10 năm kinh nghiệm).
2. **Trần Thị Mai:** Chuyên gia Đồ gia dụng & Phong cách sống gia đình.
3. **Lê Quang Huy:** Kỹ sư Phần mềm & Chuyên gia Phân tích AI/SaaS.
