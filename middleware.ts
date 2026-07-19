import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { datedArticleRedirects } from "@/lib/articleRedirects";

const ARTICLE_PREFIX = "/apt/article/";
const CANONICAL_HOST = "assetdata.kr";

function decodeSlug(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.") && host !== "localhost" && !host.startsWith("localhost:")) {
    const destination = new URL(request.url);
    destination.protocol = "https:";
    destination.hostname = CANONICAL_HOST;
    destination.port = "";
    return NextResponse.redirect(destination, 308);
  }

  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith(ARTICLE_PREFIX)) {
    return NextResponse.next();
  }

  const slug = decodeSlug(pathname.slice(ARTICLE_PREFIX.length));
  const destinationPath = datedArticleRedirects.get(slug);
  if (!destinationPath) {
    return NextResponse.next();
  }

  const destination = new URL(destinationPath, request.url);
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/:path*"],
};
