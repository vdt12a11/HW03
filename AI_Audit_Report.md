# BÁO CÁO KIỂM TOÁN AI (AI AUDIT REPORT) — HW03

> **Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**  
> **Môn học:** CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)  
> **Phụ lục bắt buộc:** Báo cáo kiểm toán việc sử dụng AI theo biểu mẫu `[AI-02] - FIT@HCMUS`

---

## 1. Thông tin Sinh viên

| Mục | Giá trị |
|:---|:---|
| **Họ tên sinh viên (in hoa):** | VĂN ĐỨC TUẤN |
| **MSSV:** | 23120397 |
| **Lớp / Khóa:** | Kiểm thử phần mềm - CQ2023/3 |
| **Mã bài tập:** | HW03-AI (GUI & Usability) |
| **Ngày bắt đầu làm bài:** | 2026-11-08 |
| **Công cụ AI chính đã dùng:** | Antigravity (Gemini 3.8 Flash / Google DeepMind) |
| **Tuyên bố sử dụng AI:** | [x] Có &nbsp;&nbsp;&nbsp;&nbsp; [ ] Không |

---

## 2. Hướng dẫn & Quy ước đánh giá (Evaluation Criteria)
- Mỗi artifact AI sinh (checklist, test scenario, SUS scale, bug report, prompt design...) được ghi thành **1 hàng**.
- **Prompt:** Ghi nguyên văn không paraphrase.
- **Output AI:** Tóm tắt chính xác hoặc trích xuất đầu ra của AI.
- **Verdict:** Đánh giá `VALID` (hợp lệ), `INVALID` (sai logic/yêu cầu), `INCOMPLETE` (thiếu khía cạnh giao diện, edge cases).
- **Lý do (ISTQB / Specification):** Giải thích căn cứ kỹ thuật, tiêu chuẩn giao diện (IA-01 đến IA-04, WCAG, responsive).
- **Bản SV sửa:** Thể hiện rõ các chỉnh sửa, bổ sung, sàng lọc của sinh viên để hoàn thiện artifact.

---

