---
name: Boaz King — Portfolio
description: Calm, dark slate surface; a drafting-film Inspect layer shows the real grid, code and infrastructure underneath.
colors:
  # Dark theme (default)
  bg: "#0f141b"
  surface-1: "#151b24"
  surface-2: "#1b222d"
  surface-3: "#222a37"
  text: "#e7eaef"
  text-secondary: "#b4bcc8"
  text-muted: "#8f98a6"
  border: "#262f3c"
  border-strong: "#6d7a8c"
  design-accent: "#78aef5"
  security-accent: "#e8ad4a"
  focus-ring: "#9cc4fa"
  on-accent: "#0f141b"
  # Light theme
  light-bg: "#f4f6f8"
  light-surface-1: "#ffffff"
  light-surface-2: "#eceff3"
  light-surface-3: "#e2e6ec"
  light-text: "#121821"
  light-text-secondary: "#3a4453"
  light-text-muted: "#545e6d"
  light-border: "#d6dbe2"
  light-border-strong: "#717b8a"
  light-design-accent: "#1c5ac2"
  light-security-accent: "#8a5300"
  light-focus-ring: "#1c5ac2"
  light-on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  page-title:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0em"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  small:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.005em"
  label:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.01em"
  mono-annotation:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.01em"
  mono-code:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  mono-terminal:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "6px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "32": "128px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "44px"
  inspect-toggle:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  inspect-toggle-pressed:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.text}"
  filter-button:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 14px"
    height: "44px"
  filter-button-pressed:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.text}"
  tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.small}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
  annotation-plate:
    backgroundColor: "{colors.design-accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.mono-annotation}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  code-name-tag:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.design-accent}"
    typography: "{typography.mono-annotation}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  code-panel:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
    typography: "{typography.mono-code}"
    rounded: "{rounded.md}"
    padding: "16px"
  terminal:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.text}"
    typography: "{typography.mono-terminal}"
    rounded: "{rounded.md}"
    padding: "16px"
  skip-link:
    backgroundColor: "{colors.design-accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "44px"
  nav:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    height: "64px"
---

# Design System: Boaz King — Portfolio

DESIGN.md is the source of truth for every page. It sits under BRIEF.md: if the two conflict, the brief wins and this file gets updated. If DESIGN.md conflicts with a skill (design-taste-frontend, Impeccable or any other), DESIGN.md wins.

The direction is **pinned by BRIEF.md**. It names the world (calm dark slate, blueprint blue for design and code, amber for security, one sans plus a mono kept inside Inspect, the terminal and code panels) and the first screen (name, one line, the Inspect control). So there was no direction roll. Linear and Vercel are **structural references only**: tonal surfaces with no shadows (Linear), a 4px spacing rhythm and a strict sans/mono split (Vercel). None of their colors, type, button shapes or motifs carry over.

## Overview

**Creative North Star: "Drafting Film"**

The page is a finished drawing. Inspect lays a sheet of drafting film over it: a translucent sheet carrying the architect's construction lines, dimensions and notes. With the film off, the page is quiet. Slate ground, soft off-white type, left-aligned on a 12-column grid, with lots of empty space and nothing colored. With the film on, the same page shows how it was made: its grid, its spacing, its components, its code and its infrastructure, all labeled with values that are actually in use.

The layers have their own drawing language, borrowed from technical drafting rather than browser devtools or design tools. Square anchor nodes, not dots. 45° slash ticks at dimension ends, not arrowheads. Leader lines that bend at 90°. Labels on square-cornered solid plates. Blueprint blue marks design and code. Amber marks security, and only security. Every annotation is generated from the live DOM and the token map, never typed by hand.

The empty space has a job. At ≥1024px, columns 9–12 of each content section are left open as the **margin**, which is where Inspect labels and code snippets go. This is how annotations avoid covering content on wide screens: the space is reserved for them. On narrower screens, labels move into a docked legend (see Inspect overlay spec).

**Key Characteristics:**
- Deep slate in both directions: dark by default, cool paper in light mode. No pure black, no pure white page.
- One accent per world. Each section has its own theme (see Section themes): one accent, one faint motif, one signature interaction, one transition flavor. Fonts, grid, header and spacing never change. The Inspect film keeps its own fixed colors on every page: blueprint blue for design and code, amber for security.
- One sans for all content. Mono only inside Inspect, the terminal and code panels.
- Depth from surface steps and 1px borders. A shadow only on floating layers.
- Square drafting geometry for Inspect, small 2–6px radii for the interface, nothing fully rounded.
- A two-part motion system: connected page transitions (the site is one continuous sheet) and the film drawing itself in. Everything else stays still.

## Colors

The palette is a cool, low-chroma slate scale with two accents that act as signals, not decoration.

### Design accent (blueprint blue)
- **Blueprint Blue**: dark `#78aef5`, light `#1c5ac2`. Used for Design and Code layer lines, annotation plates, code-layer name tags, the terminal prompt, code keywords and the skip link. It passes as text on every surface in both themes (≥5.09:1), so labels drawn in it are readable, not just decorative.

### Security accent (amber)
- **Survey Amber**: dark `#e8ad4a`, light `#8a5300`. Used for security notes, security nodes and edges in diagrams, the security-header list in the System layer, and threat-model callouts. Light mode uses a deep amber so it can serve as text (5.05:1 or better); bright amber on white fails.

### Neutral (dark, default)
- **Deep Slate** `#0f141b` (bg): the page ground. Blue-grey, clearly not black.
- **Slate 1** `#151b24` (surface-1): project rows on hover, buttons, terminal body.
- **Slate 2** `#1b222d` (surface-2): open expandable panels, code panels, tags.
- **Slate 3** `#222a37` (surface-3): pressed toggles, legend sheet, name tags.
- **Paper White** `#e7eaef` (text): headings and body. Soft off-white, never `#fff`.
- **Pencil Grey** `#b4bcc8` (text-secondary): lead lines, metadata, nav links, footer text.
- **Graphite** `#8f98a6` (text-muted): timestamps, line numbers, placeholder markers. It passes 4.5:1 on every surface, so it can be used for real text, not only fine print.
- **Hairline** `#262f3c` (border): decorative dividers and resting card edges. Carries no information.
- **Rule Line** `#6d7a8c` (border-strong): input edges, toggle outlines, diagram strokes, card edges on hover/focus. ≥3.31:1 on every surface.
- **Focus Blue** `#9cc4fa` (focus-ring).

### Neutral (light)
- **Cool Paper** `#f4f6f8` (bg), **White** `#ffffff` (surface-1), `#eceff3` (surface-2), `#e2e6ec` (surface-3).
- **Ink** `#121821` (text), **Pencil** `#3a4453` (text-secondary), **Graphite** `#545e6d` (text-muted).
- **Hairline** `#d6dbe2` (border), **Rule Line** `#717b8a` (border-strong).
- **Focus Blue** `#1c5ac2` (focus-ring). In light mode the focus color equals the design accent. That's acceptable because the focus ring is a thick outline with an offset, never a thin line (see Accessibility).

### Implementation

Each role is a CSS custom property on `:root` (dark) and `:root[data-theme="light"]`, exposed to Tailwind under the same names (`bg-surface-2`, `text-muted`, `border-strong`). Components use roles only, never hex values. Set `color-scheme: dark` / `light` with the theme so form controls, scrollbars and the caret follow.

Translucent tints, decorative only (never text):
- `design-tint`: design-accent at 8% (dark) / 7% (light). Fills grid column bands in the Design layer.
- `security-tint`: security-accent at 10% (dark) / 8% (light). Fills security callouts behind amber text, which still passes at the listed ratios.

### Contrast table

All ratios are WCAG 2.x relative-luminance contrast, computed from the hex values above. Requirements: text 4.5:1 (large text 3:1); UI components and meaningful graphics 3:1.

**Dark theme**

| Foreground | on bg `#0f141b` | on surface-1 | on surface-2 | on surface-3 | Use | Req. |
|---|---|---|---|---|---|---|
| text `#e7eaef` | 15.33 | 14.34 | 13.26 | 11.97 | body, headings | 4.5 |
| text-secondary `#b4bcc8` | 9.65 | 9.03 | 8.35 | 7.54 | metadata, nav | 4.5 |
| text-muted `#8f98a6` | 6.35 | 5.94 | 5.49 | 4.96 | small meta | 4.5 |
| design-accent `#78aef5` | 8.07 | 7.55 | 6.98 | 6.31 | annotations as text | 4.5 |
| security-accent `#e8ad4a` | 9.25 | 8.65 | 8.00 | 7.22 | security notes as text | 4.5 |
| focus-ring `#9cc4fa` | 10.29 | 9.63 | 8.90 | 8.04 | focus outline | 3 |
| border-strong `#6d7a8c` | 4.24 | 3.96 | 3.66 | 3.31 | inputs, strokes | 3 |
| border `#262f3c` | 1.37 | 1.28 | 1.18 | 1.07 | decorative only | none |
| on-accent `#0f141b` on design-accent | 8.07 | | | | annotation plates, skip link | 4.5 |
| on-accent on security-accent | 9.25 | | | | amber plates | 4.5 |

**Light theme**

| Foreground | on bg `#f4f6f8` | on surface-1 `#fff` | on surface-2 | on surface-3 | Use | Req. |
|---|---|---|---|---|---|---|
| text `#121821` | 16.45 | 17.82 | 15.45 | 14.23 | body, headings | 4.5 |
| text-secondary `#3a4453` | 9.09 | 9.85 | 8.54 | 7.86 | metadata, nav | 4.5 |
| text-muted `#545e6d` | 6.06 | 6.56 | 5.69 | 5.24 | small meta | 4.5 |
| design-accent `#1c5ac2` | 5.89 | 6.38 | 5.53 | 5.09 | annotations as text | 4.5 |
| security-accent `#8a5300` | 5.84 | 6.33 | 5.49 | 5.05 | security notes as text | 4.5 |
| focus-ring `#1c5ac2` | 5.89 | 6.38 | 5.53 | 5.09 | focus outline | 3 |
| border-strong `#717b8a` | 3.95 | 4.28 | 3.71 | 3.42 | inputs, strokes | 3 |
| border `#d6dbe2` | 1.28 | 1.39 | 1.21 | 1.11 | decorative only | none |
| on-accent `#ffffff` on design-accent | 6.38 | | | | annotation plates, skip link | 4.5 |
| on-accent on security-accent | 6.33 | | | | amber plates | 4.5 |

**Failures from the references, and how they're fixed here**

