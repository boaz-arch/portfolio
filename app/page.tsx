import { site } from "@/content/site";
import { Hero } from "@/components/home/Hero";
import { TransitionLink } from "@/components/nav/TransitionLink";

export default function HomePage() {
  return (
    <div data-section="home">
      <Hero />

      <section aria-labelledby="explore-title" className="section" data-inspect="Explore" data-source="app/page.tsx">
        <div className="wrap">
          <h2 id="explore-title" className="col-text mb-8 text-headline text-text">
            Explore
          </h2>
          {/* Each link previews where it leads: a square in that section's accent (The Sheet). */}
          <ul className="col-text border-t border-border">
            {site.home.explore.map((item) => (
              <li key={item.href} className="border-b border-border">
                <TransitionLink
                  href={item.href}
                  className="group grid min-h-14 grid-cols-[12px_1fr] items-baseline gap-x-4 py-5"
                >
                  <span aria-hidden="true" data-section={item.theme} className="size-3 translate-y-px bg-accent" />
                  <span>
                    <span className="link-draw text-title text-text group-hover:bg-[length:100%_1px]">{item.label}</span>
                    <span className="mt-1 block text-body text-text-secondary">{item.text}</span>
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
