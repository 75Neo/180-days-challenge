export function useSiteUrl(): string {
  const config = useRuntimeConfig();
  return (config.public.siteUrl as string) || "https://180-days-challenge.vercel.app";
}

export function useSeoDefaults(page: {
  title: MaybeRef<string>;
  description?: MaybeRef<string | null | undefined>;
  path: MaybeRef<string>;
  type?: "website" | "article";
  publishedTime?: MaybeRef<string | null | undefined>;
}) {
  const siteUrl = useSiteUrl();
  const url = `${siteUrl}${page.path}`;
  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
    description: page.description ?? undefined,
    ogDescription: page.description ?? undefined,
    ogUrl: url,
    ogType: page.type ?? "website",
    ogLocale: "vi_VN",
    twitterCard: "summary",
    twitterTitle: page.title,
    twitterDescription: page.description ?? undefined,
    articlePublishedTime: page.publishedTime ?? undefined,
  });
  useHead({ link: [{ rel: "canonical", href: url }] });
}
