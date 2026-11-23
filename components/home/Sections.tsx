import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { ExpandableList } from "@/components/ui/Expandable";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { PlaceholderFrame } from "@/components/ui/Placeholder";
import { CopyEmail } from "@/components/home/CopyEmail";

export function SecurityWork() {
  const s = site.sections.security;
  return (
    <Section id="security" title={s.title} intro={s.intro} inspect="SecurityWork" source="components/home/Sections.tsx">
      <ExpandableList items={site.securityWork} label="Security work" />
      <p className="col-text mt-6 text-body text-text-secondary">
        Certifications are listed under{" "}
        <a href="#certifications" className="text-text underline">
          About: certifications
        </a>
        .
      </p>
    </Section>
  );
}

export function Systems() {
  const s = site.sections.systems;
  return (
    <Section id="systems" title={s.title} intro={s.intro} inspect="Systems" source="components/home/Sections.tsx">
      <div className="col-text">
        <FlowDiagram diagram={site.systems.diagram} />
      </div>
      <div className="col-full mt-12 grid grid-cols-subgrid">
        <ExpandableList items={site.systems.items} label="Systems and infrastructure work" />
      </div>
    </Section>
  );
}

export function Process() {
  const s = site.sections.process;
  return (
    <Section id="process" title={s.title} intro={s.intro} inspect="Process" source="components/home/Sections.tsx">
      {/* A real sequence, so numbering is meaningful here (DESIGN.md exception). */}
      <ol className="col-text border-t border-border">
        {site.process.map((p, i) => (
          <li key={p.step} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-border py-6">
            <span aria-hidden="true" className="text-title tabular-nums text-text-muted">
              {i + 1}
            </span>
            <div>
              <h3 className="text-title text-text">
                <span className="sr-only">Step {i + 1}: </span>
                {p.step}
              </h3>
              <p className="mt-2 text-body text-text-secondary">{p.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Toolbox() {
  const s = site.sections.toolbox;
  return (
    <Section id="toolbox" title={s.title} intro={s.intro} inspect="Toolbox" source="components/home/Sections.tsx">
      <div className="col-text grid gap-x-8 gap-y-10 md:grid-cols-2">
        {site.toolbox.map((g) => (
          <div key={g.area}>
            <h3 className="text-subtitle text-text">{g.area}</h3>
            <ul className="mt-3 space-y-1 text-body text-text-secondary">
              {g.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  const a = site.about;
  return (
    <Section id="about" title={site.sections.about.title} inspect="About" source="components/home/Sections.tsx">
      <div className="col-full md:col-span-4 lg:col-span-3">
        <PlaceholderFrame label={a.photoAlt} aspect="aspect-[4/5]" />
      </div>
      <div className="col-full mt-8 md:col-span-7 md:col-start-6 md:mt-0 lg:col-span-5 lg:col-start-4">
        <div className="space-y-4 text-body text-text">
          {a.bio.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <h3 className="mt-12 text-title text-text">What I&apos;m looking for</h3>
        <p className="mt-3 text-body text-text">{a.lookingFor}</p>
        <h3 id="certifications" className="mt-12 text-title text-text">
          Certifications
        </h3>
        <ul className="mt-3 border-t border-border">
          {site.certifications.map((c, i) => (
            <li key={i} className="flex flex-wrap justify-between gap-x-4 border-b border-border py-3 text-body">
              <span className="text-text">{c.name}</span>
              <span className="text-text-muted">
                {c.issuer} · {c.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Contact() {
  const c = site.contact;
  const s = site.sections.contact;
  return (
    <Section id="contact" title={s.title} intro={s.intro} inspect="Contact" source="components/home/Sections.tsx">
      <div className="col-text">
        <h3 className="text-subtitle text-text-secondary">Email</h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href={`mailto:${c.email}`} className="text-title text-text underline">
            {c.email}
          </a>
          <CopyEmail email={c.email} />
        </p>
        {/* Placeholder marker for the email address while it is not real */}
        {c.email.endsWith("@example.com") ? (
          <p className="mt-1 text-small text-text-muted">Placeholder: real email address goes here.</p>
        ) : null}

        <h3 className="mt-10 text-subtitle text-text-secondary">Profiles</h3>
        <ul className="mt-2">
          {c.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="inline-flex min-h-11 items-center text-body text-text underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {c.pgp ? (
          <>
            <h3 className="mt-10 text-subtitle text-text-secondary">PGP key</h3>
            <p className="mt-2 text-body text-text">
              <span className="text-text-secondary">Fingerprint: </span>
              <span className="tabular-nums">{c.pgp.fingerprint}</span>
            </p>
            <p className="mt-1 text-small text-text-muted">Placeholder: replace with the real fingerprint and key file.</p>
          </>
        ) : null}
      </div>
    </Section>
  );
}
