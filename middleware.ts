import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { datedArticleRedirects } from "@/lib/articleRedirects";

const ARTICLE_PREFIX = "/apt/article/";

function decodeSlug(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith(ARTICLE_PREFIX)) {
    return NextResponse.next();
  }

  const slug = decodeSlug(pathname.slice(ARTICLE_PREFIX.length));
  const destinationSlug = datedArticleRedirects.get(slug);
  if (!destinationSlug) {
    return NextResponse.next();
  }

  const destination = new URL(`${ARTICLE_PREFIX}${destinationSlug}`, request.url);
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/apt/article/:path*"],
};
