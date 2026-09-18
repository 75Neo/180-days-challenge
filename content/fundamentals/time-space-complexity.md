---
title: "Độ phức tạp thời gian và không gian"
description: "Hai trục phân tích độ phức tạp, ba kịch bản best-worst-average, ba kiểu vòng lặp hội tụ-phân kỳ-phẳng và nguyên tắc ước lượng chi phí."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [time-complexity, space-complexity, fundamentals]
---

# Độ phức tạp thời gian và không gian

## 1. Tổng quan

Mọi thuật toán đều tiêu thụ hai tài nguyên hữu hạn là thời gian chạy và bộ nhớ. Bài này trình bày hai trục phân tích thời gian và không gian, ba kịch bản hiệu năng gồm tốt nhất, tệ nhất và trung bình, ba kiểu vòng lặp gồm hội tụ, phân kỳ và phẳng, cùng các nguyên tắc ước lượng và tiết kiệm chi phí mà bài này đúc kết.

## 2. Hai trục phân tích: thời gian và không gian

Phân tích độ phức tạp thời gian ước lượng thuật toán mất bao lâu để hoàn thành công việc dựa trên cấu trúc của chính nó. Điểm đáng chú ý mà bài này nhấn mạnh là phân tích này không phụ thuộc vào phần cứng, ngăn xếp phần mềm lúc chạy hay ngôn ngữ lập trình. Mục tiêu của nó là trả lời hai câu hỏi lớn: thuật toán có mở rộng được không, và nó xử lý tập dữ liệu lớn hơn ra sao.

Phân tích độ phức tạp không gian ước lượng lượng bộ nhớ cần thiết để thực thi thuật toán, bao gồm bộ nhớ cho dữ liệu đầu vào, cho các cấu trúc dữ liệu tạm thời sinh ra trong lúc chạy, và cho bản thân quá trình thực thi. Bài này nhận định phân tích không gian ngày càng quan trọng trong thời đại điện toán phân tán: nếu không phân tích cẩn thận ngay từ khâu thiết kế, bộ nhớ không đủ cho các cấu trúc tạm thời sẽ gây tràn đĩa và làm sụt giảm nghiêm trọng hiệu năng.

Hai phương pháp tiếp cận phân tích được bài này đối chiếu: phương pháp đo sau khi cài đặt, tức triển khai các thuật toán ứng viên rồi so sánh hiệu năng thực tế, và phương pháp lý thuyết trước khi cài đặt, tức xấp xỉ hiệu năng bằng toán học mà không tốn công cài đặt.

## 3. Ba kịch bản hiệu năng: tốt nhất, tệ nhất, trung bình

Hiệu năng của một thuật toán thường phụ thuộc vào hình dạng dữ liệu đầu vào. Vì vậy bài này trình bày ba kịch bản phân tích.

Kịch bản tốt nhất xét trường hợp dữ liệu đầu vào được tổ chức theo cách có lợi nhất để thuật toán đạt hiệu năng cao nhất. Phân tích này cho ra cận trên của hiệu năng, tức mức tốt nhất có thể hy vọng, nhưng hiếm khi phản ánh thực tế sử dụng.

Kịch bản tệ nhất tìm thời gian tối đa mà thuật toán có thể tốn trong một tập điều kiện cho trước. Giá trị của nó nằm ở sự đảm bảo: bất kể điều kiện ra sao, hiệu năng thực tế luôn tốt hơn con số phân tích đưa ra.

Kịch bản trung bình chia các đầu vào khả dĩ thành nhiều nhóm, lấy một đầu vào đại diện từ mỗi nhóm để phân tích, rồi tính trung bình hiệu năng các nhóm. Hạn chế của nó là không phải lúc nào cũng chính xác, vì cần xét mọi tổ hợp và khả năng của đầu vào, điều không phải lúc nào cũng dễ thực hiện. Trong thực tế, người thiết kế thường dựa vào kịch bản tệ nhất để ra quyết định an toàn, dùng kịch bản trung bình để dự báo thực tế, và xem kịch bản tốt nhất như mốc tham khảo lạc quan.

## 4. Ba kiểu vòng lặp và ý nghĩa với bộ nhớ

Các thuật toán phức tạp thường mang tính lặp: thay vì đưa toàn bộ thông tin vào bộ nhớ một lúc, chúng điền dần các cấu trúc dữ liệu qua từng vòng lặp. Bài này phân loại ba kiểu vòng lặp với ảnh hưởng khác nhau tới độ phức tạp không gian.

Vòng lặp hội tụ là kiểu mà lượng dữ liệu xử lý trong mỗi vòng giảm dần theo tiến trình thuật toán, và thách thức chính nằm ở các vòng lặp đầu tiên vốn nặng nề nhất. Các hạ tầng đám mây co giãn phù hợp với kiểu này vì có thể cấp nhiều tài nguyên lúc đầu rồi thu hẹp dần.

Vòng lặp phân kỳ là kiểu mà lượng dữ liệu xử lý mỗi vòng tăng dần theo tiến trình. Vì độ phức tạp không gian tăng theo thời gian, cần đặt ràng buộc để hệ thống không mất ổn định, bằng cách giới hạn số vòng lặp hoặc giới hạn kích thước dữ liệu ban đầu.

Vòng lặp phẳng là kiểu mà lượng dữ liệu xử lý mỗi vòng giữ nguyên không đổi. Vì độ phức tạp không gian không thay đổi nên không cần tính co giãn của hạ tầng.

