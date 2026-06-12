export type MediaEntry = {
  /** ISO date (YYYY-MM-DD) — used for sort order */
  date: string;
  outlet: string;
  title: string;
  href: string;
};

const mediaEntries: MediaEntry[] = [
  {
    date: "2025-11-14",
    outlet: "NCTV17",
    title: "Naperville innovators turn inspiration into invention",
    href: "https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/",
  },
];

export function getMediaEntries(): MediaEntry[] {
  return [...mediaEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatMediaDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${Number(month)}/${Number(day)}/${year}`;
}
