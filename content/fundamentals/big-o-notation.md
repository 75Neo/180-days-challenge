---
title: "Ký hiệu Big-O và các lớp tăng trưởng"
description: "Nguồn gốc ký hiệu Bachmann, định nghĩa chặn trên, chặn khít và chặn lỏng, các quy tắc rút gọn và bốn lớp tăng trưởng nền tảng."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [big-o, do-phuc-tap, tang-truong, fundamentals]
---

# Ký hiệu Big-O và các lớp tăng trưởng

## 1. Tổng quan

Hai thuật toán cùng giải một bài toán. Ta không hỏi máy nào chạy nhanh hơn.

Ta hỏi chi phí tăng nhanh ra sao khi đầu vào lớn dần. Big-O là ngôn ngữ trả lời câu hỏi đó.

## 2. Nguồn gốc: Bachmann và ý tưởng bậc tăng trưởng

Paul Bachmann đưa ra ký hiệu O(n) năm 1894. Ý ông rất gọn: bậc tăng của chi phí không vượt bậc của n.

Thay vì đếm từng phép tính, ta nhìn hình dạng đường cong. Thuật toán A tốn 100 bước, B tốn 10 bước trên mẫu thử.

Hai con số đó chưa nói lên tương lai. Nhưng nếu A tăng theo bình phương còn B tăng theo n, ta đoán được mọi kích thước đầu vào.

## 3. Định nghĩa chặn trên và cặp hằng số c, n0

Nói $f(n)$ thuộc $O(g(n))$ nghĩa là tỉ số $f(n)/g(n)$ bị chặn khi n lớn dần. Dù đầu vào phình to, $f(n)$ không vượt $g(n)$ một cách mất kiểm soát.

Ví dụ: $f(n) = 1000n^2 + 100n + 10$ thuộc $O(n^2)$. Tỉ số $f(n)/n^2$ quanh quẩn gần 1000.

Nếu đầu vào tăng gấp đôi, chi phí tăng gấp bốn lần. Đó là bản chất của bậc hai.

Định nghĩa chặt chẽ: $g(n) \in O(f(n))$ nghĩa là có hằng số $c$ và ngưỡng $n_0$ sao cho mọi $n > n_0$:

$$g(n) \le c \cdot f(n)$$

Ví dụ cụ thể: $g(n) = 40 + 3n$, $f(n) = n$, chọn $c = 4$ và $n_0 = 40$. Tại $n = 30$, vế trái 130 lớn hơn vế phải 120 nên chưa đạt.

Tại $n = 40$, hai vế cùng bằng 160. Từ $n = 41$ trở đi, bất đẳng thức luôn đúng.

Hai điểm cần nhớ: chỉ xét n đủ lớn, và $c$ không phụ thuộc n. Giống như chỉ so tốc độ xe trên đường dài, không so lúc mới đề pa.

## 4. Chặn khít và chặn lỏng

Một hàm thuộc vô số lớp Big-O. Nhưng không phải lớp nào cũng hữu ích.

Ví dụ hàm $n + 4$: chọn $c = 2$, $n_0 = 4$ thì nó thuộc $O(n)$. Về mặt toán học, nó cũng thuộc $O(n^2)$, thậm chí $O(n^{1000})$.

Các phát biểu sau vẫn đúng nhưng vô dụng. Giống như nói đi chợ tốn ít hơn ngân sách cả nước.

Thực hành tốt là tìm chặn khít. Đó là lớp nhỏ nhất vẫn chặn được chi phí thật.

Khi ai đó nêu Big-O mà không nói thêm, ta ngầm hiểu đó là chặn cả hai phía. Ký hiệu chính xác cho chặn hai phía là Theta.

## 5. Các quy tắc rút gọn khi làm việc với Big-O

Có năm quy tắc, cùng một tinh thần.

