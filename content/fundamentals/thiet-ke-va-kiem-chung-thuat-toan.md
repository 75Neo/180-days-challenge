---
title: "Thiết kế và kiểm chứng thuật toán"
description: "Ba mối quan tâm thiết kế, phân biệt exact-approximate-randomized, kiểm chứng bằng độ đo và tính giải thích được của thuật toán."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [thiet-ke, kiem-chung, explainability, fundamentals]
---

# Thiết kế và kiểm chứng thuật toán

## 1. Tổng quan

Thiết kế mà không kiểm chứng chẳng khác xây cầu không thử tải. Khung đầy đủ gồm bốn phần.

Ba mối quan tâm khi thiết kế là gì. Ba họ thuật toán với logic kiểm chứng khác nhau ra sao.

Cách dùng độ đo để kiểm chứng thế nào. Yêu cầu mới về tính giải thích được là gì.

## 2. Ba mối quan tâm khi thiết kế

Ba câu hỏi phải thường trực suốt quá trình thiết kế và tinh chỉnh. Mối thứ nhất: thuật toán có cho kết quả mong đợi không.

Đây là câu hỏi về tính đúng đắn. Câu trả lời đến từ kiểm thử rộng khắp, nhất là trường hợp biên.

Mối thứ hai: đó có phải cách tối ưu nhất không. Đây là câu hỏi về tính tối ưu.

Nhân loại đã tốn hàng thập kỷ cho một lớp bài mà vẫn chưa biết lời giải hiện có tốt nhất chưa. Mối thứ ba: thuật toán thể hiện ra sao trên dữ liệu lớn hơn.

Đây là câu hỏi về khả năng mở rộng. Câu trả lời đến từ phân tích độ phức tạp và hạ tầng co giãn.

Thứ tự ưu tiên thực tế: đúng trước, tối ưu sau, mở rộng cuối cùng. Thuật toán nhanh mà sai là vô giá trị.

Thuật toán đúng mà không mở rộng được chỉ dùng cho bài nhỏ. Giống như món ngon, ra nhanh, giá rõ: thiếu món ngon thì hai thứ còn lại vô nghĩa.

## 3. Ba họ thuật toán và logic kiểm chứng khác nhau

Kiểm chứng phụ thuộc vào họ thuật toán. Vì kỹ thuật kiểm thử mỗi họ khác nhau.

Trước hết phân biệt tất định và ngẫu nhiên. Thuật toán tất định cho cùng một đầu vào luôn ra một đầu ra.

Nên kiểm chứng bằng tập kiểm thử cố định với kết quả kỳ vọng cố định. Thuật toán ngẫu nhiên đưa thêm dãy số ngẫu nhiên làm đầu vào.

Mỗi lần chạy cho đầu ra khác nhau. Kiểm chứng họ này phải kiểm tính chất thống kê, không trông đợi kết quả cố định.

Trên trục khác, chia thành chính xác và xấp xỉ. Thuật toán chính xác cho nghiệm đúng mà không thêm giả định hay xấp xỉ nào.

Thuật toán xấp xỉ đơn giản hóa bài toán bằng giả định khi tài nguyên không kham nổi. Nên nó không cho nghiệm đúng tuyệt đối.

Ví dụ minh họa là người bán hàng rong ra đời năm 1930. Tìm hành trình ngắn nhất thăm mỗi thành phố một lần rồi về điểm xuất phát.

Cách trực diện liệt kê mọi hoán vị rồi chọn rẻ nhất. Nhưng vượt quá 30 thành phố thì không quản lý nổi.

## 4. Kiểm chứng bằng độ đo và trường hợp biên

Kiểm chứng là xác nhận thuật toán thực sự giải đúng bài toán. Quy trình phải thử càng nhiều giá trị và kiểu đầu vào càng tốt.

Với học có giám sát, dữ liệu gán nhãn sẵn đóng vai trò chân lý. Ta đo độ lệch qua độ đo như độ chính xác, độ bao phủ hay độ chuẩn xác.

Đôi khi đầu ra đúng không phải một giá trị đơn mà là một khoảng. Thiết kế lặp cải tiến dần cho tới khi nằm trong khoảng yêu cầu.

Hai khái niệm nền cho họ bài khó. Thuật toán đa thức có thời gian chạy $O(n^k)$ với $k$ hằng số.

