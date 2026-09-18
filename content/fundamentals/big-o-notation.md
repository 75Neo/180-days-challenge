---
title: "Ký hiệu Big-O và các lớp tăng trưởng"
description: "Nguồn gốc ký hiệu Bachmann, định nghĩa chặn trên, chặn khít và chặn lỏng, các quy tắc rút gọn và bốn lớp tăng trưởng nền tảng."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [big-o, do-phuc-tap, tang-truong, fundamentals]
---

# Ký hiệu Big-O và các lớp tăng trưởng

## 1. Tổng quan

Khi hai thuật toán cùng giải một bài toán, câu hỏi công bằng nhất không phải là thuật toán nào chạy nhanh hơn trên một chiếc máy cụ thể, mà là chi phí của mỗi thuật toán tăng nhanh ra sao khi kích thước đầu vào lớn dần. Bài này trình bày nguồn gốc ký hiệu từ công trình của Bachmann năm 1894, định nghĩa chặn trên, phân biệt chặn khít với chặn lỏng, các quy tắc rút gọn, và bốn lớp tăng trưởng nền tảng.

## 2. Nguồn gốc: Bachmann và ý tưởng bậc tăng trưởng

Ký hiệu Big-O được nhà toán học Paul Bachmann giới thiệu năm 1894, với phát biểu đại ý rằng ký hiệu O(n) diễn đạt một đại lượng mà bậc của nó theo n không vượt quá bậc của n.

Ý tưởng trung tâm rất giản dị. Thay vì đếm chính xác từng phép tính hay đo thời gian bằng đồng hồ, ta hỏi: khi kích thước đầu vào n tiến dần tới vô cùng, chi phí của thuật toán tăng theo hình dạng đường cong nào? Hai con số đo được trên một bộ dữ liệu thử nghiệm cụ thể, ví dụ thuật toán A tốn 100 bước còn thuật toán B tốn 10 bước, chưa nói lên điều gì về tương lai. Nhưng nếu chứng minh được số bước của A tăng tỉ lệ với bình phương của n còn B chỉ tăng tỉ lệ với n, ta đã có cơ sở vững chắc để dự đoán hiệu năng trên mọi kích thước đầu vào, trên mọi máy.

## 3. Định nghĩa chặn trên và cặp hằng số c, n0

Big-O được giải thích qua hai hàm f(n) và g(n). Nói f thuộc O(g) nghĩa là khi n tiến tới vô cùng, tỉ số f(n) chia cho g(n) vẫn bị chặn, không phình to vô hạn. Nói cách khác, dù đầu vào lớn tới đâu, f(n) cũng không tăng nhanh hơn g(n) một cách mất kiểm soát.

Ví dụ trong bài này xét hàm f(n) bằng 1000 lần n bình phương cộng 100 lần n cộng 10, và g(n) bằng n bình phương. Lấy tỉ số hai hàm ta được 1000 cộng 100 chia n cộng 10 chia n bình phương, và khi n càng lớn thì tỉ số bị chặn quanh giá trị 1000. Vậy f(n) thuộc O(n bình phương): nếu đầu vào tăng gấp đôi, chi phí tăng gấp bốn lần.

Định nghĩa hình thức hơn: $g(n) \in O(f(n))$ nghĩa là tồn tại một hằng số thực $c$ và một ngưỡng $n_0$ sao cho với mọi $n$ lớn hơn $n_0$:

$$
g(n) \le c \cdot f(n)
$$

Ví dụ minh họa: với $f(n) = n$ và $g(n) = 40 + 3n$, ta chọn $c = 4$ và ngưỡng $n_0 = 40$. Kiểm tra bằng số cụ thể: tại n bằng 30, vế trái là 130 còn vế phải là 120 nên bất đẳng thức chưa thỏa; tại n bằng 40 cả hai vế cùng bằng 160; tại n bằng 41 vế trái là 163 còn vế phải là 164, và từ đó về sau bất đẳng thức luôn đúng. Hai chi tiết đáng nhớ là cụm từ với mọi n đủ lớn và hằng số c không phụ thuộc vào n.

## 4. Chặn khít và chặn lỏng

Một điểm tinh tế cần nhớ: mọi hàm đều thuộc về vô số lớp Big-O khác nhau, nhưng không phải lớp nào cũng hữu ích. Xét hàm chi phí cộng dồn n cộng 4 bước: ta chứng minh được nó thuộc O(n) bằng cách chọn c bằng 2 và ngưỡng n0 bằng 4, vì n cộng 4 luôn nhỏ hơn hoặc bằng 2 lần n khi n lớn hơn 4. Nhưng về mặt thuần túy toán học, ta cũng có thể nói nó thuộc O(n bình phương), thậm chí O(n lũy thừa 1000), và các phát biểu đó vẫn đúng. Vấn đề là chúng vô dụng: biết một thuật toán chạy nhanh hơn tuổi của vũ trụ trên đầu vào nhỏ thì có ích gì cho việc ra quyết định?

Vì vậy thực hành tốt là luôn tìm chặn khít, tức lớp hàm nhỏ nhất vẫn chặn được chi phí thực. Khi nêu thời gian chạy bằng Big-O mà không nói gì thêm, người ta thường ngầm hiểu đó vừa là chặn trên vừa là chặn dưới; ký hiệu chính xác cho chặn cả hai phía là Theta.

## 5. Các quy tắc rút gọn khi làm việc với Big-O

Có năm quy tắc tổng kết, cùng một tinh thần với các hệ quả của định nghĩa.

