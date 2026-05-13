import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { getRelatedSlugs } from "@/lib/related";
import { markdownToHtml } from "@/lib/markdown";
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
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: `${siteConfig.url}/article/${slug}`,
      siteName: siteConfig.name,
      locale: "ko_KR",
      publishedTime: article.publishedAt,
    },
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

  const bodyHtml = markdownToHtml(article.body);

  return (
    <div className="article-outer">
      <div className="article-header">
        <div className="article-header__meta">
          {category && (
            <>
              <span className="card__tag">{category.name}</span>
              <span className="dot">·</span>
            </>
          )}
          <span>{article.district}</span>
          <span className="dot">·</span>
          <span>{article.publishedAt}</span>
        </div>
        <h1>{article.title}</h1>
        <p className="article-header__summary">{article.summary}</p>
      </div>

      <div className="article-grid">
        <main>
          <div className="ad-zone ad-zone--leaderboard">
            {/* AdSense 인아티클 광고 */}
          </div>

          <article className="prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

          <div className="ad-zone ad-zone--bottom">
            {/* AdSense 디스플레이 광고 */}
          </div>

          {relatedArticles.length > 0 && (
            <div className="related-articles">
              <h2>관련 글</h2>
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/apt/article/${related.slug}`} className="related-card">
                  <p className="related-card__meta">{related.district} · {related.publishedAt}</p>
                  <p className="related-card__title">{related.title}</p>
                </Link>
              ))}
            </div>
          )}

          <div style={{ marginTop: "40px" }}>
            <Link href="/apt" style={{ color: "var(--accent)", fontSize: "15px" }}>
              ← 홈으로 돌아가기
            </Link>
          </div>
        </main>

        <aside className="ad-sidebar">
          <div className="ad-zone">{/* AdSense 300×250 */}</div>
          <div className="ad-zone">{/* AdSense 300×600 */}</div>
        </aside>
      </div>
    </div>
  );
}
