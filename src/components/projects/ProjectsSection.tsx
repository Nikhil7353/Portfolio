"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectMockup } from "../ui/ProjectMockup";

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktopPinned, setIsDesktopPinned] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 1024;

    if (prefersReducedMotion || !isDesktop) {
      setIsDesktopPinned(false);
      return;
    }

    setIsDesktopPinned(true);

    const ctx = gsap.context(() => {
      const pinTrigger = pinContainerRef.current;
      if (!pinTrigger) return;

      const totalProjects = projectsData.length;

      // Pin the showcase container for a controlled scroll distance
      ScrollTrigger.create({
        trigger: pinTrigger,
        start: "top top",
        end: `+=${totalProjects * 90}%`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate active project index based on scroll progress
          const rawIndex = Math.min(
            Math.floor(progress * totalProjects),
            totalProjects - 1
          );
          setActiveIndex(rawIndex);
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full border-t border-white/5 bg-[#070709] py-20 sm:py-28 px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
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

        {/* Desktop Pinned Scroll Showcase (Screens >= 1024px without reduced motion) */}
        {isDesktopPinned ? (
          <div ref={pinContainerRef} className="relative w-full">
            {/* Chapter Header / Scrubber Indicator */}
            <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-sky-400 font-bold tracking-wider">CHAPTER {projectsData[activeIndex].number}</span>
                <span className="text-slate-600">•</span>
                <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
                  {projectsData[activeIndex].title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {projectsData.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to project ${p.number}`}
                    className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                      idx === activeIndex
                        ? "w-8 bg-sky-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Pinned Card Stack Viewport */}
            <div
              ref={cardsContainerRef}
              className="relative min-h-[580px] w-full"
            >
              {projectsData.map((project, idx) => {
                const isActive = idx === activeIndex;
                const isPrevious = idx < activeIndex;

                return (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto z-10"
                        : isPrevious
                        ? "opacity-0 scale-[1.02] -translate-y-8 pointer-events-none z-0"
                        : "opacity-0 scale-[0.96] translate-y-12 pointer-events-none z-0"
                    }`}
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/[0.018] p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: Project Narrative */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                          <div>
                            {/* Meta & Category */}
                            <div className="flex items-center justify-between border-b border-white/5 pb-4 font-mono text-xs">
                              <span className="text-3xl font-black text-sky-400">
                                {project.number}
                              </span>
                              <span className="rounded-full bg-white/5 px-3 py-1 text-slate-300 border border-white/5">
                                {project.category}
                              </span>
                            </div>

                            {/* Title with smooth transition */}
                            <h3 className="mt-5 text-2xl lg:text-3xl font-bold tracking-tight text-white hover:text-sky-300 transition-colors">
                              <Link href={`/projects/${project.slug}`} data-cursor="pointer">
                                {project.title}
                              </Link>
                            </h3>

                            {/* Tagline */}
                            <p className="mt-2 text-xs font-mono text-sky-300/80">
                              {project.tagline}
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
                              {project.description}
                            </p>

                            {/* Tech Badges */}
                            <div className="mt-6 flex flex-wrap gap-2">
                              {project.technologies.slice(0, 6).map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <Link
                              href={`/projects/${project.slug}`}
                              data-cursor="pointer"
                              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs font-bold text-slate-950 transition-all hover:bg-sky-400"
                            >
                              <span>EXPLORE CASE STUDY</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>

                            <span className="font-mono text-[11px] text-slate-500">
                              {idx + 1} of {projectsData.length}
                            </span>
                          </div>
                        </div>

                        {/* Right Column: Telemetry Dashboard Mockup */}
                        <div className="lg:col-span-7">
                          <Link
                            href={`/projects/${project.slug}`}
                            data-cursor="view"
                            className="block overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
                          >
                            <ProjectMockup projectId={project.id} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Mobile & Reduced-Motion Layout (Clean stacked responsive cards) */
          <div className="space-y-16 sm:space-y-24">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-white/10 bg-white/[0.015] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6">
                  {/* Header Meta */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 font-mono text-xs">
                    <span className="text-2xl font-black text-sky-400">
                      {project.number}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-slate-400 text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Mockup */}
                  <div className="my-2">
                    <Link href={`/projects/${project.slug}`} data-cursor="view">
                      <ProjectMockup projectId={project.id} />
                    </Link>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-mono text-xs font-bold text-slate-950 hover:bg-sky-400 transition-colors"
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
