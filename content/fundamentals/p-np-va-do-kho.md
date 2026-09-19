---
title: "P, NP và độ khó bài toán"
description: "Thuật toán đa thức, chứng chỉ, quan hệ P là tập con của NP, NP-complete, NP-hard và chiến lược ứng phó với bài toán khó."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [p-np, np-complete, np-hard, do-kho, fundamentals]
---

# P, NP và độ khó bài toán

## 1. Tổng quan

Không phải bài toán nào cũng khó như nhau. Biết bài của mình khó cỡ nào giúp chọn chiến lược đúng.

Bài dễ thì tìm lời giải tối ưu. Bài khó thì chấp nhận lời giải khả thi.

Cộng đồng phân loại độ khó thành P, NP, NP-complete và NP-hard. Câu hỏi P có bằng NP không treo giải một triệu đô la.

## 2. Thuật toán đa thức và khái niệm chứng chỉ

Hai định nghĩa nền mở đầu. Thuật toán đa thức có thời gian chạy $O(n^k)$ với $k$ là hằng số.

Hàm đa thức tăng chậm hơn hàm mũ rất nhiều khi n lớn. Nên lời giải đa thức coi là hiệu quả và khả thi thực tế.

Chứng chỉ là nghiệm ứng viên sinh ra cuối mỗi vòng lặp. Qua các vòng, chứng chỉ mới tốt hơn chứng chỉ cũ nếu quá trình hội tụ.

Khi chứng chỉ đáp ứng yêu cầu thì chọn làm nghiệm cuối. Từ đó phân biệt hai khoảng thời gian.

Thời gian sinh nghiệm là công tạo ra chứng chỉ. Thời gian kiểm tra là công xác minh chứng chỉ đó.

Có bài tìm nghiệm cực khó nhưng kiểm tra cực dễ. Phân biệt này là chìa khóa toàn bộ lý thuyết.

Giống như ra đề khó nhưng chấm trắc nghiệm nhanh. Trước khi thiết kế, nên mô tả bài toán trước.

Có ba loại theo độ khó. Loại đảm bảo có thuật toán đa thức để giải.

Loại đã chứng minh không thể giải bằng thuật toán đa thức. Loại chưa tìm được mà cũng chưa chứng minh không tồn tại.

Phần lớn bài thực tế thú vị rơi vào loại thứ ba. Các lớp P, NP ra đời để nói chính xác về chúng.

## 3. Lớp NP và lớp P

Lớp NP viết tắt của đa thức không đơn định. Gồm bài toán mà máy không đơn định giải được trong thời gian đa thức.

Diễn đạt trực quan: mỗi bước được phép đoán hợp lý mà không tốn công tìm tối ưu. Nghiệm tìm được kiểm tra được trong thời gian đa thức.

Định nghĩa hình thức gọi là điều kiện A. Đảm bảo có thuật toán đa thức để xác minh chứng chỉ là tối ưu.

Lớp P gồm bài toán máy đơn định giải được trong thời gian đa thức. Tức tồn tại thuật toán chạy $O(n^k)$ với một mũ $k$ nào đó.

Lớp P là tập con của NP. Ngoài điều kiện A về kiểm tra, bài lớp P còn thỏa điều kiện B.

Điều kiện B là có ít nhất một thuật toán đa thức để giải. Vì NP chỉ đòi một điều kiện mà P đòi cả hai, nên P nằm trong NP.

Điều ngược lại có đúng không thì chưa ai biết. Đây là vấn đề mở treo giải một triệu đô la.

## 4. NP-complete và NP-hard

Hai lớp tiếp theo mô tả bài toán khó nhất. NP-complete chứa bài khó nhất trong NP, thỏa hai điều kiện.

Chưa biết thuật toán đa thức nào để sinh chứng chỉ. Nhưng đã biết thuật toán đa thức để xác minh chứng chỉ là tối ưu.

NP-hard chứa bài khó ít nhất bằng mọi bài trong NP. Nhưng bản thân chúng không nhất thiết thuộc NP.

Sơ đồ quan hệ: P nằm trong NP. NP-complete là lõi khó nhất nằm trong NP.

NP-hard là vùng bao quanh chứa NP-complete và tràn ra ngoài NP. Sơ đồ này dựa trên giả định P khác NP.

