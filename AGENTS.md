# Quy định và Hướng dẫn dành cho AI Agent (HW03 - GUI & Usability)

Tài liệu này định nghĩa các quy tắc bắt buộc mà AI Agent phải tuân thủ trong suốt quá trình đồng hành cùng sinh viên thực hiện bài tập **HW03 – GUI & Usability (Testing)**.

---

## 📌 1. QUY TẮC BẮT BUỘC: GHI PROMPT LOG & AI AUDIT REPORT

Theo mục **2 (Guiding Principles)**, mục **9 (AI Audit Report)** của đề bài HW03 và biểu mẫu quy chuẩn `[AI-02] - FIT@HCMUS`:

### A. Ghi Prompt Log sau MỖI LẦN PROMPT vào [`Prompy_log.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/Prompy_log.md)
Mỗi tương tác prompt của người dùng phải được lưu ngay lập tức theo cấu trúc:
- **AI Tool:** Antigravity (Gemini 3.8 Flash / Google DeepMind)
- **User Prompt:** Nguyên văn prompt.
- **Goal & Plan:** Mục tiêu và kế hoạch xử lý.
- **Actions Taken:** Các công cụ, file và lệnh đã chạy.
- **AI Output:** Tóm tắt kết quả trả về.
- **Bloom-AI Level & Next Steps:** Đánh giá cấp độ Bloom-AI (G9.3 Analyse, G9.4 Collaborate) và bước tiếp theo.

### B. TỰ ĐỘNG GHI / CẬP NHẬT VÀO [`AI_Audit_Report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/AI_Audit_Report.md) KHI CÓ ARTIFACT KIỂM THỬ THỰC TẾ
Chỉ những **sản phẩm kiểm thử cụ thể (Test Artifacts)** mới được ghi vào Bảng Kiểm toán 5 cột trong [`AI_Audit_Report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW03/AI_Audit_Report.md), bao gồm:
- Bộ tiêu chí kiểm thử giao diện (GUI Checklist ban đầu do AI sinh).
- Bổ sung / chỉnh sửa checklist sau Human Review.
- Kịch bản đo lường trải nghiệm người dùng (Task Scenario).
- Thang đo bảng hỏi Usability (SUS / UEQ-S Questionnaire).
- Báo cáo lỗi giao diện (Bug Reports & GitHub Issues).
- Kịch bản kiểm thử đa nền tảng (Cross-platform Test Cases).
*(Lưu ý: Các thao tác thiết lập khung sườn tài liệu, file rỗng, lệnh cài đặt ban đầu hoặc git init KHÔNG được tính là test artifact).*

Mỗi khi sinh hoặc chỉnh sửa một test artifact, Agent **BẮT BUỘC** phải tự động thêm một dòng vào Bảng Kiểm toán 5 cột theo chuẩn FIT@HCMUS:

```markdown
| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB / Tiêu chuẩn GUI) | (5) Bản SV sửa (Human Review & Changes) |
```

- **(1) Prompt + Công cụ:** Đánh số thứ tự `Artifact #k`, ghi rõ Tool, Ngày giờ và dán nguyên văn Prompt (không paraphrase).
- **(2) Output AI:** Tóm tắt chính xác kết quả đầu ra mà AI sinh ra (hoặc trích dẫn vị trí/file).
- **(3) Verdict:** Gán nhãn `VALID` / `INVALID` / `INCOMPLETE`.
- **(4) Lý do:** Nêu rõ căn cứ kỹ thuật (dẫn chiếu chuẩn ISTQB, WCAG 2.1, tiêu chuẩn giao diện IA-01→IA-04, hoặc hạn chế của AI).
- **(5) Bản SV sửa:** Ghi nhận những phần sinh viên đã rà soát, bổ sung, sửa chữa hoặc loại bỏ (đánh dấu thay đổi).

---

## 📌 2. QUY TẮC BẮT BUỘC: QUẢN LÝ PHIÊN BẢN VỚI GIT COMMIT LOG

Theo mục **12 (Git Commit Log)** của đề bài HW03:
> *"Create a new Git commit for each step of the testing procedure (for example: checklist design, checklist execution, bug logging, each usability session, and the analysis). Provide the Git commit log in a text-based file format."*

- **Tự động Git Commit:** Mỗi khi hoàn tất một thay đổi quan trọng hoặc một bước trong quy trình kiểm thử (ví dụ: khởi tạo dự án, thiết kế checklist, cập nhật checklist sau review, ghi nhận bug, thiết kế kịch bản usability, hoàn thành phiên đo lường, cập nhật báo cáo), Agent **BẮT BUỘC** phải thực hiện lệnh `git add` và `git commit` với thông điệp rõ ràng, mang tính ngữ nghĩa cao (Semantic Commit Message, ví dụ: `feat(checklist): design initial 40+ GUI items`, `fix(audit): update human review for artifact #1`, `docs: update AI audit and prompt log`).
- **Đồng bộ Git Log:** Giữ gìn lịch sử commit rõ ràng, phục vụ việc xuất file log text nộp kèm theo yêu cầu của bài tập.

---

## 🎯 3. NGUYÊN TẮC THỰC HIỆN BÀI TẬP HW03

1. **AI-First & Human Review:**
   - AI đóng vai trò trợ lý có kỷ luật (disciplined assistant), không phải hộp đen làm thay toàn bộ.
   - Luôn nhắc nhở sinh viên review, bổ sung các điểm AI còn thiếu sót (đặc biệt cho Task 1: các khía cạnh AI thường bỏ sót như Accessibility WCAG, Responsive layout, RTL, Dark Mode, Micro-interactions).
2. **Không bịa đặt dữ liệu (Anti-AI-Cheat Constraints - Mục 11):**
   - Danh sách 7 người tham gia khảo sát Usability (Task 2) và hình ảnh thực thi đa nền tảng (Task 3) phải là dữ liệu thật do người dùng thực hiện. AI **tuyệt đối không** tự ý bịa đặt hoặc làm giả thông tin cá nhân/kết quả thực nghiệm thực tế của người tham gia.
3. **Phù hợp với SUT (System Under Test):**
   - SUT của môn học là **EShop** (`https://github.com/ttbhanh/eshop-sut`). Mọi kịch bản, form, flow, màn hình đều bám sát theo hệ thống này.
4. **Không tự viết phần AI Critique (Mục 10 đề bài / Mục 6 Main Report):**
   - Phần **AI Critique (200–300 từ)** là phần phản biện cá nhân của sinh viên đối với AI. AI **tuyệt đối không** được tự ý viết hộ mục này.
5. **Bảo toàn dữ liệu Log:**
   - Không được overwrite các bản ghi log và audit trước, luôn ghi tiếp (append) để lưu giữ toàn bộ tiến trình.
