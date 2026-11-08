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

#### Bảng Checklist 44 Items:

| STT | Mã Tiêu Chí (Item ID) | Khía Cạnh (Aspect) | Phân Hệ / Chức Năng | Mục Tiêu Kiểm Thử (GUI Checklist Item) | Kết Quả (Pass/Fail) | Ghi Chú & Bằng Chứng Lỗi (Notes / Bug Evidence) |
|:---:|:---|:---:|:---|:---|:---:|:---|
| 1 | `CHK-IA01-01` | IA-01 | FR-13: Dashboard | Thẻ doanh thu định dạng số tiền VND chuẩn kèm dấu phân cách hàng nghìn (ví dụ: `1,000,000 ₫`). | - | *Chờ thực thi trên SUT* |
| 2 | `CHK-IA01-02` | IA-01 | FR-13: Dashboard | Cỡ chữ và độ tương phản màu sắc của số liệu KPI nổi bật hơn tiêu đề nhãn (Visual Hierarchy). | - | *Chờ thực thi trên SUT* |
| 3 | `CHK-IA01-03` | IA-01 | FR-14: Categories | Bảng danh mục có căn lề chuẩn: văn bản căn trái, ID số căn giữa hoặc trái đồng nhất. | - | *Chờ thực thi trên SUT* |
| 4 | `CHK-IA01-04` | IA-01 | FR-14: Categories | Khoảng cách padding giữa các dòng trong bảng danh mục đủ thoáng, không dính sát chữ. | - | *Chờ thực thi trên SUT* |
| 5 | `CHK-IA01-05` | IA-01 | FR-15: Products | Ảnh thumbnail sản phẩm giữ đúng tỷ lệ (aspect ratio), không bị méo mó (stretch/squash). | - | *Chờ thực thi trên SUT* |
| 6 | `CHK-IA01-06` | IA-01 | FR-15: Products | Tên sản phẩm quá dài (trên 100 ký tự) không làm vỡ bố cục bảng hoặc tràn ra ngoài khung. | - | *Chờ thực thi trên SUT* |
| 7 | `CHK-IA01-07` | IA-01 | FR-15: Products | Cột giá tiền sản phẩm hiển thị nhất quán ký hiệu đơn vị tiền tệ `₫` phía sau số tiền. | - | *Chờ thực thi trên SUT* |
| 8 | `CHK-IA01-08` | IA-01 | FR-17: Coupons | Mã code coupon hiển thị bằng font chữ Monospace hoặc in hoa để dễ phân biệt ký tự tương tự. | - | *Chờ thực thi trên SUT* |
| 9 | `CHK-IA01-09` | IA-01 | FR-17: Coupons | Nhãn trạng thái hết hạn (`Hết hạn`) sử dụng màu cảnh báo (màu đỏ) dễ nhận diện thị giác. | - | *Chờ thực thi trên SUT* |
| 10 | `CHK-IA01-10` | IA-01 | Toàn hệ thống | Bộ font chữ hệ thống đồng nhất, không bị lỗi font Tiếng Việt (Unicode font corruption). | - | *Chờ thực thi trên SUT* |
| 11 | `CHK-IA01-11` | IA-01 | Toàn hệ thống | Màu sắc các nút hành động tuân thủ nguyên tắc UX: Xanh lá (Lưu/Tạo), Vàng (Sửa), Đỏ (Xóa). | - | *Chờ thực thi trên SUT* |
| 12 | `CHK-IA02-01` | IA-02 | FR-14: Categories | Input tên danh mục có placeholder rõ ràng (`Tên danh mục mới`). | - | *Chờ thực thi trên SUT* |
| 13 | `CHK-IA02-02` | IA-02 | FR-14: Categories | Không cho phép gửi form (submit) khi ô tên danh mục để trống hoặc chỉ toàn khoảng trắng. | - | *Chờ thực thi trên SUT* |
| 14 | `CHK-IA02-03` | IA-02 | FR-15: Products | Các trường bắt buộc trong form sản phẩm (Tên, Giá) có dấu sao đỏ (`*`) hoặc thuộc tính required. | - | *Chờ thực thi trên SUT* |
| 15 | `CHK-IA02-04` | IA-02 | FR-15: Products | Input "Giá tiền" chỉ chấp nhận ký tự số, ngăn chặn nhập chữ cái hoặc ký tự đặc biệt âm (`-`). | - | *Chờ thực thi trên SUT* |
| 16 | `CHK-IA02-05` | IA-02 | FR-15: Products | Dropdown chọn danh mục hiển thị đầy đủ danh sách các danh mục hiện có trong cơ sở dữ liệu. | - | *Chờ thực thi trên SUT* |
| 17 | `CHK-IA02-06` | IA-02 | FR-15: Products | Textarea mô tả sản phẩm có độ cao hợp lý và cho phép cuộn/co giãn có giới hạn. | - | *Chờ thực thi trên SUT* |
| 18 | `CHK-IA02-07` | IA-02 | FR-15: Products | Form tự động điền lại toàn bộ dữ liệu cũ của sản phẩm khi bấm nút "Sửa". | - | *Chờ thực thi trên SUT* |
| 19 | `CHK-IA02-08` | IA-02 | FR-15: Products | Nút "Hủy sửa" xuất hiện ở chế độ sửa và reset form về trạng thái thêm mới khi nhấn. | - | *Chờ thực thi trên SUT* |
| 20 | `CHK-IA02-09` | IA-02 | FR-15: Products | File input (Import CSV) giới hạn định dạng file chấp nhận chỉ là `.csv`. | - | *Chờ thực thi trên SUT* |
| 21 | `CHK-IA02-10` | IA-02 | FR-17: Coupons | Input mã coupon tự động chuyển thành chữ in hoa (uppercase) khi người dùng gõ. | - | *Chờ thực thi trên SUT* |
| 22 | `CHK-IA02-11` | IA-02 | FR-17: Coupons | Khi chọn loại coupon là "Phần trăm", giá trị giảm bị chặn không cho nhập lớn hơn 100%. | - | *Chờ thực thi trên SUT* |
| 23 | `CHK-IA02-12` | IA-02 | FR-17: Coupons | Input "Ngày hết hạn" hiển thị datepicker và không cho phép chọn ngày trong quá khứ. | - | *Chờ thực thi trên SUT* |
| 24 | `CHK-IA02-13` | IA-02 | FR-17: Coupons | Input "Số lần dùng tối đa/người" có giá trị tối thiểu (`min="1"`). | - | *Chờ thực thi trên SUT* |
| 25 | `CHK-IA03-01` | IA-03 | Toàn hệ thống | Sidebar navigation hiển thị nổi bật mục menu đang được chọn (Active Tab Highlight). | - | *Chờ thực thi trên SUT* |
| 26 | `CHK-IA03-02` | IA-03 | Toàn hệ thống | Con trỏ chuột chuyển thành hình bàn tay (`cursor: pointer`) khi rê qua các mục menu sidebar. | - | *Chờ thực thi trên SUT* |
| 27 | `CHK-IA03-03` | IA-03 | Toàn hệ thống | Chuyển đổi qua lại giữa các tab (Dashboard, Categories, Products, Coupons) mượt mà, không giật lag. | - | *Chờ thực thi trên SUT* |
| 28 | `CHK-IA03-04` | IA-03 | Toàn hệ thống | Nút "Đăng xuất" có vị trí tách biệt và màu sắc cảnh báo để tránh bấm nhầm. | - | *Chờ thực thi trên SUT* |
| 29 | `CHK-IA03-05` | IA-03 | Toàn hệ thống | Nhấn "Đăng xuất" xóa sạch token và đưa người dùng quay về màn hình đăng nhập Admin. | - | *Chờ thực thi trên SUT* |
| 30 | `CHK-IA03-06` | IA-03 | FR-15: Products | Link "Tải file mẫu (template.csv)" hoạt động và tải xuống file CSV hợp lệ. | - | *Chờ thực thi trên SUT* |
| 31 | `CHK-IA03-07` | IA-03 | FR-15: Products | Bảng danh sách sản phẩm dài có thanh cuộn hoặc cơ chế phân trang để quản lý cuộn trang. | - | *Chờ thực thi trên SUT* |
| 32 | `CHK-IA03-08` | IA-03 | Toàn hệ thống | Thứ tự nhấn phím Tab (Tab navigation order) di chuyển tuần tự qua các trường input hợp lý. | - | *Chờ thực thi trên SUT* |
| 33 | `CHK-IA04-01` | IA-04 | FR-13: Dashboard | Khi đang tải dữ liệu doanh thu hoặc đơn hàng, có trạng thái hiển thị loading/skeleton. | - | *Chờ thực thi trên SUT* |
| 34 | `CHK-IA04-02` | IA-04 | FR-14: Categories | Sau khi thêm mới danh mục thành công, ô input tự động xóa trắng để sẵn sàng nhập tiếp. | - | *Chờ thực thi trên SUT* |
| 35 | `CHK-IA04-03` | IA-04 | FR-14: Categories | Danh sách danh mục được refresh tự động ngay sau khi thêm hoặc xóa mà không cần F5. | - | *Chờ thực thi trên SUT* |
| 36 | `CHK-IA04-04` | IA-04 | FR-14: Categories | Có hộp thoại xác nhận (Confirm dialog) trước khi thực hiện hành động Xóa danh mục. | - | *Chờ thực thi trên SUT* |
| 37 | `CHK-IA04-05` | IA-04 | FR-15: Products | Khi đường dẫn ảnh URL bị lỗi (broken link), hiển thị ảnh thay thế placeholder dự phòng. | - | *Chờ thực thi trên SUT* |
| 38 | `CHK-IA04-06` | IA-04 | FR-15: Products | Hiển thị bảng xem trước (Preview table) ngay khi người dùng chọn file CSV trước khi bấm Import. | - | *Chờ thực thi trên SUT* |
| 39 | `CHK-IA04-07` | IA-04 | FR-15: Products | Nút "Import" bị vô hiệu hóa (disabled) và đổi nhãn thành "Đang import..." trong lúc xử lý file. | - | *Chờ thực thi trên SUT* |
| 40 | `CHK-IA04-08` | IA-04 | FR-15: Products | Thông báo kết quả Import CSV rõ ràng: hiển thị số dòng thành công hoặc chi tiết các dòng lỗi. | - | *Chờ thực thi trên SUT* |
| 41 | `CHK-IA04-09` | IA-04 | FR-15: Products | Bấm lưu/sửa sản phẩm hiển thị thông báo phản hồi (Alert/Toast) cho người dùng biết trạng thái. | - | *Chờ thực thi trên SUT* |
| 42 | `CHK-IA04-10` | IA-04 | FR-17: Coupons | Form tạo mã giảm giá tự động reset về mặc định sau khi tạo mã thành công. | - | *Chờ thực thi trên SUT* |
| 43 | `CHK-IA04-11` | IA-04 | FR-17: Coupons | Khi tạo mã coupon bị lỗi (ví dụ mã đã tồn tại), hiển thị thông báo lỗi cụ thể từ máy chủ. | - | *Chờ thực thi trên SUT* |
| 44 | `CHK-IA04-12` | IA-04 | Toàn hệ thống | Khi token đăng nhập hết hạn hoặc bị lỗi 401/403, tự động chuyển về trang đăng nhập có báo lỗi. | - | *Chờ thực thi trên SUT* |