Để ước lượng độ phức tạp không gian, bài này hướng dẫn tập trung vào vòng lặp phức tạp nhất. Trong nhiều thuật toán, càng tiến về nghiệm thì nhu cầu tài nguyên càng giảm, nên các vòng lặp đầu tiên cho ước lượng tốt nhất. Khi đã chọn được vòng lặp đó, ta ước lượng tổng bộ nhớ cho cấu trúc tạm thời, thực thi và giá trị đầu vào.

## 5. Nguyên tắc tiết kiệm không gian và tư duy mở rộng

Bài này đưa ra ba chỉ dẫn để giảm thiểu độ phức tạp không gian. Thứ nhất, khi có thể, hãy thiết kế thuật toán dưới dạng lặp thay vì đưa tất cả vào bộ nhớ cùng lúc. Thứ hai, khi phải lựa chọn, hãy ưu tiên số vòng lặp nhiều và mịn hơn số vòng lặp ít và thô. Thứ ba, chỉ đưa vào bộ nhớ thông tin cần cho xử lý hiện tại, thứ gì không cần thì đẩy ra khỏi bộ nhớ.

Hai câu hỏi mở rộng mà phân tích thời gian phải trả lời cũng được bài này nhấn mạnh. Thứ nhất, thuật toán có tận dụng được hạ tầng co giãn hiện đại không, tức có dùng được thêm CPU, nhân xử lý, GPU và bộ nhớ khi được cấp thêm không. Thứ hai, thuật toán xử lý tập dữ liệu lớn hơn ra sao, vì hiệu năng ngày càng trở nên quan trọng trong thế giới dữ liệu lớn.

## 6. So sánh và đánh đổi

Trục thời gian và trục không gian thường giằng co nhau: dùng thêm bộ nhớ để lưu kết quả trung gian có thể rút ngắn thời gian, còn tiết kiệm bộ nhớ bằng cách tính lại nhiều lần sẽ kéo dài thời gian. Phân tích cả hai trục giúp người thiết kế nhìn thấy điểm cân bằng thay vì tối ưu mù quáng một trục.

Đánh đổi thứ hai nằm giữa kịch bản tệ nhất và kịch bản trung bình. Thiết kế theo kịch bản tệ nhất cho sự đảm bảo chắc chắn nhưng có thể quá thận trọng và tốn kém; thiết kế theo kịch bản trung bình cho hiệu năng thực tế tốt hơn nhưng rủi ro khi gặp đầu vào thù địch. Đánh đổi thứ ba nằm giữa vòng lặp mịn tiết kiệm bộ nhớ và chi phí điều phối tăng thêm khi số vòng lặp quá nhiều.

## 7. Cạm bẫy tư duy

Cạm bẫy đầu tiên là đo hiệu năng trên đầu vào thuận lợi rồi tưởng đó là hiệu năng thực, ví dụ benchmark trên dữ liệu đã sắp xếp. Cạm bẫy thứ hai là chỉ phân tích thời gian mà bỏ quên không gian, để rồi khi triển khai mới phát hiện tràn bộ nhớ và tràn đĩa. Cạm bẫy thứ ba là lẫn lộn hai trục: cho rằng thuật toán nhanh thì mặc nhiên ít tốn bộ nhớ, trong khi nhiều thuật toán nhanh chính nhờ dùng nhiều bộ nhớ tạm. Cạm bẫy thứ tư là áp dụng kết quả phân tích trên mẫu dữ liệu nhỏ cho dữ liệu lớn mà không xét lại tính mở rộng, đúng điều bài này cảnh báo khi nhiều thuật toán lúc phát triển chỉ thử trên mẫu nhỏ.

## 8. Ứng dụng của tư duy này

Tư duy hai trục được dùng ngay từ bước đặc tả yêu cầu phi chức năng: ngưỡng thời gian phản hồi và ngưỡng bộ nhớ khả dụng sẽ loại bỏ hàng loạt thiết kế không phù hợp trước khi tốn công cài đặt. Nó cũng định hướng lựa chọn hạ tầng triển khai theo kiểu vòng lặp của thuật toán.

## 9. Tóm tắt + Sau bài này bạn hiểu được gì

Độ phức tạp thời gian đo tốc độ tăng của thời gian chạy theo cấu trúc thuật toán, độc lập với phần cứng; độ phức tạp không gian đo lượng bộ nhớ cho đầu vào, cấu trúc tạm thời và quá trình thực thi. Ba kịch bản tốt nhất, tệ nhất và trung bình cho ba góc nhìn bổ sung nhau về hiệu năng. Ba kiểu vòng lặp hội tụ, phân kỳ và phẳng quyết định chiến lược cấp phát bộ nhớ và lựa chọn hạ tầng.

Sau bài này bạn hiểu được:

- Vì sao phân tích thời gian độc lập với phần cứng còn phân tích không gian gắn chặt với thiết kế cấu trúc tạm thời.
- Ý nghĩa và giới hạn của từng kịch bản best, worst và average, cùng cách chọn kịch bản phù hợp khi ra quyết định.
- Ba kiểu vòng lặp và cách xác định vòng lặp phức tạp nhất để ước lượng không gian.
- Ba chỉ dẫn tiết kiệm bộ nhớ và hai câu hỏi mở rộng về hạ tầng co giãn.
- Các đánh đổi giữa thời gian và không gian trong thiết kế thuật toán.

Tự kiểm: vì sao benchmark trên dữ liệu đã sắp xếp cho con số phi thực tế? Vòng lặp nào trong ba kiểu đòi hỏi đặt ràng buộc số vòng lặp rõ ràng nhất? Vì sao thuật toán nhanh chưa chắc đã tiết kiệm bộ nhớ?
