<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ""));

const { data: all } = await useAsyncData("challenges-all", () =>
  queryCollection("challenges").order("day", "ASC").all(),
);

const list = computed(() => (all.value ?? []) as Record<string, any>[]);
const page = computed(() => list.value.find((p) => stemOf(p) === slug.value));
const idx = computed(() => list.value.findIndex((p) => stemOf(p) === slug.value));
const prev = computed(() => (idx.value > 0 ? list.value[idx.value - 1] : null));
const next = computed(() =>
  idx.value >= 0 && idx.value < list.value.length - 1 ? list.value[idx.value + 1] : null,
);

const { data: fundamentals } = await useAsyncData("challenges-fundamentals", () =>
  queryCollection("fundamentals").all(),
);
const fundMap = computed(() => {
  const map: Record<string, Record<string, any>> = {};
  for (const f of (fundamentals.value ?? []) as Record<string, any>[]) map[stemOf(f)] = f;
  return map;
});

const seoTitle = computed(() =>
  page.value ? `Ngày ${page.value.day}: ${page.value.title}` : "Không tìm thấy thử thách",
);
const seoPath = computed(() => `/challenges/${slug.value}`);
const siteUrl = useSiteUrl();
useSeoDefaults({
  title: seoTitle,
  description: computed(() => (page.value?.description as string | undefined) ?? null),
  path: seoPath,
  type: "article",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: seoTitle.value,
          description: page.value?.description ?? "",
          inLanguage: "vi",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteUrl}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Thử thách",
                item: `${siteUrl}/challenges`,
              },
              { "@type": "ListItem", position: 3, name: seoTitle.value },
            ],
          },
        }),
      ),
    },
  ],
});
</script>

<template>
  <UContainer class="py-10">
    <div v-if="page">
      <UBreadcrumb
        :items="[{ label: 'Thử thách', to: '/challenges' }, { label: `Ngày ${page.day}` }]"
        class="mb-5"
      />
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Ngày {{ page.day }} / 180
      </p>
      <h1 class="mt-3 max-w-[20ch] text-4xl font-bold tracking-tight text-balance md:text-5xl">
        {{ page.title }}
      </h1>
      <p class="text-muted mt-4 max-w-[62ch] text-lg leading-relaxed">{{ page.description }}</p>

      <div class="mt-5 flex flex-wrap items-center gap-2">
        <UBadge :color="difficultyColor[page.difficulty] ?? 'neutral'" variant="subtle">
          {{ difficultyLabel[page.difficulty] ?? page.difficulty }}
        </UBadge>
        <UBadge color="neutral" variant="subtle">{{
          categoryLabel[page.category] ?? page.category
        }}</UBadge>
        <span
          v-if="page.estimatedMinutes"
          class="text-muted inline-flex items-center gap-1.5 text-sm"
        >
          <UIcon name="i-lucide-timer" class="size-4" /> ~{{ page.estimatedMinutes }} phút
        </span>
      </div>
      <div v-if="page.tags?.length" class="mt-3 flex flex-wrap gap-2">
        <UBadge v-for="t in page.tags" :key="t" color="neutral" variant="outline">#{{ t }}</UBadge>
      </div>

      <USeparator class="my-8" />

      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <article class="min-w-0">
          <UCard v-if="page.outcomes?.length" variant="subtle" class="mb-6 border-primary/30">
            <template #header>
              <p class="flex items-center gap-2 font-semibold">
                <UIcon name="i-lucide-target" class="text-primary" /> Sau ngày này bạn làm được gì
              </p>
            </template>
            <ul class="space-y-2">
              <li v-for="o in page.outcomes" :key="o" class="flex gap-2.5 text-sm leading-relaxed">
                <UIcon name="i-lucide-circle-check" class="mt-0.5 shrink-0 text-success" />
                <span>{{ o }}</span>
              </li>
            </ul>
          </UCard>

          <div class="prose max-w-none">
            <ContentRenderer :value="page" />
          </div>

          <div v-if="page.prerequisites?.length" class="mt-8">
            <h2 class="mb-3 text-lg font-bold">Đọc lại nền tảng</h2>
            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink
                v-for="p in page.prerequisites"
                :key="p"
                :to="`/fundamentals/${p}`"
                class="group flex items-center gap-3 rounded-xl border border-muted bg-elevated/40 p-4 transition-colors hover:border-primary/40"
              >
                <UIcon name="i-lucide-book-open" class="size-5 shrink-0 text-primary" />
                <span class="text-sm font-medium group-hover:text-primary">{{
                  fundMap[p]?.title ?? p
                }}</span>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <NuxtLink
              v-if="prev"
              :to="`/challenges/${stemOf(prev)}`"
              class="rounded-xl border border-muted p-4 transition-colors hover:border-primary/40"
            >
              <p class="text-muted flex items-center gap-1 text-xs">
                <UIcon name="i-lucide-arrow-left" class="size-3" /> Ngày trước
              </p>
              <p class="mt-1 text-sm font-semibold">Ngày {{ prev.day }}: {{ prev.title }}</p>
            </NuxtLink>
            <span v-else />
            <NuxtLink
              v-if="next"
              :to="`/challenges/${stemOf(next)}`"
              class="rounded-xl border border-muted p-4 text-right transition-colors hover:border-primary/40"
            >
              <p class="text-muted flex items-center justify-end gap-1 text-xs">
                Ngày tiếp <UIcon name="i-lucide-arrow-right" class="size-3" />
              </p>
              <p class="mt-1 text-sm font-semibold">Ngày {{ next.day }}: {{ next.title }}</p>
            </NuxtLink>
            <span v-else />
          </div>
        </article>

        <aside class="hidden lg:block">
          <div class="sticky top-24">
            <UContentToc
              v-if="page.body?.toc?.links"
              :links="page.body.toc.links"
              title="Trong bài này"
            />
          </div>
        </aside>
      </div>
    </div>

    <UEmpty
      v-else
      icon="i-lucide-calendar-x"
      title="Không tìm thấy thử thách"
      description="Ngày học này không tồn tại."
    >
      <template #actions>
        <UButton to="/challenges" label="Về danh sách" />
      </template>
    </UEmpty>
  </UContainer>
</template>
