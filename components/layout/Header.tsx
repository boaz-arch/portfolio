"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { MenuIcon, CrossIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { InspectControl } from "@/components/inspect/InspectControl";
import { useInspect } from "@/components/providers/InspectProvider";
import { TransitionLink } from "@/components/nav/TransitionLink";
import { NAV, currentNav, isCaseStudy, themeFor } from "@/lib/routes";

/**
 * Persistent chrome. view-transition-name: site-header with no animation,
 * so it never re-animates between pages. The active indicator has its own
 * name (nav-indicator) and slides to the new item.
 */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { heroControlVisible } = useInspect();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const active = currentNav(pathname);
  const theme = themeFor(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const showCompactInspect = !isHome || !heroControlVisible;
  const ariaCurrent = (href: string) =>
    active === href ? (isCaseStudy(pathname) ? ("true" as const) : ("page" as const)) : undefined;

  return (
    <header
      data-inspect="Header"
      data-source="components/layout/Header.tsx"
      className={[
        "site-header sticky top-0 z-30 bg-bg",
        "border-b transition-colors duration-(--dur-fast) ease-out",
        scrolled || menuOpen ? "border-border" : "border-transparent",
      ].join(" ")}
    >
      <div className="wrap h-16 items-center">
        <div className="col-full flex items-center gap-4">
          <TransitionLink href="/" className="mr-auto text-subtitle text-text">
            {site.name}
            {isHome ? null : <span className="sr-only">, home</span>}
          </TransitionLink>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href} className="relative">
                  <TransitionLink
                    href={item.href}
                    aria-current={ariaCurrent(item.href)}
                    data-section={isHome ? themeFor(item.href) : undefined}
                    className={[
                      "inline-flex min-h-11 items-center px-3 text-label transition-colors duration-(--dur-fast) ease-out",
                      // On Home each item previews its world: its section accent on hover and focus.
                      isHome ? "hover:text-accent focus-visible:text-accent" : "hover:text-text",
                      active === item.href ? "text-text" : "text-text-secondary",
                    ].join(" ")}
                  >
                    {item.label}
                  </TransitionLink>
                  {active === item.href ? (
                    <span aria-hidden="true" data-section={theme} className="nav-indicator" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          {showCompactInspect ? (
            <div className="js-only hidden lg:block">
              <InspectControl variant="compact" />
            </div>
          ) : null}

          <div className="js-only">
            <ThemeToggle />
          </div>

          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => setMenuOpen((o) => !o)}
            className="js-only inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text lg:hidden"
          >
            {menuOpen ? <CrossIcon size={16} /> : <MenuIcon size={16} />}
            Menu
          </button>
        </div>
      </div>

      {/* Closed only once JavaScript runs (html.js); without it the panel is always shown below lg. */}
      <div id={panelId} className={`menu-panel border-t border-border bg-bg lg:hidden ${menuOpen ? "" : "is-closed"}`}>
        <nav aria-label="Primary" className="wrap py-4">
          <ul className="col-full flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <TransitionLink
                  href={item.href}
                  aria-current={ariaCurrent(item.href)}
                  data-section={isHome ? themeFor(item.href) : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    isHome ? "hover:text-accent focus-visible:text-accent" : "",
                    "flex min-h-11 items-center text-subtitle",
                    active === item.href ? "text-text underline decoration-2 underline-offset-8" : "text-text-secondary",
                  ].join(" ")}
                >
                  {item.label}
                </TransitionLink>
              </li>
            ))}
          </ul>
          {showCompactInspect ? (
            <div className="js-only col-full mt-4">
              <InspectControl variant="compact" />
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
