---
title: "P, NP và độ khó bài toán"
description: "Thuật toán đa thức, chứng chỉ, quan hệ P là tập con của NP, NP-complete, NP-hard và chiến lược ứng phó với bài toán khó."
lastUpdate: 2026-09-17
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [p-np, np-complete, np-hard, do-kho, fundamentals]
---

# P, NP và độ khó bài toán

## 1. Tổng quan

Không phải bài toán nào cũng khó như nhau, và hiểu bài toán của mình khó tới mức nào là tiền đề để chọn chiến lược đúng: bài toán dễ thì tìm lời giải tối ưu, bài toán khó thì chấp nhận lời giải khả thi. Cộng đồng nghiên cứu đã phân loại bài toán theo độ khó tính toán thành các lớp P, NP, NP-complete và NP-hard, với câu hỏi P có bằng NP không là một trong những vấn đề mở vĩ đại nhất của khoa học máy tính, được treo giải một triệu đô la. Bài này trình bày định nghĩa từng lớp, quan hệ giữa chúng, các ví dụ điển hình và chiến lược ứng phó thực tế khi đối mặt với bài toán khó.

## 2. Thuật toán đa thức và khái niệm chứng chỉ

Bài này bắt đầu bằng hai định nghĩa nền. Thuật toán đa thức là thuật toán có độ phức tạp thời gian O(n lũy thừa k) với k là hằng số. Vì hàm đa thức tăng chậm hơn hàm mũ rất nhiều khi n lớn, nên lời giải đa thức được coi là lời giải hiệu quả, khả thi trong thực tế.

Chứng chỉ là nghiệm ứng viên sinh ra cuối mỗi vòng lặp giải bài toán. Qua các vòng lặp, mỗi chứng chỉ mới tốt hơn chứng chỉ trước nếu quá trình hội tụ, và khi chứng chỉ đáp ứng yêu cầu thì được chọn làm nghiệm cuối cùng. Từ đó bài này phân biệt hai khoảng thời gian: thời gian sinh nghiệm ứng viên là thời gian thuật toán tốn để tạo ra chứng chỉ, và thời gian kiểm tra nghiệm ứng viên là thời gian tốn để xác minh chứng chỉ đó. Có những bài toán mà tìm nghiệm cực khó nhưng kiểm tra nghiệm lại cực dễ, và sự phân biệt này là chìa khóa của toàn bộ lý thuyết.

Trước khi thiết kế lời giải, bài này khuyên nên mô tả bài toán trước, và có ba loại bài toán theo độ khó: loại đảm bảo tồn tại thuật toán đa thức để giải, loại đã chứng minh được không thể giải bằng thuật toán đa thức, và loại chưa tìm được thuật toán đa thức nhưng cũng chưa chứng minh được là không tồn tại. Phần lớn các bài toán thực tế thú vị rơi vào loại thứ ba, và các lớp P, NP ra đời để nói chính xác về chúng.

## 3. Lớp NP và lớp P

Lớp NP, viết tắt của đa thức không đơn định, gồm các bài toán mà máy tính không đơn định giải được trong thời gian đa thức. Diễn đạt trực quan hơn: với mỗi bước, ta được phép đoán hợp lý mà không tốn công tìm nghiệm tối ưu, và nghiệm tìm được kiểm tra được trong thời gian đa thức. Định nghĩa hình thức trong bài này gọi là điều kiện A: đảm bảo tồn tại thuật toán đa thức để xác minh chứng chỉ ứng viên là tối ưu.

Lớp P gồm các bài toán mà máy tính đơn định giải được trong thời gian đa thức, tức tồn tại thuật toán với thời gian chạy O(n lũy thừa k) với một số mũ k nào đó. Lớp P là tập con của NP: ngoài điều kiện A về kiểm tra nghiệm, bài toán lớp P còn phải thỏa điều kiện B là đảm bảo tồn tại ít nhất một thuật toán đa thức để giải. Vì NP chỉ đòi một trong hai điều kiện mà P đòi cả hai, nên P là tập con của NP; điều ngược lại có đúng không thì chưa ai biết, và đây là vấn đề mở treo giải một triệu đô la.

## 4. NP-complete và NP-hard

Hai lớp tiếp theo mô tả những bài toán khó nhất. Lớp NP-complete chứa các bài toán khó nhất trong số các bài toán NP, thỏa hai điều kiện: chưa biết thuật toán đa thức nào để sinh chứng chỉ, nhưng đã biết thuật toán đa thức để xác minh chứng chỉ được đề xuất là tối ưu. Lớp NP-hard chứa các bài toán khó ít nhất bằng mọi bài toán trong NP, nhưng bản thân chúng không nhất thiết phải thuộc NP.

Sơ đồ quan hệ trong bài này vẽ lớp P nằm trong NP, NP-complete là vùng lõi khó nhất nằm trong NP, còn NP-hard là vùng bao quanh chứa NP-complete và tràn ra ngoài NP. Bài này lưu ý sơ đồ này dựa trên giả định rất có thể đúng là P khác NP; nếu P bằng NP thì toàn bộ sơ đồ sụp đổ thành một.

