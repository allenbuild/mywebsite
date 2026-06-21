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
      <ol className="mt-3 space-y-6">
        {entries.map((entry, entryIndex) => (
          <li
            key={`${entry.date}-${entry.caption}`}
            className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_20rem] sm:items-start sm:gap-4"
          >
            <div className="min-w-0 sm:pt-0.5">
              <p className="text-[15px] italic leading-[1.45] sm:text-[16px] [font-family:var(--font-italic)] text-[color:var(--foreground)]">
                {entry.caption}
              </p>
              <time
                dateTime={entry.date}
                className="mt-1 block text-[14px] leading-[1.45] sm:text-[15px] text-[color:var(--muted-2)]"
              >
                {formatPhotoDate(entry.date)}
              </time>
            </div>

            <div
              className={`grid w-full gap-1.5 ${
                entry.photos.length === 3 ? "grid-cols-2" : ""
              }`}
              style={
                entry.photos.length === 3
                  ? undefined
                  : {
                      gridTemplateColumns: `repeat(${entry.photos.length}, minmax(0, 1fr))`,
                    }
              }
            >
              {entry.photos.map((photo, photoIndex) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox({ entryIndex, photoIndex })}
                  className={`group relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[color:var(--canvas)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)] ${
                    entry.photos.length === 3 && photoIndex === 0
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={900}
                    className="size-full object-cover transition-opacity group-hover:opacity-90"
                    style={
                      photo.objectPosition
                        ? { objectPosition: photo.objectPosition }
                        : undefined
                    }
                    sizes={
                      entry.photos.length === 3
                        ? photoIndex === 0
                          ? "(max-width: 640px) 100vw, 320px"
                          : "(max-width: 640px) 45vw, 156px"
                        : entry.photos.length > 1
                          ? `(max-width: 640px) 45vw, ${Math.round(320 / entry.photos.length)}px`
                          : "(max-width: 640px) 100vw, 320px"
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
