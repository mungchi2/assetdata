---
canonical_id: how_to_read_median_comparison_pitfalls
slug: median-comparison-pitfalls
title: 실거래 중앙값으로 단지·지역을 비교할 때 놓치기 쉬운 세 가지
summary: 실거래 중앙값은 단지와 지역을 비교하는 좋은 출발점이지만, 면적 구성·표본 두께·신고 지연을 함께 보지 않으면 같은 숫자를 다른 뜻으로 읽게 된다. 실제 공개 실거래에서 나온 사례로 세 가지 함정을 정리했다.
description: 부동산 비교 기사에 자주 쓰이는 '단지별 중앙값'을 실거래 데이터로 읽을 때 면적 구성, 표본 수, 최근월 신고 지연이 어떻게 해석을 바꾸는지 실제 사례로 설명한다.
categorySlug: how-to-read
district:
author: 집보는 시선
publishedAt: 2026-07-24
updatedAt: 2026-07-24
dataAsOf:
---
<!-- pipeline-extras:start -->
> 작성자: 집보는 시선
> 최초 발행: 2026.07.24
> 최종 업데이트: 2026.07.24
<!-- pipeline-extras:end -->


단지별·지역별 실거래 중앙값은 비교의 좋은 출발점이지만, 숫자 하나만 떼어 한 줄로 세우면 실제와 다르게 읽히는 구간이 있다. 같은 중앙값이라도 어떤 면적이 섞였는지, 표본이 몇 건인지, 최근 계약이 얼마나 신고됐는지에 따라 뜻이 달라지기 때문이다. 이 글은 공개 실거래 자료에서 실제로 나온 사례로 세 가지 함정을 짚는다.

**핵심 요약:** 첫째, 면적 구성이 다르면 같은 중앙값도 다른 상품을 가리킨다. 둘째, 거래가 얇은 달이나 단지의 중앙값은 개별 거래 몇 건에 크게 흔들린다. 셋째, 가장 최근 달의 거래량과 중앙값은 신고 지연 때문에 아직 확정치가 아니다. 이 세 가지를 함께 보면 같은 표를 훨씬 덜 틀리게 읽을 수 있다.

## 함정 1: 면적 구성이 다르면 같은 중앙값도 다른 상품

전체 거래 중앙값은 그 단지에서 실제로 팔린 여러 면적을 한데 놓고 가운데 값을 뽑은 것이다. 그래서 두 단지의 중앙값이 같아도 안을 열어 보면 구성이 다를 수 있다.

목동의 두 단지가 그런 사례다. 목동신시가지4와 목동청구한신아파트는 2026년 상반기 전체 거래 중앙값이 20억7500만원으로 같았다. 그러나 신시가지4의 24건은 전용 47.25㎡부터 142.20㎡까지 넓게 걸쳐 있었고, 목동청구한신아파트의 21건은 84.76~84.77㎡ 한 면적대에 모여 있었다. 한쪽은 여러 평형이 섞여 만든 가운데 값이고, 다른 쪽은 사실상 한 평형의 가격이다. 두 20억7500만원은 같은 숫자지만 같은 상품이 아니다.

그래서 단지를 비교할 때는 전체 <a href="/apt/article/median-vs-mean-for-real-estate-analysis" data-autolink>중앙값을</a> 먼저 보되, 같은 결론을 내리기 전에 거래 면적대를 반드시 함께 확인해야 한다. 같은 84㎡끼리 다시 추리면 전체 중앙값으로 본 순서와 결과가 달라질 수 있다.

## 함정 2: 표본이 얇으면 중앙값이 개별 거래에 흔들린다

중앙값은 거래가 많을수록 안정적이고, 적을수록 거래 한두 건에 쉽게 움직인다. 거래량과 중앙값을 항상 같이 두고 읽어야 하는 이유다.

강북구 전용 84㎡대는 2025년 1월 거래가 14건에 그쳤고, 그달 중앙값은 7억5500만원으로 나타났다가 거래가 31건으로 늘어난 다음 달에는 6억8000만원으로 내려왔다. 중앙값은 비싼 거래의 금액 크기에 비례해 끌려가는 값이 아니라, 어떤 단지·평형이 팔렸는지에 따라 가운데 순위가 옮겨가며 움직이는 값이다. 그래서 거래가 적은 달에는 구성이 조금만 달라져도 가운데 값의 위치가 크게 바뀐다. 단지 단위에서도 마찬가지다. 목동신시가지1은 2026년 상반기 16건 가운데 11건이 1월에 몰려 있었고 3~4월에는 유효 거래가 없었다. 이런 단지의 중앙값은 다른 단지보다 개별 거래에 민감하다.

