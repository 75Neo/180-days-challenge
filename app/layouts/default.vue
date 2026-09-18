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
          180 Days Challenge — học thuật toán, cấu trúc dữ liệu và design patterns bằng tiếng Việt.
        </p>
      </template>
      <template #right>
        <p class="text-muted text-sm">
          Nội dung được biên soạn cho người tự học thuật toán bằng tiếng Việt.
        </p>
      </template>
    </UFooter>
  </div>
</template>
