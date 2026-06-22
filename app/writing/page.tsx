import CursorGlowLayout from "../CursorGlowLayout";
import SubpageHeader from "../SubpageHeader";

export default function WritingPage() {
  return (
    <CursorGlowLayout showThemeToggle={false}>
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--card-shadow)] sm:px-6 sm:py-5">
        <SubpageHeader title="writing" />
        <p className="mt-2 text-[15px] leading-[1.5] text-[color:var(--muted)]">
          soon-to-be reservoir of my think pieces, rants, shower thoughts, &amp;
          more.
        </p>
      </main>
    </CursorGlowLayout>
  );
}
