import type { FlowDiagram as Flow, FlowNode } from "@/content/site";
import { ShieldIcon } from "@/components/icons";

/**
 * Content diagram (DESIGN.md: Diagram style). Pure SVG, rendered on the
 * server. Two layouts: horizontal when the figure is at least 760px wide,
 * vertical below, so labels never shrink under 14px and nothing scrolls
 * sideways. Each SVG has a <title> and <desc>; a <details> text version
 * lists the same flow step by step (List Twin Rule).
 */

const NODE_GAP_H = 64;
const NODE_GAP_V = 64;
const LINE_H = 20;

function nodeLines(n: FlowNode): { text: string; tone: "label" | "detail" | "security" }[] {
  const lines: { text: string; tone: "label" | "detail" | "security" }[] = [{ text: n.label, tone: "label" }];
  if (n.security) lines.push({ text: "Security", tone: "security" });
  if (n.detail) {
    const m = n.detail.match(/^(Placeholder:)\s*(.*)$/);
    if (m) {
      lines.push({ text: m[1], tone: "detail" });
      if (m[2]) lines.push({ text: m[2], tone: "detail" });
    } else lines.push({ text: n.detail, tone: "detail" });
  }
  return lines;
}

function Arrowhead({ x, y, dir, security }: { x: number; y: number; dir: "right" | "down" | "up"; security?: boolean }) {
  const s = 7;
  const pts =
    dir === "right"
      ? `${x},${y} ${x - s},${y - s / 2} ${x - s},${y + s / 2}`
      : dir === "down"
        ? `${x},${y} ${x - s / 2},${y - s} ${x + s / 2},${y - s}`
        : `${x},${y} ${x - s / 2},${y + s} ${x + s / 2},${y + s}`;
  return <polygon points={pts} className={security ? "fill-security" : "fill-text-secondary"} />;
}

function NodeBox({ n, x, y, w, h }: { n: FlowNode; x: number; y: number; w: number; h: number }) {
  const lines = nodeLines(n);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={2}
        className={n.security ? "fill-surface-1 stroke-security" : "fill-surface-1 stroke-border-strong"}
        strokeWidth={n.security ? 1.5 : 1}
      />
      {lines.map((l, i) => (
        <text
          key={i}
          x={x + 12}
          y={y + 24 + i * LINE_H}
          className={
            l.tone === "label"
              ? "fill-text text-[14px] font-semibold"
              : l.tone === "security"
                ? "fill-security text-[14px] font-semibold"
                : "fill-text-secondary text-[14px]"
          }
        >
          {l.tone === "security" ? <tspan dx={18}>{l.text}</tspan> : l.text}
        </text>
      ))}
      {n.security ? (
        <g transform={`translate(${x + 12} ${y + 24 + LINE_H - 13})`} className="text-security">
          <ShieldIcon size={14} />
        </g>
      ) : null}
    </g>
  );
}

