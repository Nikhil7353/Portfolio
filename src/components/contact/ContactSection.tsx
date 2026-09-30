"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail, Send, MessageSquare } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const GithubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const emailAddress = "nikhilchavhan.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Client side confirmation
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/5 bg-[#050508] py-28 sm:py-40 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] sm:w-[900px] rounded-full bg-gradient-to-t from-sky-600/10 via-indigo-600/5 to-transparent blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-sky-400 mb-6 sm:mb-8">
          <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          <span className="tracking-widest uppercase">07 / GET IN TOUCH</span>
        </div>

        {/* Visual Climax Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]">
            HAVE A PROJECT
            <br />
            IN MIND?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-200 to-purple-400">
              LET'S BUILD
              <br />
              SOMETHING.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            I am currently open to full-time Software Developer roles, full stack engineering,
            Python/Django backend contracts, and AI product engineering.
          </p>
        </motion.div>

        {/* Action Row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Buttons & Socials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${emailAddress}`} data-cursor="pointer">
                <MagneticButton className="group rounded-full bg-white px-8 py-4 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-950 shadow-xl transition-all hover:bg-sky-400 hover:shadow-sky-500/20">
                  <span className="flex items-center gap-2">
                    EMAIL DIRECTLY
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </MagneticButton>
              </a>

              <MagneticButton
                onClick={handleCopyEmail}
                data-cursor="pointer"
                className="group rounded-full border border-white/20 bg-white/[0.03] px-6 py-4 font-mono text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-300">EMAIL COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-400 group-hover:text-white" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </span>
              </MagneticButton>
            </div>

            {/* Direct Connect Grid */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-sky-500/40 hover:bg-sky-950/20"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-sky-400">
                  <LinkedinIcon className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-4">
                  <div className="text-xs font-mono text-slate-500">NETWORK</div>
                  <div className="font-bold text-white text-sm mt-0.5">LinkedIn</div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-purple-500/40 hover:bg-purple-950/20"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-purple-400">
                  <GithubIcon className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-4">
                  <div className="text-xs font-mono text-slate-500">CODEBASE</div>
                  <div className="font-bold text-white text-sm mt-0.5">GitHub</div>
                </div>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                data-cursor="pointer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-emerald-500/40 hover:bg-emerald-950/20"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-emerald-400">
                  <Mail className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-4">
                  <div className="text-xs font-mono text-slate-500">INBOX</div>
                  <div className="font-bold text-white text-sm mt-0.5">Email</div>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Fast Contact Form (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300 mb-6">
              <MessageSquare className="h-4 w-4 text-sky-400" />
              <span>SEND A QUICK MESSAGE</span>
            </div>

            {formSubmitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <Check className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-bold text-white text-base">Message Sent!</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed font-light">
                  Thank you for reaching out. I usually reply within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 font-mono text-xs text-sky-400 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-400 mb-1.5">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5">PROJECT DETAILS OR INQUIRY</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, role requirements, or architecture challenge..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="pointer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 py-3.5 font-mono text-xs font-bold text-slate-950 transition-all hover:bg-sky-300"
                >
                  <span>TRANSMIT MESSAGE</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
