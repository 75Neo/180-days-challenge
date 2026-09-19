import curriculum from "~~/curriculum.json";

export const difficultyLabel: Record<string, string> = {
  de: "Dễ",
  "trung-binh": "Trung bình",
  kho: "Khó",
  "chuyen-gia": "Chuyên gia",
};

export const difficultyColor: Record<string, "success" | "info" | "warning" | "error"> = {
  de: "success",
  "trung-binh": "info",
  kho: "warning",
  "chuyen-gia": "error",
};

export const categoryLabel: Record<string, string> = {
  algorithm: "Thuật toán",
  "data-structure": "Cấu trúc dữ liệu",
  "design-pattern": "Design pattern",
  fundamentals: "Nền tảng",
};

export function stemOf(entry: Record<string, unknown>): string {
  return (
    String(entry.stem ?? entry.path ?? "")
      .split("/")
      .pop() ?? ""
  );
}

export const phases = [
  {
    from: 1,
    to: 21,
    title: "Khởi động",
    icon: "i-lucide-sprout",
    desc: "Mảng, linked list, stack, queue, cây, đệ quy, sắp xếp, tìm kiếm. Pattern SOLID, Strategy, Observer. Chốt bằng mini project benchmark sắp xếp.",
  },
  {
    from: 22,
    to: 64,
    title: "Nền tảng mở rộng",
    icon: "i-lucide-boxes",
    desc: "Heap, bảng băm, trie, Bloom filter, Union-Find, LRU cache, đồ thị BFS/DFS/Dijkstra, clustering, học máy nhập môn. Pattern Factory, Command, Template.",
  },
  {
    from: 65,
    to: 118,
    title: "Nâng cao",
    icon: "i-lucide-brain",
    desc: "Quy hoạch động, tối ưu SA/GA, đồ thị khó, mạng nơ-ron, Transformer. Pattern State, Proxy, MVC và 3 project vận dụng.",
  },
  {
    from: 119,
    to: 125,
    title: "Chuyên gia",
    icon: "i-lucide-share-2",
    desc: "Similarity search, đồ thị phẳng, vẽ đồ thị, giải thuật di truyền nâng cao, Interpreter, Visitor.",
  },
  {
    from: 126,
    to: 180,
    title: "Dự án thực tế",
    icon: "i-lucide-rocket",
    desc: "App hoàn chỉnh: autocomplete, search engine, rate limiter, fraud pipeline. Sau đó capstone, phỏng vấn, system design và demo day.",
  },
];

export function phaseOf(day: number) {
  return phases.find((p) => day >= p.from && day <= p.to) ?? phases[0]!;
}

// Thứ tự đọc bài nền tảng theo curriculum.json, không theo alphabet.
export function sortFundamentals<T extends Record<string, unknown>>(list: T[]): T[] {
  const order = curriculum.fundamentals as string[];
  return list.slice().sort((a, b) => order.indexOf(stemOf(a)) - order.indexOf(stemOf(b)));
}
