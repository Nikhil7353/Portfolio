"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Terminal, Layers, ArrowRight } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectMockup } from "../ui/ProjectMockup";

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full border-t border-white/5 bg-[#070709] py-24 sm:py-36 px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-sky-400 mb-3">
              <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="tracking-widest uppercase">02 / PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-slate-400 leading-relaxed">
            A selection of products, platforms and experiments I've worked on. Built with Python,
            Django, React, PostgreSQL and modern AI engineering.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-24 sm:space-y-36">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.015] p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Project Info (Left 5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Top Index & Category */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 font-mono text-xs">
              <span className="text-2xl font-black text-slate-600 group-hover:text-sky-400 transition-colors">
                {project.number}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-slate-400 border border-white/5">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              <Link href={`/projects/${project.slug}`} data-cursor="pointer">
                {project.title}
              </Link>
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-500">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
            <Link
              href={`/projects/${project.slug}`}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs font-bold text-slate-950 transition-all hover:bg-sky-400"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Project Interactive Preview / Mockup (Right 7 Cols) */}
        <div className="lg:col-span-7">
          <Link
            href={`/projects/${project.slug}`}
            data-cursor="view"
            className="block overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
          >
            <ProjectMockup projectId={project.id} />
          </Link>
        </div>
      </div>
    </div>
  );
};
