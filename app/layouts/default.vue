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
        <span class="font-display flex items-center gap-2 font-bold tracking-tight">
          <span class="bg-primary text-inverted px-1.5 py-0.5 font-mono text-sm">180</span>
          <span>Days Challenge</span>
        </span>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UContentSearchButton :collapsed="true" />
        <UColorModeButton />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/75Neo/180-days-challenge"
          target="_blank"
          aria-label="GitHub"
        />
        <UButton
          to="/challenges/1.mang-va-danh-sach"
          icon="i-lucide-play"
          label="Bắt đầu"
          class="hidden sm:inline-flex"
        />
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
          180 Days Challenge. 180 ngày cai nghiện vibe code.
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
