import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./i18n.config";

export default function middleware(req: NextRequest) {
  return createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
  })(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|insights|.*\\..*).*)"],
};
