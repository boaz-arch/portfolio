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
| `/systems` | Systems & infrastructure overview: the whole stack as a vertical depth gauge with an "Enter" button (see Descend the stack) |
| `/systems/internet`, `/systems/edge`, `/systems/network`, `/systems/host`, `/systems/containers`, `/systems/os` | The six stack levels, one route each |
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

## Break in to get my CV (Security)

A guided, fully simulated, client-side challenge on `/security`. No real vulnerabilities, nothing executes, no real credentials anywhere.

The frame:
- `/security` opens with a "Target brief" (classified-document style): "Objective: retrieve the file cv.pdf from this site. Authorized engagement. Simulated environment." A "Start engagement" button begins it.
- A mission tracker (fixed panel, collapsible) shows the stages as locked, current or done. Progress is saved in `sessionStorage`.
- An elapsed-time counter that stops at the end ("Time to root: 06:42"). Opt-in, hidden by default, does not run unless turned on.

The stages (each teaches one real technique and has 3 progressive hints: nudge → direction → answer):
1. **Recon:** "Look where developers leave notes." The flag is in an HTML comment in the page source. Found via View Source / DevTools Elements, or via the site's Inspect → Code layer, which shows the comment while this stage is active (so mobile users can play).
2. **Enumeration:** "Every site tells crawlers where not to look." The comment points to `/robots.txt`, which disallows a hidden path (`/ops-7f3a`). That page is a fake "internal ops" login screen.
3. **Traffic:** "Watch what the server whispers." Responses on `/ops-7f3a` carry a custom header `X-Ops-Hint` with a base64 string, visible in DevTools Network or in the site's Inspect → System layer, which lists the real response headers.
4. **Decode:** "It's not encrypted, it's encoded." Decoding the base64 (the terminal's `decode` command, or any tool) gives a username and a passphrase hint.
5. **Access:** in the site terminal (backquote or the footer "Open terminal" button): `ls`, `cat notes.txt`, `whoami`, `ssh boaz@ops`, which prompts for the passphrase. The correct passphrase grants a shell.
6. **Privilege escalation:** `sudo -l` reveals one allowed command; using it reads `/root/cv.pdf`. The terminal plays a short "ACCESS GRANTED" sequence, then the CV opens/downloads (static file at `/files/cv.pdf`), a completion card shows time, hints used and "What you just did" (one plain line per stage naming the real technique: source review, robots.txt enumeration, header inspection, base64 decoding, credential reuse, sudo misconfiguration, and how I defend against each), and a "Contact me" button.

Also: `/.well-known/security.txt` as a real, valid file (RFC 9116), with a hidden comment line referencing the challenge as an easter egg.

Terminal additions: `help`, `ls`, `cat`, `cd`, `pwd`, `whoami`, `decode <base64>`, `ssh`, `sudo -l`, `sudo <cmd>`, `hint`, `progress`, `clear`, `exit`, and `skip` (reveals the CV directly). Tab completion and up/down history. Wrong commands give in-character but helpful errors that point toward the next step.

Must-haves (recruiters must never be blocked):
- A plain "Skip the challenge, download CV (PDF)" link, always visible on `/security`, in the footer and on `/about`. The CV is never only behind the game.
- The challenge is optional; the security write-ups below it work without playing.
- No browser storage beyond `sessionStorage` progress; no tracking.

Security hygiene:
- No real secrets anywhere. The passphrase is a game string, the fake login cannot submit anywhere, and the hidden path is a static page.
- The CSP stays strict; the terminal uses no `eval` and no `innerHTML` with user input (text is rendered safely).
- `X-Ops-Hint` is set only on the `/ops-7f3a` route via `next.config` headers.
- `robots.txt` still allows normal indexing of real pages; the challenge pages are `noindex`.
- The public `cv.pdf` has personal metadata stripped (author, software, edit history). Until the real CV is supplied, `/files/cv.pdf` is a one-page placeholder PDF with no metadata, clearly marked as a placeholder.

Accessibility:
- Playable by keyboard and screen reader: terminal output is an `aria-live` log, mission tracker updates are announced, hints are buttons.
- Every DevTools step has an in-site alternative (Inspect layers and terminal), so nobody needs desktop DevTools.
- The "ACCESS GRANTED" sequence respects reduced motion (static message) and never flashes.

## Descend the stack (Systems)

The visitor zooms from the internet down to the OS, one level at a time. Each level is its own route, so it is linkable and Back works.

| Route | Level |
|---|---|
| `/systems` | Overview: the whole stack as a vertical "depth gauge", with an "Enter" button at the top |
| `/systems/internet` | 1 Internet: DNS, domain, registrar, global routing. The request starts here. |
| `/systems/edge` | 2 Edge: CDN, TLS termination, WAF, DDoS protection, security headers |
| `/systems/network` | 3 Network: router, firewall rules, VLANs/segments, VPN, reverse proxy |
| `/systems/host` | 4 Host: physical/virtual servers, hypervisor, hardware specs |
| `/systems/containers` | 5 Containers & services: Docker/compose stacks, what runs where, ports |
| `/systems/os` | 6 OS: kernel, users & permissions, services/daemons, hardening, logs |

Each level shows:
- An interactive SVG diagram. Every node is a focusable button; selecting a node shows its details in a side panel (role, specs, ports, config notes).
- One node per level is the "way down" (highlighted, labeled "Go deeper: <next level>"). Selecting it zooms into the next level.
- "Work at this level" (between the diagram and the info blocks): the featured item whose `primaryLevel` is this level, shown large (title, one-line outcome, tags, period). A project links to its case study with the project morph; an experience entry expands in place (disclosure). Other items that touch this level are listed below as "Also at this level". Items with a `nodeId` are highlighted on that node ("has related work", in text) and listed in the side panel when the node is selected. A level with no work hides the section entirely, and the build logs a warning naming the level.
- Three short blocks: "What lives here", "How I secure it" (amber), "Tools I use".
- All content comes from `content/site.ts` (a `systemsLevels` array), with placeholders based on a typical homelab.

Content model additions:
- Projects and work-experience entries get `stackLevels` (one or more of internet | edge | network | host | containers | os) and `primaryLevel` (where the item is featured), and optionally `nodeId`.
- Work experience: `{ id, role, organisation, period, summary, whatIDid[], tools[], stackLevels, primaryLevel, nodeId?, link? }`. No case study page.
- Placeholders: one placeholder project or experience at every level, clearly marked "[PLACEHOLDER]".

Zoom transition:
- Going deeper: the selected node scales up and becomes the frame of the next level's diagram (shared view-transition-name). The old level falls away behind it. About 450ms.
- Going up: the exact reverse; the current diagram shrinks back into its node on the parent level.
- Jumping several levels via the gauge: one quick continuous zoom, not each level played in turn.
- From a case study to a level: the zoom transition.
- Reduced motion: instant swap with a brief crossfade only.

Navigation aids:
- A fixed depth gauge, on the left on desktop and as a compact top bar on mobile: 6 ticks, the current level highlighted, each tick a link. It works like breadcrumbs: `nav aria-label="Stack depth"`, `aria-current="page"` on the current level.
- Keyboard: ArrowDown/PageDown go deeper along the "way down" node; ArrowUp/PageUp go up a level. Only active when focus isn't in an input. Shown in a small hint and on the accessibility page.
- "Go up" and "Go deeper" buttons at the bottom of each level.
- The OS level ends with "Back to surface" (zooms all the way out) and a link to the Security page: "See how I attack and defend this stack."
- Case study pages show a small "Stack depth" strip with the levels the project touches, each linking to that level.

"Trace a request" (signature moment), on `/systems/internet`:
- A toggle, "Trace a request". A single packet travels from the browser down through every level to the OS process that serves it, pausing at each level with one line on what happens there (DNS lookup, TLS handshake, firewall check, reverse proxy, container, process). If the level has a featured work item, the pause also shows "I worked here: <title>" with a link.
- It advances by itself every few seconds, with visible Pause, Next and Previous controls (WCAG 2.2.2). Reduced motion: no animation, a stepped list with Next and Previous.

Accessibility:
- Each level has its own `<h1>`, title and focus-on-arrival like every other page.
- Every diagram has a text alternative: an expandable list of its nodes and connections with the same details as the side panel.
- The side panel is a labeled region. Selecting a node moves focus to it, and Escape returns focus to the node.
- Node states (selected, way down, healthy, has related work) use text and an icon, never color alone.
- Work items are a real list (`<ul>`), each with a heading. Experience disclosures use native `<details>/<summary>` (or a button with `aria-expanded` and `aria-controls`).
- Mobile: diagrams simplify to a vertical stack of nodes; the depth gauge becomes a compact top bar.

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

- Terminal (also used by the Security challenge, see Break in to get my CV) opened with the backquote key, detected by the physical key (`event.code === "Backquote"`, not `event.key`) so it works on Hebrew and other non-US layouts. Ignored while focus is in any input, textarea or contenteditable. A footer toggle turns the shortcut off, and a visible "Open terminal" button in the footer opens it without the keyboard. Commands: `help`, `whoami`, `projects`, `skills`, `contact`, `clear`, `theme`.
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
