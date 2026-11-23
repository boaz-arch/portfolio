"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { MenuIcon, CrossIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { InspectControl } from "@/components/inspect/InspectControl";
import { useInspect } from "@/components/providers/InspectProvider";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { heroControlVisible } = useInspect();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panelId = useId();

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

  // The compact Inspect mirror shows everywhere except while the home hero's control is on screen.
  const showCompactInspect = !isHome || !heroControlVisible;

  return (
    <header
      data-inspect="Header"
      data-source="components/layout/Header.tsx"
      className={[
        "sticky top-0 z-30 bg-bg",
        "border-b transition-colors duration-(--dur-fast) ease-out",
        scrolled || menuOpen ? "border-border" : "border-transparent",
      ].join(" ")}
    >
      <div className="wrap h-16 items-center">
        <div className="col-full flex items-center gap-4">
          <Link href="/" className="link-draw mr-auto text-subtitle text-text">
            {site.name}
            {isHome ? null : <span className="sr-only">, home</span>}
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:text-text"
                  >
                    <span className="link-draw">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {showCompactInspect ? (
            <div className="hidden lg:block">
              <InspectControl variant="compact" />
            </div>
          ) : null}

          <ThemeToggle />

          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-label text-text-secondary transition-colors duration-(--dur-fast) ease-out hover:bg-surface-1 hover:text-text lg:hidden"
          >
            {menuOpen ? <CrossIcon size={16} /> : <MenuIcon size={16} />}
            Menu
          </button>
        </div>
      </div>

      <div id={panelId} hidden={!menuOpen} className="border-t border-border bg-bg lg:hidden">
        <nav aria-label="Primary" className="wrap py-4">
          <ul className="col-full flex flex-col">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center text-subtitle text-text"
                >
                  <span className="link-draw">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {showCompactInspect ? (
            <div className="col-full mt-4">
              <InspectControl variant="compact" />
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
