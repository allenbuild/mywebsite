"use client";

import { useLayoutEffect, useRef } from "react";

const HEIGHT_VAR = "--page-card-height";
const STORAGE_KEY = "page-card-height";
const FALLBACK_HEIGHT = "34rem";

function readStoredHeight(): string {
  const fromStyle = document.documentElement.style
    .getPropertyValue(HEIGHT_VAR)
    .trim();
  if (fromStyle) return fromStyle;

  const fromComputed = getComputedStyle(document.documentElement)
    .getPropertyValue(HEIGHT_VAR)
    .trim();
  if (fromComputed && fromComputed !== FALLBACK_HEIGHT) return fromComputed;

  try {
    return window.localStorage.getItem(STORAGE_KEY) || FALLBACK_HEIGHT;
  } catch {
    return FALLBACK_HEIGHT;
  }
}

export default function PageCard({
  header,
  children,
  headerClassName = "px-5 pt-4 sm:px-6 sm:pt-5",
  bodyClassName = "px-5 pb-4 sm:px-6 sm:pb-5",
  mainClassName = "",
  sizeToContent = false,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  mainClassName?: string;
  /** When true, card hugs content and stores that height for other pages. */
  sizeToContent?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const syncFromHome = () => {
      el.style.removeProperty("height");
      const px = Math.round(el.getBoundingClientRect().height);
      if (px <= 0) return;
      const value = `${px}px`;
      document.documentElement.style.setProperty(HEIGHT_VAR, value);
      try {
        window.localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // ignore quota / private mode
      }
    };

    const applySharedHeight = () => {
      const value = readStoredHeight();
      document.documentElement.style.setProperty(HEIGHT_VAR, value);
      el.style.height = value;
    };

    if (sizeToContent) {
      syncFromHome();
      window.addEventListener("resize", syncFromHome);
      return () => window.removeEventListener("resize", syncFromHome);
    }

    applySharedHeight();
    window.addEventListener("resize", applySharedHeight);
    return () => window.removeEventListener("resize", applySharedHeight);
  }, [sizeToContent]);

  return (
    <main
      ref={ref}
      className={`flex max-h-[calc(100dvh-2rem)] w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl bg-[color:var(--surface)] shadow-[var(--card-shadow)] sm:max-h-[calc(100dvh-3rem)] ${
        sizeToContent ? "" : "h-[var(--page-card-height,34rem)]"
      } ${mainClassName}`}
    >
      <div className={`shrink-0 bg-[color:var(--surface)] ${headerClassName}`}>
        {header}
      </div>
      <div
        className={`page-card-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain ${bodyClassName}`}
      >
        {children}
      </div>
    </main>
  );
}
