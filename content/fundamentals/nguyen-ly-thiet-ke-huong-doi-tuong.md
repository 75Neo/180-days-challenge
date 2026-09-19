---
title: "Nguyên lý thiết kế hướng đối tượng"
description: "Chín nguyên lý thiết kế phần mềm, SOLID, quan hệ HAS-A và IS-A cùng tư duy ghép lỏng."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [oop, solid, nguyen-ly, thiet-ke, fundamentals]
---

# Nguyên lý thiết kế hướng đối tượng

## 1. Tổng quan

Trước khi học mẫu thiết kế cụ thể, cần nắm nguyên lý đứng sau chúng. Mẫu chỉ là cách áp dụng nguyên lý vào tình huống cụ thể.

Bài này tổng hợp chín nguyên lý, gồm các nguyên lý SOLID. Kèm tư duy về quan hệ đối tượng và mục tiêu ghép lỏng.

Toàn bộ trình bày ở mức lý thuyết thuần túy. Không dạy bất kỳ mẫu cụ thể nào ở đây.

## 2. Đóng gói cái biến thiên

Nguyên lý đầu tiên: xác định khía cạnh hay biến thiên rồi đóng gói nó lại. Mọi thiết kế tốt đều bắt đầu từ quan sát cái gì đổi theo thời gian.

Ví dụ: cách bay và cách kêu của từng loài vịt. Chính sách giá đổi theo mùa, quy tắc kiểm tra đổi theo vùng miền.

Phần ổn định giữ nguyên. Phần biến thiên tách ra, đóng sau ranh giới rõ ràng.

Khi yêu cầu đổi, thay đổi bị giam trong phạm vi hẹp. Thay vì lan khắp hệ thống.

Hệ quả: thiết kế tốt không đoán trước mọi thay đổi. Nó tổ chức mã sao cho thay đổi xảy ra nơi đã chuẩn bị sẵn.

## 3. Lập trình theo giao diện và ưu tiên hợp thành

Nguyên lý thứ hai: lập trình theo giao diện, không theo cài đặt. Mã phía trên chỉ biết vai trò và hợp đồng hành vi.

Nhờ đó ta thay cài đặt sau vai trò mà phía trên không hay biết. Giống như remote chỉ biết nút bấm, không cần biết ruột máy nào.

Nguyên lý thứ ba: ưu tiên hợp thành hơn kế thừa. Kế thừa mô tả quan hệ IS-A: một lớp là một loại của lớp khác.

Nó ràng buộc hai lớp theo chiều dọc cứng nhắc. Đổi lớp cha lan xuống mọi lớp con.

Hợp thành mô tả quan hệ HAS-A: một đối tượng có một đối tượng khác đóng vai hành vi. Vai trò này thay được lúc đang chạy.

Hai nguyên lý đi thành cặp. Giao diện định nghĩa vai trò, hợp thành lắp ráp vai trò.

Giống như ráp xe bằng phụ tùng chuẩn. Thay vì đúc nguyên chiếc không sửa được.

## 4. Ghép lỏng và nguyên tắc Hollywood

Nguyên lý thứ tư: phấn đấu cho thiết kế ghép lỏng. Hai thành phần ghép lỏng tương tác nhưng ít biết về nhau.

Mỗi bên chỉ biết vừa đủ để phối hợp. Không biết chi tiết nội tại của bên kia.

Lợi ích là đổi một bên ít gây chấn động bên còn lại. Mỗi bên tiến hóa độc lập.

Ví dụ: bên phát hành thông tin và bên theo dõi thông tin. Bên phát hành không cần biết có bao nhiêu người nghe.

Không cần biết họ là ai, làm gì với thông tin. Chỉ cần biết cơ chế đăng ký và thông báo chung.

Nguyên lý Hollywood: đừng gọi chúng tôi, chúng tôi sẽ gọi bạn. Thành phần mức thấp đăng ký vào khung rồi chờ khung gọi lại.

Nhờ đó thành phần mức cao giữ quyền điều phối luồng chung. Các thành phần mức thấp vẫn đóng góp hành vi riêng.

## 5. Ba nguyên lý SOLID cốt lõi trong bài này

Nguyên lý đơn trách nhiệm: một lớp chỉ nên có một lý do để thay đổi. Lớp gánh hai việc thì sửa việc này dễ phá việc kia.

Hai nhóm yêu cầu khác nhau giằng co cùng một đơn vị mã. Tách mỗi trách nhiệm riêng giúp thay đổi khoanh vùng và kiểm thử độc lập.

Nguyên lý đóng mở: mở cho mở rộng, đóng cho sửa đổi. Hành vi mới thêm bằng đơn vị mới, mã cũ đã kiểm chứng không phải mở ra sửa.

