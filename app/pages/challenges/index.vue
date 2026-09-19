<script setup lang="ts">
useSeoDefaults({
  title: "180 thử thách",
  description:
    "Danh sách 180 ngày: kiến thức trọng tâm, outcome, bài tập và rubric mỗi ngày.",
  path: "/challenges",
});

const search = ref("");
const difficulty = ref<string | undefined>(undefined);
const category = ref<string | undefined>(undefined);

const { data: challenges } = await useAsyncData("challenges-list", () =>
  queryCollection("challenges").order("day", "ASC").all(),
);

const difficultyOptions = [
  { label: "Tất cả độ khó", value: undefined },
  { label: "Dễ", value: "de" },
  { label: "Trung bình", value: "trung-binh" },
  { label: "Khó", value: "kho" },
  { label: "Chuyên gia", value: "chuyen-gia" },
];
const categoryOptions = [
  { label: "Tất cả loại", value: undefined },
  { label: "Thuật toán", value: "algorithm" },
  { label: "Cấu trúc dữ liệu", value: "data-structure" },
  { label: "Design pattern", value: "design-pattern" },
];

const categoryIcon: Record<string, string> = {
  algorithm: "i-lucide-cpu",
  "data-structure": "i-lucide-boxes",
  "design-pattern": "i-lucide-puzzle",
};

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  return ((challenges.value ?? []) as Record<string, any>[]).filter((c) => {
    if (difficulty.value && c.difficulty !== difficulty.value) return false;
    if (category.value && c.category !== category.value) return false;
    if (q && !`${c.day} ${c.title} ${c.description}`.toLowerCase().includes(q)) return false;
    return true;
  });
});
</script>

<template>
  <UContainer class="py-10 md:py-14">
    <UPageHero
      title="180 thử thách"
      description="Mỗi thẻ là một ngày học: kiến thức trọng tâm, outcome phải đạt, bài tập và rubric. Dùng bộ lọc để đi đúng trình độ của bạn."
      orientation="vertical"
      :ui="{ container: 'py-0 sm:py-0', title: 'text-3xl sm:text-4xl' }"
    />

    <div class="sticky top-16 z-10 -mx-1 mt-8 bg-default px-1 py-3">
      <div class="flex flex-col gap-3 md:flex-row">
        <UInput
          v-model="search"
          icon="i-lucide-search"
          placeholder="Tìm theo tên hoặc số ngày..."
          class="md:max-w-xs"
        />
        <USelectMenu
          v-model="difficulty"
          :items="difficultyOptions"
          value-key="value"
          placeholder="Độ khó"
          class="md:w-48"
        />
        <USelectMenu
          v-model="category"
          :items="categoryOptions"
          value-key="value"
          placeholder="Loại kiến thức"
          class="md:w-56"
        />
      </div>
    </div>

    <p class="text-muted mb-4 mt-2 text-sm">
      Hiển thị {{ filtered.length }} / {{ challenges?.length ?? 0 }} ngày
    </p>

    <UPageGrid>
      <UPageCard
        v-for="c in filtered"
        :key="c.path"
        :to="`/challenges/${stemOf(c)}`"
        :title="`Ngày ${c.day}: ${c.title}`"
        :description="c.description"
        :icon="categoryIcon[c.category] ?? 'i-lucide-code'"
      >
        <template #footer>
          <div class="flex flex-wrap items-center gap-2">
            <UBadge :color="difficultyColor[c.difficulty] ?? 'neutral'" variant="subtle" size="sm">
              {{ difficultyLabel[c.difficulty] ?? c.difficulty }}
            </UBadge>
            <UBadge color="neutral" variant="subtle" size="sm">{{
              categoryLabel[c.category] ?? c.category
            }}</UBadge>
            <span v-if="c.estimatedMinutes" class="text-muted text-xs"
              >~{{ c.estimatedMinutes }} phút</span
            >
          </div>
        </template>
      </UPageCard>
    </UPageGrid>

    <UEmpty
      v-if="!filtered.length"
      icon="i-lucide-search-x"
      title="Không tìm thấy ngày nào"
      description="Thử nới bộ lọc hoặc từ khóa khác."
    />
  </UContainer>
</template>
