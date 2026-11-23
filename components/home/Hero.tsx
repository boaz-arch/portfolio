"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { InspectControl } from "@/components/inspect/InspectControl";
import { useInspect } from "@/components/providers/InspectProvider";

export function Hero() {
  const { setHeroControlVisible } = useInspect();
  const controlRef = useRef<HTMLDivElement>(null);

  // While the hero's Inspect control is on screen, the header mirror stays hidden.
  useEffect(() => {
    const el = controlRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setHeroControlVisible(entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    io.observe(el);
    return () => {
      io.disconnect();
      setHeroControlVisible(false);
    };
  }, [setHeroControlVisible]);

  return (
    <section
      aria-labelledby="hero-title"
      data-inspect="Hero"
      data-source="components/home/Hero.tsx"
      className="pt-24 pb-16 lg:pt-32"
    >
      <div className="wrap">
        <div className="col-text">
          <h1 id="hero-title" className="text-display text-text">
            {site.name}
          </h1>
          <p className="mt-4 max-w-[30ch] text-lead text-text-secondary">{site.tagline}</p>
          <div ref={controlRef} className="js-only mt-10">
            <InspectControl />
          </div>
          <p className="mt-12 max-w-[60ch] text-body text-text">{site.home.intro}</p>
        </div>
      </div>
    </section>
  );
}
