"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { PhotoEntry } from "./photo-entries";
import { formatPhotoDate, groupPhotoEntriesByYear } from "./photo-entries";

const PHOTO_COL_PX = 320;
const COLLAPSED_BAR_HEIGHT = 30;

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
  headerHeight,
  onOpen,
}: {
  year: number;
  entries: PhotoEntry[];
  entryIndexOffset: number;
  defaultCollapsed: boolean;
  headerHeight: number;
  onOpen: (entryIndex: number, photoIndex: number) => void;
}) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collapsed) return;

    const content = contentRef.current;
    if (!content) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !entry.isIntersecting &&
          entry.boundingClientRect.top < headerHeight
        ) {
          setCollapsed(true);
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    observer.observe(content);
    return () => observer.disconnect();
  }, [collapsed, headerHeight]);

  const toggle = useCallback(() => {
    setCollapsed((current) => !current);
  }, []);

  return (
    <section>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={!collapsed}
        style={{ top: headerHeight, height: COLLAPSED_BAR_HEIGHT }}
        className="sticky z-20 flex w-full items-center justify-between border-b border-[color:var(--rule)] bg-[color:var(--surface)] px-0 text-left transition-colors hover:text-[color:var(--link)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)]"
      >
        <span
          className={`font-semibold tracking-tight ${collapsed ? "text-[14px]" : "text-[15px]"}`}
        >
          {year}
        </span>
        <span
          aria-hidden
          className={`text-[14px] leading-none text-[color:var(--muted-2)] transition-transform duration-200 ${collapsed ? "-rotate-90" : ""}`}
        >
          ∨
        </span>
      </button>

      {!collapsed && (
        <div ref={contentRef} className="pb-4 pt-3">
          <ol className="space-y-6">
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
      )}
    </section>
  );
}

export default function PhotoGallery({ entries }: { entries: PhotoEntry[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef<HTMLDivElement>(null);
  const yearGroups = groupPhotoEntriesByYear(entries);

  const close = useCallback(() => setLightbox(null), []);
  const openLightbox = useCallback(
    (entryIndex: number, photoIndex: number) => {
      setLightbox({ entryIndex, photoIndex });
    },
    [],
  );

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const update = () => setHeaderHeight(header.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

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
      <div
        ref={headerRef}
        className="sticky top-0 z-30 -mx-5 border-b border-[color:var(--rule)] bg-[color:var(--surface)] px-5 pb-2 pt-4 sm:-mx-6 sm:px-6 sm:pt-5"
      >
        <Link
          href="/"
          className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
        >
          ← home
        </Link>
        <h1 className="mt-2 text-xl font-semibold tracking-tight">photography</h1>
      </div>

      <div>
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
              headerHeight={headerHeight}
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
