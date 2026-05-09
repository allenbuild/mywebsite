"use client";

import { useEffect, useMemo, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

type AgeCounterProps = {
  birthDate: Date;
  decimals?: number;
  className?: string;
};

export default function AgeCounter({
  birthDate,
  decimals = 9,
  className,
}: AgeCounterProps) {
  const birthMs = useMemo(() => birthDate.getTime(), [birthDate]);
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setNowMs(Date.now());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mean tropical year length (days) for a stable "age in years" counter.
  const msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
  const ageYears = nowMs === null ? NaN : (nowMs - birthMs) / msPerYear;

  const safeDecimals = clamp(decimals, 0, 12);
  const text = Number.isFinite(ageYears) ? ageYears.toFixed(safeDecimals) : "—";

  return <span className={className}>{text} y/o</span>;
}

