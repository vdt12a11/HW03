# Bộ Công Cụ Khảo Sát Usability (Task 2) — Luồng E2E: Đăng Nhập Web Admin & Thêm Mới Mã Giảm Giá (Coupon)

## 1. Mục tiêu Đánh giá (Evaluation Objectives)

1. **Khả năng nhận diện & điều hướng (Navigation & Discoverability):** Đánh giá xem người dùng lần đầu tiếp xúc với trang **EShop Web Admin (`http://localhost:5174`)** có dễ dàng đăng nhập, nhận biết trạng thái hệ thống trên Dashboard và chuyển sang phân hệ **Mã Giảm Giá (Coupons)** hay không.
2. **Độ rõ ràng của biểu mẫu (Form Clarity & Affordance):** Kiểm tra xem người dùng có hiểu đúng ý nghĩa của 6 ô nhập liệu trong biểu mẫu **Tạo mã giảm giá mới** hay không — đặc biệt là 2 ô số đang có sẵn giá trị mặc định `0` và `1` nhưng bị mất chữ gợi ý (placeholder) và không có nhãn `<label>`.
3. **Khả năng phòng ngừa và phục hồi sau lỗi (Error Prevention & Recovery):** Quan sát phản ứng của người dùng khi gặp thông báo lỗi trùng mã giảm giá (`SQLITE_CONSTRAINT`), nhập sai định dạng ngày hết hạn hoặc nhập mức giảm giá vượt giới hạn.
4. **Mức độ tự tin & tin cậy (Confidence & Trust):** Đo lường mức độ hài lòng tổng thể qua thang đo chuẩn **SUS (10 câu hỏi)** và 4 câu hỏi phỏng vấn sâu (**Clarity, Error Recovery, Speed, Trust**).

---

## 2. Kịch bản Thực nghiệm Hướng Mục Tiêu (Goal-Oriented Task Scenario)

> **Đề bài giao cho Người tham gia (Đọc hoặc đưa phiếu này cho người tham gia — KHÔNG chỉ dẫn từng bước bấm nút nào):**
>
> *"Bạn đóng vai là nhân viên vận hành mới của cửa hàng **EShop**, được giao nhiệm vụ thiết lập chương trình khuyến mãi trên trang Quản trị (**Web Admin** tại địa chỉ `http://localhost:5174`). Sử dụng tài khoản quản trị được cấp (`admin@eshop.com` / mật khẩu `Admin123!`), bạn hãy thực hiện 2 công việc sau:*
> 1. *Đăng nhập vào trang quản trị và tạo một mã khuyến mãi mới có tên dễ nhớ cho đợt giảm giá mùa hè, áp dụng mức **giảm 25%** cho các **đơn hàng từ 300,000 ₫ trở lên**, có **hạn sử dụng đến cuối năm 2026** và **mỗi khách hàng được dùng tối đa 2 lần**.*
> 2. *Sau khi tạo xong, hãy thử tạo thêm một mã trùng tên với mã `SAVE10` đang có sẵn trong bảng để xem hệ thống phản hồi như thế nào, rồi xóa mã thử nghiệm của bạn đi.*
>
> *Trong suốt quá trình thao tác, bạn hãy vừa làm vừa nói to suy nghĩ của mình (Think Aloud) về những gì bạn đang tìm kiếm, những ô nhập liệu làm bạn phân vân hoặc bất kỳ thông báo nào khiến bạn khó hiểu."*

---

## 3. Thang Đo Chuẩn System Usability Scale (SUS — 10 Câu Hỏi, Thang Likert 1–5)

*(Người tham gia đánh dấu từ **1 = Hoàn toàn không đồng ý** đến **5 = Hoàn toàn đồng ý** ngay sau khi hoàn tất kịch bản)*

