# Mẫu Thiết Kế GUI Checklist (>40 Items + Human Review) — EShop SUT

## 1. Bảng Checklist 4 Khía Cạnh Giao Diện (`IA-01` → `IA-04`)

| Mã Checklist | Khía cạnh (`IA`) | Phân hệ (`FR`) | Tiêu chí kiểm thử | Các bước kiểm thử & Dữ liệu mẫu | Kết quả mong đợi (Expected) | Trạng thái (`Passed`/`Failed`) | Ghi chú lỗi & Ảnh chụp (Notes) |
|:---:|:---:|:---:|:---|:---|:---|:---:|:---|
| `CHK-IA01-01` | `IA-01` (General UI) | `FR-xx` | Căn lề, bố cục và phân cấp tiêu đề `<h1>` | Mở màn hình mục tiêu, kiểm tra thẻ `<h1>` và căn lề | Có đúng 1 thẻ `<h1>` tiếng Việt, căn lề đồng nhất | - | - |
| `CHK-IA02-01` | `IA-02` (Forms) | `FR-xx` | Ràng buộc kiểu dữ liệu và biên giá trị trên Form | Nhập rỗng, khoảng trắng, số âm, vượt biên | Chặn gửi form và hiển thị lỗi tiếng Việt phía trên nút Submit (`FR-22`) | - | - |
| `CHK-IA03-01` | `IA-03` (Navigation) | `FR-xx` | Điều hướng phím `Tab` và chuyển trạng thái | Nhấn phím `Tab` qua các trường và nút hành động | Thứ tự `Tab` hợp lý, hiển thị rõ đường viền Focus Ring | - | - |
| `CHK-IA04-01` | `IA-04` (Feedback/State) | `FR-xx` | Hộp thoại xác nhận trước khi xóa & thông báo trạng thái | Bấm nút Xóa hoặc Lưu dữ liệu | Hiển thị xác nhận tiếng Việt trước khi xóa; cập nhật state tức thì | - | - |

---

## 2. Danh mục Kiểm tra Bổ sung Bắt buộc (Human Review Checklist — `CHK-HUM-*`)

1. **`CHK-HUM-01` (WCAG 2.1 AA Contrast):** Tỷ lệ tương phản giữa chữ và nền của tất cả nút bấm/nhãn trạng thái đạt $\ge 4.5:1$.
2. **`CHK-HUM-02` (Screen Reader Accessibility):** Mọi thẻ `<input>`, `<select>`, `<textarea>` đều có `<label for="...">` hoặc `aria-label` rõ ràng.
3. **`CHK-HUM-03` (Mobile Responsive Layout):** Khi thu nhỏ khung nhìn về `375×812` / `412×915`, thanh điều hướng tự thu gọn và không chèn ép vùng nội dung chính.
4. **`CHK-HUM-04` (Horizontal Overflow Protection):** Các bảng dữ liệu nhiều cột được bọc trong `overflow-x-auto` để không làm vỡ khung trang.
5. **`CHK-HUM-05` (Empty State & Inactive Flag):** Hiển thị thông báo thân thiện khi danh sách trống và phân biệt rõ phần tử bị vô hiệu hóa (`is_active = 0`).
6. **`CHK-HUM-06` (Double-Click Idempotency):** Vô hiệu hóa nút Submit (`disabled={loading}`) ngay khi đang gửi request để chống tạo bản ghi trùng lặp.
7. **`CHK-HUM-07` (Keyboard Focus Ring):** Các mục điều hướng trên Sidebar/Header có thể focus bằng phím `Tab` và nhấn `Enter`.
8. **`CHK-HUM-08` (State Isolation):** Thao tác sửa 1 phần tử chỉ cập nhật đúng `id` của phần tử đó, không ghi đè sang các phần tử khác trong danh sách.

