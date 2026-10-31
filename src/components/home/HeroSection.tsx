"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronDown, ShieldCheck } from "lucide-react";
import HeroCanvas from "@/components/hero/HeroCanvas";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 select-none">
      {/* Interactive 3D Particle Mesh Canvas */}
      <HeroCanvas />

      {/* Radial Spotlight Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-violet-600/20 via-pink-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Top Floating Pill / Monospace Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-8 hover:border-violet-500/40 transition-colors"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-medium tracking-wider text-slate-300 uppercase">
            Full-Spectrum Digital &amp; AI Engineering
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs font-mono text-pink-400">Pvt. Ltd.</span>
        </motion.div>

        {/* Giant Kinetic Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] uppercase max-w-5xl"
        >
          We Build <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
            What&apos;s Next.
          </span>
        </motion.h1>

        {/* Punchy Narrative Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 font-normal max-w-3xl leading-relaxed tracking-wide"
        >
          <span className="font-semibold text-white">Idea in. Impact out.</span> We design,
          engineer, run, and scale enterprise software, autonomous agentic AI, and brand-defining digital platforms end to end.
        </motion.p>

        {/* Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            data-cursor="cta"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white overflow-hidden shadow-[0_0_35px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 group-hover:scale-105 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-200" />
              Start a Project
            </span>
            <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#selected-work"
            data-cursor="project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-slate-200 bg-white/[0.04] border border-white/[0.12] backdrop-blur-md hover:bg-white/[0.08] hover:border-cyan-400/50 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span>See Selected Work</span>
          </Link>
        </motion.div>

        {/* Live Metrics Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl pt-8 border-t border-white/[0.08]"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-white">99.99%</span>
            <span className="text-xs font-mono text-slate-400 uppercase mt-1">Uptime SLA Guaranteed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">280+</span>
            <span className="text-xs font-mono text-slate-400 uppercase mt-1">Deployments Launched</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-pink-400">&lt; 14ms</span>
            <span className="text-xs font-mono text-slate-400 uppercase mt-1">Sub-Second Latency</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-violet-400">Zero</span>
            <span className="text-xs font-mono text-slate-400 uppercase mt-1">Vendor Bloat</span>
          </div>
        </motion.div>
      </div>

      {/* Smooth Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-slate-400" />
      </motion.div>
    </section>
  );
}
