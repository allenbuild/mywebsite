export type PhotoEntry = {
  caption: string;
  date: string;
  photos: { src: string; alt: string }[];
};

const photoEntries: PhotoEntry[] = [
  {
    caption: "a tuesday at hf0",
    date: "2026-05-12",
    photos: [
      {
        src: "/photography/a-tuesday-at-hf0.png",
        alt: "People working on laptops in a dimly lit room at hf0",
      },
    ],
  },
];

export function getPhotoEntries(): PhotoEntry[] {
  return photoEntries;
}

export function formatPhotoDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${month}.${day}.${year}`;
}
