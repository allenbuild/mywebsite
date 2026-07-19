export type ProjectEntry = {
  title: string;
  description: string;
  href: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  objectPosition?: string;
  /** ISO date (YYYY-MM-DD) — used for display */
  date: string;
  credit?: string;
};

export type ComingSoonProject = {
  title: string;
  description: string;
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
    title: "FTC Freight Frenzy Robot",
    description:
      "Robot with a G10 composite drivetrain, retractable odometry system, and fully 3D-printed mechanisms. Uses OpenCV, encoder-based odometry, and a custom Java navigation library for autonomous path planning, alongside Xbox controller-based teleoperation.",
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
  {
    title: "returner.fund",
    description:
      "Venture platform analyzing social traction across Y Combinator and a16z Speedrun startups. Uses GitHub, X, LinkedIn, Instagram, Product Hunt, and other web signals to rank companies with log-normalized, recency-weighted scoring and an interactive Cytoscape graph built with Next.js, Node.js, React, Supabase, and TypeScript.",
    href: "https://x.com/allenxtech/status/2077110491432804738",
    thumbnail: "/projects/returner-fund-2.png",
    thumbnailWidth: 864,
    thumbnailHeight: 733,
    objectPosition: "center 62%",
    date: "2026-07-14",
  },
];

const comingSoonProjects: ComingSoonProject[] = [
  {
    title: "Pickup Basketball Box Score",
    description:
      "Computer vision system that tracks makes, misses, rebounds, assists, and player statistics from pickup basketball games in real time using a sideline webcam.",
  },
  {
    title: "Pool Table CV",
    description:
      "Computer vision system that detects balls, predicts trajectories, tracks game state, and recommends optimal shots in real time using an overhead webcam.",
  },
  {
    title: "Ramsey",
    description:
      "Converts cooking videos from YouTube, Instagram, and TikTok into structured recipes with ingredients, measurements, and step-by-step instructions.",
  },
];

export function getProjectEntries(): ProjectEntry[] {
  return [...projectEntries];
}

export function getComingSoonProjects(): ComingSoonProject[] {
  return [...comingSoonProjects];
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
