import { incrementViewCount, isViewStatsAuthorized, recordVisitorCity } from "@/lib/view-stats";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies();
    if (isViewStatsAuthorized(cookieStore.get("viewstats-auth")?.value)) {
      return new NextResponse(null, { status: 204 });
    }

    await incrementViewCount();

    const headersList = await headers();
    const city = headersList.get("x-vercel-ip-city");
    const region = headersList.get("x-vercel-ip-country-region");
    const country = headersList.get("x-vercel-ip-country");
    await recordVisitorCity(city ?? "", region ?? undefined, country ?? undefined);

    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}
