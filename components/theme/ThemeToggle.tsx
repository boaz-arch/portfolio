"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

type Theme = "dark" | "light";

export function applyTheme(next: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", next);
  root.style.colorScheme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage unavailable: the choice lasts for this page view only */
  }
  window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
}

export function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/** Theme switch. Named "Dark theme"; aria-pressed=true means dark is on. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(currentTheme());
    const onChange = (e: Event) => setTheme((e as CustomEvent<Theme>).detail);
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  const dark = theme === "dark";

  return (
    <button
      type="button"
      aria-pressed={dark}
      onClick={() => switchTheme(dark ? "light" : "dark")}
      className="inline-flex size-11 items-center justify-center rounded-sm text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text"
    >
      <span className="sr-only">Dark theme</span>
      {dark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}

/**
 * Switch theme. Where the View Transitions API exists and motion is allowed,
 * the swap is a short crossfade so the whole page changes as one surface;
 * otherwise (and under reduced motion) it is instant.
 */
export function switchTheme(next: Theme) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (!reduce && typeof doc.startViewTransition === "function") {
    document.documentElement.classList.add("theme-transition");
    const t = doc.startViewTransition(() => applyTheme(next)) as { finished?: Promise<void> };
    t?.finished?.finally(() => document.documentElement.classList.remove("theme-transition"));
  } else {
    applyTheme(next);
  }
}
