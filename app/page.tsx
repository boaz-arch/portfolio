import { site } from "@/content/site";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { ProjectList } from "@/components/work/ProjectList";
import { About, Contact, Process, SecurityWork, Systems, Toolbox } from "@/components/home/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        id="work"
        title={site.sections.work.title}
        intro={site.sections.work.intro}
        inspect="SelectedWork"
        source="components/work/ProjectList.tsx"
      >
        <ProjectList projects={site.projects} />
      </Section>
      <SecurityWork />
      <Systems />
      <Process />
      <Toolbox />
      <About />
      <Contact />
    </>
  );
}
