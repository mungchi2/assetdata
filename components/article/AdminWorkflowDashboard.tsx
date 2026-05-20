"use client";

import { useMemo, useState } from "react";
import type { AutomationDashboard, AutomationFlow } from "@/lib/adminAutomation";

type AdminWorkflowDashboardProps = {
  dashboard: AutomationDashboard;
};

type FlowId = "news" | "bunyang";
type ArticleOption = { title: string; meta: string; details: string[] };
type DisplayStep = { order: number; name: string; visual: string };
type StepDetail = { text: string; variant?: "dynamic" | "static" };

const dashboardStyles = `
.code-map {
  height: 100vh;
  overflow: hidden;
  background: #eef2f7;
  color: #1a1a1a;
  padding: 10px;
  box-sizing: border-box;
  font-family: Pretendard, Apple SD Gothic Neo, Noto Sans KR, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif;
}
.code-map * { box-sizing: border-box; }
.code-map__topbar,
.code-map__flow-row,
.code-map__detail-row { max-width: 100%; margin: 0 auto; }
.code-map__topbar { height: 42px; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; }
.code-map__topbar h1 { font-size: 21px; line-height: 1.2; margin: 0; color: #111; }
.code-map__topbar .page-label { margin: 0; color: #888; font-size: 13px; }
.code-map__meta { display: flex; flex-wrap: wrap; gap: 5px; }
.code-map__meta span { border: 1px solid #bfdbfe; border-radius: 999px; background: #eff6ff; color: #1558d6; padding: 3px 8px; font-size: 12px; font-weight: 800; line-height: 1.2; }
.code-map__flow-row,
.code-map__detail-row { display: grid; grid-template-columns: 150px repeat(5, minmax(0, 1fr)); gap: 8px; }
.code-map__flow-row { height: 150px; margin-bottom: 8px; }
.code-map__detail-row { height: calc(100vh - 208px); min-height: 390px; }
.code-map__tabs--stack { display: grid; grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 8px; }
.code-map__tabs--stack button,
.code-map__step,
.code-map__side-card,
.code-map__detail-card { min-width: 0; border: 2px solid #cbd5e1; border-radius: 9px; background: #fff; box-shadow: 0 7px 16px rgba(15, 23, 42, 0.08); }
.code-map__tabs--stack button { color: #1a1a1a; padding: 10px; font: inherit; text-align: left; cursor: pointer; }
.code-map__tabs--stack button.is-active { border-color: #1558d6; background: #eff6ff; box-shadow: inset 0 0 0 1px #1558d6, 0 7px 14px rgba(21, 88, 214, 0.12); }
.code-map__tabs--stack strong { display: block; font-size: 15px; line-height: 1.2; color: #111; }
.code-map__step { position: relative; padding: 12px; overflow: visible; }
.code-map__step:not(:last-child)::after { content: ""; position: absolute; top: 50%; right: -12px; width: 14px; height: 14px; border-top: 3px solid #1558d6; border-right: 3px solid #1558d6; transform: translateY(-50%) rotate(45deg); background: #eef2f7; z-index: 2; }
.code-map__step-number { width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; background: #1558d6; color: #fff; font-size: 13px; font-weight: 900; margin-bottom: 8px; }
.code-map__step h2 { font-size: 16px; line-height: 1.2; margin: 0 0 6px; color: #111; }
.code-map__step p { margin: 0; color: #555; font-size: 13px; line-height: 1.35; overflow-wrap: anywhere; }
.code-map__side-card,
.code-map__detail-card { min-height: 0; overflow: hidden; }
.code-map__side-card { padding: 12px; }
.code-map__side-card h2 { font-size: 17px; margin: 0 0 7px; color: #111; }
.code-map__side-card div { display: grid; gap: 5px; }
.code-map__side-card button { border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc; color: #334155; padding: 6px; font: inherit; font-size: 12px; line-height: 1.25; text-align: left; cursor: pointer; }
.code-map__side-card button.is-active { border-color: #1558d6; background: #eff6ff; box-shadow: inset 0 0 0 1px #1558d6; }
.code-map__side-card button strong, .code-map__side-card button span { display: block; }
.code-map__side-card button span { margin-top: 2px; color: #555; font-size: 11px; }
.code-map__detail-card header { height: 44px; display: flex; align-items: center; gap: 8px; padding: 8px 10px; background: #0f172a; }
.code-map__detail-card header span { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 50%; background: #1558d6; color: #fff; font-size: 11px; font-weight: 900; flex: 0 0 auto; }
.code-map__detail-card header h2 { color: #fff; font-size: 14px; line-height: 1.2; margin: 0; }
.code-map__detail-card ul { height: calc(100% - 44px); margin: 0; padding: 10px 10px 10px 24px; overflow: hidden; }
.code-map__detail-card li { margin: 5px 0; color: #475569; font-size: 13px; line-height: 1.32; overflow-wrap: anywhere; }
.code-map__detail-card li.is-dynamic { list-style: none; margin-left: -14px; border: 1px solid #93c5fd; border-left: 4px solid #1558d6; border-radius: 6px; background: #eff6ff; color: #0f3f9f; padding: 6px 7px; font-weight: 800; }
.code-map__detail-card li.is-static { color: #64748b; }
@media (max-width: 1180px) {
  .code-map { height: auto; overflow: auto; }
  .code-map__flow-row,
  .code-map__detail-row { height: auto; grid-template-columns: 1fr; }
  .code-map__step:not(:last-child)::after { display: none; }
}
`;



