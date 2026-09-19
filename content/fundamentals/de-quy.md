---
title: "Đệ quy: tư duy và cái giá"
description: "Đệ quy đơn giản, điều kiện dừng, cạm bẫy tính lại, ghi nhớ kết quả, đệ quy đuôi và đệ quy tương hỗ ở mức lý thuyết và trace bằng lời."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [de-quy, dieu-kien-dung, memoization, fundamentals]
---

# Đệ quy: tư duy và cái giá

## 1. Tổng quan

Đệ quy là hàm gọi lại chính nó trên bài toán nhỏ hơn. Bài này trình bày toàn bộ bằng lý thuyết và lần vết bằng lời.

Các khái niệm gồm: đệ quy đơn giản, điều kiện dừng, cạm bẫy tính lại, ghi nhớ, đệ quy đuôi và đệ quy tương hỗ.

## 2. Đệ quy đơn giản và điều kiện dừng

Dạng đơn giản nhất: một hàm gọi chính nó trong lúc chạy. Hai ví dụ kinh điển là giai thừa và Fibonacci.

Trong Fibonacci, số hạng thứ n bằng tổng hai số trước nó. Kèm hai trường hợp cơ sở cho $n = 0$ và $n = 1$.

Điều kiện dừng là thành phần bắt buộc đầu tiên. Phải đảm bảo nó luôn tới được.

Nếu quên kiểm tra số âm, lời gọi với n âm chạy mãi. Thực tế nó văng lỗi tràn ngăn xếp từ rất sớm.

Cạm bẫy tinh vi hơn nằm ở kiểu dữ liệu yếu. Truyền vào giá trị không phải số, phép trừ cho ra giá trị không phải số.

Giá trị này không khớp nhánh dừng nào. Hàm rơi vào đệ quy vô hạn rồi tràn ngăn xếp.

Bài học: điều kiện dừng phải bao phủ mọi đầu vào. Kể cả đầu vào không hợp lệ.

## 3. Cạm bẫy tính lại và kỹ thuật ghi nhớ

Hạn chế thứ hai là tính lại lãng phí. Lần vết tính Fibonacci thứ 4 bằng lời.

Lời gọi mức 4 sinh hai lời gọi mức 3 và 2. Rồi phân nhánh tiếp xuống mức 1 và 0.

Kết quả là cùng một giá trị tính đi tính lại nhiều lần. Cái giá là hàng loạt lời gọi hàm dư thừa.

Bài toán con gối nhau là dấu hiệu cần lời giải khác. Quy hoạch động thường là lựa chọn tốt hơn.

Kỹ thuật cải thiện là ghi nhớ kết quả trung gian. Trước khi gọi đệ quy, kiểm tra bộ nhớ đệm trước.

Nếu có rồi thì dùng lại. Nếu chưa thì tính rồi lưu vào cho lần sau.

Lưu ý: cả đệ quy ngây thơ lẫn ghi nhớ đều tốn bộ nhớ khi quy mô lớn. Ghi nhớ là đánh đổi có tính toán, không phải vé miễn phí.

## 4. Đệ quy tốt: khi bản chất bài toán vốn đệ quy

Ví dụ Fibonacci cho thấy đệ quy không hơn gì vòng lặp. Nhưng có lúc đệ quy là lựa chọn đúng.

Đó là khi bản chất bài toán vốn đã đệ quy. Lý do chọn lúc này là sự rõ ràng, không phải hiệu năng.

Ví dụ thanh lịch là duyệt cây nhị phân theo thứ tự trước. Gặp nút rỗng thì ghi nhận đã tới lá.

Gặp nút có giá trị thì xử lý nó. Rồi đệ quy duyệt cây trái, sau đó duyệt cây phải.

Bản lặp tương đương phải dùng ngăn xếp tường minh. Nó dài dòng và khó viết đúng hơn hẳn.

Hai thứ tự còn lại: duyệt giữa theo trái, nút, phải. Duyệt sau theo hai cây con rồi mới tới nút.

## 5. Đệ quy đuôi và khung ngăn xếp

Mỗi lần gọi hàm, chương trình tạo một khung ngăn xếp. Khung gồm địa chỉ quay về, đối số, biến cục bộ và chỗ giữ kết quả.

