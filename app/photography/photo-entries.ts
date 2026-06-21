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
    caption: "a tuesday @ hf0 residency",
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
