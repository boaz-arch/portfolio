import type { Metadata } from "next";
import { TransitionLink } from "@/components/nav/TransitionLink";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div data-section="home" className="pt-24 lg:pt-32">
      <div className="wrap">
        <div className="col-text">
          <h1 className="text-page-title text-text">Page not found</h1>
          <p className="mt-4 text-lead text-text-secondary">
            There is nothing at this address. It may have moved when the site was reorganised into pages.
          </p>
          <p className="mt-8 text-body">
            <TransitionLink href="/" className="text-text underline">
              Go to the home page
            </TransitionLink>{" "}
            or{" "}
            <TransitionLink href="/work" className="text-text underline">
              see all projects
            </TransitionLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
