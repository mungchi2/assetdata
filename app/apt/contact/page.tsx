import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의",
  description: "글 내용 오류 정정, 데이터 문의, 제휴 제안은 이메일로 보내주세요.",
  alternates: { canonical: "/apt/contact" },
};

export default function ContactPage() {
  return (
    <main className="page-outer">
      <p className="page-label">문의</p>
      <h1 className="page-title">문의 및 정정 요청</h1>

      <div className="page-section">
        <p>
          글의 내용에 대한 문의, 데이터 오류 정정 요청, 제휴 또는 협업 제안은
          아래 이메일로 보내주세요. 확인 후 답변 드리겠습니다.
        </p>
        <p>
          <strong>이메일:</strong>{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
        <p>
          게시글의 실거래가, 표, 설명, 링크 중 오류가 있다고 판단되실 경우 해당 내용을 검토한 뒤
          가능한 한 빠르게 수정하겠습니다.
        </p>
        <p>
          광고·제휴·데이터 협업 관련 문의도 환영하지만, 모든 요청에 개별 회신을 드리기 어려울 수 있는 점
          양해 부탁드립니다.
        </p>
      </div>

      <div className="page-section">
        <h2>문의 시 함께 보내주시면 좋은 정보</h2>
        <ul>
          <li>관련 페이지 주소(URL)</li>
          <li>수정이 필요한 내용 및 수정 제안</li>
          <li>참고할 수 있는 출처 또는 근거 자료</li>
          <li>회신이 필요한 경우 연락 가능한 이메일 주소</li>
        </ul>
      </div>

      <div className="page-section">
        <h2>법적 고지</h2>
        <p>
          본 블로그에 게재된 모든 콘텐츠는 참고 목적의 분석 자료이며, 부동산 투자 또는 거래에 대한
          전문적 조언이 아닙니다. 실제 투자·매매 결정은 관련 전문가와 상담 후 신중하게 진행하시기 바랍니다.
        </p>
      </div>
    </main>
  );
}
