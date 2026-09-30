"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Bot, Cpu, Layers, GitBranch, ShieldCheck, ArrowRight } from "lucide-react";

export const AiSection: React.FC = () => {
  const tools = [
    {
      name: "Cursor",
      role: "IDE Acceleration",
      desc: "Fast context-aware refactoring, code navigation, and multi-file code editing.",
      icon: Terminal,
      color: "border-sky-500/30 text-sky-400",
    },
    {
      name: "Claude",
      role: "Architectural Reasoning",
      desc: "Deep analysis of system trade-offs, edge-case planning, and rigorous API design critique.",
      icon: Bot,
      color: "border-purple-500/30 text-purple-400",
    },
    {
      name: "GitHub Copilot",
      role: "Pair Implementation",
      desc: "Instant boilerplate generation, inline pattern completions, and unit test generation.",
      icon: GitBranch,
      color: "border-emerald-500/30 text-emerald-400",
    },
    {
      name: "LLM APIs & RAG",
      role: "Intelligent Systems",
      desc: "Building production RAG pipelines, vector search, and grounded conversational agents.",
      icon: Cpu,
      color: "border-amber-500/30 text-amber-400",
    },
  ];

  return (
    <section className="relative w-full border-t border-white/5 bg-[#08080c] py-24 sm:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-purple-400 mb-4">
          <Sparkles className="h-4 w-4" />
          <span className="tracking-widest uppercase">05 / ENGINEERING ACCELERATION</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white max-w-4xl">
          AI × SOFTWARE DEVELOPMENT
        </h2>

        {/* Core Statement */}
        <p className="mt-6 text-lg sm:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl">
          "I use AI-assisted development workflows to accelerate exploration, implementation,
          debugging and iteration while keeping engineering decisions and code quality in focus."
        </p>

        {/* Architecture Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-slate-500">
                  <span>Production Workflow Tested</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Human-in-the-Loop Clarification Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950/20 via-black to-sky-950/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-sky-400 shrink-0 mt-1" />
            <div>
              <div className="font-bold text-white text-base">
                Engineering Discipline & Code Accountability
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-light">
                AI augments velocity—it does not replace foundational understanding. Every line of
                backend logic, database migration, schema constraint, and security rule is
                verified, reviewed, and reasoned through before shipping to production.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-sky-400 shrink-0 flex items-center gap-1.5">
            <span>HIGH VELOCITY</span>
            <span>•</span>
            <span>HIGH RIGOR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
