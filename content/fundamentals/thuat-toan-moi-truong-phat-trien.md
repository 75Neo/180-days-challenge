---
title: "Thuật toán và môi trường phát triển"
description: "Định nghĩa thuật toán, các pha phát triển và triển khai, yêu cầu chức năng và phi chức năng, môi trường học tập và môi trường vận hành."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 45
tags: [thuat-toan, moi-truong, ly-thuyet, fundamentals]
---

## 1. Tổng quan

Trước khi học thuật toán cụ thể, cần thống nhất ba điều. Thuật toán là gì, nó đi từ ý tưởng tới sản phẩm qua chặng nào.

Môi trường thử nghiệm nào phù hợp để học và nghiên cứu. Bài này trình bày toàn bộ khung cảnh đó ở mức lý thuyết.

Làm bệ đỡ cho mọi bài học thuật toán phía sau. Không đi vào thuật toán coding cụ thể nào.

## 2. Thuật toán là gì

Định nghĩa gọn nhất: thuật toán là tập quy tắc thực hiện phép tính để giải một bài toán. Nó cho ra kết quả với mọi đầu vào hợp lệ theo chỉ dẫn định nghĩa chính xác.

Từ điển American Heritage định nghĩa: tập hữu hạn chỉ dẫn không mơ hồ, với điều kiện ban đầu cho trước, thực hiện theo trình tự quy định để đạt mục tiêu, và có điều kiện kết thúc nhận biết được.

Ba tính từ đáng suy ngẫm. Hữu hạn nghĩa là thuật toán phải dừng, không phải quá trình vô tận.

Không mơ hồ nghĩa là mỗi bước rõ tới mức ai làm cũng ra cùng kết quả. Có điều kiện kết thúc nhận biết được nghĩa là ta luôn biết khi nào xong việc.

Thiết kế thuật toán là tạo công thức toán hiệu quả nhất cho bài thực tế. Công thức đó có thể thành nền tảng tái dùng cho cả họ bài tương tự.

Giống như công thức nấu ăn từng bước rõ ràng. Bước mơ hồ thì không phải thuật toán.

## 3. Các pha: từ yêu cầu tới triển khai

Vòng đời thuật toán đi qua sơ đồ các pha. Mọi thứ bắt đầu từ hiểu yêu cầu trong phát biểu bài toán.

Tức làm rõ cần làm gì trước khi nghĩ làm như thế nào. Từ đó bước vào pha phát triển gồm hai chặng nhỏ.

Chặng thiết kế hình dung và ghi lại kiến trúc, logic và chi tiết cài đặt. Trong đầu luôn giữ cả chính xác và hiệu năng.

Khi có nhiều ứng viên, chặng thiết kế là quá trình lặp. So sánh ứng viên với mọi đánh đổi rồi mới lựa chọn.

Chặng viết mã chuyển thiết kế thành chương trình máy tính. Yêu cầu quan trọng là triển khai đầy đủ logic và kiến trúc đã đề ra.

Xong thiết kế và viết mã thì sẵn sàng triển khai. Thiết kế môi trường sản phẩm nơi mã sẽ chạy.

Rồi đưa thuật toán vào vận hành với dữ liệu thật để sinh đầu ra theo yêu cầu. Giống như tập lái ở sân rồi mới chạy thật ngoài đường.

## 4. Yêu cầu chức năng và phi chức năng

Bài toán thực tế có hai loại yêu cầu. Yêu cầu chức năng quy định tính năng mong đợi, tức mô tả hành vi.

Với một đầu vào nhất định thì đầu ra kỳ vọng là gì. Yêu cầu phi chức năng nói về hiệu năng, mở rộng, khả dụng và chính xác.

Đồng thời đặt kỳ vọng về bảo mật dữ liệu. Ví dụ món ăn là chức năng, giao trong 30 phút là phi chức năng.

Phi chức năng phải có số đo được. Không đo được thì không nghiệm thu được.

## 5. Môi trường phát triển và môi trường sản phẩm

Môi trường phát triển là nơi học, thử và cài đặt thuật toán. Môi trường sản phẩm là nơi thuật toán vận hành thực tế.

Môi trường sản phẩm thiết kế theo nhu cầu dữ liệu và xử lý. Thuật toán song song được cần cụm máy với số nút phù hợp.

Thuật toán nặng dữ liệu cần đường ống nạp, chiến lược đệm và lưu trữ. Chi tiết môi trường cho hệ lớn dành cho các bài sau.

Về phía phát triển, khóa học dùng hai ngôn ngữ, mỗi ngôn ngữ cho một việc:

| Nhóm bài | Ngôn ngữ | Lý do |
|---|---|---|
| Cấu trúc dữ liệu, thuật toán cổ điển | C hoặc C++17 | Thấy rõ bộ nhớ, con trỏ, chi phí từng thao tác |
| Design pattern | C++17 hoặc Java | Có lớp, kế thừa, giao diện rõ ràng |
| Dữ liệu, học máy, hệ thống lớn | Python 3 | Hệ sinh thái NumPy, pandas, PyTorch, Spark |

Mỗi ngày học ghi rõ ngôn ngữ ở đầu mục bài tập. Bạn được đổi sang ngôn ngữ khác nếu viết lại API tương đương.

Thực hành bắt buộc: môi trường phải dựng lại được bằng một lệnh. Với Python là tệp `requirements.txt` ghim phiên bản thư viện. Với C/C++ là `CMakeLists.txt` hoặc `Makefile` ghi rõ cờ biên dịch.

Không lẫn số đo của môi trường phát triển với môi trường sản phẩm.

## 6. Bộ công cụ

### C và C++

