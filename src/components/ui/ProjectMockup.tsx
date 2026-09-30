"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Activity,
  CheckCircle2,
  Cpu,
  GitCommit,
  GitPullRequest,
  Search,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Send,
  Zap,
} from "lucide-react";

interface ProjectMockupProps {
  projectId: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId, className = "" }) => {
  if (projectId === "trade-advisory") {
    return <TradeAdvisoryMockup className={className} />;
  }
  if (projectId === "ai-support") {
    return <AiSupportMockup className={className} />;
  }
  if (projectId === "spice-classification") {
    return <SpiceClassificationMockup className={className} />;
  }
  if (projectId === "repo-analytics") {
    return <RepoAnalyticsMockup className={className} />;
  }

  return (
    <div className={`aspect-video w-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 ${className}`}>
      <div className="flex h-full items-center justify-center text-slate-500 font-mono text-sm">
        Production Engineering Preview
      </div>
    </div>
  );
};

// 1. Verified Trade Advisory Mockup
const TradeAdvisoryMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-[#090b10] p-4 sm:p-6 shadow-2xl transition-all duration-500 hover:border-sky-500/40 ${className}`}
    >
      {/* Top Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400">
            LIVE SIGNAL FEED • WEBSOCKET ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="rounded bg-sky-950/60 px-2 py-0.5 text-sky-300 border border-sky-800/40">
            Tenant: AlphaAdvisory_IN
          </span>
          <span className="hidden sm:inline text-slate-500">Latency: 14ms</span>
        </div>
      </div>

      {/* Main Signal Display */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Signal Card */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  BUY / LONG
                </span>
                <span className="text-base font-bold text-white tracking-wide">NIFTY 24,900 CE</span>
                <span className="rounded bg-slate-800 px-1.5 py-0.2 font-mono text-[10px] text-slate-300">
                  OPTIONS
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Breakout retest confirmed on 5m chart • Volume surge + RSI divergence
              </p>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs text-slate-400">Entry Price</div>
              <div className="font-mono text-base font-bold text-white">₹142.50</div>
            </div>
          </div>

          {/* Targets & Stoploss Grid */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/5 pt-3 font-mono text-xs">
            <div className="rounded-lg bg-emerald-950/20 border border-emerald-500/20 p-2 text-center">
              <div className="text-[10px] text-slate-400">TARGET 1</div>
              <div className="font-bold text-emerald-400">₹168.00</div>
              <div className="text-[9px] text-emerald-500/70">+17.8%</div>
            </div>
            <div className="rounded-lg bg-emerald-950/20 border border-emerald-500/20 p-2 text-center">
              <div className="text-[10px] text-slate-400">TARGET 2</div>
              <div className="font-bold text-emerald-400">₹195.00</div>
              <div className="text-[9px] text-emerald-500/70">+36.8%</div>
            </div>
            <div className="rounded-lg bg-rose-950/20 border border-rose-500/20 p-2 text-center">
              <div className="text-[10px] text-slate-400">STOP LOSS</div>
              <div className="font-bold text-rose-400">₹128.00</div>
              <div className="text-[9px] text-rose-500/70">-10.1%</div>
            </div>
          </div>

          {/* SVG Price Chart Sparkline */}
          <div className="mt-4 h-24 w-full">
            <svg className="h-full w-full overflow-visible" viewBox="0 0 300 80">
              <defs>
                <linearGradient id="tradeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 55 Q 30 65, 60 50 T 120 40 T 180 30 T 240 18 T 300 12 L 300 80 L 0 80 Z"
                fill="url(#tradeGrad)"
              />
              <path
                d="M 0 55 Q 30 65, 60 50 T 120 40 T 180 30 T 240 18 T 300 12"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="300" cy="12" r="4" fill="#38bdf8" className="animate-ping" />
              <circle cx="300" cy="12" r="3" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* Omnichannel Dispatch Status */}
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Broadcast Dispatch
            </div>
            <div className="mt-3 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Telegram Subscribers</span>
                <span className="font-mono text-emerald-400 font-bold">2,410 / 2,410</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-full bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-300">WhatsApp Broadcast</span>
                <span className="font-mono text-emerald-400 font-bold">1,850 / 1,850</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-full bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-300">Push App Notifications</span>
                <span className="font-mono text-emerald-400 font-bold">5,120 / 5,120</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-full bg-emerald-400" />
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-black/40 p-2.5 font-mono text-[10px] text-slate-400 border border-white/5">
            <div className="flex items-center gap-1.5 text-sky-400">
              <Zap className="h-3 w-3" />
              <span>Celery Worker Queue</span>
            </div>
            <p className="mt-1 text-slate-500">Throughput: 1,420 msgs/sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. AI Customer Support Mockup
const AiSupportMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0a0812] p-4 sm:p-6 shadow-2xl transition-all duration-500 hover:border-purple-500/40 ${className}`}
    >
      {/* Top Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-purple-300">
            RAG INFERENCE ENGINE • PGVECTOR EMBEDDINGS
          </span>
        </div>
        <span className="rounded bg-purple-950/50 px-2 py-0.5 font-mono text-[11px] text-purple-300 border border-purple-800/40">
          Confidence: 99.1%
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Chat Stream (Left 3 cols) */}
        <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-3">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-purple-600/30 border border-purple-500/30 px-3.5 py-2 text-xs text-white">
              Can I upgrade our enterprise subscription mid-cycle, and how is the pro-rated billing handled?
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-900 border border-white/10 p-3.5 text-xs text-slate-200">
              <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-mono text-purple-400">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span>Grounded with 2 Document Sources</span>
              </div>
              <p className="leading-relaxed">
                Yes, you can upgrade your plan at any time. Your billing will be{" "}
                <span className="text-purple-300 font-medium">automatically pro-rated</span> for the remainder of
                the billing cycle. The unused credit from your current tier will offset your initial invoice.
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-[10px] text-slate-400 border-t border-white/5 pt-2">
                <span className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-slate-300 border border-white/5">
                  doc_ref: billing_policies_v2.pdf [p.14]
                </span>
              </div>
            </div>
          </div>

          {/* Typing / Status */}
          <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Ticket #4928 generated • Sentiment: Positive (0.88)</span>
          </div>
        </div>

        {/* Vector Retrieval Inspector (Right 2 cols) */}
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-2">
          <div>
            <div className="font-mono text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Search className="h-3.5 w-3.5 text-purple-400" />
              <span>Vector Similarity (Top-K)</span>
            </div>

            <div className="mt-3 space-y-2 font-mono text-[10px]">
              <div className="rounded-lg bg-black/40 border border-purple-500/30 p-2">
                <div className="flex justify-between text-purple-300">
                  <span>Chunk #1084</span>
                  <span className="font-bold text-emerald-400">Cosine: 0.942</span>
                </div>
                <div className="mt-1 text-slate-400 truncate">
                  "mid_cycle_upgrade_proration_rules_and_tax"
                </div>
              </div>

              <div className="rounded-lg bg-black/40 border border-white/5 p-2">
                <div className="flex justify-between text-slate-400">
                  <span>Chunk #0921</span>
                  <span className="text-slate-300">Cosine: 0.887</span>
                </div>
                <div className="mt-1 text-slate-500 truncate">
                  "invoice_adjustment_credit_notes_overview"
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-lg border border-purple-500/20 bg-purple-950/20 p-2.5 font-mono text-[10px] text-purple-300">
            <div className="flex items-center justify-between">
              <span>Embedding Engine</span>
              <span className="text-slate-400">text-embed-3-large</span>
            </div>
            <div className="flex items-center justify-between mt-1 text-slate-400">
              <span>Vector Dimensions</span>
              <span>1536 (pgvector)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Indian Spice Classification Mockup
const SpiceClassificationMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#080d0a] p-4 sm:p-6 shadow-2xl transition-all duration-500 hover:border-emerald-500/40 ${className}`}
    >
      {/* Top Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400">
            COMPUTER VISION INFERENCE • CONVNET CLASSIFIER
          </span>
        </div>
        <span className="rounded bg-emerald-950/60 px-2 py-0.5 font-mono text-[11px] text-emerald-300 border border-emerald-800/40">
          Inference: 38ms (ONNX CPU)
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left: Visual Inspection Crosshair */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/60 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
            <span>INPUT: RGB_CAMERA_FRAME_01.JPG</span>
            <span className="text-emerald-400 font-bold">CONFIDENCE: 98.4%</span>
          </div>

          {/* Bounding Box Visual Simulation */}
          <div className="relative my-auto flex h-36 w-full items-center justify-center">
            {/* Outer Target Box */}
            <div className="relative flex h-28 w-44 items-center justify-center rounded border border-dashed border-emerald-400/80 bg-emerald-500/[0.05]">
              {/* Corner Indicators */}
              <div className="absolute -top-1 -left-1 h-2.5 w-2.5 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-emerald-400" />

              {/* Tag Pill */}
              <div className="absolute -top-3 left-2 rounded bg-emerald-500 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-950">
                Green Cardamom [98.4%]
              </div>

              {/* Spice Graphic Representation */}
              <div className="text-center font-mono text-xs text-emerald-300/80">
                <span className="text-2xl">🌿</span>
                <div className="mt-1 text-[11px] text-slate-300">Elettaria cardamomum</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between font-mono text-[10px] text-slate-500">
            <span>DIMENSIONS: 512x512px</span>
            <span>AUGMENTATION: FLIP_H + ROT_15</span>
          </div>
        </div>

        {/* Right: Probability Breakdown */}
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <div>
            <div className="font-mono text-xs font-semibold text-slate-300">
              Class Probability Distribution
            </div>

            <div className="mt-3 space-y-2.5 font-mono text-xs">
              {/* Cardamom */}
              <div>
                <div className="flex justify-between text-emerald-300">
                  <span>Green Cardamom</span>
                  <span className="font-bold">98.4%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[98.4%] bg-emerald-400 rounded-full" />
                </div>
              </div>

              {/* Clove */}
              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Clove</span>
                  <span>1.1%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[1.1%] bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Cinnamon */}
              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Cinnamon</span>
                  <span>0.3%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[0.3%] bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Black Pepper */}
              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Black Pepper</span>
                  <span>0.1%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[0.1%] bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Coriander */}
              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Coriander</span>
                  <span>0.1%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[0.1%] bg-slate-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 p-2 font-mono text-[10px] text-emerald-400">
            Verified Botanical Attributes: High oil content, Grade A export candidate.
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Repository Analytics Mockup
const RepoAnalyticsMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-[#0c0905] p-4 sm:p-6 shadow-2xl transition-all duration-500 hover:border-amber-500/40 ${className}`}
    >
      {/* Top Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <GitPullRequest className="h-4 w-4 text-amber-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-amber-400">
            ENGINEERING TELEMETRY • GIT REPO EVALUATOR
          </span>
        </div>
        <span className="rounded bg-amber-950/60 px-2 py-0.5 font-mono text-[11px] text-amber-300 border border-amber-800/40">
          Branch: main • 1,480 Commits Analyzed
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Velocity & Heatmap (Left 2 cols) */}
        <div className="space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-2">
          {/* Commit Velocity Graph */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-2">
              <span>Sprint Commit Velocity (Last 14 Days)</span>
              <span className="text-emerald-400 font-bold">+18,420 LOC / -4,110 LOC</span>
            </div>
            {/* SVG Bars */}
            <div className="h-20 w-full flex items-end justify-between gap-1.5 pt-2">
              {[42, 65, 80, 50, 95, 110, 85, 120, 90, 70, 105, 130, 95, 115].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                  <div
                    className="w-full rounded-t bg-amber-400/80 transition-all duration-300 group-hover/bar:bg-amber-300"
                    style={{ height: `${(val / 140) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Activity Punch Card Heatmap */}
          <div className="border-t border-white/5 pt-3">
            <div className="text-[11px] font-mono text-slate-400 mb-2">
              Weekly Contributor Cadence (Mon - Sun)
            </div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 36 }).map((_, idx) => {
                const opacity = [0.15, 0.35, 0.65, 0.9, 0.45, 0.8][idx % 6];
                return (
                  <div
                    key={idx}
                    className="aspect-square rounded-sm bg-amber-400 transition-colors"
                    style={{ opacity }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Health Evaluation & Summary (Right 1 col) */}
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <div>
            <div className="font-mono text-xs font-semibold text-slate-300">
              AI Codebase Diagnostics
            </div>

            <div className="mt-3 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-slate-400">PR Merge Velocity</span>
                <span className="font-bold text-emerald-400">4.2 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-slate-400">Code Churn Ratio</span>
                <span className="font-bold text-amber-300">11.8%</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-slate-400">Cyclomatic Complexity</span>
                <span className="font-bold text-emerald-400">Low (B+)</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-400">Test Coverage</span>
                <span className="font-bold text-emerald-400">84.2%</span>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-lg bg-amber-950/20 border border-amber-500/20 p-2.5 font-mono text-[10px] text-amber-200">
            Automated insight: High architectural stability observed. Modularity in service layers prevents regression cascades.
          </div>
        </div>
      </div>
    </div>
  );
};
