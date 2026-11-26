"use client";

import { useEffect, useRef, useState } from "react";

type RobotHandle = {
  toggle: () => boolean;
  stop: () => void;
};

type RobotOptions = {
  cols: number;
  rows: number;
  zoom: number;
  ramp: string;
  lineHeight: number;
  font: string;
  colors: string[];
  onFail: () => void;
};

declare global {
  interface Window {
    DuetRobots?: {
      start: (canvas: HTMLCanvasElement, options: RobotOptions) => RobotHandle;
    };
  }
}

const ARIA_LABEL =
  "ASCII animation, 10 seconds, looping: two robot arms hand a bar across a table, one arm holds a wheel while the other slides an axle through it, and two arms take turns stacking one tower. Click to pause or play.";

export default function AsciiRobots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<RobotHandle | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (window.DuetRobots) {
      setReady(true);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="/duet-robots.js"]',
    );
    const markReady = () => setReady(true);

    if (existing) {
      existing.addEventListener("load", markReady);
      return () => existing.removeEventListener("load", markReady);
    }

    const script = document.createElement("script");
    script.src = "/duet-robots.js";
    script.async = true;
    script.dataset.nscript = "afterInteractive";
    script.addEventListener("load", markReady);
    document.body.appendChild(script);
    return () => script.removeEventListener("load", markReady);
  }, []);

  useEffect(() => {
    if (!ready || !canvasRef.current || !window.DuetRobots) return;

    handleRef.current = window.DuetRobots.start(canvasRef.current, {
      cols: 132,
      rows: 44,
      zoom: 1.45,
      ramp: " .,-~:;=!*#$@",
      lineHeight: 1,
      font: "ui-monospace,SFMono-Regular,Menlo,monospace",
      colors: ["#A0A5A8", "#2A2A2A", "#5E6A72"],
      onFail: () => setFailed(true),
    });

    return () => {
      handleRef.current?.stop();
      handleRef.current = null;
    };
  }, [ready]);

  return (
    <figure className="ascii-figure">
      <button
        type="button"
        className="ascii-play"
        aria-label={ARIA_LABEL}
        onClick={() => handleRef.current?.toggle()}
      >
        <canvas ref={canvasRef} className="ascii-canvas" />
      </button>
      {failed ? (
        <p className="ascii-fail">this animation needs webgl.</p>
      ) : null}
    </figure>
  );
}
