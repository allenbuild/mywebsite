import { incrementViewCount } from "@/lib/view-stats";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await incrementViewCount();
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}
