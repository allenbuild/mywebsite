export type ProjectEntry = {
  title: string;
  description: string;
  href: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  /** ISO date (YYYY-MM-DD) — used for display */
  date: string;
  credit?: string;
};

const projectEntries: ProjectEntry[] = [
  {
    title: "Eyerobic",
    description:
      "Haptic wearable with a Raspberry Pi 5, 120° camera, and bone-conduction headphones to provide real-time guidance for blind swimmers and runners. Uses on-device computer vision with YOLOv11, PIDNet, HSV thresholding, contour detection, and GPS for navigation.",
    href: "https://www.youtube.com/watch?v=XeHiBRtfn0o",
    thumbnail: "/projects/eyerobic.png",
    thumbnailWidth: 844,
    thumbnailHeight: 633,
    date: "2025-08-17",
    credit: "Built with Steven He, Aiden Xie, and Kyle Wang",
  },
  {
    title: "Robot",
    description:
      "FTC Freight Frenzy robot with a G10 composite drivetrain, retractable odometry system, and fully 3D-printed mechanisms. Uses OpenCV, encoder-based odometry, and a custom Java navigation library for autonomous path planning, alongside Xbox controller-based teleoperation.",
    href: "https://www.youtube.com/watch?v=lcmc1HOwB7o",
    thumbnail: "/projects/ftc-freight-frenzy.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 900,
    date: "2022-03-12",
    credit:
      "Built with Jensen Coonradt, Ryan Oberfranc, Preeta Swaminathan, and Pranav Swaminathan",
  },
  {
    title: "Smart Poker Glasses",
    description:
      "Real-time poker assistant built on the Meta Wearables SDK for smart glasses. Uses computer vision, OCR, and game state reconstruction to recommend optimal plays using GTO analysis.",
    href: "https://www.instagram.com/reel/DY7v0RXhrjC/",
    thumbnail: "/projects/smart-poker-glasses.png",
    thumbnailWidth: 772,
    thumbnailHeight: 1024,
    date: "2026-05-29",
    credit: "Built with Colin Hu, Aiden Xie, and Andres Niño",
  },
];

export function getProjectEntries(): ProjectEntry[] {
  return [...projectEntries];
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
