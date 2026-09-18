---
title: "Giải thuật ngẫu nhiên và độ chính xác"
description: "Bài toán quyết định, Las Vegas và Monte Carlo, ba độ đo accuracy-precision-recall và quan hệ đánh đổi giữa chúng."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [ngau-nhien, las-vegas, monte-carlo, do-do, fundamentals]
---

# Giải thuật ngẫu nhiên và độ chính xác

## 1. Tổng quan

Đa số người học mặc định thuật toán là dãy chỉ dẫn mà cùng một đầu vào luôn cho cùng một đầu ra sau cùng một quá trình. Thực ra đó chỉ là một lớp con của thế giới thuật toán. Phần này dựng toàn bộ khung lý thuyết gồm bài toán quyết định, hai họ Las Vegas và Monte Carlo, cùng ba độ đo chất lượng là độ chính xác, độ chuẩn xác và độ bao phủ.

## 2. Bài toán quyết định và bài toán phân loại nhị phân

Trước khi phân loại giải thuật ngẫu nhiên, bài này định nghĩa một lớp bài toán đặc biệt hữu ích là bài toán quyết định. Khi thuật toán chỉ trả lời đúng hoặc sai, ta rơi vào lớp bài toán quyết định nhị phân. Thuật toán phân loại nhị phân gán cho dữ liệu một trong hai nhãn, hai nhãn có thể là bất kỳ thứ gì nhưng về khái niệm tương đương với gán nhãn đúng sai cho mỗi điểm.

Việc chỉ xét phân loại nhị phân không hề hạn chế, vì bộ phân loại đa lớp có thể ghép từ nhiều bộ phân loại nhị phân. Một kết quả nền tảng mà bài này nhắc lại là mọi bài toán tối ưu đều diễn đạt được dưới dạng bài toán quyết định và ngược lại. Ví dụ, thay vì tìm đường ngắn nhất trong đồ thị, ta đặt ngưỡng T rồi hỏi có tồn tại đường đi dài không quá T không; giải bài toán quyết định này với các giá trị T khác nhau sẽ cho nghiệm của bài toán tối ưu gốc.

## 3. Họ Las Vegas: đúng nhưng tốn tài nguyên bất định

Họ Las Vegas gồm các giải thuật ngẫu nhiên thỏa hai tính chất: luôn cho nghiệm đúng của bài toán hoặc báo thất bại, và chạy với lượng tài nguyên hữu hạn nhưng không dự đoán được. Điểm mấu chốt là lượng tài nguyên cần dùng không thể dự đoán từ đầu vào.

Ví dụ nổi bật nhất là sắp xếp nhanh ngẫu nhiên: nó luôn cho kết quả sắp xếp đúng, nhưng chốt được chọn ngẫu nhiên ở mỗi bước đệ quy nên thời gian thực thi dao động giữa O(n log n) và O(n bình phương) tùy các lựa chọn ngẫu nhiên. Nói cách khác, họ Las Vegas đánh đổi tính dự đoán được của chi phí lấy sự đảm bảo về tính đúng đắn: bạn chắc chắn nhận đáp án đúng, nhưng không biết phải chờ bao lâu.

## 4. Họ Monte Carlo: tốn tài nguyên xác định nhưng có thể sai

Ngược với Las Vegas, họ Monte Carlo gồm các giải thuật mà đầu ra đôi khi sai. Xác suất sai thường là đánh đổi với tài nguyên đầu tư, và các giải thuật thực tế giữ xác suất này ở mức nhỏ trong khi dùng lượng tính toán và bộ nhớ hợp lý. Bài này lưu ý có tranh luận về việc liệu họ này có xứng gọi là thuật toán hay chỉ là heuristic, và tác giả nghiêng về coi chúng là thuật toán vì dãy bước của chúng vẫn đơn định và được định nghĩa tốt.

Với bài toán quyết định mà đáp án chỉ là đúng hoặc sai, bài này phân ba tình huống: giải thuật luôn đúng khi trả về sai gọi là thiên lệch sai; luôn đúng khi trả về đúng gọi là thiên lệch đúng; và có thể sai ở cả hai phía. Họ Monte Carlo tốn lượng tài nguyên đơn định và thường được dùng như đối ngẫu của Las Vegas: giả sử có giải thuật A luôn đúng nhưng tốn tài nguyên bất định, khi tài nguyên có hạn ta chạy A cho tới khi ra nghiệm hoặc cạn ngân sách. Bằng cách đó ta đánh đổi sự đảm bảo đúng đắn lấy chắc chắn có một đáp án trong thời gian định trước.

## 5. Độ đo accuracy và hạn chế của nó

Khi phân tích các cấu trúc như bộ lọc Bloom hay Treap, xét thời gian chạy và bộ nhớ là tối quan trọng nhưng chưa đủ. Với giải thuật Monte Carlo còn phải hỏi thêm: nó làm việc tốt tới mức nào. Để trả lời cần các độ đo, tức hàm đo khoảng cách giữa nghiệm xấp xỉ và nghiệm tối ưu. Với bài toán phân loại, chất lượng là mức độ mỗi đầu vào được gán đúng lớp.

Độ đo đầu tiên là accuracy, tỉ lệ dự đoán đúng trên tổng số. Bài này định nghĩa qua bốn khái niệm: số điểm vừa được dự đoán đúng vừa thực sự đúng gọi là dương tính thật, và tương tự với lớp sai cho ra âm tính thật. Accuracy bằng tổng dương tính thật và âm tính thật chia cho tổng số điểm, và khi accuracy bằng 1 thì giải thuật luôn đúng.

