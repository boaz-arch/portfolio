"use client";

import { useId, useState } from "react";
import { BracketsIcon } from "@/components/icons";
import { CodePanel } from "@/components/ui/CodePanel";
import type { Excerpt } from "@/lib/source-excerpt";

/**
 * The editor theme's signature: reveal the real JSX behind the section
 * being read. A toggle (aria-pressed) that shows a code panel under it.
 */
export function ViewSource({ excerpt, section }: { excerpt: Excerpt; section: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className="js-only mb-8">
      <button
        type="button"
        aria-pressed={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border-strong px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text aria-pressed:bg-surface-3 aria-pressed:text-text"
      >
        <span aria-hidden="true" className={`inline-block size-2 border border-current ${open ? "border-accent bg-accent" : ""}`} />
        <BracketsIcon size={14} />
        View source
        <span className="sr-only">: {section} section</span>
      </button>
      <div id={panelId} hidden={!open} className="mt-3">
        {open ? (
          <CodePanel title={excerpt.path} code={excerpt.code} startLine={excerpt.start} totalLines={excerpt.total} />
        ) : null}
      </div>
    </div>
  );
}
