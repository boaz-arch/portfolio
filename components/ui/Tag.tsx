import { disciplineIcon } from "@/components/icons";
import { disciplines, type Discipline } from "@/content/site";

export const disciplineLabel = (d: Discipline) => disciplines.find((x) => x.id === d)?.label ?? d;

/** Discipline tag: icon + word, never color (DESIGN.md: Tags). */
export function Tag({ discipline }: { discipline: Discipline }) {
  const Icon = disciplineIcon[discipline];
  return (
    <span className="inline-flex items-center gap-1 rounded-xs border border-border bg-surface-2 px-2 py-px text-small text-text-secondary">
      <Icon size={14} />
      {disciplineLabel(discipline)}
    </span>
  );
}

export function TagList({ tags }: { tags: Discipline[] }) {
  return (
    <ul aria-label="Tags" className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t}>
          <Tag discipline={t} />
        </li>
      ))}
    </ul>
  );
}
