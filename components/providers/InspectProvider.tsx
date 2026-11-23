"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type Layer = "design" | "code" | "system";
export const LAYERS: { id: Layer; label: string }[] = [
  { id: "design", label: "Design" },
  { id: "code", label: "Code" },
  { id: "system", label: "System" },
];

type InspectState = {
  layers: Record<Layer, boolean>;
  anyOn: boolean;
  toggle: (layer: Layer) => void;
  allOff: () => void;
  legendOpen: boolean;
  setLegendOpen: (open: boolean) => void;
  /** Polite status text, e.g. "Design layer on" */
  status: string;
  setStatus: (s: string) => void;
  /** Whether the home hero's Inspect control is on screen (header mirror hides while it is) */
  heroControlVisible: boolean;
  setHeroControlVisible: (v: boolean) => void;
  /** The segment that last changed, so Escape can return focus there */
  lastToggled: Layer | null;
};

const InspectContext = createContext<InspectState | null>(null);

export function InspectProvider({ children }: { children: React.ReactNode }) {
  const [layers, setLayers] = useState<Record<Layer, boolean>>({ design: false, code: false, system: false });
  const [legendOpen, setLegendOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [heroControlVisible, setHeroControlVisible] = useState(false);
  const [lastToggled, setLastToggled] = useState<Layer | null>(null);

  const toggle = useCallback((layer: Layer) => {
    setLastToggled(layer);
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  }, []);

  const allOff = useCallback(() => {
    setLayers({ design: false, code: false, system: false });
    setLegendOpen(false);
    setStatus("Inspect off");
  }, []);

  const anyOn = layers.design || layers.code || layers.system;

  const value = useMemo<InspectState>(
    () => ({
      layers,
      anyOn,
      toggle,
      allOff,
      legendOpen,
      setLegendOpen,
      status,
      setStatus,
      heroControlVisible,
      setHeroControlVisible,
      lastToggled,
    }),
    [layers, anyOn, toggle, allOff, legendOpen, status, heroControlVisible, lastToggled],
  );

  return <InspectContext.Provider value={value}>{children}</InspectContext.Provider>;
}

export function useInspect() {
  const ctx = useContext(InspectContext);
  if (!ctx) throw new Error("useInspect must be used inside InspectProvider");
  return ctx;
}
