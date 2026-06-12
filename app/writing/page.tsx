import Link from "next/link";
import CursorGlowLayout from "../CursorGlowLayout";

export default function WritingPage() {
  return (
    <CursorGlowLayout>
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--card-shadow)] sm:px-6 sm:py-5">
        <Link href="/" className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]">
          ← home
        </Link>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">writing</h1>
        <p className="mt-2 text-[15px] leading-[1.5] text-[color:var(--muted)]">
          soon-to-be reservoir of my think pieces, rants, shower thoughts, &amp;
          more.
        </p>
      </main>
    </CursorGlowLayout>
  );
}
