import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AssetData — 부동산·주식 데이터 분석",
  description: "실거래가, 입지 데이터, 주식 정보를 직접 해석하는 자산 데이터 분석 블로그",
};

export default function RootPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "inherit" }}>
      {/* 심플 헤더 */}
      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "0 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", height: "60px", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: 800, color: "#111", letterSpacing: "-0.3px" }}>
            AssetData
          </span>
        </div>
      </header>

      {/* 히어로 */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "72px 20px 60px" }}>
        <p style={{ fontSize: "13px", color: "#888", marginBottom: "12px", fontWeight: 500 }}>
          데이터 기반 자산 분석
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: 800, color: "#111", marginBottom: "16px", lineHeight: 1.25, wordBreak: "keep-all" }}>
          부동산과 주식,<br />데이터로 직접 읽습니다
        </h1>
        <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.75, maxWidth: "540px" }}>
          실거래가, 입지 정보, 시장 데이터를 함께 보고 가격 차이의 이유를 쉽게 설명합니다.
          숫자를 나열하는 것이 아니라, 직접 해석하고 정리합니다.
        </p>
      </section>

      {/* 섹션 카드 */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>

          {/* 부동산 */}
          <Link
            href="/apt"
            style={{
              display: "block",
              padding: "32px",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              textDecoration: "none",
              color: "inherit",
              transition: "border-color 0.15s, box-shadow 0.15s",
            }}
            className="card"
          >
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>🏢</div>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>
              집보는 시선
            </h2>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "4px", fontWeight: 500 }}>
              부동산 분석
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.65, margin: "12px 0 0" }}>
              실거래가·건축물대장·입지 데이터를 함께 보고 아파트 가격 차이의 이유를 설명합니다.
            </p>
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#1558d6", fontWeight: 600 }}>
              바로가기 →
            </p>
          </Link>

          {/* 주식 (준비중) */}
          <div
            style={{
              display: "block",
              padding: "32px",
              border: "1px dashed #d1d5db",
              borderRadius: "16px",
              background: "#fafafa",
              opacity: 0.75,
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>📈</div>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>
              주식보는 시선
            </h2>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "4px", fontWeight: 500 }}>
              주식 분석 · 준비중
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.65, margin: "12px 0 0" }}>
              실적, 밸류에이션, 수급 데이터를 함께 보는 주식 분석 콘텐츠를 준비하고 있습니다.
            </p>
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#aaa", fontWeight: 600 }}>
              Coming soon
            </p>
          </div>

        </div>
      </section>

      {/* 푸터 */}
      <footer style={{ borderTop: "1px solid #e5e7eb", background: "#f8f9fa", padding: "28px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", color: "#aaa", margin: 0 }}>
            © 2026 AssetData. 본 사이트의 콘텐츠는 투자 권유가 아닌 정보 제공 목적입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
