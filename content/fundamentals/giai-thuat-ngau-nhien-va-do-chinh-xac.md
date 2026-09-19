---
title: "Giải thuật ngẫu nhiên và độ chính xác"
description: "Bài toán quyết định, Las Vegas và Monte Carlo, ba độ đo accuracy-precision-recall và quan hệ đánh đổi giữa chúng."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [ngau-nhien, las-vegas, monte-carlo, do-do, fundamentals]
---

## 1. Tổng quan

Nhiều người mặc định thuật toán là dãy bước tất định. Cùng đầu vào luôn cho cùng đầu ra.

Thực ra đó chỉ là một lớp con. Bài này dựng khung đầy đủ: bài toán quyết định, hai họ Las Vegas và Monte Carlo, cùng ba độ đo chất lượng.

## 2. Bài toán quyết định và bài toán phân loại nhị phân

Bài toán quyết định chỉ trả lời đúng hoặc sai. Thuật toán phân loại nhị phân gán mỗi dữ liệu một trong hai nhãn.

Hai nhãn có thể là bất kỳ thứ gì. Về khái niệm, chúng tương đương nhãn đúng và sai.

Chỉ xét phân loại nhị phân mà không hề hạn chế. Bộ phân loại đa lớp ghép được từ nhiều bộ nhị phân.

Một kết quả nền tảng: mọi bài toán tối ưu diễn đạt được thành bài toán quyết định, và ngược lại. Ví dụ thay vì tìm đường ngắn nhất, ta đặt ngưỡng $T$.

Rồi hỏi có đường đi nào dài không quá $T$ không. Giải bài quyết định này với nhiều $T$ sẽ ra nghiệm tối ưu gốc.

## 3. Họ Las Vegas: đúng nhưng tốn tài nguyên bất định

Họ Las Vegas thỏa hai tính chất. Một là luôn cho nghiệm đúng hoặc báo thất bại.

Hai là chạy với tài nguyên hữu hạn nhưng không đoán trước được. Lượng tài nguyên không dự đoán được từ đầu vào.

Ví dụ nổi bật là sắp xếp nhanh ngẫu nhiên. Chốt chọn ngẫu nhiên mỗi bước nên nó luôn sắp xếp đúng.

Nhưng thời gian dao động giữa $O(n \log n)$ và $O(n^2)$. Tùy các lựa chọn ngẫu nhiên gặp hên hay xui.

Nói cách khác, họ này đổi tính đoán trước lấy đảm bảo đúng. Bạn chắc chắn nhận đáp án đúng, nhưng không biết chờ bao lâu.

Giống như tìm chìa khóa khắp nhà: chắc chắn thấy, nhưng không biết mất bao lâu.

## 4. Họ Monte Carlo: tốn tài nguyên xác định nhưng có thể sai

Ngược với Las Vegas, họ Monte Carlo đôi khi cho đáp án sai. Xác suất sai thường đổi chác với tài nguyên đầu tư.

Giải thuật thực tế giữ xác suất này ở mức nhỏ. Trong khi chỉ dùng tính toán và bộ nhớ hợp lý.

Có tranh luận liệu họ này có xứng gọi là thuật toán không. Khóa học coi chúng là thuật toán, vì dãy bước vẫn hữu hạn và định nghĩa rõ, chỉ đầu vào có thêm số ngẫu nhiên.

Với bài quyết định đáp án đúng hoặc sai, có ba tình huống. Thiên lệch sai: khi trả về sai thì luôn đúng.

Thiên lệch đúng: khi trả về đúng thì luôn đúng. Còn lại là có thể sai cả hai phía.

Họ Monte Carlo tốn tài nguyên đơn định. Nó là đối ngẫu của Las Vegas.

Hai họ chuyển đổi được cho nhau. Giả sử A là thuật toán Las Vegas: luôn đúng nhưng thời gian bất định. Ta chạy A tối đa T bước; hết T bước mà chưa xong thì trả một đáp án đoán.

Thuật toán mới luôn xong trong T bước nhưng có thể sai, tức là một thuật toán Monte Carlo. Ta đổi đảm bảo đúng lấy đảm bảo thời gian. Giống như đoán nhanh khi sắp hết giờ thi.

## 5. Độ đo accuracy và hạn chế của nó

Với cấu trúc như bộ lọc Bloom (có thể trả lời sai), thời gian và bộ nhớ chưa đủ để đánh giá. Với Monte Carlo còn phải hỏi: nó làm việc tốt tới mức nào.

Muốn trả lời cần độ đo. Đó là hàm đo khoảng cách giữa nghiệm xấp xỉ và nghiệm tối ưu.

Với phân loại, chất lượng là mức gán đúng lớp mỗi đầu vào. Độ đo đầu tiên là accuracy: tỉ lệ dự đoán đúng trên tổng số.

Bài này định nghĩa qua bốn khái niệm. Dương tính thật là điểm vừa đoán đúng vừa thực sự đúng.

Tương tự với lớp sai cho ra âm tính thật. Accuracy bằng tổng hai loại thật chia cho tổng số điểm.

Khi accuracy bằng 1 thì giải thuật luôn đúng. Hạn chế lộ ra trong ví dụ 99 phần trăm điểm thuộc lớp đúng.

Bộ phân loại luôn trả nhãn đúng cho mọi điểm có accuracy cao nhất. Dù nó trượt toàn bộ điểm lớp sai.

