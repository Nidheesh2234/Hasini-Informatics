import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, Zap, Layers, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found | HASINI INFORMATICS" };
  }
  return {
    title: `${service.title} | HASINI INFORMATICS Pvt. Ltd.`,
    description: service.promise,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Back to Services Navigation */}
      <div className="mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Practice Areas</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
          <Zap className="w-3.5 h-3.5" />
          <span>PRACTICE SPECIFICATION // {service.number}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
          {service.title}
        </h1>

        <div className="p-6 rounded-2xl bg-[#090e1e] border border-violet-500/30">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
            Core Engineering Promise
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white italic">
            &ldquo;{service.promise}&rdquo;
          </p>
        </div>
      </div>

      {/* Overview & Architecture Blueprint */}
      <div className="space-y-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Practice Overview &amp; Architectural Approach
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {service.detailedDescription}
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
            {service.metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
              >
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">
                  {m.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Capabilities */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Key Architectural Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.capabilities.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-sm text-slate-200 flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Technology Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Guaranteed Deliverables
            </h3>
            <ul className="space-y-2.5">
              {service.deliverables.map((del, dIdx) => (
                <li key={dIdx} className="text-sm text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Production Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-950/60 via-purple-900/40 to-cyan-950/60 border border-violet-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Implement {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with Dr. Suvarna Kumar &amp; Dr. Sandhya Devi regarding technical architecture and timelines.
            </p>
          </div>

          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] shrink-0"
          >
            <span>Initiate Discussion</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
