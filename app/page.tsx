import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getArticlesByCategorySlug } from "@/lib/articles";
import { categories, getCategoryBySlug } from "@/lib/categories";

export const metadata: Metadata = {
  title: "AssetData — 자산 데이터 분석 블로그",
  description: "AssetData는 자산 데이터 분석 블로그이며, 부동산 분석은 집보는 시선 이름으로 발행합니다.",
  alternates: { canonical: "/" },
};

const latestArticles = getAllArticles().slice(0, 8);

export default function RootPage() {
  const visibleCategories = categories.filter(
    (category) => getArticlesByCategorySlug(category.slug).length > 0,
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "inherit" }}>
      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "0 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <span style={{ fontSize: "20px", fontWeight: 800, color: "#111", letterSpacing: "-0.3px" }}>
            AssetData
          </span>
          <nav style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
            <Link href="/apt" style={{ fontSize: "14px", color: "#555", textDecoration: "none" }}>부동산 분석</Link>
            <span style={{ fontSize: "13px", color: "#888", fontWeight: 600 }}>주식 준비 중</span>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px 80px" }}>
        <section style={{ padding: "72px 0 28px" }}>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "12px", fontWeight: 500 }}>
            데이터 기반 자산 분석
          </p>
          <h1 style={{ fontSize: "38px", fontWeight: 800, color: "#111", marginBottom: "16px", lineHeight: 1.25, wordBreak: "keep-all" }}>
            자산 시장을 읽는 데 필요한 숫자와 맥락을
            <br />
            직접 정리합니다
          </h1>
          <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.75, maxWidth: "620px" }}>
            AssetData는 실거래가, 입지, 정책, 시장 데이터를 함께 보고 해석하는 자산 데이터 분석 블로그입니다.
            공개 데이터의 한계와 가공 기준을 함께 밝히며, 판단에 필요한 배경까지 설명합니다.
          </p>
        </section>

        <section style={{ marginBottom: "56px", padding: "24px", border: "1px solid #e5e7eb", borderRadius: "16px", background: "#f8f9fa" }}>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.75, margin: 0 }}>
            AssetData는 자산 데이터 분석 블로그이며, 부동산 분석은 <strong style={{ color: "#111" }}>&apos;집보는 시선&apos;</strong> 이름으로 발행합니다.
            루트 페이지에서는 전체 브랜드를 소개하고, 실제 부동산 콘텐츠는 <Link href="/apt">/apt</Link> 아래에서 제공합니다.
          </p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "18px", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#111" }}>최신 분석 글</h2>
            <Link href="/apt" style={{ fontSize: "14px", fontWeight: 600, color: "#1558d6", textDecoration: "none" }}>
              부동산 섹션 보기
            </Link>
          </div>
          <div style={{ display: "grid", gap: "14px" }}>
            {latestArticles.map((article) => {
              const category = getCategoryBySlug(article.categorySlug);
              return (
                <Link
                  key={article.slug}
                  href={`/apt/article/${article.slug}`}
                  className="card"
                >
                  <div className="card__meta">
                    {category && <span className="card__tag">{category.name}</span>}
                    <span>·</span>
                    <span>{article.publishedAt}</span>
                  </div>
                  <p className="card__title">{article.title}</p>
                  <p className="card__summary">
                    {article.summary || "요약 정보 준비 중"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#111", marginBottom: "18px" }}>카테고리</h2>
          <div className="cat-grid">
            {visibleCategories.slice(0, 6).map((category) => (
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

        <section style={{ marginBottom: "40px", padding: "28px 24px", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#111", marginBottom: "14px" }}>글이 만들어지는 방식</h2>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.75, marginBottom: "10px" }}>
            공개 데이터 수집, 가공, 초안 작성, 사람 검수, 발행·정정의 순서로 글을 만듭니다.
            반복 정리 작업에는 자체 데이터 파이프라인과 자동화를 활용하지만, 발행 전에는 사람이 수치와
            사실관계를 다시 확인합니다.
          </p>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.75, margin: 0 }}>
            운영 방식과 정정 원칙은 <Link href="/apt/about">소개 페이지</Link>에서 자세히 안내합니다.
          </p>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid #e5e7eb", background: "#f8f9fa", padding: "28px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "12px 18px", flexWrap: "wrap", marginBottom: "14px" }}>
            <Link href="/apt/about" style={{ fontSize: "14px", color: "#555", textDecoration: "none" }}>소개</Link>
            <Link href="/apt/contact" style={{ fontSize: "14px", color: "#555", textDecoration: "none" }}>문의</Link>
            <Link href="/apt/privacy" style={{ fontSize: "14px", color: "#555", textDecoration: "none" }}>개인정보처리방침</Link>
            <Link href="/apt/sources" style={{ fontSize: "14px", color: "#555", textDecoration: "none" }}>데이터 출처</Link>
          </div>
          <p style={{ fontSize: "13px", color: "#aaa", margin: 0 }}>
            © 2026 AssetData. 본 사이트의 콘텐츠는 투자 권유가 아닌 정보 제공 목적입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
