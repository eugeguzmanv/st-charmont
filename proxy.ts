import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  localeCookieName,
  locales,
  spanishSpeakingCountries,
  type Locale,
} from "./lib/i18n/config";

function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [lang, qualityPart] = part.trim().split(";");
      const quality = qualityPart
        ? Number.parseFloat(qualityPart.trim().replace("q=", ""))
        : 1;
      return { lang: lang.trim().toLowerCase(), quality: Number.isNaN(quality) ? 1 : quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of preferred) {
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("en")) return "en";
  }

  return defaultLocale;
}

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookieName)?.value;
  if (cookie === "es" || cookie === "en") return cookie;

  const country = request.headers.get("x-vercel-ip-country");
  if (country) {
    return spanishSpeakingCountries.has(country) ? "es" : "en";
  }

  return getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
