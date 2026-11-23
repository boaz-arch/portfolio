"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon, disciplineIcon } from "@/components/icons";
import { disciplines, type Discipline, type Project } from "@/content/site";
import { TagList, disciplineLabel } from "@/components/ui/Tag";
import { PlaceholderFrame } from "@/components/ui/Placeholder";

type Filter = "all" | Discipline;

/**
 * Selected work: single-select filter buttons (aria-pressed) above a list of
 * project rows. The visible result line is a polite live region, so screen
 * readers hear the new count after each filter change.
 */
export function ProjectList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  const status =
    filter === "all"
      ? `Showing all ${projects.length} projects.`
      : `Showing ${shown.length} of ${projects.length} projects tagged ${disciplineLabel(filter)}.`;

  const options: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...disciplines];

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by discipline"
        className="col-full flex flex-wrap gap-2"
        data-inspect="TagFilter"
        data-source="components/work/ProjectList.tsx"
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
                "inline-flex min-h-11 items-center gap-2 rounded-sm border px-4 text-label",
                "transition-colors duration-(--dur-fast) ease-out",
                pressed
                  ? "border-border-strong bg-surface-3 text-text"
                  : "border-border-strong bg-bg text-text-secondary hover:bg-surface-1 hover:text-text",
              ].join(" ")}
            >
              {pressed ? <CheckIcon size={14} /> : Icon ? <Icon size={14} /> : null}
              {o.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="col-full mt-4 text-small text-text-muted">
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
              <ProjectRow project={p} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const href = project.caseStudy ? `/work/${project.slug}` : null;
  return (
    <article
      data-inspect="ProjectRow"
      data-source="components/work/ProjectList.tsx"
      className={[
        "group relative col-full grid grid-cols-subgrid gap-y-4 py-8",
        "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-focus has-[a:focus-visible]:outline-solid",
      ].join(" ")}
    >
      <PlaceholderFrame
        label="Placeholder: project screenshot"
        className="col-full transition-colors duration-(--dur-fast) ease-out group-hover:border-border-strong md:col-span-5"
      />
      <div className="col-full flex flex-col gap-3 md:col-span-7 lg:col-span-3">
        <h3 className="text-title text-text">
          {href ? (
            <Link href={href} className="link-draw group-hover:bg-[length:100%_1px] focus-visible:outline-none after:absolute after:inset-0">
              {project.title}
              <span className="sr-only">: case study</span>
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-body text-text-secondary">{project.summary}</p>
        <TagList tags={project.tags} />
        <p className="text-small text-text-muted">
          {project.role} · {project.year}
          {href ? null : <span className="block">Case study: Placeholder, not written yet.</span>}
        </p>
      </div>
    </article>
  );
}
