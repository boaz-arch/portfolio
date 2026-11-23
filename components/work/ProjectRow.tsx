"use client";

import { ViewTransition } from "react";
import { projectNumber, type Project } from "@/content/site";
import { TransitionLink } from "@/components/nav/TransitionLink";
import { TagList } from "@/components/ui/Tag";
import { PlaceholderFrame } from "@/components/ui/Placeholder";
import { CodePanel } from "@/components/ui/CodePanel";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { ShieldIcon } from "@/components/icons";

export type Lens = "overview" | "design" | "code" | "systems" | "security";

/**
 * Shared-element names (DESIGN.md: Project row). React applies them only
 * during a transition, so a name never exists twice on one page.
 * Rows and case headers pair on morph / morph-back and on Back/Forward
 * (no types → default). Lens switches resize rows and crossfade lens areas.
 */
const SHARE = { morph: "morph", "morph-back": "morph", default: "morph" } as const;
const ROW_UPDATE = { lens: "lens-row", default: "none" } as const;
const LENS_UPDATE = { lens: "lens-swap", default: "none" } as const;

export function ProjectRow({
  project,
  lens = "overview",
  headingLevel = 3,
}: {
  project: Project;
  lens?: Lens;
  /** h2 on /work (directly under the page h1); h3 under a section h2 elsewhere. */
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const { slug } = project;
  const href = lens === "overview" ? `/work/${slug}` : `/work/${slug}?lens=${lens}`;
  const num = projectNumber(slug);

  return (
    <ViewTransition name={`project-${slug}`} share={SHARE} update={ROW_UPDATE} enter="none" exit="none" default="none">
      <article
       
        data-inspect="ProjectRow"
        data-source="components/work/ProjectRow.tsx"
        className={[
          "group relative col-full grid grid-cols-subgrid gap-y-4 py-8",
          "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-focus has-[a:focus-visible]:outline-solid",
        ].join(" ")}
      >
        <div className="col-full md:col-span-5">
          <ViewTransition name={`lens-${slug}`} update={LENS_UPDATE} default="none">
            <div>
              <LensArea project={project} lens={lens} />
            </div>
          </ViewTransition>
        </div>

        <div className="col-full flex flex-col gap-3 md:col-span-7 lg:col-span-3">
          <ViewTransition name={`project-num-${slug}`} share={SHARE} default="none">
            <span className="text-title tabular-nums text-text-muted">
              <span className="sr-only">Project </span>
              {num}
            </span>
          </ViewTransition>
          <Heading className="text-title text-text">
            <ViewTransition name={`project-title-${slug}`} share={SHARE} default="none">
              <TransitionLink
               
                href={href}
                className="link-draw group-hover:bg-[length:100%_1px] after:absolute after:inset-0 focus-visible:outline-none"
              >
                {project.title}
                <span className="sr-only">: case study</span>
              </TransitionLink>
            </ViewTransition>
          </Heading>
          <p className="text-body text-text-secondary">{project.summary}</p>
          <ViewTransition name={`project-tags-${slug}`} share={SHARE} default="none">
            <div>
              <TagList tags={project.tags} />
            </div>
          </ViewTransition>
          <p className="text-small text-text-muted">
            {project.role} · {project.year}
          </p>
        </div>
      </article>
    </ViewTransition>
  );
}

/** What the row shows for the current lens. Missing content keeps the frame's height. */
function LensArea({ project, lens }: { project: Project; lens: Lens }) {
  const l = project.lenses;
  const missing = (
    <div className="flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-border px-6 text-center text-small text-text-muted">
      Not part of this project
    </div>
  );

  switch (lens) {
    case "overview":
      return <PlaceholderFrame label="Placeholder: project screenshot" className="transition-colors duration-(--dur-fast) ease-out group-hover:border-border-strong" />;
    case "design":
      return l.design ? <PlaceholderFrame label={`Placeholder: design image. ${l.design.alt}`} /> : missing;
    case "code":
      if (!l.code) return missing;
      if ("code" in l.code) return <CodePanel title={l.code.title} code={l.code.code} className="relative z-[1]" />;
      return (
        <div className="aspect-[16/10] rounded-md border border-border bg-surface-1 p-6">
          <p className="text-label text-text-secondary">Stack</p>
          <ul className="mt-3 space-y-1 text-body text-text">
            {l.code.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      );
    case "systems":
      return l.systems ? (
        <div className="relative z-[1] rounded-md border border-border bg-surface-1 p-4 [&_svg[role=img]]:max-w-[300px]">
          <FlowDiagram diagram={l.systems} compact />
        </div>
      ) : (
        missing
      );
    case "security":
      return l.security ? (
        <dl className="flex aspect-[16/10] flex-col justify-center gap-4 rounded-md border border-border bg-surface-1 p-6 text-body">
          <div>
            <dt className="text-small text-text-muted">Threat model</dt>
            <dd className="text-text">{l.security.threat}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-small text-text-muted">
              <ShieldIcon size={14} className="text-accent" />
              Main protection
            </dt>
            <dd className="text-text">{l.security.protection}</dd>
          </div>
        </dl>
      ) : (
        missing
      );
  }
}
