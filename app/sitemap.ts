import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteConfig.rootUrl;
  const apt  = siteConfig.url; // https://assetdata.kr/apt

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${root}/`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${apt}/`,             lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${apt}/about`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${apt}/contact`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${apt}/privacy`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${apt}/sources`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${apt}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${apt}/article/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
