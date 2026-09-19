---
title: "Độ phức tạp thời gian và không gian"
description: "Hai trục phân tích độ phức tạp, ba kịch bản best-worst-average, ba kiểu vòng lặp hội tụ-phân kỳ-phẳng và nguyên tắc ước lượng chi phí."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [time-complexity, space-complexity, fundamentals]
---

## 1. Tổng quan

Mọi thuật toán đều tiêu hai tài nguyên hữu hạn: giờ chạy và bộ nhớ. Bài này trình bày hai trục phân tích thời gian và không gian.

Kèm ba kịch bản tốt nhất, tệ nhất và trung bình. Thêm ba kiểu vòng lặp hội tụ, phân kỳ và phẳng.

Cùng nguyên tắc ước lượng và tiết kiệm chi phí đúc kết từ đó. Nắm khung này rồi mới đọc mọi phân tích cụ thể.

## 2. Hai trục phân tích: thời gian và không gian

Phân tích thời gian ước lượng thuật toán mất bao lâu dựa trên cấu trúc của nó. Điểm đáng chú ý là nó không phụ thuộc phần cứng, ngăn xếp chạy hay ngôn ngữ.

Mục tiêu trả lời hai câu hỏi lớn. Thuật toán có mở rộng được không, và nó xử lý tập lớn hơn ra sao.

Phân tích không gian ước lượng bộ nhớ cần để thực thi. Gồm nhớ cho đầu vào, cấu trúc tạm sinh lúc chạy và bản thân quá trình thực thi.

Phân tích không gian ngày càng quan trọng trong thời đại phân tán. Nếu không tính kỹ từ khâu thiết kế, nhớ thiếu cho cấu trúc tạm sẽ gây tràn đĩa.

Hiệu năng khi đó sụt nghiêm trọng. Hai cách tiếp cận phân tích được đối chiếu.

Đo sau khi cài đặt: triển khai ứng viên rồi so hiệu năng thực tế. Lý thuyết trước khi cài đặt: xấp xỉ bằng toán mà không tốn công cài đặt.

Giống như nấu nhanh cần nhiều bếp cùng lúc. Muốn nhanh thường phải trả bằng nhớ.

## 3. Ba kịch bản hiệu năng: tốt nhất, tệ nhất, trung bình

Hiệu năng thường phụ thuộc hình dạng đầu vào. Nên bài này trình bày ba kịch bản.

Kịch bản tốt nhất xét đầu vào có lợi nhất cho thuật toán. Nó cho biết thời gian chạy **ít nhất** có thể, tức mức tốt nhất có thể hy vọng.

Nhưng hiếm khi phản ánh dùng thực tế. Kịch bản tệ nhất tìm giờ tối đa thuật toán có thể tốn trong điều kiện cho trước.

Giá trị của nó là đảm bảo. Bất kể điều kiện ra sao, thực tế luôn tốt hơn con số này.

Kịch bản trung bình là kỳ vọng thời gian chạy khi đầu vào tuân theo một phân phối, thường giả định mọi đầu vào cùng khả năng. Cách làm thủ công: chia đầu vào khả dĩ thành nhiều nhóm, tính chi phí mỗi nhóm rồi lấy trung bình có trọng số.

Ví dụ tìm tuyến tính trong mảng $n$ phần tử: tốt nhất 1 phép so sánh (phần tử ở đầu), tệ nhất $n$ (không có), trung bình khoảng $n/2$ nếu phần tử có mặt ở vị trí ngẫu nhiên.

Hạn chế là không phải lúc nào cũng chính xác. Vì cần xét mọi tổ hợp và khả năng đầu vào, điều không phải lúc nào cũng dễ.

Thực tế người thiết kế dựa vào tệ nhất để quyết định an toàn. Dùng trung bình để dự báo thực tế, xem tốt nhất như mốc lạc quan.

