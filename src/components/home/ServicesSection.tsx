"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Smartphone,
  CloudLightning,
  Boxes,
  Sparkles,
  Cpu,
  TrendingUp,
  Layers,
  ArrowUpRight,
  Check,
  X,
  MessageSquare,
  Zap,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

const iconMap: Record<string, any> = {
  ShieldCheck,
  Code2,
  Smartphone,
  CloudLightning,
  Boxes,
  Sparkles,
  Cpu,
  TrendingUp,
  Layers,
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070e] overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>END-TO-END CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
              Engineered for Scale. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
                Built to Dominate.
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Every service is delivered with battle-hardened architectural maturity, transparent communication, and obsessive attention to performance.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold text-slate-200 bg-white/[0.04] border border-white/[0.1] hover:border-violet-500/50 hover:text-white transition-all"
            >
              <span>Explore All Specifications</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Layers;
            const isClosing = service.isClosingCard;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedService(service)}
                className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 flex flex-col justify-between ${isClosing
                    ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-violet-950/60 via-purple-900/40 to-cyan-950/60 border-2 border-violet-500/40 shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
                    : "bg-[#090d1a]/85 border border-white/[0.08] hover:border-violet-500/50 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]"
                  }`}
              >
                {/* Spotlight hover halo */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Service Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {service.number} // {service.category}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-violet-600 group-hover:to-cyan-500 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Promise */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-cyan-300 transition-all">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-6 italic leading-relaxed">
                    &ldquo;{service.promise}&rdquo;
                  </p>

                  {/* Bullet Capabilities */}
                  <ul className="space-y-2.5 mb-8">
                    {service.capabilities.slice(0, 3).map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Expand Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400">
                    Talk to us &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Detail Modal / Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-3xl bg-[#090e1d] border border-violet-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-white"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Meta */}
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>{selectedService.number}</span>
                <span>•</span>
                <span>{selectedService.category}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white">
                {selectedService.title}
              </h3>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
                <span className="text-xs font-mono text-pink-400 uppercase tracking-wider block mb-1">
                  Core Promise
                </span>
                <p className="text-sm sm:text-base font-semibold text-slate-200 italic">
                  &ldquo;{selectedService.promise}&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {selectedService.detailedDescription}
              </p>

              {/* Capabilities Grid */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                  Key Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-white/[0.08]">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Target Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    SLA &amp; Metric Benchmarks
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className="text-base font-mono font-bold text-cyan-300">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/services/${selectedService.slug}`}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-white hover:bg-white/[0.1] text-center transition-all"
                  >
                    Dedicated Page
                  </Link>
                  <Link
                    href={`/contact?service=${selectedService.slug}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] cursor-pointer"
                  >
                    <span>Talk to Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
