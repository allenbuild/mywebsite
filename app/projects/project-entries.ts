export type ProjectEntry = {
  title: string;
  description: string;
  href: string;
  thumbnail: string;
  /** ISO date (YYYY-MM-DD) — used for sort order and display */
  date: string;
};

const projectEntries: ProjectEntry[] = [
  {
    title: "Smart Poker Glasses",
    description:
      "Real time poker assistant built on the Meta Wearables SDK for smart glasses. Uses computer vision, OCR, and game state reconstruction to recommend optimal plays using GTO analysis.",
    href: "https://www.instagram.com/reel/DY7v0RXhrjC/",
    thumbnail: "/projects/smart-poker-glasses.png",
    date: "2025-03-15",
  },
];

export function getProjectEntries(): ProjectEntry[] {
  return [...projectEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatProjectDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