읽는 요령은 단순하다. 거래가 적은 달이나 단지의 중앙값은 '경향'으로만 받아들이고, 그 숫자 하나로 순위를 매기지 않는 것이다. 몇 건부터 안정적인지는 가격 분포와 단지·면적 구성에 따라 달라져 고정된 기준선이 있는 것은 아니다. 다만 표본이 얇을수록 개별 거래의 영향이 커진다는 점을 주의선으로 두면 된다.

## 함정 3: 가장 최근 달은 아직 확정치가 아니다

부동산 매매는 계약 후 30일 이내에 신고하게 되어 있다. 그래서 조회 시점에서 가장 가까운 달의 거래는 아직 신고가 다 들어오지 않은 상태일 수 있다. 최근월 거래량이 앞 달보다 적게 보이는 것이 반드시 거래가 줄었다는 뜻은 아니라는 얘기다.

예를 들어 여러 지역에서 2026년 6월 계약분은 7월 하순 조회 기준으로도 아직 신고가 이어지는 중이었다. 이때 6월 건수를 5월과 나란히 놓고 '한 달 만에 꺾였다'고 읽으면 과소집계를 시장 위축으로 오해하게 된다. 최근월은 잠정치로 표시하고, 추세 판단은 신고가 충분히 쌓인 앞선 달들로 하는 편이 안전하다.

## 그래서 어떻게 읽나

세 가지를 한 문장으로 묶으면 이렇다. 중앙값은 같은 면적대끼리, 거래건수와 함께, 최근월은 보수적으로 읽는다.

<div style="max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;border:1px solid var(--border,#e5e7eb);border-radius:16px;">
  <table style="width:100%;min-width:640px;border-collapse:collapse;font-size:14px;line-height:1.6;">
    <caption style="padding:12px;text-align:left;font-weight:700;color:var(--text,#1a1a1a);">실거래 중앙값 비교 점검표</caption>
    <thead><tr><th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:var(--muted,#f8fafc);text-align:left;">점검 항목</th><th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:var(--muted,#f8fafc);text-align:left;">확인 방법</th><th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:var(--muted,#f8fafc);text-align:left;">놓치면 생기는 오해</th></tr></thead>
    <tbody><tr><td style="padding:12px;border:1px solid var(--border,#e5e7eb);font-weight:700;">면적 구성</td><td style="padding:12px;border:1px solid var(--border,#e5e7eb);">거래 면적 범위, 같은 평형끼리 재비교</td><td style="padding:12px;border:1px solid var(--border,#e5e7eb);">같은 중앙값을 같은 상품으로 착각</td></tr><tr><td style="padding:12px;border:1px solid var(--border,#e5e7eb);font-weight:700;">표본 두께</td><td style="padding:12px;border:1px solid var(--border,#e5e7eb);">거래건수를 중앙값 옆에 두고 확인</td><td style="padding:12px;border:1px solid var(--border,#e5e7eb);">거래 몇 건이 만든 값을 대표값으로 오해</td></tr><tr><td style="padding:12px;border:1px solid var(--border,#e5e7eb);font-weight:700;">신고 지연</td><td style="padding:12px;border:1px solid var(--border,#e5e7eb);">최근월은 잠정치로, 추세는 앞선 달로</td><td style="padding:12px;border:1px solid var(--border,#e5e7eb);">과소집계를 거래 위축으로 오해</td></tr></tbody>
  </table>
</div>

이 세 가지는 특별한 도구가 필요하지 않다. 비교표에서 중앙값 옆에 거래건수와 면적대가 같이 있는지, 가장 최근 달에 잠정치 표시가 있는지만 확인하면 된다. 이번에 인용한 서울 동북권·서남권 트렌드와 월계동·목동 비교 기사도 이 기준으로 표를 만들었다.

## 출처

- 국토교통부 실거래가 공개시스템 <a href="https://rt.molit.go.kr/" rel="noopener noreferrer" target="_blank">아파트 매매 실거래 조회</a>
- 본문 사례 수치는 이 사이트의 서울 동북권·서남권 실거래 트렌드와 월계동·목동 단지 비교 기사에서 계산한 공개 실거래 집계를 인용했다.
