"use client";

import ThemeToggle from "./ThemeToggle";

export default function CursorGlowLayout({
  children,
  contentClassName,
  showThemeToggle = true,
}: {
  children: React.ReactNode;
  contentClassName?: string;
  showThemeToggle?: boolean;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col px-5 py-8 sm:px-8 sm:py-12">
      {showThemeToggle ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end px-5 pt-5 sm:px-8 sm:pt-6">
          <div className="pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>
      ) : null}
      <div
        className={`relative z-10 mx-auto w-full min-w-0 ${contentClassName ?? "max-w-[40rem]"}`}
      >
        {children}
      </div>
    </div>
  );
}
