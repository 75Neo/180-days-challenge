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
    <div class="max-w-[65ch]">
      <UBadge color="info" variant="soft" class="mb-3">Lý thuyết thuần túy · không code</UBadge>
      <h1 class="text-3xl font-bold tracking-tight md:text-4xl">Nền tảng</h1>
      <p class="text-muted mt-3 leading-relaxed">
        11 bài lý thuyết phải đọc trước khi làm thử thách. Mỗi thử thách đều ghi rõ cần nền tảng nào
        — ví dụ học merge sort thì phải nắm đệ quy.
      </p>
    </div>

    <UInput
      v-model="search"
      icon="i-lucide-search"
      placeholder="Tìm bài nền tảng..."
      class="mb-6 mt-8 md:max-w-xs"
    />

    <ol class="divide-y divide-muted overflow-hidden rounded-xl border border-muted">
      <li v-for="(f, i) in filtered" :key="f.path">
        <NuxtLink
          :to="`/fundamentals/${stemOf(f)}`"
          class="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-elevated"
        >
          <span class="text-muted w-8 shrink-0 font-mono text-sm tabular-nums">{{
            String(i + 1).padStart(2, "0")
          }}</span>
          <span class="min-w-0 flex-1">
            <span class="block truncate font-semibold group-hover:text-info">{{ f.title }}</span>
            <span class="text-muted mt-0.5 line-clamp-1 block text-sm">{{ f.description }}</span>
          </span>
          <span v-if="f.estimatedMinutes" class="text-muted hidden shrink-0 text-xs sm:block"
            >~{{ f.estimatedMinutes }} phút</span
          >
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-info"
          />
        </NuxtLink>
      </li>
    </ol>
  </UContainer>
</template>
