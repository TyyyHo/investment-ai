import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["zh-TW", "zh-CN", "en-US"],
  defaultLocale: "zh-TW",
  localePrefix: "as-needed",
  localeDetection: true,
});

export function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
