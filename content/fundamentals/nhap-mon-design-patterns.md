---
title: "Nhập môn design patterns"
description: "Mẫu thiết kế là gì, từ vựng chung, cấu trúc của một mẫu, cách học và dùng mẫu đúng, cùng siêu nhận thức về học tập."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [design-patterns, tu-vung, phuong-phap, fundamentals]
---

# Nhập môn design patterns

## 1. Tổng quan

Lập trình viên thường xuyên gặp lại những bài toán giống nhau trong những dự án khác nhau, và mỗi lần giải lại từ đầu vừa tốn công vừa dễ lặp lại sai lầm cũ. Mẫu thiết kế ra đời từ quan sát rằng ai đó đã giải bài toán của bạn rồi, và lời giải đó có thể ghi lại để tái sử dụng. Đi kèm thông điệp này là một triết lý học tập đặc biệt: học bằng cách tự mình suy nghĩ trước khi xem lời giải. Bài này trình bày ở mức meta: mẫu là gì và không là gì, vì sao từ vựng chung quan trọng, cấu trúc của một mẫu, cách học và dùng mẫu đúng, cùng tư duy siêu nhận thức khi học. Bài này không dạy bất kỳ mẫu cụ thể nào; toàn bộ mẫu cụ thể thuộc về các thử thách trong khóa học.

## 2. Mẫu là gì và không là gì

Bài này mở đầu bằng tuyên bố: ai đó đã giải quyết vấn đề của bạn rồi. Thay vì phát minh lại, bạn có thể học từ những người đã trải qua, đã vấp ngã và đã chắt lọc được lời giải tốt. Mẫu thiết kế là mô tả đã được kiểm chứng của một lời giải cho một bài toán thiết kế lặp đi lặp lại trong một ngữ cảnh nhất định. Ba thành phần làm nên một mẫu là tên gọi, bài toán cùng ngữ cảnh xuất hiện, và lời giải đã được đúc kết.

Điều mẫu không phải cũng quan trọng không kém. Mẫu không phải đoạn mã chép vào là chạy, vì cùng một mẫu có thể cài đặt khác nhau tùy ngôn ngữ và tình huống. Mẫu không phải công thức máy móc áp cho mọi nơi, vì dùng sai ngữ cảnh sẽ gây hại nhiều hơn lợi. Quy tắc ba lần được bài này nhắc tới chính là tinh thần này: đừng vội phong một thủ thuật thành mẫu cho tới khi thấy nó thành công ít nhất ba lần trong thực tế.

## 3. Từ vựng chung và sức mạnh của tên gọi

Lợi ích đầu tiên mà bài này nhấn mạnh là mẫu cho bạn từ vựng chung với các lập trình viên khác. Khi cả nhóm đều biết tên các mẫu, một câu nói ngắn gọn thay thế cả đoạn giải thích dài dòng về cấu trúc và ý đồ.

Sức mạnh của tên gọi còn nằm ở mật độ tri thức: mỗi cái tên gói cả bài toán, ngữ cảnh, lời giải, hệ quả và những đánh đổi đã biết. Bài này cảnh báo đừng đánh giá thấp sức mạnh của từ vựng chung: khi mọi người cùng dùng một ngôn ngữ mẫu, chất lượng thảo luận thiết kế tăng vọt và hiểu lầm giảm hẳn.

## 4. Cấu trúc của một mẫu và bản đồ các mẫu

Mỗi mẫu được trình bày theo một cấu trúc ổn định giúp người đọc tra cứu và so sánh. Phần tên gọi và phân loại đặt mẫu vào bản đồ chung. Phần bài toán mô tả tình huống lặp đi lặp lại cùng các lực giằng co cần hóa giải. Phần lời giải mô tả cấu trúc và cách sắp xếp các thành phần, thường ở mức khái niệm độc lập ngôn ngữ. Phần hệ quả phân tích kết quả và đánh đổi khi áp dụng, vì không mẫu nào chỉ có lợi mà không có giá. Phần ví dụ minh họa qua tình huống cụ thể giúp gắn khái niệm trừu tượng vào trí nhớ.

Bài này cũng giới thiệu cách tổ chức kho mẫu thành ba nhóm lớn: nhóm khởi tạo lo việc tạo đối tượng, nhóm cấu trúc lo việc tổ chức các lớp và đối tượng thành cấu trúc lớn hơn, và nhóm hành vi lo việc phân phối trách nhiệm và giao tiếp giữa các đối tượng. Bản đồ này giúp người học định vị mỗi mẫu mới gặp: khi bài toán là về cách tạo, nghĩ tới nhóm khởi tạo; khi bài toán là về cách ghép, nghĩ tới nhóm cấu trúc; khi bài toán là về cách phối hợp, nghĩ tới nhóm hành vi. Ngoài ra bài này còn nhắc tới khái niệm phản mẫu: lời giải trông có vẻ hợp lý nhưng thực chất gây hại, với cấu trúc mô tả gồm tên, bài toán, lời giải sai lầm và hậu quả, giúp người học nhận diện và tránh.

## 5. Cách học và dùng mẫu đúng

Bài này đề xuất một phương pháp học mẫu đi từ cụ thể tới trừu tượng: bắt đầu bằng tình huống đời thực dễ hình dung, quan sát thiết kế ngây thơ bộc lộ vấn đề gì, rồi xem mẫu hóa giải từng vấn đề ra sao, cuối cùng rút ra nguyên lý tổng quát. Mỗi bài đều có phần luyện trí não, câu hỏi đáp và bài tập vận dụng để ép người đọc dùng mẫu chứ không chỉ đọc về mẫu. Triết lý đằng sau là não bộ ghi nhớ tốt hơn khi phải suy nghĩ và làm, thay vì đọc thụ động.

