import CursorGlowLayout from "../CursorGlowLayout";
import SubpageHeader from "../SubpageHeader";

export default function ProjectsPage() {
  return (
    <CursorGlowLayout showThemeToggle={false}>
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--card-shadow)] sm:px-6 sm:py-5">
        <SubpageHeader title="projects" />
        <p className="mt-2 text-[15px] leading-[1.5] text-[color:var(--muted)]">
          soon-to-be collection of things I&apos;ve built, shipped, and
          tinkered on.
        </p>
      </main>
    </CursorGlowLayout>
  );
}