Lời gọi đệ quy không phải ngoại lệ. Điểm đặc biệt là lời gọi đầu chưa trả về cho tới khi chạm điều kiện dừng.

Tin vui: trình biên dịch hiện đại tối ưu được một dạng đặc biệt. Lời gọi đuôi là lời gọi nằm ở thao tác cuối cùng của hàm.

Hàm là đệ quy đuôi nếu các lời gọi đệ quy đều ở vị trí đuôi. Trình biên dịch bỏ qua việc tạo khung ngăn xếp, thậm chí viết lại thành vòng lặp.

Điểm tinh tế: viết lời gọi ở cuối dòng chưa đủ. Ví dụ trả về $n \times fact(n-1)$ trông như đuôi nhưng không phải.

Vì thao tác cuối cùng là phép nhân, không phải lời gọi. Nên dạng này không tối ưu được.

Cách sửa là thêm đối số tích lũy giữ kết quả nhân dồn. Phép nhân xảy ra khi tính đối số, trước lời gọi đệ quy.

Nhờ đó lời gọi đệ quy thành thao tác cuối thật sự. Trình biên dịch dịch dạng này thành vòng lặp với biến tích lũy.

Lưu ý thêm: hỗ trợ tối ưu đuôi phụ thuộc ngôn ngữ và trình biên dịch. Đừng mặc định nó luôn có mặt.

## 6. Đệ quy tương hỗ

Hàm có thể gọi mình trực tiếp, hoặc gọi qua hàm khác. Khi hai hay nhiều hàm gọi nhau thành vòng tròn, đó là đệ quy tương hỗ.

Về lý thuyết, đệ quy đuôi tương hỗ cũng tối ưu được. Nhưng đa số trình biên dịch chỉ tối ưu đệ quy đuôi đơn giản.

Ví dụ hai hàm gọi qua lại nhau: hàm một cộng đối số với kết quả gọi hàm hai. Hàm hai co dần đối số tới khi chạm điều kiện dừng.

Lần vết với giá trị 7 cho thấy chuỗi gọi luân phiên hai hàm. Kết luận rất dứt khoát: đệ quy tương hỗ khó theo dõi và khó tối ưu.

Chỉ dùng nó khi cấu trúc bài toán thực sự đòi hỏi. Giống như hai người gọi điện qua lại, rất dễ rối.

## 7. So sánh và đánh đổi

Đệ quy và lặp diễn đạt cùng một quá trình tính toán. Đệ quy thắng ở sự rõ ràng khi cấu trúc phân cấp.

Lặp thắng ở bộ nhớ ổn định vì không phình ngăn xếp. Ghi nhớ là đánh đổi bộ nhớ lấy thời gian.

Nhưng phải canh chừng bộ nhớ đệm phình quá to. Không có bữa trưa miễn phí ở đây.

## 8. Cạm bẫy tư duy

Thứ nhất: quên điều kiện dừng, hoặc dừng không bao hết đầu vào lạ. Thứ hai: dùng đệ quy cho bài toán con gối nhau mà không ghi nhớ.

Cây gọi sẽ phình theo hàm mũ. Thứ ba: tưởng lời gọi nằm cuối dòng mã là đệ quy đuôi.

Thứ tư: mặc định trình biên dịch nào cũng tối ưu gọi đuôi. Thứ năm: đệ quy sâu cho dữ liệu lớn mà không ước lượng độ sâu ngăn xếp.

## 9. Ứng dụng của tư duy này

Tư duy đệ quy là chìa khóa đọc thuật toán chia để trị. Nó cũng mở cửa các thuật toán duyệt cây và đồ thị.

Thói quen lần vết bằng lời trước khi cài đặt rất đáng giá. Nó phát hiện sớm điều kiện dừng thiếu và nguy cơ tính lại.

## Tóm tắt

- Đệ quy gọi lại chính mình trên bài nhỏ hơn, điều kiện dừng luôn tới được là bắt buộc.
- Tính lại bài toán con là cạm bẫy lớn nhất, khắc phục bằng ghi nhớ kết quả.
- Đệ quy tỏa sáng khi bài toán vốn phân cấp, như duyệt cây trước, giữa, sau.
- Đệ quy đuôi cho phép viết lại thành vòng lặp nếu lời gọi là thao tác cuối thật sự.
- Đệ quy tương hỗ khó theo dõi và khó tối ưu nên hạn chế dùng.
