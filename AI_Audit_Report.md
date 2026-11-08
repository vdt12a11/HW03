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
| **Artifact #1: Initial GUI Checklist (>40 items)**<br>**Tool:** Antigravity (Gemini 3.8 Flash)<br>**Thời gian:** 2026-11-08 22:46:35<br>**Prompt:** `tôi chọn FR-13,14,15,17 trong file @2026.HW03.GUI Usability_En.pdf để làm task 1, bạn hãy làm task 1 sinh ra các check list phù hợp với cchwucs năng tôi đã chọn` | Sinh bộ tiêu chí kiểm thử giao diện ban đầu gồm **44 items** bao phủ đầy đủ 4 phân hệ Web Admin được chọn: FR-13 (Dashboard), FR-14 (Categories), FR-15 (Products CRUD + CSV Import), FR-17 (Coupons). Bộ checklist phân bổ đều qua 4 khía cạnh: IA-01 (11 items), IA-02 (13 items), IA-03 (8 items), IA-04 (12 items) trong file [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md). | `INCOMPLETE` | **Điểm đạt:** Đúng format chuẩn của đề bài, bám sát các form thực tế của Web Admin SUT, đủ số lượng > 40 items.<br><br>**Hạn chế & Thiếu sót của AI:**<br>1. *Accessibility (WCAG 2.1):* Chưa kiểm tra tỉ lệ tương phản màu (Color Contrast ratio tối thiểu 4.5:1) và các thuộc tính `aria-label` cho người khiếm thị đọc màn hình.<br>2. *Responsive Layout:* Thiếu kiểm tra giao diện trên màn hình độ phân giải thấp (Sidebar bị che khuất nội dung, vỡ bảng table).<br>3. *Micro-interactions:* Chưa có mục kiểm tra nút bấm kép (Double-click submit) và phím tắt hỗ trợ (Enter submit). | *Sinh viên tiến hành Human Review:* Sẽ bổ sung thêm các mục kiểm thử chuyên sâu về Accessibility (WCAG 2.1), tính co giãn Responsive và phím tắt thao tác nhanh vào mục 2.2 của báo cáo. |

---