Hạn chế của accuracy lộ ra trong ví dụ của bài này: giả sử 99 phần trăm điểm thực sự thuộc lớp đúng, thì bộ phân loại luôn trả về nhãn đúng cho mọi điểm có accuracy cao nhất dù trượt toàn bộ điểm lớp sai. Bài học là trên tập dữ liệu lệch, accuracy cao có thể che giấu một mô hình khái quát hóa kém.

## 6. Precision, recall và đường cong đánh đổi

Để vượt qua hạn chế của accuracy, cần theo dõi thông tin từng lớp riêng bằng hai độ đo mới. Precision, còn gọi là giá trị dự đoán dương, là tỉ lệ dương tính thật trên tổng số điểm được dự đoán là đúng. Recall, còn gọi là độ nhạy, là tỉ lệ dương tính thật trên tổng số điểm thực sự đúng. Diễn đạt qua dương tính giả và âm tính giả: precision đo trong số những gì ta khẳng định là đúng thì bao nhiêu là đúng thật, còn recall đo trong số những gì đúng thật thì ta bắt được bao nhiêu.

Trực giác quan trọng là accuracy chỉ đo ta dự đoán tốt ra sao, còn precision và recall cân thành công với sai lầm của từng phía đối ngẫu. Hai độ đo này không độc lập và không thể cải thiện cả hai vô hạn: cải thiện recall thường làm precision kém đi đôi chút và ngược lại.

Bài này minh họa bằng bộ lọc Bloom: khi nó trả lời sai thì chắc chắn đúng, nên recall của nó luôn bằng 100 phần trăm, tức không bao giờ có âm tính giả. Với mọi giải thuật thiên lệch một phía, cách duy nhất để cải thiện precision là đầu tư thêm tài nguyên. Bài này cũng nhắc tới độ đo F kết hợp precision và recall thành một công thức duy nhất, nhưng xếp ngoài phạm vi trình bày.

## 7. So sánh và đánh đổi

Las Vegas và Monte Carlo là hai cực của một đánh đổi: cực thứ nhất đảm bảo đúng đắn nhưng chi phí bất định, cực thứ hai đảm bảo chi phí nhưng đáp án có thể sai. Kỹ thuật dừng sớm biến Las Vegas thành Monte Carlo chính là di chuyển trên trục đánh đổi này cho phù hợp ngân sách thực tế. Trong nội bộ họ Monte Carlo, precision và recall là một đánh đổi thứ hai: siết chặt tiêu chuẩn để tăng precision sẽ làm tuột mất một số ca đúng thật và giảm recall. Với giải thuật thiên lệch một phía như bộ lọc Bloom, đánh đổi này biến mất ở một chiều và chỉ còn đánh đổi giữa precision với tài nguyên.

## 8. Cạm bẫy tư duy

Cạm bẫy đầu tiên là mặc định mọi thuật toán đều tất định, rồi ngạc nhiên khi cùng đầu vào cho đầu ra khác nhau giữa các lần chạy. Cạm bẫy thứ hai là tôn thờ accuracy trên dữ liệu lệch, tưởng mô hình luôn đoán lớp đa số là mô hình tốt. Cạm bẫy thứ ba là tin rằng có thể tối ưu precision và recall cùng lúc vô hạn, trong khi chúng giằng co nhau theo bản chất. Cạm bẫy thứ tư là lẫn lộn hai họ: đòi hỏi giải thuật Monte Carlo phải luôn đúng, hoặc đòi hỏi Las Vegas phải chạy xong trong thời gian cố định.

## 9. Ứng dụng của tư duy này

Khung hai họ giải thuật là chìa khóa để đọc hiểu các cấu trúc ngẫu nhiên trong khóa học. Ba độ đo accuracy, precision và recall là ngôn ngữ chuẩn để đọc báo cáo mô hình học máy và để đặt mục tiêu kiểm chứng.

## 10. Tóm tắt + Sau bài này bạn hiểu được gì

Bài toán quyết định nhị phân là khung chung để định nghĩa giải thuật ngẫu nhiên. Họ Las Vegas luôn đúng nhưng tốn tài nguyên bất định; họ Monte Carlo tốn tài nguyên xác định nhưng đáp án có thể sai, với ba kiểu thiên lệch sai, thiên lệch đúng và sai cả hai phía. Ba độ đo accuracy, precision và recall đo chất lượng phân loại, trong đó accuracy dễ gây hiểu lầm trên dữ liệu lệch còn precision và recall giằng co nhau theo đường cong đánh đổi.

Sau bài này bạn hiểu được:

- Vì sao chỉ xét phân loại nhị phân mà không mất tổng quát, và cách quy bài toán tối ưu về bài toán quyết định.
- Định nghĩa và ví dụ của hai họ Las Vegas và Monte Carlo cùng kỹ thuật dừng sớm biến họ này thành họ kia.
- Định nghĩa accuracy qua dương tính thật và âm tính thật, cùng ví dụ mà bộ phân loại vô dụng lại có accuracy cao nhất.
- Định nghĩa precision và recall cùng bản chất đánh đổi giữa chúng trên đường cong precision-recall.
- Trường hợp đặc biệt của giải thuật thiên lệch một phía mà recall luôn 100 phần trăm.

Tự kiểm: vì sao sắp xếp nhanh ngẫu nhiên thuộc họ Las Vegas? Vì sao accuracy cao trên dữ liệu lệch 99 phần trăm chưa nói lên chất lượng mô hình? Vì sao với bộ lọc Bloom, cải thiện precision chỉ còn cách đầu tư thêm tài nguyên?
