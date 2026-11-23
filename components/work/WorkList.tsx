"use client";

import { addTransitionType, startTransition, useEffect, useId, useState } from "react";
import { CheckIcon, disciplineIcon } from "@/components/icons";
import { disciplines, type Discipline, type Project } from "@/content/site";
import { disciplineLabel } from "@/components/ui/Tag";
import { ProjectRow, type Lens } from "@/components/work/ProjectRow";
import type { Theme } from "@/lib/routes";

const LENSES: { id: Lens; label: string; theme: Theme }[] = [
  { id: "overview", label: "Overview", theme: "home" },
  { id: "design", label: "Design", theme: "design" },
  { id: "code", label: "Code", theme: "development" },
  { id: "systems", label: "Systems", theme: "systems" },
  { id: "security", label: "Security", theme: "security" },
];
const isLens = (v: string | null): v is Lens => LENSES.some((l) => l.id === v);

type Filter = "all" | Discipline;

/**
 * /work (DESIGN.md: Lenses). Filters choose which projects; lenses choose
 * what you see of them. The lens is mirrored to ?lens= and sets the page
 * theme (accent). One polite live region announces both.
 */
export function WorkList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lens, setLens] = useState<Lens>("overview");
  const lensName = useId();

  // Read the lens from the URL after hydration (the page itself is prerendered as Overview).
  useEffect(() => {
    const fromUrl = new URLSearchParams(location.search).get("lens");
    if (isLens(fromUrl)) setLens(fromUrl);
  }, []);

  function chooseLens(next: Lens) {
    const url = new URL(location.href);
    if (next === "overview") url.searchParams.delete("lens");
    else url.searchParams.set("lens", next);
    // Native history API: no navigation, no history entry per click.
    window.history.replaceState(window.history.state, "", url);
    startTransition(() => {
      addTransitionType("lens");
      setLens(next);
    });
  }

  const shown = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));
  const lensLabel = LENSES.find((l) => l.id === lens)!.label;
  const status =
    (filter === "all"
      ? `Showing all ${projects.length} projects`
      : `Showing ${shown.length} of ${projects.length} projects tagged ${disciplineLabel(filter)}`) +
    (lens === "overview" ? "." : `, ${lensLabel} lens.`);
  const theme = LENSES.find((l) => l.id === lens)!.theme;

  const options: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...disciplines];

  return (
    <div data-section={theme} className="col-full grid grid-cols-subgrid">
      <fieldset className="js-only col-full" data-inspect="LensSwitch" data-source="components/work/WorkList.tsx">
        <legend className="text-label text-text-secondary">Lens</legend>
        <div className="mt-2 flex flex-wrap gap-2 md:gap-0">
          {LENSES.map((l, i) => {
            const checked = lens === l.id;
            return (
              <label
                key={l.id}
                className={[
                  "relative inline-flex min-h-11 cursor-pointer items-center gap-2 border border-border-strong px-4 text-label",
                  "transition-colors duration-(--dur-fast) ease-out has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus has-[:focus-visible]:outline-solid",
                  // Separate segments below md (they wrap at 320–375px); joined from md.
                  "rounded-sm md:rounded-none",
                  i === 0 ? "md:rounded-l-sm" : "md:-ml-px",
                  i === LENSES.length - 1 ? "md:rounded-r-sm" : "",
                  checked ? "z-[1] bg-surface-3 text-text" : "bg-surface-1 text-text-secondary hover:bg-surface-2 hover:text-text",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name={lensName}
                  value={l.id}
                  checked={checked}
                  onChange={() => chooseLens(l.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  data-section={l.theme}
                  className={`inline-block size-2 border ${checked ? "border-accent bg-accent" : "border-current"}`}
                />
                {l.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div
        role="group"
        aria-label="Filter projects by discipline"
        className="js-only col-full mt-6 flex flex-wrap gap-2"
        data-inspect="TagFilter"
        data-source="components/work/WorkList.tsx"
      >
        {options.map((o) => {
          const pressed = filter === o.id;
          const Icon = o.id === "all" ? null : disciplineIcon[o.id];
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(o.id)}
              className={[
                "inline-flex min-h-11 items-center gap-2 rounded-sm border border-border-strong px-4 text-label",
                "transition-colors duration-(--dur-fast) ease-out",
                pressed ? "bg-surface-3 text-text" : "bg-bg text-text-secondary hover:bg-surface-1 hover:text-text",
              ].join(" ")}
            >
              {pressed ? <CheckIcon size={14} /> : Icon ? <Icon size={14} /> : null}
              {o.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="js-only col-full mt-4 text-small text-text-muted">
        {status}
      </p>

      {shown.length === 0 ? (
        <div className="col-full mt-6">
          <p className="text-body text-text-secondary">No projects match this filter.</p>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="mt-3 inline-flex min-h-11 items-center rounded-sm border border-border-strong px-4 text-label text-text hover:bg-surface-1"
          >
            Show all projects
          </button>
        </div>
      ) : (
        <ul className="col-full mt-6 grid grid-cols-subgrid border-t border-border">
          {shown.map((p) => (
            <li key={p.slug} className="col-full grid grid-cols-subgrid border-b border-border">
              <ProjectRow project={p} lens={lens} headingLevel={2} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
