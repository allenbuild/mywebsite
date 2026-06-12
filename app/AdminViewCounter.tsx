import { cookies } from "next/headers";
import { getViewCount, isViewStatsAuthorized } from "@/lib/view-stats";

export default async function AdminViewCounter() {
  const cookieStore = await cookies();
  if (!isViewStatsAuthorized(cookieStore.get("viewstats-auth")?.value)) {
    return null;
  }

  const count = await getViewCount();

  return (
    <div
      className="pointer-events-none fixed left-4 top-4 z-50 tabular-nums text-[11px] text-[color:var(--muted-2)] sm:left-6 sm:top-6"
      aria-hidden
    >
      {count.toLocaleString()} views
    </div>
  );
}
