"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectLinkButton } from "@/components/projects/ProjectLinkButton";
import { Project } from "@/types/project";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
      whileHover={{ y: -3 }}
      className="group rounded-[28px] border border-white/[0.08] bg-[rgba(255,255,255,0.04)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          <span className="text-sm text-[#A1A1AA] shrink-0">{project.year}</span>
        </div>

        <p className="text-sm text-[#A1A1AA] mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-[#A1A1AA]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <ProjectLinkButton href={project.github} type="github" />
          <ProjectLinkButton href={project.demo} type="demo" />
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto"
          >
            Read Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
