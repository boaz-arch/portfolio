import { site, type Discipline } from "@/content/site";

/**
 * Route model shared by links, the popstate patch and the terminal:
 * nav order (which way content slides), section themes, and the
 * transition types for a navigation from one path to another.
 */

export type Theme = "home" | "design" | "development" | "systems" | "security" | "about" | "contact";

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/security", label: "Security" },
  { href: "/systems", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Position on the sheet, left to right. Home is leftmost, Accessibility rightmost. */
const ORDER: Record<string, number> = {
  "/": 0,
  "/work": 1,
  "/security": 2,
  "/systems": 3,
  "/about": 4,
  "/contact": 5,
  "/accessibility": 6,
};

const STACK = ["internet", "edge", "network", "host", "containers", "os"] as const;

export function clean(path: string) {
  const p = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

/** The top-level section a path belongs to ("/work/x" → "/work"). */
export function sectionOf(path: string) {
  const p = clean(path);
  if (p === "/") return "/";
  return "/" + p.split("/")[1];
}

export function orderOf(path: string) {
  return ORDER[sectionOf(path)] ?? 6;
}

export const isCaseStudy = (path: string) => /^\/work\/[^/]+$/.test(clean(path));

export function projectBySlug(slug: string) {
  return site.projects.find((p) => p.slug === slug);
}

/** Depth in the Systems stack: /systems = 0, /systems/internet = 1 … /systems/os = 6. */
export function stackDepth(path: string): number | null {
  const p = clean(path);
  if (p === "/systems") return 0;
  const m = p.match(/^\/systems\/([^/]+)$/);
  if (!m) return null;
  const i = STACK.indexOf(m[1] as (typeof STACK)[number]);
  return i === -1 ? null : i + 1;
}

const disciplineTheme: Record<Discipline, Theme> = {
  design: "design",
  development: "development",
  systems: "systems",
  security: "security",
};

/** Section theme for a path (DESIGN.md: Section themes). Case studies take their primary tag's theme. */
export function themeFor(path: string): Theme {
  const p = clean(path);
  if (isCaseStudy(p)) {
    const project = projectBySlug(p.split("/")[2]);
    return project ? disciplineTheme[project.tags[0]] : "home";
  }
  switch (sectionOf(p)) {
    case "/security":
      return "security";
    case "/systems":
      return "systems";
    case "/about":
      return "about";
    case "/contact":
      return "contact";
    default:
      return "home";
  }
}

/** The nav item that is current for a path, if any. */
export function currentNav(path: string) {
  const s = sectionOf(path);
  return NAV.find((n) => n.href === s)?.href ?? null;
}

/**
 * Transition types for navigating from → to (DESIGN.md: Page transitions).
 * React joins the classes of every matching type, so a direction and the
 * destination theme can both apply. The morph and zoom types stand alone.
 */
export function transitionTypes(from: string, to: string): string[] {
  const a = clean(from);
  const b = clean(to);
  if (a === b) return [];

  const toCase = isCaseStudy(b);
  const fromCase = isCaseStudy(a);
  if (toCase && (fromCase || a === "/" || a === "/work")) return ["morph"];
  if (fromCase && (b === "/" || b === "/work")) return ["morph-back"];

  const da = stackDepth(a);
  const db = stackDepth(b);
  if (db !== null && (da !== null || fromCase)) {
    if (da === null) return ["zoom-jump-in"];
    if (db === da + 1) return ["zoom-in"];
    if (db === da - 1) return ["zoom-out"];
    return [db > da ? "zoom-jump-in" : "zoom-jump-out"];
  }

  const dir = orderOf(b) >= orderOf(a) ? "nav-forward" : "nav-back";
  return [dir, `to-${themeFor(b)}`];
}
