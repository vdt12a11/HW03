/**
 * SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM (GỒM CẢ ĐỀ BÀI NHIỆM VỤ + PHIẾU CHẤM ĐIỂM SUS + 4 CÂU HỎI)
 * Sinh viên: VĂN ĐỨC TUẤN — MSSV: 23120397 — Email: 23120397@student.hcmus.edu.vn
 *
 * HƯỚNG DẪN SỬ DỤNG (CHỈ MẤT 15 GIÂY):
 * 1. Mở trang: https://script.google.com/home/start -> Bấm "Dự án mới" (New project).
 * 2. Xóa đoạn code mặc định và DÁN TOÀN BỘ file này vào -> Bấm Ctrl + S để lưu.
 * 3. Bấm nút "Chạy" (Run) ở thanh công cụ phía trên (Cấp quyền Allow nếu chạy lần đầu).
 * 4. Xem ở khung "Nhật ký thực thi" (Execution log) bên dưới để lấy:
 *    - LINK GOOGLE FORM GỬI CHO 7 NGƯỜI THAM GIA (chứa sẵn cả Đề bài nhiệm vụ + Câu hỏi khảo sát!)
 *    - LINK GOOGLE SHEET THU KẾT QUẢ TỰ ĐỘNG
 */

function createHW03UsabilityForm() {
  var formTitle = 'Khảo sát Trải nghiệm Người dùng (Usability Evaluation) — EShop Web Admin';
  var form = FormApp.create(formTitle);

  form.setDescription(
    'Chào bạn, mình đang thực hiện bài tập đánh giá giao diện phần mềm EShop (HW03 - Môn Kiểm thử Phần mềm - ĐH KHTN, ĐHQG-HCM).\n' +
    'Sinh viên thực hiện: VĂN ĐỨC TUẤN (MSSV: 23120397 - Email: 23120397@student.hcmus.edu.vn).\n\n' +
    '📌 LƯU Ý QUAN TRỌNG TRƯỚC KHI BẮT ĐẦU:\n' +
    '- Bài khảo sát này chỉ nhằm mục đích tìm lỗi thiết kế của TRANG WEB, hoàn toàn KHÔNG chấm điểm hay đánh giá kỹ năng của bạn.\n' +
    '- Trong suốt quá trình thao tác, bạn hãy tự nhiên VỪA LÀM VỪA NÓI TO SUY NGHĨ CỦA MÌNH (Think Aloud) — ví dụ: bạn đang tìm nút nào, ô nhập liệu nào làm bạn phân vân, hoặc thông báo nào khiến bạn thấy khó hiểu.'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage('Cảm ơn bạn rất nhiều! Câu trả lời của bạn đã được ghi nhận thành công.');

  // =========================================================================
  // PHẦN 1: ĐỀ BÀI NHIỆM VỤ THỰC HÀNH (TASK SCENARIO) & THÔNG TIN NGƯỜI THAM GIA
  // =========================================================================
  form.addSectionHeaderItem()
    .setTitle('PHẦN I: ĐỀ BÀI NHIỆM VỤ THỰC HÀNH TRÊN TRANG ESHOP ADMIN')
    .setHelpText(
      'Bạn hãy đọc kỹ kịch bản nhiệm vụ dưới đây, thực hiện thao tác trên trình duyệt đang mở sẵn, sau đó kéo xuống dưới để điền đánh giá nhé:\n\n' +
      '------------------------------------------------------------\n' +
      '🌐 ĐỊA CHỈ TRANG QUẢN TRỊ: http://localhost:5174\n' +
      '🔑 TÀI KHOẢN ĐĂNG NHẬP:\n' +
      '   • Email: admin@eshop.com\n' +
      '   • Mật khẩu: Admin123!\n' +
      '------------------------------------------------------------\n\n' +
      '🎯 BỐI CẢNH & NHIỆM VỤ CỦA BẠN (Gồm 2 công việc ngắn):\n' +
      'Bạn đóng vai là nhân viên vận hành mới của cửa hàng EShop, được giao nhiệm vụ thiết lập mã khuyến mãi trên trang Quản trị:\n\n' +
      '👉 Việc 1: Hãy đăng nhập vào trang quản trị, tìm đến mục quản lý khuyến mãi (Mã Giảm Giá) và tạo một mã giảm giá mới cho đợt hè có tên là SUMMER25 với các điều kiện sau:\n' +
      '   • Loại giảm giá: Giảm theo Phần trăm (%) với mức giảm là 25%\n' +
      '   • Áp dụng cho đơn hàng tối thiểu từ: 300,000 đ trở lên\n' +
      '   • Hạn sử dụng đến ngày: 31/12/2026\n' +
      '   • Giới hạn số lần sử dụng: Tối đa 2 lần cho mỗi khách hàng.\n\n' +
      '👉 Việc 2: Sau khi tạo xong mã SUMMER25, bạn hãy thử tạo thêm một mã nữa nhưng đặt tên trùng với mã SAVE10 (đang có sẵn trong bảng bên dưới) để xem hệ thống phản hồi như thế nào; cuối cùng hãy bấm Xóa mã SUMMER25 mà bạn vừa tạo.\n\n' +
      '💡 Nhắc nhẹ: Trong lúc làm Việc 1 và Việc 2, bạn hãy vừa thao tác vừa nói to suy nghĩ của mình nhé!'
    );

  var confirmTask = form.addCheckboxItem();
  confirmTask.setTitle('Xác nhận hoàn thành thao tác thử nghiệm:')
    .setChoices([
      confirmTask.createChoice('Tôi đã đọc đề bài, vừa nói to suy nghĩ (Think Aloud) và hoàn thành thao tác trên trang Quản trị EShop')
    ])
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('THÔNG TIN NGƯỜI THAM GIA')
    .setHelpText('Lưu ý bảo mật: Số điện thoại/Zalo của bạn chỉ dùng để xác thực người tham gia thật và SẼ ĐƯỢC CHE 4 SỐ Ở GIỮA (ví dụ: 090****123) khi đưa vào báo cáo.');

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
    .setTitle('PHẦN II: ĐÁNH GIÁ GIAO DIỆN THEO THANG ĐO SUS (10 CÂU)')
    .setHelpText('Dựa trên trải nghiệm vừa thao tác ở Phần I, bạn hãy chọn mức độ đồng ý từ 1 (Hoàn toàn không đồng ý) đến 5 (Hoàn toàn đồng ý) cho từng phát biểu dưới đây.');

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
    .setTitle('PHẦN III: CÂU HỎI CẢM NHẬN CHI TIẾT (4 CÂU NGẮN)')
    .setHelpText('Bạn chỉ cần ghi ngắn gọn 1–2 câu theo đúng cảm nhận thực tế vừa rồi của bạn.');

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
  Logger.log('✅ ĐÃ TẠO GOOGLE FORM (KÈM ĐỀ BÀI NHIỆM VỤ) THÀNH CÔNG!');
  Logger.log('👉 LINK GỬI CHO NGƯỜI THAM GIA (Short URL): ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('👉 LINK GỬI CHO NGƯỜI THAM GIA (Full URL) : ' + form.getPublishedUrl());
  Logger.log('👉 LINK CHỈNH SỬA FORM (Admin Edit URL)   : ' + form.getEditUrl());
  Logger.log('👉 LINK GOOGLE SHEET XEM KẾT QUẢ          : ' + ss.getUrl());
  Logger.log('==============================================================');
}
