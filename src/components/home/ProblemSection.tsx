"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#04060c] border-y border-white/[0.06] overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-4"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>THE INDUSTRY FRICTION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]"
          >
            Businesses Don&apos;t Fail from Lack of Ideas. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400">
              They Bleed from Scattered Tech.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Managing five disconnected tech partners drains your velocity, inflates costs, and leaves your mission-critical infrastructure fragile.
          </motion.p>
        </div>

        {/* The Transition Spark Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-950/40 via-purple-950/30 to-cyan-950/40 border border-violet-500/30 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              The Hasini Informatics Paradigm
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white">
              One Unified Architectural Backbone. Zero Finger-Pointing.
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              We eliminate the chaos by handling your entire digital lifecycle under one roof—from your brand identity and native mobile apps to autonomous agentic intelligence and 24/7 cloud reliability.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.1]">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono font-semibold text-slate-200">
              End-to-End Ownership
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
