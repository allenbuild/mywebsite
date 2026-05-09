"use client";

import { useEffect, useMemo, useState } from "react";

type BirthdayCounterProps = {
  birthDate: Date;
  className?: string;
};

function nextBirthdayFrom(birthDate: Date, now: Date) {
  const month = birthDate.getMonth();
  const day = birthDate.getDate();

  const thisYear = now.getFullYear();
  let next = new Date(thisYear, month, day, 0, 0, 0, 0);
  if (next.getTime() <= now.getTime()) {
    next = new Date(thisYear + 1, month, day, 0, 0, 0, 0);
  }
  return next;
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function BirthdayCounter({
  birthDate,
  className,
}: BirthdayCounterProps) {
  const birthMs = useMemo(() => birthDate.getTime(), [birthDate]);
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    setNowMs(Date.now());
    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (nowMs === null) {
    return <span className={className}>birthday in —</span>;
  }

  const now = new Date(nowMs);
  const nextBirthday = nextBirthdayFrom(new Date(birthMs), now);
  const diffMs = Math.max(0, nextBirthday.getTime() - nowMs);

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <span className={className}>
      birthday in {days}d {hours}h {minutes}m {seconds}s
    </span>
  );
}

