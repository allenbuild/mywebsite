import HomeBackLink from "../HomeBackLink";
import CursorGlowLayout from "../CursorGlowLayout";
import MediaTimeline from "./MediaTimeline";

export default function MediaPage() {
  return (
    <CursorGlowLayout contentClassName="max-w-6xl">
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 pt-4 pb-4 shadow-[var(--card-shadow)] sm:px-6 sm:pt-5 sm:pb-5">
        <HomeBackLink />
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">media</h1>
        <MediaTimeline />
      </main>
    </CursorGlowLayout>
  );
}
