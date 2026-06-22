import Link from "next/link";
import { ChevronLeft } from "./RoundedIcons";

export default function HomeBackLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={
        className ??
        "inline-flex items-center gap-1 text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
      }
    >
      <ChevronLeft />
      home
    </Link>
  );
}
