"use client";

import { useLayoutEffect, useRef } from "react";

const HEIGHT_VAR = "--page-card-height";
const STORAGE_KEY = "page-card-height-v4";
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

function persistHeight(value: string) {
  document.documentElement.style.setProperty(HEIGHT_VAR, value);
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore quota / private mode
  }
}

export default function PageCard({
  header,
  children,
  headerClassName = "px-5 pt-4 sm:px-6 sm:pt-5",
  bodyClassName = "px-5 pb-4 sm:px-6 sm:pb-5",
  mainClassName = "",
  sizeToContent = false,
  fitContent = false,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  mainClassName?: string;
  /** Homepage: hug content and store that height for other pages. */
  sizeToContent?: boolean;
  /** Hug content instead of using the shared homepage height. */
  fitContent?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const syncFromHome = () => {
      el.style.removeProperty("height");
      const natural = Math.round(el.getBoundingClientRect().height);
      if (natural <= 0) return;
      persistHeight(`${natural}px`);
    };

    const applySharedHeight = () => {
      const value = readStoredHeight();
      persistHeight(value);
      el.style.height = value;
    };

    if (sizeToContent) {
      syncFromHome();
      window.addEventListener("resize", syncFromHome);
      return () => window.removeEventListener("resize", syncFromHome);
    }

    if (fitContent) return;

    applySharedHeight();
    window.addEventListener("resize", applySharedHeight);
    return () => window.removeEventListener("resize", applySharedHeight);
  }, [sizeToContent, fitContent]);

  const usesSharedHeight = !sizeToContent && !fitContent;

  return (
    <main
      ref={ref}
      className={`flex max-h-[calc(100dvh-2rem)] w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl bg-[color:var(--surface)] shadow-[var(--card-shadow)] sm:max-h-[calc(100dvh-3rem)] ${
        usesSharedHeight ? "h-[var(--page-card-height,34rem)]" : ""
      } ${mainClassName}`}
    >
      <div className={`shrink-0 bg-[color:var(--surface)] ${headerClassName}`}>
        {header}
      </div>
      <div
        className={`page-card-scroll min-h-0 flex-1 overflow-y-scroll overscroll-contain ${bodyClassName}`}
      >
        {children}
      </div>
    </main>
  );
}
