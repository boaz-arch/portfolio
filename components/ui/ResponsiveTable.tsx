/**
 * A real <table> from md up; below md the same data as stacked definition
 * lists, so nothing scrolls sideways at 320px. Only one version is rendered
 * visible at a time (display:none removes the other from the a11y tree).
 */
export function ResponsiveTable({
  caption,
  columns,
  rows,
  numeric = [],
  className = "",
}: {
  caption: string;
  columns: string[];
  rows: string[][];
  numeric?: number[];
  className?: string;
}) {
  return (
    <div className={className}>
      <table className="hidden w-full text-left text-small md:table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border-strong">
            {columns.map((c) => (
              <th key={c} scope="col" className="py-3 pr-4 align-bottom text-label text-text-secondary">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border">
              {r.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="py-3 pr-4 align-top font-semibold text-text">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className={`py-3 pr-4 align-top text-text ${numeric.includes(j) ? "tabular-nums" : ""}`}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="md:hidden">
        <p className="sr-only">{caption}</p>
        <ul className="border-t border-border">
          {rows.map((r, i) => (
            <li key={i} className="border-b border-border py-4">
              <p className="text-subtitle text-text">{r[0]}</p>
              <dl className="mt-2 space-y-2 text-small">
                {r.slice(1).map((cell, j) => (
                  <div key={j}>
                    <dt className="text-text-muted">{columns[j + 1]}</dt>
                    <dd className={`text-text ${numeric.includes(j + 1) ? "tabular-nums" : ""}`}>{cell}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
