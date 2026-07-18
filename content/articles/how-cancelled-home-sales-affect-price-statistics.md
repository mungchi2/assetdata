---
canonical_id: how_to_read_cancelled_deals_in_price_stats
slug: how-cancelled-home-sales-affect-price-statistics
title: 취소·해제 거래는 왜 시세 통계와 거래량 집계에서 빼야 하나
summary: 취소·해제된 거래를 그대로 넣으면 거래량과 가격 통계가 모두 흔들린다. 이 사이트가 취소 표시 거래를 원자료에는 남기되 통계와 신호 탐지에서는 제외하는 이유와, 독자가 시세표를 읽을 때 주의할 점을 설명한다.
description: 취소·해제된 거래를 그대로 넣으면 거래량과 가격 통계가 모두 흔들린다. 이 사이트가 취소 표시 거래를 원자료에는 남기되 통계와 신호 탐지에서는 제외하는 이유와, 독자가 시세표를 읽을 때 주의할 점을 설명한다.
categorySlug: how-to-read
district:
author: 집보는 시선
dataReviewedBy: 김팔달 (부동산데이터분석가)
publishedAt: 2026-07-18
updatedAt: 2026-07-18
dataAsOf:
---
<!-- pipeline-extras:start -->
> 작성자: 집보는 시선
> 데이터 검수: 김팔달 (부동산데이터분석가)
> 최초 발행: 2026.07.18
> 최종 업데이트: 2026.07.18
<!-- pipeline-extras:end -->


실거래가 공개 자료에는 나중에 취소되거나 해제된 계약 표시가 붙는 경우가 있다. 이 거래를 보지 못하고 통계에 그대로 넣으면 두 가지 문제가 동시에 생긴다. 첫째, 실제로 성사되지 않은 계약이 거래량을 부풀린다. 둘째, 가격이 높은 취소 거래나 낮은 취소 거래가 남아 있으면 평균과 중앙값, 최고가·최저가 판단까지 함께 흔들린다. 즉 취소·해제 거래는 "있었던 일"로 기록할 수는 있어도, "현재 시장을 설명하는 성사 거래"와는 같은 자리에 두면 안 된다.

이 사이트는 그래서 취소·해제 정보를 원자료에서 지워버리지 않는다. 대신 취소 표시를 별도로 들고 가고, 가격 통계와 거래량 집계, 이상 신호 탐지에서는 그 거래를 제외한다. 독자가 시세표를 읽을 때도 같은 원칙이 필요하다. 취소 거래를 못 본 척하는 것이 아니라, 통계의 모재단에서 분리해야 한다는 뜻이다.

## 취소 거래를 그대로 두면 거래량부터 틀어진다

많은 사람이 취소 거래의 문제를 가격 왜곡으로만 생각하지만, 실제로는 거래량 왜곡이 더 먼저 온다. 예를 들어 한 달에 네 건이 신고됐고 그중 한 건이 나중에 해제됐다면, 공개 화면만 보고 집계한 사람은 한동안 거래 네 건으로 읽을 수 있다. 하지만 실질적으로는 세 건만 남은 셈이다. 월별 거래건수는 시장 온도와 유동성을 읽을 때 기본값으로 쓰이기 때문에, 이 숫자가 틀어지면 뒤 판단도 함께 밀린다.

이 사이트가 취소 표시 거래를 월별 거래건수 집계에서 제외하는 이유가 여기에 있다. 가격 통계뿐 아니라 거래건수 자체도 실질 성사분 기준으로 맞춰야 월별 흐름이 안정된다. 최근 달 거래량이 줄었는지, 특정 단지에서 매수세가 붙는지 같은 판단은 한두 건 차이에도 크게 흔들릴 수 있기 때문에, 취소분을 남겨두는 쪽이 오히려 더 위험하다.

## 가격 통계는 평균보다 중앙값이 낫더라도 취소 거래가 섞이면 흔들린다

중앙값은 평균보다 튀는 거래에 덜 흔들리는 지표지만, 취소 거래가 섞이면 중앙값도 안전하지 않다. 표본이 적은 단지에서는 한 건만 빠져도 가운데 값이 바뀌기 쉽기 때문이다. 예를 들어 다섯 건 가운데 고가 한 건이 취소됐는데도 남아 있으면 평균은 당연히 올라가고, 중앙값도 위로 밀릴 수 있다. 반대로 저가 거래가 취소됐는데 남아 있어도 같은 문제가 생긴다.

이 사이트는 그래서 통계를 만들기 전에 먼저 취소 표시 여부를 확인하고, 취소 거래는 중앙값과 평균, 면적당 가격, 월별 건수 계산에서 함께 제외한다. 이 순서가 중요하다. 취소 거래를 빼지 않은 뒤 중앙값을 계산하는 것과, 먼저 취소 거래를 제거한 뒤 중앙값을 계산하는 것은 전혀 다른 결과를 낳을 수 있다. 독자도 공개 화면 숫자를 볼 때 "취소분 정리 전 숫자인가"를 먼저 의심해야 한다.

