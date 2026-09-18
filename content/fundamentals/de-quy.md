---
title: "Đệ quy: tư duy và cái giá"
description: "Đệ quy đơn giản, điều kiện dừng, cạm bẫy tính lại, ghi nhớ kết quả, đệ quy đuôi và đệ quy tương hỗ ở mức lý thuyết và trace bằng lời."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [de-quy, dieu-kien-dung, memoization, fundamentals]
---

# Đệ quy: tư duy và cái giá

## 1. Tổng quan

Đệ quy là kỹ thuật mà một hàm giải bài toán bằng cách gọi lại chính nó trên phiên bản nhỏ hơn của bài toán. Bài này trình bày các khái niệm trong bài này gồm đệ quy đơn giản, điều kiện dừng, cạm bẫy tính lại, kỹ thuật ghi nhớ, đệ quy đuôi và đệ quy tương hỗ, hoàn toàn ở mức lý thuyết với việc lần vết bằng lời.

## 2. Đệ quy đơn giản và điều kiện dừng

Trường hợp đơn giản nhất của đệ quy là khi một hàm gọi chính nó tại một điểm trong luồng thực thi. Hai ví dụ kinh điển mà bài này nêu là tính giai thừa và dãy Fibonacci, trong đó số hạng thứ n bằng tổng của hai số hạng trước nó, kèm hai trường hợp cơ sở cho n bằng 0 và n bằng 1.

Điều kiện dừng, hay trường hợp cơ sở, là thành phần bắt buộc đầu tiên của mọi định nghĩa đệ quy đúng. Bài này nhấn mạnh phải đảm bảo trường hợp cơ sở luôn tới được. Nếu quên kiểm tra đối số không âm, lời gọi với n âm sẽ đi qua mọi số nguyên âm lưu trữ được trước khi chạm trường hợp cơ sở, nhưng thực tế nó văng lỗi tràn ngăn xếp từ rất lâu trước đó.

Một cạm bẫy tinh vi hơn nằm ở kiểm tra kiểu dữ liệu trong ngôn ngữ kiểu yếu. Bài này minh họa: khi truyền vào một giá trị không phải số, phép trừ cho ra giá trị không phải số, mà giá trị này không khớp bất kỳ nhánh điều kiện dừng nào, nên hàm rơi vào đệ quy vô hạn và kết thúc bằng lỗi tràn ngăn xếp. Bài học là điều kiện dừng phải bao phủ mọi đầu vào có thể, kể cả đầu vào không hợp lệ.

## 3. Cạm bẫy tính lại và kỹ thuật ghi nhớ

Hạn chế thứ hai của đệ quy ngây thơ là lãng phí tài nguyên do tính lại. Bài này hướng dẫn lần vết lời gọi tính số Fibonacci thứ 4 bằng lời: lời gọi mức 4 sinh hai lời gọi mức 3 và mức 2, rồi tiếp tục phân nhánh cho tới mức 1 và mức 0. Kết quả là cùng một giá trị được tính đi tính lại nhiều lần với cái giá là hàng loạt lời gọi hàm.

Việc tính đi tính lại các bài toán con là dấu hiệu cho thấy có thể tồn tại lời giải hiệu quả hơn, và trong những trường hợp này quy hoạch động thường là lựa chọn tốt hơn. Một kỹ thuật cải thiện mà bài này giới thiệu là ghi nhớ kết quả trung gian: trước khi gọi đệ quy, kiểm tra xem giá trị đã có trong bộ nhớ đệm chưa; nếu có thì dùng lại, nếu chưa thì tính rồi lưu vào đệm cho lần sau. Bài này lưu ý cả đệ quy ngây thơ lẫn ghi nhớ đều có thể gây vấn đề bộ nhớ khi quy mô lớn, nên ghi nhớ là một đánh đổi có tính toán chứ không phải tấm vé miễn phí.

## 4. Đệ quy tốt: khi bản chất bài toán vốn đệ quy

Bài này thẳng thắn chỉ ra ví dụ Fibonacci cho thấy đệ quy không cải thiện gì so với thuật toán lặp. Nhưng có những trường hợp đệ quy là lựa chọn đúng, thường vì bản chất bài toán hay định nghĩa của nó vốn đã đệ quy, và lúc đó lý do chọn đệ quy phần nhiều là sự rõ ràng hơn là hiệu năng.

Ví dụ thanh lịch mà bài này nêu là duyệt cây nhị phân theo thứ tự trước: với nút rỗng thì ghi nhận đã tới lá, với nút có giá trị thì xử lý giá trị của nút rồi đệ quy duyệt cây con trái, sau đó đệ quy duyệt cây con phải khi toàn bộ cây con trái đã xong. Phiên bản lặp tương đương phải dùng ngăn xếp tường minh để mô phỏng hành vi của các lời gọi đệ quy, nên dài dòng và khó viết đúng hơn hẳn. Bài này cũng giới thiệu hai thứ tự duyệt còn lại: duyệt giữa theo thứ tự cây con trái rồi giá trị nút rồi cây con phải, và duyệt sau theo thứ tự hai cây con rồi mới tới giá trị nút.

## 5. Đệ quy đuôi và khung ngăn xếp

Mỗi lần gọi hàm, chương trình tạo một khung ngăn xếp gồm con trỏ lệnh quay về, các đối số, các biến cục bộ và chỗ giữ giá trị trả về. Lời gọi đệ quy không phải ngoại lệ, với điểm đặc biệt là lời gọi đầu tiên có thể chưa trả về cho tới khi chạm điều kiện dừng, khiến chuỗi gọi dài bất thường.

