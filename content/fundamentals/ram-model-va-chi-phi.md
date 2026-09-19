---
title: "Mô hình RAM và chi phí tính toán"
description: "Các giả định của mô hình RAM, cách đếm bước trừu tượng, bậc tăng trưởng và ý nghĩa của việc bỏ qua hằng số."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [ram-model, chi-phi, ly-thuyet, fundamentals]
---

## 1. Tổng quan

Mọi phát biểu về độ phức tạp đều đứng trên một mô hình tính toán. Đó là tập quy ước về phép nào tốn bao nhiêu chi phí.

Không thống nhất mô hình thì so hai thuật toán như đua trên hai địa hình khác nhau. Mô hình RAM là máy trừu tượng tối giản để đếm bước logic.

Thay vì đếm giây hay lệnh máy cụ thể. Bài này trình bày vì sao cần mô hình, các giả định RAM, cách đếm bước và ý nghĩa bỏ hằng số.

## 2. Vì sao cần một mô hình trừu tượng

Bài này mở đầu bằng câu hỏi ngây thơ: hiệu năng là gì, đo bằng gì. Đo giờ chạy trên một đầu vào nghe thẳng thắn.

Nhưng kết quả nhiễu vì chip đa nhân, hệ điều hành và tiến trình nền. Tệ hơn, con số tuyệt đối gắn chặt với máy chạy thử.

Nên nó không có ý nghĩa phổ quát. So tương đối bằng benchmark vẫn còn quá nhiều biến số.

Đếm lệnh thì gắn với nền tảng và ngôn ngữ. Lối thoát là trừu tượng hóa chi tiết ít quan trọng bằng mô hình tối giản.

Đó chính là mô hình RAM. Giống như thi chạy cùng một đường mới so được.

## 3. Các giả định của mô hình RAM

Mô hình RAM coi máy tính là bộ nhớ truy cập ngẫu nhiên và tập phép tính cơ sở. Có bốn giả định nền tảng.

| Giả định | Nội dung |
|---|---|
| Phép cơ sở | Số học, rẽ nhánh, gọi hàm đều tốn một bước |
| Tổ hợp | Vòng lặp và chương trình con tốn theo số lần thực hiện |
| Truy cập nhớ | Mỗi lần đọc ghi bộ nhớ tốn một bước |
| Bộ nhớ | Coi như vô hạn |

Giả định bộ nhớ vô hạn nghe phi thực tế. Nhưng mô hình cố tình không phân biệt nhớ đệm, RAM, đĩa hay kho dữ liệu.

Nhờ đó hiệu năng đo bằng số bước logic trên đầu vào cho trước. Lấy món nào trong tủ cũng tính một tay.

Một giả định ngầm nữa: mỗi ô nhớ chứa một số có kích thước giới hạn (cỡ $\log n$ bit). Nếu cho phép số nguyên lớn tùy ý với phép nhân một bước, mô hình sẽ "gian lận": nhân hai số một triệu chữ số không thể tốn một bước.

## 4. Từ đếm bước sang bậc tăng trưởng

Có cách đếm bước rồi, ta hỏi tiếp: cải thiện nào mới đáng kể. Biến động nhỏ về số bước hiếm khi có ý nghĩa.

Thay vào đó ta nghĩ theo bậc độ lớn: gấp đôi, gấp mười, gấp trăm. Bước giác ngộ thứ hai còn quan trọng hơn.

Phải biểu diễn số bước thành hàm của kích thước bài toán. Nói A tốn 100 bước, B tốn 10 bước trên một mẫu thử thì chưa dự báo được gì.

Nhưng nếu trên mảng n phần tử, A đổi chỗ tỉ lệ $n \times n$ còn B tỉ lệ $n$. Ta đã có công cụ dự báo mọi kích thước đầu vào.

Chính tại đây ký hiệu Big-O xuất hiện để phát biểu bậc tăng trưởng. Mô hình RAM là mặt đếm chi phí, Big-O là mặt phát biểu chi phí.

Hai mặt gắn chặt thành một khung phân tích hoàn chỉnh. Chi tiết Big-O đã trình bày ở bài Big-O.

## 5. Hệ quả: hằng số không quan trọng và số hạng trội thắng

Từ định nghĩa chặn trên, bài này rút ra hệ quả thực tiễn sâu sắc. Thứ nhất, ta chỉ quan tâm n rất lớn, không bận tâm n nhỏ.

Ví dụ so $100n$ với $n^2$: khi $n < 100$, $n^2$ còn nhỏ hơn. Nhưng từ $n > 100$, $n^2$ vượt lên và bỏ xa mãi mãi.

Thứ hai, hệ số hằng không quan trọng. $O(n)$, $O(3n)$ và $O(100n)$ là một.

