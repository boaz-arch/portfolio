import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Build-time excerpt of a real function's source (the Development theme's
 * "View source"). Read from disk when the page is prerendered, so the code
 * shown is always the code that rendered the section. Nothing is retyped.
 */
export type Excerpt = { path: string; start: number; total: number; code: string };

export function functionExcerpt(path: string, name: string, maxLines = 14): Excerpt | null {
  const lines = readFileSync(join(process.cwd(), path), "utf8").split(/\r?\n/);
  const i = lines.findIndex((l) => new RegExp(`^export function ${name}\\b`).test(l));
  if (i === -1) return null;
  let end = i;
  while (end < lines.length - 1 && lines[end] !== "}" && end - i < maxLines - 1) end++;
  return { path, start: i + 1, total: lines.length, code: lines.slice(i, end + 1).join("\n") };
}
