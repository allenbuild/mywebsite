"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = getPreferredTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark";
        setTheme(next);
        window.localStorage.setItem("theme", next);
        applyTheme(next);
      }}
      className={[
        "relative inline-flex h-7 w-14 shrink-0 rounded-full",
        isDark ? "bg-[#36A9FF]" : "bg-[#CFCFCF]",
        "transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--link)] focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[color:var(--background)]",
      ].join(" ")}
    >
      <span
        className={[
          "pointer-events-none absolute left-0.5 top-0.5 inline-block size-6 rounded-full bg-white",
          "transition-transform duration-200 ease-out",
          isDark ? "translate-x-7" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}