| Reference failure | Ratio | Fix in this system |
|---|---|---|
| Linear `ink-tertiary #62666d` as muted text | 3.62 | Muted is `#8f98a6` (dark) / `#545e6d` (light): ≥4.96 / ≥5.24 on every surface. There is no "disabled grey" text token. Disabled controls use text-muted plus a dashed border and the `disabled` attribute. |
| Linear accent `#5e6ad2` as text | 4.44 | No violet anywhere. Blueprint blue `#78aef5` / `#1c5ac2` passes as text on every surface (≥6.31 / ≥5.09). |
| Vercel `mute #888888` on white | 3.54 | Same muted fix as above. |
| Vercel link `#0070f3` on `#fafafa` | 4.36 | Links are text color with an underline, not accent color. The accent is reserved for annotations. Where blue text appears on light, it is `#1c5ac2` (≥5.09). |
| Vercel amber `#f5a623` on white | 2.03 | Light-mode amber is `#8a5300` (≥5.05). Bright amber appears only on dark surfaces. |
| Both: hairlines below 3:1 | 1.1–1.5 | Split into `border` (decorative, no meaning) and `border-strong` (≥3.31 dark / ≥3.42 light) for anything a user must see. |

**`prefers-contrast: more`:** `border` takes the value of `border-strong`; `text-muted` takes `text-secondary`; tints drop to 0 (lines only); Inspect line weight goes from 1px to 2px.

**`forced-colors: active`:** all accents map to system colors: lines `CanvasText`, plates `Highlight` / `HighlightText`, focus `Highlight`. SVG strokes use `currentColor` so they follow. Meaning survives because no state depends on color alone (see Accessibility).

### Named Rules
**The One Accent Rule.** A page has exactly one accent: its section theme's `--accent`. Two scoped exceptions carry state, not decoration: signal green means "healthy / up" (Systems only) and severity red means "critical / high" (Security only), each always paired with text and an icon. The Inspect film is the tool laid over every world and always uses blueprint blue (design, code) and amber (security). No accent is used just to make something pretty: no accent-filled buttons, no accent-colored headings, no accent hovers on large areas.

**The No-Fake-Contrast Rule.** Any ratio not in the table above must be computed before it ships. Translucent overlays don't count as a background. Measure against the solid surface underneath.

## Typography

**Sans:** Atkinson Hyperlegible Next (fallback: `ui-sans-serif, system-ui, sans-serif`)
**Mono:** Atkinson Hyperlegible Mono (fallback: `ui-monospace, SFMono-Regular, Menlo, monospace`)

**Why this pair:**
- **The glyphs serve the content.** Atkinson Hyperlegible came out of the Braille Institute's low-vision research. Its letterforms are deliberately easy to tell apart: `I l 1`, `0 O`, `rn m`, and mirror pairs like `b d`. This site displays CSP strings, hashes, header names, IP ranges, port numbers and CTF flags, where telling those characters apart matters.
- **The mono matches the sans.** The mono is drawn on the same skeleton as the sans. When an Inspect label sits next to a heading, the two read as one family with two jobs. That supports the brief's sans-for-content, mono-for-Inspect split better than an unrelated technical mono would.
- **It fits the brief's priorities.** The brief makes accessibility override style. A typeface built for readers with low vision is the brief's own priority showing in the letterforms. Accessibility recruiters will recognize the choice, and nobody would mistake it for a Linear or Vercel template.
- **It's practical.** Both are open-source (OFL), on Google Fonts, and variable (200–800 weight). Self-host them through `next/font/google` with `display: "swap"` and the Latin subset, which gives 2 woff2 files and fallback metric adjustment so the swap causes no layout shift.

**Character:** plain, sturdy and slightly warm. More engineer's notebook than glossy product site. At display sizes, tight tracking (−0.03em) and weight 600 tighten its humanist curves into something exact.

### Hierarchy

| Role | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| display | clamp 40→64px | 600 | 1.05 | −0.03em | Home hero name only (the home `h1`) |
| page-title | clamp 32→48px | 600 | 1.1 | −0.025em | `h1` on every other page |
| headline | clamp 26→36px | 600 | 1.15 | −0.02em | `h2` section headings |
| title | 22px | 600 | 1.25 | −0.01em | `h3`: project titles, case study sub-sections |
| subtitle | 18px | 600 | 1.35 | 0 | `h4`, summary rows of expandable panels |
| lead | clamp 18→22px | 400 | 1.5 | −0.005em | Hero line, section intros |
| body | 16px | 400 | 1.6 | 0 | All running text. Measure 60–72ch. |
| small | 14px | 400 | 1.5 | 0.005em | Metadata, tags, footer, figure descriptions |
| label | 14px | 600 | 1.25 | 0.01em | Buttons, toggles, filters, nav. Sentence case. |
| mono-annotation | 12px | 500 | 1.35 | 0.01em | Inspect plates and leaders. Never smaller. |
| mono-code | 13px | 400 | 1.6 | 0 | Code panels (Code layer and case studies) |
| mono-terminal | 14px | 400 | 1.6 | 0 | Terminal input and output |

- Weights used: 400 and 600 for sans; 400 and 500 for mono. No 700 or above.
- Headings use `text-wrap: balance`; body uses `text-wrap: pretty`.
- Use `font-variant-numeric: tabular-nums` in metric tables, dates, header lists and every Inspect value, so numbers align.
- All sizes are in `rem` so browser text zoom scales everything. All line heights are unitless so text-spacing overrides (line-height 1.5, paragraph spacing 2em, letter-spacing 0.12em, word-spacing 0.16em) reflow without clipping. Text containers never set a fixed `height`, and plates and chips use `min-height`.

### Named Rules
**The Mono Boundary Rule.** Mono appears only inside the three Inspect layers, the Inspect legend, the terminal, code panels, and commit hashes on About (they are code text). Case studies may include code panels; prose never does. Inline technical terms in prose (`Content-Security-Policy`, `nginx`) use the sans on a surface-2 tint with radius xs.

**The Sentence Case Rule.** No all-caps text anywhere: no uppercase eyebrows, labels, buttons or nav. Text never carries a label above its heading.

## Layout

**A left-aligned 12-column grid, with the right edge reserved as a margin for Inspect labels.**

### Breakpoints

| Name | Min width | Columns | Gutter | Side margin | Notes |
|---|---|---|---|---|---|
| base | 320px | 12 | 12px | 16px | Content spans all 12 columns. Inspect uses the legend. |
| sm | 375px | 12 | 12px | 20px | Hero display size steps up. |
| md | 768px | 12 | 24px | 32px | Two-column splits begin (text 1–7, aside 8–12). |
| lg | 1024px | 12 | 24px | 48px | Body text occupies columns 1–8; columns 9–12 become the Inspect margin. |
| xl | 1440px | 12 | 32px | auto, ≥64px | The container caps at its max width. |

- **Max content width:** 1200px (75rem) inside the side margins, aligned left in the container. The container itself is centered in the viewport, so both content edges are equal.
- **The grid is always 12 columns.** The Design layer draws the real grid at every width; it never draws a different one. On narrow screens content spans `1 / -1`.
- **Reading measure:** running text spans columns 1–8 at lg and above (≈ 760px at 1200, about 68ch at 16px) and never spans all 12.
- **Reflow:** at 320 CSS px (and at 200% zoom on a 640px window) every page is one column with no horizontal scroll. Tables that can't fit turn into stacked definition lists below md. Code panels are the only thing allowed to scroll sideways, and only inside their own body. The page itself never does.

### Spacing (4px base)

Tokens: `1`=4, `2`=8, `3`=12, `4`=16, `5`=20, `6`=24, `8`=32, `10`=40, `12`=48, `16`=64, `20`=80, `24`=96, `32`=128 (px).

- **Section spacing:** `--section-y: clamp(4rem, 2rem + 8vw, 8rem)` (64 → 128px) above each `h2` section. Sections are separated by space only, never by a divider and never by background bands.
- **Heading rhythm:** more space above a heading than below it. Above `h2`: section-y. Below `h2`: 32px (`8`). Above `h3`: 48px (`12`). Below `h3`: 12px (`3`). Paragraph gap: 16px (`4`).
- **Component internals:** controls 8–16px, panels 16–24px, project rows 32px vertical.
- **Anchors:** `scroll-padding-top: calc(var(--header-h) + 16px)`, so linked headings and focused elements are never hidden under the sticky header.

### Named Rules
**The Margin Rule.** At lg and above, nothing in body content occupies columns 9–12 except a section's optional aside (a figure or a metadata list) when Inspect is off. When Inspect is on, the margin belongs to labels and snippets, and asides pass under the film without being hidden. Labels never cover content.

**The Left Edge Rule.** Everything aligns left to column 1. No centered sections, no centered headings over left-aligned text.

## Elevation & Depth

Flat by default. Depth comes from the slate steps and 1px borders, as in Linear's surface ladder, but with no glow, edge highlights or gradients. A shadow appears only on floating layers that sit above the page.

| Level | Surface | Edge | Shadow | Role |
|---|---|---|---|---|
| 0 | bg | none | none | Page ground, sections, header (solid bg, no blur) |
| 1 | surface-1 | border | none | Buttons, project-row hover fill, terminal body |
| 2 | surface-2 | border | none | Open panels, code panels, tags, inline terms |
| 3 | surface-3 | border-strong | `overlay` | Terminal dialog, Inspect legend sheet, System sheet |

- **`overlay` shadow** (only for floating layers): dark `0 24px 48px -16px rgb(4 7 12 / 0.6), 0 2px 6px rgb(4 7 12 / 0.4)`; light `0 24px 48px -16px rgb(18 24 33 / 0.18), 0 2px 6px rgb(18 24 33 / 0.08)`. It has a vertical offset and soft blur; it is never a halo.
- **Backdrop:** the terminal dialog uses `::backdrop` at bg with 60% opacity. No blur.
- **The Inspect film is not a level.** It is drawn above level 0–2 content and below level 3, with `pointer-events: none`, so the page stays usable underneath.

### Named Rules
**The Flat-At-Rest Rule.** A surface gains a shadow only if it floats above the page and can be dismissed. Cards, rows and panels never get one.

## Shapes

- **Radii:** `none` 0 for the Inspect film (lines, plates, nodes, markers) and toggle segments, the drafting geometry. `xs` 2px for tags and inline terms. `sm` 4px for buttons, inputs, filter buttons and the skip link. `md` 6px for code panels, the terminal, the legend sheet and image frames.
- **Never fully rounded.** There are no pill buttons, pill tags, circular icon buttons or round dots. Even the Inspect anchor nodes are 5px squares. Nothing on the site uses `9999px`.
- **Borders:** 1px is the only interface weight. 1.5px for content diagram strokes. 2px for the focus ring and for Inspect lines under `prefers-contrast: more`.
- **Drafting marks (Inspect only):** 5×5px square anchor nodes; 45° slash ticks, 7px long, at dimension-line ends; leader lines with a single 90° elbow; plates with square corners and a 1px notch gap where the leader meets them.

