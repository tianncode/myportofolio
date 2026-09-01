"use client";

import ListTrigger from "@/components/ui/ListTrigger";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ProjectLinkButton } from "@/components/projects/ProjectLinkButton";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export default function ProjectsTrigger() {
  return (
    <ScrollReveal delay={0.1}>
      <ListTrigger
        title="Projects"
        description="A concise overview of the products, dashboards, and systems I’ve built across web development work."
        items={projects}
        detailLabel="projects"
        renderItem={(project: Project) => (
          <div className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-medium text-white">{project.title}</h4>
                {project.year && (
                  <span className="text-xs text-[#A1A1AA]">{project.year}</span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ProjectLinkButton href={project.demo} type="demo" />
              <ProjectLinkButton href={project.github} type="github" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={`${project.slug}-${item}`}
                className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] text-[#D4D4D8]"
              >
                {item}
              </span>
            ))}
          </div>
          </div>
        )}
      />
    </ScrollReveal>
  );
}
