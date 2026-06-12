import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "viewstats-auth";

export function proxy(request: NextRequest) {
  const secret = process.env.VIEW_COUNTER_SECRET;
  const key = request.nextUrl.searchParams.get("viewstats");

  if (!secret || key !== secret) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.searchParams.delete("viewstats");
  const response = NextResponse.redirect(url);
  response.cookies.set(AUTH_COOKIE, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|ico|svg|webmanifest)$).*)",
  ],
};
