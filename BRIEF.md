# Brief

Source of truth for this project. If PRODUCT.md, DESIGN.md or any other file conflicts with this brief, this brief wins.

## Project

Personal portfolio for Boaz King, who designs, builds and secures digital products.

- **Skills:** UX/UI design, frontend/full-stack development, systems/infrastructure, cybersecurity.
- **Audience:** recruiters, hiring managers and clients in design, engineering and security.

## Core concept

Calm, minimal and dark at first glance; deep and technical underneath. A single **Inspect** control reveals three overlay layers on top of the real page:

1. **Design:** 12-column grid, spacing values, type sizes, component outlines (redline style).
2. **Code:** component names and short real code snippets for each section.
3. **System:** live diagram of how the site is hosted and protected: request flow, CDN, TLS, security headers (CSP, HSTS, etc.).

Every value shown in Inspect must be the real value used on the page, not decoration.

## Look

- Dark mode by default, with a light mode toggle. No flash of the wrong theme on load. Remember the choice.
- Background: deep slate, not pure black. Text: soft off-white.
- Accents: each section has its own theme and accent (see Section themes). The Inspect layers always use blueprint blue for design/code annotations and amber for security notes.
- Do NOT use the neon-green hacker look, purple gradients, glowing cards, stock photos, or shader/WebGL background effects.
- Type: one clean sans for all content, one monospace used ONLY inside the Inspect layers, the terminal and code panels.
- Code panels: case studies may include short, real code panels. Each is a labeled region, scrolls horizontally only inside the panel, and has a copy button with an accessible name and a "Copied" live announcement.
- Left-aligned, 12-column grid, generous whitespace.
- A motion system with two parts: connected page transitions and the Inspect layers drawing themselves in. Everything else stays still. No fade-up on every section, no scroll fade-ins.

## Site map

Real routes, not one long page. Each page has its own `<title>`, one `<h1>` and its own metadata.

