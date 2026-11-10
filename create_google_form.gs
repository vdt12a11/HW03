/**
 * SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM & GOOGLE SHEET THU THẬP KẾT QUẢ TASK 2 (HW03)
 * Sinh viên: VĂN ĐỨC TUẤN — MSSV: 23120397 — Email: 23120397@student.hcmus.edu.vn
 *
 * HƯỚNG DẪN SỬ DỤNG (CHỈ MẤT 15 GIÂY):
 * 1. Mở trang: https://script.google.com/home/start
 * 2. Bấm nút "Dự án mới" (New project) ở góc trái trên cùng.
 * 3. Xóa đoạn code mặc định `function myFunction() {}` và DÁN TOÀN BỘ file này vào.
 * 4. Bấm biểu tượng Đĩa mềm (Ctrl + S) để lưu, sau đó bấm nút "Chạy" (Run) ở thanh công cụ phía trên.
 * 5. Lần đầu chạy, Google sẽ hỏi quyền truy cập Google Forms -> Bấm "Xem lại quyền" (Review permissions) -> Chọn tài khoản Google của bạn -> "Nâng cao" (Advanced) -> "Đi tới..." -> "Cho phép" (Allow).
 * 6. Nhìn xuống khung "Nhật ký thực thi" (Execution log) ở dưới cùng, bạn sẽ thấy ngay:
 *    - LINK GỬI CHO 7 NGƯỜI THAM GIA ĐIỀN (Published URL)
 *    - LINK XEM KẾT QUẢ EXCEL TRÊN GOOGLE SHEET (Spreadsheet URL)
 */

