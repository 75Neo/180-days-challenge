---
title: "Mô hình RAM và chi phí tính toán"
description: "Các giả định của mô hình RAM, cách đếm bước trừu tượng, bậc tăng trưởng và ý nghĩa của việc bỏ qua hằng số."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [ram-model, chi-phi, ly-thuyet, fundamentals]
---

# Mô hình RAM và chi phí tính toán

## 1. Tổng quan

Mọi phát biểu về độ phức tạp đều đứng trên một mô hình tính toán nào đó, tức một tập quy ước về phép tính nào tốn bao nhiêu chi phí. Nếu không thống nhất mô hình, việc so sánh hai thuật toán sẽ như so sánh hai cuộc đua chạy trên hai địa hình khác nhau. Phần này dựng mô hình RAM, một mô hình máy tính trừu tượng tối giản cho phép đếm chi phí bằng số bước logic thay vì bằng giây hay bằng lệnh máy cụ thể. Bài này trình bày vì sao cần mô hình trừu tượng, các giả định của mô hình RAM, cách đếm bước và chuyển sang bậc tăng trưởng, cùng ý nghĩa thực tế của việc bỏ qua hằng số.

## 2. Vì sao cần một mô hình trừu tượng

Bài này mở đầu bằng một chuỗi câu hỏi tưởng chừng ngây thơ: hiệu năng nghĩa là gì, đo bằng gì, và con số đo được có ý nghĩa gì với người khác. Đo khoảng thời gian chạy trên một đầu vào cụ thể nghe có vẻ thẳng thắn, nhưng kết quả đo nhiễu vì kiến trúc đa nhân hiện đại, hệ điều hành và các tiến trình nền đều ảnh hưởng. Tệ hơn, con số tuyệt đối gắn chặt với phần cứng chạy thử nên không có ý nghĩa phổ quát. So sánh tương đối bằng benchmark vẫn còn quá nhiều biến số, còn đếm lệnh thì gắn với nền tảng hoặc ngôn ngữ lập trình. Lối thoát mà bài này đề xuất là trừu tượng hóa khỏi các chi tiết ít quan trọng bằng một mô hình tính toán tối giản, và đó chính là mô hình RAM.

## 3. Các giả định của mô hình RAM

Mô hình RAM xem máy tính như một bộ nhớ truy cập ngẫu nhiên cùng một tập phép tính cơ sở tác động lên nó. Bốn giả định nền tảng được bài này liệt kê rõ ràng.

Thứ nhất, mỗi phép tính cơ sở như phép số học, câu lệnh rẽ nhánh hay lời gọi hàm tốn đúng một bước. Thứ hai, vòng lặp và chương trình con không phải phép tính đơn giản; chúng là tổ hợp của nhiều phép tính một bước và tiêu thụ tài nguyên tỉ lệ với số lần thực hiện. Thứ ba, mỗi lần truy cập bộ nhớ tốn đúng một bước. Thứ tư, bộ nhớ được coi là vô hạn.

Giả định bộ nhớ vô hạn nghe có vẻ phi thực tế, nhưng bài này giải thích rằng mô hình cố tình không phân biệt truy cập bộ nhớ đệm, RAM, đĩa cứng hay lưu trữ trung tâm dữ liệu. Dưới mô hình RAM, hiệu năng của thuật toán được đo bằng số bước thực hiện trên một đầu vào cho trước.

## 4. Từ đếm bước sang bậc tăng trưởng

Có mô hình đếm bước rồi, bài này đặt tiếp câu hỏi: cải thiện nào mới đáng kể. Đếm riêng lẻ từng loại phép tính hay chỉ đếm số lần đổi chỗ khi phân tích sắp xếp đều là những lựa chọn khả dĩ, nhưng biến động nhỏ về số bước hiếm khi có ý nghĩa. Thay vào đó ta nên suy nghĩ theo bậc độ lớn: gấp đôi, gấp mười, gấp trăm.

Bước giác ngộ thứ hai còn quan trọng hơn: phải biểu diễn số bước dưới dạng hàm của kích thước bài toán. Phát biểu thuật toán A tốn 100 bước còn thuật toán B tốn 10 bước trên một bộ kiểm thử cho trước không giúp dự đoán gì về bài toán khác. Nhưng nếu chứng minh được trên mảng n phần tử, thuật toán A cần số lần đổi chỗ tỉ lệ với n nhân n còn thuật toán B chỉ tỉ lệ với n, ta đã có công cụ dự báo hiệu năng trên mọi kích thước đầu vào.

Chính tại điểm này ký hiệu Big-O xuất hiện như công cụ phát biểu bậc tăng trưởng, và nội dung chi tiết của nó đã được trình bày ở bài Big-O. Mô hình RAM là mặt đếm chi phí, Big-O là mặt phát biểu chi phí; hai mặt này gắn chặt với nhau thành một khung phân tích hoàn chỉnh.

## 5. Hệ quả: hằng số không quan trọng và số hạng trội thắng