Giống như đường vắng đi nhanh, giờ cao điểm kẹt cứng. Kế hoạch chắc chắn phải tính giờ kẹt.

## 4. Ba kiểu vòng lặp và ý nghĩa với bộ nhớ

Thuật toán phức tạp thường mang tính lặp. Thay vì nạp hết vào nhớ một lúc, chúng điền dần cấu trúc qua từng vòng.

Ba kiểu vòng lặp ảnh hưởng khác nhau tới không gian. Vòng hội tụ xử lý ít dần mỗi vòng, thách thức nằm ở vòng đầu nặng nhất.

Hạ tầng co giãn hợp kiểu này vì cấp nhiều lúc đầu rồi thu hẹp dần. Vòng phân kỳ xử lý nhiều dần mỗi vòng.

Vì không gian tăng theo giờ, cần đặt ràng buộc để hệ thống không mất ổn định. Bằng cách giới hạn số vòng hoặc kích thước dữ liệu ban đầu.

Vòng phẳng xử lý đều mỗi vòng. Vì không gian không đổi nên không cần tính co giãn hạ tầng.

Để ước lượng không gian, tập trung vào vòng phức tạp nhất. Nhiều thuật toán càng gần nghiệm càng nhẹ, nên vòng đầu cho ước lượng tốt nhất.

Khi đã chọn vòng đó, ước lượng tổng nhớ cho cấu trúc tạm, thực thi và đầu vào. Giống như chia đôi tờ giấy: mỗi lần một nửa, nhanh mỏng dần.

### Đếm bộ nhớ phụ

Độ phức tạp không gian thường chỉ tính **bộ nhớ phụ**: phần cấp thêm ngoài đầu vào. Ba ví dụ:

```cpp
int sum(const std::vector<int> &a) {          // bộ nhớ phụ O(1): chỉ 1 biến
  int s = 0;
  for (int x : a) s += x;
  return s;
}
std::vector<int> reversedCopy(const std::vector<int> &a) {   // O(n): tạo mảng mới
  return std::vector<int>(a.rbegin(), a.rend());
}
int sumRec(const std::vector<int> &a, size_t i) {           // O(n): n khung stack
  return i == a.size() ? 0 : a[i] + sumRec(a, i + 1);
}
```

Hàm thứ ba cho thấy đệ quy cũng tốn bộ nhớ: mỗi lời gọi chưa trả về giữ một khung trên stack.

## 5. Nguyên tắc tiết kiệm không gian và tư duy mở rộng

Ba chỉ dẫn giảm độ phức tạp không gian. Một là thiết kế dạng lặp thay vì nạp tất cả vào nhớ cùng lúc.

Hai là khi phải chọn, ưu tiên vòng nhiều và mịn hơn vòng ít và thô. Ba là chỉ giữ trong nhớ thứ cần cho xử lý hiện tại.

Thứ không cần thì đẩy ra ngoài. Tái dùng mảng cũ cũng tiết kiệm nhớ đáng kể.

Hai câu hỏi mở rộng mà phân tích thời gian phải trả lời. Thuật toán có tận dụng hạ tầng co giãn hiện đại không.

Tức có dùng thêm CPU, nhân xử lý, GPU và nhớ khi được cấp không. Thuật toán xử lý tập lớn hơn ra sao.

Vì hiệu năng ngày càng quan trọng trong thế giới dữ liệu lớn. Lúc phát triển nhiều thuật toán chỉ thử trên mẫu nhỏ, lên dữ liệu lớn mới lộ vấn đề.

## 6. So sánh và đánh đổi

Hai trục giờ và nhớ thường giằng co nhau. Dùng thêm nhớ lưu kết quả trung gian có thể rút ngắn giờ.

Tiết kiệm nhớ bằng tính lại nhiều lần sẽ kéo dài giờ. Phân tích cả hai trục giúp thấy điểm cân bằng thay vì tối ưu mù một trục.

