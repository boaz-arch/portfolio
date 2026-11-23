import type { Metadata } from "next";
import { site } from "@/content/site";
import { WorkList } from "@/components/work/WorkList";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects across design, development, systems and security, with filters, lenses and case studies.",
};

export default function WorkPage() {
  return (
    <div data-section="home" className="pt-24 lg:pt-32" data-inspect="WorkPage" data-source="app/work/page.tsx">
      <div className="wrap">
        <div className="col-text">
          <h1 className="text-page-title text-text">Work</h1>
          <p className="mt-4 text-lead text-text-secondary">
            Filters choose which projects you see. Lenses choose which side of each project you see: its design, its
            code, its systems or its security.
          </p>
        </div>
        <div className="col-full mt-12 grid grid-cols-subgrid lg:col-span-8">
          <WorkList projects={site.projects} />
        </div>
      </div>
    </div>
  );
}
