"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Layers, Database, Cpu, Code, Server, Bot } from "lucide-react";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const techFlow = [
    { label: "PYTHON", icon: Server, color: "text-amber-400" },
    { label: "DJANGO", icon: Layers, color: "text-emerald-400" },
    { label: "POSTGRESQL", icon: Database, color: "text-sky-400" },
    { label: "REACT", icon: Code, color: "text-cyan-400" },
    { label: "REST APIs", icon: Cpu, color: "text-indigo-400" },
    { label: "AI", icon: Bot, color: "text-purple-400" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full border-t border-white/5 bg-[#09090d] py-24 sm:py-32 px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-sky-400 mb-8 sm:mb-12">
          <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          <span className="tracking-widest uppercase">01 / ABOUT NIKHIL</span>
        </div>

        {/* Large Statement with Unmasking */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] max-w-5xl">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="block will-change-transform"
            >
              I BUILD DIGITAL PRODUCTS
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400"
            >
              FROM IDEA TO PRODUCTION.
            </motion.span>
          </span>
        </h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl"
        >
          I work across backend architecture, APIs, databases and modern frontend interfaces to
          build reliable and scalable web applications.
        </motion.p>

        {/* Progressive Animated Tech Flow Line */}
        <div className="my-16 sm:my-20 border-y border-white/10 py-8">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
            ENGINEERING PIPELINE & ARCHITECTURAL CONTINUUM
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {techFlow.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <React.Fragment key={tech.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wider text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <Icon className={`h-4 w-4 ${tech.color}`} />
                    <span>{tech.label}</span>
                  </motion.div>

                  {idx < techFlow.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.12 + 0.06 }}
                      className="hidden sm:inline-block text-slate-600"
                    >
                      <ArrowRight className="h-4 w-4 text-slate-500" />
                    </motion.span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-white/[0.015] p-6 sm:p-8"
          >
            <div className="font-mono text-xs text-sky-400 tracking-wider uppercase mb-3">
              Core Capabilities
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Full Stack Systems & Backend Resilience
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized in high-throughput Django REST APIs, relational PostgreSQL schemas with
              strict indexing and connection pooling, and interactive React frontends. From
              multi-tenant SaaS architectures to WebSocket-based live streams, I focus on code
              clarity, performance benchmarks, and production maintainability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/5 bg-white/[0.015] p-6 sm:p-8"
          >
            <div className="font-mono text-xs text-purple-400 tracking-wider uppercase mb-3">
              Modern Velocity
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              AI-Accelerated Engineering Workflows
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I leverage tools like Cursor, Claude, and GitHub Copilot to accelerate architectural
              exploration, automate unit testing, and eliminate boilerplates. This allows me to
              focus cognitive bandwidth on systems design, edge cases, data consistency, and
              real-world user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
