/** First focusable element on every page (BRIEF.md, Structure & semantics). */
export function SkipLink() {
  return (
    <a
      href="#main"
      className={[
        "fixed left-4 top-4 z-50 inline-flex min-h-11 items-center rounded-sm bg-design px-4 text-label text-on-accent",
        "-translate-y-[200%] focus-visible:translate-y-0 focus:translate-y-0",
        "focus-visible:outline-text",
      ].join(" ")}
    >
      Skip to main content
    </a>
  );
}
