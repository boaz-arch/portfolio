import { ChevronIcon } from "@/components/icons";

export type ExpandableItem = {
  title: string;
  kind: string;
  date: string;
  platform: string;
  summary: string;
  approach: string;
  tools: string;
  takeaway: string;
  writeup?: { title: string; href: string };
};

/**
 * Expandable summary (DESIGN.md: Expandable panel). Native <details>, so
 * keyboard, state and announcement come for free. Panels are independent.
 */
export function ExpandableList({ items, label }: { items: ExpandableItem[]; label: string }) {
  return (
    <ul aria-label={label} className="col-text border-b border-border">
      {items.map((it) => (
        <li key={it.title + it.date}>
          <details className="panel group border-t border-border" data-inspect="ExpandablePanel" data-source="components/ui/Expandable.tsx">
            <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-subtitle text-text group-hover:underline">{it.title}</span>
                <span className="text-small text-text-muted">
                  {it.kind} · {it.date} · {it.platform}
                </span>
              </span>
              <ChevronIcon
                size={16}
                className="shrink-0 text-text-secondary transition-transform duration-(--dur-base) ease-out group-open:rotate-180"
              />
            </summary>
            <div className="mb-4 rounded-sm bg-surface-2 p-6">
              <dl className="space-y-3 text-body">
                <Row term="Summary" value={it.summary} />
                <Row term="Approach" value={it.approach} />
                <Row term="Tools" value={it.tools} />
                <Row term="Takeaway" value={it.takeaway} />
              </dl>
              {it.writeup ? (
                <p className="mt-4 text-body">
                  {it.writeup.href === "#" ? (
                    <span className="text-text-muted">Write-up: {it.writeup.title} (not published yet)</span>
                  ) : (
                    <a href={it.writeup.href} className="text-text underline">
                      Read the write-up: {it.writeup.title}
                    </a>
                  )}
                </p>
              ) : null}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-small text-text-muted">{term}</dt>
      <dd className="text-text">{value}</dd>
    </div>
  );
}
