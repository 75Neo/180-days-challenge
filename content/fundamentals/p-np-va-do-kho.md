---
title: "P, NP và độ khó bài toán"
description: "Thuật toán đa thức, chứng chỉ, quan hệ P là tập con của NP, NP-complete, NP-hard và chiến lược ứng phó với bài toán khó."
lastUpdate: 2026-09-19
difficulty: de
category: fundamentals
estimatedMinutes: 40
tags: [p-np, np-complete, np-hard, do-kho, fundamentals]
---

## 1. Tổng quan

Không phải bài toán nào cũng khó như nhau. Biết bài của mình khó cỡ nào giúp chọn chiến lược đúng.

Bài dễ thì tìm lời giải tối ưu. Bài khó thì chấp nhận lời giải khả thi.

Cộng đồng phân loại độ khó thành P, NP, NP-complete và NP-hard. Câu hỏi P có bằng NP không treo giải một triệu đô la.

## 2. Thuật toán đa thức, bài toán quyết định và chứng chỉ

Thuật toán đa thức có thời gian chạy $O(n^k)$ với $k$ là hằng số. Hàm đa thức tăng chậm hơn hàm mũ rất nhiều khi $n$ lớn, nên lời giải đa thức được coi là khả thi.

Lý thuyết độ khó làm việc với **bài toán quyết định**: câu trả lời chỉ là có hoặc không. Bài tối ưu được đổi thành bài quyết định bằng một ngưỡng.

- Bài tối ưu: tìm tour ngắn nhất qua mọi thành phố.
- Bài quyết định: có tour nào dài không quá $K$ không?

**Chứng chỉ** là bằng chứng cho câu trả lời "có". Với câu hỏi tour trên, chứng chỉ chính là một tour cụ thể. Ai cầm tour đó cũng kiểm tra được trong thời gian đa thức: đi qua đủ mọi thành phố chưa, tổng độ dài có không quá $K$ không.

Từ đó tách hai loại công việc:

| Việc | Ví dụ với tour | Độ khó |
|---|---|---|
| Tìm chứng chỉ | Tìm một tour dài không quá $K$ | Có thể rất khó |
| Kiểm tra chứng chỉ | Cho sẵn tour, cộng độ dài và so với $K$ | Dễ, $O(n)$ |

Giống như giải Sudoku thì khó, nhưng chấm một lời giải Sudoku thì nhanh. Phân biệt này là chìa khóa của toàn bộ lý thuyết.

## 3. Lớp P và lớp NP

**Lớp P** gồm bài toán quyết định giải được bằng thuật toán đa thức. Ví dụ: có đường đi từ A tới B không (BFS), mảng đã sắp xếp chưa, có đường đi ngắn hơn $K$ không (Dijkstra).

**Lớp NP** gồm bài toán quyết định mà mọi câu trả lời "có" đều có chứng chỉ **kiểm tra được** trong thời gian đa thức. NP viết tắt của nondeterministic polynomial: một máy "đoán" đúng chứng chỉ rồi kiểm tra nó trong đa thức.

Mọi bài trong P đều thuộc NP: nếu tự giải được trong đa thức thì kiểm tra càng dễ. Vậy P là tập con của NP.

Điều ngược lại, NP có nằm trong P không, chưa ai biết. Đây là câu hỏi P có bằng NP không, một trong bảy bài toán thiên niên kỷ với giải thưởng một triệu đô la của Viện Clay.

## 4. Quy dẫn, NP-complete và NP-hard

**Quy dẫn** bài A về bài B nghĩa là: biến mọi đầu vào của A thành đầu vào của B trong thời gian đa thức, sao cho đáp án giữ nguyên. Nếu giải được B nhanh thì giải được A nhanh. Nói cách khác, B khó ít nhất bằng A.

**NP-hard** là bài mà **mọi** bài trong NP đều quy dẫn được về nó. Nó khó ít nhất bằng mọi bài trong NP, nhưng không bắt buộc thuộc NP. Ví dụ bài toán dừng (halting problem) là NP-hard mà thậm chí không giải được.

**NP-complete** là bài vừa NP-hard vừa thuộc NP. Đây là những bài khó nhất trong NP. Bài NP-complete đầu tiên là SAT (Cook, 1971).

Tính chất đáng chú ý: chỉ cần tìm ra thuật toán đa thức cho **một** bài NP-complete, mọi bài trong NP đều giải được trong đa thức, tức P = NP.

