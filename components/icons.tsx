import type { SVGProps } from "react";

/**
 * Authored icon set: one 1.5px stroke, square caps, drawn on a 16 or 20 grid.
 * Icons are decorative (aria-hidden) unless a title is passed; the adjacent
 * text always carries the meaning (DESIGN.md: color is never the only signal).
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number; title?: string };

function Svg({ size = 16, title, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const SunIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="8" cy="8" r="3" />
    <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
  </Svg>
);

export const MoonIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13 9.8A5.5 5.5 0 0 1 6.2 3a5.5 5.5 0 1 0 6.8 6.8Z" />
  </Svg>
);

export const GridIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2" y="2" width="12" height="12" />
    <path d="M6 2v12M10 2v12M2 6h12" strokeDasharray="1.5 1.5" />
  </Svg>
);

export const BracketsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 3.5 1.5 8l4 4.5M10.5 3.5l4 4.5-4 4.5" />
  </Svg>
);

export const NodesIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="1.5" y="6" width="3.5" height="3.5" />
    <rect x="11" y="2" width="3.5" height="3.5" />
    <rect x="11" y="10.5" width="3.5" height="3.5" />
    <path d="M5 7.75h3M8 3.75v8.5M8 3.75h3M8 12.25h3" />
  </Svg>
);

export const PenIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 1.5 12.5 7 10 14.5H6L3.5 7 8 1.5Z" />
    <path d="M8 1.5V9" />
    <circle cx="8" cy="9.5" r="0.75" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 1.5 13.5 3.5V8c0 3.2-2.4 5.5-5.5 6.5C4.9 13.5 2.5 11.2 2.5 8V3.5L8 1.5Z" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2.5 8.5 6 12l7.5-8" />
  </Svg>
);

export const CrossIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
  </Svg>
);

export const ChevronIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 6 8 10.5 12.5 6" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2 4.5h12M2 8h12M2 11.5h12" />
  </Svg>
);

export const ListIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 4h8.5M5.5 8h8.5M5.5 12h8.5" />
    <rect x="1.5" y="3.25" width="1.5" height="1.5" />
    <rect x="1.5" y="7.25" width="1.5" height="1.5" />
    <rect x="1.5" y="11.25" width="1.5" height="1.5" />
  </Svg>
);

export const CopyIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="5" width="9" height="9" />
    <path d="M11 2H2v9" />
  </Svg>
);

export const TerminalIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="1.5" y="2.5" width="13" height="11" />
    <path d="M4 6l2.5 2L4 10M8 10.5h4" />
  </Svg>
);

export const disciplineIcon = {
  design: PenIcon,
  development: BracketsIcon,
  systems: NodesIcon,
  security: ShieldIcon,
} as const;