Bài học: trên dữ liệu lệch, accuracy cao có thể che giấu mô hình kém. Giống như đoán mọi email đều không phải rác, vẫn đúng 99 phần trăm.

## 6. Precision, recall và đường cong đánh đổi

Để vượt hạn chế của accuracy, cần theo dõi từng lớp riêng. Hai độ đo mới là precision và recall.

Precision là tỉ lệ dương tính thật trên tổng số điểm được đoán là đúng. Nó trả lời: trong số ta khẳng định đúng, bao nhiêu là đúng thật.

Recall là tỉ lệ dương tính thật trên tổng số điểm thực sự đúng. Nó trả lời: trong số đúng thật, ta bắt được bao nhiêu.

Diễn đạt qua dương tính giả và âm tính giả cho gọn. Accuracy chỉ đo ta đoán tốt ra sao.

Còn precision và recall cân thành công với sai lầm từng phía. Hai độ đo này giằng co nhau.

Cải thiện recall thường làm precision giảm đôi chút, và ngược lại. Ví dụ bộ lọc Bloom: khi nó trả lời "không có" thì chắc chắn đúng.

Nên recall của nó luôn bằng 100 phần trăm. Nó không bao giờ có âm tính giả.

Với giải thuật thiên lệch một phía, muốn tăng precision chỉ còn cách đầu tư thêm tài nguyên (với Bloom là thêm bit hoặc chỉnh số hàm băm).

Khi cần một con số duy nhất, dùng F1, trung bình điều hòa của hai độ đo:

$$F_1 = \frac{2 \cdot precision \cdot recall}{precision + recall}$$

Ví dụ precision 0.9, recall 0.5 cho $F_1 \approx 0.64$: F1 bị kéo về phía độ đo thấp hơn. Giống như lưới bắt cá: mắt dày bắt hết cá nhưng tốn công gỡ rác.

## 7. So sánh và đánh đổi

Las Vegas và Monte Carlo là hai cực của một đánh đổi. Cực một đảm bảo đúng nhưng chi phí bất định.

Cực hai đảm bảo chi phí nhưng đáp án có thể sai. Kỹ thuật dừng sớm biến Las Vegas thành Monte Carlo.

Đó chính là di chuyển trên trục đánh đổi cho hợp ngân sách. Trong họ Monte Carlo còn một đánh đổi thứ hai.

Siết tiêu chuẩn để tăng precision sẽ làm tuột vài ca đúng thật. Khi đó recall giảm xuống.

Với giải thuật thiên lệch một phía như Bloom, đánh đổi này mất một chiều. Chỉ còn đánh đổi giữa precision và tài nguyên.

## 8. Cạm bẫy tư duy

Thứ nhất: mặc định mọi thuật toán đều tất định. Rồi ngạc nhiên khi cùng đầu vào cho đầu ra khác nhau.

Thứ hai: tôn thờ accuracy trên dữ liệu lệch. Tưởng mô hình đoán lớp đa số là mô hình tốt.

Thứ ba: tin rằng tối ưu precision và recall cùng lúc vô hạn. Thực ra chúng giằng co nhau theo bản chất.

Thứ tư: lẫn hai họ với nhau. Đòi Monte Carlo luôn đúng, hoặc đòi Las Vegas xong trong giờ cố định.

## 9. Ứng dụng của tư duy này

Khung hai họ giúp đọc hiểu cấu trúc ngẫu nhiên trong khóa học. Ba độ đo là ngôn ngữ chuẩn đọc báo cáo học máy.

Khi nhận mô hình mới, hãy hỏi accuracy, precision, recall ngay. Rồi mới quyết định có dùng được không.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Quicksort chọn chốt ngẫu nhiên thuộc họ nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Las Vegas: luôn sắp đúng, thời gian dao động.
::

**Câu 2.** Bloom filter thuộc họ nào, thiên lệch phía nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Monte Carlo thiên lệch một phía: trả lời "không có" thì luôn đúng, "có" thì có thể sai.
::

**Câu 3.** 100 email, 5 rác. Mô hình đoán tất cả là thường. Accuracy và recall lớp rác?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Accuracy 95%, recall lớp rác 0%.
::

**Câu 4.** TP = 40, FP = 10, FN = 20. Tính precision, recall, F1.

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Precision $40/50 = 0.8$, recall $40/60 \approx 0.667$, $F_1 = 2 \cdot 0.8 \cdot 0.667 / 1.467 \approx 0.727$.
::

**Câu 5.** Biến thuật toán Las Vegas thành Monte Carlo bằng cách nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Giới hạn số bước chạy. Hết giới hạn mà chưa xong thì trả một đáp án đoán.
::

## Tóm tắt

- Bài toán quyết định nhị phân là khung chung để định nghĩa giải thuật ngẫu nhiên.
- Las Vegas luôn đúng nhưng tốn tài nguyên bất định; Monte Carlo đúng giờ nhưng đáp án có thể sai.
- Accuracy là tỉ lệ đoán đúng, dễ gây hiểu lầm trên dữ liệu lệch.
- Precision và recall đo từng phía, giằng co nhau trên đường cong đánh đổi.
- Giải thuật thiên lệch một phía như Bloom có recall 100 phần trăm, muốn tốt hơn chỉ còn cách thêm tài nguyên.
