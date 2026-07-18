import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${siteConfig.name}의 개인정보 수집·이용 방침 및 Google AdSense 쿠키 사용 안내입니다.`,
  alternates: { canonical: "/apt/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page-outer">
      <p className="page-label">개인정보처리방침</p>
      <h1 className="page-title">개인정보처리방침</h1>
      <p style={{ fontSize: "13px", color: "var(--text-light)", marginBottom: "32px" }}>
        최종 수정일: 2026년 7월 18일
      </p>

      <div className="page-section">
        <p>
          <strong>{siteConfig.name}</strong>은 방문자의 개인정보를 소중히 여기며, 관련 법령을 준수합니다.
          본 개인정보처리방침은 이 사이트가 수집하는 정보의 종류, 사용 방식, 그리고 방문자의 권리에 대해
          안내합니다.
        </p>

        <h2>1. 수집하는 정보</h2>
        <p>
          본 사이트는 직접적으로 개인정보를 수집하는 회원가입·로그인 기능을 운영하지 않습니다.
          다만 아래와 같은 정보가 자동으로 수집될 수 있습니다.
        </p>
        <ul>
          <li>접속 IP 주소 및 접속 일시</li>
          <li>방문한 페이지 URL 및 체류 시간</li>
          <li>브라우저 종류, 운영체제, 기기 정보</li>
          <li>쿠키 및 유사 기술을 통한 방문 식별 정보</li>
        </ul>

        <h2>2. 정보 수집 및 이용 목적</h2>
        <ul>
          <li>사이트 운영 및 서비스 품질 개선</li>
          <li>방문 통계 파악 및 콘텐츠 개선</li>
          <li>비정상 접근 탐지 및 보안 유지</li>
          <li>맞춤형 광고 제공 (Google AdSense 등 제3자 광고 서비스)</li>
        </ul>

        <h2>3. 쿠키(Cookie) 사용</h2>
        <p>
          본 사이트는 서비스 개선 및 광고 제공을 위해 쿠키를 사용합니다. 쿠키는 브라우저에 저장되는
          소형 텍스트 파일로, 방문자가 브라우저 설정에서 이를 거부하거나 삭제할 수 있습니다.
        </p>

        <h2>4. Google AdSense 및 제3자 광고</h2>
        <p>
          본 사이트는 <strong>Google AdSense</strong> 승인 후 광고를 게재할 수 있습니다. 광고가
          게재되는 경우 Google을 포함한 제3자 광고 제공업체는 쿠키를 사용하여 방문자의 이전 방문 정보를
          기반으로 광고를 제공할 수 있습니다. Google의 광고 쿠키 사용 방식은{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 정책
          </a>
          에서 확인하실 수 있습니다.
        </p>
        <p>
          방문자는{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 설정
          </a>
          에서 맞춤형 광고를 비활성화할 수 있으며,{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>
          에서 제3자 광고 쿠키를 관리할 수 있습니다.
        </p>

        <h2>5. 제3자 서비스</h2>
        <p>
          현재 별도의 방문 통계 분석 도구를 사용하지 않으며, 도입하는 경우 본 방침에 제품명과 사용 목적을
          명시합니다.
        </p>

        <h2>6. 정보 보관 및 보호</h2>
        <p>
          본 사이트는 개인정보를 제3자에게 판매하지 않습니다. 다만 사이트 운영, 광고, 통계 서비스가
          도입되는 경우 Google 등 서비스 제공업체가 서비스 제공 과정에서 IP 주소, 쿠키 식별자, 기기
          정보를 처리할 수 있습니다. 각 제공업체의 처리 목적과 정책은 이 방침의 4항 및 5항에서
          안내합니다. 수집된 정보는 운영에 필요한 기간 동안만 보관하고 목적 달성 후 삭제합니다.
          이용자는 브라우저에서 쿠키를 삭제하거나 차단할 수 있으며, 4항의 Google 광고 설정 링크를 통해
          맞춤형 광고를 거부할 수 있습니다.
        </p>

        <h2>7. 방침 변경 안내</h2>
        <p>
          본 개인정보처리방침은 법령 변경 또는 서비스 운영 방식의 변화에 따라 수정될 수 있습니다.
          중요한 변경이 있을 경우 본 페이지에서 최종 수정일과 함께 안내됩니다.
        </p>

        <h2>8. 문의</h2>
        <p>
          개인정보 처리와 관련한 문의는{" "}
          <a href="/apt/contact">문의 페이지</a> 또는{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>으로 연락해 주세요.
        </p>
      </div>
    </main>
  );
}
