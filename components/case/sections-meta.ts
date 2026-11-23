/** Case study section order and ids, shared by server sections and client nav (BRIEF.md template order). */
export const CASE_SECTIONS = [
  { id: "problem", title: "Problem", fn: "CaseProblem", lens: null },
  { id: "design-decisions", title: "Design decisions", fn: "CaseDecisions", lens: "design" },
  { id: "how-its-built", title: "How it's built", fn: "CaseBuilt", lens: "code" },
  { id: "system-architecture", title: "System architecture", fn: "CaseArchitecture", lens: "systems" },
  { id: "security", title: "Security", fn: "CaseSecurity", lens: "security" },
  { id: "outcome", title: "Outcome", fn: "CaseOutcome", lens: null },
] as const;
