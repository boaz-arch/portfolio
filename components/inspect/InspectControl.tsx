"use client";

import { useId, useRef } from "react";
import { BracketsIcon, GridIcon, ListIcon, NodesIcon } from "@/components/icons";
import { LAYERS, type Layer, useInspect } from "@/components/providers/InspectProvider";

const layerIcon = { design: GridIcon, code: BracketsIcon, system: NodesIcon } as const;

/**
 * The single Inspect control: a labeled group of three toggle buttons
 * (aria-pressed). The hero renders it full size on home; the header renders
 * a compact mirror elsewhere. Both share one state.
 */
export function InspectControl({ variant = "full" }: { variant?: "full" | "compact" }) {
  const { layers, toggle, anyOn, legendOpen, setLegendOpen, setStatus } = useInspect();
  const labelId = useId();
  const refs = useRef<Partial<Record<Layer, HTMLButtonElement | null>>>({});
  const compact = variant === "compact";

  function onToggle(layer: Layer, label: string) {
    const next = !layers[layer];
    toggle(layer);
    setStatus(`${label} layer ${next ? "on" : "off"}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2" data-inspect-ignore="">
      <div
        role="group"
        aria-labelledby={labelId}
        className={compact ? "flex items-center gap-3" : "flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3"}
      >
        <span
          id={labelId}
          className={compact ? "sr-only xl:not-sr-only xl:text-label xl:text-text-secondary" : "text-label text-text-secondary"}
        >
          Inspect
        </span>
        <div className="flex">
          {LAYERS.map(({ id, label }, i) => {
            const Icon = layerIcon[id];
            const on = layers[id];
            const first = i === 0;
            const last = i === LAYERS.length - 1;
            return (
              <button
                key={id}
                ref={(el) => {
                  refs.current[id] = el;
                }}
                type="button"
                aria-pressed={on}
                data-layer-toggle={id}
                onClick={() => onToggle(id, label)}
                className={[
                  "relative inline-flex min-h-11 items-center gap-2 border border-border-strong text-label",
                  "transition-colors duration-(--dur-fast) ease-out",
                  compact ? "px-3" : "px-3 md:px-4",
                  first ? "rounded-l-sm" : "-ml-px",
                  last ? "rounded-r-sm" : "",
                  on
                    ? "z-[1] bg-surface-3 text-text"
                    : "bg-surface-1 text-text-secondary hover:bg-surface-2 hover:text-text",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className={[
                    "inline-block size-2 border",
                    on
                      ? id === "system"
                        ? "border-security bg-security"
                        : "border-design bg-design"
                      : "border-current bg-transparent",
                  ].join(" ")}
                />
                <Icon size={16} className={compact ? undefined : "hidden md:block"} />
                <span className={compact ? "sr-only xl:not-sr-only" : undefined}>{label}</span>
                <span className="sr-only"> layer</span>
              </button>
            );
          })}
        </div>
      </div>

      {anyOn && !compact ? (
        <button
          type="button"
          aria-expanded={legendOpen}
          aria-controls="inspect-legend"
          onClick={() => setLegendOpen(!legendOpen)}
          className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text"
        >
          <ListIcon size={16} />
          <span>
            {legendOpen ? "Hide values list" : "Show values as list"}
            <span className="sr-only"> (Inspect values)</span>
          </span>
        </button>
      ) : null}
    </div>
  );
}
