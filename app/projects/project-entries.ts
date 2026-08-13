export type ProjectEntry = {
  title: string;
  description: string;
  href?: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  objectPosition?: string;
  thumbnailScale?: number;
  /** ISO date (YYYY-MM-DD) — used for display */
  date: string;
  credit?: string;
  /** Short highlight shown next to the date */
  highlight?: string;
};

const projectEntries: ProjectEntry[] = [
  {
    title: "Eyerobic",
    description:
      "Haptic wearable with a Raspberry Pi 5, 120° FOV camera, and bone-conduction headphones to provide real-time guidance for blind swimmers with an uspto provisional patent. Uses YOLOv11 computer vision, PIDNet, HSV thresholding, contour detection, and GPS for navigation.",
    href: "https://www.youtube.com/watch?v=XeHiBRtfn0o",
    thumbnail: "/projects/eyerobic.png",
    thumbnailWidth: 844,
    thumbnailHeight: 633,
    date: "2025-08-17",
    credit: "Built with Steven He, Aiden Xie, Kyle Wang",
    highlight: "2025 Conrad Challenge & Blue Ocean Competition Finalist",
  },
  {
    title: "FTC Freight Frenzy Robot",
    description:
      "Robot with a G10 composite drivetrain, retractable odometry, and 3D-printed mechanisms. Uses OpenCV, encoder-based odometry, and a custom Java navigation library for auto path planning, alongside Xbox controller-based teleop.",
    href: "https://www.youtube.com/watch?v=lcmc1HOwB7o",
    thumbnail: "/projects/ftc-freight-frenzy.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 900,
    date: "2022-03-12",
    credit:
      "Built with Jensen Coonradt, Ryan Oberfranc, Preeta and Pranav Swaminathan",
    highlight: "2022 Illinois State Championship Winner",
  },
  {
    title: "Smart Poker Glasses",
    description:
      "Real-time poker assistant built on the Meta Wearables SDK for smart glasses. Uses computer vision, OCR, and game state reconstruction to recommend optimal plays via GTO analysis.",
    href: "https://www.instagram.com/reel/DY7v0RXhrjC/",
    thumbnail: "/projects/smart-poker-glasses.png",
    thumbnailWidth: 772,
    thumbnailHeight: 1024,
    objectPosition: "center 64%",
    date: "2026-05-29",
    credit: "Built with Colin Hu, Aiden Xie, Andres Niño",
    highlight: "60k+ views",
  },
  {
    title: "decademy.app",
    description:
      "Free edtech platform with 40,000+ DECA practice questions, real-time roleplay scoring, and personalized performance analytics. Uses Next.js, React, TypeScript, Supabase Auth, and PostgreSQL.",
    href: "https://www.decademy.app/",
    thumbnail: "/projects/decademy-2.png",
    thumbnailWidth: 600,
    thumbnailHeight: 336,
    date: "2025-04-01",
    credit: "Built with Aiden Xie, Rohan Rao, Arnav Sharma, Ishaan Garg",
    highlight: "30k+ users",
  },
  {
    title: "Signal",
    description:
      "Universal hand-to-computer interface for macOS control. Uses MediaPipe hand pose estimation and custom gesture recognition to launch applications and enable touchless cursor movement, clicking, scrolling, and zooming.",
    thumbnail: "/projects/signal.png",
    thumbnailWidth: 1024,
    thumbnailHeight: 764,
    thumbnailScale: 1.18,
    objectPosition: "center 42%",
    date: "2026-07-24",
    credit: "Built with Arnav Sharma",
    highlight: "2026 Founders, Inc. Night Hack (shipped in <6 hours)",
  },
  {
    title: "returner.fund",
    description:
      "Cytoscape network map ranking YC and a16z Speedrun startups by social traction. Uses GitHub, X, LinkedIn, Instagram, and other public signals to evaluate companies with log-normalized scoring.",
    href: "https://x.com/allenxtech/status/2077110491432804738",
    thumbnail: "/projects/returner-fund-3.png",
    thumbnailWidth: 606,
    thumbnailHeight: 536,
    objectPosition: "right center",
    date: "2026-07-14",
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
    year: "numeric",
  }).format(date);
}
