import Link from "next/link";
import { ArrowUpRight, Check, Zap, ArrowLeft, ShieldCheck, Code2, Smartphone, CloudLightning, Boxes, Sparkles, Cpu, TrendingUp, Layers } from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Engineering Services & Capabilities | HASINI INFORMATICS Pvt. Ltd.",
  description:
    "Explore our full spectrum of enterprise capabilities: Web Maintenance, Custom Software, Native Mobile, Cloud & DevOps, Enterprise Platforms, Brand & Motion, Agentic AI, and Digital Marketing.",
};

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

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Back to Home Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>FULL SPECTRUM CAPABILITIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
          Engineering Specifications &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
            Digital Practice Areas.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          From micro-second low-latency distributed systems to autonomous agentic intelligence, explore our comprehensive enterprise software practices.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="space-y-8">
        {servicesData.map((service) => {
          const Icon = iconMap[service.iconName] || Layers;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="p-8 sm:p-12 rounded-3xl bg-[#080d1e] border border-white/[0.08] hover:border-violet-500/40 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left 4 Cols: Title, Category, Icon */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>{service.number}</span>
                    <span>•</span>
                    <span>{service.category}</span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-slate-300 italic">
                    &ldquo;{service.promise}&rdquo;
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold"
                    >
                      <span>Read Detailed Spec</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right 8 Cols: Overview, Capabilities, Metrics */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Capabilities List */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                      Core Technical Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-200 flex items-start gap-2.5"
                        >
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Technologies */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                        Deliverable Milestones
                      </div>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Talk to Us CTA */}
                  <div className="pt-4 flex items-center justify-end">
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-opacity"
                    >
                      <span>Engage Our Team</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
