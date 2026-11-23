import { site } from "@/content/site";
import { FooterTools } from "@/components/layout/FooterTools";
import { TransitionLink } from "@/components/nav/TransitionLink";
import { CvLink } from "@/components/ui/CvLink";

export function Footer() {
  return (
    <footer
      data-inspect="Footer"
      data-source="components/layout/Footer.tsx"
      className="mt-(--section-y) border-t border-border pt-16 pb-12 text-small text-text-secondary"
    >
      <div className="wrap gap-y-8">
        <div className="col-full md:col-span-5">
          <p className="text-subtitle text-text">{site.name}</p>
          <p className="mt-1">{site.tagline}.</p>
          <p className="mt-4">
            <CvLink />
          </p>
        </div>

        <nav aria-label="Footer" className="col-full md:col-span-4">
          <ul className="flex flex-col gap-1">
            <li>
              <TransitionLink href="/accessibility" className="inline-flex min-h-11 items-center underline">
                Accessibility statement
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/contact" className="inline-flex min-h-11 items-center underline">
                Contact
              </TransitionLink>
            </li>
            {site.contact.links.slice(0, 2).map((l) => (
              <li key={l.href}>
                <a href={l.href} rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-full md:col-span-3">
          <FooterTools />
        </div>

        <p className="col-full text-text-muted">
          Last updated <time dateTime={site.lastUpdated}>{formatDate(site.lastUpdated)}</time>
        </p>
      </div>
    </footer>
  );
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
