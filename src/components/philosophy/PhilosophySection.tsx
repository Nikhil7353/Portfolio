"use client";

import React from "react";
import { motion } from "framer-motion";
import { philosophyData } from "@/data/philosophy";
import { CheckCircle2 } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section className="relative w-full border-t border-white/5 bg-[#070709] py-24 sm:py-36 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs text-sky-400 mb-3">
            <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="tracking-widest uppercase">06 / ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            HOW I BUILD
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs sm:text-sm text-slate-400">
            Four guiding rules that govern how I architect, write, review, and ship software.
          </p>
        </div>

        {/* 4 Sequential Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {philosophyData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.015] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-slate-600 group-hover:text-sky-400 transition-colors">
                    {item.number}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
                    PRINCIPLE
                  </span>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  {item.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/5 pt-4 space-y-2">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