<div style="display:grid;gap:12px;max-width:100%;padding:16px;border:1px solid var(--border,#e5e7eb);border-radius:16px;background:linear-gradient(180deg,#ffffff 0%,#f8fafc 100%);box-sizing:border-box;">
  <div style="font-size:14px;line-height:1.7;color:var(--text,#1a1a1a);">
    아래 표는 실제 시세가 아니라 설명용 가상 예시다.
  </div>
  <div style="max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;">
    <table style="width:100%;min-width:760px;border-collapse:collapse;font-size:14px;line-height:1.6;">
      <thead>
        <tr>
          <th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:#f8fafc;text-align:left;">구분</th>
          <th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:#f8fafc;text-align:left;">거래 목록</th>
          <th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:#f8fafc;text-align:left;">거래건수</th>
          <th style="padding:12px;border:1px solid var(--border,#e5e7eb);background:#f8fafc;text-align:left;">중앙값</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">취소분 포함</td>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">가상 예시 8.0 / 8.1 / 8.2 / 9.4(취소) / 8.3</td>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">5건</td>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">8.2</td>
        </tr>
        <tr>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">취소분 제외</td>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">가상 예시 8.0 / 8.1 / 8.2 / 8.3</td>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">4건</td>
          <td style="padding:12px;border:1px solid var(--border,#e5e7eb);vertical-align:top;">8.15 수준</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## 이 사이트는 취소 거래를 통계뿐 아니라 신호 탐지에서도 뺀다

취소 거래를 빼야 하는 이유는 통계 안정성에만 있지 않다. 특정 단지의 신고가 경신, 급락, 거래량 급증 같은 이상 신호를 찾을 때도 취소분이 섞이면 오탐이 생긴다. 성사되지 않은 고가 거래가 남아 있으면 신고가처럼 보일 수 있고, 뒤늦게 취소된 저가 거래가 남아 있으면 급락처럼 보일 수 있다. 거래량 신호 역시 취소 건수가 포함되면 과열이나 회복 신호가 과장된다.

이 사이트는 그래서 실거래 원자료를 정규화할 때부터 취소 여부를 따로 붙여두고, 이후 월별 집계와 신호 탐지 단계에서 그 거래를 제외한다. 쉽게 말해 "기록은 남기되 해석에서는 뺀다"는 원칙이다. 이 방식이 중요한 이유는, 취소 거래가 사라진 것처럼 덮어두지 않으면서도 가격 방향과 거래량 해석이 실제 성사분 중심으로 유지되기 때문이다.

## 취소 거래를 보는 올바른 질문은 따로 있다

그렇다고 취소·해제 거래가 아무 의미가 없다는 뜻은 아니다. 다만 그 의미는 시세 통계가 아니라 시장 맥락에 가깝다. 취소가 반복되는지, 특정 가격대에서 체결과 해제가 자주 엇갈리는지, 특정 시기 이후 계약 안정성이 떨어졌는지는 별도 관찰 포인트가 될 수 있다. 하지만 이것을 곧바로 "현재 시세"나 "확정 거래량"에 섞으면 질문이 뒤섞인다.

독자가 해야 할 일은 두 질문을 분리하는 것이다. 하나는 "실제로 성사돼 남은 거래가 얼마인가"이고, 다른 하나는 "왜 취소가 붙었는가"다. 전자는 시세 통계의 질문이고, 후자는 시장 맥락의 질문이다. 이 사이트가 취소 거래를 원자료에 표시로 남기되 본문 집계에서는 제외하는 이유도 바로 이 분리 때문이다. 두 질문을 섞지 않으면 가격표가 훨씬 덜 흔들린다.

## 결론

취소·해제 거래는 실거래 데이터에서 지워야 할 잡음이 아니라, 위치를 바꿔야 할 정보다. 원자료에는 남겨두되 가격 통계와 거래량, 이상 신호 탐지에서는 빼야 한다. 이 사이트가 취소 표시 거래를 따로 잡고 월별 중앙값과 거래건수 집계에서 제외하는 이유도 여기에 있다. 독자도 시세표를 볼 때는 먼저 취소분이 정리된 숫자인지 확인하고, 취소 자체의 의미는 별도 맥락으로 읽는 편이 안전하다.

## 다음에 바로 확인할 문서

- 실거래표를 볼 때는 취소·해제 표시가 붙은 거래가 섞여 있는지 먼저 본다.
- 월별 거래건수와 중앙값을 계산할 때는 취소분을 빼고 다시 읽는 습관이 필요하다.
- 신고가나 급락처럼 강한 신호가 보이면, 그 거래가 이후에도 유효한지 한 번 더 확인한다.
- 취소 거래가 많아 보일 때는 시세 단정보다 계약 안정성이나 시장 맥락 문제로 분리해 해석한다.

## 출처

- 국토교통부 실거래가 공개시스템 <a href="https://rt.molit.go.kr/" rel="noopener noreferrer" target="_blank">매매 실거래 조회</a>
- 국토교통부 전월세 실거래 공개시스템 <a href="https://rt.molit.go.kr/" rel="noopener noreferrer" target="_blank">전월세 실거래 조회</a>
- 국가법령정보센터 <a href="https://www.law.go.kr/" rel="noopener noreferrer" target="_blank">부동산 거래신고 관련 법령 검색</a>