Chứng chỉ là nghiệm ứng viên sinh cuối mỗi vòng lặp. Khi nó đáp ứng yêu cầu thì chọn làm nghiệm cuối.

Nội dung không thể thiếu là trường hợp biên. Đó là khi thuật toán vận hành ở cực trị tham số, hiếm gặp nhưng có thể gây sụp đổ.

Phần còn lại gọi là đường hạnh phúc, nơi tham số bình thường và thuật toán thường đi qua. Không ai liệt kê được mọi trường hợp biên.

Nhưng phải nghĩ tới càng nhiều càng tốt. Bỏ qua chúng là mời gọi sự cố.

## 5. Tính giải thích được và LIME

Khi thuật toán dùng cho việc trọng yếu, khả năng giải thích từng kết quả thành bắt buộc. Để đảm bảo quyết định dựa trên nó không tạo thiên kiến.

Khả năng chỉ ra đặc trưng nào dẫn tới một quyết định cụ thể gọi là tính giải thích được. Thuật toán ảnh hưởng đời người cần đánh giá thiên kiến và định kiến.

Phân tích đạo đức thuật toán đã thành phần chuẩn của kiểm chứng. Với học sâu, tính giải thích được rất khó đạt.

Ví dụ thuật toán từ chối đơn vay thế chấp của một người. Việc minh bạch lý do là bắt buộc.

Kỹ thuật hiệu quả là LIME. Đưa thay đổi nhỏ vào từng đầu vào rồi vẽ biên quyết định cục bộ quanh đó.

Từ đó lượng hóa ảnh hưởng của từng biến với từng trường hợp cụ thể. Giống như gõ nhẹ từng chỗ để xem chỗ nào làm đổi kết quả.

## 6. So sánh và đánh đổi

Đánh đổi trung tâm là giữa chính xác và hiệu năng. Thuật toán chính xác tốn tài nguyên khổng lồ cho bài khó.

Thuật toán xấp xỉ chạy nhanh nhưng đòi chấp nhận sai số. Đánh đổi thứ hai là giữa chi phí kiểm chứng và độ tin cậy.

Thử càng nhiều đầu vào và biên càng tốn kém nhưng càng an toàn. Đánh đổi thứ ba là giữa giải thích được và sức mạnh mô hình.

Mô hình càng phức tạp càng khó giải thích. Với ứng dụng trọng yếu đôi khi phải chấp nhận mô hình yếu hơn nhưng minh bạch hơn.

Giống như cân tiểu ly và cân ước lượng ngoài chợ. Mỗi loại hợp một việc.

## 7. Cạm bẫy tư duy

Thứ nhất: kiểm chứng thuật toán ngẫu nhiên như tất định. Trông đợi cùng một đầu ra mọi lần chạy.

Thứ hai: dùng xấp xỉ mà không đặt ngưỡng sai số từ đầu. Không ai biết lệch bao nhiêu thì chấp nhận được.

Thứ ba: chỉ thử đường hạnh phúc mà quên trường hợp biên. Sự cố thường ẩn náu ở đó.

Thứ tư: coi kiểm chứng là việc một lần cuối dự án. Thực ra thiết kế là quá trình lặp, mỗi vòng đều kiểm chứng lại ba mối quan tâm.

## 8. Ứng dụng của tư duy này

Khung ba mối quan tâm dùng như danh sách kiểm tra mọi buổi đánh giá thiết kế. Đúng chưa, tối ưu chưa, mở rộng được không.

Yêu cầu giải thích được ngày càng vào đặc tả hệ trọng yếu. Như tín dụng, tuyển dụng và y tế.

Hỏi ba câu này sớm giúp tránh sửa lớn về sau. Rẻ hơn nhiều so với vá khi đã triển khai.

## Tóm tắt

- Thiết kế tốt trả lời ba câu hỏi: đúng đắn, tối ưu và mở rộng, theo quá trình lặp.
- Bốn họ tất định, ngẫu nhiên, chính xác, xấp xỉ cần logic kiểm chứng khác nhau.
- Kiểm chứng dùng độ đo so với chân lý, chứng chỉ và bao phủ trường hợp biên.
- Người bán hàng rong quá 30 thành phố minh họa ngưỡng phải chuyển sang xấp xỉ.
- Tính giải thích được với LIME là bắt buộc với ứng dụng trọng yếu.
