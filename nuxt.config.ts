import { readFileSync } from "node:fs";

function contentUrls(): string[] {
  try {
    const cur = JSON.parse(readFileSync("curriculum.json", "utf-8"));
    const urls = ["/", "/challenges", "/fundamentals", "/bat-dau"];
    for (const d of cur.challenges ?? []) urls.push(`/challenges/${d.day}.${d.slug}`);
    for (const slug of cur.fundamentals ?? []) urls.push(`/fundamentals/${slug}`);
    return urls;
  } catch {
    return ["/", "/challenges", "/fundamentals", "/bat-dau"];
  }
}

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      subsets: ["latin", "latin-ext", "vietnamese"],
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
      "180 ngày cai nghiện vibe code: mỗi ngày một thử thách coding nhỏ để hiểu thật thứ mình viết.",
    defaultLocale: "vi",
  },
  sitemap: {
    urls: contentUrls(),
  },
  content: {
    experimental: { sqliteConnector: "native" },
    build: {
      markdown: {
        // material-theme-lighter (mặc định của Nuxt UI) quá nhạt trên nền sáng
        highlight: {
          theme: { light: "github-light", default: "github-light", dark: "github-dark" },
        },
        remarkPlugins: { "remark-math": {} },
        rehypePlugins: { "rehype-katex": { strict: false } },
      },
    },
  },
});
