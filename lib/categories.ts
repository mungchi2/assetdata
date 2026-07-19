export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "아파트 시장 트렌드",
    slug: "apartment-market-trend",
    description:
      "지역별 실거래가 흐름, 거래량 변화, 가격 서열 변동을 데이터 기반으로 분석합니다.",
  },
  {
    name: "재건축·재개발",
    slug: "reconstruction",
    description:
      "정비사업 진행 현황, 통합심의·관리처분 단계별 시세 영향과 사업성을 점검합니다.",
  },
  {
    name: "개발 정보",
    slug: "development",
    description:
      "용지 매각, 도시계획 변경, 인프라 개발이 인근 주거 시장에 미치는 영향을 정리합니다.",
  },
  {
    name: "청약 정보",
    slug: "subscription",
    description:
      "분양가, 청약 일정, 경쟁률 분석을 통해 신규 분양 단지의 투자·실거주 가치를 살펴봅니다.",
  },
  {
    name: "단지 비교",
    slug: "complex-compare",
    description:
      "같은 생활권 내 주요 단지를 거래 흐름, 준공연도, 면적, 입지 기준으로 비교합니다.",
  },
  {
    name: "실거래 읽는 법",
    slug: "how-to-read",
    description:
      "실거래가, 건축물대장, 층·면적 해석 등 부동산 데이터를 처음 보는 분도 이해할 수 있게 설명합니다.",
  },
  {
    name: "시장 지표 심층분석",
    slug: "market-indicators",
    description:
      "지가·오피스·상가 수익률 등 공식 통계를 자산군 교차와 수익률 분해로 재해석해 시장 국면을 진단합니다.",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
