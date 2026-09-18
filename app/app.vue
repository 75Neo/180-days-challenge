<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "vi" },
  titleTemplate: (title) => (title ? `${title} · 180 Days Challenge` : "180 Days Challenge"),
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
