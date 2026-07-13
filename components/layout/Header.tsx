import Link from "next/link";
import { categories } from "@/lib/categories";
import { getArticlesByCategorySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export default function Header() {
  // 글이 0편인 카테고리는 내비게이션에 노출하지 않는다.
  const visibleCategories = categories.filter(
    (category) => getArticlesByCategorySlug(category.slug).length > 0,
  );
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/apt" className="site-header__logo">
          {siteConfig.name}
        </Link>
        <nav className="site-header__nav" aria-label="주요 메뉴">
          <Link href="/apt/about">소개</Link>
          <Link href="/apt/contact">문의</Link>
          <Link href="/apt/privacy">개인정보처리방침</Link>
          <Link href="/apt/sources">데이터출처</Link>
        </nav>
      </div>

      <div className="site-header__cats">
        <div className="site-header__cats-inner">
          {visibleCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/apt/category/${category.slug}`}
              className="cat-link"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
