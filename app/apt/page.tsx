import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { articles, getArticlesByCategorySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/apt" },
};

export default function AptHomePage() {
  // 글이 0편인 카테고리는 홈 카드에서 제외한다(빈 페이지로 이동 방지).
  const visibleCategories = categories.filter(
    (category) => getArticlesByCategorySlug(category.slug).length > 0,
  );
  return (
    <main className="container">
      <section className="hero">
        <p className="hero__label">데이터 기반 부동산 분석 블로그</p>
        <h1>{siteConfig.name}</h1>
        <p className="hero__desc">{siteConfig.description}</p>
      </section>

      <section style={{ marginBottom: "52px" }}>
        <h2 className="section-title">주제별 분석</h2>
        <div className="cat-grid">
          {visibleCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/apt/category/${category.slug}`}
              className="cat-card"
            >
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 className="section-title">최신 분석 글</h2>
        <div style={{ display: "grid", gap: "14px" }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/apt/article/${article.slug}`}
              className="card"
            >
              <div className="card__meta">
                <span className="card__tag">{article.district.replace("서울 ", "")}</span>
                <span>·</span>
                <span>{article.publishedAt}</span>
              </div>
              <p className="card__title">{article.title}</p>
              <p className="card__summary">{article.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