| Lớp | Ví dụ |
|---|---|
| P | Tìm kiếm nhị phân, sắp xếp, BFS, Dijkstra, cây khung nhỏ nhất, ghép cặp |
| NP-complete (dạng quyết định) | SAT, có tour TSP dài không quá $K$, ba lô 0-1 có giá trị ít nhất $V$, tô 3 màu đồ thị, phủ đỉnh cỡ $k$ |
| NP-hard (dạng tối ưu) | Tìm tour TSP ngắn nhất, phân cụm K-means tối ưu toàn cục |
| Thuộc NP, chưa biết có NP-complete không | Phân tích số nguyên ra thừa số nguyên tố (nền tảng của RSA) |

Hai nhầm lẫn hay gặp: RSA không dựa trên bài NP-complete, và ba lô 0-1 có thuật toán quy hoạch động $O(nW)$, chỉ là giả đa thức vì $W$ có thể lớn theo hàm mũ số bit.

Sơ đồ quan hệ, giả định P khác NP: P nằm trong NP, NP-complete là phần khó nhất của NP, NP-hard bao NP-complete và tràn ra ngoài NP. Nếu P bằng NP thì P, NP và NP-complete trùng nhau.

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

Mọi P đều là NP nhưng ngược lại chưa chứng minh được. Không thể mặc định bài NP nào cũng có lời giải đa thức. Chiều quy dẫn cũng hay bị đảo: muốn chứng minh bài mới khó, phải quy dẫn một bài đã biết là NP-complete **về** bài mới.

Thứ tư: tin thêm phần cứng giải được NP-hard quy mô lớn. Tăng trưởng hàm mũ nuốt chửng mọi nâng cấp tuyến tính.

## 8. Ứng dụng của tư duy này

Tư duy độ khó dùng ngay khi nhận bài mới. Thử xem nó có lời giải đa thức đã biết không.

Thử xem nó có phải biến thể của ba lô hay người bán hàng rong không. Từ đó quyết định theo đuổi tối ưu hay chấp nhận heuristic.

Thói quen này rẻ mà cứu nhiều công sức. Phân loại một giờ đỡ hơn cài đặt một tháng vô vọng.

## ✍️ Tự kiểm tra

Tự trả lời trước, rồi mở đáp án để đối chiếu.

**Câu 1.** Chứng chỉ cho bài "đồ thị có tô được 3 màu không" là gì, và kiểm tra mất bao lâu?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Một cách gán màu cho mọi đỉnh. Kiểm tra: duyệt mọi cạnh xem 2 đầu khác màu, $O(V + E)$.
::

**Câu 2.** Vì sao P là tập con của NP?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Nếu giải được trong đa thức thì kiểm tra cũng được: bỏ qua chứng chỉ, tự giải lại rồi so.
::

**Câu 3.** Tìm tour TSP ngắn nhất là NP-complete hay NP-hard?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
NP-hard. Bản quyết định "có tour dài không quá $K$ không" mới là NP-complete, vì bản tối ưu không phải bài quyết định nên không thuộc NP.
::

**Câu 4.** Muốn chứng minh bài X mới là NP-hard, quy dẫn theo chiều nào?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Quy dẫn một bài đã biết là NP-complete (ví dụ SAT) **về** X trong thời gian đa thức.
::

**Câu 5.** Ba lô 0-1 có DP $O(nW)$. Vậy nó có thuộc P không?

::collapsible{name="đáp án" open-text="Xem" close-text="Ẩn"}
Chưa biết. $O(nW)$ là giả đa thức: $W$ có thể lớn theo hàm mũ của số bit biểu diễn nó, nên đây không phải thuật toán đa thức theo kích thước đầu vào.
::

## Tóm tắt

- Thuật toán đa thức $O(n^k)$ là chuẩn mực của lời giải khả thi; chứng chỉ là bằng chứng cho câu trả lời "có" của bài quyết định.
- P: giải được trong đa thức. NP: kiểm tra chứng chỉ được trong đa thức. P là tập con của NP.
- NP-hard: mọi bài NP quy dẫn được về nó. NP-complete: vừa NP-hard vừa thuộc NP.
- Với bài khó, chiến lược đúng là heuristic và xấp xỉ có ngưỡng sai số.
- Thêm phần cứng không xóa được bản chất hàm mũ của bài toán khó.
