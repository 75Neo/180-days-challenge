---
title: "Nguyên lý thiết kế hướng đối tượng"
description: "Chín nguyên lý thiết kế phần mềm, SOLID, quan hệ HAS-A và IS-A cùng tư duy ghép lỏng."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [oop, solid, nguyen-ly, thiet-ke, fundamentals]
---

# Nguyên lý thiết kế hướng đối tượng

## 1. Tổng quan

Trước khi học bất kỳ mẫu thiết kế cụ thể nào, cần nắm các nguyên lý đứng đằng sau chúng, vì mẫu chỉ là cách áp dụng nguyên lý vào tình huống cụ thể. Có chín nguyên lý thiết kế xuyên suốt, trong đó có các nguyên lý SOLID, cùng tư duy về quan hệ giữa các đối tượng và mục tiêu ghép lỏng. Bài này tổng hợp toàn bộ chín nguyên lý cùng các khái niệm quan hệ HAS-A, IS-A và ghép lỏng ở mức lý thuyết thuần túy, không dạy bất kỳ mẫu cụ thể nào, làm nền tảng cho mọi bài mẫu thiết kế phía sau.

## 2. Đóng gói cái biến thiên

Nguyên lý đầu tiên trong bài này phát biểu: xác định những khía cạnh của ứng dụng mà biến thiên rồi đóng gói chúng lại. Mọi thiết kế tốt đều bắt đầu từ việc quan sát cái gì thay đổi theo thời gian: hành vi bay của các loài vịt khác nhau, cách kêu khác nhau, chính sách giá thay đổi theo mùa, quy tắc kiểm tra thay đổi theo vùng miền. Phần ổn định giữ nguyên, phần biến thiên được tách ra và đóng gói đằng sau một ranh giới rõ ràng, để khi yêu cầu đổi, thay đổi bị giam trong phạm vi hẹp thay vì lan khắp hệ thống.

Hệ quả của nguyên lý này là thiết kế tốt không cố đoán trước mọi thay đổi trong tương lai, mà tổ chức mã sao cho thay đổi xảy ra ở nơi đã chuẩn bị sẵn.

## 3. Lập trình theo giao diện và ưu tiên hợp thành

Nguyên lý thứ hai phát biểu: lập trình theo giao diện chứ không theo cài đặt. Khi mã phía trên chỉ biết tới vai trò và hợp đồng hành vi, ta có thể thay thế bất kỳ cài đặt nào đứng sau vai trò đó mà phía trên không hề hay biết.

Nguyên lý thứ ba phát biểu: ưu tiên hợp thành hơn kế thừa. Kế thừa mô tả quan hệ IS-A, tức một lớp là một loại của lớp khác, và nó ràng buộc hai lớp theo chiều dọc cứng nhắc: thay đổi lớp cha lan xuống mọi lớp con. Hợp thành mô tả quan hệ HAS-A, tức một đối tượng có một đối tượng khác đóng vai trò hành vi, và vai trò đó có thể thay lúc chạy. Hai nguyên lý giao diện và hợp thành đi thành cặp: giao diện định nghĩa vai trò, hợp thành lắp ráp vai trò.

## 4. Ghép lỏng và nguyên tắc Hollywood

Nguyên lý thứ tư phát biểu: phấn đấu cho thiết kế ghép lỏng. Hai thành phần ghép lỏng là hai thành phần tương tác với nhau nhưng ít biết về nhau: mỗi bên chỉ biết vừa đủ để phối hợp, không biết chi tiết nội tại của bên kia. Lợi ích là thay đổi một bên ít gây chấn động bên còn lại, và mỗi bên có thể tiến hóa độc lập. Bài này lấy quan hệ giữa bên phát hành thông tin và bên theo dõi thông tin làm minh chứng: bên phát hành không cần biết có bao nhiêu bên theo dõi, chúng là ai hay làm gì với thông tin, chỉ cần biết cơ chế đăng ký và thông báo chung.

Nguyên lý Hollywood phát biểu: đừng gọi chúng tôi, chúng tôi sẽ gọi bạn. Ý tưởng là đảo chiều phụ thuộc điều khiển: thành phần mức thấp đăng ký vào một khung rồi để khung gọi lại khi tới lượt, nhờ đó thành phần mức cao giữ quyền điều phối luồng chung trong khi các thành phần mức thấp vẫn đóng góp hành vi riêng.

## 5. Ba nguyên lý SOLID cốt lõi trong bài này

Nguyên lý đơn trách nhiệm phát biểu: một lớp chỉ nên có một lý do để thay đổi. Khi một lớp gánh hai trách nhiệm khác nhau, thay đổi ở trách nhiệm này có nguy cơ phá vỡ trách nhiệm kia, và hai nhóm yêu cầu khác nhau giằng co cùng một đơn vị mã. Tách mỗi trách nhiệm thành một đơn vị riêng giúp thay đổi khoanh vùng và kiểm thử độc lập.

Nguyên lý đóng mở phát biểu: lớp nên mở cho mở rộng nhưng đóng cho sửa đổi. Mở cho mở rộng nghĩa là hành vi mới được thêm bằng cách bổ sung đơn vị mới; đóng cho sửa đổi nghĩa là mã đã kiểm chứng không phải mở ra sửa mỗi lần có yêu cầu mới. Đây là nguyên lý khó nhất vì đòi hỏi dự đoán đúng điểm biến thiên ngay từ đầu, và là thước đo trưởng thành của thiết kế: thiết kế tốt đón nhận yêu cầu mới bằng thêm mới thay vì sửa cũ.

