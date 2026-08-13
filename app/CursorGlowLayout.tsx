"use client";

import ThemeToggle from "./ThemeToggle";

export default function CursorGlowLayout({
  children,
  contentClassName,
}: {
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center px-5 py-8 sm:px-8 sm:py-12">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-end px-5 pt-5 sm:px-8 sm:pt-6">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
      <div
        className={`relative z-10 my-auto w-full min-w-0 ${contentClassName ?? "max-w-[621px]"}`}
      >
        {children}
      </div>
    </div>
  );
}
