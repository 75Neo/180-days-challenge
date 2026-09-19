<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ""));

const { data: all } = await useAsyncData("fundamentals-all", () =>
  queryCollection("fundamentals").all(),
);

const sorted = computed(() => {
  return sortFundamentals((all.value ?? []) as Record<string, any>[]);
});
const idx = computed(() => sorted.value.findIndex((p) => stemOf(p) === slug.value));
const page = computed(() => sorted.value[idx.value]);
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
  <UContainer>
    <UPage v-if="page">
      <UPageHeader :title="page.title" :description="page.description">
        <template #headline>
          <UBreadcrumb
            :items="[{ label: 'Nền tảng', to: '/fundamentals' }, { label: 'Lý thuyết' }]"
          />
        </template>
        <div class="mt-5 flex flex-wrap items-center gap-2">
          <UBadge
            v-if="page.estimatedMinutes"
            color="neutral"
            variant="outline"
            icon="i-lucide-timer"
          >
            ~{{ page.estimatedMinutes }} phút đọc
          </UBadge>
          <UBadge
            v-for="t in page.tags?.slice(0, 4) ?? []"
            :key="t"
            color="neutral"
            variant="subtle"
          >
            #{{ t }}
          </UBadge>
        </div>
      </UPageHeader>

      <UPageBody>
        <div class="prose max-w-none">
          <ContentRenderer :value="page" />
        </div>

        <USeparator />

        <div class="grid gap-3 sm:grid-cols-2">
          <NuxtLink
            v-if="prev"
            :to="`/fundamentals/${stemOf(prev)}`"
            class="group border-muted hover:border-primary/50 border p-4 transition-colors"
          >
            <p class="text-muted flex items-center gap-1 text-xs">
              <UIcon name="i-lucide-arrow-left" class="size-3" /> Bài trước
            </p>
            <p class="font-display group-hover:text-primary mt-1 text-sm font-semibold">{{ prev.title }}</p>
          </NuxtLink>
          <span v-else />
          <NuxtLink
            v-if="next"
            :to="`/fundamentals/${stemOf(next)}`"
            class="group border-muted hover:border-primary/50 border p-4 text-right transition-colors"
          >
            <p class="text-muted flex items-center justify-end gap-1 text-xs">
              Bài tiếp <UIcon name="i-lucide-arrow-right" class="size-3" />
            </p>
            <p class="font-display group-hover:text-primary mt-1 text-sm font-semibold">{{ next.title }}</p>
          </NuxtLink>
        </div>
      </UPageBody>

      <template v-if="page.body?.toc?.links?.length" #right>
        <UContentToc :links="page.body.toc.links" title="Trong bài này" highlight />
      </template>
    </UPage>

    <UEmpty
      v-else
      icon="i-lucide-book-x"
      title="Không tìm thấy bài nền tảng"
      description="Bài lý thuyết này không tồn tại."
      class="py-24"
    >
      <template #actions>
        <UButton to="/fundamentals" label="Về danh sách" />
      </template>
    </UEmpty>
  </UContainer>
</template>