Nếu P bằng NP thì toàn bộ sơ đồ sụp đổ thành một. Ví dụ đối chiếu các lớp như sau.

| Lớp | Ví dụ điển hình |
|---|---|
| P | Bảng băm, Dijkstra, tìm kiếm tuyến tính, tìm kiếm nhị phân |
| NP-hard | Mã hóa RSA, phân cụm tối ưu bằng K-means |
| NP-complete | Người bán hàng rong, bài toán ba lô |

Tính chất đáng sợ nhất: tìm ra lời giải cho một bài NP-hard hay NP-complete. Sẽ kéo theo lời giải cho mọi bài cùng họ.

## 5. Vì sao bài toán khó buộc phải xấp xỉ

Lý thuyết độ khó gắn với thực hành qua một câu hỏi. Liệu có nên nhắm nghiệm tối ưu ngay từ đầu không.

Nếu tìm và xác minh tối ưu tốn công khổng lồ, lời giải khả thi thực tế tốt hơn. Lời giải khả thi dựa trên kinh nghiệm gọi là heuristic.

Điện toán đám mây co giãn mang lựa chọn mới. Dữ liệu tăng thì cấp thêm CPU hay máy ảo để giữ thời gian.

Nhưng co giãn không cứu được tăng trưởng hàm mũ của NP-hard. Nó chỉ trì hoãn điểm sụp đổ chứ không xóa bỏ nó.

Giống như thêm xô múc nước lũ. Nước lên theo hàm mũ thì bao nhiêu xô cũng tràn.

## 6. So sánh và đánh đổi

Bốn lớp cho bốn chiến lược khác nhau. Bài lớp P thì đầu tư tìm tối ưu vì công bỏ ra được đền đáp.

Bài NP-complete hay NP-hard thì chấp nhận heuristic và xấp xỉ. Đặt ngưỡng sai số từ đầu và kiểm chứng sai số.

Đừng đòi nghiệm tối ưu. Đánh đổi cốt lõi là giữa tối ưu và khả thi.

Càng khăng khăng tối ưu cho bài khó, chi phí càng phình theo hàm mũ. Đánh đổi thứ hai là giữa phân loại và giải.

Một ngày phân tích độ khó có thể tiết kiệm hàng tháng cài đặt lời giải không tưởng.

## 7. Cạm bẫy tư duy

Thứ nhất: lẫn khó kiểm tra với khó giải. Thấy nghiệm dễ kiểm tra thì tưởng bài dễ giải.

Trong khi đó chính là đặc trưng của NP. Thứ hai: không phân loại độ khó mà lao ngay vào tìm tối ưu cho NP-hard.

Rồi kẹt trong vòng lặp tối ưu vô vọng. Thứ ba: hiểu sai quan hệ tập con.

Mọi P đều là NP nhưng ngược lại chưa chứng minh được. Không thể mặc định bài NP nào cũng có lời giải đa thức.

Thứ tư: tin thêm phần cứng giải được NP-hard quy mô lớn. Tăng trưởng hàm mũ nuốt chửng mọi nâng cấp tuyến tính.

## 8. Ứng dụng của tư duy này

Tư duy độ khó dùng ngay khi nhận bài mới. Thử xem nó có lời giải đa thức đã biết không.

Thử xem nó có quy được về ba lô hay người bán hàng rong không. Từ đó quyết định theo đuổi tối ưu hay chấp nhận heuristic.

Thói quen này rẻ mà cứu nhiều công sức. Phân loại một giờ đỡ hơn cài đặt một tháng vô vọng.

## Tóm tắt

- Thuật toán đa thức $O(n^k)$ là chuẩn mực của lời giải khả thi; chứng chỉ phân biệt thời gian sinh và kiểm tra nghiệm.
- P đòi cả giải và kiểm tra trong đa thức; NP chỉ đòi kiểm tra được; P là tập con của NP.
- NP-complete là lõi khó nhất trong NP; NP-hard khó ít nhất bằng mọi bài NP.
- Với bài khó, chiến lược đúng là heuristic và xấp xỉ có ngưỡng sai số.
- Thêm phần cứng không xóa được bản chất hàm mũ của bài toán khó.
