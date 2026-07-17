import { formatMediaDate, getMediaEntries } from "./media-entries";

export default function MediaTimeline() {
  const entries = getMediaEntries();

  return (
    <ol className="mt-4 min-w-0 space-y-0">
      {entries.map((entry) => (
        <li
          key={`${entry.date}-${entry.href}`}
          className="grid grid-cols-[4.25rem_minmax(0,1fr)] gap-x-2 border-b border-[color:var(--rule)] py-2.5 first:pt-0 last:border-b-0 sm:grid-cols-[5.25rem_minmax(0,1fr)] sm:gap-x-3 sm:py-3"
        >
          <time
            dateTime={entry.date}
            className="shrink-0 tabular-nums text-[14px] italic leading-[1.45] [font-family:var(--font-italic)] text-[color:var(--muted-2)]"
          >
            {formatMediaDate(entry.date)}
          </time>
          <p className="min-w-0 text-[14px] leading-[1.45]">
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className="media-link"
            >
              <span className="font-bold">{entry.outlet}:</span>{" "}
              {entry.title}
            </a>
          </p>
        </li>
      ))}
    </ol>
  );
}
