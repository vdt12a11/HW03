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
Để đảm bảo độ bao phủ sâu rộng và không bị trùng lặp, bài báo cáo chọn tổ hợp các màn hình trọng yếu trong luồng mua sắm chính:
- **Màn hình 1 (FR-06): Chi tiết sản phẩm (Product Detail View)**
- **Màn hình 2 (FR-07): Giỏ hàng (Shopping Cart)**
- **Màn hình 3 (FR-08 & FR-09): Thanh toán & Áp dụng mã giảm giá (Checkout & Discount Coupon)**

### 1.2. Lựa chọn Luồng End-to-End cho Task 2 (Usability Flow)
- **Luồng người dùng:** Tìm kiếm sản phẩm $\rightarrow$ Xem chi tiết $\rightarrow$ Thêm vào giỏ hàng $\rightarrow$ Áp dụng mã giảm giá $\rightarrow$ Điền thông tin giao hàng & Xác nhận đặt hàng.

---

## 2. Task 1: Thiết kế & Thực thi GUI Checklist (30 Điểm)

### 2.1. Bảng GUI Checklist Tổng Hợp (Dự kiến > 40 Items)
Checklist được chia đều trên 4 khía cạnh giao diện chuẩn của đề bài:
- **IA-01: General UI Standards** (Typography, Spacing, Visual Hierarchy, Color Contrast)
- **IA-02: Forms** (Validation, Error Message, Input Masking, Tab Order, Focus State)
- **IA-03: Navigation** (Breadcrumbs, Links, Sticky Nav, Back/Forward, Pagination)
- **IA-04: Feedback / State** (Spinners, Empty State, Toasts, Disabled Buttons)

*(Nội dung chi tiết từng mục kiểm thử sẽ được sinh và cập nhật tại đây)*

### 2.2. Human Review & Bổ sung các điểm AI bỏ sót
*(Phần rà soát của sinh viên chỉ ra các yếu tố WCAG 2.1, Mobile Responsiveness, Phím tắt, Cắt chữ overflow mà AI bỏ quên)*

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