function Horizontal({ d, titleId, descId }: { d: Flow; titleId: string; descId: string }) {
  const W = 760;
  const n = d.nodes.length;
  const w = (W - (n - 1) * NODE_GAP_H) / n;
  const maxLines = Math.max(...d.nodes.map((x) => nodeLines(x).length));
  const h = 16 + maxLines * LINE_H;
  const y = d.group ? 44 : 8;
  const bottom = y + h;
  const H = bottom + (d.response ? 96 : 48);
  const xOf = (i: number) => i * (w + NODE_GAP_H);
  const cy = y + 24;

  return (
    <svg viewBox={`-16 0 ${W + 32} ${H}`} role="img" aria-labelledby={`${titleId} ${descId}`} className="h-auto w-full">
      <title id={titleId}>{d.title}</title>
      <desc id={descId}>{d.summary}</desc>
      {d.group ? (
        <g>
          <rect
            x={xOf(d.group.from) - 10}
            y={y - 30}
            width={xOf(d.group.to) + w - xOf(d.group.from) + 20}
            height={h + 42}
            className="fill-none stroke-border-strong"
            strokeDasharray="6 4"
          />
          <text x={xOf(d.group.from) - 2} y={y - 12} className="fill-text-secondary text-[14px]">
            {d.group.label}
          </text>
        </g>
      ) : null}
      {d.edges.map((e, i) => {
        const x1 = xOf(i) + w;
        const x2 = xOf(i + 1);
        return (
          <g key={i}>
            <line x1={x1} y1={cy} x2={x2 - 1} y2={cy} className={e.security ? "stroke-security" : "stroke-text-secondary"} strokeWidth={1.5} />
            <Arrowhead x={x2} y={cy} dir="right" security={e.security} />
            {e.label ? (
              <text x={(x1 + x2) / 2} y={bottom + 28} textAnchor="middle" className="fill-text-secondary text-[14px]">
                {e.label}
              </text>
            ) : null}
          </g>
        );
      })}
      {d.edges.map((e, i) =>
        e.label ? (
          <line
            key={`t${i}`}
            x1={xOf(i) + w + NODE_GAP_H / 2}
            y1={cy + 6}
            x2={xOf(i) + w + NODE_GAP_H / 2}
            y2={bottom + 12}
            className="stroke-border-strong"
            strokeWidth={1}
            strokeDasharray="2 3"
          />
        ) : null,
      )}
      {d.nodes.map((node, i) => (
        <NodeBox key={node.id} n={node} x={xOf(i)} y={y} w={w} h={h} />
      ))}
      {d.response ? (
        <g>
          <path
            d={`M ${xOf(n - 1) + w / 2} ${bottom} V ${bottom + 52} H ${w / 2} V ${bottom + 9}`}
            className="fill-none stroke-text-secondary"
            strokeWidth={1.5}
            strokeDasharray="6 4"
          />
          <Arrowhead x={w / 2} y={bottom + 1} dir="up" />
          <text x={W / 2} y={bottom + 80} textAnchor="middle" className="fill-text-secondary text-[14px]">
            {d.response}
          </text>
        </g>
      ) : null}
    </svg>
  );
}

function Vertical({ d, titleId, descId }: { d: Flow; titleId: string; descId: string }) {
  const W = 300;
  const x = 12;
  const w = d.response ? 224 : 260;
  const n = d.nodes.length;
  const hs = d.nodes.map((node) => 16 + nodeLines(node).length * LINE_H);
  const ys: number[] = [];
  let acc = d.group && d.group.from === 0 ? 36 : 4;
  for (let i = 0; i < n; i++) {
    ys.push(acc);
    acc += hs[i] + NODE_GAP_V;
  }
  const H = acc - NODE_GAP_V + (d.group ? 16 : 8);
  const ax = x + 28;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby={`${titleId} ${descId}`} className="h-auto w-full max-w-[420px]">
      <title id={titleId}>{d.title}</title>
      <desc id={descId}>{d.summary}</desc>
      {d.group ? (
        <g>
          <rect
            x={x - 8}
            y={ys[d.group.from] - 30}
            width={w + 16}
            height={ys[d.group.to] + hs[d.group.to] - ys[d.group.from] + 40}
            className="fill-none stroke-border-strong"
            strokeDasharray="6 4"
          />
          <text x={x + w} y={ys[d.group.from] - 10} textAnchor="end" className="fill-text-secondary text-[14px]">
            {d.group.label}
          </text>
        </g>
      ) : null}
      {d.edges.map((e, i) => {
        const y1 = ys[i] + hs[i];
        const y2 = ys[i + 1];
        return (
          <g key={i}>
            <line x1={ax} y1={y1} x2={ax} y2={y2 - 1} className={e.security ? "stroke-security" : "stroke-text-secondary"} strokeWidth={1.5} />
            <Arrowhead x={ax} y={y2} dir="down" security={e.security} />
            {e.label ? (
              <text x={ax + 12} y={y1 + 24} className="fill-text-secondary text-[14px]">
                {e.label}
                {e.security ? " (security)" : ""}
              </text>
            ) : null}
          </g>
        );
      })}
      {d.nodes.map((node, i) => (
        <NodeBox key={node.id} n={node} x={x} y={ys[i]} w={w} h={hs[i]} />
      ))}
      {d.response ? (
        <g>
          <path
            d={`M ${x + w} ${ys[n - 1] + hs[n - 1] / 2} H ${x + w + 36} V ${ys[0] + hs[0] / 2} H ${x + w + 9}`}
            className="fill-none stroke-text-secondary"
            strokeWidth={1.5}
            strokeDasharray="6 4"
          />
          <polygon
            points={`${x + w + 1},${ys[0] + hs[0] / 2} ${x + w + 8},${ys[0] + hs[0] / 2 - 3.5} ${x + w + 8},${ys[0] + hs[0] / 2 + 3.5}`}
            className="fill-text-secondary"
          />
        </g>
      ) : null}
    </svg>
  );
}