Từ định nghĩa chặn trên, bài này rút ra các hệ quả có ý nghĩa thực tiễn sâu sắc. Thứ nhất, ta chỉ quan tâm hành vi khi n rất lớn, không bận tâm bất đẳng thức có đúng với n nhỏ hay không. Bài này minh họa bằng hàm mũ và hàm tuyến tính: với x nhỏ hơn 1, hàm mũ còn nhỏ hơn, nhưng khi x lớn, hàm mũ tăng nhanh hơn áp đảo. Thứ hai, hệ số hằng không quan trọng: O(n), O(3 lần n) và O(100 lần n) là một. Thứ ba, mọi hằng số dương đều thuộc O(1), nghĩa là thời gian hằng số là thời gian không phụ thuộc vào kích thước đầu vào, như cách tính tổng n số nguyên đầu tiên bằng công thức Gauss chỉ cần một phép cộng, một phép nhân và một phép chia bất kể n lớn bao nhiêu.

Thứ tư, khi cộng hai biểu thức Big-O, số hạng lớn hơn thắng: thời gian chạy của hai thuật toán nối tiếp nhau bị chi phối bởi thuật toán chậm hơn. Thứ năm, tích hai biểu thức không thể rút gọn trừ khi một trong hai là hằng số. Bài này cũng nhắc lại quy ước ngầm của cộng đồng: khi nêu thời gian chạy bằng Big-O mà không nói gì thêm, người ta thường ngầm hiểu chặn đó vừa là chặn trên vừa là chặn dưới; ký hiệu chính xác cho lớp hàm bị chặn cả hai phía là Theta.

## 6. So sánh và đánh đổi

Mô hình RAM đánh đổi độ chính xác phần cứng lấy tính phổ quát. So với benchmark thực nghiệm, nó cho kết luận đúng trên mọi máy nhưng không nói được thuật toán nào nhanh hơn trên cấu hình cụ thể với dữ liệu vừa phải. So với mô hình chi tiết phân biệt bộ nhớ đệm và đĩa, nó đơn giản và dễ suy luận hơn nhưng có thể gây hiểu lầm với thuật toán mà chi phí thực tế nằm ở phân cấp bộ nhớ. Thực hành tốt là dùng mô hình RAM cho phân tích ban đầu, rồi đưa chi tiết phần cứng trở lại khi tối ưu các điểm nóng đã được chứng minh.

## 7. Cạm bẫy tư duy

Cạm bẫy đầu tiên là lẫn lộn bước logic với giây thực tế, rồi ngạc nhiên khi thuật toán ít bước hơn lại chạy chậm hơn vì mỗi bước ẩn chi phí phần cứng khác nhau. Cạm bẫy thứ hai là quên giả định bộ nhớ vô hạn và áp dụng kết luận RAM cho môi trường bộ nhớ chật hẹp mà không hiệu chỉnh. Cạm bẫy thứ ba là tôn thờ hằng số: tối ưu giảm vài chục phần trăm số bước trong khi hình dạng tăng trưởng vẫn xấu, tức thắng trận nhỏ mà thua cuộc chiến lớn. Cạm bẫy thứ tư là đếm lệnh máy hoặc dòng code rồi tưởng đó là phân tích độc lập nền tảng, đúng điều mà bài này cảnh báo ngay từ đầu.

## 8. Ứng dụng của tư duy này

Mô hình RAM là nền tảng của mọi phát biểu Big-O trong giáo trình và tài liệu kỹ thuật: mỗi khi đọc thấy thuật toán chạy trong O(n log n), ta hiểu đó là số bước trong mô hình RAM chứ không phải số giây trên một máy cụ thể. Nó cũng là điểm tựa để thảo luận công bằng trong nhóm: thay vì tranh cãi máy ai nhanh hơn, mọi người cùng đếm bước logic. Về lâu dài, hiểu rõ các giả định của mô hình giúp ta biết khi nào cần mô hình tinh chỉnh hơn, ví dụ khi làm việc với dữ liệu không vừa bộ nhớ hay hệ thống phân tán.

## 9. Tóm tắt + Sau bài này bạn hiểu được gì

Đo thời gian tuyệt đối và đếm lệnh cụ thể đều không khái quát hóa được, nên cần mô hình RAM với bốn giả định tối giản để đếm chi phí bằng số bước logic. Từ số bước, ta chuyển sang bậc tăng trưởng theo kích thước đầu vào và phát biểu bằng Big-O. Các hệ quả như bỏ qua hằng số và số hạng trội thắng đều xuất phát trực tiếp từ định nghĩa chặn trên.

Sau bài này bạn hiểu được:

- Vì sao đo bằng giây, benchmark tương đối và đếm lệnh đều không đủ để mô tả hiệu năng một cách phổ quát.
- Bốn giả định của mô hình RAM và ý nghĩa của giả định bộ nhớ vô hạn.
- Vì sao phải biểu diễn chi phí dưới dạng hàm của n thay vì con số tuyệt đối trên một bộ kiểm thử.
- Các hệ quả thực tiễn: bỏ qua hằng số, số hạng trội thắng, và quy ước ngầm về chặn hai phía.
- Khi nào mô hình RAM là đủ và khi nào cần đưa chi tiết phần cứng trở lại.

Tự kiểm: vì sao đếm lệnh mức cao phụ thuộc vào ngôn ngữ lập trình? Giả định nào của mô hình RAM dễ gây hiểu lầm nhất khi áp dụng cho dữ liệu không vừa bộ nhớ? Vì sao O(100 lần n) và O(n) được coi là một?
