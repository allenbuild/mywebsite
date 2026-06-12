"use client";

import { useEffect } from "react";

export default function ViewTracker() {
  useEffect(() => {
    if (sessionStorage.getItem("view-recorded")) return;
    sessionStorage.setItem("view-recorded", "1");
    fetch("/api/views", { method: "POST" }).catch(() => {});
  }, []);

  return null;
}
