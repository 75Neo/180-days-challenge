<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "vi" },
  titleTemplate: (title) => (title ? `${title} · 180 Days Challenge` : "180 Days Challenge"),
});

const { data: navigation } = await useAsyncData("search-navigation", async () => [
  ...(await queryCollectionNavigation("fundamentals")),
  ...(await queryCollectionNavigation("challenges", ["day"]).order("day", "ASC")),
]);
const { data: files } = useLazyAsyncData(
  "search-files",
  async () => [
    ...(await queryCollectionSearchSections("fundamentals")),
    ...(await queryCollectionSearchSections("challenges")),
  ],
  { server: false },
);
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        placeholder="Tìm ngày học, chủ đề, thuật toán..."
      />
    </ClientOnly>
  </UApp>
</template>
