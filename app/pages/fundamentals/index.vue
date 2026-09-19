<script setup lang="ts">
useSeoDefaults({
  title: "Nền tảng lý thuyết",
  description:
    "11 bài lý thuyết thuần túy phải đọc trước khi làm thử thách: Big-O, đệ quy, P/NP, nguyên lý thiết kế.",
  path: "/fundamentals",
});

const search = ref("");

const { data: fundamentals } = await useAsyncData("fundamentals-index", () =>
  queryCollection("fundamentals").all(),
);

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  const list = ((fundamentals.value ?? []) as Record<string, any>[]).slice();
  list.sort((a, b) => String(a.title ?? "").localeCompare(String(b.title ?? ""), "vi"));
  if (!q) return list;
  return list.filter((f) => `${f.title} ${f.description}`.toLowerCase().includes(q));
});
</script>

<template>
  <UContainer class="py-10 md:py-14">
    <UPageHero
      headline="Lý thuyết thuần túy · không code"
      title="Nền tảng"
      description="11 bài lý thuyết phải đọc trước khi làm thử thách. Mỗi thử thách đều ghi rõ cần nền tảng nào."
      orientation="vertical"
      :ui="{ container: 'py-0 sm:py-0', title: 'text-3xl sm:text-4xl' }"
    />

    <UInput
      v-model="search"
      icon="i-lucide-search"
      placeholder="Tìm bài nền tảng..."
      class="mb-6 mt-8 md:max-w-xs"
    />

    <div class="grid gap-4 md:grid-cols-2">
      <UPageCard
        v-for="(f, i) in filtered"
        :key="f.path"
        :to="`/fundamentals/${stemOf(f)}`"
        :title="f.title"
        :description="f.description"
        icon="i-lucide-book-open"
      >
        <template #header>
          <p class="text-muted font-mono text-xs tabular-nums">
            Bài {{ String(i + 1).padStart(2, "0") }}
            <span v-if="f.estimatedMinutes"> · ~{{ f.estimatedMinutes }} phút</span>
          </p>
        </template>
      </UPageCard>
    </div>
  </UContainer>
</template>
