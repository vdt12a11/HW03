# HW03 — GUI & Usability Testing (`HW03-AI`)

> **Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM (FIT@HCMUS)**  
> **Môn học:** CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-Augmented · 2026)  
> **Hệ thống kiểm thử (SUT):** EShop (`https://github.com/ttbhanh/eshop-sut`)  
> **GitHub Repository nộp bài:** [https://github.com/vdt12a11/HW03](https://github.com/vdt12a11/HW03)

---

## 1. Thông tin Sinh viên (Student Information)

| Mục | Nội dung |
|:---|:---|
| **Họ và tên:** | **VĂN ĐỨC TUẤN** |
| **Mã số sinh viên (MSSV):** | **23120397** |
| **Email sinh viên:** | `23120397@student.hcmus.edu.vn` |
| **Lớp / Khóa:** | Kiểm thử phần mềm - CQ2023/3 |
| **Công cụ AI sử dụng:** | Antigravity (Gemini 3.8 Flash & Gemini 4 Argon / Google DeepMind) |

---

## 2. Báo cáo Tóm tắt Kiểm thử (Test Summary Report — Theo quy định Mục 14)

| Chỉ số thống kê (Metric) | Kết quả thực hiện | Chi tiết & Minh chứng |
|:---|:---:|:---|
| **Số lượng Màn hình / Phân hệ đã kiểm thử (Screens Tested - Task 1 & 3)** | **5 màn hình** | Đăng nhập Admin (`FR-12`), Dashboard (`FR-13`), Quản lý Danh mục (`FR-14`), Quản lý Sản phẩm & Import CSV (`FR-15`, `FR-16`), Quản lý Mã Giảm Giá (`FR-17`) + Demo mở rộng trên Quản lý Đơn hàng (`FR-18`). |
| **Luồng End-to-End đánh giá Usability (E2E Flow Tested - Task 2)** | **1 luồng E2E** | `Đăng nhập Web Admin (FR-12)` $\rightarrow$ `Xem Dashboard (FR-13)` $\rightarrow$ `Điều hướng sang Mã Giảm Giá (FR-17)` $\rightarrow$ `Tạo mới, Kiểm tra lỗi trùng mã & Xóa Mã Giảm Giá`. |
| **Tổng số tiêu chí GUI Checklist đã thiết kế (Checklist Items Designed)** | **52 tiêu chí** | **44 tiêu chí** do AI sinh ban đầu (`IA-01`: 11, `IA-02`: 13, `IA-03`: 8, `IA-04`: 12) + **8 tiêu chí** do Sinh viên bổ sung sau Human Review (`CHK-HUM-01` $\rightarrow$ `CHK-HUM-08`). |
| **Tổng số tiêu chí đã thực thi (Checklist Items Executed)** | **52 / 52 (100%)** | Thực thi đầy đủ trên SUT Web Admin (`http://localhost:5174`). |
| **Số tiêu chí Đạt (Passed)** | **27 / 52 (51.92%)** | Xem chi tiết tại [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md) và [`GUI_Checklist_HW03.xlsx`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/GUI_Checklist_HW03.xlsx). |
| **Số tiêu chí Không Đạt (Failed)** | **25 / 52 (48.08%)** | Mọi tiêu chí Failed đều có ghi chú nguyên nhân và ảnh chụp màn hình đính kèm. |
| **Tổng số Báo cáo Lỗi (Bugs Discovered & Reported)** | **8 Bugs (`BUG-01` → `BUG-08`)** | Đã báo cáo đầy đủ trong [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md) và tạo **8 GitHub Issues (`#1` → `#8`)** kèm ảnh chụp tại [https://github.com/vdt12a11/HW03/issues](https://github.com/vdt12a11/HW03/issues). |
| **Số lượng Nền tảng Kiểm thử Đa Trình duyệt (Cross-Browser Platforms)** | **4 nền tảng** | `P1`: Google Chrome 146 (Win 11), `P2`: Mozilla Firefox 157.0 (Win 11), `P3`: Apple Safari / WebKit 27.2 (macOS), `P4`: Android Chrome Mobile (Pixel 7 Android 14) — kèm **16 ảnh chụp nguyên cửa sổ trình duyệt** tại [`screenshots/task3/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task3). |
| **Số lượng Người tham gia Khảo sát Usability (Participants - Task 2)** | **6 / 7 người tham gia thực tế** | Đã thu thập và phân tích phản hồi thực tế của 6 người qua Google Sheet (`SUS Mean: 51.25 ± 15.99`); chờ người thứ 7 để hoàn thiện 100%. |
| **Bộ Agent Skills & Video Demo (Task 4)** | **2 Agent Skills** | [`skills/gui-usability-tester/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/skills/gui-usability-tester) và [`skills/ai-audit-logger/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/skills/ai-audit-logger).<br>**Link Video Demo YouTube:** `[Cập nhật Link YouTube Demo]` |

---

## 3. Bảng Tự Đánh Giá Điểm (Assessment Template — Mục 15)

| No. | Criteria | Grade | Self-Assessed Grade | Primary Evidence in Repository |
|:---:|:---|:---:|:---:|:---|
| **1** | **Task 1 — GUI Checklist (design + execution + bug report)** | 30 | **30** | [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md) (Mục 2), [`GUI_Checklist_HW03.xlsx`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/GUI_Checklist_HW03.xlsx), [`Bug_report_link_git_hub.txt`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Bug_report_link_git_hub.txt), [`screenshots/task1/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task1) |
| **2** | **Task 2 — Usability Evaluation (task scenario + 7 sessions + analysis)** | 40 | **`[Chờ điền]`** | [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md) (Mục 3), [`usability_responses.json`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/usability_responses.json), [`usability_sus_template.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/skills/gui-usability-tester/resources/usability_sus_template.md) |
| **3** | **Task 3 — Cross-Browser / Cross-Platform ($\ge 3$ platforms)** | 20 | **20** | [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md) (Mục 4), 16 ảnh chụp nguyên trình duyệt tại [`screenshots/task3/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/task3) |
| **4** | **Agent Skills** | 10 | **10** | [`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md) (Mục 5), [`skills/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/skills), [`screenshots/skill_demo/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots/skill_demo) |
| | **Total** | **100** | **`[Tổng điểm]`** | |

---

## 4. Danh mục Tài liệu Nộp Bài (Deliverables Index)

1. **[`Main_report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Main_report.md):** Báo cáo chính tích hợp đầy đủ Task 1, Task 2, Task 3, Task 4, AI Critique và Bảng tự đánh giá.
2. **[`GUI_Checklist_HW03.xlsx`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/GUI_Checklist_HW03.xlsx):** File Excel chứa 52 tiêu chí GUI Checklist và bảng tổng hợp 8 Bugs.
3. **[`Bug_report_link_git_hub.txt`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Bug_report_link_git_hub.txt):** Danh sách liên kết trực tiếp tới 8 GitHub Issues (`https://github.com/vdt12a11/HW03/issues/1` $\rightarrow$ `/8`).
4. **[`AI_Audit_Report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/AI_Audit_Report.md) & [`Prompy_log.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Prompy_log.md):** Báo cáo kiểm toán AI theo biểu mẫu 5 cột `[AI-02] - FIT@HCMUS` và nhật ký toàn bộ các phiên prompt.
5. **[`Git_Commit_Log.txt`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Git_Commit_Log.txt):** Lịch sử Git commit theo từng bước thực hiện bài tập.
6. **[`skills/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/skills) & [`.agents/skills/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/.agents/skills):** Mã nguồn 2 Agent Skills (`gui-usability-tester` & `ai-audit-logger`).
7. **[`screenshots/`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/screenshots):**
   - `screenshots/task1/`: 8 ảnh chụp minh chứng lỗi Task 1.
   - `screenshots/task3/`: 16 ảnh chụp nguyên cửa sổ trình duyệt trên 4 nền tảng Task 3.
   - `screenshots/skill_demo/`: Ảnh chụp và báo cáo JSON thực thi Agent Skill trên màn hình `FR-18`.

