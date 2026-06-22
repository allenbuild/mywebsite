import Link from "next/link";
import { ChevronLeft } from "./RoundedIcons";

export default function HomeBackLink({ className }: { className?: string }) {
  return (
    <Link href="/" className={className ?? "home-back-btn"}>
      <span className="home-back-btn__icon-wrap" aria-hidden>
        <span className="home-back-btn__icon home-back-btn__icon--base">
          <ChevronLeft size={12} />
        </span>
        <span className="home-back-btn__icon home-back-btn__icon--hover">
          <ChevronLeft size={12} />
        </span>
      </span>
      <span className="home-back-btn__label">
        <span className="home-back-btn__label-base">home</span>
        <span className="home-back-btn__label-hover" aria-hidden>
          home
        </span>
      </span>
    </Link>
  );
}
