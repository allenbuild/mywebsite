import Link from "next/link";
import { ChevronLeft } from "./RoundedIcons";

export default function HomeBackLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={
        className ??
        "home-back-btn text-[color:var(--link)] visited:text-[color:var(--link)] hover:!bg-[color:var(--link)] hover:!text-white visited:hover:!text-white dark:text-white dark:visited:text-white"
      }
    >
      <ChevronLeft size={12} />
      home
    </Link>
  );
}
