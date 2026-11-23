import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Atkinson_Hyperlegible_Mono, Atkinson_Hyperlegible_Next } from "next/font/google";
import { site } from "@/content/site";
import { themeScript } from "@/components/theme/theme-script";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InspectProvider } from "@/components/providers/InspectProvider";
import { RouteEffects } from "@/components/nav/RouteEffects";
import "./globals.css";

const sans = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson-next",
});

const mono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: Designs, builds and secures digital products`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: [{ color: "#0f141b" }],
  colorScheme: "dark light",
};

/** Navigation type → view-transition-class on the page group. Back/Forward carry no type: "auto-nav" (keyed by html[data-nav] in CSS). */
const PAGE_CLASSES = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  "to-home": "to-home",
  "to-design": "to-design",
  "to-development": "to-development",
  "to-systems": "to-systems",
  "to-security": "to-security",
  "to-about": "to-about",
  "to-contact": "to-contact",
  morph: "morph-page",
  "morph-back": "morph-page-back",
  "zoom-in": "zoom-in",
  "zoom-out": "zoom-out",
  "zoom-jump-in": "zoom-jump-in",
  "zoom-jump-out": "zoom-jump-out",
  lens: "none",
  default: "auto-nav",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={site.lang}
      data-theme="dark"
      data-section="home"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SkipLink />
        <InspectProvider>
          <Header />
          {/* The page group: slides, morphs and zooms are chosen by the navigation types (DESIGN.md: Page transitions). */}
          <ViewTransition name="page" update={PAGE_CLASSES} default="none">
            <div>
              <main id="main" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </ViewTransition>
          <RouteEffects />
        </InspectProvider>
      </body>
    </html>
  );
}
