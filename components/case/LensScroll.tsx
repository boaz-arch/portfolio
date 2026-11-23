"use client";

import { useEffect } from "react";
import { CASE_SECTIONS } from "@/components/case/sections-meta";

/**
 * A lens chosen on /work carries into the case study (?lens=security).
 * The row still morphs into the header; once the morph has landed, the
 * page scrolls to the matching section and focus moves to its h2
 * (instead of the h1). Reduced motion: no smooth scroll, no wait.
 */
export function LensScroll() {
  useEffect(() => {
    const lens = new URLSearchParams(location.search).get("lens");
    if (!lens) return;
    const target = CASE_SECTIONS.find((s) => s.lens !== null && s.lens === lens);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(
      () => {
        const h2 = document.getElementById(`${target.id}-title`);
        if (!h2) return;
        h2.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        h2.focus({ preventScroll: true });
      },
      reduce ? 50 : 480,
    );
    return () => clearTimeout(t);
  }, []);
  return null;
}
