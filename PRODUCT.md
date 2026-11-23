# Product

<!-- impeccable:product-schema 1 -->

BRIEF.md is the source of truth. This file records durable product facts taken from it; if the two ever disagree, BRIEF.md wins and this file is updated.

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind, static where possible (per BRIEF.md). Set it up inside the existing folder; never delete `package.json`, `.claude/`, `.agents/` or `.impeccable/`.

Already in the repo: `@playwright/test` and `@axe-core/playwright` as dev dependencies. Lighthouse is a stated target but is not installed yet.

## Users

Recruiters, hiring managers and clients in design, engineering and security. They are evaluating one person across four disciplines and need to see real depth in whichever one they're hiring for.

## Product Purpose

A personal portfolio for Boaz King, who designs, builds and secures digital products. It shows UX/UI design, frontend/full-stack development, systems/infrastructure and cybersecurity work through projects, case studies, security write-ups and infrastructure diagrams. Success means a visitor from any of the three audiences gets in touch.

## Positioning

One person covers the whole lifecycle: design, build, host and secure. The site proves it with its own build. The Inspect control exposes the page's real grid, real code and real hosting/security setup, so the portfolio is itself the main work sample.

## Operating Context

- Visitors are often screening quickly; the surface reads calm and minimal first, with technical depth one action away.
- Technical visitors will check whether what Inspect shows is true (headers, CSP, HSTS, spacing values, code), so it has to be accurate.
- Keyboard users and power users get a hidden terminal (`help`, `whoami`, `projects`, `skills`, `contact`, `clear`, `theme`).

## Capabilities and Constraints

- **Inspect layers:** Design (grid, spacing, type sizes, outlines), Code (component names, short real snippets), System (request flow, CDN, TLS, security headers). Every value shown must be the real value on the page.
- **Site map:** hero, selected work (4–6 projects with Design / Development / Systems / Security filters), case study template, security work, systems & infrastructure, how I work, toolbox, about, contact, `/accessibility` statement.
- **Content model:** all content lives in `content/site.ts`, so it can be swapped without touching components.
- **Performance:** Lighthouse 95+ on performance, best practices and SEO; 100 on accessibility.
- **Security:** real security headers in production, shown in the System layer.
- **Visual constraints:** BRIEF.md pins the look (dark slate default, blueprint-blue and amber accents only, one sans plus mono limited to Inspect and terminal, banned styles). That belongs to DESIGN.md and is not repeated here.

## Evidence on Hand

None yet. No real projects, case studies, metrics, certifications, CTF results, photo, bio or links exist. The brief calls for clearly marked placeholders in `content/site.ts`. Future work must not fabricate outcomes, numbers, certs or clients, or present placeholders as real.

## Product Principles

1. **The site is the proof.** Its own design, code and infrastructure are the strongest work sample, so whatever Inspect shows must be true.
2. **Calm surface, depth on demand.** A quick screen stays clear; detail is one deliberate action away and never forced.
3. **Accessibility outranks style.** WCAG 2.2 AA is a hard requirement; if a visual choice conflicts with it, the visual choice gives way.
4. **Real work only.** Placeholders stay visibly placeholders until the owner supplies real content.

## Accessibility & Inclusion

WCAG 2.2 Level AA, which also satisfies Israeli Standard IS 5568 and the EU/US equivalents. The full requirement list is in BRIEF.md. That includes keyboard support for every feature, 3:1 focus indicators, contrast in both themes including the accents, 320px width and 200% zoom, reduced motion and `prefers-contrast`, text alternatives for diagrams, and live regions for filters and the terminal. Also required: an `/accessibility` statement page with coordinator details. No overlay or widget plugins.