| STT | Nội dung câu hỏi đánh giá (SUS Item) | Loại câu | Công thức quy đổi |
|:---:|:---|:---:|:---|
| **Q1** | Tôi nghĩ rằng tôi sẽ sẵn sàng sử dụng trang Quản trị EShop này thường xuyên nếu làm công việc quản lý cửa hàng. | Lẻ (+) | $R_1 - 1$ |
| **Q2** | Tôi thấy giao diện Quản trị EShop (đặc biệt là mục Mã giảm giá) phức tạp và khó hiểu một cách không cần thiết. | Chẵn (-) | $5 - R_2$ |
| **Q3** | Tôi thấy trang Quản trị EShop và biểu mẫu tạo Mã giảm giá rất dễ sử dụng. | Lẻ (+) | $R_3 - 1$ |
| **Q4** | Tôi nghĩ rằng tôi sẽ cần sự hướng dẫn của người có chuyên môn kỹ thuật để biết cách điền đúng tất cả các ô trong biểu mẫu tạo Mã giảm giá. | Chẵn (-) | $5 - R_4$ |
| **Q5** | Tôi nhận thấy các chức năng từ Đăng nhập, xem Tổng quan (Dashboard) đến Tạo/Xóa Mã giảm giá được liên kết với nhau rất tốt. | Lẻ (+) | $R_5 - 1$ |
| **Q6** | Tôi nghĩ rằng có quá nhiều sự thiếu nhất quán trong giao diện này (ví dụ: ngôn ngữ Anh/Việt lẫn lộn, ô có chữ gợi ý, ô lại chỉ có số `0` và `1` không rõ nghĩa). | Chẵn (-) | $5 - R_6$ |
| **Q7** | Tôi hình dung rằng hầu hết mọi người sẽ học cách đăng nhập và tạo Mã giảm giá trên trang này rất nhanh chóng. | Lẻ (+) | $R_7 - 1$ |
| **Q8** | Tôi thấy việc nhập liệu và kiểm tra trạng thái Mã giảm giá trên hệ thống này khá rườm rà và dễ nhầm lẫn. | Chẵn (-) | $5 - R_8$ |
| **Q9** | Tôi cảm thấy rất tự tin rằng mình đã điền đúng các thông số (mức giảm, đơn tối thiểu, giới hạn lượt dùng) khi bấm nút "Tạo mã". | Lẻ (+) | $R_9 - 1$ |
| **Q10** | Tôi đã phải đoán mò hoặc thử đi thử lại trước khi hiểu rõ tác dụng của từng ô nhập liệu trên màn hình Mã giảm giá. | Chẵn (-) | $5 - R_{10}$ |

---

## 4. Bộ 4 Câu Hỏi Phỏng Vấn Sâu Sau Phiên Thử Nghiệm (Open-Ended Probe Questions)

1. **Clarity (Tính rõ ràng):** *"Khi nhìn vào biểu mẫu 'Tạo mã giảm giá mới', có ô nhập liệu nào khiến bạn phải khựng lại đoán xem nó dùng để nhập thông tin gì không (đặc biệt là 2 ô đang có sẵn số `0` và số `1`)?"*
2. **Error Recovery (Khả năng phục hồi sau lỗi):** *"Khi bạn thử tạo mã trùng tên `SAVE10`, thông báo bật lên trên màn hình (`SQLITE_CONSTRAINT...`) có giúp bạn hiểu rõ nguyên nhân lỗi và cách khắc phục không?"*
3. **Speed (Tốc độ & Hiệu quả thao tác):** *"Bước nào trong toàn bộ luồng từ lúc Đăng nhập $\rightarrow$ Chuyển tab Mã Giảm Giá $\rightarrow$ Điền thông tin tạo mã làm bạn mất nhiều thời gian nhất?"*
4. **Trust (Mức độ tin cậy):** *"Sau khi tạo mã xong và nhìn vào bảng danh sách bên dưới (ví dụ thấy mã `DISABLED50` vẫn hiển thị bình thường hoặc không có thông báo tạo thành công), bạn có hoàn toàn yên tâm rằng mã khuyến mãi đã hoạt động đúng như cấu hình không?"*
