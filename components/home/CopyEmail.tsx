"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
          } catch {
            /* clipboard blocked: the address stays selectable */
          }
        }}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border-strong px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text"
      >
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
        <span className="sr-only">Copy email address</span>
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </>
  );
}
