import Link from "next/link";
import CursorGlowLayout from "../CursorGlowLayout";
import PhotoGallery from "./PhotoGallery";
import { getPhotoEntries } from "./photo-entries";

export default function PhotographyPage() {
  const entries = getPhotoEntries();

  return (
    <CursorGlowLayout contentClassName="max-w-3xl">
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--card-shadow)] sm:px-6 sm:py-5">
        <Link
          href="/"
          className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
        >
          ← home
        </Link>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          photography
        </h1>

        <PhotoGallery entries={entries} />
      </main>
    </CursorGlowLayout>
  );
}