function getFlow(flows: AutomationFlow[], id: FlowId) {
  return flows.find((flow) => flow.id === id) || flows[0];
}

function getArticleOptions(flow: AutomationFlow): ArticleOption[] {
  if (flow.articleTypes) {
    return flow.articleTypes.map((type) => ({
      title: `${type.type} 글`,
      meta: `${type.scope} · ${type.lookbackMonths}개월`,
      details: type.uses,
    }));
  }
  if (flow.articlePhases) {
    return flow.articlePhases.map((phase) => ({
      title: `${phase.phase} 글`,
      meta: phase.readerIntent,
      details: phase.requiredFields,
    }));
  }
  return [];
}

function getDisplaySteps(flowId: FlowId, flow: AutomationFlow): DisplayStep[] {
  if (flowId !== "bunyang") return flow.pipelineOverview;

  const payload = flow.pipelineOverview.find((step) => step.order === 3);
  const write = flow.pipelineOverview.find((step) => step.order === 4);
  const extra = flow.pipelineOverview.find((step) => step.order === 5);

  return [
    { order: 1, name: "분양 소스 수집", visual: "분양 목록 source와 네이버 분양 상세를 한 번에 확보" },
    { order: 2, name: payload?.name || "분양 payload 생성", visual: payload?.visual || "상세 데이터와 주변 정보를 writer용 package로 구성" },
    { order: 3, name: "글 타입별 LLM payload", visual: "선택한 글 타입에 맞춰 최종 LLM 입력 데이터를 구성" },
    { order: 4, name: write?.name || "분양 글 작성", visual: write?.visual || "payload와 글 전략으로 마크다운 초안 생성" },
    { order: 5, name: extra?.name || "부가 데이터 삽입/미리보기", visual: extra?.visual || "표, 이미지, 그래프를 본문에 보강" },
  ];
}

const stepData: Record<FlowId, Record<number, string[]>> = {
  news: {
    1: [
      "지역별 뉴스 목록",
      "기사 제목과 URL",
      "기사 발행일",
      "수집 대상 후보 기사",
    ],
    2: [
      "부동산 관련성이 있는 기사",
      "아파트 가격 판단과 직접 연결되는 기사",
      "제외해야 할 기사 목록",
      "본문 분석 대상으로 넘길 기사 후보",
    ],
    3: [
      "뉴스 본문 핵심 사건",
      "분석 관점과 글 타입 후보",
      "언급 지역과 단지명",
      "면적대와 이벤트 발생 시점",
      "실거래 조회에 필요한 조건",
    ],
    4: [
      "지역 실거래 데이터",
      "비교 단지와 기준 단지",
      "면적대별 가격 통계",
      "거래량과 가격 변화 신호",
      "글 작성용 시장 데이터 패키지",
    ],
    5: [
      "발행 후보 제목",
      "SEO 본문 초안",
      "본문에 들어갈 표와 수치",
      "독자 판단 포인트",
      "마크다운 글 파일",
    ],
  },
  bunyang: {
    1: [
      "청약홈 분양 단지 목록",
      "수집 대상 단지명과 지역",
      "네이버 분양 상세 정보",
      "타입·일정·학교·공고문 URL",
      "분양 원천 데이터 묶음",
    ],
    2: [
      "단지 상세 정보",
      "모집공고문에서 추출한 핵심 정보",
      "주변 실거래 비교 데이터",
      "생활권과 학교 정보",
      "글 작성용 분양 payload",
    ],
    3: [
      "선택한 글 타입의 독자 의도",
      "글 타입별 필수 확인 항목",
      "LLM에 전달할 사실 목록",
      "가격·일정·자금·입지 데이터",
      "본문에서 강조할 체크포인트",
    ],
    4: [
      "분양 단계별 글 초안",
      "청약 판단 체크리스트",
      "분양가와 자금 부담 설명",
      "주변 시세 비교 문단",
      "마크다운 글 파일",
    ],
    5: [
      "본문 삽입용 표",
      "가격과 일정 그래프",
      "공고문 발췌 이미지",
      "지도와 생활권 보강 정보",
      "최종 발행용 글 구성 요소",
    ],
  },};

