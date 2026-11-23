"use client";

import { ViewTransition } from "react";
import { projectNumber, stackLevels, type CaseStudy, type Project } from "@/content/site";
import { TagList } from "@/components/ui/Tag";
import { TransitionLink } from "@/components/nav/TransitionLink";
import { CASE_SECTIONS } from "@/components/case/sections-meta";

/** Same names and class map as the project row, so the row morphs into this header (and back). */
const SHARE = { morph: "morph", "morph-back": "morph", default: "morph" } as const;

export function CaseHeader({ project, cs }: { project: Project; cs: CaseStudy }) {
  const { slug } = project;
  const levels = stackLevels.filter((l) => project.stackLevels.includes(l.id));

  return (
    <ViewTransition name={`project-${slug}`} share={SHARE} enter="none" exit="none" update="none" default="none">
      <header className="pt-24 lg:pt-32" data-inspect="CaseHeader" data-source="components/case/CaseHeader.tsx">
        <div className="wrap gap-y-6">
          <div className="col-text">
            <ViewTransition name={`project-num-${slug}`} share={SHARE} default="none">
              <p className="text-title tabular-nums text-text-muted">
                <span className="sr-only">Project </span>
                {projectNumber(slug)}
              </p>
            </ViewTransition>
            <ViewTransition name={`project-title-${slug}`} share={SHARE} default="none">
              <h1 id="case-title" className="mt-2 text-page-title text-text">
                {project.title}
              </h1>
            </ViewTransition>
            <p className="mt-4 text-lead text-text-secondary">{cs.lead}</p>
          </div>
          <div className="col-text">
            <ViewTransition name={`project-tags-${slug}`} share={SHARE} default="none">
              <div>
                <TagList tags={project.tags} />
              </div>
            </ViewTransition>
          </div>
          <dl className="col-text grid gap-x-8 gap-y-4 text-small md:grid-cols-2">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-text-muted">{m.label}</dt>
                <dd className="text-text">{m.value}</dd>
              </div>
            ))}
          </dl>

          {levels.length ? (
            <nav aria-label="Stack depth" className="col-text">
              <p className="text-small text-text-muted">Stack levels this project touches</p>
              <ul className="mt-2 flex flex-wrap gap-x-4">
                {levels.map((l) => (
                  <li key={l.id}>
                    <TransitionLink href={`/systems/${l.id}`} className="inline-flex min-h-11 items-center gap-2 text-label text-text underline">
                      <span aria-hidden="true" className="inline-block size-2 bg-accent" />
                      {l.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <nav aria-label="On this page" className="col-text mt-2 border-t border-border pt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {CASE_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex min-h-11 items-center text-label text-text-secondary underline hover:text-text">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </ViewTransition>
  );
}
