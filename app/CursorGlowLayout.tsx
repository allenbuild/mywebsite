"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [active, setActive] = useState(false);
  const [overCard, setOverCard] = useState(false);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const handleMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setActive(true);
    };

    const handleLeave = () => setActive(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    const animate = () => {
      setMouse((current) => {
        const target = targetRef.current;
        return {
          x: current.x + (target.x - current.x) * 0.32,
          y: current.y + (target.y - current.y) * 0.32,
        };
      });
      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const showGlow = active && !overCard;

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-4 py-10 sm:px-6 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
        style={{ opacity: showGlow ? 1 : 0 }}
      >
        <div
          className="absolute size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            left: mouse.x,
            top: mouse.y,
            background:
              "radial-gradient(circle, var(--cursor-glow) 0%, transparent 62%)",
          }}
        />
      </div>

      <div
        className="relative z-10 w-full max-w-4xl"
        onMouseEnter={() => setOverCard(true)}
        onMouseLeave={() => setOverCard(false)}
      >
        {children}
      </div>
    </div>
  );
}
