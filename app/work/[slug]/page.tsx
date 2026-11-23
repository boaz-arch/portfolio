import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudyFor, site } from "@/content/site";
import { themeFor } from "@/lib/routes";
import { functionExcerpt } from "@/lib/source-excerpt";
import { CaseHeader } from "@/components/case/CaseHeader";
import { ProjectPager } from "@/components/case/ProjectPager";
import { LensScroll } from "@/components/case/LensScroll";
import { CASE_SECTIONS } from "@/components/case/sections-meta";
import {
  CaseArchitecture,
  CaseBuilt,
  CaseDecisions,
  CaseOutcome,
  CaseProblem,
  CaseSecurity,
} from "@/components/case/Sections";

/** One case study page per project in content/site.ts. */
export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = site.projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title}: case study`, description: p.summary };
}

const SECTION_FILE = "components/case/Sections.tsx";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const all = site.projects;
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = all[index];
  const cs = caseStudyFor(project);
  const prev = all[(index - 1 + all.length) % all.length];
  const next = all[(index + 1) % all.length];
  const theme = themeFor(`/work/${slug}`);

  // The editor theme (primary tag Development) shows the real JSX behind each section.
  const src = (fn: string) => (theme === "development" ? (functionExcerpt(SECTION_FILE, fn) ?? undefined) : undefined);
  const s = Object.fromEntries(CASE_SECTIONS.map((x) => [x.fn, src(x.fn)]));

  return (
    <article aria-labelledby="case-title" data-section={theme}>
      <CaseHeader project={project} cs={cs} />
      <CaseProblem cs={cs} source={s.CaseProblem} />
      <CaseDecisions cs={cs} source={s.CaseDecisions} />
      <CaseBuilt cs={cs} source={s.CaseBuilt} />
      <CaseArchitecture cs={cs} source={s.CaseArchitecture} />
      <CaseSecurity cs={cs} source={s.CaseSecurity} />
      <CaseOutcome cs={cs} source={s.CaseOutcome} />
      <ProjectPager prev={prev} next={next} />
      <LensScroll />
    </article>
  );
}
