import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "소개",
  description: `${siteConfig.name}은 아파트 실거래가·건축물 정보·입지 데이터를 함께 분석해 부동산 가격 차이의 이유를 쉽게 설명하는 부동산 분석 블로그입니다.`,
  alternates: { canonical: "/apt/about" },
};

export default function AboutPage() {
  return (
    <main className="page-outer">
      <p className="page-label">소개</p>
      <h1 className="page-title">집보는 시선에 대해</h1>

      <div className="page-section">
        <p>
          <strong>{siteConfig.name}</strong>은 아파트 실거래가, 건축물 정보, 역세권·생활권 데이터를
          함께 분석해 부동산 가격 차이의 이유를 누구나 이해할 수 있도록 설명하는 부동산 분석 블로그입니다.
        </p>
        <p>
          같은 동네, 비슷한 단지, 유사한 평형임에도 실제 거래 가격은 수천만 원 이상 차이가 나는 경우가
          흔합니다. 이 블로그는 단순히 가격 숫자를 나열하는 것이 아니라, 왜 그 차이가 생겼는지
          공개 데이터를 근거로 직접 해석하고 정리합니다.
        </p>
        <p>
          주요 콘텐츠는 <strong>단지별 가격 비교</strong>, <strong>실거래 흐름 분석</strong>,{" "}
          <strong>입지·생활권 요인 정리</strong>, <strong>부동산 데이터 읽는 법</strong>으로
          구성됩니다. 처음 부동산을 접하는 분도 읽기 쉽도록 쓰되, 실제 거래와 시장 흐름을
          이해하는 데 실질적으로 도움이 되는 정보를 담으려 합니다.
        </p>
        <p>
          모든 글은 공개된 실거래가 자료, 건축물 정보, 위치 및 생활권 정보를 바탕으로 작성되며,
          필요에 따라 운영자의 해석과 의견이 포함될 수 있습니다. 글의 내용은 참고용 분석 자료이며,
          투자·거래 결정의 절대적 기준으로 활용하지 않도록 주의해 주세요.
        </p>
      </div>

      <div className="page-section">
        <h2>콘텐츠 원칙</h2>
        <ul>
          <li>공개된 데이터와 확인 가능한 정보를 우선적으로 사용합니다.</li>
          <li>숫자만 나열하지 않고 가격 차이의 맥락과 이유를 함께 설명합니다.</li>
          <li>초보자도 이해할 수 있도록 쉬운 표현, 요약, 결론 구조를 활용합니다.</li>
          <li>오류가 확인되면 최대한 빠르게 수정합니다.</li>
          <li>광고는 콘텐츠와 명확히 구분되며, 글의 독립성을 해치지 않습니다.</li>
        </ul>
      </div>

      <div className="page-section">
        <h2>운영자 안내</h2>
        <p>
          이 사이트의 운영자이자 모든 글의 작성·데이터 검수 주체는 <strong>집보는 시선</strong>입니다.
          글에 표기되는 작성자와 데이터 검수자, 사이트 구조화 데이터(JSON-LD)의 발행 주체가 모두 동일한
          &lsquo;집보는 시선&rsquo; 한 명이며, 외부 필진이나 별도 검수 기관은 두고 있지 않습니다. 즉 모든 분석은
          운영자 본인이 직접 자료를 수집·가공하고 자체 검수하는 방식으로 작성됩니다.
        </p>
        <p>
          본 블로그는 개인이 운영하는 부동산 정보 분석 사이트로, 공인중개사나 금융 투자 전문가의
          서비스가 아닙니다. 제공되는 정보는 공개 자료 기반의 참고용 분석이며, 실제 투자·매매 결정은
          관련 전문가와 상담 후 신중하게 진행하시기 바랍니다.
        </p>
        <p>
          문의 또는 정정 요청은{" "}
          <a href="/apt/contact">문의 페이지</a>를 이용해 주세요.
        </p>
      </div>
    </main>
  );
}
