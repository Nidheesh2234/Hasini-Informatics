"use client";

import { motion } from "framer-motion";
import { statsData } from "@/data/stats";
import { Activity, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#04060d] border-t border-white/[0.08] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>ENTERPRISE METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Numbers That Speak in Production.
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Validated by global enterprise deployments and continuous high-availability SLAs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#080d1a] border border-white/[0.08] hover:border-violet-500/40 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-2">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-white/[0.06] pt-3 mt-2">
                {stat.description}
                {stat.isEditable && (
                  <span className="block text-[9px] font-mono text-cyan-500/80 mt-1">
                    [EDITABLE]
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
