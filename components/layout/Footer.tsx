import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p>{siteConfig.name}</p>
          <p>아파트 실거래가·건축물 정보·입지 데이터를 함께 분석하는 부동산 블로그</p>
        </div>
        <nav className="site-footer__nav" aria-label="푸터 메뉴">
          <Link href="/apt/about">소개</Link>
          <Link href="/apt/contact">문의</Link>
          <Link href="/apt/privacy">개인정보처리방침</Link>
          <Link href="/apt/sources">데이터출처</Link>
        </nav>
      </div>
      <div className="container">
        <p className="site-footer__copy">
          © 2026 {siteConfig.name}. All rights reserved. 본 블로그의 콘텐츠는 투자 권유가 아닌 정보 제공 목적입니다.
        </p>
      </div>
    </footer>
  );
}
