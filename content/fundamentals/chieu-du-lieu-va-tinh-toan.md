---
title: "Chiều dữ liệu và chiều tính toán"
description: "Ba họ thuật toán theo đặc trưng bài toán, mô hình 3V của dữ liệu, chiều tính toán và logic chọn thuật toán phù hợp."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [du-lieu, tinh-toan, 3V, thiet-ke, fundamentals]
---

# Chiều dữ liệu và chiều tính toán

## 1. Tổng quan

Trước khi thiết kế lời giải, người thiết kế khôn ngoan luôn mô tả bài toán trước khi mô tả lời giải: dữ liệu của bài toán có hình dạng gì, và nhu cầu xử lý của nó nặng nhẹ ra sao. Đó chính là phân tích chiều dữ liệu và chiều tính toán, bước đầu tiên của mọi thiết kế thuật toán nghiêm túc. Bài này trình bày ba họ thuật toán theo đặc trưng bài toán, mô hình 3V gồm khối lượng, vận tốc và đa dạng của dữ liệu, nội dung của chiều tính toán, và cách hai chiều này dẫn tới lựa chọn thuật toán cùng ngăn xếp phần mềm phù hợp.

## 2. Ba họ thuật toán theo đặc trưng bài toán

Bài này chia thuật toán thành ba họ dựa trên đặc trưng của bài toán cần giải. Họ thứ nhất là thuật toán nặng dữ liệu, sinh ra để xử lý lượng dữ liệu khổng lồ với yêu cầu xử lý tương đối đơn giản. Ví dụ là thuật toán nén áp dụng cho một tệp khổng lồ: kích thước dữ liệu lớn hơn nhiều so với bộ nhớ của cỗ máy xử lý, nên cần thiết kế xử lý lặp để xử lý dữ liệu hiệu quả theo từng phần.

Họ thứ hai là thuật toán nặng tính toán, có nhu cầu xử lý đáng kể nhưng không liên quan tới lượng dữ liệu lớn. Ví dụ là thuật toán tìm một số nguyên tố rất lớn: dữ liệu vào ra đều nhỏ, nhưng khối lượng tính toán khổng lồ. Chìa khóa tối ưu hiệu năng cho họ này là tìm cách chia thuật toán thành các pha khác nhau sao cho ít nhất một số pha song song hóa được.

Họ thứ ba vừa nặng dữ liệu vừa nặng tính toán, ví dụ các thuật toán phân tích cảm xúc trên luồng video trực tiếp, nơi cả dữ liệu và yêu cầu xử lý đều khổng lồ để hoàn thành nhiệm vụ. Đây là họ tốn tài nguyên nhất, đòi hỏi thiết kế thuật toán cẩn thận và phân bổ thông minh các tài nguyên sẵn có. Việc gọi tên đúng họ của bài toán ngay từ đầu giúp tránh hai sai lầm đối xứng: mang siêu máy tính đi xử lý bài toán đơn giản, hoặc mang thiết kế đơn giản đi đương đầu với bài toán khổng lồ.

## 3. Chiều dữ liệu và mô hình 3V

Để phân loại chiều dữ liệu của bài toán, bài này dùng ba đại lượng gọi là 3V. Khối lượng là kích thước dữ liệu mà thuật toán sẽ xử lý. Vận tốc là tốc độ sinh dữ liệu mới trong lúc thuật toán vận hành, và có thể bằng không. Đa dạng là số kiểu dữ liệu khác nhau mà thuật toán phải đương đầu.

Sơ đồ 3V trong bài này vẽ tâm là dữ liệu đơn giản nhất với khối lượng nhỏ cùng vận tốc và đa dạng thấp; càng rời xa tâm theo một hay nhiều chiều thì dữ liệu càng phức tạp. Riêng chiều vận tốc được xếp tầng từ đơn giản tới phức tạp: xử lý theo mẻ, xử lý định kỳ, xử lý gần thời gian thực, và cuối cùng là xử lý thời gian thực. Một chùm luồng video trực tiếp từ các camera giám sát là ví dụ có cả ba V ở mức cao.

Bài này minh họa bằng ba kịch bản đối chiếu. Kịch bản thứ nhất xử lý một tệp bảng tính: cả ba V đều thấp. Kịch bản thứ hai xử lý luồng video trực tiếp của camera an ninh: cả ba V đều khá cao và phải tính tới ngay từ khi thiết kế. Kịch bản thứ ba là mạng lưới cảm biến nhiệt trong một tòa nhà lớn: vận tốc rất cao vì dữ liệu mới sinh liên tục, nhưng khối lượng lại thấp vì mỗi mẩu tin chỉ dài 16 bit gồm 8 bit đo lường và 8 bit siêu dữ liệu như dấu thời gian và tọa độ. Ba kịch bản này cho thấy yêu cầu xử lý, nhu cầu lưu trữ và lựa chọn ngăn xếp phần mềm khác nhau hoàn toàn, và tất cả đều bắt nguồn từ đặc trưng 3V của nguồn dữ liệu.

## 4. Chiều tính toán

Để mô tả chiều tính toán, ta phân tích nhu cầu xử lý của bài toán. Nhu cầu xử lý quyết định kiểu thiết kế nào hiệu quả nhất. Các thuật toán phức tạp nói chung cần nhiều sức mạnh tính toán, và với chúng, kiến trúc song song đa nút có thể là điều kiện bắt buộc. Các thuật toán học sâu hiện đại thường gồm khối lượng tính toán số khổng lồ và có thể cần sức mạnh của GPU hay chip chuyên dụng.

