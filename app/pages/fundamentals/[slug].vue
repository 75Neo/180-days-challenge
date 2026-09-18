<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ""));

const { data: all } = await useAsyncData("fundamentals-all", () =>
  queryCollection("fundamentals").all(),
);

const sorted = computed(() => {
  const list = ((all.value ?? []) as Record<string, any>[]).slice();
  list.sort((a, b) => String(a.title ?? "").localeCompare(String(b.title ?? ""), "vi"));
  return list;
});
const page = computed(() => sorted.value.find((p) => stemOf(p) === slug.value));
const idx = computed(() => sorted.value.findIndex((p) => stemOf(p) === slug.value));
const prev = computed(() => (idx.value > 0 ? sorted.value[idx.value - 1] : null));
const next = computed(() =>
  idx.value >= 0 && idx.value < sorted.value.length - 1 ? sorted.value[idx.value + 1] : null,
);

const seoTitle = computed(() =>
  page.value ? (page.value.title as string) : "Không tìm thấy bài nền tảng",
);
const seoPath = computed(() => `/fundamentals/${slug.value}`);
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
          "@type": "Article",
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
                name: "Nền tảng",
                item: `${siteUrl}/fundamentals`,
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
        :items="[{ label: 'Nền tảng', to: '/fundamentals' }, { label: page.title }]"
        class="mb-5"
      />
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-info">Lý thuyết nền tảng</p>
      <h1 class="mt-3 max-w-[20ch] text-4xl font-bold tracking-tight text-balance md:text-5xl">
        {{ page.title }}
      </h1>
      <p class="text-muted mt-4 max-w-[62ch] text-lg leading-relaxed">{{ page.description }}</p>
      <div class="mt-5 flex flex-wrap items-center gap-2">
        <span
          v-if="page.estimatedMinutes"
          class="text-muted inline-flex items-center gap-1.5 text-sm"
        >
          <UIcon name="i-lucide-timer" class="size-4" /> ~{{ page.estimatedMinutes }} phút đọc
        </span>
        <UBadge v-for="t in page.tags?.slice(0, 4) ?? []" :key="t" color="neutral" variant="outline"
          >#{{ t }}</UBadge
        >
      </div>

      <USeparator class="my-8" />

      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <article class="min-w-0">
          <div class="prose max-w-none">
            <ContentRenderer :value="page" />
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <NuxtLink
              v-if="prev"
              :to="`/fundamentals/${stemOf(prev)}`"
              class="rounded-xl border border-muted p-4 transition-colors hover:border-info/50"
            >
              <p class="text-muted flex items-center gap-1 text-xs">
                <UIcon name="i-lucide-arrow-left" class="size-3" /> Bài trước
              </p>
              <p class="mt-1 text-sm font-semibold">{{ prev.title }}</p>
            </NuxtLink>
            <span v-else />
            <NuxtLink
              v-if="next"
              :to="`/fundamentals/${stemOf(next)}`"
              class="rounded-xl border border-muted p-4 text-right transition-colors hover:border-info/50"
            >
              <p class="text-muted flex items-center justify-end gap-1 text-xs">
                Bài tiếp <UIcon name="i-lucide-arrow-right" class="size-3" />
              </p>
              <p class="mt-1 text-sm font-semibold">{{ next.title }}</p>
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
      icon="i-lucide-book-x"
      title="Không tìm thấy bài nền tảng"
      description="Bài lý thuyết này không tồn tại."
    >
      <template #actions>
        <UButton to="/fundamentals" label="Về danh sách" />
      </template>
    </UEmpty>
  </UContainer>
</template>