Đánh đổi thứ hai nằm giữa tệ nhất và trung bình. Thiết kế theo tệ nhất cho đảm bảo chắc nhưng có thể quá thận trọng và tốn kém.

Thiết kế theo trung bình cho thực tế tốt hơn nhưng rủi ro khi gặp đầu vào thù địch. Đánh đổi thứ ba nằm ở vòng lặp mịn.

Vòng mịn tiết kiệm nhớ nhưng chi phí điều phối tăng khi số vòng quá nhiều. Giống như chia việc quá vụn thì tốn công giao nhận.

## 7. Cạm bẫy tư duy

Thứ nhất: đo trên đầu vào thuận lợi rồi tưởng đó là thực tế. Ví dụ benchmark trên dữ liệu đã sắp xếp.

Thứ hai: chỉ phân tích giờ mà quên nhớ. Tới lúc triển khai mới phát hiện tràn nhớ và tràn đĩa.

Thứ ba: lẫn hai trục, cho rằng nhanh thì mặc nhiên ít tốn nhớ. Thực ra nhiều thuật toán nhanh chính nhờ dùng nhiều nhớ tạm.

Thứ tư: áp kết quả mẫu nhỏ cho dữ liệu lớn mà không xét lại mở rộng. Đúng điều bài này cảnh báo từ đầu.

## 8. Ứng dụng của tư duy này

Tư duy hai trục dùng ngay từ đặc tả yêu cầu phi chức năng. Ngưỡng giờ phản hồi và ngưỡng nhớ khả dụng sẽ loại nhiều thiết kế không hợp.

Trước khi tốn công cài đặt. Nó cũng định hướng chọn hạ tầng triển khai theo kiểu vòng lặp của thuật toán.

Hội tụ thì thuê co giãn, phẳng thì thuê cố định. Phân kỳ thì đặt giới hạn ngay từ đầu.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Tìm tuyến tính trong mảng $n$ phần tử: tốt nhất, tệ nhất, trung bình bao nhiêu phép so sánh?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Tốt nhất 1, tệ nhất $n$, trung bình khoảng $n/2$ khi phần tử có mặt ở vị trí ngẫu nhiên.
::

**Câu 2.** Hàm đảo mảng tại chỗ bằng 2 con trỏ tốn bao nhiêu bộ nhớ phụ?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
$O(1)$: chỉ vài biến chỉ số và 1 biến tạm để đổi chỗ.
::

**Câu 3.** Merge sort tốn bao nhiêu bộ nhớ phụ?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
$O(n)$ cho mảng tạm khi trộn, cộng $O(\log n)$ cho stack đệ quy.
::

**Câu 4.** Vì sao thiết kế theo trường hợp tệ nhất lại an toàn?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Vì nó là đảm bảo: mọi đầu vào đều không chậm hơn con số đó, kể cả đầu vào xấu cố tình.
::

**Câu 5.** Cho 1 ví dụ đánh đổi dùng thêm bộ nhớ để giảm thời gian.

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Ghi nhớ kết quả (memo) cho Fibonacci: thêm $O(n)$ bộ nhớ, giảm thời gian từ $O(2^n)$ xuống $O(n)$. Hoặc bảng băm để tra $O(1)$.
::

## Tóm tắt

- Giờ đo tốc độ tăng của bước chạy, độc lập phần cứng; nhớ đo bộ nhớ cho đầu vào, cấu trúc tạm và thực thi.
- Ba kịch bản tốt nhất, tệ nhất, trung bình cho ba góc nhìn bổ sung nhau.
- Ba kiểu vòng lặp hội tụ, phân kỳ, phẳng quyết định chiến lược cấp nhớ và hạ tầng.
- Tiết kiệm nhớ bằng lặp mịn, chỉ giữ thứ đang cần, tái dùng mảng cũ.
- Nhanh thường đổi bằng nhớ; thiết kế theo tệ nhất để an toàn, theo trung bình để dự báo.
