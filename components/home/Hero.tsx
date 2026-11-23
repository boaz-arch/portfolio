"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { InspectControl } from "@/components/inspect/InspectControl";
import { useInspect } from "@/components/providers/InspectProvider";
import { HomePhoto } from "@/components/home/HomePhoto";
import { OpenTerminalButton } from "@/components/home/OpenTerminalButton";

/**
 * Home: photo, name, one line, "How this site works", and the two controls.
 * Photo in columns 1–5 and text in 7–12 from lg; stacked below, photo first.
 */
export function Hero() {
  const { setHeroControlVisible } = useInspect();
  const controlRef = useRef<HTMLDivElement>(null);

  // While this Inspect control is on screen, the header copy stays hidden.
  useEffect(() => {
    const el = controlRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setHeroControlVisible(entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    io.observe(el);
    return () => {
      io.disconnect();
      // Reset for the next visit to Home: its control starts on screen.
      setHeroControlVisible(true);
    };
  }, [setHeroControlVisible]);

  return (
    <section aria-labelledby="hero-title" className="py-16 lg:py-(--section-y)">
      <div className="wrap items-center gap-y-12">
        <div
          className="col-full max-w-[280px] md:max-w-[360px] lg:col-span-5 lg:max-w-none"
          data-inspect="HomePhoto"
          data-source="components/home/HomePhoto.tsx"
        >
          <HomePhoto />
        </div>

        <div className="col-full lg:col-span-6 lg:col-start-7" data-inspect="HomeIntro" data-source="components/home/Hero.tsx">
          <h1 id="hero-title" className="text-display text-text">
            {site.name}
          </h1>
          <p className="mt-4 text-lead text-text-secondary">{site.tagline}.</p>

          <h2 className="mt-12 text-title text-text">{site.home.howItWorksTitle}</h2>
          <div className="mt-3 max-w-[60ch] space-y-3 text-body text-text">
            {site.home.howItWorks.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-8">
            <OpenTerminalButton />
            <div ref={controlRef} className="js-only" data-inspect="InspectControl" data-source="components/inspect/InspectControl.tsx">
              <InspectControl variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
