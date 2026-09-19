<script setup lang="ts">
useSeoDefaults({
  title: "180 ngày cai nghiện vibe code",
  description:
    "Mỗi ngày một thử thách: cấu trúc dữ liệu, thuật toán và design patterns từ dễ đến khó, kèm đặc tả bài tập và tiêu chí hoàn thành.",
  path: "/",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "180 Days Challenge",
        description:
          "180 ngày cai nghiện vibe code: mỗi ngày một thử thách nhỏ để hiểu thật thứ mình viết.",
        inLanguage: "vi",
        provider: { "@type": "Organization", name: "180 Days Challenge" },
      }),
    },
  ],
});

const { data: challenges } = await useAsyncData("landing-challenges", () =>
  queryCollection("challenges").order("day", "ASC").all(),
);
const { data: fundamentals } = await useAsyncData("landing-fundamentals", () =>
  queryCollection("fundamentals").all(),
);

const totalHours = computed(() => {
  const sum = ((challenges.value ?? []) as Record<string, unknown>[]).reduce(
    (s, c) => s + (Number(c.estimatedMinutes) || 0),
    0,
  );
  return Math.round(sum / 60);
});

const rules = [
  {
    title: "Tự tạo repo riêng",
    desc: "Web tĩnh, không tài khoản, không lưu tiến độ. Repo của bạn giữ code, note và dấu ngày đã xong.",
    icon: "i-lucide-folder-git-2",
    to: "/bat-dau",
  },
  {
    title: "Tự viết note mỗi ngày",
    desc: "Học xong thì diễn đạt lại ý chính bằng lời của mình. Note copy-paste không tính là hiểu.",
    icon: "i-lucide-notebook-pen",
  },
  {
    title: "Tự code bằng tay",
    desc: "Mọi bài tập tự gõ, tự chạy, tự sửa lỗi. Đọc code người khác không thay được việc tự viết.",
    icon: "i-lucide-keyboard",
  },
  {
    title: "Không dùng AI để code",
    desc: "Không paste code AI vào bài làm. Bí thật thì hỏi ý tưởng, rồi tự viết lại từ đầu.",
    icon: "i-lucide-bot-off",
  },
];

const dayParts = [
  {
    title: "Ôn tiên quyết",
    desc: "Link thẳng tới bài nền tảng cần nhớ.",
    icon: "i-lucide-book-open",
  },
  { title: "Học trọng tâm", desc: "Ý tưởng, độ phức tạp, bảng đánh đổi.", icon: "i-lucide-brain" },
  {
    title: "Làm bài tập",
    desc: "Đặc tả hàm, ràng buộc, test mẫu. Từ cơ bản tới nâng cao.",
    icon: "i-lucide-code-xml",
  },
  {
    title: "Tự kiểm tra",
    desc: "Checklist tiêu chí hoàn thành và câu hỏi ôn tập.",
    icon: "i-lucide-list-checks",
  },
];

const day1Api = [
  ["da_init(a, cap)", "O(1)"],
  ["da_push(a, x)", "O(1)*"],
  ["da_insert(a, i, x)", "O(n)"],
  ["da_erase(a, i)", "O(n)"],
  ["da_get(a, i, &out)", "O(1)"],
  ["da_destroy(a)", "O(1)"],
];
</script>

