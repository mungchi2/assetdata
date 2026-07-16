import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategorySlug } from "@/lib/articles";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  // 글이 0편인 카테고리는 색인 대상에서 제외한다(빈 페이지 노출 방지).
  const isEmpty = getArticlesByCategorySlug(category.slug).length === 0;
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/apt/category/${slug}` },
    openGraph: { title: category.name, description: category.description, locale: "ko_KR" },
    ...(isEmpty ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategorySlug(category.slug);

  return (
    <main className="container" style={{ padding: "40px 20px 72px" }}>
      <p className="page-label">카테고리</p>
      <h1 style={{ fontSize: "30px", marginBottom: "10px", wordBreak: "keep-all" }}>
        {category.name}
      </h1>
      <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "600px" }}>
        {category.description}
      </p>

      {categoryArticles.length === 0 ? (
        <p style={{ color: "var(--text-light)", fontSize: "15px" }}>
          아직 등록된 글이 없습니다. 곧 새 글이 업로드될 예정입니다.
        </p>
      ) : (
        <div style={{ display: "grid", gap: "14px" }}>
          {categoryArticles.map((article) => (
            <Link key={article.slug} href={`/apt/article/${article.slug}`} className="card">
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
      )}
    </main>
  );
}
