import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectLinkButton } from "@/components/projects/ProjectLinkButton";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Rizqia Akbar`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-[120px]">
        {/* Meta */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {project.role && (
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 block">
                Role
              </span>
              <p className="text-white font-medium">{project.role}</p>
            </div>
          )}
          {project.duration && (
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 block">
                Duration
              </span>
              <p className="text-white font-medium">{project.duration}</p>
            </div>
          )}
          <div>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 block">
              Year
            </span>
            <p className="text-white font-medium">{project.year}</p>
          </div>
        </div>

        {/* Overview */}
        {project.overview && (
          <div className="mb-16 max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-[#A1A1AA] leading-relaxed">{project.overview}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span className="text-[#A1A1AA]">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions?.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    <span className="text-[#A1A1AA]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-[16px] border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="text-[#A1A1AA] text-sm">{f}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lessons Learned */}
        {project.lessons && project.lessons.length > 0 && (
          <div className="mb-16 max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Lessons Learned
            </h2>
            <ul className="space-y-4">
              {project.lessons.map((l, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="text-[#A1A1AA]">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-white/[0.08]">
          <ProjectLinkButton href={project.github} type="github" />
          <ProjectLinkButton href={project.demo} type="demo" />
        </div>
      </section>
    </main>
  );
}