<template>
  <div>
    <UContainer class="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <UBadge color="primary" variant="soft" class="mb-5">180 ngày cai nghiện vibe code</UBadge>
        <h1
          class="text-highlighted max-w-xl text-4xl leading-[1.15] font-bold tracking-tight text-balance md:text-5xl lg:text-6xl"
        >
          Tự viết từng dòng. Hiểu từng dòng.
        </h1>
        <p class="text-muted mt-5 max-w-lg text-lg leading-relaxed">
          Mỗi ngày một bài: cấu trúc dữ liệu, thuật toán, design pattern. Đề rõ, test rõ, tự code
          bằng tay.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <UButton
            to="/challenges/1.mang-va-danh-sach"
            icon="i-lucide-play"
            label="Bắt đầu ngày 1"
            size="xl"
          />
          <UButton
            to="/fundamentals"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            label="Đọc nền tảng"
            size="xl"
          />
        </div>
      </div>

      <NuxtLink
        to="/challenges/1.mang-va-danh-sach#bài-tập"
        class="group border-default bg-elevated/40 hover:border-primary/60 block border transition-colors"
        aria-label="Xem bài tập ngày 1"
      >
        <div class="border-default flex items-center justify-between border-b px-5 py-3">
          <p class="font-display text-sm font-semibold">
            <span class="text-primary font-mono">001</span>
            <span class="text-muted"> / </span>
            Dynamic Array bằng C
          </p>
          <UBadge color="success" variant="subtle" size="sm">Dễ</UBadge>
        </div>
        <div class="px-5 py-4">
          <p class="text-muted mb-3 text-xs">Bài 1: cài đặt đủ API, không leak, không crash.</p>
          <ul class="font-mono text-sm">
            <li v-for="[fn, big] in day1Api" :key="fn" class="flex justify-between gap-4 py-1.5">
              <span class="text-highlighted">{{ fn }}</span>
              <span class="text-primary tabular-nums">{{ big }}</span>
            </li>
          </ul>
        </div>
        <p
          class="border-default text-muted group-hover:text-primary flex items-center gap-1.5 border-t px-5 py-3 text-sm transition-colors"
        >
          Xem đề đầy đủ <UIcon name="i-lucide-arrow-right" class="size-4" />
        </p>
      </NuxtLink>
    </UContainer>

    <div class="border-default bg-elevated/30 border-y">
      <UContainer>
        <dl class="grid grid-cols-3 divide-x divide-(--ui-border)">
          <div class="py-6 pr-4">
            <dt class="text-muted text-xs md:text-sm">Thử thách</dt>
            <dd class="text-highlighted mt-1 font-mono text-2xl font-bold tabular-nums md:text-4xl">
              {{ challenges?.length ?? 180 }}
            </dd>
          </div>
          <div class="px-4 py-6">
            <dt class="text-muted text-xs md:text-sm">Bài nền tảng</dt>
            <dd class="text-highlighted mt-1 font-mono text-2xl font-bold tabular-nums md:text-4xl">
              {{ fundamentals?.length ?? 11 }}
            </dd>
          </div>
          <div class="py-6 pl-4">
            <dt class="text-muted text-xs md:text-sm">Giờ thực hành</dt>
            <dd class="text-highlighted mt-1 font-mono text-2xl font-bold tabular-nums md:text-4xl">
              ~{{ totalHours }}
            </dd>
          </div>
        </dl>
      </UContainer>
    </div>

    <UContainer class="py-16 md:py-24">
      <h2 class="text-highlighted text-3xl font-bold tracking-tight md:text-4xl">4 luật chơi</h2>
      <p class="text-muted mt-3 max-w-2xl text-lg">
        Không ai chấm bài cho bạn. Repo và note của bạn là bằng chứng.
      </p>
      <ol class="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
        <li v-for="(r, i) in rules" :key="r.title" class="flex gap-5">
          <span class="text-primary font-mono text-4xl leading-none font-bold tabular-nums">
            {{ i + 1 }}
          </span>
          <div>
            <p class="font-display text-highlighted flex items-center gap-2 text-lg font-semibold">
              {{ r.title }}
              <UIcon :name="r.icon" class="text-muted size-4" />
            </p>
            <p class="text-muted mt-1.5 leading-relaxed">{{ r.desc }}</p>
            <ULink v-if="r.to" :to="r.to" class="mt-2 inline-flex items-center gap-1 text-sm">
              Xem cách bắt đầu <UIcon name="i-lucide-arrow-right" class="size-3" />
            </ULink>
          </div>
        </li>
      </ol>
    </UContainer>

    <div class="bg-elevated/40 border-default border-y">
      <UContainer class="py-16 md:py-20">
        <h2 class="text-highlighted text-3xl font-bold tracking-tight md:text-4xl">
          Một ngày học, 45-60 phút
        </h2>
        <ol class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <li
            v-for="(d, i) in dayParts"
            :key="d.title"
            class="lg:border-default relative lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <span class="bg-primary text-inverted inline-flex size-10 items-center justify-center">
              <UIcon :name="d.icon" class="size-5" />
            </span>
            <p class="font-display text-highlighted mt-4 font-semibold">
              <span class="text-muted font-mono text-sm">{{ i + 1 }}.</span> {{ d.title }}
            </p>
            <p class="text-muted mt-1 text-sm leading-relaxed">{{ d.desc }}</p>
          </li>
        </ol>
      </UContainer>
    </div>

    <UContainer class="py-16 md:py-24">
      <h2 class="text-highlighted text-3xl font-bold tracking-tight md:text-4xl">
        Lộ trình 5 chặng
      </h2>
      <p class="text-muted mt-3 max-w-2xl text-lg">
        Độ khó tăng dần. Bấm một chặng để xem các ngày.
      </p>
      <ol class="border-default mt-10 border-l-2">
        <li v-for="(p, i) in phases" :key="p.title" class="relative pb-2 pl-8 last:pb-0">
          <span class="bg-primary absolute top-6 -left-[7px] size-3" aria-hidden="true" />
          <NuxtLink
            :to="`/challenges?phase=${i}`"
            class="group hover:bg-elevated/60 grid gap-2 p-4 transition-colors md:grid-cols-[180px_1fr]"
          >
            <div>
              <p class="text-primary font-mono text-sm tabular-nums">
                Ngày {{ p.from }}-{{ p.to }}
              </p>
              <p class="font-display text-highlighted group-hover:text-primary mt-0.5 text-xl font-bold">
                {{ p.title }}
              </p>
            </div>
            <p class="text-muted leading-relaxed">{{ p.desc }}</p>
          </NuxtLink>
        </li>
      </ol>
    </UContainer>

    <UContainer class="pb-20">
      <div
        class="border-primary/30 bg-primary/5 flex flex-col items-start justify-between gap-6 border p-8 md:flex-row md:items-center md:p-10"
      >
        <div>
          <h2 class="text-highlighted text-2xl font-bold tracking-tight md:text-3xl">
            Sẵn sàng cho ngày đầu tiên?
          </h2>
          <p class="text-muted mt-2 max-w-xl">
            Ôn Big-O, mở editor, tự cài đặt Dynamic Array bằng C. Khoảng 60 phút.
          </p>
        </div>
        <UButton
          to="/challenges/1.mang-va-danh-sach"
          icon="i-lucide-play"
          label="Bắt đầu ngày 1"
          size="xl"
        />
      </div>
    </UContainer>
  </div>
</template>
