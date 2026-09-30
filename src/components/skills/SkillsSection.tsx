"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Layers, Database, Wrench, Sparkles, Check } from "lucide-react";
import { skillsData } from "@/data/skills";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL TOOLS" },
    { id: "languages", label: "LANGUAGES" },
    { id: "frameworks", label: "FRAMEWORKS" },
    { id: "databases", label: "DATABASES" },
    { id: "tools", label: "DEV TOOLS" },
    { id: "ai", label: "AI & WORKFLOWS" },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      className="relative w-full border-t border-white/5 bg-[#070709] py-24 sm:py-36 px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-sky-400 mb-3">
              <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="tracking-widest uppercase">04 / TECHNICAL TOOLKIT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              TOOLS I BUILD WITH
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-slate-400 leading-relaxed">
            Languages, frameworks, databases, and AI tooling applied in production codebases and high-velocity workflows.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-slate-950 font-bold shadow-lg shadow-white/10"
                  : "border border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Skill Grid */}
        <div className="space-y-12">
          {filteredCategories.map((group) => (
            <div key={group.id} className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 border-b border-white/5 pb-2">
                <span className="tracking-widest text-slate-300 font-bold">{group.category}</span>
                <span className="hidden sm:inline text-[11px]">{group.description}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative flex flex-col justify-between rounded-xl border p-4 transition-all duration-300 ${
                      skill.highlight
                        ? "border-white/15 bg-white/[0.03] hover:border-sky-400/50 hover:bg-sky-950/20"
                        : "border-white/5 bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-400">
                          {skill.tag || "Core"}
                        </span>
                        {skill.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        )}
                      </div>
                      <div className="mt-3 text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </div>
                    </div>

                    <div className="mt-3 font-mono text-[10px] text-slate-400 flex items-center justify-between border-t border-white/5 pt-2">
                      <span>{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