### 2.2. Human Review & Phản biện các điểm AI bỏ sót (Student's Critical Review & Additions)

#### A. Phân tích nguyên nhân tại sao AI bỏ sót (Why the AI Missed These Items):
1. **Thiên kiến dựa trên cấu trúc tĩnh (Code-Driven Bias):** AI sinh checklist chủ yếu dựa trên các thẻ HTML/JSX hiện diện tường minh trong mã nguồn (`<input>`, `<button>`, `<table>`). Do đó, AI bỏ qua các thuộc tính phi chức năng ẩn như độ tương phản màu sắc thực tế trên màn hình hoặc khả năng tương thích với trình đọc màn hình (Screen Reader).
2. **Thiếu bối cảnh môi trường hiển thị động (Lack of Viewport & Rendering Context):** AI không trực tiếp "nhìn" thấy giao diện khi thu nhỏ cửa sổ trình duyệt xuống kích thước Mobile/Tablet (375px - 768px) hoặc khi bật chế độ Dark Mode của hệ điều hành, dẫn đến bỏ sót các lỗi vỡ khung (overflow) và che khuất thanh điều hướng (Sidebar cố định `w-64`).
3. **Bỏ qua hành vi tương tác bất thường của người dùng (Edge-case Micro-interactions):** AI giả định người dùng luôn bấm chuột đơn lẻ tuần tự, nên quên kiểm tra các kịch bản thực tế như nhấn đúp liên tục (Double-click / Rapid-click) vào nút "Lưu sản phẩm" hoặc "Tạo mã" gây gửi trùng lặp request API.

