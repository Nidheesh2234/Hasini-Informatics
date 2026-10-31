"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Sparkles, Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-32 text-center bg-[#04060c] text-white relative overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Floating 404 Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-6"
        >
          <Compass className="w-4 h-4 animate-spin" />
          <span>STATUS 404 • PACKET TRAJECTORY LOST</span>
        </motion.div>

        {/* Giant Kinetic 404 Display */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-8xl sm:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400 leading-none mb-4"
        >
          404
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
          You&apos;ve Ventured into Dark Matter.
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          Our autonomous AI agent swarms swept across 4.2 million memory nodes, but this route does not exist in production. The URL may have moved or been decommissioned.
        </p>

        {/* Playful Terminal Readout */}
        <div className="w-full p-4 rounded-2xl bg-[#080d1a] border border-white/[0.08] text-left font-mono text-xs text-slate-400 mb-8 space-y-1.5">
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>&gt; traceroute --destination current_url</span>
          </div>
          <div className="text-slate-500 pl-4">1: gateway.hasini.internal [0.4ms]</div>
          <div className="text-slate-500 pl-4">2: cluster-ingress-asia-south1 [1.2ms]</div>
          <div className="text-rose-400 pl-4">3: * * * Destination unreachable (NULL_PTR)</div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:opacity-95 transition-opacity"
          >
            <Home className="w-4 h-4" />
            <span>Return to Mission Control</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.1] hover:text-white hover:border-violet-500/50 transition-all"
          >
            <span>Report Broken Link</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
