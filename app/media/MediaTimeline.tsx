import { formatMediaDate, getMediaEntries } from "./media-entries";

export default function MediaTimeline() {
  const entries = getMediaEntries();

  return (
    <ol className="mt-4 min-w-0 space-y-0">
      {entries.map((entry) => (
        <li
          key={`${entry.date}-${entry.href}`}
          className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 border-b border-[color:var(--rule)] py-3.5 first:pt-0 last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-x-6 sm:py-4"
        >
          <time
            dateTime={entry.date}
            className="shrink-0 tabular-nums text-[15px] leading-[1.5] text-[color:var(--muted-2)]"
          >
            {formatMediaDate(entry.date)}
          </time>
          <p className="min-w-0 text-[16px] leading-[1.5] text-[color:var(--foreground)]">
            <span className="font-bold text-[color:var(--muted)]">
              {entry.outlet}:{" "}
            </span>
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
            >
              {entry.title}
            </a>
          </p>
        </li>
      ))}
    </ol>
  );
}
