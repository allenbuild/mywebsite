export type PhotoEntry = {
  caption: string;
  date: string;
  photos: {
    src: string;
    alt: string;
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
        alt: "Allen Xu holding a Dropout Graduation plaque on a rooftop",
      },
    ],
  },
  {
    caption: "yc p26 demo day",
    date: "2026-06-16",
    photos: [
      {
        src: "/photography/yc-p26-demo-day-welcome.png",
        alt: "Welcome to Demo Day sign at YC P26",
      },
      {
        src: "/photography/yc-p26-demo-day-1.png",
        alt: "Selfie with a friend at YC P26 demo day",
      },
      {
        src: "/photography/yc-p26-demo-day-2.png",
        alt: "Allen Xu and Bryce Johnson at YC P26 demo day",
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
        alt: "People working on laptops in a dimly lit room at hf0",
      },
      {
        src: "/photography/a-tuesday-at-hf0-2.png",
        alt: "Five people sitting on a red couch at hf0",
        objectPosition: "center 72%",
      },
    ],
  },
  {
    caption: "high school graduation",
    date: "2026-05-17",
    photos: [
      {
        src: "/photography/hs-grad-2.png",
        alt: "Allen Xu and friends in graduation gowns at Thomas G. Scullen Middle School",
      },
      {
        src: "/photography/hs-grad-1.png",
        alt: "Allen Xu in graduation gown with family at the ceremony",
        objectPosition: "center 42%",
      },
      {
        src: "/photography/hs-grad-3.png",
        alt: "Graduating class group photo on the football field",
      },
      {
        src: "/photography/hs-grad-4.png",
        alt: "Allen Xu and friends holding diplomas in graduation gowns",
      },
    ],
  },
  {
    caption: "nbc & nctv17 morning show",
    date: "2025-11-13",
    photos: [
      {
        src: "/photography/nbc-nctv17-morning-show-1.png",
        alt: "Allen Xu on the NBC morning show discussing Eyerobic",
      },
      {
        src: "/photography/nbc-nctv17-morning-show-2.png",
        alt: "Allen Xu with friends at an NBC event",
      },
    ],
  },
  {
    caption: "notre dame leadership seminars",
    date: "2025-07-29",
    photos: [
      {
        src: "/photography/notre-dame-leadership-seminars-1.png",
        alt: "Presentation on stage at Notre Dame Leadership Seminars",
      },
      {
        src: "/photography/notre-dame-leadership-seminars-2.png",
        alt: "Group photo at Notre Dame Leadership Seminars",
      },
    ],
  },
  {
    caption: "second annual fish tank",
    date: "2025-08-03",
    photos: [
      {
        src: "/photography/bizbuzz-fish-tank-3.png",
        alt: "Allen Xu and a friend with the BizBuzz Fish Tank poster",
      },
      {
        src: "/photography/bizbuzz-fish-tank-1.png",
        alt: "Winners holding checks at the second annual BizBuzz Fish Tank",
      },
      {
        src: "/photography/bizbuzz-fish-tank-2.png",
        alt: "Group photo at the second annual BizBuzz Fish Tank",
      },
    ],
  },
  {
    caption: "first annual fish tank",
    date: "2024-07-25",
    photos: [
      {
        src: "/photography/fish-tank-2024-2.png",
        alt: "Group photo at the first annual Fish Tank",
      },
      {
        src: "/photography/fish-tank-2024-1.png",
        alt: "Fish Tank trophies lined up on a table",
      },
    ],
  },
  {
    caption: "congress debate finals at yale",
    date: "2023-10-01",
    photos: [
      {
        src: "/photography/debating-at-yale.png",
        alt: "Allen Xu debating on stage at Yale",
      },
    ],
  },
];

export function getPhotoEntries(): PhotoEntry[] {
  return [...photoEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatPhotoDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${month}.${day}.${year}`;
}