Quy tắc vòng lặp đơn: lặp một dãy bước đúng n lần thì hiệu năng là O(n). Quy tắc vòng lặp lồng nhau: vòng ngoài n1 bước, mỗi bước chạy vòng trong n2 bước thì tổng là O(n1 nhân n2). Quy tắc nối tiếp: chạy pha f(n) rồi pha g(n) thì tổng là O(f(n) cộng g(n)). Quy tắc số hạng trội thắng: O(1 cộng n) rút gọn thành O(n). Quy tắc bỏ hằng số: O(k nhân f(n)) chính là O(f(n)) với mọi hằng số k.

Diễn giải cùng các quy tắc bằng ngôn ngữ khác: hằng số nhân không quan trọng, cộng hai biểu thức Big-O thì số hạng lớn hơn thắng, còn nhân hai biểu thức thì không thể rút gọn trừ khi một trong hai là hằng số. Bài này cũng lưu ý một lỗi suy luận phổ biến: vẽ đồ thị hay thử vài giá trị cụ thể chỉ giúp hình dung xu hướng, chứ không thể thay thế chứng minh đại số, vì có những cặp hàm giao nhau nhiều lần và kết luận vội từ một điểm giao là sai lầm.

## 6. Bốn lớp tăng trưởng nền tảng

Lớp hằng số O(1) mô tả thuật toán tốn cùng một lượng chi phí bất kể kích thước đầu vào. Ví dụ điển hình là truy cập phần tử tại vị trí cho trước của mảng, thao tác đẩy và bật của ngăn xếp, hay tra cứu bảng băm trong trường hợp thông thường. Đặc trưng của lớp này là đường chi phí nằm ngang khi n tăng.

Lớp logarit O(log n) mô tả thuật toán mà mỗi bước lại thu hẹp đáng kể phạm vi còn phải xử lý, điển hình là tìm kiếm nhị phân trên mảng đã sắp xếp: mỗi lần so sánh loại bỏ được một nửa không gian tìm kiếm còn lại.

Lớp tuyến tính O(n) mô tả chi phí tăng đều theo đầu vào, điển hình là duyệt toàn bộ danh sách để tính tổng hay tìm giá trị nhỏ nhất. Lớp bậc hai O(n bình phương) mô tả chi phí tăng theo bình phương đầu vào, điển hình là các vòng lặp lồng nhau và việc liệt kê mọi cặp không có thứ tự trong danh sách, với số cặp bằng n nhân n trừ 1 rồi chia 2. Trong bốn lớp này, O(n bình phương) kém hiệu quả nhất còn O(log n) tốt nhất, và các thuật toán bậc hai trở lên không thể dùng cho dữ liệu lớn.

## 7. So sánh và đánh đổi

Big-O là công cụ so sánh mang tính dự báo, đối lập với đo thực nghiệm sau khi cài đặt. Thực hành khôn ngoan là dùng Big-O để loại bỏ sớm các thiết kế xấu, rồi mới đo thực nghiệm để chọn trong số các ứng viên còn lại.

## 8. Cạm bẫy tư duy

Cạm bẫy phổ biến nhất là lẫn lộn hằng số với hình dạng tăng trưởng: một thuật toán O(n) với hằng số khổng lồ có thể thua thuật toán O(n bình phương) trên mọi đầu vào thực tế. Cạm bẫy thứ hai là hài lòng với chặn lỏng đúng nhưng vô dụng. Cạm bẫy thứ ba là suy luận từ vài điểm đo thực nghiệm rồi gán nhãn Big-O, trong khi các hàm có thể giao nhau nhiều lần. Cạm bẫy thứ tư là quên ngưỡng n0: với dữ liệu nhỏ, việc chọn thuật toán hầu như không quan trọng.

## 9. Ứng dụng của tư duy này

Tư duy Big-O được dùng mỗi khi phải chọn thuật toán cho dữ liệu có khả năng phình to. Nó cũng là ngôn ngữ chung để đọc tài liệu và trao đổi về hiệu năng mà không cần thống nhất phần cứng.

## 10. Tóm tắt + Sau bài này bạn hiểu được gì

Big-O là ngôn ngữ mô tả hình dạng tăng trưởng của chi phí theo kích thước đầu vào, bắt nguồn từ công trình của Bachmann năm 1894. Định nghĩa chặn trên dựa trên cặp hằng số c và ngưỡng n0 cho phép bỏ qua hằng số nhân và hành vi với đầu vào nhỏ. Thực hành tốt đòi hỏi tìm chặn khít thay vì dừng ở chặn lỏng đúng nhưng vô dụng, vận dụng thành thạo năm quy tắc rút gọn, và nhận diện bốn lớp nền tảng từ hằng số tới bậc hai.

Sau bài này bạn hiểu được:

- Vì sao Big-O đo hình dạng tăng trưởng thay vì thời gian tuyệt đối, và vai trò của hằng số c cùng ngưỡng n0.
- Phân biệt chặn khít với chặn lỏng, và vì sao cộng đồng ngầm hiểu Big-O như chặn cả hai phía khi không nói gì thêm.
- Cách áp dụng năm quy tắc rút gọn cho vòng lặp đơn, vòng lặp lồng nhau, pha nối tiếp và hằng số nhân.
- Đặc trưng và ví dụ đời thực của bốn lớp O(1), O(log n), O(n) và O(n bình phương).
- Khi nào phân tích Big-O là đủ để quyết định, và khi nào cần đo thực nghiệm bổ sung.

Tự kiểm: với hàm chi phí 1000 lần n bình phương cộng 100 lần n cộng 10, vì sao đáp án đúng là O(n bình phương) chứ không phải O(n)? Vì sao phát biểu thuật toán tuyến tính thuộc O(n lũy thừa 1000) tuy đúng mà vô dụng? Vì sao không thể kết luận Big-O chỉ bằng cách thử vài giá trị n cụ thể?