function getStepDetails(flowId: FlowId, order: number, selectedOption?: ArticleOption): StepDetail[] {
  if (flowId === "bunyang" && order === 3 && selectedOption) {
    return [
      { text: `글 타입: ${selectedOption.title}`, variant: "dynamic" },
      { text: `독자 의도: ${selectedOption.meta}`, variant: "dynamic" },
      ...selectedOption.details.map((item) => ({ text: `필수 데이터: ${item}`, variant: "dynamic" as const })),
      { text: "공통 데이터: 단지 개요와 공급 유형", variant: "static" },
      { text: "공통 데이터: 분양가와 납부 일정", variant: "static" },
      { text: "공통 데이터: 주변 실거래 비교 결과", variant: "static" },
    ];
  }
  return (stepData[flowId][order] || []).map((item) => ({ text: item }));
}

export default function AdminWorkflowDashboard({ dashboard }: AdminWorkflowDashboardProps) {
  const [flowId, setFlowId] = useState<FlowId>("news");
  const [selectedArticleByFlow, setSelectedArticleByFlow] = useState<Record<string, string>>({});
  const flow = useMemo(() => getFlow(dashboard.flows, flowId), [dashboard.flows, flowId]);
  const articleOptions = getArticleOptions(flow);
  const selectedArticle = articleOptions.find((option) => option.title === selectedArticleByFlow[flow.id]) || articleOptions[0];
  const displaySteps = getDisplaySteps(flowId, flow);

  return (
    <main className="code-map">
      <style>{dashboardStyles}</style>
      <header className="code-map__topbar">
        <div>
          <p className="page-label">Admin</p>
          <h1>{dashboard.title}</h1>
        </div>
        <div className="code-map__meta">
          <span>{dashboard.version}</span>
          <span>{dashboard.shared.dateKey.format}</span>
          <span>{dashboard.shared.dateKey.timezone}</span>
        </div>
      </header>

      <section className="code-map__flow-row" aria-label="pipeline overview">
        <div className="code-map__tabs code-map__tabs--stack" aria-label="자동화 선택">
          {dashboard.flows.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === flow.id ? "is-active" : ""}
              onClick={() => setFlowId(item.id as FlowId)}
            >
              <strong>{item.name}</strong>
            </button>
          ))}
        </div>

        {displaySteps.map((step) => (
          <article className="code-map__step" key={`${flow.id}-${step.order}`}>
            <div className="code-map__step-number">{step.order}</div>
            <h2>{step.name}</h2>
            <p>{step.visual}</p>
          </article>
        ))}
      </section>

      <section className="code-map__detail-row" aria-label="pipeline detail boxes">
        <aside className="code-map__side-card">
          <h2>{flow.name}</h2>
          <div>
            {articleOptions.slice(0, 6).map((option) => (
              <button
                key={option.title}
                type="button"
                className={option.title === selectedArticle?.title ? "is-active" : ""}
                onClick={() => setSelectedArticleByFlow((current) => ({ ...current, [flow.id]: option.title }))}
              >
                <strong>{option.title}</strong>
                <span>{option.meta}</span>
              </button>
            ))}
          </div>
        </aside>

        {displaySteps.map((step) => (
          <article className="code-map__detail-card" key={`${flow.id}-${step.order}-detail`}>
            <header>
              <span>{step.order}</span>
              <h2>{step.name}</h2>
            </header>
            <ul>
              {getStepDetails(flowId, step.order, selectedArticle).map((item) => (
                <li key={item.text} className={item.variant === "dynamic" ? "is-dynamic" : item.variant === "static" ? "is-static" : ""}>
                  {item.text}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