Nguyên lý đảo ngược phụ thuộc phát biểu: phụ thuộc vào trừu tượng, đừng phụ thuộc vào lớp cụ thể. Cả mô đun mức cao chứa chính sách lẫn mô đun mức thấp chứa chi tiết đều nên phụ thuộc vào trừu tượng ở giữa, nhờ đó chi tiết thay được mà chính sách không lung lay.

## 6. Nguyên tắc ít hiểu biết nhất và quan hệ đối tượng

Nguyên tắc ít hiểu biết nhất, còn gọi là luật Demeter, khuyên rằng mỗi đơn vị chỉ nên nói chuyện với bạn bè thân thiết, tránh dây dưa với người lạ. Thực tế điều này nghĩa là hạn chế số lượng đối tác mà một đối tượng tương tác trực tiếp, và không thò tay qua nhiều tầng trung gian để chạm vào đối tượng xa. Thiết kế tuân thủ nguyên tắc này có ít đường phụ thuộc hơn, nên thay đổi ở một nơi ít lan truyền hơn.

Bài này đối chiếu hai quan hệ nền tảng: IS-A diễn đạt bằng kế thừa, phù hợp khi quan hệ phân loại bền vững; HAS-A diễn đạt bằng hợp thành, phù hợp khi hành vi biến thiên hoặc cần thay lúc chạy. Quy tắc ngón tay cái rút ra từ toàn bộ nội dung trên là mặc định ưu tiên HAS-A, chỉ dùng IS-A khi quan hệ phân loại thực sự bền và đã kiểm chứng.

## 7. So sánh và đánh đổi

Các nguyên lý này bổ sung chứ không thay thế nhau: đóng gói cái biến thiên chỉ ra cái gì cần tách, giao diện và hợp thành chỉ ra tách bằng cơ chế nào, ghép lỏng và ít hiểu biết nhất đo chất lượng mối quan hệ sau khi tách, còn ba nguyên lý SOLID đặt ràng buộc để thiết kế không thoái hóa theo thời gian. Đánh đổi chung của mọi nguyên lý là độ phức tạp khái niệm tăng lên: thêm tầng trừu tượng, thêm đơn vị, thêm quan hệ gián tiếp. Với bài toán nhỏ và ổn định, áp dụng máy móc mọi nguyên lý sẽ thành quan liêu hóa thiết kế. Nghệ thuật nằm ở chỗ áp dụng đúng liều: càng dự báo nhiều biến thiên thì càng đầu tư trừu tượng, còn phần ổn định thì giữ đơn giản.

## 8. Cạm bẫy tư duy

Cạm bẫy đầu tiên là nhầm lẫn lập trình theo giao diện với việc dùng từ khóa interface của ngôn ngữ, trong khi tinh thần của nó là phụ thuộc vào hợp đồng hành vi. Cạm bẫy thứ hai là lạm dụng kế thừa cho mọi tái sử dụng, tạo ra cây kế thừa giòn mà thay đổi lớp cha gây chấn động toàn bộ lớp con. Cạm bẫy thứ ba là hiểu nguyên lý đóng mở như cấm sửa mã, trong khi ý đúng là tổ chức để yêu cầu mới thường được đáp ứng bằng thêm mới. Cạm bẫy thứ tư là áp dụng nguyên tắc ít hiểu biết nhất một cách cực đoan thành thêm tầng trung gian vô tội vạ, làm hệ thống khó theo dõi hơn thay vì đơn giản hơn. Cạm bẫy thứ năm là học thuộc tên nguyên lý mà không nhận ra chúng trong mã thực tế, tức biết chữ mà không biết nghĩa.

## 9. Ứng dụng của tư duy này

Chín nguyên lý là bộ tiêu chí đánh giá mọi thiết kế trong khóa học: mỗi khi xem một mẫu thiết kế cụ thể, câu hỏi đầu tiên luôn là mẫu đó thể hiện nguyên lý nào. Về lâu dài, nguyên lý bền hơn mẫu: mẫu cụ thể có thể lỗi thời theo công nghệ, nhưng tư duy đóng gói biến thiên và ghép lỏng thì áp dụng cho mọi hệ thống.

## 10. Tóm tắt + Sau bài này bạn hiểu được gì

Chín nguyên lý gồm đóng gói cái biến thiên, lập trình theo giao diện, ưu tiên hợp thành, ghép lỏng, Hollywood, đơn trách nhiệm, đóng mở, đảo ngược phụ thuộc và ít hiểu biết nhất hợp thành một hệ thống tư duy thống nhất. Quan hệ HAS-A linh hoạt hơn IS-A cho hành vi biến thiên, và ghép lỏng là mục tiêu tổng hợp của mọi nguyên lý. Áp dụng nguyên lý cần đúng liều theo mức biến thiên dự báo của bài toán.

Sau bài này bạn hiểu được:

- Nội dung và vai trò mở đường của nguyên lý đóng gói cái biến thiên.
- Vì sao giao diện và hợp thành đi thành cặp, cùng sự khác biệt giữa quan hệ HAS-A và IS-A.
- Ý nghĩa của ghép lỏng và nguyên lý Hollywood trong việc phân chia quyền điều khiển.
- Nội dung ba nguyên lý SOLID cốt lõi và dấu hiệu vi phạm từng nguyên lý.
- Nguyên tắc ít hiểu biết nhất cùng nghệ thuật áp dụng nguyên lý đúng liều.

Tự kiểm: vì sao kế thừa không phù hợp với hành vi biến thiên? Phân biệt mở cho mở rộng với đóng cho sửa đổi trong nguyên lý đóng mở. Vì sao đảo ngược phụ thuộc yêu cầu cả mức cao lẫn mức thấp cùng phụ thuộc trừu tượng?
