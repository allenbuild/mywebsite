import { incrementViewCount, isViewStatsAuthorized } from "@/lib/view-stats";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies();
    if (isViewStatsAuthorized(cookieStore.get("viewstats-auth")?.value)) {
      return new NextResponse(null, { status: 204 });
    }

    await incrementViewCount();
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}