Thứ ba, mọi hằng số dương đều thuộc $O(1)$. Nghĩa là chi phí không phụ thuộc đầu vào.

Ví dụ tính tổng n số đầu bằng công thức Gauss. Chỉ cần một cộng, một nhân, một chia với mọi n.

Thứ tư, cộng hai biểu thức thì số hạng lớn hơn thắng. Hai thuật toán nối tiếp bị chi phối bởi thuật toán chậm hơn.

Thứ năm, tích hai biểu thức không rút gọn được, trừ khi một bên là hằng số. Ví dụ $O(n \log n)$ giữ nguyên, không thành $O(n)$.

Lưu ý: trong thực tế người ta hay viết Big-O nhưng ý muốn nói chặn khít $\Theta$. Khi cần chính xác thì phân biệt rõ.

## 6. So sánh và đánh đổi

Mô hình RAM đổi chính xác phần cứng lấy tính phổ quát. So với benchmark thực nghiệm, nó đúng trên mọi máy.

Nhưng nó không nói được thuật toán nào nhanh hơn trên cấu hình cụ thể với dữ liệu vừa. So với mô hình chi tiết phân biệt nhớ đệm và đĩa, nó đơn giản và dễ suy luận hơn.

Nhưng có thể gây hiểu lầm khi chi phí thật nằm ở phân cấp bộ nhớ. Thực hành tốt là dùng RAM cho phân tích ban đầu.

Rồi đưa chi tiết phần cứng trở lại khi tối ưu điểm nóng đã chứng minh. Giống như phác thảo trước, đo đạc chi tiết sau.

## 7. Cạm bẫy tư duy

Thứ nhất: lẫn bước logic với giây thực tế. Thuật toán ít bước hơn vẫn có thể chạy chậm hơn vì mỗi bước ẩn chi phí phần cứng khác nhau.

Thứ hai: quên giả định bộ nhớ vô hạn. Rồi áp kết luận RAM cho môi trường chật hẹp mà không hiệu chỉnh.

Thứ ba: tôn thờ hằng số. Tối ưu vài chục phần trăm số bước trong khi hình dạng tăng trưởng vẫn xấu.

Đó là thắng trận nhỏ mà thua cuộc chiến lớn. Thứ tư: đếm lệnh máy hay dòng code rồi tưởng đó là phân tích độc lập nền tảng.

Đúng điều bài này cảnh báo ngay từ đầu. Đếm dòng code vẫn gắn với ngôn ngữ.

## 8. Ứng dụng của tư duy này

Mô hình RAM là nền của mọi phát biểu Big-O trong tài liệu. Mỗi khi đọc $O(n \log n)$, ta hiểu đó là số bước RAM chứ không phải số giây.

Nó cũng là điểm tựa thảo luận công bằng trong nhóm. Thay vì cãi máy ai nhanh hơn, mọi người cùng đếm bước logic.

Về lâu dài, hiểu rõ giả định giúp biết khi nào cần mô hình tinh chỉnh hơn. Ví dụ khi dữ liệu không vừa bộ nhớ hay hệ phân tán.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Vì sao không dùng số giây đo được để so sánh hai thuật toán?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Số giây phụ thuộc máy, hệ điều hành, tiến trình nền và ngôn ngữ, nên không so được giữa các môi trường.
::

**Câu 2.** Trong mô hình RAM, đoạn `x = a[i] + a[j] * 2` tốn khoảng bao nhiêu bước?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Vài bước hằng số: 2 lần đọc nhớ, 1 nhân, 1 cộng, 1 ghi. Tổng là $O(1)$.
::

**Câu 3.** Giả định nào của RAM sai nhiều nhất trên máy thật?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Mọi truy cập bộ nhớ tốn như nhau. Thực tế đọc cache L1 nhanh hơn RAM cả trăm lần, đọc đĩa còn chậm hơn nữa.
::

**Câu 4.** $O(3n)$ và $O(n)$ có khác nhau không?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Không. Hằng số bị bỏ trong Big-O.
::

**Câu 5.** Tính tổng $1 + 2 + ... + n$ bằng công thức $n(n+1)/2$ tốn bao nhiêu bước?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
$O(1)$: một cộng, một nhân, một chia, không phụ thuộc $n$.
::

## Tóm tắt

- Đo bằng giây hay đếm lệnh đều không khái quát được, nên cần mô hình RAM tối giản.
- Bốn giả định RAM: phép cơ sở một bước, vòng lặp theo số lần, nhớ một bước, bộ nhớ vô hạn.
- Chi phí phải biểu diễn thành hàm của n, rồi phát biểu bằng Big-O.
- Hệ quả: bỏ hằng số, số hạng trội thắng, tích không rút gọn được.
- Dùng RAM để phân tích ban đầu, đưa phần cứng trở lại khi tối ưu điểm nóng.
