import { NextRequest, NextResponse } from "next/server";

const locales = ["zh-hant", "zh-hans", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "zh-hant";

function hasPathLocale(pathname: string): boolean {
  return locales.some(
    l => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
}

function getCookieLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value || "";
  return (locales as readonly string[]).includes(cookie)
    ? (cookie as Locale)
    : defaultLocale;
}

export function handleLanguageRedirect(
  request: NextRequest
): NextResponse | null {
  const { nextUrl } = request;
  const { pathname, search } = nextUrl;

  // If the path already has a locale, respect it and do nothing
  if (hasPathLocale(pathname)) return null;

  // Compute target locale from cookie (fallback to default)
  const locale = getCookieLocale(request);

  // Build redirect URL preserving search params
  const url = new URL(nextUrl);
  url.pathname = `/${locale}${pathname}`;
  url.search = search;

  // Avoid accidental self-redirect loops
  if (url.pathname === pathname) return null;

  return NextResponse.redirect(url);
}