## 3. Bảng Kiểm Toán AI (AI Audit Ledger - 5 Cột)

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB / Tiêu chuẩn GUI) | (5) Bản SV sửa (Human Review & Changes) |
|:---|:---|:---:|:---|:---|
| **Artifact #1: Initial GUI Checklist (>40 items)**<br>**Tool:** Antigravity (Gemini 3.8 Flash)<br>**Thời gian:** 2026-11-08 22:46:35<br>**Prompt:** `tôi chọn FR-13,14,15,17 trong file @2026.HW03.GUI Usability_En.pdf để làm task 1, bạn hãy làm task 1 sinh ra các check list phù hợp với cchwucs năng tôi đã chọn` | Sinh bộ tiêu chí kiểm thử giao diện ban đầu gồm **44 items** bao phủ đầy đủ 4 phân hệ Web Admin được chọn: FR-13 (Dashboard), FR-14 (Categories), FR-15 (Products CRUD + CSV Import), FR-17 (Coupons). Bộ checklist phân bổ đều qua 4 khía cạnh: IA-01 (11 items), IA-02 (13 items), IA-03 (8 items), IA-04 (12 items) trong file [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md). | `INCOMPLETE` | **Điểm đạt:** Đúng format chuẩn của đề bài, bám sát các form thực tế của Web Admin SUT, đủ số lượng > 40 items.<br><br>**Hạn chế & Thiếu sót của AI:**<br>1. *Accessibility (WCAG 2.1):* Chưa kiểm tra tỉ lệ tương phản màu (Color Contrast ratio tối thiểu 4.5:1) và các thuộc tính `aria-label` cho người khiếm thị đọc màn hình.<br>2. *Responsive Layout:* Thiếu kiểm tra giao diện trên màn hình độ phân giải thấp (Sidebar bị che khuất nội dung, vỡ bảng table).<br>3. *Micro-interactions & State:* Chưa có mục kiểm tra nút bấm kép (Double-click submit), hiển thị Focus Ring và bảo toàn state khi cập nhật. | **Đã bổ sung 8 tiêu chí mới (`CHK-HUM-01` → `CHK-HUM-08`) tại Mục 2.2 của `Main_report.md`:**<br>- **+[Bổ sung]** `CHK-HUM-01`: Độ tương phản màu chuẩn WCAG 2.1 AA ($\ge$ 4.5:1).<br>- **+[Bổ sung]** `CHK-HUM-02`: Thẻ `<label>` và `aria-label` cho trình đọc màn hình.<br>- **+[Bổ sung]** `CHK-HUM-03` & `04`: Responsive Sidebar & Table Horizontal Overflow trên màn hình nhỏ.<br>- **+[Bổ sung]** `CHK-HUM-05`: Tương thích Empty State & trạng thái `is_active`.<br>- **+[Bổ sung]** `CHK-HUM-06`: Chống Rapid Double-click gây gửi trùng API.<br>- **+[Bổ sung]** `CHK-HUM-07`: Đường viền Focus Ring rõ ràng khi nhấn Tab.<br>- **+[Bổ sung]** `CHK-HUM-08`: Bảo toàn State danh sách khi sửa 1 phần tử (Tổng cộng nâng lên **52 items**). |
| **Artifact #2: GUI Checklist Execution, 8 Bug Reports & GitHub Issues**<br>**Tool:** Antigravity (Gemini 4 Argon)<br>**Thời gian:** 2026-11-08 22:58:29 & 23:20:41<br>**Prompt:** `bạn hãy execute` / `https://github.com/vdt12a11/HW03 đây là link repo bạn hãy push lên issue các bug mà bạn tìm đc (nhớ kèm theo hình ảnh screen shot mà bạn đã chup)` | Thực thi toàn bộ **52 tiêu chí GUI Checklist** trực tiếp trên SUT Web Admin (`http://localhost:5174` & Backend `http://localhost:3000`).<br>- Kết quả: **27 Passed (51.92%) / 25 Failed (48.08%)**.<br>- Tự động chụp **8 ảnh màn hình minh chứng lỗi** (`screenshots/task1/bug01..bug08.png`).<br>- Lập **8 Báo cáo lỗi chi tiết (`BUG-01` → `BUG-08`)** trong [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md), xuất file [`GUI_Checklist_HW03.xlsx`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/GUI_Checklist_HW03.xlsx) và đẩy tự động lên **8 GitHub Issues (`#1` → `#8`)** tại `https://github.com/vdt12a11/HW03/issues` kèm ảnh chụp màn hình nhúng trực tiếp. | `VALID` | **Căn cứ ISTQB & Đặc tả SUT (`README.md`):**<br>- Đối chiếu chính xác với các yêu cầu nghiệp vụ `FR-13`, `FR-14`, `FR-15`, `FR-16`, `FR-17` và yêu cầu giao diện `FR-21` → `FR-24`, `WCAG 2.1 AA`.<br>- Phát hiện chính xác các lỗi nghiêm trọng trong SUT như nhân đôi doanh thu (`total_amount * 2`), ghi đè tên toàn bộ sản phẩm khi sửa 1 sản phẩm (`fakeMassUpdatedProducts`), thiếu rollback CSV, tạo danh mục rỗng, mã giảm giá `250%` và lộ lỗi `SQLITE_CONSTRAINT`. | **Rà soát & Tinh chỉnh của SV:**<br>- **+[Chỉnh sửa]** Chuyển hướng `window.alert` sang banner hiển thị trực quan trên góc phải màn hình để ảnh chụp minh chứng bắt trọn thông báo lỗi SQLite thô.<br>- **+[Kiểm chứng]** Xác nhận tổng doanh thu thực tế từ 6 đơn `delivered` trong SQLite là `55,340,000 ₫` so với con số `110,680,000 ₫` hiển thị trên UI.<br>- **+[Đóng gói & Đồng bộ]** Xuất 2 sheet trong `GUI_Checklist_HW03.xlsx` và liên kết 8 GitHub Issues vào `Main_report.md` & `Bug_report_link_git_hub.txt`. |
| **Artifact #3: Cross-Browser / Cross-Platform Execution (4 Platforms & 16 Full-Browser Screenshots)**<br>**Tool:** Antigravity (Gemini 4 Argon)<br>**Thời gian:** 2026-11-08 23:34:13 & 23:42:29<br>**Prompt:** `Bạn hãy thực hiện task 3 cho tôi` / `bạn hãy làm tiếp tục công việc task 3 nhưng thêm 1 chú ý ảnh screen shot của bạn phải chụp nguyên trình duyệt` | Thực thi lặp lại toàn bộ **52 tiêu chí GUI Checklist** (`FR-13`, `FR-14`, `FR-15`, `FR-17`) trên **4 nền tảng trình duyệt & thiết bị**:<br>1. `P1`: Google Chrome 146.0 Desktop (`Blink/V8`, Windows 11, `1366×900`) — **27 Pass / 25 Fail (51.92%)**<br>2. `P2`: Mozilla Firefox 157.0 Desktop (`Gecko/SpiderMonkey`, Windows 11, `1366×900`) — **27 Pass / 25 Fail (51.92%)**<br>3. `P3`: Apple Safari / WebKit 27.2 (`WebKit`, macOS Desktop, `1280×860`) — **26 Pass / 26 Fail (50.00%)**<br>4. `P4`: Android Chrome Mobile (`Blink Mobile`, Google Pixel 7 Android 14, `412×915 Touch`) — **17 Pass / 35 Fail (32.69%)**<br>- Chụp bộ **16 ảnh chụp nguyên cửa sổ trình duyệt** (`screenshots/task3/P1..P4_FR13..FR17.png`) hiển thị đầy đủ thanh Tab, nút điều khiển cửa sổ, thanh địa chỉ `http://localhost:5174/`, thanh trạng thái OS và thông tin sinh viên `23120397 - VĂN ĐỨC TUẤN - 23120397@student.hcmus.edu.vn` ngay trong các ô input. | `VALID` | **Căn cứ ISTQB Cross-Browser Testing & Đặc tả HW03 (Mục 6 & Mục 11):**<br>- Bao phủ $\ge 3$ nền tảng (thực hiện trên 4 nền tảng: Chrome, Firefox, Safari/WebKit và Android Chrome Mobile).<br>- Phát hiện chính xác sự khác biệt giữa các Rendering Engine: Firefox Gecko render `<input type="file">` là `Browse... No file selected.` và luôn hiện spinner `⇕` trên `<input type="number">`, trong khi Blink/WebKit render `Choose File`; Safari/WebKit mặc định bỏ qua `<button>` khi nhấn `Tab` (`CHK-IA03-01`); đặc biệt trên Android Chrome Mobile (`412×915`), Sidebar cố định `w-64` (`256px`) chiếm 62.1% màn hình làm sụp đổ hoàn toàn bố cục (`10 tiêu chí chuyển từ Pass trên Desktop sang Fail trên Mobile`). | **Rà soát & Yêu cầu điều chỉnh của SV:**<br>- **+[Yêu cầu bổ sung]** Yêu cầu AI chụp **nguyên cửa sổ trình duyệt** (thay vì chỉ chụp vùng nội dung trang web) để thấy rõ khung trình duyệt, thanh Tab, thanh URL `http://localhost:5174/` và thanh Taskbar/Status bar của từng nền tảng.<br>- **+[Sửa lỗi điều hướng]** Phát hiện và sửa lỗi phân biệt hoa/thường khi click mục `"Mã Giảm Giá"` trên thanh Sidebar để ảnh `FR17_Coupons.png` hiển thị đúng màn hình Quản lý Mã Giảm Giá trên cả 4 nền tảng. |

---

