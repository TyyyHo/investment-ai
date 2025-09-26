import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["zh-hant", "zh-hans", "en"],
  defaultLocale: "zh-hant",
  localePrefix: "as-needed",
  localeDetection: true,
});

export function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