Điểm mấu chốt là hai chiều độc lập nhau: dữ liệu lớn chưa chắc cần tính toán nặng, và tính toán nặng chưa chắc cần dữ liệu lớn. Bỏ qua một trong hai chiều là nguyên nhân phổ biến của các thiết kế khập khiễng.

## 5. Từ hai chiều tới lựa chọn thuật toán

Bài này nhấn mạnh rằng mô tả bài toán bằng hai chiều là bước đầu tiên của thiết kế, và nó dẫn trực tiếp tới ba quyết định: chọn họ thuật toán phù hợp, chọn ngăn xếp phần mềm và hạ tầng, và dự báo tài nguyên cần chuẩn bị.

Ba mối quan tâm thiết kế mà bài này nêu ở đầu bài gắn chặt với khung này: thuật toán có cho kết quả mong đợi không, đó có phải cách tối ưu nhất để ra kết quả không, và thuật toán sẽ thể hiện ra sao trên dữ liệu lớn hơn. Hai chiều dữ liệu và tính toán chính là công cụ để trả lời có căn cứ cả ba câu hỏi, thay vì trả lời bằng cảm tính.

## 6. So sánh và đánh đổi

Phân tích hai chiều là phương pháp định tính trước khi định lượng, đối lập với việc lao ngay vào phân tích Big-O chi tiết. Ưu điểm của nó là rẻ và sớm: chỉ cần hiểu bài toán là đã loại được cả nhóm thiết kế sai hướng. Hạn chế là nó không thay thế được phân tích độ phức tạp chặt chẽ về sau; nó chỉ đảm bảo ta phân tích đúng thứ đáng phân tích.

Đánh đổi thường gặp là giữa xử lý dữ liệu tại chỗ với chi phí tính toán cao và tiền xử lý lưu trữ với chi phí bộ nhớ cao, và vị trí của bài toán trên ma trận hai chiều sẽ mách nước lựa chọn nào hợp lý hơn. Một đánh đổi khác là giữa hạ tầng tổng quát đắt đỏ nhưng linh hoạt và hạ tầng chuyên dụng rẻ hơn nhưng chỉ phù hợp một góc của ma trận.

## 7. Cạm bẫy tư duy

Cạm bẫy đầu tiên là chỉ nhìn khối lượng dữ liệu mà quên vận tốc và đa dạng: một tệp lớn nhưng tĩnh khác hẳn một luồng nhỏ nhưng chảy xiết về yêu cầu thiết kế. Cạm bẫy thứ hai là lẫn lộn hai chiều, ví dụ cho rằng dữ liệu lớn thì mặc nhiên cần siêu máy tính tính toán, trong khi nhiều bài toán dữ liệu lớn chỉ cần xử lý đơn giản theo từng phần. Cạm bẫy thứ ba là thiết kế lời giải trước khi mô tả bài toán, tức chọn thuật toán ưa thích rồi ép bài toán vào đó. Cạm bẫy thứ tư là bỏ qua tầng vận tốc: thiết kế cho xử lý theo mẻ rồi ngỡ ngàng khi yêu cầu thực tế là thời gian thực.

## 8. Ứng dụng của tư duy này

Khung hai chiều được dùng ngay trong buổi họp đặc tả đầu tiên của mọi dự án: hỏi dữ liệu lớn bao nhiêu, chảy nhanh ra sao, có mấy kiểu, rồi hỏi tiếp phép tính nặng cỡ nào và phần nào song song hóa được. Câu trả lời định hướng toàn bộ quyết định tiếp theo từ chọn thuật toán, chọn hạ tầng tới lập kế hoạch tài nguyên. Về lâu dài, đây là ngôn ngữ để đọc các bài về thuật toán quy mô lớn, xử lý luồng và học sâu: mỗi chương thực chất là lời giải cho một góc cụ thể của ma trận hai chiều.

## 9. Tóm tắt + Sau bài này bạn hiểu được gì

Mô tả bài toán trước khi thiết kế lời giải bằng hai chiều dữ liệu và tính toán. Ba họ thuật toán gồm nặng dữ liệu, nặng tính toán và nặng cả hai tương ứng với ba góc của ma trận. Chiều dữ liệu được đo bằng 3V là khối lượng, vận tốc và đa dạng; chiều tính toán được đo bằng nhu cầu xử lý và khả năng song song hóa. Hai chiều này dẫn tới lựa chọn thuật toán, ngăn xếp phần mềm và kế hoạch tài nguyên.

Sau bài này bạn hiểu được:

- Ba họ thuật toán và ví dụ đặc trưng của mỗi họ từ nén tệp tới tìm số nguyên tố lớn tới phân tích video trực tiếp.
- Nội dung của từng V trong mô hình 3V và tầng phức tạp của chiều vận tốc từ xử lý mẻ tới thời gian thực.
- Vì sao hai chiều dữ liệu và tính toán độc lập nhau và đều phải phân tích.
- Cách dùng kết quả phân tích hai chiều để chọn thuật toán, hạ tầng và dự báo tài nguyên.
- Ba mối quan tâm thiết kế mà khung hai chiều giúp trả lời có căn cứ.

Tự kiểm: mạng cảm biến nhiệt trong ví dụ của bài này có 3V ra sao? Vì sao dữ liệu lớn chưa chắc cần tính toán nặng? Kể tên một quyết định hạ tầng thay đổi khi chuyển từ xử lý theo mẻ sang thời gian thực.
