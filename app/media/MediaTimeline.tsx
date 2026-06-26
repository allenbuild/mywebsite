import { formatMediaDate, getMediaEntries } from "./media-entries";

export default function MediaTimeline() {
  const entries = getMediaEntries();

  return (
    <ol className="mt-4 min-w-0 space-y-0">
      {entries.map((entry) => (
        <li
          key={`${entry.date}-${entry.href}`}
          className="grid grid-cols-[5rem_minmax(0,1fr)] gap-x-4 border-b border-[color:var(--rule)] py-2.5 first:pt-0 last:border-b-0 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-x-5 sm:py-3"
        >
          <time
            dateTime={entry.date}
            className="shrink-0 tabular-nums text-[14px] leading-[1.45] text-[color:var(--media-date)]"
          >
            {formatMediaDate(entry.date)}
          </time>
          <p className="min-w-0 text-[15px] leading-[1.45] text-[color:var(--foreground)]">
            <span
              className={
                entry.outletAccent
                  ? "italic [font-family:var(--font-sans)] text-[color:var(--media-accent)]"
                  : "italic [font-family:var(--font-sans)] text-[color:var(--muted)]"
              }
            >
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
