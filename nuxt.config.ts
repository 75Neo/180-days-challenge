import { readFileSync } from "node:fs";

function contentUrls(): string[] {
  try {
    const cur = JSON.parse(readFileSync("curriculum.json", "utf-8"));
    const urls = ["/", "/challenges", "/fundamentals"];
    for (const d of cur.challenges ?? []) urls.push(`/challenges/${d.day}.${d.slug}`);
    for (const slug of cur.fundamentals ?? []) urls.push(`/fundamentals/${slug}`);
    return urls;
  } catch {
    return ["/", "/challenges", "/fundamentals"];
  }
}

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  appConfig: {
    ui: {
      colors: {
        primary: "pink",
        secondary: "sky",
        neutral: "stone",
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://180-days-challenge.vercel.app",
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://180-days-challenge.vercel.app",
    name: "180 Days Challenge",
    description:
      "180 ngày làm chủ thuật toán, cấu trúc dữ liệu và design patterns bằng tiếng Việt.",
    defaultLocale: "vi",
  },
  sitemap: {
    urls: contentUrls(),
  },
  content: {
    experimental: { sqliteConnector: "native" },
    build: {
      markdown: {
        remarkPlugins: { "remark-math": {} },
        rehypePlugins: { "rehype-katex": { strict: false } },
      },
    },
  },
});
