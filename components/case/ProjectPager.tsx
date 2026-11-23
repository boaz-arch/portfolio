"use client";

import { ViewTransition } from "react";
import { projectNumber, type Project } from "@/content/site";
import { TagList } from "@/components/ui/Tag";
import { TransitionLink } from "@/components/nav/TransitionLink";

/**
 * Previous / Next project (wrapping around). Each is a compact row that
 * carries the target project's shared names, so following it morphs this
 * row into the next case study's header. Only on `morph` (a link click):
 * on Back/Forward the pager rows stay part of the page.
 */
const SHARE = { morph: "morph", default: "none" } as const;

export function ProjectPager({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="Projects" className="section" data-inspect="ProjectPager" data-source="components/case/ProjectPager.tsx">
      <div className="wrap">
        <ul className="col-text grid gap-4 border-t border-border pt-8 md:grid-cols-2">
          <PagerRow project={prev} label="Previous project" />
          <PagerRow project={next} label="Next project" />
        </ul>
        <p className="col-text mt-8">
          <TransitionLink href="/work" className="inline-flex min-h-11 items-center text-label text-text underline">
            All projects
          </TransitionLink>
        </p>
      </div>
    </nav>
  );
}

function PagerRow({ project, label }: { project: Project; label: string }) {
  const { slug } = project;
  return (
    <li>
      <ViewTransition name={`project-${slug}`} share={SHARE} enter="none" exit="none" update="none" default="none">
        <div className="group relative flex h-full flex-col gap-2 rounded-md border border-border p-5 transition-colors duration-(--dur-fast) ease-out hover:border-border-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-focus has-[a:focus-visible]:outline-solid">
          <p className="text-small text-text-muted">{label}</p>
          <ViewTransition name={`project-num-${slug}`} share={SHARE} default="none">
            <span className="text-subtitle tabular-nums text-text-muted">
              <span className="sr-only">Project </span>
              {projectNumber(slug)}
            </span>
          </ViewTransition>
          <ViewTransition name={`project-title-${slug}`} share={SHARE} default="none">
            <TransitionLink
             
              href={`/work/${slug}`}
              className="link-draw self-start text-title text-text group-hover:bg-[length:100%_1px] after:absolute after:inset-0 focus-visible:outline-none"
            >
              <span className="sr-only">{label}: </span>
              {project.title}
            </TransitionLink>
          </ViewTransition>
          <ViewTransition name={`project-tags-${slug}`} share={SHARE} default="none">
            <div>
              <TagList tags={project.tags} />
            </div>
          </ViewTransition>
        </div>
      </ViewTransition>
    </li>
  );
}
