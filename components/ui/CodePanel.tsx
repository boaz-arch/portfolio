"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { highlight } from "@/components/ui/highlight";

/**
 * Code panel (DESIGN.md). A labeled region; the <pre> scrolls horizontally
 * inside the panel only and becomes focusable when it overflows, so keyboard
 * users can scroll it. Line numbers are CSS-generated with empty alt text,
 * so they are neither copied nor announced. Copying announces "Copied".
 */
export function CodePanel({
  title,
  code,
  startLine = 1,
  totalLines,
  className = "",
}: {
  title: string;
  code: string;
  startLine?: number;
  totalLines?: number;
  className?: string;
}) {
  const captionId = useId();
  const preRef = useRef<HTMLPreElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");
  const endLine = startLine + lines.length - 1;
  const fileLabel = title.replace(/^Placeholder:\s*/, "").split("/").pop() ?? title;

  useEffect(() => {
    const el = preRef.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollWidth > el.clientWidth + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      /* clipboard blocked: the code stays selectable */
    }
  }

  return (
    <figure
      role="region"
      aria-labelledby={captionId}
      className={`overflow-hidden rounded-md border border-border bg-surface-2 ${className}`}
      data-code-panel=""
    >
      <div className="flex items-center justify-between gap-3 border-b border-border py-1 pr-1 pl-4">
        <figcaption id={captionId} className="min-w-0 truncate font-mono text-mono-annotation text-text-muted">
          {title}
          {totalLines ? (
            <span>
              {" "}
              · lines {startLine}–{endLine} of {totalLines}
            </span>
          ) : null}
        </figcaption>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-3 hover:text-text"
        >
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
          <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
          <span className="sr-only">Copy code: {fileLabel}</span>
        </button>
      </div>
      <pre
        ref={preRef}
        tabIndex={overflowing ? 0 : undefined}
        className="code-lines overflow-x-auto p-4 font-mono text-mono-code text-text"
        style={{ counterReset: `line ${startLine - 1}` }}
      >
        <code>
          {lines.map((line, i) => (
            <span key={i} className="code-line">
              {highlight(line)}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </figure>
  );
}
