---
title: "Chiều dữ liệu và chiều tính toán"
description: "Ba họ thuật toán theo đặc trưng bài toán, mô hình 3V của dữ liệu, chiều tính toán và logic chọn thuật toán phù hợp."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [du-lieu, tinh-toan, 3V, thiet-ke, fundamentals]
---

## 1. Tổng quan

Trước khi thiết kế lời giải, hãy mô tả bài toán trước. Dữ liệu của nó có hình dạng gì?

Nhu cầu xử lý của nó nặng nhẹ ra sao? Đó là phân tích chiều dữ liệu và chiều tính toán.

## 2. Ba họ thuật toán theo đặc trưng bài toán

Họ thứ nhất nặng dữ liệu. Lượng dữ liệu khổng lồ, phép xử lý khá đơn giản.

Ví dụ: nén một tệp khổng lồ theo từng phần. Dữ liệu lớn hơn nhiều so với bộ nhớ máy.

Họ thứ hai nặng tính toán. Dữ liệu vào ra đều nhỏ, khối lượng tính toán khổng lồ.

Ví dụ: tìm một số nguyên tố rất lớn. Chìa khóa tối ưu là chia thuật toán thành nhiều pha.

Ít nhất một pha phải song song hóa được. Họ thứ ba nặng cả hai.

Ví dụ: phân tích cảm xúc trên luồng video trực tiếp. Đây là họ tốn tài nguyên nhất.

Nó đòi thiết kế cẩn thận và chia tài nguyên thông minh. Gọi đúng tên họ giúp tránh hai sai lầm đối xứng.

Đừng mang siêu máy tính xử lý bài đơn giản. Đừng mang thiết kế đơn giản đấu bài toán khổng lồ.

## 3. Chiều dữ liệu và mô hình 3V

Chiều dữ liệu được đo bằng 3V. V thứ nhất là khối lượng: dữ liệu lớn cỡ nào.

V thứ hai là vận tốc: dữ liệu mới sinh nhanh cỡ nào. Nó có thể bằng không.

V thứ ba là đa dạng: có bao nhiêu kiểu dữ liệu khác nhau. Tâm sơ đồ là dữ liệu đơn giản nhất.

Càng rời tâm thì dữ liệu càng phức tạp. Chiều vận tốc xếp tầng từ đơn giản tới phức tạp.

Thứ tự là: xử lý theo mẻ, xử lý định kỳ, gần thời gian thực, rồi thời gian thực. Ví dụ cả ba V đều cao: chùm video trực tiếp từ camera giám sát.

Ba kịch bản đối chiếu giúp nhớ lâu. Kịch bản một: xử lý một tệp bảng tính, cả ba V đều thấp.

Kịch bản hai: luồng video camera an ninh, cả ba V khá cao. Phải tính tới ngay từ khi thiết kế.

Kịch bản ba: lưới cảm biến nhiệt trong tòa nhà lớn. Vận tốc rất cao vì tin mới sinh liên tục.

Nhưng khối lượng lại thấp. Mỗi mẩu tin chỉ dài 16 bit, gồm 8 bit đo lường và 8 bit siêu dữ liệu.

Ba kịch bản cần lưu trữ và hạ tầng hoàn toàn khác nhau. Tất cả khác biệt đều bắt nguồn từ 3V.

## 4. Chiều tính toán

Chiều tính toán là nhu cầu xử lý của bài toán. Nhu cầu này quyết định kiểu thiết kế hiệu quả nhất.

Thuật toán phức tạp cần nhiều sức tính toán. Kiến trúc song song đa nút có thể là bắt buộc.

Thuật toán học sâu cần khối tính toán số khổng lồ. Nó có thể cần GPU hay chip chuyên dụng.

Điểm mấu chốt: hai chiều độc lập nhau. Dữ liệu lớn chưa chắc cần tính toán nặng.

Tính toán nặng chưa chắc cần dữ liệu lớn. Bỏ qua một chiều sẽ cho thiết kế khập khiễng.

## 5. Từ hai chiều tới lựa chọn thuật toán

Mô tả hai chiều là bước đầu của thiết kế. Nó dẫn tới ba quyết định trực tiếp.

Một là chọn họ thuật toán phù hợp. Hai là chọn ngăn xếp phần mềm và hạ tầng.

