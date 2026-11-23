"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { themeFor, transitionTypes } from "@/lib/routes";

/**
 * Navigation side effects (DESIGN.md: Accessibility → Navigation, Page transitions).
 *
 * 1. Popstate patch: Back/Forward navigations carry no transition types, so
 *    before React captures the transition we compute the same type from the
 *    previous and next URL and expose it as html[data-nav] / html[data-enter].
 * 2. html[data-section] mirrors the current theme for chrome outside pages.
 * 3. After every client navigation, focus moves to the new page's h1.
 *    (Next.js's built-in route announcer reads the new document.title.)
 */
export function RouteEffects() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const first = useRef(true);

  useEffect(() => {
    const onPop = () => {
      const types = transitionTypes(previous.current, location.pathname);
      const html = document.documentElement;
      const nav = types.find((t) => !t.startsWith("to-")) ?? "";
      const enter = types.find((t) => t.startsWith("to-"))?.slice(3) ?? "";
      html.dataset.nav = nav;
      html.dataset.enter = enter;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.dataset.section = themeFor(pathname);
    previous.current = pathname;

    if (first.current) {
      first.current = false;
      return;
    }

    // Clear the popstate hints once the new page is in place.
    const clearHints = setTimeout(() => {
      delete html.dataset.nav;
      delete html.dataset.enter;
    }, 600);

    // Focus the new page's h1 after the DOM has committed.
    const raf = requestAnimationFrame(() => {
      if (document.querySelector("dialog[open]")) return;
      const h1 = document.querySelector<HTMLElement>("main h1");
      if (!h1) return;
      if (!h1.hasAttribute("tabindex")) h1.setAttribute("tabindex", "-1");
      h1.focus({ preventScroll: true });
    });

    return () => {
      clearTimeout(clearHints);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
