"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { PhotoEntry } from "./photo-entries";
import { formatPhotoDate } from "./photo-entries";

type LightboxState = {
  entryIndex: number;
  photoIndex: number;
};

export default function PhotoGallery({ entries }: { entries: PhotoEntry[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const active =
    lightbox === null
      ? null
      : {
          entry: entries[lightbox.entryIndex],
          photo: entries[lightbox.entryIndex].photos[lightbox.photoIndex],
          entryIndex: lightbox.entryIndex,
          photoIndex: lightbox.photoIndex,
        };

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") {
        const photos = entries[active.entryIndex].photos;
        if (photos.length > 1) {
          setLightbox({
            entryIndex: active.entryIndex,
            photoIndex: (active.photoIndex + 1) % photos.length,
          });
        }
      }
      if (event.key === "ArrowLeft") {
        const photos = entries[active.entryIndex].photos;
        if (photos.length > 1) {
          setLightbox({
            entryIndex: active.entryIndex,
            photoIndex:
              (active.photoIndex - 1 + photos.length) % photos.length,
          });
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, entries]);

  return (
    <>
      <ol className="mt-4 space-y-8">
        {entries.map((entry, entryIndex) => (
          <li
            key={`${entry.date}-${entry.caption}`}
            className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8"
          >
            <div className="min-w-0 sm:pt-1">
              <p className="text-[17px] italic leading-[1.45] sm:text-[18px] [font-family:var(--font-italic)] text-[color:var(--foreground)]">
                {entry.caption}
              </p>
              <time
                dateTime={entry.date}
                className="mt-1.5 block text-[16px] leading-[1.45] sm:text-[17px] text-[color:var(--muted-2)]"
              >
                {formatPhotoDate(entry.date)}
              </time>
            </div>

            <div
              className={
                entry.photos.length > 1
                  ? "grid max-w-[13rem] grid-cols-2 gap-2 sm:max-w-[15rem] sm:grid-cols-3"
                  : "min-w-0 max-w-[13rem] sm:max-w-[15rem]"
              }
            >
              {entry.photos.map((photo, photoIndex) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox({ entryIndex, photoIndex })}
                  className={
                    entry.photos.length > 1
                      ? "group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[color:var(--canvas)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)]"
                      : "group relative block w-full overflow-hidden rounded-lg bg-[color:var(--canvas)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)]"
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={900}
                    className={
                      entry.photos.length > 1
                        ? "size-full object-cover transition-opacity group-hover:opacity-90"
                        : "h-auto w-full transition-opacity group-hover:opacity-95"
                    }
                    sizes={
                      entry.photos.length > 1
                        ? "(max-width: 640px) 40vw, 120px"
                        : "(max-width: 640px) 52vw, 240px"
                    }
                  />
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.photo.alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-2xl leading-none text-white/80 transition-colors hover:text-white"
            aria-label="Close"
          >
            ×
          </button>

          <div
            className="relative flex max-h-[85vh] max-w-[min(90vw,56rem)] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.photo.src}
              alt={active.photo.alt}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto max-w-full object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
