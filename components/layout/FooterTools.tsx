"use client";

import { useEffect, useState } from "react";
import { TerminalIcon } from "@/components/icons";

export const SHORTCUT_KEY = "terminal-shortcut";

/** Whether the backquote shortcut is enabled (default on). Read by the terminal. */
export function shortcutEnabled() {
  try {
    return localStorage.getItem(SHORTCUT_KEY) !== "off";
  } catch {
    return true;
  }
}

/**
 * Footer terminal controls: "Open terminal" and the shortcut toggle
 * (WCAG 2.1.4: single-key shortcuts can be turned off). Both need
 * JavaScript, so they are hidden without it.
 */
export function FooterTools() {
  const [on, setOn] = useState(true);

  useEffect(() => setOn(shortcutEnabled()), []);

  function toggle() {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(SHORTCUT_KEY, next ? "on" : "off");
    } catch {
      /* storage unavailable: applies to this page view only */
    }
    window.dispatchEvent(new CustomEvent("terminal:shortcut", { detail: next }));
  }

  const btn =
    "inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-small text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text";

  return (
    <div className="js-only flex flex-wrap items-center gap-x-4 gap-y-1">
      <button
        type="button"
        onClick={(e) => window.dispatchEvent(new CustomEvent("terminal:open", { detail: { trigger: e.currentTarget } }))}
        className={btn}
      >
        <TerminalIcon size={14} />
        Open terminal
      </button>
      <button type="button" aria-pressed={on} onClick={toggle} className={btn}>
        <span aria-hidden="true" className={`inline-block size-2 border border-current ${on ? "bg-current" : ""}`} />
        <span className="sr-only">Keyboard shortcut for terminal</span>
        <span aria-hidden="true">Shortcut: {on ? "on" : "off"}</span>
      </button>
    </div>
  );
}
