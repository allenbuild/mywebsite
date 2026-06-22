import CursorGlowLayout from "../CursorGlowLayout";
import SubpageHeader from "../SubpageHeader";
import MediaTimeline from "./MediaTimeline";

export default function MediaPage() {
  return (
    <CursorGlowLayout contentClassName="max-w-6xl" showThemeToggle={false}>
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 pt-4 pb-4 shadow-[var(--card-shadow)] sm:px-6 sm:pt-5 sm:pb-5">
        <SubpageHeader title="media" titleClassName="text-3xl" />
        <MediaTimeline />
      </main>
    </CursorGlowLayout>
  );
}