Tin vui là trình biên dịch hiện đại tối ưu được một dạng đệ quy đặc biệt. Lời gọi đuôi là lời gọi hàm thực hiện như thao tác cuối cùng của hàm; hàm là đệ quy đuôi nếu các lời gọi đệ quy của nó nằm ở vị trí đuôi. Hầu hết trình biên dịch tối ưu lời gọi đuôi bằng cách bỏ qua việc tạo khung ngăn xếp, và với đệ quy đuôi còn viết lại chuỗi gọi thành vòng lặp.

Điểm tinh tế mà bài này nhấn mạnh: viết lời gọi đệ quy ở cuối dòng chưa đủ để thành đệ quy đuôi. Phiên bản giai thừa viết gọn thành trả về n nhân với giai thừa của n trừ 1 trông như đuôi nhưng thực chất không phải, vì thao tác cuối cùng là phép nhân chứ không phải lời gọi đệ quy, nên không tối ưu được. Cách sửa là thêm một đối số tích lũy giữ kết quả nhân dồn, để phép nhân xảy ra khi tính đối số trước lời gọi đệ quy, và lời gọi đệ quy trở thành thao tác cuối cùng thực sự. Trình biên dịch sẽ dịch dạng này thành vòng lặp với biến tích lũy. Bài này cũng lưu ý hỗ trợ tối ưu lời gọi đuôi phụ thuộc ngôn ngữ và trình biên dịch, nên đừng mặc định nó luôn có mặt.

## 6. Đệ quy tương hỗ

Một hàm có thể gọi chính nó trực tiếp, nhưng cũng có thể gọi qua một hàm khác. Khi hai hay nhiều hàm gọi nhau thành vòng tròn thì đó là đệ quy tương hỗ. Đệ quy đuôi tương hỗ về lý thuyết cũng tối ưu được như tối ưu lời gọi đuôi, nhưng đa số trình biên dịch chỉ tối ưu đệ quy đuôi đơn giản.

Bài này minh họa bằng hai hàm gọi qua lại nhau: hàm thứ nhất cộng đối số với kết quả gọi hàm thứ hai trên đối số trừ 1, hàm thứ hai co dần đối số qua mỗi vòng gọi cho tới khi chạm trường hợp dừng. Lần vết lời gọi với giá trị 7 cho thấy chuỗi gọi luân phiên giữa hai hàm. Kết luận của bài này rất dứt khoát: đệ quy tương hỗ còn khó theo dõi và khó tối ưu hơn đệ quy thông thường, nên chỉ dùng khi cấu trúc bài toán thực sự đòi hỏi.

## 7. So sánh và đánh đổi

Đệ quy và lặp là hai cách diễn đạt cùng một quá trình tính toán. Đệ quy thắng ở sự rõ ràng khi cấu trúc bài toán vốn phân cấp; lặp thắng ở tính ổn định của bộ nhớ vì không phình ngăn xếp. Ghi nhớ là đánh đổi bộ nhớ lấy thời gian, nhưng phải canh chừng bộ nhớ đệm phình quá to.

## 8. Cạm bẫy tư duy

Cạm bẫy đầu tiên là quên hoặc viết thiếu điều kiện dừng bao phủ mọi đầu vào, kể cả đầu vào không hợp lệ. Cạm bẫy thứ hai là dùng đệ quy cho bài toán có bài toán con gối nhau mà không ghi nhớ, tạo ra cây gọi phình theo hàm mũ. Cạm bẫy thứ ba là tưởng lời gọi đệ quy nằm cuối dòng mã thì mặc nhiên là đệ quy đuôi. Cạm bẫy thứ tư là mặc định trình biên dịch nào cũng tối ưu lời gọi đuôi. Cạm bẫy thứ năm là dùng đệ quy sâu cho dữ liệu lớn mà không ước lượng độ sâu ngăn xếp.

## 9. Ứng dụng của tư duy này

Tư duy đệ quy là chìa khóa để đọc hiểu các thuật toán chia để trị, duyệt cây và đồ thị trong các bài sau. Thói quen lần vết bằng lời trước khi cài đặt giúp phát hiện sớm điều kiện dừng thiếu và nguy cơ tính lại.

## 10. Tóm tắt + Sau bài này bạn hiểu được gì

Đệ quy giải bài toán lớn bằng cách gọi lại chính mình trên bài toán nhỏ hơn, với điều kiện dừng luôn tới được là yêu cầu bắt buộc. Tính lại bài toán con là cạm bẫy hiệu năng lớn nhất và được khắc phục bằng ghi nhớ kết quả. Đệ quy tỏa sáng khi bản chất bài toán vốn phân cấp như duyệt cây. Đệ quy đuôi cho phép trình biên dịch viết lại thành vòng lặp nếu lời gọi đệ quy thực sự là thao tác cuối cùng. Đệ quy tương hỗ khó theo dõi và khó tối ưu nên hạn chế dùng.

Sau bài này bạn hiểu được:

- Vai trò của điều kiện dừng và vì sao nó phải bao phủ cả đầu vào không hợp lệ.
- Cách lần vết bằng lời để phát hiện tính lại, qua ví dụ Fibonacci của 4.
- Ý tưởng ghi nhớ kết quả và cái giá bộ nhớ của nó.
- Vì sao duyệt cây là miền đất tự nhiên của đệ quy, cùng ba thứ tự duyệt trước, giữa và sau.
- Điều kiện để một hàm thực sự là đệ quy đuôi và vai trò của đối số tích lũy.

Tự kiểm: vì sao lời gọi với đối số âm 1 mà thiếu kiểm tra không âm lại gây tràn ngăn xếp? Phân biệt lời gọi đệ quy nằm cuối dòng mã với lời gọi đệ quy ở vị trí đuôi thực sự. Vì sao đệ quy tương hỗ khó tối ưu hơn đệ quy thông thường?
