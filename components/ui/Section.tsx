/**
 * A home-page section: an h2 with an optional intro on the reading measure
 * (columns 1–8 from lg), then content on the full 12-column grid.
 * data-inspect / data-source feed the Inspect Code layer.
 */
export function Section({
  id,
  title,
  intro,
  inspect,
  source,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  inspect: string;
  source: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="section" data-inspect={inspect} data-source={source}>
      <div className="wrap">
        <div className="col-text">
          <h2 id={headingId} className="text-headline text-text">
            {title}
          </h2>
          {intro ? <p className="mt-3 text-body text-text-secondary">{intro}</p> : null}
        </div>
        <div className="col-full mt-10 grid grid-cols-subgrid">{children}</div>
      </div>
    </section>
  );
}