export function FlowDiagram({ diagram }: { diagram: Flow }) {
  const d = diagram;
  const steps = d.edges.map((e, i) => {
    const from = d.nodes[i];
    const to = d.nodes[i + 1];
    const sec = e.security || to.security;
    return `${from.label} to ${to.label}${e.label ? `: ${e.label}` : ""}${to.detail ? ` (${to.detail})` : ""}${sec ? " (security)" : ""}`;
  });
  if (d.response) steps.push(`${d.nodes[d.nodes.length - 1].label} returns the ${d.response.toLowerCase()} to ${d.nodes[0].label} (dashed line)`);

  return (
    <figure
      className="@container col-full"
      data-inspect="FlowDiagram"
      data-source="components/ui/FlowDiagram.tsx"
      aria-labelledby={`${d.id}-cap`}
    >
      <div className="hidden @min-[760px]:block">
        <Horizontal d={d} titleId={`${d.id}-h-title`} descId={`${d.id}-h-desc`} />
      </div>
      <div className="block @min-[760px]:hidden">
        <Vertical d={d} titleId={`${d.id}-v-title`} descId={`${d.id}-v-desc`} />
      </div>

      <figcaption id={`${d.id}-cap`} className="mt-6 max-w-[68ch]">
        <span className="sr-only">{d.title}. </span>
        <span className="text-small text-text-secondary">{d.description}</span>
      </figcaption>

      <ul aria-label="Diagram legend" className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-small text-text-secondary">
        <li className="flex items-center gap-2">
          <svg width="28" height="8" aria-hidden="true">
            <line x1="0" y1="4" x2="28" y2="4" className="stroke-text-secondary" strokeWidth="1.5" />
          </svg>
          Request
        </li>
        {d.response ? (
          <li className="flex items-center gap-2">
            <svg width="28" height="8" aria-hidden="true">
              <line x1="0" y1="4" x2="28" y2="4" className="stroke-text-secondary" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>
            Response
          </li>
        ) : null}
        <li className="flex items-center gap-2 text-security">
          <ShieldIcon size={14} />
          <span className="text-text-secondary">Security step (amber outline)</span>
        </li>
        {d.group ? (
          <li className="flex items-center gap-2">
            <svg width="28" height="12" aria-hidden="true">
              <rect x="1" y="1" width="26" height="10" className="fill-none stroke-border-strong" strokeDasharray="4 3" />
            </svg>
            Group or network boundary
          </li>
        ) : null}
      </ul>

      <details className="mt-4">
        <summary className="inline-flex min-h-11 cursor-pointer items-center text-label text-text underline">
          Text version of the {d.title.replace(/^Placeholder:\s*/, "")} diagram
        </summary>
        <ol className="mt-2 list-decimal space-y-1 pl-6 text-small text-text-secondary">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
          {d.group ? (
            <li>
              {d.nodes
                .slice(d.group.from, d.group.to + 1)
                .map((x) => x.label)
                .join(", ")}{" "}
              are inside the {d.group.label} boundary.
            </li>
          ) : null}
        </ol>
      </details>
    </figure>
  );
}
