/**
 * ALL site content lives here (BRIEF.md: Content).
 * Swap the placeholders for real material without touching components.
 *
 * Convention: any text that starts with "Placeholder:" or is wrapped in
 * [Placeholder: …] is not real yet and is shown on the page as a visible
 * placeholder. Do not remove the marker until the real content is in.
 */

export type Discipline = "design" | "development" | "systems" | "security";

export const disciplines: { id: Discipline; label: string }[] = [
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "systems", label: "Systems" },
  { id: "security", label: "Security" },
];

export type FlowNode = { id: string; label: string; detail?: string; security?: boolean };
export type FlowEdge = { label?: string; security?: boolean };
export type FlowDiagram = {
  id: string;
  title: string;
  summary: string;
  description: string;
  nodes: FlowNode[];
  /** edges[i] connects nodes[i] → nodes[i + 1] */
  edges: FlowEdge[];
  /** Optional dashed return path from the last node back to the first */
  response?: string;
  group?: { label: string; from: number; to: number };
};

export type CodeSample = { title: string; language: string; code: string };

export type CaseStudy = {
  lead: string;
  meta: { label: string; value: string }[];
  problem: string[];
  decisions: { title: string; decision: string; rejected: string; why: string }[];
  built: { prose: string[]; stack: string[]; code: CodeSample[] };
  architecture: FlowDiagram;
  security: {
    threats: { asset: string; threat: string; likelihood: string; mitigation: string }[];
    protections: string[];
    testing: string[];
    note?: string;
  };
  outcome: { metric: string; before: string; after: string; method: string }[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: Discipline[];
  role: string;
  year: string;
  screenshotAlt: string;
  caseStudy?: CaseStudy;
};

export const site = {
  name: "Boaz King",
  tagline: "I design, build and secure digital products",
  description:
    "Portfolio of Boaz King: UX/UI design, frontend and full-stack development, systems and infrastructure, and cybersecurity.",
  url: "https://example.com", // Placeholder: canonical domain
  lastUpdated: "2026-11-23",
  lang: "en",

  /** The CV is always one plain link away (BRIEF.md: must-haves). */
  cv: {
    href: "/files/cv.pdf",
    size: "1 KB", // Placeholder file; update when the real CV is added
    placeholder: true,
  },

  /** Home is a minimal entry point (BRIEF.md: Home). */
  home: {
    photo: {
      src: "/images/boaz.jpg", // Add the real photo here; set placeholder to false
      width: 1200,
      height: 1500,
      alt: "Boaz King. [PLACEHOLDER: one short sentence describing the photo]",
      placeholder: true,
    },
    howItWorksTitle: "How this site works",
    howItWorks: [
      "Each section is its own world: Work, Security, Systems, About and Contact. Use the header to move between them.",
      "The Inspect buttons show how any page is built, from its grid and type to its code and the servers behind it.",
      "The terminal is a shortcut to everything: my CV, GitHub, contact details and projects.",
      "And the Security page hides a challenge. Break in, and you get my CV.",
    ],
  },

  nav: [
    { href: "/#work", label: "Work" },
    { href: "/#security", label: "Security" },
    { href: "/#systems", label: "Systems" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],

  sections: {
    work: {
      title: "Selected work",
      intro: "Projects across design, development, systems and security. Filter by discipline.",
    },
    security: {
      title: "Security work",
      intro: "Capture-the-flag challenges, lab write-ups, research and certifications.",
    },
    systems: {
      title: "Systems and infrastructure",
      intro: "The machines and networks I run, from a homelab to cloud deployments.",
    },
    process: {
      title: "How I work",
      intro: "The same five steps on every project, in this order.",
    },
    toolbox: {
      title: "Toolbox",
      intro: "What I use day to day, grouped by area.",
    },
    about: { title: "About" },
    contact: {
      title: "Contact",
      intro: "Email is the fastest way to reach me.",
    },
  },

  projects: [
    {
      slug: "placeholder-project-one",
      title: "Placeholder: Project one",
      summary: "Placeholder: one line on what this product does and who it is for.",
      tags: ["design", "development", "security"],
      role: "Placeholder: Lead designer and engineer",
      year: "2026",
      screenshotAlt: "Placeholder: describe what the screenshot shows",
      caseStudy: {
        lead: "Placeholder: one or two sentences on the outcome this project delivered.",
        meta: [
          { label: "Role", value: "Placeholder: Design, frontend, infrastructure" },
          { label: "Timeline", value: "Placeholder: 12 weeks" },
          { label: "Team", value: "Placeholder: 3 people" },
          { label: "Stack", value: "Placeholder: Next.js, PostgreSQL, Docker" },
        ],
        problem: [
          "Placeholder: what was broken or missing, for whom, and how you knew.",
          "Placeholder: the constraint that made it hard (time, budget, legacy, compliance).",
        ],
        decisions: [
          {
            title: "Placeholder: First design decision",
            decision: "Placeholder: what you chose.",
            rejected: "Placeholder: the alternative you rejected.",
            why: "Placeholder: the evidence that settled it.",
          },
          {
            title: "Placeholder: Second design decision",
            decision: "Placeholder: what you chose.",
            rejected: "Placeholder: the alternative you rejected.",
            why: "Placeholder: the evidence that settled it.",
          },
        ],
        built: {
          prose: [
            "Placeholder: how the system is put together, in two or three sentences.",
            "Placeholder: the most interesting engineering problem and how you solved it.",
          ],
          stack: [
            "Placeholder: Framework",
            "Placeholder: Database",
            "Placeholder: Hosting",
            "Placeholder: CI/CD",
          ],
          code: [
            {
              title: "Placeholder: middleware/rate-limit.ts",
              language: "ts",
              code: `// Placeholder: replace with a real excerpt from this project.
export function rateLimit(key: string, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const hits = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) return { allowed: false, retryAfter: windowMs - (now - hits[0]) };
  store.set(key, [...hits, now]);
  return { allowed: true };
}`,
            },
          ],
        },
        architecture: {
          id: "case-architecture",
          title: "Placeholder: Project one architecture",
          summary: "Placeholder: requests pass through a CDN with TLS, an app server and a database.",
          description:
            "Placeholder: a browser request reaches the CDN, which terminates TLS and forwards to the application server. The server reads and writes the database and returns the response through the CDN.",
          nodes: [
            { id: "browser", label: "Browser" },
            { id: "cdn", label: "CDN edge", detail: "TLS 1.3", security: true },
            { id: "app", label: "App server", detail: "Placeholder" },
            { id: "auth", label: "Auth check", detail: "Placeholder", security: true },
            { id: "db", label: "Database", detail: "Placeholder" },
          ],
          edges: [
            { label: "HTTPS" },
            { label: "Forward" },
            { label: "Session" },
            { label: "Query" },
          ],
          response: "Response",
          group: { label: "Placeholder: Private network", from: 2, to: 4 },
        },
        security: {
          threats: [
            {
              asset: "Placeholder: User accounts",
              threat: "Placeholder: Credential stuffing",
              likelihood: "Placeholder: High",
              mitigation: "Placeholder: Rate limiting and breached-password check",
            },
            {
              asset: "Placeholder: Customer data",
              threat: "Placeholder: SQL injection",
              likelihood: "Placeholder: Medium",
              mitigation: "Placeholder: Parameterised queries, least-privilege DB role",
            },
            {
              asset: "Placeholder: Session tokens",
              threat: "Placeholder: Cross-site scripting",
              likelihood: "Placeholder: Medium",
              mitigation: "Placeholder: CSP, HttpOnly cookies, output encoding",
            },
          ],
          protections: [
            "Placeholder: HTTPS everywhere with HSTS preload.",
            "Placeholder: Content-Security-Policy with no third-party scripts.",
            "Placeholder: Secrets in a vault, rotated every 90 days.",
          ],
          testing: [
            "Placeholder: what you tested (OWASP ASVS level, scope).",
            "Placeholder: which tools you used and what they found.",
            "Placeholder: what you fixed and how you verified the fix.",
          ],
          note: "Placeholder: one security finding worth calling out, and how it was resolved.",
        },
        outcome: [
          {
            metric: "Placeholder: Task completion time",
            before: "[Placeholder: metric]",
            after: "[Placeholder: metric]",
            method: "Placeholder: how it was measured",
          },
          {
            metric: "Placeholder: Lighthouse performance",
            before: "[Placeholder: metric]",
            after: "[Placeholder: metric]",
            method: "Placeholder: how it was measured",
          },
          {
            metric: "Placeholder: Critical vulnerabilities",
            before: "[Placeholder: metric]",
            after: "[Placeholder: metric]",
            method: "Placeholder: how it was measured",
          },
        ],
      },
    },
    {
      slug: "placeholder-project-two",
      title: "Placeholder: Project two",
      summary: "Placeholder: one line on a design-led project.",
      tags: ["design"],
      role: "Placeholder: Product designer",
      year: "2025",
      screenshotAlt: "Placeholder: describe what the screenshot shows",
    },
    {
      slug: "placeholder-project-three",
      title: "Placeholder: Project three",
      summary: "Placeholder: one line on a full-stack build.",
      tags: ["development", "systems"],
      role: "Placeholder: Full-stack developer",
      year: "2025",
      screenshotAlt: "Placeholder: describe what the screenshot shows",
    },
    {
      slug: "placeholder-project-four",
      title: "Placeholder: Project four",
      summary: "Placeholder: one line on an infrastructure project.",
      tags: ["systems", "security"],
      role: "Placeholder: Infrastructure engineer",
      year: "2024",
      screenshotAlt: "Placeholder: describe what the screenshot shows",
    },
    {
      slug: "placeholder-project-five",
      title: "Placeholder: Project five",
      summary: "Placeholder: one line on a security assessment.",
      tags: ["security"],
      role: "Placeholder: Security tester",
      year: "2024",
      screenshotAlt: "Placeholder: describe what the screenshot shows",
    },
  ] satisfies Project[] as Project[],

  securityWork: [
    {
      title: "Placeholder: CTF challenge name",
      kind: "CTF",
      date: "2026-09",
      platform: "Placeholder: HackTheBox",
      summary: "Placeholder: what the challenge was.",
      approach: "Placeholder: how you approached it.",
      tools: "Placeholder: tools used",
      takeaway: "Placeholder: what you learned.",
      writeup: { title: "Placeholder: Write-up title", href: "#" },
    },
    {
      title: "Placeholder: Lab write-up name",
      kind: "Lab",
      date: "2026-06",
      platform: "Placeholder: TryHackMe",
      summary: "Placeholder: what the lab covered.",
      approach: "Placeholder: how you approached it.",
      tools: "Placeholder: tools used",
      takeaway: "Placeholder: what you learned.",
      writeup: { title: "Placeholder: Write-up title", href: "#" },
    },
    {
      title: "Placeholder: Research topic",
      kind: "Research",
      date: "2026-02",
      platform: "Placeholder: Personal research",
      summary: "Placeholder: what you investigated.",
      approach: "Placeholder: your method.",
      tools: "Placeholder: tools used",
      takeaway: "Placeholder: what you found.",
      writeup: { title: "Placeholder: Research note title", href: "#" },
    },
  ],

  certifications: [
    { name: "Placeholder: Certification name", issuer: "Placeholder: Issuer", year: "2026" },
    { name: "Placeholder: Certification name", issuer: "Placeholder: Issuer", year: "2025" },
  ],

  systems: {
    diagram: {
      id: "homelab",
      title: "Homelab network",
      summary: "Placeholder: traffic from the internet passes a firewall, then a VLAN switch, to a virtualisation host running containers.",
      description:
        "Placeholder: inbound traffic is filtered by the firewall, segmented onto VLANs by the managed switch, and served by containers on a Proxmox host.",
      nodes: [
        { id: "internet", label: "Internet" },
        { id: "fw", label: "Firewall", detail: "Placeholder: OPNsense", security: true },
        { id: "switch", label: "Switch", detail: "Placeholder: VLANs" },
        { id: "host", label: "Host", detail: "Placeholder: Proxmox" },
        { id: "docker", label: "Containers", detail: "Placeholder: Docker" },
      ],
      edges: [{ label: "WAN" }, { label: "Filtered", security: true }, { label: "Trunk" }, { label: "Bridge" }],
      group: { label: "Placeholder: Home lab", from: 2, to: 4 },
    } satisfies FlowDiagram,
    items: [
      {
        title: "Placeholder: Homelab",
        kind: "Infrastructure",
        date: "Ongoing",
        platform: "Placeholder: Proxmox, OPNsense",
        summary: "Placeholder: what runs in the homelab and why.",
        approach: "Placeholder: how it is segmented and backed up.",
        tools: "Placeholder: Proxmox, OPNsense, WireGuard",
        takeaway: "Placeholder: what it taught you.",
      },
      {
        title: "Placeholder: Linux servers",
        kind: "Servers",
        date: "Ongoing",
        platform: "Placeholder: Debian, Ubuntu",
        summary: "Placeholder: what you administer.",
        approach: "Placeholder: hardening and patching routine.",
        tools: "Placeholder: Ansible, systemd, fail2ban",
        takeaway: "Placeholder: what it taught you.",
      },
      {
        title: "Placeholder: Cloud and Docker",
        kind: "Cloud",
        date: "2026",
        platform: "Placeholder: AWS, Docker",
        summary: "Placeholder: what you deploy and where.",
        approach: "Placeholder: infrastructure as code approach.",
        tools: "Placeholder: Terraform, Docker Compose",
        takeaway: "Placeholder: what it taught you.",
      },
    ],
  },

  process: [
    { step: "Research", text: "Placeholder: talk to the people who will use it, and read what already exists." },
    { step: "Design", text: "Placeholder: sketch the flows, then the interface, then test it with users." },
    { step: "Build", text: "Placeholder: ship small, typed, tested increments." },
    { step: "Secure", text: "Placeholder: threat-model the design and harden what ships." },
    { step: "Test", text: "Placeholder: test with real users, assistive technology and an attacker's mindset." },
  ],

  toolbox: [
    { area: "Design", tools: ["Placeholder: Figma", "Placeholder: FigJam", "Placeholder: Protopie"] },
    { area: "Frontend", tools: ["Placeholder: TypeScript", "Placeholder: React", "Placeholder: Next.js", "Placeholder: Tailwind CSS"] },
    { area: "Backend", tools: ["Placeholder: Node.js", "Placeholder: PostgreSQL", "Placeholder: Redis"] },
    { area: "Infrastructure", tools: ["Placeholder: Linux", "Placeholder: Docker", "Placeholder: Terraform", "Placeholder: AWS"] },
    { area: "Security", tools: ["Placeholder: Burp Suite", "Placeholder: Nmap", "Placeholder: Wireshark", "Placeholder: Metasploit"] },
  ],

  about: {
    bio: [
      "Placeholder: two or three sentences about who you are and what you work on.",
      "Placeholder: one sentence on how design, engineering and security connect in your work.",
    ],
    photoAlt: "Placeholder: Portrait of Boaz King",
    lookingFor: "Placeholder: the roles or projects you are looking for, and where you are based.",
  },

  contact: {
    email: "boaz@example.com", // Placeholder: real email
    links: [
      { label: "GitHub profile", href: "https://github.com/" }, // Placeholder: profile URL
      { label: "LinkedIn profile", href: "https://www.linkedin.com/" }, // Placeholder
      { label: "TryHackMe profile", href: "https://tryhackme.com/" }, // Placeholder
      { label: "HackTheBox profile", href: "https://www.hackthebox.com/" }, // Placeholder
    ],
    pgp: {
      fingerprint: "0000 0000 0000 0000 0000  0000 0000 0000 0000 0000", // Placeholder
      href: "/pgp.asc", // Placeholder: add the public key file to /public
    },
  },

  accessibility: {
    standard: "WCAG 2.2 Level AA, which also satisfies Israeli Standard IS 5568",
    made: [
      "Every feature works with a keyboard alone, including the Inspect layers, filters and the terminal.",
      "Visible focus indicators with at least 3:1 contrast, never hidden under the sticky header.",
      "Text contrast of at least 4.5:1 in both dark and light themes, including accent colors.",
      "Pages reflow at 320px width and 200% zoom without horizontal scrolling.",
      "Every diagram has a title, a short description and a text version of the same flow.",
      "Screen readers hear toggle states, filter result counts and terminal output.",
      "Animations are removed when your system asks for reduced motion.",
    ],
    limitations: [
      "Placeholder: list any known issue here, with a workaround and planned fix date.",
      "Code panels may scroll horizontally inside the panel. Focus the panel and use the arrow keys to scroll.",
    ],
    tested: [
      { tech: "Placeholder: NVDA", browser: "Placeholder: Firefox", date: "Placeholder: 2026-11" },
      { tech: "Placeholder: VoiceOver (macOS)", browser: "Placeholder: Safari", date: "Placeholder: 2026-11" },
      { tech: "Placeholder: Keyboard only", browser: "Placeholder: Chrome, Edge", date: "Placeholder: 2026-11" },
    ],
    coordinator: {
      name: "Placeholder: Coordinator name",
      email: "accessibility@example.com", // Placeholder
      phone: "Placeholder: phone number",
    },
    responseTime: "Placeholder: We reply within 5 working days.",
  },

  terminal: {
    user: "boaz",
    host: "portfolio",
    whoami: "Boaz King. I design, build and secure digital products.",
  },
};

export type Site = typeof site;

/** True when a string is still placeholder content. */
export function isPlaceholder(text: string) {
  return /^Placeholder:|\[Placeholder/.test(text);
}