#### B. Danh sách 8 Tiêu chí Kiểm thử do Sinh viên Bổ sung (Human-Added Checklist Items):

| STT | Mã Tiêu Chí (Item ID) | Khía Cạnh (Aspect) | Phân Hệ / Chức Năng | Mục Tiêu Kiểm Thử Bổ Sung (Human-Added Item) | Lý Do AI Bỏ Sót (Reason AI Missed It) | Kết Quả (Pass/Fail) | Ghi Chú & Bằng Chứng Lỗi |
|:---:|:---|:---:|:---|:---|:---|:---:|:---|
| 45 | `CHK-HUM-01` | IA-01 (Accessibility) | Toàn hệ thống | Tỷ lệ tương phản màu (Color Contrast Ratio) giữa chữ và nền đạt chuẩn **WCAG 2.1 AA ($\ge$ 4.5:1)**, đặc biệt là chữ xám trên nền trắng và chữ trắng trên nút vàng (`bg-yellow-500`). | AI không tính toán giá trị mã màu Hex thực tế khi render nên bỏ qua chuẩn tương phản thị giác WCAG. | - | *Chờ thực thi trên SUT* |
| 46 | `CHK-HUM-02` | IA-02 (Accessibility) | FR-14, 15, 17 | Tất cả các ô `<input>` và `<select>` phải có thẻ `<label>` liên kết (`htmlFor`) hoặc thuộc tính `aria-label` để hỗ trợ trình đọc màn hình (Screen Reader), thay vì chỉ dùng `placeholder`. | Prompt ban đầu chưa nhấn mạnh tiêu chuẩn hỗ trợ người khuyết tật (A11y); AI chỉ kiểm tra sự tồn tại của `placeholder`. | - | *Chờ thực thi trên SUT* |
| 47 | `CHK-HUM-03` | IA-01 (Responsive) | Toàn hệ thống | Khi thu nhỏ màn hình xuống kích thước Mobile/Tablet (< 768px), thanh Sidebar (`w-64`) phải tự động thu gọn thành Hamburger Menu thay vì chiếm cứng chiều ngang làm hẹp vùng nội dung. | AI đọc cấu trúc CSS tĩnh mà không mô phỏng thay đổi kích thước khung nhìn (Viewport resizing). | - | *Chờ thực thi trên SUT* |
| 48 | `CHK-HUM-04` | IA-01 (Responsive) | FR-15 & FR-17 | Các bảng dữ liệu nhiều cột (Bảng Sản phẩm, Bảng Mã giảm giá 7 cột) phải có thanh cuộn ngang (`overflow-x-auto`) trên màn hình nhỏ, không làm vỡ layout trang. | AI mặc định kiểm thử trên màn hình Desktop rộng nên bỏ sót hiện tượng tràn bảng (Table Horizontal Overflow). | - | *Chờ thực thi trên SUT* |
| 49 | `CHK-HUM-05` | IA-01 (Dark Mode / RTL) | Toàn hệ thống | Khi trình duyệt/hệ điều hành bật **Dark Mode**, màu chữ trong các ô `<input>` và `<select>` không bị biến thành chữ trắng trên nền trắng gây mù chữ. | AI không kiểm thử sự xung đột giữa CSS mặc định của hệ thống (System Theme) và các class Tailwind thiếu khai báo màu chữ tường minh. | - | *Chờ thực thi trên SUT* |
| 50 | `CHK-HUM-06` | IA-04 (Micro-interaction) | FR-14, 15, 17 | Chống gửi trùng lặp (Debounce / Disable on Submit): Khi nhấn đúp liên tục (Rapid double-click) vào nút "Thêm mới", "Lưu sản phẩm" hoặc "Tạo mã", nút phải bị khóa tạm thời để không tạo ra 2 bản ghi trùng nhau. | AI chỉ xét luồng sự kiện đơn lẻ (Happy path click) mà bỏ qua độ trễ mạng thực tế khi người dùng bấm liên tiếp. | - | *Chờ thực thi trên SUT* |
| 51 | `CHK-HUM-07` | IA-03 (Keyboard UX) | Toàn hệ thống | Khi di chuyển bằng bàn phím (`Tab` / `Shift+Tab`), phần tử đang được chọn phải có đường viền **Focus Ring (`outline`)** rõ nét để người dùng không dùng chuột biết mình đang ở đâu. | AI chỉ nêu khái niệm Tab order chung chung mà quên mất yêu cầu hiển thị trạng thái `:focus-visible` trực quan. | - | *Chờ thực thi trên SUT* |
| 52 | `CHK-HUM-08` | IA-04 (State Persistence) | FR-15: Products | Sau khi sửa một sản phẩm trong bảng, dữ liệu hiển thị của các sản phẩm khác phải được bảo toàn nguyên vẹn (không bị ghi đè nhầm tên hoặc trạng thái trên giao diện). | AI không đi sâu vào lỗi logic thao tác state cục bộ đặc thù của React (`products.map` ghi đè hàng loạt trong code SUT). | - | *Chờ thực thi trên SUT* |

### 2.3. Bảng Kết quả Thực thi Checklist (Execution Summary)
*(Tổng hợp số lượng Passed / Failed)*

### 2.4. Danh sách Báo cáo Lỗi (Bug Report)
*(Đính kèm hình ảnh và link GitHub Issues)*

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

