<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ""));

const { data: all } = await useAsyncData("challenges-all", () =>
  queryCollection("challenges").order("day", "ASC").all(),
);

const list = computed(() => (all.value ?? []) as Record<string, any>[]);
// Link từ UContentSearch dùng path của Nuxt Content (bỏ tiền tố số), nên khớp cả hai.
const matches = (p: Record<string, any>) =>
  stemOf(p) === slug.value || p.path === `/challenges/${slug.value}`;
const idx = computed(() => list.value.findIndex(matches));
const page = computed(() => list.value[idx.value]);
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
  <UContainer>
    <UPage v-if="page">
      <UPageHeader :title="page.title" :description="page.description">
        <template #headline>
          <UBreadcrumb
            :items="[
              { label: 'Thử thách', to: '/challenges' },
              { label: `Ngày ${page.day} / 180` },
            ]"
          />
        </template>
        <div class="mt-5 flex flex-wrap items-center gap-2">
          <UBadge :color="difficultyColor[page.difficulty] ?? 'neutral'" variant="subtle">
            {{ difficultyLabel[page.difficulty] ?? page.difficulty }}
          </UBadge>
          <UBadge color="neutral" variant="subtle">
            {{ categoryLabel[page.category] ?? page.category }}
          </UBadge>
          <UBadge
            v-if="page.estimatedMinutes"
            color="neutral"
            variant="outline"
            icon="i-lucide-timer"
          >
            ~{{ page.estimatedMinutes }} phút
          </UBadge>
        </div>
        <UProgress
          :model-value="page.day"
          :max="180"
          size="xs"
          class="mt-6"
          :aria-label="`Tiến độ: ngày ${page.day} trên 180`"
        />
      </UPageHeader>

      <UPageBody>
        <div v-if="page.prerequisites?.length" class="border-muted bg-elevated/50 border p-4">
          <p class="text-highlighted mb-3 flex items-center gap-2 text-sm font-semibold">
            <UIcon name="i-lucide-book-open" class="text-primary size-4" />
            Ôn lại trước khi học
          </p>
          <div class="flex flex-wrap gap-2">
            <UButton
              v-for="p in page.prerequisites"
              :key="p"
              :to="`/fundamentals/${p}`"
              :label="fundMap[p]?.title ?? p"
              color="neutral"
              variant="outline"
              size="sm"
              trailing-icon="i-lucide-arrow-up-right"
            />
          </div>
        </div>

        <ContentRenderer :value="page" />

        <USeparator />

        <div class="grid gap-3 sm:grid-cols-2">
          <NuxtLink
            v-if="prev"
            :to="`/challenges/${stemOf(prev)}`"
            class="group border-muted hover:border-primary/50 border p-4 transition-colors"
          >
            <p class="text-muted flex items-center gap-1 text-xs">
              <UIcon name="i-lucide-arrow-left" class="size-3" /> Ngày {{ prev.day }}
            </p>
            <p class="font-display group-hover:text-primary mt-1 text-sm font-semibold">{{ prev.title }}</p>
          </NuxtLink>
          <span v-else />
          <NuxtLink
            v-if="next"
            :to="`/challenges/${stemOf(next)}`"
            class="group border-muted hover:border-primary/50 border p-4 text-right transition-colors"
          >
            <p class="text-muted flex items-center justify-end gap-1 text-xs">
              Ngày {{ next.day }} <UIcon name="i-lucide-arrow-right" class="size-3" />
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
      icon="i-lucide-calendar-x"
      title="Không tìm thấy thử thách"
      description="Ngày học này không tồn tại."
      class="py-24"
    >
      <template #actions>
        <UButton to="/challenges" label="Về danh sách" />
      </template>
    </UEmpty>
  </UContainer>
</template>
