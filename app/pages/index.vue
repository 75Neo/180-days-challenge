<script setup lang="ts">
useSeoDefaults({
  title: "180 ngày cai nghiện vibe code",
  description:
    "Mỗi ngày một thử thách: cấu trúc dữ liệu, thuật toán và design patterns từ dễ đến khó, kèm outcome và rubric.",
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

const startSteps = [
  {
    title: "Đọc bài nền tảng",
    desc: "Bắt đầu với Big-O và Thuật toán — mỗi bài khoảng 45 phút, chỉ lý thuyết, không code.",
    icon: "i-lucide-book-open",
    to: "/fundamentals",
    linkLabel: "Xem 11 bài nền tảng",
  },
  {
    title: "Làm Ngày 1",
    desc: "Chủ đề mảng và danh sách. Mỗi ngày chỉ mất 45–60 phút, có bài tập 3 mức và rubric tự chấm.",
    icon: "i-lucide-play",
    to: "/challenges/1.mang-va-danh-sach",
    linkLabel: "Vào Ngày 1",
  },
  {
    title: "Đi theo thứ tự ngày",
    desc: "Độ khó tăng dần từ dễ tới chuyên gia. Mỗi bài ghi rõ cần học trước bài nào, link sẵn để ôn lại.",
    icon: "i-lucide-list-ordered",
    to: "/challenges",
    linkLabel: "Xem 180 ngày",
  },
  {
    title: "Tự đối chiếu và ghi note",
    desc: "Cuối mỗi bài có mục “sau ngày này bạn làm được gì” — web tĩnh không lưu tiến độ, bạn tự đối chiếu và ghi vào note cá nhân.",
    icon: "i-lucide-notebook-pen",
    to: "/challenges",
    linkLabel: "Xem thử thách",
  },
];

const rules = [
  {
    title: "Tự tạo repo riêng",
    desc: "Web này là trang tĩnh, không tài khoản, không lưu tiến độ. Bạn tự lập một repo để lưu code, note và đánh dấu ngày đã xong.",
    icon: "i-lucide-folder-git-2",
  },
  {
    title: "Tự viết note mỗi ngày",
    desc: "Học xong thì diễn đạt lại ý chính bằng lời của mình. Note copy-paste không tính là hiểu.",
    icon: "i-lucide-notebook-pen",
  },
  {
    title: "Tự code bằng tay",
    desc: "Mọi bài tập tự gõ, tự chạy, tự sửa lỗi. Đọc hiểu code người khác không thay được việc tự viết.",
    icon: "i-lucide-keyboard",
  },
  {
    title: "Không dùng AI để code",
    desc: "Cấm paste code do AI viết vào bài làm. Chỉ được hỏi AI khi đã tự thử mà vẫn bí — và vẫn phải tự viết lại.",
    icon: "i-lucide-bot-off",
  },
];

const dayParts = [
  {
    title: "Ôn tiên quyết",
    desc: "Link thẳng tới bài nền tảng cần nhớ trước khi học.",
    icon: "i-lucide-book-open",
  },
  {
    title: "Học trọng tâm",
    desc: "Ý tưởng thuật toán, độ phức tạp, bảng so sánh đánh đổi.",
    icon: "i-lucide-brain",
  },
  {
    title: "Làm bài tập",
    desc: "3 mức từ cơ bản tới thử thách, kèm ví dụ kiểm thử.",
    icon: "i-lucide-pen-line",
  },
  {
    title: "Tự chấm rubric",
    desc: "Bảng điểm chi tiết, biết mình đạt hay chưa.",
    icon: "i-lucide-target",
  },
];

const phases = [
  {
    range: "Ngày 1–21",
    title: "Khởi động",
    desc: "Học mảng, danh sách liên kết, ngăn xếp, hàng đợi, cây, đệ quy, sắp xếp, tìm kiếm, cùng các pattern cơ bản như SOLID, Strategy, Observer. Chốt chặng bằng mini project đo hiệu năng sắp xếp.",
    icon: "i-lucide-sprout",
  },
  {
    range: "Ngày 22–64",
    title: "Nền tảng mở rộng",
    desc: "Học heap, bảng băm, trie, Bloom filter, Union-Find, cache LRU, đồ thị với BFS/DFS/Dijkstra, gom cụm và học máy nhập môn, cùng các pattern Factory, Command, Template.",
    icon: "i-lucide-boxes",
  },
  {
    range: "Ngày 65–118",
    title: "Nâng cao",
    desc: "Học quy hoạch động, tối ưu SA/GA, đồ thị khó, mạng nơ-ron, Transformer, cùng các pattern State, Proxy, MVC và 3 project vận dụng patterns.",
    icon: "i-lucide-brain",
  },
  {
    range: "Ngày 119–125",
    title: "Chuyên gia",
    desc: "Học các chủ đề khó: tìm kiếm tương đồng, đồ thị phẳng, vẽ đồ thị, giải thuật di truyền nâng cao, Interpreter/Visitor và project tổng hợp.",
    icon: "i-lucide-share-2",
  },
  {
    range: "Ngày 126–180",
    title: "Dự án thực tế",
    desc: "Làm app hoàn chỉnh như autocomplete, search engine, rate limiter, pipeline phát hiện gian lận, rồi ôn tập, system design cơ bản và demo day tổng kết.",
    icon: "i-lucide-rocket",
  },
];
</script>

<template>
  <div>
    <!-- Hero: một cột, căn trái -->
    <UContainer class="py-14 md:py-20">
      <UBadge color="primary" variant="soft" class="mb-4">180 ngày cai nghiện vibe code</UBadge>
      <h1 class="max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
        Cai nghiện vibe code, từng ngày một
      </h1>
      <p class="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
        Mỗi ngày một thử thách với outcome rõ ràng và rubric tự chấm. Bớt paste mù, hiểu sâu từng
        dòng mình viết. Không cần cài gì, không cần chọn ngôn ngữ — chỉ ý tưởng thuật toán và kiến
        thức cơ bản.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <UButton
          to="/challenges/1.mang-va-danh-sach"
          icon="i-lucide-play"
          label="Bắt đầu ngày 1"
          size="lg"
        />
        <UButton
          to="/fundamentals"
          color="neutral"
          variant="soft"
          trailing-icon="i-lucide-arrow-right"
          label="Học nền tảng trước"
          size="lg"
        />
      </div>
      <dl class="mt-10 grid max-w-2xl grid-cols-3 gap-4">
        <div class="rounded-xl border border-muted bg-elevated/40 p-4">
          <dt class="text-muted text-xs">Thử thách</dt>
          <dd class="mt-1 text-2xl font-bold tabular-nums">{{ challenges?.length ?? 180 }}</dd>
        </div>
        <div class="rounded-xl border border-muted bg-elevated/40 p-4">
          <dt class="text-muted text-xs">Bài nền tảng</dt>
          <dd class="mt-1 text-2xl font-bold tabular-nums">{{ fundamentals?.length ?? 11 }}</dd>
        </div>
        <div class="rounded-xl border border-muted bg-elevated/40 p-4">
          <dt class="text-muted text-xs">Giờ thực hành</dt>
          <dd class="mt-1 text-2xl font-bold tabular-nums">~{{ totalHours }}</dd>
        </div>
      </dl>
    </UContainer>

    <USeparator />

    <!-- Cách bắt đầu -->
    <UContainer class="py-14">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Cách bắt đầu</p>
      <h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">4 bước vào challenge</h2>
      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <div
          v-for="(s, i) in startSteps"
          :key="s.title"
          class="rounded-xl border border-muted bg-elevated/40 p-5"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary tabular-nums"
            >
              {{ i + 1 }}
            </span>
            <UIcon :name="s.icon" class="size-5 text-primary" />
            <p class="font-semibold">{{ s.title }}</p>
          </div>
          <p class="text-muted mt-3 text-sm leading-relaxed">{{ s.desc }}</p>
          <UButton :to="s.to" variant="link" class="mt-2 px-0" :label="s.linkLabel" trailing-icon="i-lucide-arrow-right" />
        </div>
      </div>
    </UContainer>

    <USeparator />

    <!-- Luật chơi -->
    <UContainer class="py-14">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Luật chơi</p>
      <h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">4 quy tắc bắt buộc</h2>
      <p class="text-muted mt-2 max-w-2xl">
        Challenge này chỉ có tác dụng nếu bạn tự làm thật. Không ai chấm bài cho bạn — repo và
        note của bạn chính là bằng chứng.
      </p>
      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <div
          v-for="(r, i) in rules"
          :key="r.title"
          class="border border-muted bg-elevated/40 p-5"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex size-9 shrink-0 items-center justify-center bg-error/10 font-bold text-error tabular-nums"
            >
              {{ i + 1 }}
            </span>
            <UIcon :name="r.icon" class="size-5 text-error" />
            <p class="font-semibold">{{ r.title }}</p>
          </div>
          <p class="text-muted mt-3 text-sm leading-relaxed">{{ r.desc }}</p>
        </div>
      </div>
    </UContainer>

    <USeparator />

    <!-- Khung mỗi ngày -->
    <UContainer class="py-14">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Phương pháp</p>
      <h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Mỗi ngày học gồm 4 phần</h2>
      <p class="text-muted mt-2 max-w-2xl">
        Mọi bài trong 180 ngày đều theo cùng một khung, để bạn luôn biết mình đang ở đâu.
      </p>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="d in dayParts"
          :key="d.title"
          class="rounded-xl border border-muted bg-elevated/40 p-5"
        >
          <UIcon :name="d.icon" class="size-5 text-primary" />
          <p class="mt-3 font-semibold">{{ d.title }}</p>
          <p class="text-muted mt-1 text-sm leading-relaxed">{{ d.desc }}</p>
        </div>
      </div>
    </UContainer>

    <USeparator />

    <!-- Lộ trình -->
    <UContainer class="py-14">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Lộ trình</p>
      <h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">5 chặng, mỗi chặng học gì</h2>
      <div class="mt-8 space-y-4">
        <NuxtLink
          v-for="(p, i) in phases"
          :key="p.range"
          to="/challenges"
          class="group flex gap-4 rounded-xl border border-muted bg-elevated/40 p-5 transition-colors hover:border-primary/40 hover:bg-elevated"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <UIcon :name="p.icon" class="size-5 text-primary" />
          </span>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-primary tabular-nums">
              Chặng {{ i + 1 }} · {{ p.range }}
            </p>
            <p class="mt-0.5 text-lg font-bold group-hover:text-primary">{{ p.title }}</p>
            <p class="text-muted mt-1 text-sm leading-relaxed">{{ p.desc }}</p>
          </div>
        </NuxtLink>
      </div>
    </UContainer>

    <!-- CTA cuối -->
    <UContainer class="pb-16">
      <div class="rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
        <h2 class="text-xl font-bold tracking-tight md:text-2xl">Sẵn sàng cho ngày đầu tiên?</h2>
        <p class="text-muted mt-2 max-w-2xl text-sm leading-relaxed md:text-base">
          Đọc 2 bài nền tảng về thuật toán và Big-O, rồi làm thử thách mảng và danh sách — khoảng
          45 phút.
        </p>
        <div class="mt-5 flex flex-wrap gap-3">
          <UButton
            to="/challenges/1.mang-va-danh-sach"
            icon="i-lucide-play"
            label="Bắt đầu ngày 1"
          />
          <UButton to="/fundamentals" color="neutral" variant="soft" label="Xem nền tảng" />
        </div>
      </div>
    </UContainer>
  </div>
</template>
