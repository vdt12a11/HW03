# BÁO CÁO TỔNG HỢP KIỂM THỬ GUI & USABILITY (MAIN REPORT)
## MÔN HỌC: KIỂM CHỨNG PHẦN MỀM (CS423 / CSC13003) — HỌC KỲ 1/2026

---

### THÔNG TIN CHUNG
- **Mã bài tập:** HW03-AI – GUI & Usability Testing
- **Họ và tên sinh viên:** VĂN ĐỨC TUẤN
- **Mã số sinh viên (MSSV):** 23120397
- **Lớp / Khóa:** Kiểm thử phần mềm - CQ2023/3
- **Hệ thống kiểm thử (SUT):** EShop ([https://github.com/ttbhanh/eshop-sut](https://github.com/ttbhanh/eshop-sut))
- **Ngày thực hiện:** 08/11/2026
- **Công cụ hỗ trợ:** Antigravity (Gemini 3.8 Flash / Google DeepMind)

---

## MỤC LỤC
1. [Phạm vi Kiểm thử (Scope Selection)](#1-phạm-vi-kiểm-thử-scope-selection)
2. [Task 1: Thiết kế & Thực thi GUI Checklist (30 Điểm)](#2-task-1-thiết-kế--thực-thi-gui-checklist-30-điểm)
   - 2.1. Thiết kế GUI Checklist (> 40 Items bao phủ IA-01 → IA-04)
   - 2.2. Human Review & Phản biện các điểm AI bỏ sót
   - 2.3. Kết quả Thực thi Checklist (Test Execution)
   - 2.4. Danh sách Báo cáo Lỗi (Bug Report & GitHub Issues)
3. [Task 2: Đánh giá Usability (Usability Evaluation - 40 Điểm)](#3-task-2-đánh-giá-usability-usability-evaluation---40-điểm)
   - 3.1. Mục tiêu & Kịch bản thực nghiệm (Task Scenario)
   - 3.2. Thiết kế Thang đo (SUS / UEQ-S Questionnaire)
   - 3.3. Nhật ký & Dữ liệu 7 Người tham gia khảo sát (7 Sessions)
   - 3.4. Phân tích kết quả, Friction Points & Mức độ nghiêm trọng
4. [Task 3: Kiểm thử Đa Trình duyệt & Đa Nền tảng (Cross-Browser / Platform - 20 Điểm)](#4-task-3-kiểm-thử-đa-trình-duyệt--đa-nền-tảng-cross-browser--platform---20-điểm)
   - 4.1. Môi trường kiểm thử (Chrome, Firefox, Safari/Mobile)
   - 4.2. Ma trận kết quả tương thích
   - 4.3. Bằng chứng kiểm thử có Watermark thông tin sinh viên
5. [Task 4: Xây dựng & Tự động hóa với Agent Skill (10 Điểm)](#5-task-4-xây-dựng--tự-động-hóa-với-agent-skill-10-điểm)
   - 5.1. Cấu trúc và nguyên lý hoạt động của Skill
   - 5.2. Video minh chứng thực nghiệm End-to-End (YouTube Link)
6. [Đánh giá Phản biện AI (AI Critique - 200–300 Từ)](#6-đánh-giá-phản-biện-ai-ai-critique---200300-từ)
7. [Bảng Tự Đánh Giá Điểm (Self-Assessment Rubric)](#7-bảng-tự-đánh-giá-điểm-self-assessment-rubric)

---

## 1. Phạm vi Kiểm thử (Scope Selection)

### 1.1. Lựa chọn Màn hình cho Task 1 (GUI Checklist)
Theo lựa chọn của sinh viên từ **Pool C — Web Admin** trong tài liệu đặc tả bài tập HW03, bộ tiêu chí kiểm thử giao diện tập trung toàn diện vào 4 phân hệ cốt lõi:
- **FR-13: Dashboard (Bảng điều khiển & Thống kê tổng quan):** Hiển thị tổng doanh thu các đơn hàng thành công (`delivered`), tổng số lượng đơn hàng, biểu đồ và bố cục thẻ chỉ số (KPI cards).
- **FR-14: Category management (Quản lý Danh mục - CRUD):** Form thêm mới danh mục, bảng danh sách phân cấp danh mục, thao tác chỉnh sửa và xóa danh mục.
- **FR-15: Product management (Quản lý Sản phẩm - CRUD & Import CSV):** Form thêm/sửa sản phẩm (tên, giá tiền, hình ảnh URL, mô tả, phân loại danh mục), bảng hiển thị danh sách sản phẩm kèm thumbnail và chức năng Import sản phẩm từ file CSV.
- **FR-17: Coupon management (Quản lý Mã giảm giá - CRUD):** Form khởi tạo mã giảm giá (code in hoa, loại chiết khấu percent/fixed, giá trị giảm, hạn mức đơn tối thiểu, ngày hết hạn, giới hạn số lần dùng/người) và bảng theo dõi trạng thái mã.

---

## 2. Task 1: Thiết kế & Thực thi GUI Checklist (30 Điểm)

### 2.1. Bảng GUI Checklist Ban Đầu do AI Sinh (Initial AI-Generated Checklist)
Bộ tiêu chí bao gồm **44 mục kiểm thử**, được phân bố đều qua 4 khía cạnh giao diện chuẩn của đề bài:
- **IA-01: General UI Standards** (Typography, Spacing, Visual Hierarchy, Formatting, Iconography)
- **IA-02: Forms** (Input Validation, Field Masking, Placeholder, Required indicator, Form State)
- **IA-03: Navigation** (Sidebar Menu Tabs, Active State, Routing, Logout, Modal/Form Dismiss)
- **IA-04: Feedback / State** (Loading State, Empty Data State, Confirmation Dialogs, Toast/Alert Feedback, Error Boundaries)

#### Bảng Checklist 44 Items (Đã Thực Thi trên SUT):

| STT | Mã Tiêu Chí (Item ID) | Khía Cạnh (Aspect) | Phân Hệ / Chức Năng | Mục Tiêu Kiểm Thử (GUI Checklist Item) | Kết Quả (Pass/Fail) | Ghi Chú & Bằng Chứng Lỗi (Notes / Bug Evidence) |
|:---:|:---|:---:|:---|:---|:---:|:---|
| 1 | `CHK-IA01-01` | IA-01 | FR-13: Dashboard | Thẻ doanh thu hiển thị và định dạng đúng tổng số tiền VND của các đơn `delivered` kèm dấu phân cách hàng nghìn. | **Failed** | **Lỗi (`BUG-02`):** Công thức tính tại `App.jsx:218` nhân đôi giá trị (`o.total_amount * 2`), hiển thị `110,680,000 ₫` thay vì thực tế `55,340,000 ₫`. Xem ảnh: [`bug02_dashboard_double_revenue.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug02_dashboard_double_revenue.png) |
| 2 | `CHK-IA01-02` | IA-01 | FR-13: Dashboard | Cỡ chữ và độ tương phản màu sắc của số liệu KPI nổi bật hơn tiêu đề nhãn (Visual Hierarchy). | **Passed** | Số liệu dùng `text-3xl font-bold text-green-600`, nổi bật rõ so với nhãn `text-gray-500`. |
| 3 | `CHK-IA01-03` | IA-01 | FR-14: Categories | Bảng danh mục có căn lề chuẩn: văn bản căn trái, ID số căn giữa hoặc trái đồng nhất. | **Passed** | Bảng sử dụng `text-left` đồng nhất cho các cột. |
| 4 | `CHK-IA01-04` | IA-01 | FR-14: Categories | Khoảng cách padding giữa các dòng trong bảng danh mục đủ thoáng, không dính sát chữ. | **Passed** | Các ô `th` và `td` đều có `p-3` (12px) và đường viền `border-b`. |
| 5 | `CHK-IA01-05` | IA-01 | FR-15: Products | Ảnh thumbnail sản phẩm giữ đúng tỷ lệ (aspect ratio), không bị méo mó (stretch/squash). | **Passed** | Thẻ `<img>` áp dụng class `w-12 h-12 object-cover`. |
| 6 | `CHK-IA01-06` | IA-01 | FR-15: Products | Tên sản phẩm quá dài (trên 100 ký tự) không làm vỡ bố cục bảng hoặc tràn ra ngoài khung. | **Failed** | **Lỗi (`BUG-04`):** Cột tên sản phẩm không có `truncate` hoặc `break-words`, chuỗi dài không khoảng trắng làm tràn ngang bảng và đẩy cột Giá/Hành động ra ngoài màn hình. Xem ảnh: [`bug04_products_form_and_unformatted_price.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug04_products_form_and_unformatted_price.png) |
| 7 | `CHK-IA01-07` | IA-01 | FR-15: Products | Cột giá tiền sản phẩm hiển thị nhất quán ký hiệu đơn vị tiền tệ `₫` kèm dấu phân cách hàng nghìn (FR-21). | **Failed** | **Lỗi (`BUG-04`):** Tại `App.jsx:590`, giá sản phẩm in thẳng `{p.price} ₫` (ví dụ: `29990000 ₫`) mà không gọi `.toLocaleString()`, vi phạm đặc tả FR-21. Xem ảnh: [`bug05_product_edit_mass_overwrite.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug05_product_edit_mass_overwrite.png) |
| 8 | `CHK-IA01-08` | IA-01 | FR-17: Coupons | Mã code coupon hiển thị bằng font chữ Monospace hoặc in hoa để dễ phân biệt ký tự tương tự. | **Passed** | Cột mã coupon sử dụng `font-mono font-bold text-orange-600`. |
| 9 | `CHK-IA01-09` | IA-01 | FR-17: Coupons | Nhãn trạng thái hết hạn (`Hết hạn`) sử dụng màu cảnh báo (màu đỏ) dễ nhận diện thị giác. | **Passed** | Hiển thị `<span className="text-red-500">Hết hạn</span>`. |
| 10 | `CHK-IA01-10` | IA-01 | Toàn hệ thống | Nhất quán ngôn ngữ Tiếng Việt trên toàn hệ thống và mỗi trang có đúng 1 thẻ `<h1>` (FR-21). | **Failed** | **Lỗi (`BUG-01`):** Trang Đăng nhập Admin dùng tiếng Anh (`"Admin Login"`, `"Password"`, `"Login"`) và không có thẻ `<h1>` nào (chỉ dùng `<h2>`), vi phạm FR-21. Xem ảnh: [`bug01_login_english_no_h1.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug01_login_english_no_h1.png) |
| 11 | `CHK-IA01-11` | IA-01 | Toàn hệ thống | Màu sắc các nút hành động tích cực (Submit) nhất quán dùng màu xanh dương, nút hủy/xóa dùng màu đỏ (FR-21). | **Failed** | **Lỗi (`BUG-04`, `BUG-07`):** Nút Submit không nhất quán: Danh mục dùng xanh dương (`bg-blue-600`), Sản phẩm dùng xanh lá (`bg-green-600`), Coupon dùng màu cam (`bg-orange-500`); nút "Hủy sửa" dùng chữ xám. Xem ảnh: [`bug04_products_form_and_unformatted_price.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug04_products_form_and_unformatted_price.png) |
| 12 | `CHK-IA02-01` | IA-02 | FR-14: Categories | Input tên danh mục có placeholder rõ ràng (`Tên danh mục mới`). | **Passed** | Hiển thị đúng placeholder `"Tên danh mục mới"`. |
| 13 | `CHK-IA02-02` | IA-02 | FR-14: Categories | Không cho phép gửi form (submit) khi ô tên danh mục để trống hoặc chỉ toàn khoảng trắng (FR-14). | **Failed** | **Lỗi (`BUG-03`):** Ô nhập thiếu thuộc tính `required` và không kiểm tra `.trim()`. Bấm "Thêm mới" khi để trống vẫn tạo ra danh mục rỗng (`#5`) trong bảng. Xem ảnh: [`bug03_category_empty_submit.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug03_category_empty_submit.png) |
| 14 | `CHK-IA02-03` | IA-02 | FR-15: Products | Các trường bắt buộc trong form sản phẩm (Tên, Giá) có dấu sao đỏ (`*`) bên cạnh nhãn (FR-22) và thuộc tính `required`. | **Failed** | **Lỗi (`BUG-04`):** Không có nhãn và không có ký hiệu `*` cho bất kỳ trường bắt buộc nào (vi phạm FR-22); ô "Giá tiền" thiếu cả thuộc tính `required`. Xem ảnh: [`bug04_products_form_and_unformatted_price.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug04_products_form_and_unformatted_price.png) |
| 15 | `CHK-IA02-04` | IA-02 | FR-15: Products | Input "Giá tiền" chỉ chấp nhận số dương (`> 0`), ngăn chặn nhập số âm (`-`) hoặc `0` (FR-15). | **Failed** | **Lỗi (`BUG-04`):** Ô "Giá tiền" không có `min="1"` và không validate ở Frontend/Backend, cho phép lưu sản phẩm với giá âm (`-50000 ₫`). Xem ảnh: [`bug04_products_form_and_unformatted_price.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug04_products_form_and_unformatted_price.png) |
| 16 | `CHK-IA02-05` | IA-02 | FR-15: Products | Dropdown chọn danh mục hiển thị đầy đủ danh sách các danh mục hiện có trong cơ sở dữ liệu. | **Passed** | Thẻ `<select>` render đầy đủ danh sách `categories`. |
| 17 | `CHK-IA02-06` | IA-02 | FR-15: Products | Textarea mô tả sản phẩm có độ cao hợp lý và cho phép cuộn/co giãn có giới hạn. | **Passed** | `<textarea>` hiển thị ổn định trên 2 cột (`col-span-2`). |
| 18 | `CHK-IA02-07` | IA-02 | FR-15: Products | Form tự động điền lại toàn bộ dữ liệu cũ của sản phẩm khi bấm nút "Sửa". | **Passed** | Hàm `setProductForm(p)` điền đúng thông tin sản phẩm cần sửa lên form. |
| 19 | `CHK-IA02-08` | IA-02 | FR-15: Products | Nút "Hủy sửa" xuất hiện ở chế độ sửa và reset form về trạng thái thêm mới khi nhấn. | **Passed** | Nút "Hủy sửa" hiển thị khi `productForm.id != null` và xóa trắng form khi bấm. |
| 20 | `CHK-IA02-09` | IA-02 | FR-15: Products | File input (Import CSV) giới hạn định dạng file chấp nhận chỉ là `.csv` (FR-16). | **Failed** | **Lỗi (`BUG-06`):** `<input type="file">` thiếu `accept=".csv"` và không kiểm tra đuôi file, cho phép chọn và import cả file `.txt` (`malformed_data.txt`). Xem ảnh: [`bug06_csv_import_no_accept_no_rollback.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug06_csv_import_no_accept_no_rollback.png) |
| 21 | `CHK-IA02-10` | IA-02 | FR-17: Coupons | Input mã coupon tự động chuyển thành chữ in hoa (uppercase) khi người dùng gõ. | **Passed** | Sự kiện `onChange` gọi `e.target.value.toUpperCase()`. |
| 22 | `CHK-IA02-11` | IA-02 | FR-17: Coupons | Khi chọn loại coupon là "Phần trăm", giá trị giảm phải là số dương và không vượt quá 100% (FR-17). | **Failed** | **Lỗi (`BUG-07`):** Ô giá trị giảm và đơn tối thiểu thiếu `min`/`max`, cho phép tạo mã giảm `250%` và đơn tối thiểu âm `-100,000 ₫`. Xem ảnh: [`bug07_coupon_invalid_values_and_raw_sql_error.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug07_coupon_invalid_values_and_raw_sql_error.png) |
| 23 | `CHK-IA02-12` | IA-02 | FR-17: Coupons | Input "Ngày hết hạn" hiển thị datepicker và không cho phép chọn ngày trong quá khứ. | **Failed** | **Lỗi (`BUG-07`):** Ô `type="date"` thiếu thuộc tính `min` ngày hiện tại, cho phép tạo mã mới nhưng có ngày hết hạn ở quá khứ (`2020-01-01`). Xem ảnh: [`bug07_coupon_invalid_values_and_raw_sql_error.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug07_coupon_invalid_values_and_raw_sql_error.png) |
| 24 | `CHK-IA02-13` | IA-02 | FR-17: Coupons | Input "Số lần dùng tối đa/người" có giá trị tối thiểu (`min="1"`). | **Passed** | Có thuộc tính `min="1"` trên thẻ input. |
| 25 | `CHK-IA03-01` | IA-03 | Toàn hệ thống | Sidebar navigation hiển thị nổi bật mục menu đang được chọn (Active Tab Highlight - FR-23). | **Passed** | Tab đang chọn được tô màu `text-blue-400`. |
| 26 | `CHK-IA03-02` | IA-03 | Toàn hệ thống | Con trỏ chuột chuyển thành hình bàn tay (`cursor: pointer`) khi rê qua các mục menu sidebar. | **Passed** | Tất cả các mục `<li>` trên Sidebar đều có class `cursor-pointer`. |
| 27 | `CHK-IA03-03` | IA-03 | Toàn hệ thống | Chuyển đổi qua lại giữa các tab (Dashboard, Categories, Products, Coupons) mượt mà, không giật lag. | **Passed** | Chuyển tab tức thời qua state `activeTab`. |
| 28 | `CHK-IA03-04` | IA-03 | Toàn hệ thống | Nút "Đăng xuất" có vị trí tách biệt, đúng nhãn "Đăng xuất" (FR-23) và màu sắc cảnh báo. | **Passed** | Nút có nhãn `"Đăng xuất"`, class `text-red-400 mt-8`. |
| 29 | `CHK-IA03-05` | IA-03 | Toàn hệ thống | Nhấn "Đăng xuất" xóa sạch token và đưa người dùng quay về màn hình đăng nhập Admin. | **Passed** | Xóa `adminToken` khỏi `localStorage` và render lại form Login. |
| 30 | `CHK-IA03-06` | IA-03 | FR-15: Products | Link "Tải file mẫu (template.csv)" hoạt động và tải xuống file CSV hợp lệ. | **Passed** | Thẻ `<a download="template_import.csv">` chứa đúng header chuẩn. |
| 31 | `CHK-IA03-07` | IA-03 | FR-15: Products | Bảng danh sách sản phẩm dài có thanh cuộn để quản lý cuộn trang. | **Passed** | Khung nội dung chính có `overflow-auto` hỗ trợ cuộn dọc. |
| 32 | `CHK-IA03-08` | IA-03 | Toàn hệ thống | Thứ tự nhấn phím Tab (Tab navigation order) di chuyển tuần tự qua các mục điều hướng Sidebar và form input (FR-21). | **Failed** | **Lỗi (`BUG-08`):** Các mục menu trên Sidebar dùng thẻ `<li>` thuần không có `tabIndex={0}` hoặc `<button>`, khiến phím `Tab` bỏ qua toàn bộ thanh điều hướng. Xem ảnh: [`bug08_responsive_mobile_sidebar_and_table_overflow.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug08_responsive_mobile_sidebar_and_table_overflow.png) |
| 33 | `CHK-IA04-01` | IA-04 | FR-13: Dashboard | Khi đang tải dữ liệu doanh thu hoặc đơn hàng, có trạng thái hiển thị loading/skeleton. | **Failed** | **Lỗi (`BUG-02`):** Hàm `fetchData()` không có state `loading`, giao diện hiển thị `0 ₫` và `0` đơn hàng trước khi API trả về. Xem ảnh: [`bug02_dashboard_double_revenue.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug02_dashboard_double_revenue.png) |
| 34 | `CHK-IA04-02` | IA-04 | FR-14: Categories | Sau khi thêm mới danh mục thành công, ô input tự động xóa trắng để sẵn sàng nhập tiếp. | **Passed** | Gọi `setCategoryName("")` sau khi thêm mới. |
| 35 | `CHK-IA04-03` | IA-04 | FR-14: Categories | Danh sách danh mục được refresh tự động ngay sau khi thêm hoặc xóa mà không cần F5. | **Passed** | Tự động gọi lại `fetchData()`. |
| 36 | `CHK-IA04-04` | IA-04 | FR-14, 15, 17 | Có hộp thoại xác nhận (Confirm dialog) trước khi thực hiện hành động Xóa. | **Failed** | **Lỗi (`BUG-03`):** Bấm nút "Xóa" ở Danh mục, Sản phẩm và Mã giảm giá đều xóa vĩnh viễn ngay lập tức mà không có hộp thoại `confirm` xác nhận. Xem ảnh: [`bug03_category_empty_submit.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug03_category_empty_submit.png) |
| 37 | `CHK-IA04-05` | IA-04 | FR-15: Products | Khi đường dẫn ảnh URL bị lỗi (broken link), hiển thị ảnh thay thế placeholder dự phòng. | **Passed** | Sự kiện `onError` thay thế bằng `https://placehold.co/50`. |
| 38 | `CHK-IA04-06` | IA-04 | FR-15: Products | Hiển thị bảng xem trước (Preview table) ngay khi người dùng chọn file CSV trước khi bấm Import. | **Passed** | Bảng xem trước render ngay khi `importPreview.length > 0`. |
| 39 | `CHK-IA04-07` | IA-04 | FR-15: Products | Nút "Import" bị vô hiệu hóa (disabled) và đổi nhãn thành "Đang import..." trong lúc xử lý file. | **Passed** | Thuộc tính `disabled={importing || !importPreview.length}` hoạt động đúng. |
| 40 | `CHK-IA04-08` | IA-04 | FR-15: Products | Khi Import CSV có dòng lỗi, phải rollback toàn bộ giao dịch (all-or-nothing) và báo lỗi chuẩn (FR-16). | **Failed** | **Lỗi (`BUG-06`):** Vi phạm tính nguyên tử FR-16: Khi dòng 3 thiếu tên SP, hệ thống không rollback mà vẫn thêm dòng 2 (kể cả giá âm `-99000`) vào CSDL (`1/2 sản phẩm được thêm`). Xem ảnh: [`bug06_csv_import_no_accept_no_rollback.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug06_csv_import_no_accept_no_rollback.png) |
| 41 | `CHK-IA04-09` | IA-04 | FR-15: Products | Bấm thêm/lưu sản phẩm hiển thị thông báo phản hồi trực quan (Toast) cho người dùng biết trạng thái. | **Failed** | **Lỗi (`BUG-05`):** Thêm mới sản phẩm không hiển thị bất kỳ thông báo phản hồi nào; sửa sản phẩm dùng `window.alert()` thô sơ. Xem ảnh: [`bug05_product_edit_mass_overwrite.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug05_product_edit_mass_overwrite.png) |
| 42 | `CHK-IA04-10` | IA-04 | FR-17: Coupons | Form tạo mã giảm giá tự động reset về mặc định sau khi tạo mã thành công. | **Passed** | Reset state `couponForm` sau khi `axios.post` thành công. |
| 43 | `CHK-IA04-11` | IA-04 | FR-17: Coupons | Khi tạo mã coupon bị lỗi, hiển thị thông báo lỗi tiếng Việt rõ ràng phía trên nút Submit (FR-21 & FR-22). | **Failed** | **Lỗi (`BUG-07`):** Hiển thị nguyên văn lỗi SQL tiếng Anh `SQLITE_CONSTRAINT: UNIQUE constraint failed: coupons.code` qua `window.alert()` thay vì hiển thị phía trên nút Submit. Xem ảnh: [`bug07_coupon_invalid_values_and_raw_sql_error.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug07_coupon_invalid_values_and_raw_sql_error.png) |
| 44 | `CHK-IA04-12` | IA-04 | Toàn hệ thống | Khi token đăng nhập hết hạn hoặc bị lỗi 401/403, tự động chuyển về trang đăng nhập có báo lỗi. | **Failed** | **Lỗi (`BUG-01`):** Tự động xóa token văng về màn hình Login nhưng không hiển thị bất kỳ thông báo giải thích nào cho người dùng. Xem ảnh: [`bug01_login_english_no_h1.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug01_login_english_no_h1.png) |

### 2.2. Human Review & Phản biện các điểm AI bỏ sót (Student's Critical Review & Additions)

#### A. Phân tích nguyên nhân tại sao AI bỏ sót (Why the AI Missed These Items):
1. **Thiên kiến dựa trên cấu trúc tĩnh (Code-Driven Bias):** AI sinh checklist chủ yếu dựa trên các thẻ HTML/JSX hiện diện tường minh trong mã nguồn (`<input>`, `<button>`, `<table>`). Do đó, AI bỏ qua các thuộc tính phi chức năng ẩn như độ tương phản màu sắc thực tế trên màn hình hoặc khả năng tương thích với trình đọc màn hình (Screen Reader).
2. **Thiếu bối cảnh môi trường hiển thị động (Lack of Viewport & Rendering Context):** AI không trực tiếp "nhìn" thấy giao diện khi thu nhỏ cửa sổ trình duyệt xuống kích thước Mobile/Tablet (375px - 768px) hoặc khi danh sách dữ liệu rỗng, dẫn đến bỏ sót các lỗi vỡ khung (overflow) và che khuất thanh điều hướng (Sidebar cố định `w-64`).
3. **Bỏ qua hành vi tương tác bất thường và lỗi trạng thái cục bộ (Edge-case Micro-interactions & State Corruption):** AI giả định người dùng luôn bấm chuột đơn lẻ tuần tự và tin tưởng hàm cập nhật state, nên quên kiểm tra các kịch bản nhấn đúp liên tục (Double-click submit) hoặc kiểm tra tính toàn vẹn của các dòng khác trong bảng sau khi sửa 1 phần tử.

#### B. Danh sách 8 Tiêu chí Kiểm thử do Sinh viên Bổ sung (Đã Thực Thi trên SUT):

| STT | Mã Tiêu Chí (Item ID) | Khía Cạnh (Aspect) | Phân Hệ / Chức Năng | Mục Tiêu Kiểm Thử Bổ Sung (Human-Added Item) | Lý Do AI Bỏ Sót (Reason AI Missed It) | Kết Quả (Pass/Fail) | Ghi Chú & Bằng Chứng Lỗi |
|:---:|:---|:---:|:---:|:---|:---|:---:|:---|
| 45 | `CHK-HUM-01` | IA-01 (Accessibility) | Toàn hệ thống | Tỷ lệ tương phản màu (Color Contrast Ratio) giữa chữ và nền đạt chuẩn **WCAG 2.1 AA ($\ge$ 4.5:1)**, đặc biệt là chữ trắng trên nền nút vàng (`bg-yellow-500`) và nút cam (`bg-orange-500`). | AI không tính toán giá trị mã màu Hex thực tế khi render nên bỏ qua chuẩn tương phản thị giác WCAG. | **Failed** | **Lỗi (`BUG-05`, `BUG-07`):** Nút "Sửa" (`#FFFFFF` trên `#EAB308`) chỉ đạt **2.15:1**; nút "Tạo mã" (`#FFFFFF` trên `#F97316`) đạt **2.80:1**, đều rớt chuẩn WCAG 2.1 AA ($\ge 4.5:1$). Xem ảnh: [`bug05_product_edit_mass_overwrite.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug05_product_edit_mass_overwrite.png) |
| 46 | `CHK-HUM-02` | IA-02 (Accessibility) | FR-14, 15, 17 | Tất cả các ô `<input>`, `<textarea>` và `<select>` phải có thẻ `<label>` liên kết (`htmlFor`) hoặc thuộc tính `aria-label` thay vì chỉ dùng `placeholder`. | Prompt ban đầu chưa nhấn mạnh tiêu chuẩn hỗ trợ người khuyết tật (A11y); AI chỉ kiểm tra sự tồn tại của `placeholder`. | **Failed** | **Lỗi (`BUG-07`):** 100% ô input thiếu `<label>` và `aria-label`. Ở form Coupon, 2 ô có giá trị mặc định `0` và `1` làm biến mất placeholder khiến người dùng không biết ô đó nhập gì. Xem ảnh: [`bug07_coupon_invalid_values_and_raw_sql_error.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug07_coupon_invalid_values_and_raw_sql_error.png) |
| 47 | `CHK-HUM-03` | IA-01 (Responsive) | Toàn hệ thống | Khi thu nhỏ màn hình xuống kích thước Mobile/Tablet (< 768px), thanh Sidebar (`w-64`) phải tự động thu gọn thành Hamburger Menu thay vì chiếm cứng chiều ngang. | AI đọc cấu trúc CSS tĩnh mà không mô phỏng thay đổi kích thước khung nhìn (Viewport resizing). | **Failed** | **Lỗi (`BUG-08`):** Trên màn hình `375x812`, Sidebar cố định `w-64` (256px) chiếm tới 68% chiều ngang, ép vùng nội dung chính chỉ còn 119px, chữ bị ngắt từng từ. Xem ảnh: [`bug08_responsive_mobile_sidebar_and_table_overflow.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug08_responsive_mobile_sidebar_and_table_overflow.png) |
| 48 | `CHK-HUM-04` | IA-01 (Responsive) | FR-15 & FR-17 | Các lưới form (`grid-cols-2`, `grid-cols-3`) và bảng dữ liệu nhiều cột phải tự động co giãn hoặc có `overflow-x-auto` trên màn hình nhỏ. | AI mặc định kiểm thử trên màn hình Desktop rộng nên bỏ sót hiện tượng tràn bảng và vỡ lưới form. | **Failed** | **Lỗi (`BUG-08`):** Form `grid-cols-3` ở Coupon bị bẹp dúm chồng chéo các ô input, bảng 7 cột bị tràn ngang mất hoàn toàn các cột bên phải trên màn hình hẹp. Xem ảnh: [`bug08_responsive_mobile_sidebar_and_table_overflow.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug08_responsive_mobile_sidebar_and_table_overflow.png) |
| 49 | `CHK-HUM-05` | IA-04 (Empty / Active State) | FR-14, 15, 17 | Trang trống (Empty State) phải có hình minh họa và thông báo thân thiện (FR-24); bảng Coupon phải hiển thị rõ trạng thái vô hiệu hóa (`is_active = 0`). | AI không đối chiếu trường `is_active` trong CSDL với các cột hiển thị trên bảng giao diện. | **Failed** | **Lỗi (`BUG-07`):** Bảng không có Empty State khi danh sách rỗng (vi phạm FR-24); mã `DISABLED50` có `is_active = 0` trong CSDL nhưng hiển thị trên bảng giống hệt mã đang hoạt động. Xem ảnh: [`bug07_coupon_invalid_values_and_raw_sql_error.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug07_coupon_invalid_values_and_raw_sql_error.png) |
| 50 | `CHK-HUM-06` | IA-04 (Micro-interaction) | FR-14, 15, 17 | Chống gửi trùng lặp (Debounce / Disable on Submit): Khi nhấn đúp liên tục vào nút "Thêm mới", "Lưu sản phẩm" hoặc "Tạo mã", nút phải bị khóa tạm thời. | AI chỉ xét luồng sự kiện đơn lẻ (Happy path click) mà bỏ qua độ trễ mạng thực tế khi người dùng bấm liên tiếp. | **Failed** | **Lỗi (`BUG-03`):** Các nút Submit không có thuộc tính `disabled` khi đang chờ phản hồi API, nhấn đúp tạo ra nhiều bản ghi danh mục/sản phẩm trùng lặp. Xem ảnh: [`bug03_category_empty_submit.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug03_category_empty_submit.png) |
| 51 | `CHK-HUM-07` | IA-03 (Keyboard UX) | Toàn hệ thống | Khi di chuyển bằng bàn phím (`Tab` / `Shift+Tab`), các ô `<input>`, `<select>`, `<button>` đang được chọn phải có đường viền **Focus Ring (`outline`)** rõ nét. | AI chỉ nêu khái niệm Tab order chung chung mà quên mất yêu cầu hiển thị trạng thái `:focus-visible` trực quan. | **Passed** | Các thẻ `<input>`, `<select>`, `<button>` giữ được viền focus mặc định của trình duyệt khi nhấn Tab. |
| 52 | `CHK-HUM-08` | IA-04 (State Persistence) | FR-15: Products | Sau khi sửa một sản phẩm trong bảng, dữ liệu hiển thị của các sản phẩm khác phải được bảo toàn nguyên vẹn (FR-15). | AI không đi sâu vào lỗi logic thao tác state cục bộ đặc thù của React (`products.map` ghi đè hàng loạt). | **Failed** | **Lỗi Nghiêm Trọng (`BUG-05`):** Tại `App.jsx:110-114`, khi sửa 1 sản phẩm và bấm Lưu, biến `fakeMassUpdatedProducts` ghi đè tên của **toàn bộ 53 sản phẩm trên bảng** thành tên của sản phẩm vừa sửa! Xem ảnh: [`bug05_product_edit_mass_overwrite.png`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1/bug05_product_edit_mass_overwrite.png) |

---

### 2.3. Bảng Kết quả Thực thi Checklist (Test Execution Summary)

#### A. Thống kê theo Khía cạnh Giao diện (By Interface Aspect):

| Mã Khía Cạnh | Tên Khía Cạnh Giao Diện (Interface Aspect) | Số Mục AI Sinh | Số Mục SV Bổ Sung | Tổng Số Mục | Passed | Failed | Tỷ Lệ Pass (%) |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **IA-01** | General UI Standards (Tiêu chuẩn chung, Accessibility, Responsive) | 11 | 3 | **14** | 6 | 8 | 42.86% |
| **IA-02** | Forms (Biểu mẫu, Validation, Labels, Input Masking) | 13 | 1 | **14** | 7 | 7 | 50.00% |
| **IA-03** | Navigation (Điều hướng, Sidebar, Keyboard Tab Order) | 8 | 1 | **9** | 8 | 1 | 88.89% |
| **IA-04** | Feedback / State (Phản hồi, Loading, Empty State, State Persistence) | 12 | 3 | **15** | 6 | 9 | 40.00% |
| **TỔNG** | **Toàn bộ 4 Khía cạnh Giao diện** | **44** | **8** | **52** | **27** | **25** | **51.92%** |

#### B. Thống kê theo Phân hệ Chức năng (By Functional Requirement):

| Phân Hệ / Màn Hình | Tổng Số Mục Kiểm Thử | Passed | Failed | Số Lượng Bug Tổng Hợp |
|:---|:---:|:---:|:---:|:---:|
| **FR-13: Dashboard (Bảng điều khiển)** | 3 | 1 | 2 | 1 (`BUG-02`) |
| **FR-14: Category Management (Quản lý Danh mục)** | 7 | 5 | 2 | 1 (`BUG-03`) |
| **FR-15 & FR-16: Product Management & CSV Import** | 19 | 11 | 8 | 3 (`BUG-04`, `BUG-05`, `BUG-06`) |
| **FR-17: Coupon Management (Quản lý Mã giảm giá)** | 9 | 5 | 4 | 1 (`BUG-07`) |
| **Toàn hệ thống Web Admin (Login, Sidebar, A11y, Responsive)** | 14 | 5 | 9 | 2 (`BUG-01`, `BUG-08`) |
| **TỔNG CỘNG** | **52** | **27** | **25** | **8 Bugs (`BUG-01` → `BUG-08`)** |

---

### 2.4. Danh sách Báo cáo Lỗi (Bug Reports & GitHub Issues)

> 🔗 **Trang tổng hợp GitHub Issues:** [https://github.com/vdt12a11/HW03/issues](https://github.com/vdt12a11/HW03/issues) (Xem thêm trong file [`Bug_report_link_git_hub.txt`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Bug_report_link_git_hub.txt))

Dưới đây là **8 báo cáo lỗi tổng hợp (Consolidated Bug Reports)** gom nhóm toàn bộ 25 mục checklist bị `Failed` trong quá trình thực thi trên phân hệ Web Admin (`http://localhost:5174`), đã được đẩy trực tiếp lên **GitHub Issues** kèm ảnh chụp màn hình:

---

#### 🔴 **BUG-01: Màn hình Đăng nhập Admin vi phạm tính nhất quán ngôn ngữ Tiếng Việt, thiếu thẻ `<h1>`, thiếu `<label>` và thiếu `type="email"`**
- **GitHub Issue:** [Issue #1 — https://github.com/vdt12a11/HW03/issues/1](https://github.com/vdt12a11/HW03/issues/1)
- **Mã Checklist liên quan:** `CHK-IA01-10`, `CHK-IA04-12`, `CHK-HUM-02`
- **Phân hệ:** Web Admin Login (`App.jsx:188-215`) | **Đặc tả vi phạm:** `FR-02`, `FR-21`, `FR-22`
- **Mức độ nghiêm trọng (Severity):** Medium (Minor UI / Standard Compliance)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Mở trình duyệt truy cập địa chỉ Web Admin `http://localhost:5174` khi chưa đăng nhập.
  2. Quan sát tiêu đề trang, nhãn các ô nhập liệu và nút bấm.
  3. Kiểm tra cấu trúc DOM của trang đăng nhập.
- **Kết quả mong đợi (Expected Result):** Toàn bộ giao diện hiển thị bằng tiếng Việt (`"Đăng nhập Quản trị"`, `"Mật khẩu"`, `"Đăng nhập"`), trang có đúng 1 thẻ `<h1>`, ô Email sử dụng `type="email"` và có thẻ `<label>` đi kèm.
- **Kết quả thực tế (Actual Result):** Giao diện hiển thị tiếng Anh (`"Admin Login"`, `"Password"`, `"Login"`), chỉ có thẻ `<h2>` (không có `<h1>`), ô Email dùng `<input>` mặc định không có `type="email"`, và khi hết hạn phiên (401/403) hệ thống văng về trang này mà không hiển thị thông báo lỗi.
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-01 Admin Login UI Issues](screenshots/task1/bug01_login_english_no_h1.png)

---

#### 🔴 **BUG-02: Dashboard tính sai gấp đôi Tổng doanh thu (Delivered) và thiếu trạng thái Loading khi tải dữ liệu**
- **GitHub Issue:** [Issue #2 — https://github.com/vdt12a11/HW03/issues/2](https://github.com/vdt12a11/HW03/issues/2)
- **Mã Checklist liên quan:** `CHK-IA01-01`, `CHK-IA04-01`
- **Phân hệ:** `FR-13: Dashboard` (`App.jsx:217-220`, `App.jsx:41-59`) | **Đặc tả vi phạm:** `FR-13`, `FR-24`
- **Mức độ nghiêm trọng (Severity):** Critical (Sai lệch số liệu tài chính cốt lõi)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Đăng nhập vào Web Admin với tài khoản `admin@eshop.com` / `Admin123!`.
  2. Mở tab **Dashboard** và đối chiếu con số `"Tổng doanh thu (Delivered)"` với tổng tiền thực tế của 6 đơn hàng có trạng thái `delivered` trong CSDL (`#35: 29,990,000`, `#44: 3,460,000`, `#45: 13,040,000`, `#47: 1,780,000`, `#48: 5,320,000`, `#55: 1,750,000`).
- **Kết quả mong đợi (Expected Result):** Hiển thị trạng thái Loading khi đang tải API, và hiển thị chính xác tổng doanh thu các đơn đã giao là **`55,340,000 ₫`**.
- **Kết quả thực tế (Actual Result):** Không có trạng thái Loading; hàm `orders.reduce` tại `App.jsx:218` nhân đôi giá trị mỗi đơn hàng (`return sum + o.total_amount * 2;`), làm hiển thị sai lệch thành **`110,680,000 ₫`**.
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-02 Dashboard Double Revenue](screenshots/task1/bug02_dashboard_double_revenue.png)

---

#### 🔴 **BUG-03: Quản lý Danh mục cho phép tạo danh mục rỗng, không khóa nút khi bấm đúp và xóa thẳng không có hộp thoại xác nhận**
- **GitHub Issue:** [Issue #3 — https://github.com/vdt12a11/HW03/issues/3](https://github.com/vdt12a11/HW03/issues/3)
- **Mã Checklist liên quan:** `CHK-IA02-02`, `CHK-IA04-04`, `CHK-HUM-06`
- **Phân hệ:** `FR-14: Category Management` (`App.jsx:142-160`, `App.jsx:297-333`) | **Đặc tả vi phạm:** `FR-14`, `FR-24`
- **Mức độ nghiêm trọng (Severity):** High (Làm bẩn dữ liệu CSDL & nguy cơ mất dữ liệu)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Chuyển sang tab **Danh mục**.
  2. Để trống hoàn toàn ô `"Tên danh mục mới"` và bấm nút **Thêm mới**.
  3. Bấm nút **Xóa** ở bất kỳ dòng danh mục nào.
- **Kết quả mong đợi (Expected Result):** Hệ thống chặn submit và báo lỗi `"Tên danh mục không được để trống"` phía trên nút Submit; khi bấm "Xóa" phải hiển thị hộp thoại xác nhận (`Confirm dialog`).
- **Kết quả thực tế (Actual Result):** Hệ thống gửi thẳng chuỗi rỗng `""` xuống Backend và tạo thành công danh mục rỗng (`#5`) trong bảng; bấm nút "Xóa" xóa vĩnh viễn danh mục ngay lập tức mà không hỏi xác nhận.
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-03 Category Empty Submit and No Confirm Delete](screenshots/task1/bug03_category_empty_submit.png)

---

#### 🔴 **BUG-04: Quản lý Sản phẩm cho phép lưu giá âm, không giới hạn độ dài tên gây vỡ bảng, thiếu định dạng dấu phẩy hàng nghìn và sai màu nút Submit**
- **GitHub Issue:** [Issue #4 — https://github.com/vdt12a11/HW03/issues/4](https://github.com/vdt12a11/HW03/issues/4)
- **Mã Checklist liên quan:** `CHK-IA01-06`, `CHK-IA01-07`, `CHK-IA01-11`, `CHK-IA02-03`, `CHK-IA02-04`
- **Phân hệ:** `FR-15: Product Management` (`App.jsx:483-608`) | **Đặc tả vi phạm:** `FR-15`, `FR-21`, `FR-22`
- **Mức độ nghiêm trọng (Severity):** High (Vi phạm ràng buộc dữ liệu & làm vỡ giao diện)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Mở tab **Sản phẩm**.
  2. Quan sát form "Thêm sản phẩm mới" và cột "Giá" dưới bảng danh sách sản phẩm.
  3. Nhập tên sản phẩm dài >120 ký tự liền nhau và nhập Giá tiền = `-50000`, sau đó bấm **Lưu sản phẩm**.
- **Kết quả mong đợi (Expected Result):**
  - Các trường bắt buộc có nhãn và dấu `*` đỏ; nút Submit màu xanh dương (`bg-blue-600`).
  - Từ chối giá tiền $\le 0$ và giới hạn tên tối đa 255 ký tự kèm ngắt dòng (`break-words`/`truncate`).
  - Cột Giá trong bảng định dạng phân cách hàng nghìn (ví dụ: `29,990,000 ₫`).
- **Kết quả thực tế (Actual Result):**
  - Form không có nhãn và dấu `*`; nút "Lưu sản phẩm" dùng màu xanh lá (`bg-green-600`).
  - Cho phép lưu sản phẩm có giá âm `-50000 ₫`; tên sản phẩm dài làm giãn rộng cột Tên SP và đẩy cột Giá/Hành động tràn ra ngoài màn hình (xuất hiện thanh cuộn ngang).
  - Cột Giá hiển thị số thô không có dấu phân cách hàng nghìn (`29990000 ₫`).
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-04 Products Form Validation and Table Overflow](screenshots/task1/bug04_products_form_and_unformatted_price.png)

---

#### 🔴 **BUG-05: Sửa 1 sản phẩm làm ghi đè tên của TẤT CẢ sản phẩm trên giao diện, thiếu thông báo khi thêm mới và nút "Sửa" vi phạm độ tương phản WCAG 2.1**
- **GitHub Issue:** [Issue #5 — https://github.com/vdt12a11/HW03/issues/5](https://github.com/vdt12a11/HW03/issues/5)
- **Mã Checklist liên quan:** `CHK-HUM-08`, `CHK-IA04-09`, `CHK-HUM-01`
- **Phân hệ:** `FR-15: Product Management` (`App.jsx:108-119`, `App.jsx:593`) | **Đặc tả vi phạm:** `FR-15`, `WCAG 2.1 AA`
- **Mức độ nghiêm trọng (Severity):** Critical (Làm hỏng toàn bộ dữ liệu hiển thị trên bảng sản phẩm)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Tại tab **Sản phẩm**, bấm nút **Sửa** (màu vàng) ở dòng sản phẩm đầu tiên.
  2. Đổi tên sản phẩm thành `"iPhone 15 Pro Max (ĐÃ SỬA -> GHI ĐÈ TẤT CẢ)"` và bấm **Lưu sản phẩm**.
  3. Quan sát danh sách toàn bộ sản phẩm trong bảng sau khi lưu.
- **Kết quả mong đợi (Expected Result):** Chỉ duy nhất sản phẩm đang sửa được cập nhật tên mới; các sản phẩm khác giữ nguyên tên cũ. Nút "Sửa" phải có độ tương phản chữ/nền $\ge 4.5:1$.
- **Kết quả thực tế (Actual Result):** Do lỗi logic tại `App.jsx:110-114` (`products.map(p => ({ ...p, name: productForm.name }))`), **tất cả 53 sản phẩm trong bảng đều bị đổi tên giống hệt sản phẩm vừa sửa**! Ngoài ra, nút "Sửa" chữ trắng trên nền vàng (`#FFFFFF` / `#EAB308`) chỉ đạt độ tương phản **2.15:1** (rớt chuẩn WCAG AA).
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-05 Product Edit Mass Overwrite Bug](screenshots/task1/bug05_product_edit_mass_overwrite.png)

---

#### 🔴 **BUG-06: Import CSV không giới hạn đuôi file `.csv`, nhận cả sản phẩm giá âm và không Rollback giao dịch khi có dòng lỗi**
- **GitHub Issue:** [Issue #6 — https://github.com/vdt12a11/HW03/issues/6](https://github.com/vdt12a11/HW03/issues/6)
- **Mã Checklist liên quan:** `CHK-IA02-09`, `CHK-IA04-08`
- **Phân hệ:** `FR-15 & FR-16: CSV Import` (`App.jsx:356-425`, `server.js:199-241`) | **Đặc tả vi phạm:** `FR-16`
- **Mức độ nghiêm trọng (Severity):** High (Vi phạm tính nguyên tử dữ liệu - Atomic Transaction)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Tại mục **Import sản phẩm từ CSV**, chọn một file văn bản `.txt` (`malformed_data.txt`) gồm 2 dòng dữ liệu: dòng 1 có giá âm (`-99000`) và dòng 2 bị trống tên sản phẩm.
  2. Bấm nút **Import 2 sản phẩm**.
- **Kết quả mong đợi (Expected Result):** Chỉ cho phép chọn file `.csv`; kiểm tra `price > 0` và `name` không rỗng trước khi import; nếu bất kỳ dòng nào lỗi thì phải **rollback toàn bộ** (0 sản phẩm được thêm).
- **Kết quả thực tế (Actual Result):** Cho phép tải lên file `.txt`; không kiểm tra giá âm; khi dòng thứ 2 bị lỗi thiếu tên, hệ thống vẫn chèn dòng 1 vào CSDL và báo `"Import hoàn tất: 1/2 sản phẩm được thêm"`.
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-06 CSV Import Partial Commit and File Type Bug](screenshots/task1/bug06_csv_import_no_accept_no_rollback.png)

---

#### 🔴 **BUG-07: Quản lý Mã Giảm Giá cho phép tạo mã giảm > 100%, đơn tối thiểu âm, ngày hết hạn quá khứ, mất nhãn ô input và lộ lỗi SQLite thô**
- **GitHub Issue:** [Issue #7 — https://github.com/vdt12a11/HW03/issues/7](https://github.com/vdt12a11/HW03/issues/7)
- **Mã Checklist liên quan:** `CHK-IA02-11`, `CHK-IA02-12`, `CHK-IA04-11`, `CHK-HUM-01`, `CHK-HUM-02`, `CHK-HUM-05`
- **Phân hệ:** `FR-17: Coupon Management` (`App.jsx:612-774`) | **Đặc tả vi phạm:** `FR-17`, `FR-21`, `FR-22`
- **Mức độ nghiêm trọng (Severity):** High (Sai lệch nghiệp vụ khuyến mãi & lộ thông tin CSDL)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Mở tab **Mã Giảm Giá**, quan sát 2 ô đang có sẵn số `0` và `1` trên form.
  2. Nhập mã `OVER250PCT`, loại `Phần trăm (%)`, giá trị `250`, đơn tối thiểu `-100000`, ngày hết hạn `01/01/2020`, rồi bấm **Tạo mã**.
  3. Tiếp tục nhập mã trùng `SAVE10` và bấm **Tạo mã**.
- **Kết quả mong đợi (Expected Result):** Có `<label>` rõ ràng cho từng ô; chặn phần trăm $> 100\%$, chặn số âm và ngày quá khứ; khi trùng mã phải báo lỗi tiếng Việt phía trên nút Submit; bảng hiển thị rõ trạng thái mã bị vô hiệu hóa (`DISABLED50`).
- **Kết quả thực tế (Actual Result):**
  - Hai ô `min_order_amount` (`0`) và `max_uses_per_user` (`1`) không có `<label>` nên khi có số mặc định thì mất sạch placeholder, người dùng không biết ô đó là gì.
  - Tạo thành công mã giảm `250%`, đơn tối thiểu `-100,000 ₫`, vừa tạo xong đã báo `Hết hạn`.
  - Khi trùng mã `SAVE10`, hệ thống bật `window.alert` hiển thị lỗi SQL thô: `"Lỗi: SQLITE_CONSTRAINT: UNIQUE constraint failed: coupons.code"`.
  - Mã `DISABLED50` (`is_active = 0`) hiển thị trên bảng y hệt mã đang hoạt động.
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-07 Coupon Validation and Raw SQL Error](screenshots/task1/bug07_coupon_invalid_values_and_raw_sql_error.png)

---

#### 🔴 **BUG-08: Giao diện Web Admin vỡ bố cục nghiêm trọng trên màn hình nhỏ (Mobile Responsive) và Sidebar không hỗ trợ điều hướng bằng bàn phím**
- **GitHub Issue:** [Issue #8 — https://github.com/vdt12a11/HW03/issues/8](https://github.com/vdt12a11/HW03/issues/8)
- **Mã Checklist liên quan:** `CHK-IA03-08`, `CHK-HUM-03`, `CHK-HUM-04`
- **Phân hệ:** Toàn hệ thống Web Admin (`App.jsx:223-275`, `App.jsx:636`, `App.jsx:716`) | **Đặc tả vi phạm:** `IA-01 Responsive`, `IA-03 Navigation`, `FR-21`
- **Mức độ nghiêm trọng (Severity):** Medium (Không thể thao tác trên thiết bị di động/màn hình hẹp và bằng bàn phím)
- **Các bước tái hiện (Steps to Reproduce):**
  1. Thu nhỏ kích thước trình duyệt về khung nhìn Mobile (`375x812` px) tại trang Web Admin.
  2. Quan sát thanh Sidebar bên trái, form tạo mã giảm giá (`grid-cols-3`) và bảng danh sách bên dưới.
  3. Nhấn phím `Tab` trên bàn phím để di chuyển qua các mục trên thanh Sidebar.
- **Kết quả mong đợi (Expected Result):** Thanh Sidebar tự động thu gọn thành menu đóng/mở (Drawer/Hamburger); lưới form tự động chuyển về 1 cột (`grid-cols-1 md:grid-cols-3`); các mục Sidebar có thể focus bằng phím `Tab`.
- **Kết quả thực tế (Actual Result):** Sidebar giữ cứng chiều rộng `w-64` (256px), chiếm gần 70% màn hình và ép vùng nội dung chính chỉ còn 119px; tiêu đề bị ngắt từng chữ mỗi dòng, 3 cột input đè lên nhau không thể nhập liệu, bảng 7 cột bị cắt mất phần bên phải; nhấn `Tab` bỏ qua toàn bộ các thẻ `<li>` trên Sidebar.
- **Ảnh chụp màn hình minh chứng:**
  ![BUG-08 Mobile Responsive Layout Breakdown](screenshots/task1/bug08_responsive_mobile_sidebar_and_table_overflow.png)

---

## 3. Task 2: Đánh giá Usability (Usability Evaluation - 40 Điểm)

### 3.1. Kịch bản Thực nghiệm (Goal-Oriented Task Scenario)
> **Ngữ cảnh:** "Bạn cần mua một chiếc áo khoác mùa đông có giá dưới 500,000 ₫ và tiến hành đặt hàng với mã giảm giá..."

### 3.2. Bảng 7 Người Tham Gia Khảo Sát Thật (Verifiable Details)
*(Tuân thủ Anti-Cheat: Họ tên, Zalo/Phone che 4 số giữa, nghề nghiệp ngoài ngành IT)*

### 3.3. Kết quả Thang đo SUS / UEQ-S & Phân tích Điểm Số
*(Bảng tính điểm SUS từng người và trung bình toàn đợt)*

---

## 4. Task 3: Kiểm thử Đa Trình duyệt & Đa Nền tảng (Cross-Browser / Platform - 20 Điểm)
- Nền tảng 1: Google Chrome (Desktop Windows)
- Nền tảng 2: Mozilla Firefox (Desktop Windows)
- Nền tảng 3: Mobile (Expo Go / Chrome Mobile trên Android)
*(Hình ảnh chụp kèm Watermark MSSV: 23120397 - VĂN ĐỨC TUẤN)*

---

## 5. Task 4: Xây dựng & Tự động hóa với Agent Skill (10 Điểm)
- Mã nguồn Skill: thư mục `skills/`
- Link video minh chứng: *(Đính kèm link YouTube)*

---

## 6. Đánh giá Phản biện AI (AI Critique - 200–300 Từ)
*(Đoạn văn phản biện bắt buộc 200–300 từ về những hạn chế của mô hình AI trong kiểm thử GUI)*

---

## 7. Bảng Tự Đánh Giá Điểm (Self-Assessment Rubric)

| STT | Tiêu chí đánh giá | Điểm tối đa | Điểm tự đánh giá | Minh chứng chính |
|:---:|:---|:---:|:---:|:---|
| 1 | **Task 1:** GUI Checklist (Design + Execution + Bug Report) | 30 | - | Checklist > 40 items, GitHub Issues, Excel file |
| 2 | **Task 2:** Usability Evaluation (Scenario + 7 Sessions + Analysis) | 40 | - | Bảng 7 người dùng, điểm SUS, ghi chú quan sát |
| 3 | **Task 3:** Cross-Browser / Platform ($\ge$ 3 platforms) | 20 | - | Ảnh chụp màn hình có watermark 3 nền tảng |
| 4 | **Agent Skills:** Kỹ năng tự động hóa và Video Demo | 10 | - | Mã nguồn skill + Video YouTube |
| **TỔNG** | | **100** | **-** | |

