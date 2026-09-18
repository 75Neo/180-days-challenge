<script setup lang="ts">
useSeoDefaults({
  title: "180 ngày làm chủ thuật toán và thiết kế",
  description:
    "Mỗi ngày một thử thách coding: cấu trúc dữ liệu, thuật toán và design patterns bằng tiếng Việt, từ dễ đến khó, kèm outcome và rubric.",
  path: "/",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "180 Days Challenge",
        description:
          "180 ngày làm chủ thuật toán, cấu trúc dữ liệu và design patterns bằng tiếng Việt.",
        inLanguage: "vi",
        provider: { "@type": "Organization", name: "180 Days Challenge" },
      }),
    },
  ],
});

const { data: challenges } = await useAsyncData("landing-challenges", () =>
  queryCollection("challenges").order("day", "ASC").all(),
);
const { data: fundamentals } = await useAsyncData("landing-fundamentals", () =>
  queryCollection("fundamentals").all(),
);

const totalMinutes = computed(() =>
  ((challenges.value ?? []) as Record<string, unknown>[]).reduce(
    (sum, c) => sum + (Number(c.estimatedMinutes) || 0),
    0,
  ),
);

const phases = [
  {
    range: "Ngày 1–12",
    title: "Nền móng",
    desc: "Mảng, linked list, stack, queue, BST, đệ quy, sắp xếp, tìm kiếm.",
    icon: "i-lucide-sprout",
  },
  {
    range: "Ngày 13–30",
    title: "Cấu trúc trung gian",
    desc: "Heap, treap, Bloom, Union-Find, trie, cache, đồ thị cơ bản.",
    icon: "i-lucide-boxes",
  },
  {
    range: "Ngày 31–50",
    title: "Đồ thị và phân cụm",
    desc: "Dijkstra, A*, PageRank, k-d tree, clustering, MapReduce.",
    icon: "i-lucide-share-2",
  },
  {
    range: "Ngày 51–90",
    title: "Học máy",
    desc: "Supervised, neural nets, NLP, Transformer, gợi ý, mật mã, tối ưu.",
    icon: "i-lucide-brain",
  },
  {
    range: "Ngày 91–125",
    title: "Design patterns",
    desc: "16 patterns qua câu chuyện SimUDuck, Pizza Store, Gumball.",
    icon: "i-lucide-puzzle",
  },
  {
    range: "Ngày 126–180",
    title: "Dự án và nghề",
    desc: "25 app tích hợp, capstone, phỏng vấn, dự án cuối, demo day.",
    icon: "i-lucide-rocket",
  },
];
</script>

<template>
  <div>
    <UContainer class="py-16 md:py-24">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <UBadge color="primary" variant="soft" class="mb-4"
            >Chương trình 180 ngày · Tiếng Việt</UBadge
          >
          <h1 class="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Làm chủ thuật toán, từng ngày một
          </h1>
          <p class="text-muted mt-4 max-w-[55ch] leading-relaxed">
            Mỗi ngày một thử thách coding với outcome rõ ràng: đọc nền tảng, học kiến thức trọng
            tâm, làm bài tập và tự chấm bằng rubric.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <UButton to="/challenges" icon="i-lucide-play" label="Bắt đầu ngày 1" size="lg" />
            <UButton
              to="/fundamentals"
              color="neutral"
              variant="soft"
              trailing-icon="i-lucide-arrow-right"
              label="Học nền tảng trước"
              size="lg"
            />
          </div>
        </div>
        <UCard variant="subtle">
          <template #header>
            <p class="font-semibold">Một ngày học gồm</p>
          </template>
          <ol class="space-y-3">
            <li class="flex gap-3">
              <UIcon name="i-lucide-book-open" class="mt-0.5 shrink-0 text-primary" />
              <span class="text-sm"
                >Ôn điều kiện tiên quyết trong <strong>11 bài nền tảng</strong></span
              >
            </li>
            <li class="flex gap-3">
              <UIcon name="i-lucide-brain" class="mt-0.5 shrink-0 text-primary" />
              <span class="text-sm"
                >Học kiến thức trọng tâm của ngày, từ dễ gộp đến khó chuyên sâu</span
              >
            </li>
            <li class="flex gap-3">
              <UIcon name="i-lucide-list-checks" class="mt-0.5 shrink-0 text-primary" />
              <span class="text-sm">Làm bài tập 3 mức, chạy ví dụ kiểm thử, chấm theo rubric</span>
            </li>
            <li class="flex gap-3">
              <UIcon name="i-lucide-target" class="mt-0.5 shrink-0 text-primary" />
              <span class="text-sm"
                >Tick checklist <strong>“sau ngày này bạn làm được gì”</strong></span
              >
            </li>
          </ol>
          <template #footer>
            <p class="text-muted text-sm">
              ~{{ Math.round(totalMinutes / 60) }} giờ thực hành ·
              {{ challenges?.length ?? 180 }} ngày · {{ fundamentals?.length ?? 11 }} bài nền tảng
            </p>
          </template>
        </UCard>
      </div>
    </UContainer>

    <USeparator />

    <UContainer class="py-16">
      <h2 class="text-2xl font-bold tracking-tight">Lộ trình 6 chặng</h2>
      <p class="text-muted mt-2 max-w-[65ch]">
        Độ khó tăng dần: chủ đề dễ được gộp lại một ngày, chủ đề khó học sâu một thứ.
      </p>
      <div class="mt-8 divide-y divide-muted overflow-hidden rounded-xl border border-muted">
        <NuxtLink
          v-for="p in phases"
          :key="p.range"
          to="/challenges"
          class="group flex items-center gap-4 bg-elevated/40 px-5 py-4 transition-colors hover:bg-elevated"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <UIcon :name="p.icon" class="size-5 text-primary" />
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-xs font-medium text-primary">{{ p.range }}</p>
            <p class="font-semibold">{{ p.title }}</p>
            <p class="text-muted truncate text-sm">{{ p.desc }}</p>
          </div>
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>
    </UContainer>

    <UContainer class="pb-16">
      <UCard variant="subtle" class="overflow-hidden">
        <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-xl font-bold tracking-tight">Sẵn sàng cho ngày đầu tiên?</h2>
            <p class="text-muted mt-1 text-sm">
              Đọc 2 bài nền tảng về thuật toán và Big-O, rồi làm thử thách mảng và danh sách.
            </p>
          </div>
          <div class="flex gap-3">
            <UButton to="/challenges" icon="i-lucide-list" label="Xem thử thách" />
            <UButton to="/fundamentals" color="neutral" variant="soft" label="Xem nền tảng" />
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>
