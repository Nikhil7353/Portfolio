"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2, Terminal } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-full px-5 py-3 transition-all duration-300 ${
          isScrolled
            ? "glass-panel bg-[#070709]/80 border-white/10 shadow-2xl backdrop-blur-xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm tracking-wider uppercase"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-colors group-hover:border-sky-400/50 group-hover:bg-sky-400/10">
              <Terminal className="h-3.5 w-3.5 text-sky-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-widest text-[13px]">
                NIKHIL CHAVHAN
              </span>
              <span className="text-[10px] text-slate-400 hidden sm:block tracking-wider">
                SOFTWARE DEVELOPER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status Badge & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 font-mono text-[11px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Roles</span>
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 font-mono text-xs font-bold text-slate-950 transition-all hover:bg-sky-400"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Full Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070709]/95 backdrop-blur-2xl p-6 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-sm font-bold tracking-widest text-white">
                NIKHIL CHAVHAN
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 my-auto font-mono">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="text-2xl font-bold tracking-wider text-slate-300 hover:text-sky-400"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Software Developer roles</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 py-3 font-mono text-sm font-bold text-slate-950"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