| Quy tắc | Nội dung | Kết quả |
|---|---|---|
| Vòng lặp đơn | Lặp n lần | $O(n)$ |
| Vòng lặp lồng | Ngoài $n_1$, trong $n_2$ | $O(n_1 \times n_2)$ |
| Nối tiếp | Chạy pha $f(n)$ rồi $g(n)$ | $O(f(n) + g(n))$ |
| Số hạng trội | Cộng hai biểu thức | Giữ số hạng lớn hơn |
| Bỏ hằng số | Nhân với hằng số $k$ | Bỏ $k$ đi |

Ví dụ: $O(1 + n)$ thành $O(n)$. Ví dụ: $O(k \times f(n))$ chính là $O(f(n))$.

Một lỗi phổ biến: vẽ đồ thị vài điểm rồi kết luận Big-O. Hai đường cong có thể giao nhau nhiều lần. Vẽ chỉ giúp hình dung, chứng minh vẫn cần đại số.

## 6. Bốn lớp tăng trưởng nền tảng

Lớp hằng số $O(1)$ tốn chi phí như nhau với mọi n. Ví dụ: đọc phần tử mảng theo vị trí, đẩy và bật ngăn xếp.

Đường chi phí của nó nằm ngang. Giống như lấy một món trong tủ, tủ to hay nhỏ cũng một tay.

Lớp logarit $O(\log n)$ thu hẹp phạm vi mỗi bước. Ví dụ: tìm kiếm nhị phân loại bỏ một nửa mảng sau mỗi lần so sánh.

Giống như tra từ điển: mở giữa, bỏ nửa đầu, rồi lặp lại. Trong bốn lớp, $O(\log n)$ tốt nhất.

Lớp tuyến tính $O(n)$ tăng đều theo đầu vào. Ví dụ: duyệt danh sách để tính tổng hay tìm số nhỏ nhất.

Giống như điểm danh cả lớp: lớp đông gấp đôi thì mất giờ gấp đôi. Lớp bậc hai $O(n^2)$ tăng theo bình phương đầu vào.

Ví dụ: hai vòng lặp lồng nhau, liệt kê mọi cặp trong danh sách. Số cặp bằng $n(n-1)/2$. Giống như mọi người trong lớp bắt tay nhau từng cặp.

Trong bốn lớp, $O(n^2)$ kém nhất. Từ bậc hai trở lên không dùng được cho dữ liệu lớn.

## 7. So sánh và đánh đổi

Big-O giúp dự báo trước khi cài đặt. Đo thực nghiệm giúp chọn sau khi cài đặt.

Cách khôn ngoan: dùng Big-O loại sớm thiết kế xấu. Rồi đo thực nghiệm trong nhóm ứng viên còn lại.

## 8. Cạm bẫy tư duy

Thứ nhất: lẫn hằng số với hình dạng tăng trưởng. Thuật toán $O(n)$ với hằng số khổng lồ có thể thua $O(n^2)$ trên dữ liệu thực tế.

Thứ hai: hài lòng với chặn lỏng đúng nhưng vô dụng. Thứ ba: đo vài điểm rồi gán nhãn Big-O vội vàng.

Thứ tư: quên ngưỡng $n_0$. Với dữ liệu nhỏ, chọn thuật toán nào cũng gần như nhau.

## 9. Ứng dụng của tư duy này

Mỗi khi dữ liệu có thể phình to, hãy nghĩ Big-O trước. Nó cũng là ngôn ngữ chung để đọc tài liệu.

Hai người không cần cùng máy vẫn bàn được hiệu năng. Chỉ cần cùng nói Big-O.

## Tóm tắt

- Big-O mô tả hình dạng tăng trưởng của chi phí, bắt nguồn từ Bachmann năm 1894.
- Chặn trên dùng cặp $c$ và $n_0$, cho phép bỏ hằng số và đầu vào nhỏ.
- Luôn tìm chặn khít thay vì chặn lỏng đúng nhưng vô dụng.
- Nắm năm quy tắc rút gọn và bốn lớp $O(1)$, $O(\log n)$, $O(n)$, $O(n^2)$.
- Dùng Big-O để loại sớm, đo thực nghiệm để chốt cuối.
