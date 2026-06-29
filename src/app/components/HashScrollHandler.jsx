"use client";
import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);

    // Wait for the page layout to settle after hydration and asset loading
    // (Spline scene, images, etc. shift layout significantly before they render)
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
