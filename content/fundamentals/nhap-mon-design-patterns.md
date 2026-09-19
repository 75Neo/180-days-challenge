---
title: "Nhập môn design patterns"
description: "Mẫu thiết kế là gì, từ vựng chung, cấu trúc của một mẫu, cách học và dùng mẫu đúng, cùng siêu nhận thức về học tập."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [design-patterns, tu-vung, phuong-phap, fundamentals]
---

# Nhập môn design patterns

## 1. Tổng quan

Lập trình viên gặp lại bài toán giống nhau ở nhiều dự án. Mỗi lần giải lại từ đầu vừa tốn công vừa lặp sai lầm cũ.

Mẫu thiết kế ra đời từ quan sát giản dị: ai đó đã giải bài của bạn rồi. Lời giải đó ghi lại được để tái sử dụng.

Bài này trình bày ở mức meta. Mẫu là gì, vì sao từ vựng chung quan trọng, cấu trúc một mẫu ra sao.

Cách học và dùng mẫu đúng thế nào, cùng tư duy siêu nhận thức khi học. Bài này không dạy mẫu cụ thể nào.

## 2. Mẫu là gì và không là gì

Tuyên bố mở đầu: ai đó đã giải quyết vấn đề của bạn rồi. Thay vì phát minh lại, hãy học từ người đã vấp ngã và chắt lọc lời giải tốt.

Mẫu là mô tả đã kiểm chứng của lời giải. Dành cho bài toán thiết kế lặp đi lặp lại trong một ngữ cảnh nhất định.

Ba thành phần làm nên một mẫu: tên gọi, bài toán cùng ngữ cảnh, và lời giải đúc kết. Điều mẫu không phải cũng quan trọng không kém.

Mẫu không phải đoạn mã chép vào là chạy. Cùng một mẫu cài đặt khác nhau tùy ngôn ngữ và tình huống.

Mẫu không phải công thức máy móc áp mọi nơi. Dùng sai ngữ cảnh gây hại nhiều hơn lợi.

Quy tắc ba lần thể hiện tinh thần này. Đừng phong thủ thuật thành mẫu cho tới khi thấy nó thành công ít nhất ba lần thực tế.

Giống như công thức nấu ăn: tùy bếp mà nêm nếm. Không ai bê nguyên xi mọi gia vị.

## 3. Từ vựng chung và sức mạnh của tên gọi

Lợi ích đầu tiên là từ vựng chung với lập trình viên khác. Khi cả nhóm biết tên mẫu, một câu ngắn thay cả đoạn giải thích dài.

Sức mạnh tên gọi nằm ở mật độ tri thức. Mỗi cái tên gói bài toán, ngữ cảnh, lời giải, hệ quả và đánh đổi đã biết.

Bài này cảnh báo đừng coi thường từ vựng chung. Cùng một ngôn ngữ mẫu thì thảo luận thiết kế nhanh vọt lên.

Hiểu lầm cũng giảm hẳn. Giống như tên món ăn: gọi một từ cả quán đều hiểu.

## 4. Cấu trúc của một mẫu và bản đồ các mẫu

Mỗi mẫu trình bày theo cấu trúc ổn định. Nhờ đó người đọc tra cứu và so sánh dễ dàng.

| Phần | Nội dung |
|---|---|
| Tên và phân loại | Đặt mẫu vào bản đồ chung |
| Bài toán | Tình huống lặp lại và lực giằng co |
| Lời giải | Cách sắp xếp thành phần, độc lập ngôn ngữ |
| Hệ quả | Kết quả và đánh đổi khi áp dụng |
| Ví dụ | Tình huống cụ thể giúp ghi nhớ |

Không mẫu nào chỉ có lợi mà không có giá. Phần hệ quả bắt buộc phải đọc kỹ.

Kho mẫu tổ chức thành ba nhóm lớn. Nhóm khởi tạo lo việc tạo đối tượng.

Nhóm cấu trúc lo ghép lớp và đối tượng thành cấu trúc lớn hơn. Nhóm hành vi lo phân phối trách nhiệm và giao tiếp.

Bản đồ này giúp định vị mẫu mới. Bài toán về cách tạo thì nghĩ nhóm khởi tạo.

Bài toán về cách ghép thì nghĩ nhóm cấu trúc. Bài toán về phối hợp thì nghĩ nhóm hành vi.

Ngoài ra còn khái niệm phản mẫu. Đó là lời giải trông hợp lý nhưng thực chất gây hại.

Cấu trúc mô tả phản mẫu gồm tên, bài toán, lời giải sai lầm và hậu quả. Học nó giúp nhận diện và tránh từ sớm.

## 5. Cách học và dùng mẫu đúng

Phương pháp học đi từ cụ thể tới trừu tượng. Bắt đầu bằng tình huống đời thực dễ hình dung.

