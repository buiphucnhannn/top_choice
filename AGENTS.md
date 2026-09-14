# WORKSPACE RULES: DUDI_01

Dự án phát triển **Website so sánh và đánh giá sản phẩm** (theo mô hình Top10.com) với **Next.js + Tailwind CSS** và **100% Pure JavaScript (Không dùng JSX)**.

## 📌 NGUYÊN TẮC BẮT BUỘC (STRICT GUIDELINES)

1. **Tuân thủ Requirement**:
   - Mọi cấu trúc trang, dữ liệu, router và luồng chức năng phải bám sát tuyệt đối tài liệu đặc tả [docs/REQUIREMENTS.md](file:///d:/Career/DUDI_01/docs/REQUIREMENTS.md).
   - Tham khảo thêm quy tắc chi tiết tại [.agents/rules/project_rules.md](file:///d:/Career/DUDI_01/.agents/rules/project_rules.md).

2. **Cấm dùng JSX**:
   - Viết toàn bộ code bằng JavaScript thuần (`React.createElement(...)`).
   - Tuyệt đối không tạo file `.jsx`, không viết thẻ `<tag>`.
   - Luôn dùng `const h = React.createElement;` để xây dựng cấu trúc DOM.

3. **Cấu trúc URL chuẩn**:
   - `/`: Trang chủ
   - `/san-pham-vat-ly`: Hub sản phẩm vật lý
   - `/san-pham-so`: Hub sản phẩm số
   - `/{nhom}/{danh-muc}`: Trang danh mục con
   - `/top/{slug}`: Bảng xếp hạng Top 10
   - `/review/{slug}`: Review chi tiết
   - `/so-sanh/{slug}`: So sánh sản phẩm
   - `/huong-dan/{slug}`: Hướng dẫn mua hàng
   - `/tim-kiem`: Tìm kiếm đa loại
   - `/admin/*`: Bộ màn hình quản trị demo

4. **Bộ Dữ Liệu Tối Thiểu (Minimum Dataset)**:
   - 8 danh mục (4 vật lý, 4 số)
   - 12 sản phẩm (6 vật lý, 6 số)
   - 4 bảng xếp hạng (2 vật lý, 2 số)
   - 6 bài review chi tiết
   - 2 trang so sánh đối đầu
   - 4 bài viết hướng dẫn
   - 3 hồ sơ chuyên gia

5. **Chất Lượng Giao Diện**:
   - Giao diện cao cấp, hiện đại, tối ưu responsive trên Mobile (từ 360px) đến Desktop.
   - Header đúng 5 điểm vào chính, hỗ trợ Mega Menu cho cả sản phẩm vật lý và sản phẩm số.