Bài này đối chiếu các lớp qua ví dụ cụ thể. Lớp P gồm tra cứu bảng băm, thuật toán đường ngắn nhất như Dijkstra, tìm kiếm tuyến tính và tìm kiếm nhị phân. Lớp NP-hard gồm thuật toán mã hóa RSA và phân cụm tối ưu bằng K-means. Lớp NP-complete là các bài toán vừa NP-hard vừa NP, ví dụ tính nghiệm tối ưu cho người bán hàng rong và bài toán ba lô. Tính chất đáng sợ nhất: tìm ra lời giải cho một bài toán NP-hard hay NP-complete sẽ kéo theo lời giải cho mọi bài toán cùng họ.

## 5. Vì sao bài toán khó buộc phải xấp xỉ

Bài này gắn lý thuyết độ khó với thực hành thiết kế qua mối quan tâm thứ hai: liệu có nên nhắm tới nghiệm tối ưu ngay từ đầu không. Nếu việc tìm và xác minh nghiệm tối ưu tốn công sức khổng lồ thì một lời giải khả thi trong thực tế có thể là lựa chọn tốt nhất, và các lời giải khả thi dựa trên kinh nghiệm đó gọi là heuristic.

Điện toán đám mây với tính co giãn mang lại lựa chọn mới: khi dữ liệu tăng, ta cấp thêm CPU hay máy ảo để giữ thời gian trong giới hạn. Nhưng tính co giãn không cứu được hình dạng tăng trưởng hàm mũ của bài toán NP-hard; nó chỉ trì hoãn điểm sụp đổ chứ không xóa bỏ nó.

## 6. So sánh và đánh đổi

Bốn lớp bài toán cho bốn chiến lược khác nhau. Bài toán lớp P thì đầu tư tìm lời giải tối ưu vì công sức bỏ ra được đền đáp. Bài toán NP-complete hay NP-hard thì chấp nhận heuristic và thuật toán xấp xỉ, đặt ngưỡng sai số từ đầu và kiểm chứng sai số thay vì đòi nghiệm tối ưu.

Đánh đổi cốt lõi là giữa tính tối ưu và tính khả thi: càng khăng khăng nghiệm tối ưu cho bài toán khó, chi phí càng phình theo hàm mũ. Đánh đổi thứ hai là giữa thời gian phân loại bài toán và thời gian giải: một ngày phân tích độ khó có thể tiết kiệm hàng tháng cài đặt lời giải không tưởng.

## 7. Cạm bẫy tư duy

Cạm bẫy đầu tiên là lẫn lộn khó kiểm tra với khó giải: nhiều người thấy nghiệm dễ kiểm tra thì tưởng bài toán dễ giải, trong khi đó chính là đặc trưng của lớp NP. Cạm bẫy thứ hai là không phân loại độ khó mà lao ngay vào tìm nghiệm tối ưu cho bài toán NP-hard, để rồi kẹt trong vòng lặp tối ưu vô vọng. Cạm bẫy thứ ba là hiểu sai quan hệ tập con: mọi P đều là NP nhưng điều ngược lại chưa được chứng minh, nên không thể mặc định bài toán NP nào cũng có lời giải đa thức. Cạm bẫy thứ tư là tin rằng thêm phần cứng sẽ giải được bài toán NP-hard quy mô lớn, trong khi tăng trưởng hàm mũ nuốt chửng mọi nâng cấp phần cứng tuyến tính.

## 8. Ứng dụng của tư duy này

Tư duy độ khó được dùng ngay khi nhận bài toán mới: thử xem nó có thuộc lớp P với lời giải đa thức đã biết không, có quy được về ba lô hay người bán hàng rong không, và từ đó quyết định theo đuổi tối ưu hay chấp nhận heuristic.

## 9. Tóm tắt + Sau bài này bạn hiểu được gì

Thuật toán đa thức là chuẩn mực của lời giải khả thi, và khái niệm chứng chỉ cùng hai khoảng thời gian sinh và kiểm tra nghiệm là nền tảng phân loại độ khó. Lớp P đòi cả giải được và kiểm tra được trong thời gian đa thức; lớp NP chỉ đòi kiểm tra được; NP-complete là lõi khó nhất trong NP; NP-hard là mọi thứ khó ít nhất bằng NP. Quan hệ chắc chắn duy nhất hiện nay là P là tập con của NP, còn P có bằng NP không vẫn là câu hỏi triệu đô. Với bài toán khó, chiến lược đúng là heuristic và xấp xỉ có ngưỡng sai số, kết hợp hạ tầng co giãn ở mức độ vừa phải.

Sau bài này bạn hiểu được:

- Định nghĩa thuật toán đa thức, chứng chỉ, thời gian sinh nghiệm và thời gian kiểm tra nghiệm.
- Điều kiện A và B phân biệt lớp NP với lớp P, cùng quan hệ tập con giữa chúng.
- Định nghĩa NP-complete và NP-hard cùng sơ đồ quan hệ bốn lớp dựa trên giả định P khác NP.
- Các ví dụ điển hình của mỗi lớp từ Dijkstra tới RSA, K-means tối ưu, ba lô và người bán hàng rong.
- Vì sao bài toán khó buộc phải dùng heuristic và cách đặt chiến lược ứng phó phù hợp.

Tự kiểm: vì sao mọi bài toán P đều là NP nhưng điều ngược lại chưa chắc đúng? Vì sao tìm ra lời giải cho một bài toán NP-complete kéo theo lời giải cho cả họ? Vì sao thêm phần cứng không giải quyết được bản chất của bài toán NP-hard?
