import Link from "next/link";
import { ChevronLeft } from "./RoundedIcons";

export default function HomeBackLink({ className }: { className?: string }) {
  return (
    <Link href="/" className={className ?? "home-back-btn"}>
      <ChevronLeft size={12} />
      home
    </Link>
  );
}
