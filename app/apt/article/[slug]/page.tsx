import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleRenderer from "@/components/article/ArticleRenderer";
import { getArticleBySlug, getAllArticles, getFirstImageUrl, safeDecodeSlug } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { getRelatedSlugs } from "@/lib/related";
import { siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const canonicalSlug = safeDecodeSlug(slug);
  const url = `${siteConfig.url}/article/${canonicalSlug}`;
  const image = getFirstImageUrl(article.body);
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/apt/article/${canonicalSlug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url,
      siteName: siteConfig.name,
      locale: "ko_KR",
      publishedTime: article.publishedAt,
      ...(image ? { images: [image] } : {}),
    },
    ...(image
      ? {
          twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.summary,
            images: [image],
          },
        }
      : {}),
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.categorySlug);
  const relatedSlugs = getRelatedSlugs(slug);
  const relatedArticles = relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a) => a !== null);

  const articleUrl = `${siteConfig.url}/article/${safeDecodeSlug(slug)}`;
  const image = getFirstImageUrl(article.body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    ...(image ? { image } : {}),
    datePublished: article.publishedAt,
    inLanguage: "ko-KR",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    isPartOf: {
      "@type": "Blog",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleRenderer
        article={article}
        categoryName={category?.name}
        relatedArticles={relatedArticles}
        backHref="/apt"
        backLabel="홈으로 돌아가기"
      />
    </>
  );
}
