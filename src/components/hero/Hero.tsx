"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Code2, Database } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 0.7], [0, 80]);

  // Subtle dynamic particle/grid backdrop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for subtle technical constellation
    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.8,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.fillStyle = "rgba(56, 189, 248, 0.35)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-12 pt-28 pb-12"
    >
      {/* Interactive Background Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
      />

      {/* Subtle radial ambient gradients */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] sm:h-[700px] sm:w-[700px] rounded-full bg-gradient-to-tr from-sky-600/10 via-indigo-600/5 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[90px]" />

      {/* Top Meta Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 font-mono text-xs text-slate-400"
      >
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-sky-400" />
          <span className="tracking-widest">PORTFOLIO / 2026</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block">LOCATION: INDIA</span>
          <span className="text-slate-600">•</span>
          <span className="text-sky-300">FULL STACK & BACKEND SPECIALIST</span>
        </div>
      </motion.div>

      {/* Central Oversized Typography */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 my-auto py-12 max-w-6xl"
      >
        {/* Intro Subline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-slate-300 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
          <span className="tracking-wider uppercase">NIKHIL CHAVHAN</span>
        </motion.div>

        {/* Oversized Headline with Clip-Path Unmasking */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-white leading-[0.95]">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block will-change-transform"
            >
              SOFTWARE
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.95, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500"
            >
              DEVELOPER
            </motion.span>
          </span>
        </h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-xl text-slate-300 font-light leading-relaxed"
        >
          Building production-ready web applications, scalable APIs and AI-powered products.
        </motion.p>

        {/* Tech stack badge line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-slate-400"
        >
          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
            PYTHON
          </span>
          <span className="text-slate-600">/</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
            DJANGO
          </span>
          <span className="text-slate-600">/</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
            REACT
          </span>
          <span className="text-slate-600">/</span>
          <span className="rounded-md border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-sky-300">
            AI-ASSISTED DEV
          </span>
        </motion.div>

        {/* Magnetic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" data-cursor="pointer">
            <MagneticButton className="group rounded-full bg-white px-7 py-3.5 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-950 shadow-xl transition-all hover:bg-sky-400 hover:shadow-sky-500/20">
              <span className="flex items-center gap-2">
                VIEW PROJECTS
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </span>
            </MagneticButton>
          </a>

          <a href="#contact" data-cursor="pointer">
            <MagneticButton className="group rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 font-mono text-xs sm:text-sm font-semibold tracking-wider text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10">
              <span className="flex items-center gap-2">
                LET'S TALK
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sky-400" />
              </span>
            </MagneticButton>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Row / Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-xs text-slate-500"
      >
        <span className="hidden sm:inline">BACKEND ARCHITECTURE • REACT INTERFACES • LLM WORKFLOWS</span>
        <a
          href="#about"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-sky-400" />
        </a>
      </motion.div>
    </section>
  );
};
