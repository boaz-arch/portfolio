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
- Accents: blueprint blue for design/code annotations, amber for security notes. Nothing else colored.
- Do NOT use the neon-green hacker look, purple gradients, glowing cards, stock photos, or shader/WebGL background effects.
- Type: one clean sans for all content, one monospace used ONLY inside the Inspect layers, the terminal and code panels.
- Code panels: case studies may include short, real code panels. Each is a labeled region, scrolls horizontally only inside the panel, and has a copy button with an accessible name and a "Copied" live announcement.
- Left-aligned, 12-column grid, generous whitespace.
- One signature motion moment: Inspect layers drawing themselves in. No fade-up on every section.

## Site map

1. **Hero:** name, one line ("I design, build and secure digital products"), Inspect control.
2. **Selected work:** 4–6 projects, tagged Design / Development / Systems / Security, with filters.
3. **Case study page template:** problem → design decisions → how it's built → system architecture diagram → security (threat model, protections, testing) → outcome with numbers.
4. **Security work:** CTFs, lab write-ups, research, certs. Expandable summaries.
5. **Systems & infrastructure:** homelab, servers, networking, Linux, cloud, Docker, shown as clean diagrams.
6. **How I work:** research → design → build → secure → test (a real sequence, so numbering is OK here only).
7. **Toolbox:** grouped by area (design, frontend, backend, infra, security). No logo walls.
8. **About:** short bio, photo, certifications, what I'm looking for.
9. **Contact:** email as plain text, GitHub, LinkedIn, TryHackMe/HackTheBox, optional PGP key.
10. **Accessibility statement page** (`/accessibility`), linked from the footer on every page.

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

- Everything usable with keyboard only: nav, filters, Inspect layers, theme toggle, expandable panels, terminal, case study navigation.
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
- Respect `prefers-reduced-motion` (no draw-in animation, instant transitions) and `prefers-contrast`.
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
