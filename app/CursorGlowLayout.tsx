"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";

export default function CursorGlowLayout({
  children,
  contentClassName,
}: {
  children: React.ReactNode;
  contentClassName?: string;
}) {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const glow =
    mounted &&
    createPortal(
      <>
        {/* Canvas: visible in the margins around the card */}
        <div
          aria-hidden
          className="cursor-glow-canvas pointer-events-none fixed inset-0 z-[1] overflow-hidden transition-opacity duration-300"
          style={{ opacity: active ? 1 : 0 }}
        >
          <div
            className="absolute size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              left: mouse.x,
              top: mouse.y,
              background:
                "radial-gradient(circle, var(--cursor-glow) 0%, transparent 68%)",
            }}
          />
        </div>
        {/* Card + canvas: spotlight on top of page content */}
        <div
          aria-hidden
          className="cursor-glow-spot pointer-events-none fixed inset-0 z-[40] overflow-hidden transition-opacity duration-300"
          style={{ opacity: active ? 1 : 0 }}
        >
          <div
            className="absolute size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              left: mouse.x,
              top: mouse.y,
              background:
                "radial-gradient(circle, var(--cursor-glow-spot) 0%, transparent 68%)",
            }}
          />
        </div>
      </>,
      document.body,
    );

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-4 py-4 sm:px-6 sm:py-6">
      {glow}
      <div
        className={`relative z-10 my-auto w-full min-w-0 ${contentClassName ?? "max-w-[45rem]"}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end px-5 pt-4 sm:px-6 sm:pt-5">
          <div className="pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
