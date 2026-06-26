import { cookies } from "next/headers";
import {
  getViewCount,
  getVisitorCityStats,
  isViewStatsAuthorized,
} from "@/lib/view-stats";

export default async function AdminViewCounter() {
  const cookieStore = await cookies();
  if (!isViewStatsAuthorized(cookieStore.get("viewstats-auth")?.value)) {
    return null;
  }

  const [count, cities] = await Promise.all([
    getViewCount(),
    getVisitorCityStats(),
  ]);

  return (
    <div
      className="pointer-events-none fixed left-4 top-4 z-50 max-w-[12rem] text-[11px] text-[color:var(--muted-2)] sm:left-6 sm:top-6 sm:max-w-[13rem]"
      aria-hidden
    >
      <p className="tabular-nums">{count.toLocaleString()} views</p>
      {cities.length > 0 ? (
        <ul className="mt-1.5 space-y-0.5 border-t border-[color:var(--rule)] pt-1.5">
          {cities.map((entry) => (
            <li
              key={entry.city}
              className="flex items-baseline justify-between gap-2 tabular-nums"
            >
              <span className="min-w-0 truncate">{entry.city}</span>
              <span className="shrink-0">{entry.count.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
