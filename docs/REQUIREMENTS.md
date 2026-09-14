# ĐẶC TẢ SẢN PHẨM VÀ KỸ THUẬT
## Website So Sánh và Đánh Giá Sản Phẩm (Mô hình tương tự Top10.com)

> Cấu trúc website, hệ thống nội dung và admin demo  
> **Phiên bản:** 1.0 | **Ngày cập nhật:** 14/09/2026  
> **Loại dự án:** Demo website nội dung và đánh giá sản phẩm  
> **Phạm vi:** Giao diện người dùng và Admin demo  
> **Tài liệu tham khảo:** Top10.com (https://www.top10.com/)

---

## 1. Tổng Quan & Quyết Định Phạm Vi

Website được tổ chức theo mô hình nội dung sản phẩm: người dùng bắt đầu từ danh mục hoặc tìm kiếm, đọc bảng xếp hạng, đi sâu vào review chi tiết, so sánh và các bài hướng dẫn liên quan. Header chỉ hiển thị các điểm vào quan trọng; phần lớn trang được khám phá qua mega menu, breadcrumb, tìm kiếm và liên kết nội bộ.

### 1.1 Mục tiêu sản phẩm
- Giúp người dùng tìm và lựa chọn sản phẩm vật lý hoặc sản phẩm số phù hợp.
- Tạo hệ thống nội dung có thể mở rộng thành nhiều danh mục, bảng xếp hạng và review.
- Tối ưu luồng từ khám phá danh mục đến đọc Top 10, review chi tiết, so sánh và hướng dẫn.
- Cho khách hàng thấy cách nội dung được quản lý thông qua một admin demo có dữ liệu mẫu.

### 1.2 Phạm vi demo

| Hạng mục | Có trong demo | Không thuộc demo |
| :--- | :--- | :--- |
| **Website** | Trang chủ, danh mục, Top 10, review, so sánh, hướng dẫn, tìm kiếm | Thanh toán, đặt hàng trực tiếp |
| **Admin** | Dashboard, danh mục, sản phẩm, bài viết, bảng xếp hạng, thiết lập cơ bản | Phân quyền phức tạp, audit log, workflow duyệt nhiều cấp |
| **Dữ liệu** | Dữ liệu mẫu và thao tác giao diện | Đồng bộ giá thật, crawler, tích hợp sàn |
| **Mô hình** | Website biên tập và xuất bản nội dung sản phẩm | Affiliate, hoa hồng, tracking bán hàng và quản lý đối tác |
| **Tài khoản** | Có màn hình đăng nhập minh họa | Xác thực production và khôi phục mật khẩu |

### 1.3 Nguyên tắc điều hướng
- **Header gọn:** Đúng 5 điểm vào chính: Sản phẩm vật lý, Sản phẩm số, Bảng xếp hạng, Hướng dẫn và Tìm kiếm.
- **Mega Menu:** Danh mục con xuất hiện trong mega menu, không chiếm từng mục riêng trên header.
- **Review chi tiết:** Không cần mục menu riêng; người dùng đến từ Top 10, danh mục, tìm kiếm hoặc SEO Google.
- **Footer:** Chứa nội dung tin cậy, giới thiệu, phương pháp đánh giá và pháp lý.

### 1.4 Đối tượng sử dụng

| Đối tượng | Nhu cầu chính | Hành động mong muốn |
| :--- | :--- | :--- |
| **Người mua cá nhân** | Tìm sản phẩm phù hợp, giảm thời gian nghiên cứu | Đọc Top 10, review và so sánh |
| **Người dùng phần mềm** | Hiểu tính năng, giá và lựa chọn thay thế | Đọc review, so sánh và hướng dẫn |
| **Biên tập viên** | Quản lý danh mục và nội dung | Tạo sản phẩm, review, bảng xếp hạng |
| **Quản trị demo** | Trình diễn khả năng vận hành | Xem dashboard và chỉnh dữ liệu mẫu |

---

## 2. Kiến Trúc Thông Tin

### 2.1 Cấu trúc nội dung cấp cao

| Cấp 1 | Cấp 2 | Cấp 3 và nội dung đích |
| :--- | :--- | :--- |
| **Sản phẩm vật lý** | Đồ gia dụng, thời trang, điện tử, sức khỏe, mẹ và bé, thể thao | Danh mục con, Top 10, review chi tiết, bài hướng dẫn |
| **Sản phẩm số** | Ứng dụng, công cụ AI, phần mềm, hosting, VPN, marketing, khóa học | Danh mục con, Top 10, review chi tiết, so sánh, bài hướng dẫn |
| **Bảng xếp hạng** | Theo danh mục và nhu cầu | Danh sách Top 5 hoặc Top 10 |
| **Hướng dẫn** | Chọn mua, sử dụng, giải thích thuật ngữ | Bài nội dung chi tiết |

### 2.2 Cấu trúc URL chuẩn

| Loại trang | Mẫu URL | Ví dụ |
| :--- | :--- | :--- |
| **Hub Vật lý** | `/san-pham-vat-ly` | `/san-pham-vat-ly` |
| **Hub Số** | `/san-pham-so` | `/san-pham-so` |
| **Danh mục con** | `/{nhom}/{danh-muc}` | `/gia-dung/noi-chien` |
| **Top 10 / Bảng xếp hạng** | `/top/{slug}` | `/top/noi-chien-khong-dau` |
| **Review chi tiết** | `/review/{slug}` | `/review/aircook-pro-6l` |
| **So sánh** | `/so-sanh/{slug}` | `/so-sanh/aircook-pro-vs-homechef-dual` |
| **Hướng dẫn** | `/huong-dan/{slug}` | `/huong-dan/cach-chon-noi-chien` |
| **Tìm kiếm** | `/tim-kiem?q={tu-khoa}` | `/tim-kiem?q=cong+cu+ai` |
| **Admin** | `/admin/*` | `/admin`, `/admin/products`, `/admin/categories`, v.v. |

### 2.3 Header và Mega Menu

| Mục | Hành vi | Nội dung mở rộng |
| :--- | :--- | :--- |
| **Sản phẩm vật lý** | Mở mega menu | Danh mục chính, danh mục phổ biến, Top 10 nổi bật |
| **Sản phẩm số** | Mở mega menu | Ứng dụng, AI, phần mềm, dịch vụ số, bài nổi bật |
| **Bảng xếp hạng** | Đi tới trang tổng | Lọc theo nhóm, danh mục và thời gian cập nhật |
| **Hướng dẫn** | Đi tới trang tổng | Bài chọn mua và kiến thức nền |
| **Tìm kiếm** | Mở ô tìm kiếm | Gợi ý tức thời và lịch sử tìm gần đây (nếu có) |

### 2.4 Luồng khám phá nội dung chính
1. Người dùng vào trang chủ, danh mục hoặc trang nội dung từ công cụ tìm kiếm.
2. Người dùng xem danh sách Top 10 hoặc kết quả tìm kiếm.
3. Người dùng mở review chi tiết hoặc trang so sánh.
4. Người dùng tiếp tục đến bài hướng dẫn, sản phẩm thay thế hoặc nội dung liên quan.
5. Người dùng mở website chính thức của sản phẩm từ nguồn tham khảo đã công bố.

---

## 3. Đặc Tả Các Trang Phía Người Dùng

### 3.1 Trang chủ (`/`)
- **Mục tiêu:** Giúp người dùng hiểu website, chọn nhóm sản phẩm và truy cập nhanh nội dung có giá trị.
- **Các Section chính:**
  1. *Giới thiệu nội dung:* Mô tả ngắn phạm vi đánh giá và cách website tổ chức thông tin sản phẩm.
  2. *Header:* Logo, 2 nhóm sản phẩm, bảng xếp hạng, hướng dẫn và tìm kiếm.
  3. *Hero:* Thông điệp chính, mô tả, ô tìm kiếm và 2 lựa chọn vật lý hoặc số.
  4. *Danh mục vật lý:* Thẻ danh mục: gia dụng, thời trang, điện tử, sức khỏe, mẹ và bé, thể thao.
  5. *Danh mục số:* Thẻ danh mục: ứng dụng, AI, phần mềm, hosting, VPN, marketing, khóa học.
  6. *Bảng xếp hạng nổi bật:* Top 10 đang được quan tâm, có ảnh, tiêu đề, ngày cập nhật.
  7. *Lựa chọn biên tập viên:* Một số sản phẩm được đề xuất theo nhu cầu cụ thể.
  8. *Bài viết mới:* Review, so sánh và hướng dẫn mới nhất.
  9. *Tín nhiệm:* Quy trình đánh giá, số liệu hoạt động và đội ngũ chuyên gia.
  10. *FAQ:* Giải thích cách chấm điểm, nguồn dữ liệu và tần suất cập nhật nội dung.
  11. *Footer:* Danh mục, giới thiệu, phương pháp, liên hệ và pháp lý.
- **CTA chính:** Tìm kiếm, mở danh mục hoặc đọc bảng xếp hạng.
- **Dữ liệu chính:** Danh mục, bài nổi bật, sản phẩm nổi bật, chuyên gia và FAQ.

### 3.2 Trang tổng sản phẩm vật lý (`/san-pham-vat-ly`)
- **Mục tiêu:** Tổ chức toàn bộ danh mục hàng hóa hữu hình và dẫn người dùng đến danh mục con phù hợp.
- **Các Section chính:**
  1. Category hero: Tên nhóm, mô tả và tìm kiếm trong sản phẩm vật lý.
  2. Danh mục chính: Gia dụng, thời trang, điện tử, sức khỏe, mẹ và bé, thể thao.
  3. Danh mục phổ biến: Nồi chiên, máy hút bụi, laptop, tai nghe, v.v.
  4. Top 10 nổi bật: Bảng xếp hạng có lượng quan tâm cao.
  5. Sản phẩm đề xuất: Lựa chọn nhanh theo mục tiêu hoặc ngân sách.
  6. Review mới: Review chi tiết mới xuất bản hoặc vừa cập nhật.
  7. Hướng dẫn mua: Các bài giải thích tiêu chí và kinh nghiệm chọn mua.
  8. FAQ: Câu hỏi chung về dữ liệu giá, bảo hành và cách đánh giá.
- **CTA:** Mở danh mục con, Top 10 hoặc review.

### 3.3 Trang tổng sản phẩm số (`/san-pham-so`)
- **Mục tiêu:** Giúp người dùng khám phá phần mềm, ứng dụng và dịch vụ số theo mục tiêu sử dụng.
- **Các Section chính:**
  1. Category hero: Tên nhóm, mô tả và ô tìm phần mềm hoặc công cụ.
  2. Danh mục chính: Ứng dụng, công cụ AI, phần mềm, hosting, VPN, marketing, khóa học.
  3. Phân loại theo nhu cầu: Cá nhân, freelancer, nhóm nhỏ, doanh nghiệp, thiết kế, marketing.
  4. Sản phẩm nổi bật: Phần mềm được đánh giá cao hoặc có gói dùng thử.
  5. Top 10 mới nhất: Bảng xếp hạng sản phẩm số theo từng nhiệm vụ.
  6. Công cụ miễn phí: Danh sách công cụ có gói miễn phí hoặc dùng thử.
  7. So sánh phổ biến: Các cặp phần mềm thường được người dùng cân nhắc.
  8. Hướng dẫn: Bài chọn phần mềm, bảo mật và triển khai.
  9. FAQ: Giải thích gói giá, gia hạn, nền tảng và quyền riêng tư.
- **CTA:** Xem review, hướng dẫn hoặc mở trang so sánh.

### 3.4 Trang danh mục con (`/{nhom}/{danh-muc}`)
- **Mục tiêu:** Tập trung nội dung và sản phẩm thuộc một chủ đề cụ thể, làm trang đích SEO.
- **Các Section chính:** Breadcrumb, Category header, Danh mục nhỏ, Bảng xếp hạng nổi bật (Top 5/Top 10), Sản phẩm đánh giá cao, Review mới, So sánh phổ biến, Hướng dẫn mua, Thương hiệu nổi bật, FAQ.

### 3.5 Trang bảng xếp hạng Top 5 hoặc Top 10 (`/top/{slug}`)
- **Mục tiêu:** Tóm tắt các lựa chọn nổi bật và điều hướng đến review chi tiết hoặc nội dung liên quan.
- **Các Section chính:**
  1. Breadcrumb
  2. Article header: Tiêu đề, mô tả, tác giả, người kiểm duyệt, ngày cập nhật.
  3. Mở đầu phương pháp: Số sản phẩm khảo sát và tiêu chí trọng tâm.
  4. Quick picks: Tốt nhất tổng thể, giá tốt nhất, cao cấp, theo nhu cầu.
  5. Bảng so sánh nhanh: Điểm, giá, tính năng nổi bật, CTA cho từng sản phẩm.
  6. Danh sách xếp hạng: Top 1 đến Top N kèm hình ảnh, mô tả, ưu nhược điểm, lý do xếp hạng.
  7. Cách kiểm tra: Tiêu chí, trọng số, quy trình nghiên cứu.
  8. Hướng dẫn chọn mua: Yếu tố quan tâm và sai lầm thường gặp.
  9. Lựa chọn khác: Sản phẩm không vào Top nhưng phù hợp nhu cầu đặc biệt.
  10. Kết luận: Đề xuất theo nhóm người dùng.
  11. Tác giả & FAQ.

### 3.6 Trang review chi tiết (`/review/{slug}`)
- **Mục tiêu:** Phân tích một sản phẩm đủ sâu để người dùng hiểu ưu nhược điểm và mức độ phù hợp.
- **Các Section chính:**
  1. Breadcrumb
  2. Product hero: Ảnh/logo, tên, mô tả, điểm số (0 - 10), giá, xếp hạng, CTA.
  3. Kết luận nhanh: Có nên chọn không, phù hợp/không phù hợp với ai.
  4. Ưu & nhược điểm: Danh sách ngắn, rõ ràng, dễ quét.
  5. Điểm theo tiêu chí: Chất lượng, tính năng, dễ dùng, giá trị, hỗ trợ.
  6. Review chuyên sâu: Trải nghiệm thực tế, hiệu năng, thiết kế, độ tin cậy.
  7. Thông số / Tính năng: Vật lý (kỹ thuật, bảo hành) hoặc Số (nền tảng, tích hợp, bảo mật).
  8. Giá & Gói: Giá tham khảo tại nhà bán hoặc các gói Free/Pro/Business.
  9. So sánh đối thủ: Khác biệt với 2 - 3 lựa chọn gần nhất.
  10. Sản phẩm thay thế: Lựa chọn theo ngân sách hoặc nhu cầu.
  11. Phương pháp đánh giá & ngày kiểm tra.
  12. Tác giả, FAQ & bài viết liên quan.

### 3.7 Trang so sánh (`/so-sanh/{slug}`)
- **Mục tiêu:** Đối chiếu trực tiếp 2 hoặc nhiều sản phẩm theo cùng bộ tiêu chí.
- **Các Section chính:** Comparison header, Kết luận nhanh (ai nên chọn cái nào), Bảng tổng quan, So sánh giá, So sánh tính năng (ma trận có/không), So sánh trải nghiệm, Người thắng theo từng tiêu chí, Ưu nhược từng sản phẩm, Kết luận cuối ("Chọn A nếu...", "Chọn B nếu..."), Lựa chọn thay thế & FAQ.

### 3.8 Trang hướng dẫn (`/huong-dan/{slug}`)
- **Mục tiêu:** Giải thích cách lựa chọn hoặc sử dụng sản phẩm và hỗ trợ SEO.
- **Các Section chính:** Article header, Mục lục (TOC), Bối cảnh nhu cầu, Tiêu chí lựa chọn, Phân loại ngân sách, Phân loại đối tượng, Sai lầm thường gặp, Sản phẩm gợi ý (link tới Top 10/Review), Kết luận, Tác giả & FAQ.

### 3.9 Trang tìm kiếm (`/tim-kiem?q={tu-khoa}`)
- **Mục tiêu:** Trả kết quả đa loại và giúp người dùng thu hẹp nhu cầu.
- **Các Section chính:** Ô tìm kiếm (từ khóa hiện tại, gợi ý), Tab kết quả (Tất cả, Sản phẩm, Top 10, Review, So sánh, Hướng dẫn), Bộ lọc (Nhóm sản phẩm, Danh mục, Giá, Điểm, Ngày cập nhật), Danh sách kết quả, Phân trang, Trạng thái rỗng (Empty state có gợi ý từ khóa).

### 3.10 Trang tin cậy và pháp lý
- Về chúng tôi (`/ve-chung-toi`)
- Phương pháp đánh giá (`/phuong-phap-danh-gia`)
- Đội ngũ chuyên gia (`/chuyen-gia`)
- Nguyên tắc biên tập (`/nguyen-tac-bien-tap`)
- Liên hệ (`/lien-he`)
- Bảo mật và điều khoản (`/dieu-khoan-bao-mat`)

---

## 4. Đặc Tả Admin Demo

Admin demo minh họa quy trình quản lý nội dung, thao tác với dữ liệu mẫu (JSON / localStorage / Mock API), tạo cảm giác hoạt động thật với feedback trực quan.

### 4.1 Danh mục màn hình Admin
- **Đăng nhập demo (`/admin/login`):** Brand panel, form đăng nhập, nút điền nhanh tài khoản demo, validation.
- **Dashboard (`/admin`):** KPI cards (số sản phẩm, danh mục, top 10, review, bài nháp), nội dung gần đây, biểu đồ trạng thái xuất bản, top content, quick actions.
- **Quản lý danh mục (`/admin/categories`):** Cây danh mục phân nhóm vật lý/số, hiển thị cấp cha-con, form tạo/sửa, cài đặt mega menu, preview.
- **Quản lý sản phẩm (`/admin/products`):** Danh sách có bộ lọc, form thông tin chung, trường riêng cho sản phẩm vật lý (giá tham khảo, thông số, bảo hành) hoặc số (nền tảng, gói giá, tích hợp), điểm số, ưu nhược, SEO.
- **Quản lý bảng xếp hạng (`/admin/rankings`):** Danh sách bảng xếp hạng, ranking builder kéo thả/sắp xếp thứ tự, nhãn "Tốt nhất...", tiêu chí và trọng số, preview.
- **Quản lý review & bài viết (`/admin/content`):** Danh sách theo loại bài, form biên tập content blocks, liên kết sản phẩm, score, FAQ, SEO.
- **Quản lý so sánh (`/admin/comparisons`):** Chọn 2-4 sản phẩm cùng danh mục, ma trận tiêu chí, chọn sản phẩm thắng, kết luận biên tập.
- **Thiết lập cơ bản (`/admin/settings`):** Thông tin website, logo, social links.

### 4.2 Yêu cầu tương tác Admin Demo
- Danh sách có tìm kiếm, lọc, sắp xếp và phân trang.
- Form có validation trường bắt buộc, cảnh báo slug trùng, trạng thái saving/saved.
- Hộp thoại xác nhận khi xóa (xóa cục bộ trong state/storage).
- Chọn ảnh mẫu hoặc preview ảnh cục bộ (không cần server upload phức tạp).
- 4 trạng thái nội dung: `Draft`, `Scheduled`, `Published`, `Archived`.

---

## 5. Mô Hình Dữ Liệu

### 5.1 Các thực thể chính (Entities)

| Thực thể | Các trường tiêu biểu | Quan hệ |
| :--- | :--- | :--- |
| **Category** | `id`, `name`, `slug`, `type` (vat-ly / so), `parentId`, `description`, `order`, `status`, `isMegaMenu` | Có nhiều Product và Article |
| **Product** | `id`, `type`, `name`, `slug`, `brand`, `summary`, `status`, `categoryId`, `overallScore` | Có Media, Score, Price/Plan, Review |
| **ProductMedia** | `id`, `productId`, `url`, `alt`, `type`, `order` | Thuộc Product |
| **ReferencePrice** | `id`, `productId`, `source`, `price`, `currency`, `sourceUrl`, `updatedAt` | Thuộc Product vật lý |
| **PricingPlan** | `id`, `productId`, `name`, `price`, `billingCycle`, `features` | Thuộc Product số |
| **Score** | `id`, `productId`, `criterion`, `value` (0 - 10), `weight` | Thuộc Product |
| **Article** | `id`, `type` (review / huong-dan / kien-thuc), `title`, `slug`, `excerpt`, `body`, `authorId`, `status`, `updatedAt` | Có Category, Product, FAQ |
| **Ranking** | `id`, `title`, `slug`, `categoryId`, `intro`, `methodology`, `status`, `updatedAt` | Có nhiều RankingItem |
| **RankingItem** | `rankingId`, `productId`, `rank`, `label`, `rationale`, `cta` | Nối Ranking và Product |
| **Comparison** | `id`, `slug`, `productIds`, `winnerId`, `conclusion`, `criteriaMatrix` | So sánh 2-4 sản phẩm |
| **Author** | `id`, `name`, `role`, `bio`, `avatar`, `credentials` | Tác giả hoặc người kiểm duyệt |
| **FAQ** | `id`, `ownerType`, `ownerId`, `question`, `answer`, `order` | Gắn với Page, Category hoặc Article |

### 5.2 Trường riêng theo loại sản phẩm
- **Sản phẩm Vật lý:** Giá tham khảo, tiền tệ, thông số kỹ thuật, thương hiệu, bảo hành, kích thước, trọng lượng, phụ kiện, nguồn chính thức.
- **Sản phẩm Số:** Nền tảng (Web, iOS, Windows, v.v.), gói giá (Free, Pro, Enterprise), chu kỳ thanh toán, tích hợp, API, bảo mật, giới hạn sử dụng, website chính thức.

### 5.3 Quy tắc dữ liệu (Data Rules)
1. **Slug:** Duy nhất trong cùng loại nội dung.
2. **Danh mục:** Sản phẩm phải thuộc ít nhất một danh mục.
3. **Bảng xếp hạng:** Ranking chỉ chứa sản phẩm trong cùng ngữ cảnh danh mục.
4. **Điểm số:** Thang điểm 0 - 10, làm tròn tối đa 1 chữ số thập phân.
5. **Cảnh báo giá:** Mỗi mức giá hoặc gói giá phải có thời điểm cập nhật (`updatedAt`).
6. **Thuộc tính bài viết xuất bản:** Phải có tác giả, ngày cập nhật và SEO title.

---

## 6. Kiến Trúc Kỹ Thuật & Yêu Cầu Component

### 6.1 Công nghệ áp dụng (Đã thống nhất)
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS.
- **Ngôn ngữ:** **100% Pure JavaScript** (`React.createElement`, không dùng cú pháp JSX `.jsx`).
- **Data demo:** File JSON / Mock Data module, lưu tương tác qua React State hoặc `localStorage`.

### 6.2 Danh sách Component chính

| Nhóm | Component tiêu biểu |
| :--- | :--- |
| **Toàn cục (Global)** | `Header`, `MegaMenu`, `SearchOverlay`, `Breadcrumb`, `Footer`, `EditorialNote` |
| **Danh mục (Category)** | `CategoryCard`, `CategoryGrid`, `FeaturedRanking`, `ArticleCard` |
| **Sản phẩm (Product)** | `ProductHero`, `ScoreBreakdown`, `ProsCons`, `ReferencePriceTable`, `PricingPlans` |
| **Xếp hạng (Ranking)** | `QuickPicks`, `ComparisonTable`, `RankingItem`, `Methodology` |
| **Admin** | `AdminSidebar`, `DataTable`, `FilterBar`, `ContentEditor`, `StatusBadge`, `ConfirmDialog` |

---

## 7. Yêu Cầu Chức Năng (Functional Requirements)

| Mã | Yêu cầu | Mức ưu tiên |
| :--- | :--- | :--- |
| **FR01** | Người dùng duyệt danh mục vật lý và số qua mega menu | Bắt buộc |
| **FR02** | Người dùng tìm kiếm sản phẩm và nội dung đa loại | Bắt buộc |
| **FR03** | Hiển thị trang Top 10 từ dữ liệu ranking | Bắt buộc |
| **FR04** | Hiển thị review chi tiết có score, ưu nhược và CTA | Bắt buộc |
| **FR05** | Hiển thị bảng so sánh sản phẩm theo tiêu chí | Bắt buộc |
| **FR06** | Ghi nhận hoặc mô phỏng lượt đọc và tương tác nội dung | Bắt buộc |
| **FR07** | Admin lọc và mở danh sách sản phẩm | Bắt buộc |
| **FR08** | Admin tạo hoặc sửa dữ liệu mẫu qua form có validation | Bắt buộc |
| **FR09** | Admin sắp xếp thứ hạng sản phẩm trong bảng xếp hạng | Bắt buộc |
| **FR10** | Admin xem trước (preview) trạng thái nội dung | Nên có |

---

## 8. Yêu Cầu Phi Chức Năng (Non-Functional Requirements)

- **Responsive:** Hoạt động hoàn hảo trên mobile (từ 360px), tablet và desktop; tuyệt đối không vỡ giao diện hay cuộn ngang ngoài ý muốn.
- **Hiệu năng:** Ảnh tĩnh kích thước phù hợp, lazy load, không dùng thư viện nặng không cần thiết.
- **Accessibility:** Điều hướng bàn phím, focus rõ ràng, nhãn form đầy đủ, alt text cho ảnh, độ tương phản màu chuẩn WCAG.
- **SEO:** Thẻ Title, Meta Description, Heading phân cấp H1/H2/H3 rõ ràng, BreadcrumbList và JSON-LD Structured Data phù hợp.
- **Minh bạch nội dung:** Hiển thị rõ ràng tác giả, ngày cập nhật, phương pháp đánh giá và nguồn tham khảo.
- **Bảo mật demo:** Không dùng dữ liệu thật, không lưu mật khẩu hay token nhạy cảm.
- **Khả năng mở rộng:** Template động nhận dữ liệu từ mock data, không hard-code tĩnh nội dung vào template.

---

## 9. Bộ Dữ Liệu Demo Tối Thiểu (Minimum Dataset)

Để nghiệm thu demo đầy đủ, hệ thống cần chuẩn bị bộ dữ liệu mẫu tối thiểu:

| Loại dữ liệu | Số lượng tối thiểu | Phân bổ / Ghi chú |
| :--- | :---: | :--- |
| **Danh mục (Categories)** | **8** | 4 danh mục vật lý & 4 danh mục sản phẩm số |
| **Sản phẩm (Products)** | **12** | 6 sản phẩm vật lý & 6 sản phẩm số |
| **Bảng xếp hạng (Rankings)** | **4** | 2 bảng xếp hạng vật lý & 2 bảng xếp hạng số |
| **Review chi tiết (Reviews)** | **6** | Bao phủ cả sản phẩm vật lý và số |
| **Trang so sánh (Comparisons)** | **2** | 1 cặp vật lý & 1 cặp sản phẩm số |
| **Bài hướng dẫn (Guides)** | **4** | 2 bài hướng dẫn vật lý & 2 bài hướng dẫn số |
| **Hồ sơ chuyên gia (Authors)** | **3** | Chuyên gia công nghệ, gia dụng, phần mềm |

---

## 10. Tiêu Chí Nghiệm Thu Demo (Acceptance Criteria)

1. **Header:** Đúng 5 điểm vào chính; Mega Menu phân định rõ sản phẩm vật lý và sản phẩm số.
2. **Tính nhất quán:** Tất cả các trang người dùng có breadcrumb, metadata cơ bản và footer thống nhất.
3. **Trang Top 10:** Hiển thị bảng so sánh nhanh, thứ hạng, lý do xếp hạng và CTA cho từng sản phẩm.
4. **Trang Review:** Hiển thị score (0 - 10), kết luận nhanh, ưu/nhược điểm, chi tiết kỹ thuật/gói giá và sản phẩm thay thế.
5. **Trang So sánh:** Đối chiếu trực tiếp tối thiểu 2 sản phẩm trên cùng một bộ tiêu chí ma trận.
6. **Admin Demo:** Dashboard hoạt động và có đủ 4 luồng chính (Danh mục, Sản phẩm, Ranking, Review/Bài viết).
7. **Form tương tác:** Có validation trường bắt buộc, phản hồi thông báo thành công (toast/alert) khi lưu.
8. **Hiển thị đa thiết bị:** Responsive mượt mà tại mobile (360px), tablet, desktop; không có thanh cuộn ngang trang.
9. **Độ tin cậy liên kết:** Không có liên kết chết (404/broken links) trong các luồng người dùng chính.
10. **Đa dạng nội dung:** Thể hiện cân bằng giữa sản phẩm vật lý (gia dụng, điện tử...) và sản phẩm số (AI tools, SaaS...).
