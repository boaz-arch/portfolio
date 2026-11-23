import { site } from "@/content/site";

/**
 * The plain path to the CV. It is never only behind the Security challenge
 * (BRIEF.md: must-haves). `label` lets /security use the challenge wording.
 */
export function CvLink({ label = "Download CV" }: { label?: string }) {
  const { href, size, placeholder } = site.cv;
  return (
    <a href={href} download className="inline-flex min-h-11 items-center gap-2 text-text underline">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path d="M3.5 1.5h6l3 3v10h-9z M9.5 1.5v3h3" />
      </svg>
      <span>
        {label} (PDF, {size}){placeholder ? <span className="text-text-muted">, placeholder</span> : null}
      </span>
    </a>
  );
}
