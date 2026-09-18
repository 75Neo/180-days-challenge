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