Đây là nguyên lý khó nhất. Nó đòi đoán đúng điểm biến thiên ngay từ đầu.

Thước đo trưởng thành của thiết kế: đón yêu cầu mới bằng thêm mới thay vì sửa cũ. Nguyên lý đảo ngược phụ thuộc: phụ thuộc vào trừu tượng, đừng phụ thuộc lớp cụ thể.

Cả mô đun mức cao chứa chính sách lẫn mức thấp chứa chi tiết đều phụ thuộc trừu tượng ở giữa. Nhờ đó chi tiết thay được mà chính sách không lung lay.

Giống như ổ cắm điện chung cho mọi hãng sạc. Chuẩn cắm ổn định, thiết bị đổi tùy ý.

## 6. Nguyên tắc ít hiểu biết nhất và quan hệ đối tượng

Nguyên tắc ít hiểu biết nhất còn gọi là luật Demeter. Mỗi đơn vị chỉ nên nói chuyện với bạn bè thân thiết.

Tránh dây dưa với người lạ. Thực tế là hạn chế số đối tác tương tác trực tiếp.

Đừng thò tay qua nhiều tầng trung gian để chạm đối tượng xa. Ít đường phụ thuộc thì thay đổi ít lan truyền hơn.

Đối chiếu hai quan hệ nền tảng. IS-A diễn đạt bằng kế thừa, hợp khi phân loại bền vững.

HAS-A diễn đạt bằng hợp thành, hợp khi hành vi biến thiên hoặc cần thay lúc chạy. Quy tắc ngón tay cái: mặc định ưu tiên HAS-A.

Chỉ dùng IS-A khi quan hệ phân loại thực sự bền và đã kiểm chứng. Giống như chỉ đúc khuôn khi mẫu đã chốt, còn thử nghiệm thì ráp modul.

## 7. So sánh và đánh đổi

Các nguyên lý bổ sung chứ không thay thế nhau. Đóng gói chỉ ra cái gì cần tách.

Giao diện và hợp thành chỉ ra tách bằng cơ chế nào. Ghép lỏng và ít hiểu biết đo chất lượng quan hệ sau khi tách.

Ba nguyên lý SOLID đặt ràng buộc để thiết kế không thoái hóa theo thời gian. Đánh đổi chung là khái niệm phức tạp tăng lên.

Thêm tầng trừu tượng, thêm đơn vị, thêm quan hệ gián tiếp. Với bài nhỏ và ổn định, áp dụng máy móc mọi nguyên lý thành quan liêu.

Nghệ thuật nằm ở liều lượng. Càng dự báo nhiều biến thiên thì càng đầu tư trừu tượng.

Phần ổn định thì giữ đơn giản. Giống như không cần khung thép cho chòi lá.

## 8. Cạm bẫy tư duy

Thứ nhất: nhầm lập trình theo giao diện với từ khóa interface của ngôn ngữ. Tinh thần thật là phụ thuộc vào hợp đồng hành vi.

Thứ hai: lạm dụng kế thừa cho mọi tái sử dụng. Cây kế thừa giòn, đổi cha gây chấn động toàn bộ con.

Thứ ba: hiểu nguyên lý đóng mở như cấm sửa mã. Ý đúng là tổ chức để yêu cầu mới thường đáp ứng bằng thêm mới.

Thứ tư: áp dụng luật Demeter cực đoan thành thêm tầng trung gian vô tội vạ. Hệ thống khó theo dõi hơn thay vì đơn giản hơn.

Thứ năm: thuộc tên nguyên lý mà không nhận ra chúng trong mã thật. Đó là biết chữ mà không biết nghĩa.

## 9. Ứng dụng của tư duy này

Chín nguyên lý là bộ tiêu chí đánh giá mọi thiết kế. Mỗi khi xem một mẫu cụ thể, câu hỏi đầu tiên là nó thể hiện nguyên lý nào.

Về lâu dài, nguyên lý bền hơn mẫu. Mẫu cụ thể có thể lỗi thời theo công nghệ.

Nhưng tư duy đóng gói biến thiên và ghép lỏng áp dụng cho mọi hệ thống. Từ ứng dụng nhỏ tới nền tảng lớn.

## Tóm tắt

- Chín nguyên lý hợp thành một hệ tư duy thống nhất, từ đóng gói biến thiên tới SOLID.
- Giao diện và hợp thành đi thành cặp; HAS-A linh hoạt hơn IS-A cho hành vi biến thiên.
- Ghép lỏng và Hollywood phân chia quyền điều khiển rõ ràng giữa các thành phần.
- Ba SOLID cốt lõi: một lớp một việc, thêm mới thay vì sửa cũ, phụ thuộc trừu tượng.
- Áp dụng đúng liều theo mức biến thiên dự báo của bài toán.
