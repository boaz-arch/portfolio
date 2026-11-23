"use client";

import { TerminalIcon } from "@/components/icons";

/**
 * Opens the global site terminal. The terminal (build step 6) listens for
 * the "terminal:open" event and returns focus to this button on close.
 */
export function OpenTerminalButton({ size = "large" }: { size?: "large" | "small" }) {
  return (
    <div className="js-only flex flex-wrap items-center gap-x-4 gap-y-2">
      <button
        type="button"
        onClick={(e) => window.dispatchEvent(new CustomEvent("terminal:open", { detail: { trigger: e.currentTarget } }))}
        className={[
          "inline-flex items-center gap-2 rounded-sm border border-border-strong bg-surface-1 text-text",
          "transition-colors duration-(--dur-fast) ease-out hover:bg-surface-2",
          size === "large" ? "min-h-14 px-5 text-body font-semibold" : "min-h-11 px-4 text-label",
        ].join(" ")}
      >
        <TerminalIcon size={16} />
        Open terminal
      </button>
      <span className="text-small text-text-muted">
        or press{" "}
        <kbd className="inline-flex min-w-6 items-center justify-center rounded-xs border border-border-strong bg-surface-2 px-2 font-sans text-body text-text">
          `
        </kbd>{" "}
        (the backquote key, left of 1)
      </span>
    </div>
  );
}
