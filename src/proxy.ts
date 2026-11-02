import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérification du cookie avant d'accéder à /admin.
  if (pathname.startsWith("/admin") && !request.cookies.has("isAdmin")) {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  // Réécriture : /boutique affiche la page d'accueil sans changer l'URL.
  if (pathname === "/boutique") {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/boutique"],
};