Về cách dùng, bài này nhấn mạnh bốn điểm. Thứ nhất, dùng mẫu khi bài toán thực sự khớp ngữ cảnh của mẫu, không dùng vì mẫu nghe hay. Thứ hai, giữ thiết kế đơn giản nhất có thể rồi đưa mẫu vào khi áp lực thay đổi xuất hiện. Thứ ba, luôn đọc phần hệ quả trước khi áp dụng, vì mỗi mẫu đều có giá phải trả. Thứ tư, ghi lại quyết định dùng mẫu nào ở đâu để người tới sau hiểu ý đồ.

## 6. Siêu nhận thức: học cách học mẫu

Một điểm đặc sắc của bài này là công khai bàn về siêu nhận thức, tức suy nghĩ về cách mình học. Bài này thừa nhận đa số chúng ta chưa từng học về lý thuyết học tập, nên hay dùng phương pháp kém hiệu quả như đọc lướt và tưởng mình đã hiểu. Bài này đề xuất thay bằng học chủ động: tự đặt câu hỏi trước khi đọc đáp án, tự giải thích lại bằng lời của mình, xen kẽ các loại bài tập khác nhau, và quay lại ôn sau một khoảng thời gian.

Áp dụng vào học mẫu, siêu nhận thức nghĩa là theo dõi xem mình đang ở mức nào: mới nghe tên, hiểu ý tưởng, áp dụng được vào bài tập, hay đã nhận ra tình huống dùng trong dự án thực. Bài này cũng khuyến khích học nhóm qua thảo luận từ vựng chung, vì giải thích mẫu cho người khác chính là bài kiểm tra hiểu sâu nhất.

## 7. So sánh và đánh đổi

Học mẫu theo cách của bài này là đánh đổi tốc độ đọc lấy độ sâu hiểu: đọc chậm hơn nhưng nhớ lâu và dùng được. Dùng mẫu là đánh đổi độ đơn giản trước mắt lấy linh hoạt lâu dài: mã có mẫu phức tạp hơn mã ngây thơ, nhưng rẻ hơn khi yêu cầu đổi. Từ vựng chung là đánh đổi chi phí học thuật ngữ lấy tốc độ giao tiếp: tốn công học tên gọi ban đầu, nhưng mỗi cuộc thảo luận sau đó đều nhanh hơn. Nhận diện phản mẫu là đánh đổi sự khiêm tốn lấy an toàn: dám thừa nhận lời giải ưa thích của mình có thể là phản mẫu để tránh hậu quả lớn hơn.

## 8. Cạm bẫy tư duy

Cạm bẫy đầu tiên là sốt mẫu: thấy mẫu nào cũng muốn dùng, rải mẫu khắp thiết kế còn đơn giản. Cạm bẫy thứ hai là học tên mà không học ngữ cảnh, nhắc vanh vách tên mẫu nhưng áp sai chỗ. Cạm bẫy thứ ba là coi mẫu là mã chép sẵn thay vì ý tưởng cần điều chỉnh cho tình huống. Cạm bẫy thứ tư là đọc thụ động, lướt qua ví dụ mà không tự làm bài tập, rồi tưởng mình đã biết. Cạm bẫy thứ năm là bỏ qua phần hệ quả, chỉ thấy lợi mà không thấy giá của mẫu.

## 9. Ứng dụng của tư duy này

Tư duy meta về mẫu được dùng suốt khóa học: mỗi khi gặp mẫu cụ thể, hãy hỏi tên gọi của nó là gì, ngữ cảnh nào thì dùng, hệ quả và cái giá ra sao, và nó thể hiện nguyên lý thiết kế nào. Từ vựng chung dùng ngay trong thảo luận nhóm và phỏng vấn: gọi đúng tên mẫu giúp cuộc trò chuyện ở tầm thiết kế. Phương pháp học chủ động và siêu nhận thức áp dụng cho mọi chủ đề khó khác, không riêng gì mẫu thiết kế.

## 10. Tóm tắt + Sau bài này bạn hiểu được gì

Mẫu thiết kế là lời giải đã kiểm chứng cho bài toán lặp đi lặp lại trong một ngữ cảnh, được phát hiện từ thực tiễn chứ không phải phát minh trên giấy. Giá trị lớn nhất của nó là từ vựng chung giúp giao tiếp ở tầm thiết kế. Mỗi mẫu có cấu trúc gồm tên, bài toán, lời giải và hệ quả; kho mẫu tổ chức thành ba nhóm khởi tạo, cấu trúc và hành vi, kèm khái niệm phản mẫu để tránh. Học mẫu hiệu quả bằng phương pháp chủ động và siêu nhận thức, dùng mẫu đúng bằng cách khớp ngữ cảnh và đọc kỹ hệ quả.

Sau bài này bạn hiểu được:

- Định nghĩa mẫu qua ba thành phần tên, bài toán và lời giải, cùng quy tắc ba lần và ba điều mẫu không phải.
- Vì sao từ vựng chung là lợi ích lớn nhất của mẫu và cách tên gọi gói tri thức thiết kế.
- Cấu trúc trình bày một mẫu và bản đồ ba nhóm khởi tạo, cấu trúc, hành vi cùng khái niệm phản mẫu.
- Phương pháp học từ cụ thể tới trừu tượng và bốn điểm dùng mẫu đúng.
- Khái niệm siêu nhận thức và cách theo dõi mức hiểu của bản thân khi học mẫu.

Tự kiểm: vì sao mẫu là phát hiện từ thực tiễn chứ không phải phát minh? Kể tên ba nhóm mẫu và loại bài toán mỗi nhóm giải quyết. Vì sao đọc phần hệ quả trước khi áp dụng mẫu là bắt buộc?
