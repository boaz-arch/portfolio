import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, type Project } from "@/content/site";
import { TagList } from "@/components/ui/Tag";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { CodePanel } from "@/components/ui/CodePanel";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { ShieldIcon } from "@/components/icons";

const studies = () => site.projects.filter((p): p is Project & { caseStudy: NonNullable<Project["caseStudy"]> } => !!p.caseStudy);

export function generateStaticParams() {
  return studies().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = studies().find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title}: case study`, description: p.summary };
}

const SECTIONS = [
  { id: "problem", title: "Problem" },
  { id: "design-decisions", title: "Design decisions" },
  { id: "how-its-built", title: "How it's built" },
  { id: "system-architecture", title: "System architecture" },
  { id: "security", title: "Security" },
  { id: "outcome", title: "Outcome" },
] as const;

function CaseSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section" data-inspect="CaseSection" data-source="app/work/[slug]/page.tsx">
      <div className="wrap">
        <h2 id={`${id}-title`} className="col-text mb-8 text-headline text-text">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const all = studies();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = all[index];
  const cs = project.caseStudy;
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  return (
    <article aria-labelledby="case-title">
      <header className="pt-24 lg:pt-32" data-inspect="CaseHeader" data-source="app/work/[slug]/page.tsx">
        <div className="wrap gap-y-6">
          <div className="col-text">
            <h1 id="case-title" className="text-page-title text-text">
              {project.title}
            </h1>
            <p className="mt-4 text-lead text-text-secondary">{cs.lead}</p>
          </div>
          <div className="col-text">
            <TagList tags={project.tags} />
          </div>
          <dl className="col-text grid gap-x-8 gap-y-4 text-small md:grid-cols-2">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-text-muted">{m.label}</dt>
                <dd className="text-text">{m.value}</dd>
              </div>
            ))}
          </dl>
          <nav aria-label="On this page" className="col-text mt-4 border-t border-border pt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {SECTIONS.map((s) => (
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

      <CaseSection id="problem" title="Problem">
        <div className="col-text space-y-4 text-body text-text">
          {cs.problem.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="design-decisions" title="Design decisions">
        <div className="col-text space-y-12">
          {cs.decisions.map((d) => (
            <div key={d.title}>
              <h3 className="text-title text-text">{d.title}</h3>
              <dl className="mt-3 space-y-3 text-body">
                <div>
                  <dt className="text-small text-text-muted">Decision</dt>
                  <dd className="text-text">{d.decision}</dd>
                </div>
                <div>
                  <dt className="text-small text-text-muted">Alternative rejected</dt>
                  <dd className="text-text">{d.rejected}</dd>
                </div>
                <div>
                  <dt className="text-small text-text-muted">Why</dt>
                  <dd className="text-text">{d.why}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="how-its-built" title="How it's built">
        <div className="col-text space-y-4 text-body text-text">
          {cs.built.prose.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <h3 className="pt-8 text-title text-text">Stack</h3>
          <ul className="list-disc space-y-1 pl-6 text-text-secondary">
            {cs.built.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          {cs.built.code.map((c) => (
            <div key={c.title} className="pt-8">
              <CodePanel title={c.title} code={c.code} />
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="system-architecture" title="System architecture">
        <FlowDiagram diagram={cs.architecture} />
      </CaseSection>

      <CaseSection id="security" title="Security">
        <div className="col-text space-y-12">
          <div>
            <h3 className="text-title text-text">Threat model</h3>
            <ResponsiveTable
              className="mt-4"
              caption="Threat model: assets, threats, likelihood and mitigations"
              columns={["Asset", "Threat", "Likelihood", "Mitigation"]}
              rows={cs.security.threats.map((t) => [t.asset, t.threat, t.likelihood, t.mitigation])}
            />
          </div>
          <div>
            <h3 className="text-title text-text">Protections</h3>
            <ul className="mt-4 space-y-3">
              {cs.security.protections.map((p) => (
                <li key={p} className="flex gap-3 text-body text-text">
                  <ShieldIcon size={16} className="mt-1 shrink-0 text-security" />
                  <span>
                    <span className="font-semibold">Protection: </span>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-title text-text">Testing</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-text">
              {cs.security.testing.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          {cs.security.note ? (
            <aside aria-label="Security note" className="rounded-sm border border-security bg-security-tint p-6">
              <p className="flex items-center gap-2 text-label text-security">
                <ShieldIcon size={16} />
                Security note
              </p>
              <p className="mt-2 text-body text-text">{cs.security.note}</p>
            </aside>
          ) : null}
        </div>
      </CaseSection>

      <CaseSection id="outcome" title="Outcome">
        <div className="col-text">
          <ResponsiveTable
            caption="Outcome: each metric before and after, and how it was measured"
            columns={["Metric", "Before", "After", "How it was measured"]}
            rows={cs.outcome.map((o) => [o.metric, o.before, o.after, o.method])}
            numeric={[1, 2]}
          />
        </div>
      </CaseSection>

      <nav aria-label="Case studies" className="section">
        <div className="wrap">
          <ul className="col-text flex flex-col gap-2 border-t border-border pt-8 md:flex-row md:justify-between">
            {prev ? (
              <li>
                <Link href={`/work/${prev.slug}`} className="inline-flex min-h-11 items-center text-label text-text underline">
                  Previous case study: {prev.title}
                </Link>
              </li>
            ) : null}
            <li>
              <Link href="/#work" className="inline-flex min-h-11 items-center text-label text-text underline">
                Back to selected work
              </Link>
            </li>
            {next ? (
              <li>
                <Link href={`/work/${next.slug}`} className="inline-flex min-h-11 items-center text-label text-text underline">
                  Next case study: {next.title}
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </article>
  );
}
