"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";

type Theme = "light" | "dark";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

const GLOW_SIZE = 340;

function GlowSpot({
  x,
  y,
  background,
}: {
  x: number;
  y: number;
  background: string;
}) {
  return (
    <div
      style={{
        position: "fixed",
        left: x,
        top: y,
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background,
        filter: "blur(40px)",
        willChange: "left, top",
      }}
    />
  );
}

export default function CursorGlowLayout({
  children,
  contentClassName,
  showThemeToggle = true,
}: {
  children: React.ReactNode;
  contentClassName?: string;
  showThemeToggle?: boolean;
}) {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    setTheme(readTheme());

    const observer = new MutationObserver(() => {
      setTheme(readTheme());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setActive(true);
    };

    const handleLeave = () => setActive(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
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

  const canvasGlow =
    theme === "dark"
      ? "radial-gradient(circle, rgba(255,255,255,0.32) 0%, transparent 62%)"
      : "radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 62%)";

  const glowLayer =
    mounted &&
    createPortal(
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0 }}
      >
        <GlowSpot x={mouse.x} y={mouse.y} background={canvasGlow} />
      </div>,
      document.body,
    );

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-4 py-4 sm:px-6 sm:py-6">
      {glowLayer}
      <div
        className={`relative z-10 my-auto w-full min-w-0 ${contentClassName ?? "max-w-[45rem]"}`}
      >
        {showThemeToggle && (
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end px-5 pt-4 sm:px-6 sm:pt-5">
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
