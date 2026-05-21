import type { MetadataRoute } from "next";
import { menuKategoriar } from "@/content/meny";
import { aktivitetar } from "@/content/aktivitetar";
import { selskapTypar } from "@/content/selskap";
import { faqKategoriar } from "@/content/faq";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/meny`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/aktivitetar`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/selskap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const menyRoutes: MetadataRoute.Sitemap = menuKategoriar.map((k) => ({
    url: `${BASE}/meny/${k.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const aktivitetarRoutes: MetadataRoute.Sitemap = aktivitetar.map((a) => ({
    url: `${BASE}/aktivitetar/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const selskapRoutes: MetadataRoute.Sitemap = selskapTypar.map((t) => ({
    url: `${BASE}/selskap/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const faqKategoriRoutes: MetadataRoute.Sitemap = faqKategoriar.map((k) => ({
    url: `${BASE}/faq/${k.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const faqSporsmalRoutes: MetadataRoute.Sitemap = faqKategoriar.flatMap((k) =>
    k.questions.map((q) => ({
      url: `${BASE}/faq/${k.slug}/${q.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    }))
  );

  return [
    ...staticRoutes,
    ...menyRoutes,
    ...aktivitetarRoutes,
    ...selskapRoutes,
    ...faqKategoriRoutes,
    ...faqSporsmalRoutes,
  ];
}