## Components

Every component's accessible role, name and state is listed in the Accessibility section.

### Header and nav
- **Structure:** `<header>` sticky at the top, 64px tall, solid bg, a hairline `border` bottom only after scrolling 8px. It holds a wordmark link (the name in subtitle type, links home), the primary nav, the theme toggle, and (on pages other than home, or on home once the hero is out of view) the compact Inspect control.
- **Nav links:** Work (`/work`), Security (`/security`), Systems (`/systems`), About (`/about`), Contact (`/contact`). These are real routes, in this order; the order also sets the direction of section transitions. Label type, text-secondary, 44px tall hit area. Hover: text color. Current page: text color and `aria-current="page"` (a case study marks Work as current with `aria-current="true"`).
- **Active indicator:** a single 2px bar in text color under the current link (not accent: the Two Signals Rule). It has its own `view-transition-name: nav-indicator`, so on navigation it slides and resizes to the new link instead of disappearing and reappearing. On Home and `/accessibility` no link is current and there is no bar.
- **Header persistence:** the header has `view-transition-name: site-header` with no animation, so it, the compact Inspect control and the theme toggle never re-animate between pages.
- **Without JavaScript:** the Menu button is hidden and the mobile nav list is shown open below the header, so every route stays reachable.
- **Below lg (1024px):** the links collapse behind a `Menu` button (five links, the Inspect mirror and the theme toggle do not fit one row below 1024px) that opens a panel directly below the header (not full screen, not a modal). Escape or a second press closes it and returns focus to the button.
- **Labels:** `<nav aria-label="Primary">`; the footer nav is `aria-label="Footer"`; the case study's on-page list is `aria-label="On this page"`.

### Skip link
- The first focusable element in `<body>`: "Skip to main content", targeting `<main id="main" tabindex="-1">`.
- Off-screen until focused (`translateY(-120%)`). On focus it appears at the top left, 16px inset, above the header (z-index above level 3), in design-accent with on-accent text, 44px tall, radius sm. It appears instantly in every motion mode.

### Theme toggle
- An icon button, 44×44, radius sm, transparent until hover (surface-1). It shows a sun icon in dark mode and a moon in light; 20px drawn icons with a 1.5px stroke.
- `<button aria-pressed="true|false">` with the accessible name "Dark theme". Pressed means dark. A tooltip-free design: the name is announced, and the visible icon changes.
- **No flash of the wrong theme:** a small inline script in `<head>`, before any stylesheet paints, reads `localStorage.theme` (in try/catch). It falls back to dark, never to `prefers-color-scheme`, since the brief says dark by default. It sets `data-theme` and `color-scheme` on `<html>`. The choice is saved on every toggle. Changing theme swaps tokens instantly with no color transition.

### Inspect control
- **Shape:** a group with the visible label "Inspect" (label type, text-secondary) followed by three joined toggle segments: **Design**, **Code**, **System**. Each segment is 44px tall, radius none on inner joins and sm on the outer corners, with a 1px border-strong outline. Each has a 16px drafting icon (grid square / angle brackets / three linked nodes) plus its text.
- **States:** off is surface-1 with text-secondary text and a **hollow 8px square** indicator. On (`aria-pressed="true"`) is surface-3 with text color and a **filled 8px square** in design-accent, or security-accent for System. The filled/hollow square carries state without relying on color. Layers toggle independently, so several can be on at once.
- **Show as list:** when any layer is on, a fourth button "Show values as list" appears after the group. It opens the Inspect legend (below), which is the readable version of everything the film draws.
- **Placement:** on home, inline in the hero under the lead line. On every other page, and in the header on home once the hero scrolls away, there is a compact version: in the header bar from lg (icons, with text labels from xl), and inside the Menu panel below lg. Names are kept as accessible names when hidden visually. Below md the full control stacks its "Inspect" label above the segments and drops the decorative icons so it fits 320px. Both instances share one state.
- **Keyboard:** Tab reaches each segment. Space/Enter toggles. Escape turns every layer off and returns focus to the segment that last changed state.

### Home
- Hero (name as `h1` in display type, the one line, the full Inspect control), then a short intro paragraph (lead type, columns 1–8), then **Featured work**: 3 project rows in the same row component as `/work`, then **Explore**: a plain list of links into each section page, each with a one-line description. No cards, no icon-plus-heading grid.

### Project row (Selected work)
Projects are a **list of rows**, not a grid of same-size cards.
- Each row is an `<article>` in an `<ul>`, 32px vertical padding, separated by a hairline border. At lg: a screenshot frame in columns 1–5 (16:10, radius md, 1px border) and text in columns 6–8 when Inspect is off. Below md, it stacks: frame, then text.
- **Number:** each project has a fixed two-digit number from its order in `content/site.ts` ("01"–"06"), in title type, tabular, text-muted, before the title. It is the project's place in the sequence that Previous / Next walks through, so the number carries information (an allowed exception to "no numbering"). Screen readers hear "Project 1".
- **Text:** title (`h3`, title type) as the only link, stretched over the row with `::after` so the whole row is clickable, followed by a one-line summary (body, text-secondary), then the tag list, then role and year (small, text-muted).
- **Shared names (morph):** the row is `project-<slug>`, its number `project-num-<slug>`, its title `project-title-<slug>` and its tag list `project-tags-<slug>`. The case study header carries the same names, so the row morphs into the header. React's `<ViewTransition name>` applies the names only during a transition, so a name never exists twice on one page.
- **Placeholder frames:** until real screenshots exist, the frame shows a 45° hatch pattern in border color with "Placeholder: project screenshot" in small text-muted. Never a stock image.
- **Hover/focus:** row fill goes to surface-1, the frame edge to border-strong, and the title's underline draws in (120ms). No lift, no scale, no shadow.

### Tags
- A small inline label: surface-2, 1px border, radius xs, `2px 8px`, small type in text-secondary, with a 14px icon before the text: pen nib (Design), brackets (Development), linked nodes (Systems), shield (Security). Tags are never colored; the icon and word carry the category.
- Tags in rows are plain text in a `<ul aria-label="Tags">`. They are not buttons. Filtering happens only in the tag filter.

### Tag filter
- A row of buttons above the project list: **All**, **Design**, **Development**, **Systems**, **Security**. Each has the tag's icon and label type, is 44px tall, radius sm, 1px border-strong edge.
- Single select. The current filter is `aria-pressed="true"`: surface-3 fill, text color, plus a checkmark icon before the label (state without color). The others are bg with text-secondary.
- Wraps onto multiple lines at narrow widths. It never scrolls sideways.
- Results: rows that don't match are removed instantly, with no animation. A visually hidden `<p aria-live="polite">` and a visible small text-muted line both say, for example, "Showing 3 of 6 projects tagged Security." If a filter matches nothing (not expected with real data), it says so and offers a "Show all projects" button.

### Case study sections
- **Header:** `h1` page-title, then the lead line, then a metadata list (`<dl>`: Role, Timeline, Team, Stack) in small type, two columns at md+.
- **On this page:** an inline `<nav aria-label="On this page">` list under the header that links to the six sections. Not sticky, since the margin belongs to Inspect.
- **Sections, in order, each an `h2`:** Problem → Design decisions → How it's built → System architecture → Security → Outcome.
  - *Design decisions:* each decision is an `h3` with the decision, the alternative rejected and why. Screenshots go in frames with alt text.
  - *How it's built:* prose plus a component/stack list, and at most two short code panels (≤ 12 lines each) of real code. The Code layer additionally shows the page's own source.
  - *System architecture:* one diagram (see Diagram style) with its text alternative.
  - *Security:* three `h3`s. **Threat model** is a table: asset, threat, likelihood, mitigation; it becomes stacked definition lists below md. **Protections** is a list where each item starts with a shield icon and the word "Protection". **Testing** describes the method, tools and findings. Security callouts use security-tint, a full 1px amber border, radius sm and a "Security note" text label. They never use a side stripe.
  - *Outcome:* results as a `<table>`: metric, before, after, how it was measured. Tabular numbers. Not the big-number hero-metric template. Placeholder numbers read "[Placeholder: metric]" until real.