function createHW03UsabilityForm() {
  var formTitle = 'Khảo sát Trải nghiệm Người dùng (Usability Evaluation) — EShop Web Admin';
  var form = FormApp.create(formTitle);

  form.setDescription(
    'Phiếu khảo sát thuộc Bài tập HW03 (GUI & Usability Testing) - Môn Kiểm thử Phần mềm (FIT@HCMUS).\n' +
    'Sinh viên thực hiện: VĂN ĐỨC TUẤN (MSSV: 23120397 - Email: 23120397@student.hcmus.edu.vn).\n\n' +
    'Cảm ơn bạn đã vừa hoàn thành thao tác thử nghiệm luồng: Đăng nhập trang Quản trị EShop (http://localhost:5174) -> Tạo mới & Quản lý Mã Giảm Giá (Coupon).\n' +
    'Nhờ bạn dành khoảng 2 phút đánh giá cảm nhận thực tế của mình dưới đây nhé!'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage('Cảm ơn bạn rất nhiều! Câu trả lời của bạn đã được ghi nhận thành công.');

  // =========================================================================
  // PHẦN 1: THÔNG TIN NGƯỜI THAM GIA (VERIFIABLE PARTICIPANT DETAILS)
  // =========================================================================
  form.addSectionHeaderItem()
    .setTitle('I. Thông tin người tham gia')
    .setHelpText('Lưu ý: Số điện thoại/Zalo của bạn sẽ được bảo mật và che 4 số ở giữa (ví dụ: 090****123) khi đưa vào báo cáo học thuật.');

  form.addTextItem()
    .setTitle('1. Họ và tên của bạn')
    .setRequired(true);

  form.addTextItem()
    .setTitle('2. Nghề nghiệp hoặc Ngành học hiện tại của bạn (Ví dụ: Sinh viên Kinh tế, Nhân viên văn phòng, Kế toán...)')
    .setRequired(true);

  form.addTextItem()
    .setTitle('3. Số điện thoại hoặc Zalo liên hệ xác thực (Sẽ được che 4 số giữa trong báo cáo)')
    .setRequired(true);

  // =========================================================================
  // PHẦN 2: THANG ĐO CHUẨN SYSTEM USABILITY SCALE (SUS - 10 CÂU HỎI 1..5)
  // =========================================================================
  form.addPageBreakItem()
    .setTitle('II. Đánh giá Giao diện theo Thang đo SUS (10 câu)')
    .setHelpText('Vui lòng chọn mức độ đồng ý của bạn từ 1 (Hoàn toàn không đồng ý) đến 5 (Hoàn toàn đồng ý) cho từng phát biểu dưới đây.');

  var susQuestions = [
    'Q1. Tôi nghĩ rằng tôi sẽ sẵn sàng sử dụng trang Quản trị EShop này thường xuyên nếu làm công việc quản lý cửa hàng.',
    'Q2. Tôi thấy giao diện Quản trị EShop (đặc biệt là mục Mã giảm giá) phức tạp và khó hiểu một cách không cần thiết.',
    'Q3. Tôi thấy trang Quản trị EShop và biểu mẫu tạo Mã giảm giá rất dễ sử dụng.',
    'Q4. Tôi nghĩ rằng tôi sẽ cần sự hướng dẫn của người có chuyên môn kỹ thuật để biết cách điền đúng tất cả các ô trong biểu mẫu tạo Mã giảm giá.',
    'Q5. Tôi nhận thấy các chức năng từ Đăng nhập, xem Tổng quan (Dashboard) đến Tạo/Xóa Mã giảm giá được liên kết với nhau rất tốt.',
    'Q6. Tôi nghĩ rằng có quá nhiều sự thiếu nhất quán trong giao diện này (ví dụ: tiếng Anh/Việt lẫn lộn, ô có chữ gợi ý, ô lại chỉ có số 0 và 1 không rõ nghĩa).',
    'Q7. Tôi hình dung rằng hầu hết mọi người sẽ học cách đăng nhập và tạo Mã giảm giá trên trang này rất nhanh chóng.',
    'Q8. Tôi thấy việc nhập liệu và kiểm tra trạng thái Mã giảm giá trên hệ thống này khá rườm rà và dễ nhầm lẫn.',
    'Q9. Tôi cảm thấy rất tự tin rằng mình đã điền đúng các thông số (mức giảm, đơn tối thiểu, giới hạn lượt dùng) khi bấm nút "Tạo mã".',
    'Q10. Tôi đã phải đoán mò hoặc thử đi thử lại trước khi hiểu rõ tác dụng của từng ô nhập liệu trên màn hình Mã giảm giá.'
  ];

  for (var i = 0; i < susQuestions.length; i++) {
    form.addScaleItem()
      .setTitle(susQuestions[i])
      .setBounds(1, 5)
      .setLabels('Hoàn toàn không đồng ý', 'Hoàn toàn đồng ý')
      .setRequired(true);
  }

  // =========================================================================
  // PHẦN 3: BỐN CÂU HỎI PHỎNG VẤN NGẮN (OPEN-ENDED PROBE QUESTIONS)
  // =========================================================================
  form.addPageBreakItem()
    .setTitle('III. Câu hỏi cảm nhận chi tiết (4 câu ngắn)')
    .setHelpText('Bạn chỉ cần ghi ngắn gọn 1-2 câu theo đúng trải nghiệm vừa rồi của bạn.');

  form.addParagraphTextItem()
    .setTitle('1. [Độ rõ ràng - Clarity]: Khi nhìn vào khung "Tạo mã giảm giá mới", có ô nhập liệu nào làm bạn phải khựng lại đoán xem nó dùng để nhập gì không (đặc biệt là 2 ô đang có sẵn số 0 và số 1)?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('2. [Xử lý lỗi - Error Recovery]: Khi bạn thử tạo mã trùng tên SAVE10, thông báo bật lên trên màn hình (SQLITE_CONSTRAINT...) có giúp bạn hiểu ngay nguyên nhân lỗi và cách sửa không?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('3. [Tốc độ - Speed]: Bước nào trong toàn bộ luồng từ lúc Đăng nhập -> Chuyển tab Mã Giảm Giá -> Điền thông tin tạo mã làm bạn mất nhiều thời gian nhất?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('4. [Độ tin cậy - Trust]: Sau khi bấm tạo mã xong và nhìn vào bảng danh sách bên dưới, bạn có hoàn toàn yên tâm rằng mã khuyến mãi đã hoạt động đúng như cấu hình không?')
    .setRequired(true);

  // =========================================================================
  // TỰ ĐỘNG TẠO GOOGLE SHEET LIÊN KẾT ĐỂ LẤY KẾT QUẢ
  // =========================================================================
  var ss = SpreadsheetApp.create('Ket_Qua_Khao_Sat_Usability_HW03_23120397');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('==============================================================');
  Logger.log('✅ ĐÃ TẠO GOOGLE FORM THÀNH CÔNG!');
  Logger.log('👉 LINK GỬI CHO NGƯỜI THAM GIA ĐIỀN (Short URL): ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('👉 LINK GỬI CHO NGƯỜI THAM GIA ĐIỀN (Full URL) : ' + form.getPublishedUrl());
  Logger.log('👉 LINK CHỈNH SỬA FORM (Admin Edit URL)         : ' + form.getEditUrl());
  Logger.log('👉 LINK GOOGLE SHEET XEM KẾT QUẢ                : ' + ss.getUrl());
  Logger.log('==============================================================');
}
