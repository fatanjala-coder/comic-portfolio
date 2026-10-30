import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { portfolio } from "@/data/portfolio";

export default function HomePage() {
  const { sections } = portfolio;

  return (
    <>
      <Hero />
      {sections.about ? <About /> : null}
      {sections.skills ? <Skills /> : null}
      {sections.projects ? <ProjectsSection /> : null}
      {sections.experience ? <Experience /> : null}
      {sections.contact ? <Contact /> : null}
    </>
  );
}
