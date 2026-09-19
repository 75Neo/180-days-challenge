<script setup lang="ts">
useSeoDefaults({
  title: "Nền tảng lý thuyết",
  description:
    "11 bài lý thuyết thuần túy phải đọc trước khi làm thử thách: Big-O, đệ quy, P/NP, nguyên lý thiết kế.",
  path: "/fundamentals",
});

const search = ref("");
const order = computed(() => sortFundamentals((fundamentals.value ?? []) as Record<string, any>[]).map(stemOf));

const { data: fundamentals } = await useAsyncData("fundamentals-index", () =>
  queryCollection("fundamentals").all(),
);

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  const list = sortFundamentals((fundamentals.value ?? []) as Record<string, any>[]);
  if (!q) return list;
  return list.filter((f) => `${f.title} ${f.description}`.toLowerCase().includes(q));
});
</script>

<template>
  <UContainer class="py-12 md:py-16">
    <div class="max-w-3xl">
      <h1 class="text-highlighted text-4xl font-bold tracking-tight md:text-5xl">Nền tảng</h1>
      <p class="text-muted mt-4 text-lg leading-relaxed">
        {{ fundamentals?.length ?? 11 }} bài lý thuyết, không code. Đọc theo thứ tự dưới đây. Mỗi
        thử thách đều ghi rõ cần ôn bài nào.
      </p>
      <UInput
        v-model="search"
        icon="i-lucide-search"
        placeholder="Tìm bài nền tảng..."
        aria-label="Tìm bài nền tảng"
        class="mt-8 w-full md:max-w-sm"
      />
    </div>

    <ol class="mt-10 grid gap-px border border-muted bg-(--ui-border-muted) md:grid-cols-2">
      <li v-for="f in filtered" :key="f.path" class="bg-default">
        <NuxtLink
          :to="`/fundamentals/${stemOf(f)}`"
          class="group hover:bg-elevated/60 flex h-full gap-5 p-6 transition-colors"
        >
          <span
            class="text-primary/70 group-hover:text-primary font-mono text-3xl leading-none font-bold tabular-nums"
          >
            {{ String(order.indexOf(stemOf(f)) + 1).padStart(2, "0") }}
          </span>
          <div class="min-w-0">
            <p class="font-display text-highlighted group-hover:text-primary font-semibold text-pretty">
              {{ f.title }}
            </p>
            <p class="text-muted mt-1.5 line-clamp-2 text-sm leading-relaxed">
              {{ f.description }}
            </p>
            <p v-if="f.estimatedMinutes" class="text-dimmed mt-3 text-xs">
              ~{{ f.estimatedMinutes }} phút đọc
            </p>
          </div>
        </NuxtLink>
      </li>
    </ol>

    <UEmpty
      v-if="!filtered.length"
      icon="i-lucide-search-x"
      title="Không có bài nào khớp"
      description="Thử từ khóa khác, ví dụ: đệ quy, Big-O."
      class="py-16"
    />
  </UContainer>
</template>
