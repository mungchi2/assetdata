import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "주식보는 시선 — 준비중",
  description: "실적, 밸류에이션, 수급 데이터를 함께 보는 주식 분석 콘텐츠를 준비하고 있습니다.",
  robots: { index: false, follow: false },
};

export default function StockPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "0 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: 800, color: "#111", textDecoration: "none" }}>
            AssetData
          </Link>
          <Link href="/apt" style={{ fontSize: "14px", color: "#1558d6", textDecoration: "none" }}>
            부동산 분석 →
          </Link>
        </div>
      </header>

      <main style={{ flex: 1, maxWidth: "960px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "24px" }}>📈</div>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#111", marginBottom: "16px" }}>
          주식보는 시선
        </h1>
        <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 32px" }}>
          실적, 밸류에이션, 수급 데이터를 함께 보는 주식 분석 콘텐츠를 준비하고 있습니다.
          곧 찾아오겠습니다.
        </p>
        <Link
          href="/apt"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#1558d6",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          부동산 분석 먼저 보기
        </Link>
      </main>

      <footer style={{ borderTop: "1px solid #e5e7eb", background: "#f8f9fa", padding: "24px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", color: "#aaa", margin: 0 }}>
            © 2026 AssetData. 본 사이트의 콘텐츠는 투자 권유가 아닌 정보 제공 목적입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
