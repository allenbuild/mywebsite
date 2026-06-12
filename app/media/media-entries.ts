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
    outlet: "NBC 5 Chicago & NCTV17",
    title: "Naperville innovators turn inspiration into invention",
    href: "https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/",
  },
  {
    date: "2025-11-13",
    outlet: "NBC 5 Chicago & NCTV17",
    title: "Innovation and community shine at NCTV17’s Morning Show",
    href: "https://www.nctv17.org/community-events/innovation-and-community-shine-at-nctv17s-morning-show/",
  },
  {
    date: "2025-08-17",
    outlet: "Eyerobic",
    title: "Crossing the English Channel",
    href: "https://www.youtube.com/watch?v=XeHiBRtfn0o",
  },
  {
    date: "2025-07-14",
    outlet: "NCTV17",
    title: "BizBuzz turns imagination into innovation",
    href: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/",
  },
  {
    date: "2025-06-04",
    outlet: "NCTV17",
    title: "Naperville teens create assistive device for visually-impaired swimmers",
    href: "https://www.nctv17.org/news/naperville-teens-create-assistive-device-for-visually-impaired-swimmers/",
  },
  {
    date: "2025-04-02",
    outlet: "Harvard Undergraduate Economics Association",
    title: "Minutes to Midnight",
    href: "https://3675f99d-e14b-43c7-b4ab-9c36046ce13e.usrfiles.com/ugd/3675f9_47b5de0281954a879a8da07b9d9d12a3.pdf",
  },
  {
    date: "2025-03-30",
    outlet: "Blue Ocean Entrepreneurship Competition",
    title: "Eyerobic - Top 30 - Blue Ocean Entrepreneur Competition 2025 Pitch",
    href: "https://www.youtube.com/watch?v=uOeZOY87YXc&t",
  },
  {
    date: "2024-08-08",
    outlet: "NCTV17",
    title: "Naperville North juniors hold youth entrepreneurship camp for students",
    href: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/",
  },
  {
    date: "2022-03-18",
    outlet: "Patch",
    title: "Local Robotics Team Headed To World Championship After State Win",
    href: "https://patch.com/illinois/oswego/oswego-robotics-team-headed-world-championship-after-state-win",
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
