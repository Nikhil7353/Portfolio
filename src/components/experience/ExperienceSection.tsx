"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { experienceData } from "@/data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full border-t border-white/5 bg-[#09090e] py-24 sm:py-36 px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs text-sky-400 mb-3">
            <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="tracking-widest uppercase">03 / CAREER JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            EXPERIENCE
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs sm:text-sm text-slate-400">
            Professional software development roles, backend engineering contracts, and foundational milestones.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-16">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#09090e] border border-white/20">
                {item.status === "current" ? (
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                )}
              </div>

              {/* Header Info */}
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    {item.status === "current" && (
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                        ACTIVE ROLE
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-base sm:text-lg font-medium text-sky-400">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-500" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {item.summary}
              </p>

              {/* Key Deliverables & Responsibilities */}
              <div className="mt-6 space-y-2.5">
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                    <ChevronRight className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
