import Link from "next/link";
import type { ArticleWithBody } from "@/lib/articles";
import { markdownToHtml } from "@/lib/markdown";

type RelatedArticle = Pick<ArticleWithBody, "slug" | "district" | "publishedAt" | "title">;

type ArticleRendererProps = {
  article: ArticleWithBody;
  categoryName?: string;
  relatedArticles?: RelatedArticle[];
  backHref?: string;
  backLabel?: string;
};

export default function ArticleRenderer({
  article,
  categoryName,
  relatedArticles = [],
  backHref = "/apt",
  backLabel = "홈으로 돌아가기",
}: ArticleRendererProps) {
  const bodyHtml = markdownToHtml(article.body);

  return (
    <div className="article-outer">
      <div className="article-header">
        <div className="article-header__meta">
          {categoryName && (
            <>
              <span className="card__tag">{categoryName}</span>
              <span className="dot">·</span>
            </>
          )}
          {article.district && (
            <>
              <span>{article.district}</span>
              <span className="dot">·</span>
            </>
          )}
          <span>{article.publishedAt || "발행일 미정"}</span>
        </div>
        <h1>{article.title}</h1>
        {article.summary && <p className="article-header__summary">{article.summary}</p>}
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
                  <p className="related-card__meta">
                    {related.district} · {related.publishedAt}
                  </p>
                  <p className="related-card__title">{related.title}</p>
                </Link>
              ))}
            </div>
          )}

          {backHref && (
            <div style={{ marginTop: "40px" }}>
              <Link href={backHref} style={{ color: "var(--accent)", fontSize: "15px" }}>
                ← {backLabel}
              </Link>
            </div>
          )}
        </main>

        <aside className="ad-sidebar">
          <div className="ad-zone">{/* AdSense 300×250 */}</div>
          <div className="ad-zone">{/* AdSense 300×600 */}</div>
        </aside>
      </div>
    </div>
  );
}