| Route | Content |
|---|---|
| `/` | Home: hero (name, one line "I design, build and secure digital products", Inspect control), short intro, 3 featured projects, links into each section |
| `/work` | All projects (4–6), tagged Design / Development / Systems / Security, with filters |
| `/work/[slug]` | Case study, one per project in `content/site.ts`: problem → design decisions → how it's built → system architecture diagram → security (threat model, protections, testing) → outcome with numbers. Ends with Previous / Next project. |
| `/security` | Security work: CTFs, lab write-ups, research, certs. Expandable summaries. |
| `/systems` | Systems & infrastructure: homelab, servers, networking, Linux, cloud, Docker, shown as clean diagrams |
| `/about` | About (short bio, photo, certifications, what I'm looking for), How I work (research → design → build → secure → test, a real sequence, so numbering is OK here), Toolbox (grouped by area, no logo walls) |
| `/contact` | Email as plain text, GitHub, LinkedIn, TryHackMe/HackTheBox, optional PGP key |
| `/accessibility` | Accessibility statement, linked from the footer on every page |

## Section themes

Each subject feels like its own world while the site stays one system: same fonts, same 12-column grid, same header, same spacing scale. Each theme changes only its accent color, a subtle background motif, one signature interactive element, and the flavor of its page transition.

- **Home, "The Sheet" (neutral):** the base slate theme. Light pulls from each section's accent appear in the links to those sections, as a preview of where each one leads.
- **Design work, "Drafting table"** (projects tagged Design; `/work` filtered to Design): blueprint blue. Motif: very faint fine grid like cutting-mat graph paper. Signature: hovering or focusing a project shows its measurement redlines (the Design layer scoped to that item). Transition: content drops into place like a sheet aligning to registration marks.
- **Development, "The editor"** (projects tagged Development): a cool cyan-teal, distinct from blueprint blue. Motif: faint line numbers along the left margin of long pages. Signature: case study code panels show the real component, and a "view source" toggle reveals the JSX behind the section being read. Transition: content comes in line by line (fast, ≤400ms total).
- **Systems, "The network"** (`/systems`): steel blue-grey, with a soft signal green only for healthy/up states, never as a general accent (no hacker look). Motif: a faint static topology map. Signature: an interactive architecture diagram; hover/focus a node to highlight its connections and show specs (OS, role, ports). Optional slow packet along one route, paused on hover and removed under reduced motion. Transition: the new page connects in along the diagram lines.
- **Security, "The vault"** (`/security`): amber, with a muted red only for severity labels (critical/high). Motif: faint redaction bars and a document-classification header like a declassified report. Signature: write-ups start with key details redacted; "Declassify" (click or keyboard) reveals them. Severity as text + icon + color. Screen readers always get the full text; redaction is visual only. Transition: content unlocks with a short scan line passing over it.
- **About, "The workbench"** (`/about`): warm neutral (the off-white of the text, used as a highlight). No motif. Signature: "How I work" is a horizontal sequence that fills step by step as you scroll or tab through it.
- **Contact, "The handshake"** (`/contact`): blueprint blue. Signature: the PGP fingerprint and email shown as a "key card"; copy buttons confirm with a live "Copied" announcement.

Rules for all themes:
- Every accent passes WCAG AA in dark and light: ≥4.5:1 as text, ≥3:1 as UI. Each theme's colors are in DESIGN.md's contrast table with ratios.
- Motifs are decorative only: aria-hidden, low contrast, never behind body text strongly enough to hurt readability, removed under `prefers-contrast: more` and forced colors.
- Every signature interaction works with the keyboard, has a visible focus state, and has a reduced-motion version (no animation, same information).
- Themes apply through CSS custom properties scoped by a `data-section` attribute, so a page transition can crossfade the accent from one theme to the next. When moving between sections, the accent shifts during the transition.
- Case studies take the theme of their primary tag.
- No theme may break the don't list (no neon-green hacker look, no glow, no gradients, no stock photos, no shader effects).

## Connected transitions

The site should feel like one continuous space. Built on the View Transitions API through React's `<ViewTransition>` (stable in the installed Next.js 16.4 / React 19.3, so no experimental flag is needed) with matching `view-transition-name` values on shared elements.

- **Project → case study:** the clicked project row's title, tags and number morph into the case study header while the row expands upward to fill the page. The rest of the list falls away. Back reverses it exactly.
- **Featured projects on Home** use the same morph into their case studies.
- **Previous / Next project** at the end of each case study use the same morph, so projects can be browsed as a sequence.
- **Section → section:** the header and Inspect control stay fixed and never re-animate. Content moves along the grid's horizontal axis in nav order (going right in the nav slides content left, and the reverse), so pages feel like neighbours on one sheet.
- **Nav:** a single active indicator slides to the new item.
- **Inspect:** the 12-column grid lines (Design layer on) stay in place across pages. Inspect on/off state and the chosen layers persist across navigation.

Motion rules:
- Transitions 250–450ms, ease-out, transform and opacity only, no layout thrash. Never block clicks; a new click cancels a running transition.
- `prefers-reduced-motion`: instant page swap, no morph, no slide.
- Browsers without View Transitions: normal instant navigation (progressive enhancement, nothing breaks).

Accessibility for navigation:
- After every route change, move focus to the new page's `<h1>` (`tabindex="-1"`) and announce the page title in an `aria-live` region.
- Scroll to top on new pages; restore the scroll position when going Back.
- Back/forward buttons and direct URL loads all work. Every page works with JavaScript disabled (server-rendered); controls that need JavaScript are hidden when it is off.
- The skip link works on every page.

## Extras

- Hidden terminal opened with the backquote key, detected by the physical key (`event.code === "Backquote"`, not `event.key`) so it works on Hebrew and other non-US layouts. Ignored while focus is in any input, textarea or contenteditable. A footer toggle turns the shortcut off, and a visible "Open terminal" button in the footer opens it without the keyboard. Commands: `help`, `whoami`, `projects`, `skills`, `contact`, `clear`, `theme`.
- Real security headers in production, shown in the System layer.
- Fast: Lighthouse 95+ on performance, best practices and SEO; 100 on accessibility.

## Accessibility (hard requirement, not polish)

Target: **WCAG 2.2 Level AA**, which also satisfies Israeli Standard **IS 5568** and the EU/US equivalents. Accessibility overrides visual style if they conflict.

### Structure & semantics

- Correct `<html lang>`, one `<h1>` per page, no skipped heading levels.
- Landmarks: header, nav, main, footer; `aria-label` on multiple navs.
- "Skip to main content" link, first focusable element, visible on focus.
- Native elements first (`button`, `a`, `details`, `dialog`). ARIA only when no native element fits.
- Unique, descriptive `<title>` per page.

### Keyboard

- Everything usable with keyboard only: nav, filters, Inspect layers, theme toggle, expandable panels, terminal, case study navigation, Previous / Next project.
- Logical tab order, no keyboard traps, Escape closes any overlay/terminal and returns focus to the trigger.
- Visible focus indicator on every interactive element, at least 3:1 contrast, never hidden behind sticky headers.
- Terminal shortcut must not hijack typing in inputs (no trigger while focus is in an input, textarea or contenteditable); document it and allow turning it off.
- Code panels that scroll horizontally are keyboard-focusable so they can be scrolled without a mouse.

### Visual

- Text contrast ≥ 4.5:1 (large text ≥ 3:1), UI components and graphics ≥ 3:1, in BOTH themes, including Inspect annotations and the amber/blue accents.
- Never use color alone to convey meaning (tags, security notes, diagram states also get text or icons).
- Works at 200% zoom and at 320px width with no horizontal scrolling.
- Respects user text spacing overrides without clipping.
- Touch targets at least 24×24px (aim for 44×44).
- Respect `prefers-reduced-motion` (no draw-in animation, no page morph or slide, instant transitions) and `prefers-contrast`.
- No content flashes more than 3 times per second.

### Images, diagrams, media

- Meaningful alt text on every informative image; decorative images `alt=""`.
- Every SVG diagram has a title plus a text alternative: a short description and an expandable text/list version of the same flow.
- Any video gets captions; no autoplay with sound.

### Screen readers

- Inspect layer toggles announce their state (`aria-pressed`). Overlay labels must not create noise when off, and their info is available as a readable list when on.
- Project filters announce the result count via an `aria-live` region.
- Terminal: output in an `aria-live="polite"` log; input has a label.
- Theme toggle has an accessible name and state.
- Links describe their destination (no "click here", no context-free "read more").
- Contact form (if any): visible labels, errors tied with `aria-describedby`, error text that says how to fix it, no CAPTCHA puzzles.

### Accessibility statement (`/accessibility`)

- Standard followed (WCAG 2.2 AA / IS 5568), what was made accessible, known limitations, date last updated, assistive tech and browsers tested.
- Accessibility coordinator: name, email, phone (placeholders in `content/site.ts`).
- How to report a problem.

Do NOT install an accessibility overlay/widget plugin. Build it accessible instead.

## Content

Use clearly marked placeholders. Keep ALL content (name, bio, projects, links, certs, accessibility coordinator) in one file, `content/site.ts`, so it can be swapped without touching components.

## Tech

Next.js (App Router) + TypeScript + Tailwind. Static where possible. The folder already has `package.json`, `.claude/`, `.agents/` and `.impeccable/`: set Next.js up inside this existing folder later and never delete those.
