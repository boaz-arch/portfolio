import Image from "next/image";
import { site } from "@/content/site";

/**
 * The photo on Home: the LCP element, so it loads with priority and has
 * explicit dimensions (no layout shift). Until the real file exists, a
 * neutral hatched placeholder with the same alt text. Never a stock photo,
 * never decorative, never inside a link.
 */
export function HomePhoto() {
  const { src, width, height, alt, placeholder } = site.home.photo;
  const frame = "block aspect-[4/5] w-full rounded-md border border-border";

  if (placeholder) {
    return (
      <div role="img" aria-label={alt} className={`hatch relative ${frame}`}>
        <span aria-hidden="true" className="absolute bottom-3 left-3 bg-surface-1 px-2 py-1 text-small text-text-muted">
          [PLACEHOLDER PHOTO]
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      sizes="(min-width: 1024px) 40vw, (min-width: 768px) 360px, 280px"
      className={`${frame} h-auto object-cover`}
    />
  );
}