Quan sát thiết kế ngây thơ bộc lộ vấn đề gì. Xem mẫu hóa giải từng vấn đề ra sao.

Cuối cùng rút ra nguyên lý tổng quát. Triết lý đằng sau: não nhớ tốt hơn khi phải suy nghĩ và làm.

Đọc thụ động lướt qua rất nhanh quên. Giống như học bơi phải xuống nước, không học trên bờ.

Về cách dùng, có bốn điểm. Một là dùng khi bài toán thực sự khớp ngữ cảnh, không dùng vì mẫu nghe hay.

Hai là giữ thiết kế đơn giản nhất có thể. Đưa mẫu vào khi áp lực thay đổi xuất hiện.

Ba là luôn đọc phần hệ quả trước khi áp dụng. Mỗi mẫu đều có giá phải trả.

Bốn là ghi lại quyết định dùng mẫu nào ở đâu. Người tới sau đọc sẽ hiểu ý đồ.

## 6. Siêu nhận thức: học cách học mẫu

Điểm đặc sắc là bàn công khai về siêu nhận thức. Tức suy nghĩ về cách mình học.

Đa số chưa từng học lý thuyết học tập. Nên hay dùng cách kém hiệu quả như đọc lướt rồi tưởng đã hiểu.

Cách thay thế là học chủ động. Tự đặt câu hỏi trước khi đọc đáp án.

Tự giải thích lại bằng lời của mình. Xen kẽ nhiều loại bài khác nhau, quay lại ôn sau một khoảng thời gian.

Áp vào học mẫu, siêu nhận thức là theo dõi mức của mình. Mới nghe tên, hiểu ý tưởng, áp dụng được, hay đã nhận ra tình huống dùng trong dự án thực.

Học nhóm qua thảo luận từ vựng chung rất hiệu quả. Giải thích mẫu cho người khác chính là bài kiểm tra hiểu sâu nhất.

## 7. So sánh và đánh đổi

Học mẫu kiểu này đổi tốc độ đọc lấy độ sâu hiểu. Đọc chậm hơn nhưng nhớ lâu và dùng được.

Dùng mẫu đổi đơn giản trước mắt lấy linh hoạt lâu dài. Mã có mẫu phức tạp hơn mã ngây thơ.

Nhưng khi yêu cầu đổi, mã có mẫu rẻ hơn nhiều. Từ vựng chung đổi công học thuật ngữ lấy tốc độ giao tiếp.

Tốn công học tên ban đầu, mỗi thảo luận sau đều nhanh hơn. Nhận diện phản mẫu đổi khiêm tốn lấy an toàn.

Dám thừa nhận lời giải ưa thích có thể sai để tránh hậu quả lớn hơn.

## 8. Cạm bẫy tư duy

Thứ nhất là sốt mẫu: thấy mẫu nào cũng muốn dùng. Rải mẫu khắp thiết kế còn đơn giản.

Thứ hai là học tên mà không học ngữ cảnh. Nhắc vanh vách tên mẫu nhưng áp sai chỗ.

Thứ ba là coi mẫu là mã chép sẵn. Thực ra mẫu là ý tưởng cần điều chỉnh cho tình huống.

Thứ tư là đọc thụ động, lướt ví dụ mà không tự làm. Rồi tưởng mình đã biết.

Thứ năm là bỏ qua phần hệ quả. Chỉ thấy lợi mà không thấy giá của mẫu.

## 9. Ứng dụng của tư duy này

Tư duy meta dùng suốt khóa học. Mỗi khi gặp mẫu cụ thể, hãy hỏi bốn điều.

Tên gọi của nó là gì? Ngữ cảnh nào thì dùng? Hệ quả và cái giá ra sao? Nó thể hiện nguyên lý thiết kế nào?

Từ vựng chung dùng ngay trong thảo luận nhóm và phỏng vấn. Gọi đúng tên giúp cuộc trò chuyện ở tầm thiết kế.

Phương pháp học chủ động và siêu nhận thức áp dụng cho mọi chủ đề khó. Không riêng gì mẫu thiết kế.

## Tóm tắt

- Mẫu là lời giải đã kiểm chứng cho bài toán lặp lại trong một ngữ cảnh, phát hiện từ thực tiễn.
- Giá trị lớn nhất là từ vựng chung giúp giao tiếp ở tầm thiết kế.
- Mỗi mẫu gồm tên, bài toán, lời giải và hệ quả; kho mẫu chia ba nhóm khởi tạo, cấu trúc, hành vi.
- Học hiệu quả bằng cách chủ động từ cụ thể tới trừu tượng, dùng mẫu đúng bằng cách khớp ngữ cảnh.
- Theo dõi mức hiểu của bản thân bằng siêu nhận thức và đọc kỹ hệ quả trước khi áp dụng.
