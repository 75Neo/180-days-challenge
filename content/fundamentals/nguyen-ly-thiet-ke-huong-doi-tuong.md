---
title: "Nguyên lý thiết kế hướng đối tượng"
description: "Chín nguyên lý thiết kế phần mềm, SOLID, quan hệ HAS-A và IS-A cùng tư duy ghép lỏng."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [oop, solid, nguyen-ly, thiet-ke, fundamentals]
---

## 1. Tổng quan

Trước khi học mẫu thiết kế cụ thể, cần nắm nguyên lý đứng sau chúng. Mẫu chỉ là cách áp dụng nguyên lý vào tình huống cụ thể.

Bài này tổng hợp các nguyên lý thiết kế, gồm đủ năm chữ SOLID. Kèm tư duy về quan hệ đối tượng và mục tiêu ghép lỏng.

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

## 5. Năm nguyên lý SOLID

Nguyên lý đơn trách nhiệm: một lớp chỉ nên có một lý do để thay đổi. Lớp gánh hai việc thì sửa việc này dễ phá việc kia.

Hai nhóm yêu cầu khác nhau giằng co cùng một đơn vị mã. Tách mỗi trách nhiệm riêng giúp thay đổi khoanh vùng và kiểm thử độc lập.

Nguyên lý đóng mở: mở cho mở rộng, đóng cho sửa đổi. Hành vi mới thêm bằng đơn vị mới, mã cũ đã kiểm chứng không phải mở ra sửa.

Đây là nguyên lý khó nhất. Nó đòi đoán đúng điểm biến thiên ngay từ đầu.

Thước đo trưởng thành của thiết kế: đón yêu cầu mới bằng thêm mới thay vì sửa cũ. Nguyên lý đảo ngược phụ thuộc: phụ thuộc vào trừu tượng, đừng phụ thuộc lớp cụ thể.

Cả mô đun mức cao chứa chính sách lẫn mức thấp chứa chi tiết đều phụ thuộc trừu tượng ở giữa. Nhờ đó chi tiết thay được mà chính sách không lung lay.

Giống như ổ cắm điện chung cho mọi hãng sạc. Chuẩn cắm ổn định, thiết bị đổi tùy ý.

Nguyên lý thay thế Liskov (chữ L): lớp con phải dùng được ở mọi chỗ lớp cha được dùng mà không làm hỏng kỳ vọng. Ví dụ kinh điển: `Square` kế thừa `Rectangle`. Đoạn mã đặt rộng 5, cao 4 rồi kỳ vọng diện tích 20 sẽ sai với hình vuông. Kế thừa đúng cú pháp nhưng sai hành vi.

Nguyên lý tách giao diện (chữ I): đừng ép lớp phụ thuộc vào phương thức nó không dùng. Máy in rẻ không nên phải cài `fax()` rỗng chỉ vì giao diện `IMachine` gom cả in, quét, fax. Tách thành nhiều giao diện nhỏ.

| Chữ | Câu hỏi tự vấn |
|---|---|
| S | Lớp này có mấy lý do để đổi? |
| O | Thêm tính năng có phải sửa mã cũ không? |
| L | Thay lớp cha bằng lớp con có gây bất ngờ không? |
| I | Có lớp nào cài phương thức rỗng cho đủ giao diện không? |
| D | Mô đun chính sách đang phụ thuộc lớp cụ thể hay trừu tượng? |

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

Các nguyên lý này là bộ tiêu chí đánh giá mọi thiết kế. Mỗi khi xem một mẫu cụ thể, câu hỏi đầu tiên là nó thể hiện nguyên lý nào.

Về lâu dài, nguyên lý bền hơn mẫu. Mẫu cụ thể có thể lỗi thời theo công nghệ.

Nhưng tư duy đóng gói biến thiên và ghép lỏng áp dụng cho mọi hệ thống. Từ ứng dụng nhỏ tới nền tảng lớn.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Lớp `Report` vừa tính số liệu vừa xuất PDF. Vi phạm nguyên lý nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Đơn trách nhiệm (S): có 2 lý do để đổi. Tách thành lớp tính toán và lớp xuất.
::

**Câu 2.** Thêm phương thức thanh toán mới phải sửa `switch` trong `Checkout`. Vi phạm nguyên lý nào, sửa ra sao?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Đóng mở (O). Tạo giao diện `PaymentMethod`, mỗi phương thức một lớp, `Checkout` chỉ gọi giao diện.
::

**Câu 3.** Vì sao `Square` kế thừa `Rectangle` vi phạm Liskov?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Mã đặt rộng và cao khác nhau rồi kỳ vọng diện tích bằng tích hai số sẽ sai với hình vuông.
::

**Câu 4.** `order.getCustomer().getAddress().getCity()` vi phạm nguyên lý nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Luật Demeter (ít hiểu biết nhất): gọi xuyên qua nhiều đối tượng lạ. Nên có `order.shippingCity()`.
::

**Câu 5.** Khi nào nên dùng kế thừa (IS-A) thay vì hợp thành (HAS-A)?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Khi quan hệ phân loại thật sự bền và lớp con thay thế được lớp cha ở mọi chỗ. Còn hành vi hay đổi thì dùng hợp thành.
::

## Tóm tắt

- Các nguyên lý hợp thành một hệ tư duy thống nhất, từ đóng gói biến thiên tới SOLID.
- Giao diện và hợp thành đi thành cặp; HAS-A linh hoạt hơn IS-A cho hành vi biến thiên.
- Ghép lỏng và Hollywood phân chia quyền điều khiển rõ ràng giữa các thành phần.
- SOLID: một lớp một việc, thêm mới thay vì sửa cũ, lớp con thay được lớp cha, giao diện nhỏ, phụ thuộc trừu tượng.
- Áp dụng đúng liều theo mức biến thiên dự báo của bài toán.
