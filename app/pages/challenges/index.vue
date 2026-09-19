<script setup lang="ts">
useSeoDefaults({
  title: "180 thử thách",
  description:
    "Danh sách 180 ngày: kiến thức trọng tâm, bài tập có đặc tả rõ và tiêu chí hoàn thành.",
  path: "/challenges",
});

const route = useRoute();
const phase = ref(String(route.query.phase ?? "all"));

const { data: challenges } = await useAsyncData("challenges-list", () =>
  queryCollection("challenges").order("day", "ASC").all(),
);

const phaseTabs = [
  { label: "Tất cả", value: "all" },
  ...phases.map((p, i) => ({ label: p.title, value: String(i), icon: p.icon })),
];

const categoryIcon: Record<string, string> = {
  algorithm: "i-lucide-cpu",
  "data-structure": "i-lucide-boxes",
  "design-pattern": "i-lucide-puzzle",
};

const filtered = computed(() => {
  const p = phase.value === "all" ? null : phases[Number(phase.value)];
  return ((challenges.value ?? []) as Record<string, any>[]).filter((c) => {
    if (p && (c.day < p.from || c.day > p.to)) return false;
    return true;
  });
});
</script>

<template>
  <UContainer class="py-12 md:py-16">
    <div class="max-w-3xl">
      <h1 class="text-highlighted text-4xl font-bold tracking-tight md:text-5xl">180 thử thách</h1>
      <p class="text-muted mt-4 text-lg leading-relaxed">
        Mỗi ô là một ngày: lý thuyết trọng tâm, bài tập có đặc tả hàm, test mẫu và tiêu chí hoàn
        thành. Đi theo thứ tự hoặc chọn chặng. Nhấn Ctrl+K để tìm nhanh.
      </p>
    </div>

    <div
      class="bg-default/90 sticky top-(--ui-header-height) z-10 -mx-4 mt-8 px-4 py-3 backdrop-blur"
    >
      <UTabs
        v-model="phase"
        :items="phaseTabs"
        :content="false"
        variant="link"
        size="sm"
        class="overflow-x-auto"
      />
    </div>

    <div
      class="mt-4 grid gap-px border border-muted bg-(--ui-border-muted) sm:grid-cols-2 lg:grid-cols-3"
    >
      <NuxtLink
        v-for="c in filtered"
        :key="c.path"
        :to="`/challenges/${stemOf(c)}`"
        class="group bg-default hover:bg-elevated/60 flex flex-col gap-3 p-5 transition-colors"
      >
        <div class="flex items-start justify-between gap-3">
          <span
            class="text-dimmed group-hover:text-primary font-mono text-2xl leading-none font-bold tabular-nums transition-colors"
          >
            {{ String(c.day).padStart(3, "0") }}
          </span>
          <UIcon
            :name="categoryIcon[c.category] ?? 'i-lucide-code'"
            class="text-muted size-4"
            :aria-label="categoryLabel[c.category]"
          />
        </div>
        <div>
          <p class="font-display text-highlighted group-hover:text-primary font-semibold text-pretty">
            {{ c.title }}
          </p>
          <p class="text-muted mt-1 line-clamp-2 text-sm leading-relaxed">{{ c.description }}</p>
        </div>
        <div class="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <UBadge :color="difficultyColor[c.difficulty] ?? 'neutral'" variant="subtle" size="sm">
            {{ difficultyLabel[c.difficulty] ?? c.difficulty }}
          </UBadge>
          <span class="text-muted text-xs">{{ categoryLabel[c.category] ?? c.category }}</span>
          <span v-if="c.estimatedMinutes" class="text-dimmed ml-auto text-xs tabular-nums">
            ~{{ c.estimatedMinutes }} phút
          </span>
        </div>
      </NuxtLink>
    </div>

    <UEmpty
      v-if="!filtered.length"
      icon="i-lucide-search-x"
      title="Không tìm thấy ngày nào"
      description="Chặng này chưa có ngày học nào."
      class="py-16"
    />
  </UContainer>
</template>
