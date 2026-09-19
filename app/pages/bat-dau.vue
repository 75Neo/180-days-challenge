<script setup lang="ts">
const { data: page } = await useAsyncData("guide-start", () =>
  queryCollection("guides").path("/guides/bat-dau").first(),
);

useSeoDefaults({
  title: computed(() => page.value?.title ?? "Cách bắt đầu"),
  description: computed(() => page.value?.description ?? null),
  path: "/bat-dau",
  type: "article",
});
</script>

<template>
  <UContainer>
    <UPage v-if="page">
      <UPageHeader :title="page.title" :description="page.description">
        <template #headline>
          <UBreadcrumb :items="[{ label: 'Trang chủ', to: '/' }, { label: 'Cách bắt đầu' }]" />
        </template>
      </UPageHeader>

      <UPageBody>
        <ContentRenderer :value="page" />
      </UPageBody>

      <template v-if="page.body?.toc?.links?.length" #right>
        <UContentToc :links="page.body.toc.links" title="Trong bài này" highlight />
      </template>
    </UPage>
  </UContainer>
</template>