- **Header names:** the case study header is `project-<slug>`; inside it the number (`project-num-<slug>`), `h1` (`project-title-<slug>`) and tags (`project-tags-<slug>`) carry the matching names from the project row.
- **Previous / Next project:** at the end, a `nav aria-label="Projects"` with two compact project rows (number, title, tags), linked as "Previous project: *name*" and "Next project: *name*". They wrap around (the last project's Next is the first). They carry the target project's shared names, so following them uses the same morph. No arrow glyphs.
- **Every project has a case study page.** Projects without written content render the template with visibly marked placeholders.

### Diagram style (content diagrams)
- Used for system architecture, homelab/network diagrams and the System layer.
- Inline SVG, `viewBox` scaled to the container width. **Nodes:** rectangles, radius xs, surface-1 fill, 1px border-strong edge, 14px sans labels (content diagrams use the sans; only the System layer's header values use mono). **Edges:** 1.5px text-secondary lines with solid 7px arrowheads. Solid line means request; dashed (6 4) means response or async. A legend is always shown.
- **Security nodes and edges** (TLS termination, WAF, firewall, auth): amber stroke, a shield icon inside the node, and the word in the label ("TLS 1.3 (security)"). Amber is never the only cue.
- **Groups** (VLAN, VPC, host): dashed 1px border rectangle, radius none, with the group name top left in small text-secondary.
- **Responsive:** each diagram has a horizontal layout for md+ and a vertical one below md. Labels never render below 14px, and there is no sideways scroll at 320.
- **Text alternative:** each diagram is a `<figure>` containing:
  1. an `<svg role="img" aria-labelledby="t d">` with `<title id="t">` (name) and `<desc id="d">` (one-sentence summary);
  2. a visible description in small text-secondary under it (one or two sentences on what the diagram shows, not a caption about the image);
  3. `<details><summary>Text version of the <name> diagram</summary>` with an ordered list of the same flow, one step per edge, security steps marked "(security)".

### Expandable panel (Security work, Systems)
- A native `<details>` / `<summary>`. The summary row is 56px minimum tall, full width, 1px hairline top border, with the item title (subtitle type), a one-line meta (small, text-muted: type, date, platform) and a 16px chevron on the right that rotates 180° when open.
- **Open:** the body sits on surface-2, radius sm, 24px padding. Content: summary, approach, tools, takeaway, and a link to the full write-up named by its title.
- **Hover:** the title gets an underline. Focus: the ring wraps the whole summary row.
- Panels inside a list are independent. Opening one does not close others.

### Code panel (Code layer and case studies)
- **Structure:** a `<figure role="region" aria-labelledby>` labeled by its caption. surface-2, 1px border, radius md. **Header row:** a `<figcaption>` with the source path or a short title (`components/ProjectRow.tsx:12–24`) in mono-annotation text-muted, and a "Copy code" button (label type, 44px target). The button's accessible name includes what it copies ("Copy code: ProjectRow.tsx"). After copying, a polite live region announces "Copied", and the button text reads "Copied" for 2 seconds.
- **Body:** a `<pre>` in mono-code, 16px padding, `white-space: pre`. It scrolls horizontally **inside the panel only** (`overflow-x: auto`); the page never scrolls. When it overflows, it gets `tabindex="0"` so keyboard users can scroll it, with the standard focus ring. Line numbers in text-muted are `aria-hidden` and not copied. At most 12 lines; longer snippets are trimmed at a meaningful boundary with "Lines 12–24 of 88" shown.
- **Highlighting,** within the two-signal palette: keywords and JSX tags in design-accent, strings in text, comments in text-muted, security-relevant tokens (header names, `nonce`, `integrity`) in security-accent. Everything else in text.
- **Content is real:** snippets are read from the source files at build time, never retyped.

### Terminal
- **Opening:** opens with the backquote key, detected by **physical key** (`event.code === "Backquote"`, never `event.key`), so it works on Hebrew, Arabic, Russian and other non-US layouts, where that key produces a different character. It is ignored when focus is in an `input`, `textarea`, `select` or `contenteditable` element, when the terminal is already open, during IME composition (`event.isComposing`), and when Ctrl, Alt or Meta is held. It also opens from the always-visible "Open terminal" button in the footer. Ctrl+K is deliberately not used, because it's taken by browser search in Chrome and Edge on Windows.
- **Shortcut setting:** single-character shortcuts can be turned off (WCAG 2.1.4), via the footer button "Keyboard shortcut: on". It is a toggle with `aria-pressed`, saved in `localStorage`, and documented on `/accessibility`.
- **Container:** a native `<dialog>` opened with `showModal()`. Width `min(720px, 100% − 32px)`, max height 70svh, anchored to the bottom center (bottom sheet below md), surface-1, border-strong, radius md, overlay shadow.
- **Title bar:** "Terminal" (label type, sans) plus a 44×44 Close button. No traffic-light dots.
- **Body:** mono-terminal. The output is a `<div role="log" aria-live="polite">` that announces only new output. On open it prints "Type help to see commands. Press Escape to close."
- **Input row:** a prompt `boaz@portfolio:~$` in design-accent (`aria-hidden`), then an `<input>` with `<label>` "Terminal command" (visually hidden), `autocomplete="off"`, `spellcheck="false"`. The caret is themed to design-accent.
- **Commands:** `help`, `whoami`, `projects`, `skills`, `contact`, `clear`, `theme`. Unknown input prints: "Command not found: x. Type help to see commands." Output links are real `<a>` elements. Arrow up/down cycles history.
- **Closing:** Escape closes it, as do the Close button and backdrop click. Focus returns to whatever opened it (the footer button, or the element that was focused when the shortcut fired).

### Footer
- A hairline top border, 64px top / 48px bottom padding. In small type, text-secondary:
  1. the name and a one-line summary;
  2. `<nav aria-label="Footer">` with Accessibility statement (`/accessibility`) on every page, plus Contact, GitHub, LinkedIn;
  3. the "Open terminal" button and the "Keyboard shortcut: on/off" toggle;
  4. "Last updated" with a `<time>`.
- All links are underlined. External links name their destination ("GitHub profile", "LinkedIn profile") and get no icon.

### Contact
- The email is plain text inside a `mailto:` link, with a "Copy email" button that confirms in an `aria-live` region ("Email copied"). The profiles are GitHub, LinkedIn, TryHackMe and HackTheBox. The PGP key is optional: a fingerprint in grouped 4-character blocks (sans, tabular) with a link to the `.asc` file.
- If a form is ever added, it follows Accessibility, Forms below.

### Accessibility statement page (`/accessibility`)
- **Read mode:** one column (columns 1–8 at lg). `h1` "Accessibility statement", then `h2` sections in this order:
  - Standard (WCAG 2.2 AA / IS 5568)
  - What we made accessible
  - Keyboard shortcuts (the terminal shortcut and how to turn it off)
  - Known limitations
  - Tested with (a table of assistive technology × browser × date)
  - Accessibility coordinator (a `<dl>` of name, email and phone, all from `content/site.ts`)
  - Report a problem (what to include, expected response time)
  - Last updated (`<time>`).
- Same tokens, no Inspect margin columns needed. Inspect still works on this page.

## Section themes

Each subject is its own world inside one system. **Never changes between themes:** fonts, the 12-column grid, the header, the spacing scale, radii, type scale, surface and text colors, focus ring, the Inspect film. **Each theme changes only four things:** its accent color, a faint background motif, one signature interactive element, and the flavor of its page transition.

### Mechanism
- Each page's content wrapper carries `data-section="home | design | development | systems | security | about | contact"`, server-rendered, so themes work without JavaScript. The root layout mirrors the current section onto `<html data-section>` on navigation, so the header (nav indicator) can use it too.
- Theme tokens are CSS custom properties scoped by that attribute: `--accent`, `--accent-tint` (accent at 8–10% for fills behind accent text), `--motif` (the motif's line color), plus scoped state colors where a theme has them (`--signal-up`, `--severity`).
- `--accent` is registered with `@property { syntax: "<color>"; inherits: true }`, so it can animate. During a page transition the old snapshot carries the old accent and the new snapshot the new one, so the accent crossfades as the user crosses into the new space; the nav indicator (its own transition group) shifts color while it slides. When `/work` changes filter in place, `--accent` transitions over 300ms ease-out (instant under reduced motion).
- **Case studies take the theme of their primary tag** (the first tag in `content/site.ts`).
- **`/work`** follows the **lens**, not the filter: Overview is The Sheet; Design → Drafting table, Code → The editor, Systems → The network, Security → The vault. Filters only choose which projects are listed.

### Motif rules (all themes)
- Decorative only: `aria-hidden`, CSS backgrounds or one static inline SVG, never an image file, never animated.
- Low contrast: motif lines use `--motif`, at most 1.3:1 against the page background, and fade to nothing behind the reading column (columns 1–8) wherever body text sits, via a mask that keeps them in the outer margins and empty space.
- Removed entirely under `prefers-contrast: more` and `forced-colors: active`.

### Signature rules (all themes)
- Works with keyboard alone, has a visible focus state (the standard ring), and has a reduced-motion version that shows the same information without animation.
- Never the only way to reach information: everything it reveals is also available as text.

### The themes

| Theme | Where | Accent (dark / light) | Motif | Signature | Transition flavor (enter) |
|---|---|---|---|---|---|
| **The Sheet** | `/`, `/work` unfiltered, `/accessibility` | Neutral: `#e7eaef` / `#121821` (the text color) | None | Section links preview where they lead: each link has a 12px square in that section's accent before its label | The default directional slide |
| **Drafting table** | Design work: `/work` filtered to Design, case studies whose primary tag is Design | Blueprint blue `#78aef5` / `#1c5ac2` | Faint fine grid like cutting-mat graph paper: 8px minor lines, 40px major lines, `--motif` | Hovering or focusing a project row draws its measurement redlines: the Design layer scoped to that row only (outline, size plate, padding dimensions) | Content drops into registration: `translate(−6px, −6px) → 0`, opacity 0 → 1, 320ms ease-out, while four 12px registration crosshairs at the content corners fade in and out (decoration) |
| **The editor** | Development: `/work` filtered to Development, case studies whose primary tag is Development | Cyan-teal `#4fc6bd` / `#0a7069` | Faint line numbers down the left page margin of long pages (md and up; the margin is too narrow below md) | Case study code panels show the real component, and a "View source" toggle (`aria-pressed`) on each section reveals the JSX behind the section you are reading, in a code panel under its heading | Lines in: the new content is revealed top to bottom in steps of one line height (`clip-path` with `steps()`), 360ms total. Whole lines, never characters: no typewriter |
| **The network** | `/systems`, case studies whose primary tag is Systems | Steel blue-grey `#9db2c7` / `#45607a`. Signal green `#74c69d` / `#196b42` **only** for healthy / up states, always with a check icon and the word "Up" | A faint static topology map (nodes and links) in the outer margins | Interactive architecture diagram: each node is a focusable button; hover or focus highlights its links and shows a spec card (OS, role, ports). Optional slow packet along one route (6px square, 4s per pass), paused on hover and focus, with a visible "Pause animation" button (WCAG 2.2.2), removed under reduced motion | Connects in along the diagram lines: content reveals from the left edge (`clip-path: inset(0 100% 0 0) → inset(0)`), 380ms ease-out |
| **The vault** | `/security`, case studies whose primary tag is Security | Amber `#e8ad4a` / `#8a5300`. Muted severity red `#ec8a83` / `#b02f27` **only** for Critical / High labels, always text + icon | Faint redaction bars in the outer margins, and a document-classification line at the top of the page ("Classification: Public · Portfolio record · Updated <date>") in small text-muted type | Write-ups start with key details redacted by solid bars. A "Declassify" button (`aria-pressed`) per write-up reveals them. The bars are `aria-hidden` overlays on the real text, so screen readers always get the full text. Severity: text + icon + color | Unlock: a single 1px accent scan line passes top to bottom while the content clips in behind it, 360ms ease-out |
| **The workbench** | `/about` | Warm off-white `#e6dccb` / `#5f5140`, used as the highlight | None: the calmest page, so the person stands out | "git log of me" (see below). Below it, "How I work" is a horizontal sequence of the five steps. It fills step by step as the reader scrolls it into view or tabs through it: each reached step gets a filled square and the accent rule under it. This is the one scroll-linked element on the site, and it changes state rather than moving anything | The default directional slide |
| **The handshake** | `/contact` | Blueprint blue `#78aef5` / `#1c5ac2` | None | The three-step handshake form, beside a "key card" (see below) | The default directional slide |

**How flavor and direction combine.** The exit is always the directional slide (old content leaves along the grid axis in nav order, 240ms), so pages still feel like neighbours on one sheet. The destination theme decides the enter. The project morph (`morph`, `morph-back`) overrides both, whatever the themes.

### The workbench: git log of me

`/about` reads as a commit history, newest first, in columns 1–8.
- **HEAD** (first entry): a surface-1 panel, 1px border-strong, radius md. "HEAD → now" (label type) then what Boaz is doing now and what he is looking for (job, freelance, collaboration), as `h2` "Now" plus body text and a short list of what he's open to.
- **Commits:** an `<ol>` (newest first). Each `<li>` has an `h3` containing a `<button aria-expanded aria-controls>`: short hash (mono, 7 characters, text-muted, tabular), date (`<time>`, small, text-muted), then the one-line message (title type). Hashes and dates are fixed in `content/site.ts`; they are labels, not real commits.
- **Expanded commit:** the story (2–4 sentences, body), an optional photo (16:10 frame, radius md, alt text; placeholder frame until real), and the skills it added as diff lines in a list: each line is `+ Docker` in mono with a visually hidden "added" (`<span class="sr-only">added</span>`), and the accent on the "+". Expands with the panel height animation (200ms); under reduced motion instantly.
- **Branch lines:** a decorative SVG (`aria-hidden`) in a 32px rail left of the list: a 1.5px border-strong line through square commit nodes (8px, accent fill for HEAD). Where the path forked, a branch leaves and rejoins as a merge; the merge commit's message says it in text ("Merge: design into development"). The rail is hidden below md (the list still reads in order).
- **Diff: then ↔ now:** a toggle button (`aria-pressed`) above the log. When on, a comparison of `skillsThen` and `skillsNow`: two columns at md+ ("Then" / "Now", each an `h3` and a list), stacked below md. Lines only in Now are marked with "+" and sr-only "added"; lines only in Then with "−" and sr-only "removed"; shared lines are plain. A one-line summary sits above ("12 added, 2 removed").
- **Below the log:** certifications, then "How I work" (the five-step sequence), then the toolbox, then the CV link.

### Lenses (`/work`)

- **Lens switch:** a native radio group (`fieldset` + `legend` "Lens", five `input type="radio"` styled as a segmented control: Overview, Design, Code, Systems, Security; 44px, radius sm outer corners, border-strong). Arrow keys move between options (native). Overview is the default and is the project row as designed. A filled square marks the selected segment (not color alone).
- **Filters** stay as designed and are a separate control below the lens switch. One polite live region announces both: "Showing 3 of 5 projects tagged Security, Systems lens."
- **Per-row lens content** replaces the row's frame area (columns 1–5 at lg; above the text below md):
  - Design: the main screen or wireframe image (16:10, alt text; placeholder frame until real).
  - Code: one short code panel (≤ 8 lines) or, if there is no snippet, the stack as a list.
  - Systems: a mini architecture diagram (the content diagram style, vertical layout, title + text version).
  - Security: "Threat model" (one line) and "Main protection" (one line, shield icon, amber accent), as a definition list.
  - Missing: "Not part of this project" in small text-muted, keeping the frame's height so the list doesn't jump.
- **Transition:** each row's lens area is its own `<ViewTransition>`; switching lens runs in a transition typed `lens`, so the areas crossfade (old out 150ms, new in 200ms from 80ms, ease-out; total ≤ 300ms) and rows that change height morph. The accent (`--accent`) shifts to the lens's theme over the same 300ms. Reduced motion: instant swap.
- **URL:** the lens is mirrored to `?lens=design|code|systems|security` with `router.replace` (no history entry per click). The page is still prerendered: the server renders Overview; the client reads the parameter on hydration and applies it (lens controls are hidden without JavaScript, so a no-JS visitor sees Overview).
- **Into the case study:** a row's link carries the lens (`/work/<slug>?lens=security`). The row still morphs into the case study header; when the morph finishes, the page scrolls to the matching section (Design → Design decisions, Code → How it's built, Systems → System architecture, Security → Security; smooth, or instant under reduced motion) and focus goes to that section's `h2` instead of the `h1`.

### The handshake: contact form (`/contact`)

Layout at lg: the form in columns 1–6, the key card in columns 7–8 plus the Inspect margin is untouched. Below lg: key card first (so the email is visible without scrolling past a form), then the form.

- **Step indicator:** `<ol aria-label="Form steps">` with three items, each "1 ClientHello: Who are you", "2 Negotiate: What's this about", "3 Key exchange: Your message". The protocol word is small text-muted; the plain words carry the meaning. Current step: `aria-current="step"`, accent square filled; done steps get a check icon and sr-only "completed".
- **Steps** (one `<form method="post" action="/api/contact">`; each step is a `fieldset` with a `legend`):
  1. Name (`autocomplete="name"`, required, ≤ 100 characters), Email (`type="email"`, `autocomplete="email"`, required, ≤ 254).
  2. Topic: four large radio cards (full-width rows, 56px, border-strong, radius sm; selected = 2px accent border + filled square + "Selected" sr-only): Job opportunity / Freelance project / Collaboration / Just saying hi.
  3. Message: textarea, required, 20–5000 characters, with a live character count (polite, announced only near the limit).
- **Navigation:** "Back" (secondary) and "Next: Negotiate" / "Next: Key exchange" / "Send message" (primary: surface text color on bg, per Buttons). Back keeps every value. Next validates the current step only.
- **Errors:** under the field, small text in the text color with an error icon; the field gets a 2px border-strong outline. Never red alone. The message says how to fix it ("Enter an email address like name@example.com"). Linked via `aria-describedby`; `aria-invalid="true"`; focus moves to the first invalid field.
- **Honeypot:** one extra text field ("Leave this field empty") positioned off-screen, `tabindex="-1"`, `autocomplete="off"`, inside an `aria-hidden` wrapper. Filled → the server answers 200 as if sent and discards it.
- **Without JavaScript:** all three fieldsets show as one normal form (no step indicator, no Back/Next), posting to `/api/contact`; the route answers with a 303 redirect to `/contact/sent` or `/contact/error` (both static, `noindex`, with the email address on the error page).
- **Success:** the form is replaced by a status panel (`role="status"`) with a small handshake diagram (client ↔ server, three arrows drawn in order: SYN-like "Hello", "Agreed", "Key exchanged", 150ms each, ease-plot) and the text "Connection established. Message received. I'll reply within 48 hours." Focus moves to the panel heading. Reduced motion: the diagram is static.
- **Not configured** (no `RESEND_API_KEY` / `CONTACT_TO_EMAIL`): the server answers 503 `not_configured` and the form shows "The contact form isn't connected yet. Email me at <address>." with the address as a link. Other failures show a generic message plus the email address.
- **Key card:** surface-1, 1px border-strong, radius md: the email as plain selectable text, PGP fingerprint in grouped 4-character blocks (tabular), then GitHub, LinkedIn, TryHackMe, HackTheBox. Each row has a copy button ("Copy email address", "Copy PGP fingerprint", "Copy GitHub URL"...) that announces "Copied" in a polite live region.

**`/api/contact` (the only server code).** POST only; accepts JSON or form-encoded. zod schema with trimmed, length-limited fields and a fixed topic enum. Honeypot check. Rate limit: 5 requests per IP per 10 minutes, kept in memory (best effort: it resets per server instance; a shared store such as Upstash is the upgrade if abuse appears). Sends with a server-side `fetch` to the Resend API using `RESEND_API_KEY`, to `CONTACT_TO_EMAIL`, with the visitor's email as `reply_to` and the message as plain text only. Responses are JSON with generic messages (`{ ok: true }`, `{ error: "invalid", fields: [...] }`, `{ error: "rate_limited" }`, `{ error: "not_configured" }`, `{ error: "failed" }`); field errors name the field and the rule, never echo input. Logs record outcome and status only, never names, emails or bodies. CSP: unchanged (`connect-src 'self'` already covers `/api/contact`; Resend is called from the server).

### The vault: Break in to get my CV

The Security theme's signature on `/security`, above the write-ups. Theme: The vault (amber accent, severity red for Critical / High only, redaction-bar motif and classification line).

**Recruiter path first.** "Skip the challenge, download CV (PDF)" is a plain underlined link (with a document icon and "PDF, <size>") placed directly under the `/security` `h1`, before the target brief, so nobody has to read the game to get the file. The same link is in the footer on every page and on `/about`. The write-ups below the challenge never depend on it.

**Target brief.** A surface-1 panel, 1px border-strong, radius md, styled as a declassified document: the classification line at the top ("Classification: Public · Simulated engagement"), then a definition list (Objective: retrieve the file cv.pdf from this site · Authorization: authorized engagement · Environment: simulated, client-side, nothing real is attacked) in body type, then "Start engagement" (secondary button, 44px). Sentence case throughout; the document feel comes from the layout and the classification line, not from all-caps or a typewriter font.

**Mission tracker.** A fixed, collapsible panel (`aside aria-label="Mission tracker"`) that appears once the engagement starts and persists across pages:
- Position: bottom-left, 16px inset, above the Inspect legend when that is open (`bottom: calc(var(--legend-h) + 16px)`). Level 3 surface (surface-3, border-strong, overlay shadow), radius md, width 320px (full width minus 32px below md).
- Collapsed: 48px bar, "Mission · Stage 3 of 6: Traffic" plus an expand button (`aria-expanded`).
- Expanded: an ordered list of the six stages. Each stage shows its state as icon + word: **Locked** (lock icon, text-muted), **Current** (filled square, accent, "Current"), **Done** (check, text-secondary, "Done"). The current stage shows its one-line objective and the hint control.
- Hints: one button, "Show hint 1 of 3" → "Show hint 2 of 3" → "Show answer". Revealed hints stay listed under the stage. Hints used are counted.
- Timer: off by default. A "Show timer" toggle (`aria-pressed`) in the tracker starts it; it shows elapsed time as `mm:ss` (tabular) and stops at the end. It never runs unless turned on, and it is never announced every second (only "Timer on" / "Timer off").
- Updates (stage done, next stage unlocked) are announced in a polite live region: "Stage 2 done. Stage 3 unlocked: Traffic."
- Progress (current stage, hints used, timer on/off and start time) is kept in `sessionStorage` only.

**Stages and their in-site alternatives.** No step requires desktop DevTools:

| Stage | Technique | DevTools path | In-site path |
|---|---|---|---|
| 1 Recon | Source review | View Source / Elements: an HTML comment on `/security` | Inspect → Code layer shows the comment as a code panel while stage 1 is current |
| 2 Enumeration | robots.txt enumeration | Open `/robots.txt` | The comment links the path; `/robots.txt` is a normal link the player can open |
| 3 Traffic | Header inspection | Network panel on `/ops-7f3a` | Inspect → System layer lists every response header of the current page, including `X-Ops-Hint` |
| 4 Decode | Base64 decoding | Any decoder | Terminal `decode <base64>` |
| 5 Access | Credential reuse | — | Terminal `ssh boaz@ops` with the decoded passphrase |
| 6 Privilege escalation | sudo misconfiguration | — | Terminal `sudo -l`, then the allowed command |

**`/ops-7f3a`.** A static, `noindex` page in The vault theme: a fake "Internal ops console" sign-in card (username, passphrase, "Sign in"). The form has no `action` and its button explains in a polite message that this is a simulated login and points the player to the terminal ("This console is offline. Operators connect over SSH."). Nothing is submitted anywhere. The response header `X-Ops-Hint` is set only on this route in `next.config`.

**Terminal sequence and completion.** "ACCESS GRANTED" is a static block in the terminal (amber border, check icon), followed by output lines appearing one at a time at 80ms intervals; under reduced motion all lines appear at once. Nothing flashes. Then:
- the CV opens in a new tab (`/files/cv.pdf`), with a visible "Download CV (PDF)" link in the output as the reliable path;
- a **completion card** on `/security` (and in the terminal output): time (if the timer was on), hints used, "What you just did" (six lines: technique and how I defend against it), and "Contact me" (primary button to `/contact`).

**Terminal additions** (the terminal itself is specified under Components): commands `help`, `ls`, `cat`, `cd`, `pwd`, `whoami`, `decode`, `ssh`, `sudo -l`, `sudo <cmd>`, `hint`, `progress`, `clear`, `exit`, `skip`, plus the site commands. Tab completes commands and file names; Up / Down walk history. Unknown or wrong commands answer in character and point to the next step ("Permission denied. Maybe check what you are allowed to run: sudo -l"). The passphrase prompt shows no characters and is a labeled input ("SSH passphrase").

**Hygiene.** No real secrets: the passphrase is a game string in the client bundle by design. All output is rendered as React text nodes (no `innerHTML`, no `eval`, no `new Function`). The CSP does not change. Challenge pages (`/ops-7f3a`) are `noindex`; `robots.txt` disallows only the challenge path. `/.well-known/security.txt` is valid RFC 9116 (Contact, Expires, Preferred-Languages, Canonical) with one comment line as the easter egg. The public `cv.pdf` is checked for and stripped of author, producer, creator tool and XMP edit history before it ships.

### The network: Descend the stack

The Systems theme's signature is a descent through six levels of the stack, each its own route. Theme: The network (steel accent, signal green for "Up" only, topology motif in the outer margins).

**Routes and order.** `/systems` (overview, depth 0) → `internet` (1) → `edge` (2) → `network` (3) → `host` (4) → `containers` (5) → `os` (6), all under `/systems/`. In nav order they all count as Systems; between themselves, depth decides the transition.

**Level page layout (lg and up).** Level pages use a wide layout and are the one place the Inspect margin is given up:
- Columns 1–2: the **depth gauge**, sticky under the header (`top: header + 24px`). A 1px vertical rule in border-strong with 6 square ticks (10px), each a link with its level name (small type) beside it; the current tick is filled with the accent and marked with a "You are here" text label for screen readers via `aria-current="page"`. The overview (depth 0) is a link above the ticks ("Overview").
- Columns 3–8: the level `h1` (page-title), a one-line description, the **diagram**, then "Work at this level", then the three info blocks.
- Columns 9–12: the **node details panel**, sticky beside the diagram.
- With Inspect on, labels on level pages go to the legend (as below lg), since columns 9–12 hold the details panel.

**Below lg.** The gauge becomes a compact bar directly under the header (48px, sticky): "Level 3 of 6 · Network" plus six 24px tick links in a row. The diagram becomes a vertical stack of nodes (one column of full-width node buttons with their links drawn as short vertical connectors). The details panel follows the diagram in the flow.

**Diagram.** Inline SVG plus real `<button>` elements positioned over the nodes (the SVG draws links and frames; the buttons are the nodes, so focus, names and states are native).
- Node button: surface-1, 1px border-strong, radius xs, 44px min height, label (subtitle) and role (small, text-secondary). States, each with text and an icon:
  - **Selected:** `aria-pressed="true"`, accent border 2px, filled square icon.
  - **Way down:** accent dashed border, chevron-down icon, visible label "Go deeper: <next level>". Selecting it navigates (it is a link, not a toggle).
  - **Healthy:** check icon and the word "Up" in signal green.
  - **Has related work:** a briefcase icon and the text "Has related work" (small).
- Hover or focus on a node highlights its links (accent, 1.5px → 2px) and dims unrelated links to border color.
- Selecting a node fills the **details panel**: `<section role="region" aria-labelledby>` titled with the node name; role, specs, ports, config notes, and related work items. Focus moves to the panel heading (`tabindex="-1"`); Escape returns focus to the node button.
- **Text alternative:** under each diagram, `<details>` "Text version of the <level> diagram": every node with the same details as the panel, then every connection ("Router to Firewall: trunk, VLAN 10/20").

**Work at this level.** Between the diagram and the info blocks, `h2` "Work at this level".
- **Featured** (`primaryLevel` is this level): a large row (title in title type, one-line outcome, tags, period). A project links to its case study with the project morph (shared names as in Project row). An experience entry is a native `<details>`: summary shows role, organisation and period; open shows the summary, "What I did" (list) and tools.
- **Also at this level:** a compact `<ul>`, each item with an `h3` (title), period and tags. Projects link; experience items are `<details>`.
- No work at a level: the whole section is omitted (no empty state), and `next build` logs `[stack] No work at level: <level>`.

**Info blocks.** Three blocks in a row at md+ (stacked below): "What lives here", "How I secure it" (shield icon, amber accent border on the block, "Security" in text), "Tools I use" (plain list).

**Bottom controls.** "Go up: <parent>" and "Go deeper: <next>" as two buttons (link styled as secondary buttons, 44px) at the end of each level. The OS level ends with "Back to surface" (to `/systems`, zoom-out) and the link "See how I attack and defend this stack" (to `/security`).

**Keyboard shortcuts.** ArrowDown / PageDown go deeper along the way-down node; ArrowUp / PageUp go up a level. They are active only while focus is inside the stack UI (the gauge, the diagram, the details panel, the bottom controls) and never in an input, textarea, select or contenteditable. Everywhere else the keys keep their normal job of scrolling the page, so keyboard users can still read long levels. A hint line under the diagram says so ("With focus in the diagram: ↓ deeper, ↑ up"), and the accessibility page documents it. Using these keys this way is an accessibility decision: hijacking arrow and Page keys page-wide would take scrolling away from keyboard users.

**Case study stack strip.** Under the case study meta: `nav aria-label="Stack depth"` with the levels the project touches as small linked ticks (square + level name), in depth order. Following one uses the zoom-in transition.

**Trace a request** (on `/systems/internet`). A toggle button (`aria-pressed`) "Trace a request" reveals a vertical schematic of all six levels on this page (no route changes). A 6px square packet steps from the browser down through each level, pausing at each with one line (DNS lookup, TLS handshake, firewall check, reverse proxy, container, process), and "I worked here: <title>" with a link when that level has a featured item.
- Advances every 3.5s. Visible controls: Pause / Play, Previous step, Next step (44px). Pauses on hover and while focus is inside the trace. The current step is announced in a polite live region ("Step 3 of 6: firewall check").
- The packet moves with `transform: translateY` (240ms ease-out per step).
- Reduced motion: no auto-advance and no packet movement; an ordered list of the six steps with the current one marked, and Previous / Next.

**Zoom transition** (types `zoom-in`, `zoom-out`, `zoom-jump`)

| Element | Role | Starts | Duration | Motion | Relationship |
|---|---|---|---|---|---|
| Way-down node → next level's diagram frame (`level-frame-<next>`) | Lead | 0ms | 450ms | Grows from the node's box to the frame's box, ease-out; old snapshot fades out over 180ms, new fades in from 120ms to 360ms | — |
| Old level content | Support | 0ms | 300ms | `scale(1 → 0.96)`, opacity 1 → 0: falls away behind | Together |
| New level content | Support | 150ms | 300ms | Opacity 0 → 1 | Overlaps: arrives as the frame lands |
| Gauge current tick | Support | 0ms | 300ms | The highlighted tick slides to the new level (`view-transition-name: depth-tick`) | Together |
| Header, gauge rule | Static | — | — | — | — |

- `zoom-out` is the exact reverse: the current diagram frame shrinks back into its node on the parent level, the old content fades, the parent rises from `scale(1.04 → 1)`.
- `zoom-jump` (two or more levels, via the gauge or a case study strip): no shared element; old content `scale(1 → 1.06)` and fades over 200ms (deeper) or `scale(1 → 0.94)` (up), new content from the opposite scale to 1 over 300ms. One continuous move, never level by level.
- Reduced motion: an instant swap with a 120ms crossfade only.

### Theme contrast table

WCAG 2.x contrast of each accent against every surface. Requirements: text 4.5:1, UI and graphics 3:1. Every accent passes as text on every surface in both themes.

| Accent | Dark: bg / s1 / s2 / s3 | Min | Light: bg / s1 / s2 / s3 | Min |
|---|---|---|---|---|
| Neutral (The Sheet) | 15.33 / 14.34 / 13.26 / 11.97 | 11.97 | 16.45 / 17.82 / 15.45 / 14.23 | 14.23 |
| Blueprint blue (Drafting table, Handshake) | 8.07 / 7.55 / 6.98 / 6.31 | 6.31 | 5.89 / 6.38 / 5.53 / 5.09 | 5.09 |
| Cyan-teal (The editor) | 8.93 / 8.36 / 7.72 / 6.98 | 6.98 | 5.48 / 5.94 / 5.15 / 4.74 | 4.74 |
| Steel (The network) | 8.47 / 7.93 / 7.33 / 6.62 | 6.62 | 6.04 / 6.55 / 5.68 / 5.23 | 5.23 |
| Signal green (Systems, "Up" only) | 9.07 / 8.49 / 7.85 / 7.09 | 7.09 | 6.01 / 6.52 / 5.65 / 5.20 | 5.20 |
| Amber (The vault) | 9.25 / 8.65 / 8.00 / 7.22 | 7.22 | 5.84 / 6.33 / 5.49 / 5.05 | 5.05 |
| Severity red (Security, Critical / High only) | 7.51 / 7.03 / 6.49 / 5.86 | 5.86 | 5.91 / 6.40 / 5.55 / 5.11 | 5.11 |
| Warm (The workbench) | 13.61 / 12.74 / 11.78 / 10.63 | 10.63 | 7.08 / 7.67 / 6.65 / 6.12 | 6.12 |

Light-mode signal green was first drafted as `#1f7a4c`, which fails on surface-3 (4.25:1). It is `#196b42` instead.

### Section-theme don'ts
- No theme may break the global Do's and Don'ts: no neon-green hacker look (signal green is soft, scoped to "Up", and never a background or glow), no glow, no gradients, no stock photos, no shader or animated backgrounds.
- No theme changes fonts, grid, header, spacing, radii, surfaces or text colors.
- No motif behind body text at readable strength; no motif under `prefers-contrast: more` or forced colors.
- No color-only meaning: severity, "Up", redaction and filled steps always have text or an icon too.

## Inspect overlay spec

General rules for all three layers:
- **Persistence:** which layers are on survives navigation (the state lives in the root layout) and reloads within the tab (`sessionStorage`). A layer restored after navigation is drawn in its final state, without the draw-in.
- **The grid is the sheet:** the Design layer's 12 columns are a fixed, viewport-sized layer with `view-transition-name: film-grid` and no transition animation, so the lines stay exactly in place while pages slide or morph underneath. Outlines, dimensions and plates belong to the page: they are cleared before a navigation is captured and redrawn on the new page.
- The film is one `<div aria-hidden="true">` positioned over `main`, `pointer-events: none`, rendered only while at least one layer is on. When off it doesn't exist in the DOM, so screen readers hear nothing.
- Values come from `getComputedStyle` on the live elements, mapped back to token names through a build-time token map, for example `space-8 · 32px`, `headline · 36/41 · 600`. If a computed value has no matching token, the plate says so ("32px · no token") rather than hiding the mismatch.
- The film redraws on resize and theme change (debounced 150ms) and covers the full page height. Elements outside the viewport are drawn in their final state.
- Everything the film shows is also listed in the **Inspect legend** (below).

### Design layer (blueprint blue, solid lines)
- **Grid:** the 12 real columns as design-tint bands across `main`'s full height. Column edges are 1px dashed (2 4) design-accent, so they pass the 3:1 graphics requirement without a solid fill. At the top of the viewport, a plate reads `12 col · gutter 24px · margin 48px` with the live values.
- **Component outlines:** 1px solid design-accent rectangles on component roots (header, nav, hero, section, project row, panel, footer). Each outline's top-left corner has a 5px square node. A leader runs to a plate with the component's role and size: `ProjectRow · 760×184`.
- **Spacing:** dimension lines drawn in the actual gaps (section padding, heading margins, row gaps): 1px design-accent with 7px 45° slash ticks at both ends. The plate sits inside the gap when the gap is ≥ 24px. Smaller gaps get a leader out to the margin columns.
- **Type:** each heading level and the body paragraph gets one plate in the margin, connected by an elbow leader to the text's baseline start: `h2 · headline · 36/41 · 600 · −0.02em`.
- **Plates:** design-accent fill, on-accent text, mono-annotation, `2px 6px`, radius none, `min-height` (not height) so text spacing can expand them.

### Code layer (blueprint blue, dashed lines)
- **Outlines:** 1px dashed (4 2) design-accent on the same component roots. Dashed versus solid tells it apart from the Design layer when both are on.
- **Name tags:** at each outline's top-left, outside the box: a code-name-tag plate (surface-3 fill, 1px design-accent border, design-accent text): `<ProjectRow>`, `<InspectControl>`.
- **Snippets:** one code panel per section, placed in the margin (columns 9–12) next to the section's `h2`. It shows the real source of that section's main component. At most one snippet per section, so the margin never fills up.

### System layer (amber for security, neutral for infrastructure)
- The System layer doesn't attach to page elements. It opens a **System sheet**: a level-3 non-modal panel docked to the right (columns 8–12 at lg, a bottom sheet below lg), `<aside aria-labelledby>` "How this site is served".
- **Contents:**
  1. **Request flow:** the content diagram style showing visitor → DNS → CDN edge (TLS 1.3 termination: security) → static host → response. Security steps are amber with a shield.
  2. **Response headers:** read live from `fetch(location.href, { method: "HEAD" })`. It's a definition list of header name (mono-annotation, text) and value (mono-annotation, text-secondary, wrapping), with a status per header: "Present" with a check icon, or "Missing" with a cross icon and amber text. Headers covered: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, frame protection.
  3. **TLS/CDN facts:** protocol, CDN provider and cache status. They are read from response headers where available. Unknown values show "Not exposed to the browser", never a guess.
- In local development the sheet says "Development server: production headers differ" with a link to the header config, so it never presents development values as production.

### Mobile and narrow widths (< 1024px, including 200% zoom)
- There are no margin columns, so labels never sit on the canvas. The film draws only the lines, outlines and dashed grid edges, plus **markers**: 20×20 square design-accent plates with an index number, placed in the spacing above an outline's top-left corner. They never overlap text.
- All labels, values and snippets move into the **Inspect legend**, docked at the bottom. It's a level-3 sheet, 48px tall when collapsed ("Inspect values · 14 items", with an expand button), up to 45svh when expanded, scrolling internally. Entries are numbered to match the markers.
- While the legend is open, `main` gets bottom padding equal to its height, so no content becomes unreachable.

### Inspect legend (all widths)
- It's the accessible, readable form of the film: an `<aside aria-label="Inspect values">` with one `h2` per active layer and a list (`<ol>`) of entries: element, property, token and value. Code entries contain their code panel.
- It is always available. At lg it opens from "Show values as list"; below lg it is the default label surface.

## Motion

A motion system with **two parts**: (1) connected page transitions, which make the site one continuous sheet, and (2) the film drawing itself in. Everything else stays still. Nothing animates because the page scrolled.

### Page transitions

Built on the View Transitions API through React's `<ViewTransition>` (stable in Next.js 16.4 / React 19.3, so no experimental flag exists or is needed). `<Link transitionTypes>` tags each navigation with its type. Rules:
- 250–450ms, `ease-out`, transform and opacity only on page content. The browser's shared-element group animation also interpolates the snapshot box size; that happens in the transition overlay, not in the document, so nothing re-lays out.
- Never block clicks: `::view-transition { pointer-events: none }`, so input goes to the new page underneath. A new navigation skips the running transition.
- Root (`::view-transition-old/new(root)`) has no animation. The header (`site-header`) and the fixed Design-layer grid (`film-grid`) have no animation either, so they stay put.
- Browsers without View Transitions navigate instantly. Nothing waits for an animation to finish.

The navigation type decides the animation:

| Type | When | Result |
|---|---|---|
| `nav-forward` | Target is to the right in nav order (Home < Work < Security < Systems < About < Contact < Accessibility) | Content slides left |
| `nav-back` | Target is to the left in nav order | Content slides right |
| `morph` | A project row, a featured project, or Previous / Next opens a case study | Row morphs into the header |
| `morph-back` | A case study goes back to the list or Home | Header morphs back into the row |
| `zoom-in` / `zoom-out` / `zoom-jump` | Moving between Systems stack levels, or from a case study's stack strip to a level | See Descend the stack |

Types are attached with `<Link transitionTypes>` (Next 16.4 passes them to `React.addTransitionType`). Every navigation also carries `to-<theme>` so the destination theme can choose the enter animation; React joins the classes of all matching types. Back and Forward (popstate) carry no types, so a popstate listener computes the same type from the previous and next URL and sets `html[data-nav]` and `html[data-enter]` before React captures the transition; the CSS covers both selectors.

Back and Forward buttons get their type from the same nav-order comparison, so the motion always matches the direction of travel.

**Section → section** (`nav-forward`; `nav-back` mirrors the x values)

| Element | Role | Starts | Duration | Motion | Relationship |
|---|---|---|---|---|---|
| New page content | Lead | 0ms | 360ms | `translateX(48px → 0)`, opacity 0 → 1 | — |
| Old page content | Support | 0ms | 240ms | `translateX(0 → −48px)`, opacity 1 → 0 | Together with new (crossfade; the exit is shorter) |
| Nav indicator | Support | 0ms | 300ms | Slides and resizes to the new link | Together |
| Header, Inspect control, grid | Static | — | — | — | Stay fixed |

48px is two gutters: enough to read as a sideways step along the sheet, small enough to stay calm.

**Project → case study** (`morph`)

| Element | Role | Starts | Duration | Motion | Relationship |
|---|---|---|---|---|---|
| Row → case header (`project-<slug>`) | Lead | 0ms | 420ms | Moves and grows from the row's box to the header's box; old snapshot fades out over the first 200ms, new fades in from 80ms to 320ms | — |
| Number, title, tags | Lead (parts) | 0ms | 420ms | Each morphs to its place in the header | Together with the row |
| Rest of the list (old page) | Decoration | 0ms | 250ms | Opacity 1 → 0, `translateY(0 → 24px)`: falls away | Together |
| Rest of the case study (new page) | Support | 160ms | 280ms | Opacity 0 → 1 | Overlaps: starts as the header lands |

`morph-back` is the exact reverse: the header shrinks back into its row, the case study fades out over 250ms, and the list rises back in (`translateY(24px → 0)`, opacity 0 → 1, 280ms from 160ms).

**What doesn't move:** the header and Inspect control (persistent chrome); the grid lines (they are the sheet); headings inside the new page (one entrance per container: the page carries them); the footer (part of the page snapshot).

### Tokens

| Token | Value | Use |
|---|---|---|
| `dur-instant` | 0ms | Theme swap, filter results, skip link, everything under reduced motion |
| `dur-fast` | 120ms | Hover/press color, underline draw, plate reveal |
| `dur-base` | 200ms | Chevron rotate, menu panel, terminal open |
| `dur-slow` | 320ms | System sheet reveal |
| `dur-draw` | 480ms | One outline trace in the film |
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances and state changes |
| `ease-plot` | `cubic-bezier(0.45, 0, 0.15, 1)` | Line drawing (a pen that starts deliberately and settles) |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exits |

### The draw-in (signature)
Total budget: ≤ 1000ms from press to fully drawn. Only elements in the viewport animate; everything else appears already drawn.

**Design layer:**
1. **0ms, grid.** Column edges extend downward from the top of the viewport (`scaleY 0 → 1`, origin top, 400ms ease-plot), staggered 16ms per column from 1 to 12, a left-to-right sweep. Bands fade in under them (0 → 1, 200ms).
2. **120ms, outlines.** Each outline traces from its top-left node clockwise (SVG `stroke-dashoffset`, 480ms ease-plot), staggered 40ms in reading order. At most 8 stagger steps; the rest start with the 8th.
3. **360ms, dimensions.** Each dimension line grows from its first tick to its second (240ms ease-plot); the second tick appears when the line arrives.
4. **On arrival, plates.** Each plate opens left to right as its line finishes (`clip-path: inset(0 100% 0 0) → inset(0)`, 120ms ease-out). Text appears whole: no typewriter effect, no scrambled characters.

**Code layer:** dashed outlines trace (360ms ease-plot, 40ms stagger). Name tags clip-reveal from their corner (120ms). Margin snippets reveal top to bottom (`clip-path`, 280ms ease-out), the code fully visible at once inside the reveal. Total ≤ 700ms.

**System layer:** the sheet reveals from the Inspect control's side (`clip-path`, 320ms ease-out). Diagram nodes appear in request order (opacity 120ms each, 90ms apart), each edge drawing toward the next node (200ms ease-plot). When the path is complete, one 6px square **packet** travels it once from visitor to host and back (1200ms ease-in-out), then disappears. It plays once per open; there's no loop and no blinking. The header list appears with the sheet, not row by row.

**Turning a layer off:** the film fades out (opacity 1 → 0, 140ms ease-in). It is never reverse-drawn.
**Switching layers:** the outgoing layer clears while the incoming one draws. They don't wait for each other.

### Everything else
- **Hover/press:** color, fill and border changes at 120ms ease-out. Underlines draw left to right (`background-size` on a 1px underline, 120ms). Buttons darken one surface step on press. No lift, scale, tilt or glow.
- **Expandable panel:** the chevron rotates 200ms. The body opens with `interpolate-size: allow-keywords` height animation at 200ms where supported, and instantly elsewhere.
- **Menu panel / terminal:** opacity 0 → 1 with `translateY(8px → 0)`, 200ms ease-out. Closing is opacity only, 140ms ease-in.
- **Theme change, filters, skip link:** instant.
- **Nothing flashes.** No element changes luminance more than once per second, so the 3-per-second flash threshold is never approached.

### Reduced motion (`prefers-reduced-motion: reduce`)
Every animation has a reduced form, and every reduced form is the instant end state. Nothing stays hidden.

| Animation | Reduced version |
|---|---|
| Design draw-in (grid, outlines, dimensions, plates) | Film appears fully drawn at once |
| Code draw-in (dashes, tags, snippets) | Appears fully drawn at once |
| System sheet reveal and diagram build | Sheet and full diagram appear at once |
| Packet trace | Not played. A static route highlight shows the path. |
| Layer off / switch | Instant |
| Hover underline draw | Underline present at once on hover/focus |
| Hover color/fill/border | Instant |
| Chevron rotate / panel height | Instant |
| Menu panel / terminal open and close | Instant |
| Smooth scrolling to anchors | `scroll-behavior: auto` |
| Page slide (section → section) | Instant page swap |
| Project morph and its reverse | Instant page swap |
| Nav indicator slide | Moves instantly |
| Theme crossfade | Instant |
| Stack zoom in / out / jump | Instant swap with a 120ms crossfade |
| Trace a request | No auto-advance, no packet movement: a stepped list with Previous / Next |
| Systems packet on the diagram | Removed |
| Challenge "ACCESS GRANTED" sequence | All lines at once, static message |

## Accessibility

Target: WCAG 2.2 AA, which also satisfies IS 5568. Where accessibility and appearance conflict, accessibility wins and this file is changed to match.

### Focus
- **Ring:** `outline: 2px solid var(--focus-ring); outline-offset: 2px` on `:focus-visible` for every interactive element. Dark `#9cc4fa` (≥8.04:1 on all surfaces) / light `#1c5ac2` (≥5.09:1). The ring is never removed or replaced by color change alone. Inside the dialog and sheets, the offset gap is that surface's color.
- **On accent fills:** the skip link is the only focusable element with a blue fill, so its ring uses the `text` color instead (15.33:1 dark / 16.45:1 light against the page behind it) so it doesn't merge with the fill. Inspect plates are never focusable.
- **Never hidden:** `scroll-padding-top` keeps focused elements clear of the sticky header (WCAG 2.4.11). Sheets and the legend pad `main` so they never cover focused content.
- **Forced colors:** the ring uses `Highlight`.

### Targets
- Minimum 24×24px for every target (WCAG 2.5.8). The design standard is 44×44px for nav links, toggles, filters, Inspect segments, the theme toggle, terminal controls, copy buttons and summary rows (56px tall).
- Inline links in running text are exempt by spec but sit on a 1.6 line height with a 6px underline offset.

### Announcements by component

| Component | Element / role | Accessible name | State / announcement |
|---|---|---|---|
| Skip link | `a` | "Skip to main content" | Moves focus to `main` |
| Primary nav | `nav` | "Primary" | `aria-current="page"` or `"true"` on the current link |
| Menu button (< md) | `button` | "Menu" | `aria-expanded`, `aria-controls` the panel |
| Theme toggle | `button` | "Dark theme" | `aria-pressed` true = dark |
| Inspect group | `div role="group"` | "Inspect" (`aria-labelledby` visible label) | n/a |
| Inspect segment | `button` | "Design layer" / "Code layer" / "System layer" | `aria-pressed`. On change, the polite status region says "Design layer on, 14 values listed" |
| Show values as list | `button` | "Show Inspect values as a list" | `aria-expanded`, `aria-controls` legend |
| Inspect film | `div` | n/a | `aria-hidden="true"` (removed from DOM when off) |
| Inspect legend | `aside` | "Inspect values" | Headings per layer, `ol` of entries |
| System sheet | `aside` | "How this site is served" | Header statuses as text ("Present" / "Missing") |
| Tag filter | `div role="group"` | "Filter projects by discipline" | Each `button` has `aria-pressed`; result count in `aria-live="polite"` |
| Project row | `article` | Title link text = project name | Tags as `ul aria-label="Tags"` |
| Expandable panel | `details` / `summary` | Summary text | Native expanded/collapsed |
| Diagram | `figure` > `svg role="img"` | `<title>` + `<desc>` | Text version in `details` |
| Code panel | `figure role="region"` | `figcaption` (file path or title) | Copy button named "Copy code: <file>"; polite live region announces "Copied"; scrollable `pre` is focusable |
| Terminal | `dialog` (modal) | "Terminal" (`aria-labelledby` title) | Output `role="log" aria-live="polite"`; input labeled "Terminal command" |
| Terminal opener | `button` | "Open terminal" | Returns focus here on close |
| Shortcut toggle | `button` | "Keyboard shortcut for terminal" | `aria-pressed` |
| Copy email | `button` | "Copy email address" | "Email copied" (polite) |
| Case study pager | `nav` | "Case studies" | Links named "Previous case study: X" |

### Navigation
- After every route change, focus moves to the new page's `h1` (`tabindex="-1"`, `focus({ preventScroll: true })`), and a polite live region announces the new page title.
- New pages scroll to the top; Back and Forward restore the previous scroll position (Next.js router behaviour, kept).
- Back/Forward and direct URL loads all work. Every page is server-rendered and works with JavaScript off. Controls that need JavaScript (Inspect, theme toggle, Menu button, filters, copy buttons, terminal buttons) are hidden until JavaScript runs: the inline head script adds `class="js"` to `<html>` before first paint, so there is no layout shift.
- The skip link is the first focusable element on every page.

### Structure
- `<html lang="en">`. One `h1` per page, with no skipped heading levels. Landmarks: `header`, `nav` (labeled when more than one), `main`, `footer`; sheets as labeled `aside`.
- Each page has a unique title: "Boaz King: Designs, builds and secures digital products" (home), "*Project name*: case study · Boaz King", "Accessibility statement · Boaz King".
- Native elements first (`button`, `a`, `details`, `dialog`). ARIA is added only where native semantics don't exist (the group labels, the live regions).
- Links describe their destination. There is no "read more"; write-up links use the write-up title.

### Color is never the only signal
- Tags have an icon and a word. Pressed toggles have a filled square and `aria-pressed`. Security items carry a shield icon plus the word "Security". Header status shows a check/cross icon plus "Present"/"Missing". Diagram line meaning is solid versus dashed plus a legend. Links are underlined. Code-layer outlines are dashed versus solid in the Design layer.

### Media
- Informative images have alt text that describes what they show. Decorative images use `alt=""`. Placeholder frames carry their visible "Placeholder" text.
- Video, if any, has captions, never autoplays with sound, and has visible controls.

### Forms (the contact form; full spec under Section themes: The handshake)
- Visible `<label>` above each field. Errors appear below the field in text with an icon, are tied by `aria-describedby`, and say how to fix it ("Enter an email address like name@example.com"). The form is checked on submit, not on each keypress. No CAPTCHA puzzles. Inputs are 44px tall with a border-strong edge, radius sm and a 16px font (prevents iOS zoom).

### Named Rules
**The List Twin Rule.** Anything drawn (film annotations, diagrams, the request flow) has a readable list twin a keyboard or screen reader user can reach. A picture with no list version doesn't ship.

**The No Overlay Plugin Rule.** No accessibility overlay or widget is installed. The site is built accessible.

## Do's and Don'ts

### Do:
- **Do** use only the role tokens in this file, and for accents only the scoped `--accent` of the current section theme. Any new color is computed against every surface and added to a contrast table before use.
- **Do** keep running text in columns 1–8 at lg+, and keep the margin free for the film.
- **Do** generate every Inspect value from the live page and source. A plate that doesn't match the page is a bug.
- **Do** mark every placeholder visibly ("Placeholder: …"), with content in `content/site.ts`.
- **Do** give every drawn thing a text twin (List Twin Rule).
- **Do** theme the browser surfaces: `::selection` (design-tint at 35% with text color), caret, `accent-color`, scrollbar colors (`scrollbar-color: border-strong bg`), underline offset.

### Don't:
- **Don't** use the neon-green "hacker" look: green-on-black, matrix rain, glitch text.
- **Don't** use purple or violet anywhere, including gradients, tints or hover states.
- **Don't** add glow: no colored halos, `box-shadow` without offset, glowing borders or neon text shadows.
- **Don't** use mesh gradients, gradient text or any decorative gradient.
- **Don't** use stock photos. Use real screenshots or a hatched placeholder frame.
- **Don't** add shader, WebGL, canvas-noise or animated backgrounds.
- **Don't** use all-caps text, including eyebrow labels above headings. There are no eyebrows at all.
- **Don't** use mono outside Inspect, the legend, the terminal and code panels.
- **Don't** use emoji, in content or as icons.
- **Don't** append arrows (→, ↗, ›) to links. Only diagram edges have arrowheads.
- **Don't** convey meaning with color alone.
- **Don't** use fully rounded buttons, pills or circular icon buttons.
- **Don't** build grids of same-size icon + heading + text cards, nest cards, or put side stripes (a colored bar down one edge) on any box.
- **Don't** fade sections up on scroll, add parallax or scroll-jack. The draw-in is the only authored motion.
- **Don't** number sections. The exceptions are How I work (research → design → build → secure → test) and project numbers (the order Previous / Next walks), where the number carries information.
- **Don't** use logo walls in the Toolbox. Tools are grouped text lists.
- **Don't** let the brand show through Linear's or Vercel's clothes: no lavender accent, black pill CTAs, Geist, mesh hero or near-black `#010102` ground.
