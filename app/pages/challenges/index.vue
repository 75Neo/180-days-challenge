<script setup lang="ts">
useSeoDefaults({
  title: "180 thử thách",
  description:
    "Danh sách 180 ngày học thuật toán, cấu trúc dữ liệu và design patterns: kiến thức trọng tâm, outcome, bài tập và rubric mỗi ngày.",
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
    <div class="max-w-[65ch]">
      <h1 class="text-3xl font-bold tracking-tight md:text-4xl">180 thử thách</h1>
      <p class="text-muted mt-3 leading-relaxed">
        Mỗi thẻ là một ngày học: kiến thức trọng tâm, outcome phải đạt, bài tập và rubric. Dùng bộ
        lọc để đi đúng trình độ của bạn.
      </p>
    </div>

    <div class="sticky top-16 z-10 -mx-1 mt-8 bg-default/90 px-1 py-3 backdrop-blur">
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

    <div class="grid gap-4 md:grid-cols-2">
      <NuxtLink
        v-for="c in filtered"
        :key="c.path"
        :to="`/challenges/${stemOf(c)}`"
        class="group flex gap-4 rounded-xl border border-muted bg-elevated/40 p-5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(236,72,153,0.35)] active:translate-y-0"
      >
        <div class="flex w-14 shrink-0 flex-col items-center">
          <span class="text-2xl font-bold tabular-nums">{{ c.day }}</span>
          <UIcon
            :name="categoryIcon[c.category] ?? 'i-lucide-code'"
            class="text-muted mt-1 size-4"
          />
        </div>
        <div class="min-w-0 flex-1">
          <p class="font-semibold leading-snug group-hover:text-primary">{{ c.title }}</p>
          <p class="text-muted mt-1 line-clamp-2 text-sm">{{ c.description }}</p>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <UBadge :color="difficultyColor[c.difficulty] ?? 'neutral'" variant="subtle" size="sm">
              {{ difficultyLabel[c.difficulty] ?? c.difficulty }}
            </UBadge>
            <UBadge color="neutral" variant="subtle" size="sm">{{
              categoryLabel[c.category] ?? c.category
            }}</UBadge>
            <span v-if="c.outcomes?.length" class="text-muted text-xs"
              >{{ c.outcomes.length }} outcomes</span
            >
            <span v-if="c.estimatedMinutes" class="text-muted text-xs"
              >· ~{{ c.estimatedMinutes }} phút</span
            >
          </div>
        </div>
      </NuxtLink>
    </div>

    <UEmpty
      v-if="!filtered.length"
      icon="i-lucide-search-x"
      title="Không tìm thấy ngày nào"
      description="Thử nới bộ lọc hoặc từ khóa khác."
    />
  </UContainer>
</template>