| Công cụ | Vai trò |
|---|---|
| `gcc` hoặc `clang` | Biên dịch. Bật `-Wall -Wextra` để thấy cảnh báo |
| `-fsanitize=address,undefined` | Bắt lỗi tràn mảng, dùng sau khi giải phóng, hành vi không xác định |
| `valgrind --leak-check=full` | Bắt rò bộ nhớ |
| `gdb` hoặc `lldb` | Chạy từng bước, xem biến |
| `-O2` và `perf` | Build để đo hiệu năng và tìm điểm nóng |

```bash
g++ -std=c++17 -Wall -Wextra -g -fsanitize=address,undefined main.cpp -o main && ./main
```

### Python và hệ sinh thái SciPy

Hệ sinh thái SciPy là nhóm gói Python cho cộng đồng khoa học. Nó chứa bộ sinh số ngẫu nhiên, thủ tục đại số tuyến tính và bộ tối ưu. Vì là lớp bọc mỏng quanh mã tối ưu viết bằng C, C++ và Fortran, SciPy vừa tiện vừa nhanh.

| Thành viên | Vai trò |
|---|---|
| NumPy | Mảng và ma trận đa chiều |
| scikit-learn | Phân loại, hồi quy, phân cụm, kiểm định mô hình |
| pandas | Nhập, xuất và xử lý dữ liệu dạng bảng |
| Matplotlib | Trực quan hóa dữ liệu |

Jupyter và Colab cho phép chạy thử từng đoạn, xem kết quả ngay và ghi chú xen kẽ. Rất hợp để khám phá dữ liệu. Code nộp bài vẫn nên là tệp `.py` có test, không chỉ là notebook.

## 7. So sánh và đánh đổi

Đánh đổi đầu tiên nằm giữa thiết kế và viết mã. Đầu tư nhiều vào thiết kế tốn giờ ban đầu.

Nhưng rẻ hơn nhiều so với viết mã rồi mới phát hiện thiết kế sai. Đánh đổi thứ hai nằm giữa chức năng và phi chức năng.

Thuật toán đúng mà chậm hoặc nhanh mà sai đều không đạt. Hai nhóm yêu cầu phải cân cùng lúc.

Đánh đổi thứ ba nằm giữa phát triển tiện lợi và sản phẩm hiệu quả. Python và Jupyter tuyệt vời để thử nhanh, C++ cho quyền kiểm soát bộ nhớ và tốc độ.

Nhưng thuật toán cần mã biên dịch tối ưu mức thấp có thể phải chuyển ngôn ngữ khi lên sản phẩm. Giống như xe tập lái và xe đua dùng việc khác nhau.

## 8. Cạm bẫy tư duy

Thứ nhất: nhảy vào viết mã khi phát biểu bài toán còn mơ hồ. Tức bỏ qua bước hiểu yêu cầu.

Thứ hai: lẫn cần làm gì với làm như thế nào. Tức đưa giải pháp vào trong đặc tả yêu cầu.

Thứ ba: coi môi trường phát triển mặc định là môi trường sản phẩm. Thuật toán chạy tốt trên máy cá nhân nhưng sụp đổ với dữ liệu thật.

Thứ tư: không ghim phiên bản thư viện. Kết quả hôm nay không tái tạo được ngày mai vì môi trường đã trôi.

## 9. Ứng dụng của tư duy này

Khung pha phát triển dùng cho mọi dự án thuật toán. Viết đặc tả yêu cầu trước, thiết kế và so ứng viên trên giấy.

Rồi mới viết mã và thiết kế môi trường triển khai. Phân biệt chức năng và phi chức năng giúp nhóm và khách hàng cùng ngôn ngữ nghiệm thu.

Thực hành tệp yêu cầu và môi trường tái tạo được giúp mọi thử nghiệm đáng tin. Mọi kết quả trong khóa học đều kiểm chứng lại được.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Ba tính chất của một thuật toán theo định nghĩa trong bài?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Hữu hạn (phải dừng), không mơ hồ (mỗi bước rõ ràng), có điều kiện kết thúc nhận biết được.
::

**Câu 2.** "Tìm kiếm trả kết quả trong 200 ms với 1 triệu bản ghi" là yêu cầu gì?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Yêu cầu phi chức năng: nó đặt ngưỡng hiệu năng đo được.
::

**Câu 3.** Vì sao phải ghim phiên bản thư viện?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Để người khác và chính bạn sau này dựng lại đúng môi trường, và kết quả đo có thể tái lập.
::

**Câu 4.** Lệnh biên dịch C++ nào bắt lỗi tràn mảng lúc chạy?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
`g++ -g -fsanitize=address,undefined main.cpp`.
::

**Câu 5.** Vì sao không nên đo hiệu năng với bản build có sanitizer?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Sanitizer thêm kiểm tra vào mỗi lần truy cập bộ nhớ, làm chương trình chậm đi nhiều lần. Đo hiệu năng phải dùng bản `-O2` không sanitizer.
::

## Tóm tắt

- Thuật toán là tập hữu hạn chỉ dẫn không mơ hồ, có điều kiện kết thúc nhận biết được.
- Vòng đời đi từ hiểu yêu cầu qua thiết kế và viết mã tới triển khai sản phẩm.
- Yêu cầu chức năng mô tả hành vi, phi chức năng đặt ngưỡng đo được về hiệu năng và bảo mật.
- Môi trường phát triển và sản phẩm phải thiết kế khác nhau, không lẫn số đo.
- Khóa học dùng C/C++ cho cấu trúc dữ liệu và thuật toán, Python cho dữ liệu và học máy; môi trường phải dựng lại được bằng một lệnh.
