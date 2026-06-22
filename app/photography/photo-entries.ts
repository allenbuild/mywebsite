export type PhotoEntry = {
  caption: string;
  date: string;
  photos: {
    src: string;
    objectPosition?: string;
  }[];
};

const photoEntries: PhotoEntry[] = [
  {
    caption: "dropout graduation w/ z fellows",
    date: "2026-06-20",
    photos: [
      {
        src: "/photography/dropout-graduation-z-fellows.png",
      },
    ],
  },
  {
    caption: "yc p26 demo day",
    date: "2026-06-16",
    photos: [
      {
        src: "/photography/yc-p26-demo-day-welcome.png",
      },
      {
        src: "/photography/yc-p26-demo-day-1.png",
      },
      {
        src: "/photography/yc-p26-demo-day-2.png",
        objectPosition: "center 38%",
      },
    ],
  },
  {
    caption: "a tuesday w/ hf0",
    date: "2026-05-12",
    photos: [
      {
        src: "/photography/a-tuesday-at-hf0.png",
      },
      {
        src: "/photography/a-tuesday-at-hf0-2.png",
        objectPosition: "center 72%",
      },
    ],
  },
  {
    caption: "founders inc canopy demo day",
    date: "2026-05-22",
    photos: [
      {
        src: "/photography/founders-inc-canopy-demo-day.png",
      },
    ],
  },
  {
    caption: "high school graduation",
    date: "2026-05-17",
    photos: [
      {
        src: "/photography/hs-grad-2.png",
      },
      {
        src: "/photography/hs-grad-1.png",
        objectPosition: "center 42%",
      },
      {
        src: "/photography/hs-grad-3.png",
      },
      {
        src: "/photography/hs-grad-4.png",
      },
    ],
  },
  {
    caption: "nbc & nctv17 morning show",
    date: "2025-11-13",
    photos: [
      {
        src: "/photography/nbc-nctv17-morning-show-1.png",
      },
      {
        src: "/photography/nbc-nctv17-morning-show-2.png",
      },
    ],
  },
  {
    caption: "notre dame leadership seminars",
    date: "2025-07-29",
    photos: [
      {
        src: "/photography/notre-dame-leadership-seminars-1.png",
      },
      {
        src: "/photography/notre-dame-leadership-seminars-2.png",
      },
    ],
  },
  {
    caption: "second annual fish tank",
    date: "2025-08-03",
    photos: [
      {
        src: "/photography/bizbuzz-fish-tank-3.png",
      },
      {
        src: "/photography/bizbuzz-fish-tank-2.png",
      },
      {
        src: "/photography/bizbuzz-fish-tank-1.png",
      },
    ],
  },
  {
    caption: "first annual fish tank",
    date: "2024-07-25",
    photos: [
      {
        src: "/photography/fish-tank-2024-2.png",
      },
      {
        src: "/photography/fish-tank-2024-1.png",
      },
    ],
  },
  {
    caption: "congress debate finals at yale",
    date: "2023-10-01",
    photos: [
      {
        src: "/photography/debating-at-yale.png",
      },
    ],
  },
];

export function getPhotoEntries(): PhotoEntry[] {
  return [...photoEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export type PhotoYearGroup = {
  year: number;
  entries: PhotoEntry[];
};

export function groupPhotoEntriesByYear(entries: PhotoEntry[]): PhotoYearGroup[] {
  const byYear = new Map<number, PhotoEntry[]>();

  for (const entry of entries) {
    const year = Number(entry.date.split("-")[0]);
    const group = byYear.get(year);
    if (group) {
      group.push(entry);
    } else {
      byYear.set(year, [entry]);
    }
  }

  return [...byYear.entries()]
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, yearEntries]) => ({ year, entries: yearEntries }));
}

export function formatPhotoDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
