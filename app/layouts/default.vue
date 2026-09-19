<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  { label: "Trang chủ", to: "/" },
  { label: "Thử thách", to: "/challenges" },
  { label: "Nền tảng", to: "/fundamentals" },
]);
</script>

<template>
  <div>
    <UHeader>
      <template #title>
        <span class="font-bold">180 Days Challenge</span>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com"
          target="_blank"
          aria-label="GitHub"
        />
        <UButton to="/challenges/1.mang-va-danh-sach" icon="i-lucide-play" label="Bắt đầu" />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          180 Days Challenge — 180 ngày cai nghiện vibe code.
        </p>
      </template>
      <template #right>
        <p class="text-muted text-sm">
          Bớt paste mù, hiểu sâu từng dòng mình viết.
        </p>
      </template>
    </UFooter>
  </div>
</template>
