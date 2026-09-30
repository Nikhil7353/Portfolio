import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Server,
  Database,
  Layers,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectMockup } from "@/components/ui/ProjectMockup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Nikhil Chavhan`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070709] text-white pt-24 pb-32 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <span className="font-mono text-xs text-sky-400">
            CASE STUDY #{project.number}
          </span>
        </div>

        {/* Project Header Title & Category */}
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-white/5 border border-white/10 px-3.5 py-1 font-mono text-xs text-slate-300">
            {project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Interactive Technical Mockup / Telemetry Dashboard */}
        <div className="my-12">
          <ProjectMockup projectId={project.id} />
        </div>

        {/* Technologies Grid */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
            TECHNOLOGIES EMPLOYED
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview & Problem vs Solution */}
        <div className="space-y-16">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-normal">01 /</span>
              <span>Overview</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {project.fullOverview}
            </p>
          </section>

          {/* Problem & Solution Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-3">
                <AlertCircle className="h-4 w-4" />
                <span>The Engineering Challenge</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Bottleneck</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="h-4 w-4" />
                <span>The Implemented Solution</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">System Architecture</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-normal">02 /</span>
              <span>Key Features & Capabilities</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-xl border border-white/5 bg-white/[0.015] p-4 flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Breakdown */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-normal">03 /</span>
              <span>Architecture Breakdown</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                  <Layers className="h-4 w-4" />
                  <span>FRONTEND TIER</span>
                </div>
                <div className="text-sm text-slate-300">{project.architecture.frontend}</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <Server className="h-4 w-4" />
                  <span>BACKEND SERVICES</span>
                </div>
                <div className="text-sm text-slate-300">{project.architecture.backend}</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                  <Database className="h-4 w-4" />
                  <span>DATABASE & CACHING</span>
                </div>
                <div className="text-sm text-slate-300">{project.architecture.database}</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <Cpu className="h-4 w-4" />
                  <span>DEPLOYMENT & ORCHESTRATION</span>
                </div>
                <div className="text-sm text-slate-300">{project.architecture.infrastructure}</div>
              </div>
            </div>
          </section>

          {/* Technical Challenges */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-normal">04 /</span>
              <span>Technical Challenges Overcome</span>
            </h2>

            <div className="space-y-4">
              {project.challenges.map((c, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-2"
                >
                  <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
                    CHALLENGE #{cIdx + 1}
                  </div>
                  <div className="text-base font-semibold text-white">{c.challenge}</div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light pt-2 border-t border-white/5">
                    <span className="text-sky-300 font-medium font-mono text-xs">RESOLUTION: </span>
                    {c.resolution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* My Contribution */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-normal">05 /</span>
              <span>My Contribution</span>
            </h2>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 space-y-4">
              {project.myContribution.map((contrib, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-sky-400 shrink-0 mt-2" />
                  <span className="leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-mono text-xs text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <Link
            href="/#contact"
            className="flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-colors"
          >
            <span>DISCUSS THIS PROJECT</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