Ba là dự báo tài nguyên cần chuẩn bị. Ba mối quan tâm thiết kế gắn chặt với khung này.

Thuật toán có cho kết quả mong đợi không? Đó có phải cách tối ưu nhất không? Nó thể hiện ra sao trên dữ liệu lớn hơn?

Hai chiều giúp trả lời có căn cứ. Thay vì trả lời bằng cảm tính.

## 6. So sánh và đánh đổi

Phân tích hai chiều là định tính trước khi định lượng. Nó đối lập với việc lao ngay vào Big-O chi tiết.

Ưu điểm là rẻ và sớm. Chỉ cần hiểu bài toán đã loại được cả nhóm thiết kế sai.

Hạn chế là không thay thế phân tích chặt chẽ về sau. Nó chỉ đảm bảo ta phân tích đúng thứ đáng phân tích.

Đánh đổi thường gặp: xử lý tại chỗ tốn tính toán, hay tiền xử lý tốn bộ nhớ. Vị trí trên ma trận hai chiều sẽ mách nước lựa chọn.

Đánh đổi khác: hạ tầng chung đắt nhưng linh hoạt, hay hạ tầng chuyên dụng rẻ nhưng kén việc. Giống như thuê xe tải đa năng hay xe đông lạnh chuyên dụng.

## 7. Cạm bẫy tư duy

Thứ nhất: chỉ nhìn khối lượng mà quên vận tốc và đa dạng. Tệp lớn nhưng tĩnh khác hẳn luồng nhỏ chảy xiết.

Thứ hai: lẫn hai chiều với nhau. Dữ liệu lớn chưa chắc cần siêu máy tính tính toán.

Thứ ba: chọn thuật toán ưa thích trước rồi ép bài toán vào. Phải mô tả bài toán trước khi chọn lời giải.

Thứ tư: thiết kế cho xử lý theo mẻ rồi ngỡ ngàng khi yêu cầu thật là thời gian thực. Tầng vận tốc không thể bỏ qua.

## 8. Ứng dụng của tư duy này

Khung hai chiều dùng ngay buổi họp đặc tả đầu tiên. Hỏi dữ liệu lớn bao nhiêu, chảy nhanh ra sao, có mấy kiểu.

Rồi hỏi phép tính nặng cỡ nào, phần nào song song được. Câu trả lời định hướng mọi quyết định tiếp theo.

Về lâu dài, đây là ngôn ngữ đọc tài liệu quy mô lớn. Mỗi chương thực chất là lời giải cho một góc của ma trận.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Ba chữ V của chiều dữ liệu là gì?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Khối lượng (volume), vận tốc (velocity), đa dạng (variety).
::

**Câu 2.** Tìm số nguyên tố rất lớn thuộc họ nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Nặng tính toán: dữ liệu vào ra nhỏ, khối lượng tính toán khổng lồ.
::

**Câu 3.** Lưới cảm biến nhiệt gửi tin 16 bit mỗi giây: V nào cao, V nào thấp?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Vận tốc cao vì tin đến liên tục. Khối lượng mỗi tin thấp. Đa dạng thấp vì cùng một kiểu tin.
::

**Câu 4.** Dữ liệu lớn có luôn cần tính toán nặng không?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Không. Hai chiều độc lập: nén một tệp khổng lồ có dữ liệu lớn nhưng phép xử lý đơn giản.
::

**Câu 5.** Nêu 1 quyết định thiết kế phụ thuộc vào vận tốc dữ liệu.

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Chọn xử lý theo mẻ hay xử lý luồng (stream). Dữ liệu đến liên tục và cần kết quả ngay thì phải xử lý luồng.
::

## Tóm tắt

- Mô tả bài toán trước khi thiết kế lời giải, qua hai chiều dữ liệu và tính toán.
- Ba họ thuật toán: nặng dữ liệu, nặng tính toán, nặng cả hai.
- Chiều dữ liệu đo bằng 3V: khối lượng, vận tốc, đa dạng.
- Chiều tính toán đo bằng nhu cầu xử lý và khả năng song song hóa.
- Kết quả phân tích dẫn tới chọn thuật toán, hạ tầng và kế hoạch tài nguyên.
