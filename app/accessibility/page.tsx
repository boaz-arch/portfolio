import type { Metadata } from "next";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: `How ${site.name}'s portfolio meets WCAG 2.2 AA and IS 5568, known limitations, and how to report a problem.`,
};

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-16">
      <h2 id={id} className="text-headline text-text">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-body text-text">{children}</div>
    </section>
  );
}

export default function AccessibilityPage() {
  const a = site.accessibility;
  return (
    <div className="pt-24 lg:pt-32" data-inspect="AccessibilityStatement" data-source="app/accessibility/page.tsx">
      <div className="wrap">
        <div className="col-text">
          <h1 className="text-page-title text-text">Accessibility statement</h1>
          <p className="mt-4 text-lead text-text-secondary">
            This site is built to be usable by everyone, including people who use a keyboard, a screen reader, zoom or
            other assistive technology.
          </p>

          <Block id="standard" title="Standard">
            <p>
              This site aims to conform to {a.standard}. Accessibility is a requirement of the design, not an add-on. No
              accessibility overlay or widget is used.
            </p>
          </Block>

          <Block id="made-accessible" title="What has been made accessible">
            <ul className="list-disc space-y-2 pl-6">
              {a.made.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Block>

          <Block id="shortcuts" title="Keyboard shortcuts">
            <p>
              Press the backquote key (the key above Tab, left of 1) to open the terminal. The shortcut uses the
              physical key, so it works on Hebrew and other keyboard layouts. It does nothing while you are typing in a
              text field.
            </p>
            <p>
              To turn the shortcut off, use the <span className="font-semibold">Keyboard shortcut for terminal</span>{" "}
              button in the footer of any page. The terminal can also be opened with the{" "}
              <span className="font-semibold">Open terminal</span> button in the footer. Press Escape to close it.
            </p>
            <p>Press Escape to turn off the Inspect layers and return focus to the control that opened them.</p>
          </Block>

          <Block id="limitations" title="Known limitations">
            <ul className="list-disc space-y-2 pl-6">
              {a.limitations.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Block>

          <Block id="tested" title="Tested with">
            <table className="w-full text-left text-small">
              <caption className="sr-only">Assistive technology and browsers this site was tested with</caption>
              <thead>
                <tr className="border-b border-border-strong">
                  <th scope="col" className="py-3 pr-4 text-label text-text-secondary">
                    Assistive technology
                  </th>
                  <th scope="col" className="py-3 pr-4 text-label text-text-secondary">
                    Browser
                  </th>
                  <th scope="col" className="py-3 text-label text-text-secondary">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {a.tested.map((t) => (
                  <tr key={t.tech} className="border-b border-border">
                    <th scope="row" className="py-3 pr-4 align-top font-semibold">
                      {t.tech}
                    </th>
                    <td className="py-3 pr-4 align-top">{t.browser}</td>
                    <td className="py-3 align-top tabular-nums">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Block>

          <Block id="coordinator" title="Accessibility coordinator">
            <dl className="space-y-3">
              <div>
                <dt className="text-small text-text-muted">Name</dt>
                <dd>{a.coordinator.name}</dd>
              </div>
              <div>
                <dt className="text-small text-text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${a.coordinator.email}`} className="underline">
                    {a.coordinator.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-small text-text-muted">Phone</dt>
                <dd>{a.coordinator.phone}</dd>
              </div>
            </dl>
          </Block>

          <Block id="report" title="Report a problem">
            <p>
              If something on this site is hard or impossible for you to use, email the accessibility coordinator at{" "}
              <a href={`mailto:${a.coordinator.email}`} className="underline">
                {a.coordinator.email}
              </a>
              . Please include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>the page address,</li>
              <li>what you were trying to do,</li>
              <li>the device, browser and assistive technology you were using.</li>
            </ul>
            <p>{a.responseTime}</p>
          </Block>

          <Block id="updated" title="Last updated">
            <p>
              This statement was last updated on <time dateTime={site.lastUpdated}>{formatDate(site.lastUpdated)}</time>.
            </p>
          </Block>
        </div>
      </div>
    </div>
  );
}
