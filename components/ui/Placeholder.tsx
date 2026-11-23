/** Hatched frame shown until a real image exists. Never a stock photo. */
export function PlaceholderFrame({
  label,
  className = "",
  aspect = "aspect-[16/10]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`hatch flex ${aspect} items-end rounded-md border border-border p-3 ${className}`}
    >
      <span aria-hidden="true" className="bg-surface-1 px-2 py-1 text-small text-text-muted">
        {label}
      </span>
    </div>
  );
}
