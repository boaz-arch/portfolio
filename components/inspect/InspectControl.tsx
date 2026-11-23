"use client";

import { useId } from "react";
import { BracketsIcon, GridIcon, ListIcon, NodesIcon } from "@/components/icons";
import { LAYERS, type Layer, useInspect } from "@/components/providers/InspectProvider";

const layerIcon = { ui: GridIcon, code: BracketsIcon, system: NodesIcon } as const;

/**
 * The single Inspect control: a labeled group of three toggle buttons
 * (UI, Code, System; aria-pressed each). Home renders the large "hero"
 * variant; the header renders a compact copy elsewhere. One shared state.
 */
export function InspectControl({ variant = "compact" }: { variant?: "hero" | "compact" }) {
  const { layers, toggle, anyOn, legendOpen, setLegendOpen, setStatus } = useInspect();
  const labelId = useId();
  const hero = variant === "hero";

  function onToggle(layer: Layer, label: string) {
    const next = !layers[layer];
    toggle(layer);
    setStatus(`${label} layer ${next ? "on" : "off"}`);
  }

  return (
    <div className={hero ? "flex flex-col gap-3" : "flex items-center gap-3"}>
      <div role="group" aria-labelledby={labelId} className={hero ? "flex flex-col gap-3" : "flex items-center gap-3"}>
        <span
          id={labelId}
          className={hero ? "text-label text-text-secondary" : "sr-only xl:not-sr-only xl:text-label xl:text-text-secondary"}
        >
          {hero ? "Inspect this page" : "Inspect"}
        </span>
        <div className={hero ? "flex w-full max-w-[28rem]" : "flex"}>
          {LAYERS.map(({ id, label }, i) => {
            const Icon = layerIcon[id];
            const on = layers[id];
            return (
              <button
                key={id}
                type="button"
                aria-pressed={on}
                data-layer-toggle={id}
                onClick={() => onToggle(id, label)}
                className={[
                  "relative inline-flex items-center border border-border-strong",
                  "transition-colors duration-(--dur-fast) ease-out",
                  hero
                    ? "min-h-14 flex-1 justify-center gap-2 px-3 text-body font-semibold sm:px-4"
                    : "min-h-11 gap-2 px-3 text-label",
                  i === 0 ? "rounded-l-sm" : "-ml-px",
                  i === LAYERS.length - 1 ? "rounded-r-sm" : "",
                  on
                    ? "z-[1] bg-surface-3 text-text"
                    : "bg-surface-1 text-text-secondary hover:bg-surface-2 hover:text-text",
                ].join(" ")}
              >
                {/* Filled vs hollow square carries the state without color. */}
                <span
                  aria-hidden="true"
                  className={[
                    "inline-block size-2 shrink-0 border",
                    on ? (id === "system" ? "border-security bg-security" : "border-design bg-design") : "border-current bg-transparent",
                  ].join(" ")}
                />
                <Icon size={16} className={hero ? "hidden shrink-0 sm:block" : "shrink-0"} />
                <span className={hero ? undefined : "sr-only xl:not-sr-only"}>{label}</span>
                <span className="sr-only"> layer</span>
              </button>
            );
          })}
        </div>
      </div>

      {anyOn && hero ? (
        <button
          type="button"
          aria-expanded={legendOpen}
          aria-controls="inspect-legend"
          onClick={() => setLegendOpen(!legendOpen)}
          className="inline-flex min-h-11 items-center gap-2 self-start rounded-sm px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text"
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
