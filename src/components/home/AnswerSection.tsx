"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Cpu, ShieldCheck, Rocket, RefreshCw } from "lucide-react";

const pillars = [
  {
    id: "build",
    title: "1. BUILD",
    tagline: "Architectural Genesis",
    description:
      "We write zero-compromise codebases from day one. Custom microservices, native 120Hz mobile apps, and distributed web applications designed to withstand explosive user adoption without architectural rework.",
    accent: "from-violet-500 to-indigo-600",
    metrics: "100k+ TPS Scalability",
    highlights: ["Custom Microservices", "Native iOS & Android", "Design Systems & 3D"],
  },
  {
    id: "run",
    title: "2. RUN",
    tagline: "24/7/365 Autonomous Guardianship",
    description:
      "We manage multi-cloud Kubernetes clusters, automate canary rollbacks, conduct 24/7 synthetic monitoring, and orchestrate Agentic AI workflows that keep your core operations humming flawlessly.",
    accent: "from-cyan-400 to-blue-600",
    metrics: "99.99% Guaranteed SLA",
    highlights: ["Zero-Downtime DevOps", "Agentic AI Swarms", "Disaster Recovery"],
  },
  {
    id: "grow",
    title: "3. GROW",
    tagline: "High-Intent Customer Acquisition",
    description:
      "We turn engineering excellence into revenue velocity. Technical programmatic SEO, high-intent performance campaigns, conversion rate engineering, and cinematic brand video productions.",
    accent: "from-pink-500 to-rose-600",
    metrics: "4.8x Average Client ROAS",
    highlights: ["Technical SEO Dominance", "Performance Marketing", "Viral Motion Video"],
  },
];

export default function AnswerSection() {
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const activePillar = pillars[activePillarIdx];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#04060d] border-t border-white/[0.08] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>THE UNIFIED ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            One Company. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
              Every Digital Need.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don&apos;t just build your product—we run its infrastructure and grow its market share. Seamless synergy across the entire digital lifecycle.
          </p>
        </div>

        {/* 3 Pillars Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {pillars.map((pillar, idx) => {
            const isActive = activePillarIdx === idx;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarIdx(idx)}
                className={`p-6 rounded-3xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? "bg-[#0c1224] border-violet-500/50 shadow-[0_15px_40px_rgba(139,92,246,0.25)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {pillar.metrics}
                  </span>
                </div>
                <div className="text-2xl font-black text-white">{pillar.title}</div>
                <div className="text-xs text-slate-400 mt-1">{pillar.tagline}</div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#080d1e] border border-white/[0.1] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
          >
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-pink-400">
                Pillar Deep Dive
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {activePillar.title} — {activePillar.tagline}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {activePillar.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activePillar.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-violet-600 via-pink-600 to-cyan-500 flex items-center justify-center text-white mb-6 shadow-[0_0_35px_rgba(139,92,246,0.5)]">
                <Rocket className="w-10 h-10" />
              </div>
              <div className="text-2xl font-mono font-bold text-white mb-1">
                {activePillar.metrics}
              </div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Target Benchmark
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
