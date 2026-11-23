import type { CaseStudy } from "@/content/site";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { CodePanel } from "@/components/ui/CodePanel";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { ShieldIcon } from "@/components/icons";
import { ViewSource } from "@/components/case/ViewSource";
import type { Excerpt } from "@/lib/source-excerpt";
import { CASE_SECTIONS } from "@/components/case/sections-meta";

/**
 * Case study sections, one function each, in template order (BRIEF.md):
 * problem → design decisions → how it's built → system architecture →
 * security → outcome. The editor theme shows each function's own source.
 */

type SectionProps = { cs: CaseStudy; source?: Excerpt };

function CaseSection({ id, source, children }: { id: (typeof CASE_SECTIONS)[number]["id"]; source?: Excerpt; children: React.ReactNode }) {
  const meta = CASE_SECTIONS.find((s) => s.id === id)!;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section" data-inspect="CaseSection" data-source="components/case/Sections.tsx">
      <div className="wrap">
        <h2 id={`${id}-title`} tabIndex={-1} className="col-text mb-8 text-headline text-text">
          {meta.title}
        </h2>
        {source ? (
          <div className="col-text">
            <ViewSource excerpt={source} section={meta.title} />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CaseProblem({ cs, source }: SectionProps) {
  return (
    <CaseSection id="problem" source={source}>
      <div className="col-text space-y-4 text-body text-text">
        {cs.problem.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </CaseSection>
  );
}

export function CaseDecisions({ cs, source }: SectionProps) {
  return (
    <CaseSection id="design-decisions" source={source}>
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
  );
}

export function CaseBuilt({ cs, source }: SectionProps) {
  return (
    <CaseSection id="how-its-built" source={source}>
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
        {cs.built.code.slice(0, 2).map((c) => (
          <div key={c.title} className="pt-8">
            <CodePanel title={c.title} code={c.code} />
          </div>
        ))}
      </div>
    </CaseSection>
  );
}

export function CaseArchitecture({ cs, source }: SectionProps) {
  return (
    <CaseSection id="system-architecture" source={source}>
      <div className="col-text">
        <FlowDiagram diagram={cs.architecture} />
      </div>
    </CaseSection>
  );
}

export function CaseSecurity({ cs, source }: SectionProps) {
  return (
    <CaseSection id="security" source={source}>
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
                <ShieldIcon size={16} className="mt-1 shrink-0 text-accent" />
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
  );
}

export function CaseOutcome({ cs, source }: SectionProps) {
  return (
    <CaseSection id="outcome" source={source}>
      <div className="col-text">
        <ResponsiveTable
          caption="Outcome: each metric before and after, and how it was measured"
          columns={["Metric", "Before", "After", "How it was measured"]}
          rows={cs.outcome.map((o) => [o.metric, o.before, o.after, o.method])}
          numeric={[1, 2]}
        />
      </div>
    </CaseSection>
  );
}
