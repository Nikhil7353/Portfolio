"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Globe, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#040406] py-12 px-4 sm:px-8 lg:px-12 font-mono text-xs">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider">
            <Terminal className="h-4 w-4 text-sky-400" />
            <span>NIKHIL CHAVHAN</span>
          </div>
          <div className="text-slate-400 mt-1">
            Software Developer • Python • Django • React • AI
          </div>
        </div>

        {/* Dynamic IST Clock & Location */}
        <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 text-slate-400">
          <Globe className="h-3.5 w-3.5 text-sky-400" />
          <span>INDIA (IST):</span>
          <span className="font-bold text-white tracking-wider">{istTime || "17:00:00 PM"}</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-6 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nikhilchavhan.dev@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-[11px]">
        <span>© 2026 Nikhil Chavhan. All rights reserved.</span>
        <span>Built with Next.js, TypeScript, Tailwind CSS & Lenis.</span>
      </div>
    </footer>
  );
};
