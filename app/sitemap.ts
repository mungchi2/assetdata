import type { MetadataRoute } from "next";
import { getAllArticles, getArticlesByCategorySlug } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteConfig.rootUrl;
  const apt  = siteConfig.url; // https://assetdata.kr/apt

  // 실제 콘텐츠 수정일을 lastmod로 쓴다. 매 배포마다 new Date()로 갱신하면 변경되지
  // 않은 정적 페이지의 lastmod까지 흔들려 크롤러 신뢰도가 떨어진다.
  // 홈/루트는 글이 추가되면 갱신되므로 최신 글 발행일을 쓰고, 정적 신뢰 페이지는
  // 실제 마지막 개정일 상수를 쓴다(배포 시각과 분리).
  const allArticles = getAllArticles();
  const latestArticleDate = allArticles.reduce<Date>((acc, article) => {
    const d = new Date(article.publishedAt);
    return Number.isNaN(d.getTime()) || d <= acc ? acc : d;
  }, new Date(0));
  const homeLastMod = latestArticleDate.getTime() > 0 ? latestArticleDate : new Date();
  const STATIC_LASTMOD = new Date("2026-07-15"); // 정적 신뢰 페이지 마지막 개정일

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${root}/`,            lastModified: homeLastMod,    changeFrequency: "weekly",  priority: 1.0 },
    { url: `${apt}/`,             lastModified: homeLastMod,    changeFrequency: "daily",   priority: 0.9 },
    { url: `${apt}/about`,        lastModified: STATIC_LASTMOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${apt}/contact`,      lastModified: STATIC_LASTMOD, changeFrequency: "monthly", priority: 0.5 },
    { url: `${apt}/privacy`,      lastModified: STATIC_LASTMOD, changeFrequency: "monthly", priority: 0.4 },
    { url: `${apt}/sources`,      lastModified: STATIC_LASTMOD, changeFrequency: "monthly", priority: 0.4 },
  ];

  // 글이 0편인 카테고리는 sitemap에서 제외한다(빈 색인 페이지 방지).
  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((cat) => getArticlesByCategorySlug(cat.slug).length > 0)
    .map((cat) => ({
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
