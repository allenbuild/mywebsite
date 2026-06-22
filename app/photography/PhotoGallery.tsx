"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import type { PhotoEntry } from "./photo-entries";
import { formatPhotoDate, groupPhotoEntriesByYear } from "./photo-entries";

const PHOTO_COL_PX = 320;
const STICKY_HEADER_HEIGHT = 88;

function photoThumbSize(photoCount: number, photoIndex: number): string {
  if (photoCount === 1) {
    return "(max-width: 640px) 100vw, 320px";
  }
  if (photoCount === 3 && photoIndex === 0) {
    return "(max-width: 640px) 100vw, 320px";
  }
  return `(max-width: 640px) 45vw, ${Math.round(PHOTO_COL_PX / 2)}px`;
}

function photoGridClass(photoCount: number): string {
  if (photoCount === 3 || photoCount === 4 || photoCount === 2) {
    return "grid-cols-2";
  }
  return "";
}

function photoColSpan(photoCount: number, photoIndex: number): string {
  if (photoCount === 3 && photoIndex === 0) {
    return "col-span-2";
  }
  return "";
}

type LightboxState = {
  entryIndex: number;
  photoIndex: number;
};

function useYearCollapse(
  sectionRef: RefObject<HTMLElement | null>,
  defaultCollapsed: boolean,
) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const userLocked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      if (userLocked.current) return;

      const rect = section.getBoundingClientRect();
      const scrolledPast = rect.bottom < STICKY_HEADER_HEIGHT + 12;
      const inView =
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > STICKY_HEADER_HEIGHT;

      if (scrolledPast) {
        setCollapsed(true);
      } else if (inView) {
        setCollapsed(false);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionRef]);

  const toggle = useCallback(() => {
    userLocked.current = true;
    setCollapsed((current) => !current);
  }, []);

  return { collapsed, toggle };
}

function PhotoEntryRow({
  entry,
  entryIndex,
  onOpen,
}: {
  entry: PhotoEntry;
  entryIndex: number;
  onOpen: (entryIndex: number, photoIndex: number) => void;
}) {
  return (
    <li className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_20rem] sm:items-start sm:gap-4">
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

      <div className={`grid w-full gap-1.5 ${photoGridClass(entry.photos.length)}`}>
        {entry.photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => onOpen(entryIndex, photoIndex)}
            className={`group relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[color:var(--canvas)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)] ${photoColSpan(entry.photos.length, photoIndex)}`}
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
              sizes={photoThumbSize(entry.photos.length, photoIndex)}
            />
          </button>
        ))}
      </div>
    </li>
  );
}

function PhotoYearSection({
  year,
  entries,
  entryIndexOffset,
  defaultCollapsed,
  onOpen,
}: {
  year: number;
  entries: PhotoEntry[];
  entryIndexOffset: number;
  defaultCollapsed: boolean;
  onOpen: (entryIndex: number, photoIndex: number) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { collapsed, toggle } = useYearCollapse(sectionRef, defaultCollapsed);

  return (
    <section ref={sectionRef} className="border-b border-[color:var(--rule)] last:border-b-0">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={!collapsed}
        className="flex w-full items-center justify-between py-3 text-left transition-colors hover:text-[color:var(--link)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)]"
      >
        <span className="text-[17px] font-semibold tracking-tight">{year}</span>
        <span
          aria-hidden
          className={`text-[18px] leading-none text-[color:var(--muted-2)] transition-transform duration-200 ${collapsed ? "-rotate-90" : ""}`}
        >
          ∨
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${collapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}
      >
        <div className="overflow-hidden">
          <ol className="space-y-6 pb-4">
            {entries.map((entry, index) => (
              <PhotoEntryRow
                key={`${entry.date}-${entry.caption}`}
                entry={entry}
                entryIndex={entryIndexOffset + index}
                onOpen={onOpen}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function PhotoGallery({ entries }: { entries: PhotoEntry[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const yearGroups = groupPhotoEntriesByYear(entries);

  const close = useCallback(() => setLightbox(null), []);
  const openLightbox = useCallback(
    (entryIndex: number, photoIndex: number) => {
      setLightbox({ entryIndex, photoIndex });
    },
    [],
  );

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

  let entryIndexOffset = 0;

  return (
    <>
      <div className="sticky top-0 z-20 -mx-5 border-b border-[color:var(--rule)] bg-[color:var(--surface)] px-5 pb-3 pt-4 sm:-mx-6 sm:px-6 sm:pt-5">
        <Link
          href="/"
          className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
        >
          ← home
        </Link>
        <h1 className="mt-3 text-xl font-semibold tracking-tight">photography</h1>
      </div>

      <div className="mt-1">
        {yearGroups.map((group, groupIndex) => {
          const offset = entryIndexOffset;
          entryIndexOffset += group.entries.length;

          return (
            <PhotoYearSection
              key={group.year}
              year={group.year}
              entries={group.entries}
              entryIndexOffset={offset}
              defaultCollapsed={groupIndex > 0}
              onOpen={openLightbox}
            />
          );
        })}
      </div>

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
