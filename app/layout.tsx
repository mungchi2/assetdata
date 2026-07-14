import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.rootUrl),
  title: {
    default: "AssetData",
    template: "%s | AssetData",
  },
  description: "부동산·주식 데이터를 직접 해석하는 자산 분석 블로그",
  robots: { index: true, follow: true },
  // Google AdSense 사이트 소유 확인용 메타 태그(<meta name="google-adsense-account">).
  other: { "google-adsense-account": "ca-pub-9894606766082055" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
