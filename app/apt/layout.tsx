import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "ko-KR",
  publisher: {
    "@type": "Organization",
    name: siteConfig.publisher.name,
    url: siteConfig.publisher.url,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      contactType: "customer support",
    },
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.titleBrand,
    template: `%s | ${siteConfig.titleBrand}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    siteName: siteConfig.titleBrand,
    title: siteConfig.titleBrand,
    description: siteConfig.description,
  },
};

export default function AptLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
