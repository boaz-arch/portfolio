"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { clean, themeFor, transitionTypes } from "@/lib/routes";

type ReplayEvent = PopStateEvent & { __vtReplay?: true };

/**
 * Navigation side effects (DESIGN.md: Accessibility → Navigation, Page transitions).
 *
 * 1. Back/Forward (popstate patch). Back/Forward navigations carry no
 *    transition types, and React completes updates made *during* a trusted
 *    popstate event synchronously, without a view transition. So the real
 *    event is stopped in the capture phase and replayed to Next.js on the
 *    next task, where React runs it as a normal transition. The type is
 *    exposed as html[data-nav] / [data-enter]; ViewTransitions without a
 *    type use their `default` class, which the CSS keys off those attributes.
 *    Reduced motion or no View Transitions: the event passes straight
 *    through, and Back is an instant swap.
 * 2. html[data-section] mirrors the current theme for chrome outside pages.
 * 3. After every client navigation, focus moves to the new page's h1.
 *    (Next.js's built-in route announcer reads the new document.title.)
 */
export function RouteEffects() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const first = useRef(true);

  useEffect(() => {
    const html = document.documentElement;

    const onPop = (event: Event) => {
      const e = event as ReplayEvent;
      if (e.__vtReplay) return; // the replay goes straight to Next.js

      const from = previous.current;
      const to = location.pathname;
      const types = transitionTypes(from, to);
      html.dataset.nav = types.find((t) => !t.startsWith("to-")) ?? "";
      html.dataset.enter = types.find((t) => t.startsWith("to-"))?.slice(3) ?? "";

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!("startViewTransition" in document) || reduce || clean(from) === clean(to)) return;

      e.stopImmediatePropagation();
      const state = history.state;
      setTimeout(() => {
        const replay = new PopStateEvent("popstate", { state }) as ReplayEvent;
        replay.__vtReplay = true;
        window.dispatchEvent(replay);
      }, 0);
    };

    window.addEventListener("popstate", onPop, { capture: true });
    return () => window.removeEventListener("popstate", onPop, { capture: true });
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
    }, 700);

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
