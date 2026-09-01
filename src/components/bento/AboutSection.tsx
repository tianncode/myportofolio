"use client";

import { CheckCircle2, Code2, MapPin, Wrench, Briefcase, ArrowUpRight } from "lucide-react";
import { IconType } from "react-icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IconGrid from "@/components/ui/IconGrid";
import PillGrid from "@/components/ui/PillGrid";
import {
  SiBootstrap,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";

const githubDots = [
  0, 1, 2, 0, 3, 1, 0, 2, 4, 0, 1, 0, 3, 2, 0, 1, 4, 0, 2, 1,
  0, 2, 1, 0, 3, 0, 1, 2,
];

const iconMap: Record<string, IconType> = {
  Laravel: SiLaravel,
  PHP: SiPhp,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Vue: SiVuedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
};

const toolIconMap: Record<string, IconType> = {
  Figma: SiFigma,
  Postman: SiPostman,
  Docker: SiDocker,
  Notion: SiNotion,
  "VS Code": VscVscode,
  GitHub: SiGithub,
  Trello: SiTrello,
  Slack: FaSlack,
};

const categories = ["Backend", "Frontend", "Database", "Styling", "Tools"]; 

export default function AboutSection() {
  const groupedSkills = categories
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);

  const githubUser = profile.github.split("/").filter(Boolean).at(-1) || "username";

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="space-y-10">
        <ScrollReveal delay={0}>
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white" />
              <span>{profile.location}</span>
            </div>

            <span className="text-[#A1A1AA]">·</span>

            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Open to Work</span>
            </div>

            <span className="text-[#A1A1AA]">·</span>

            <span>{profile.availableText}</span>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal delay={0.08}>
            <div className="border-t border-white/[0.06] pt-10">
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-white" />
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#A1A1AA]">
                  Tech Stack
                </h3>
              </div>

            <div className="space-y-8">
              {groupedSkills.map((group) => (
                <div key={group.category}>
                  <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#676B73]">
                    {group.category}
                  </p>
                  <IconGrid
                    items={group.items.map((skill) => ({
                      id: skill.name,
                      label: skill.name,
                      icon: (() => {
                        const Icon = iconMap[skill.name] ?? Code2;
                        return <Icon className="h-8 w-8" />;
                      })(),
                    }))}
                  />
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="border-t border-white/[0.06] pt-10">
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-white" />
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#A1A1AA]">
                  Skills
                </h3>
              </div>

              <IconGrid
                items={skills.map((skill) => ({
                  id: skill.name,
                  label: skill.name,
                  icon: (() => {
                    const Icon = iconMap[skill.name] ?? Code2;
                    return <Icon className="h-8 w-8" />;
                  })(),
                }))}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <div className="border-t border-white/[0.06] pt-10">
              <div className="mb-6 flex items-center gap-3">
                <Wrench className="h-5 w-5 text-white" />
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#A1A1AA]">
                  Tools
                </h3>
              </div>

              <IconGrid
                items={tools.map((tool) => ({
                  id: tool.name,
                  label: tool.name,
                  icon: (() => {
                    const Icon = toolIconMap[tool.name] ?? Wrench;
                    return <Icon className="h-8 w-8" />;
                  })(),
                }))}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <div className="border-t border-white/[0.06] pt-10">
              <div className="mb-6 flex items-center gap-3">
                <SiGithub className="h-5 w-5 text-white" />
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#A1A1AA]">
                  GitHub
                </h3>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-base font-medium text-white">@{githubUser}</p>
                  <p className="mt-1 text-sm text-[#A1A1AA]">Active on GitHub</p>
                </div>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#D4D4D8] transition-colors hover:text-white"
                >
                  Visit profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-5 flex max-w-[240px] flex-wrap gap-1.5">
                {githubDots.map((value, index) => (
                  <span
                    key={`${value}-${index}`}
                    className="h-2.5 w-2.5 rounded-[4px]"
                    style={{
                      backgroundColor:
                        value === 0
                          ? "rgba(255,255,255,0.08)"
                          : value === 1
                            ? "rgba(59,130,246,0.22)"
                            : value === 2
                              ? "rgba(59,130,246,0.42)"
                              : value === 3
                                ? "rgba(59,130,246,0.64)"
                                : "rgba(59,130,246,0.82)",
                    }}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.34}>
            <div className="border-t border-white/[0.06] pt-10">
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-white" />
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#A1A1AA]">
                  Services
                </h3>
              </div>

              <PillGrid items={services.map((service) => service.title)} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
