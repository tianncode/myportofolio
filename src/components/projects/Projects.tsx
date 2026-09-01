"use client";

import ProjectsTrigger from "@/components/projects/ProjectsTrigger";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Projects"
          title="Selected Work"
          subtitle="A compact portfolio of the systems and products I’ve built across Full Stack work."
        />

        <ProjectsTrigger />
      </div>
    </section>
  );
}
