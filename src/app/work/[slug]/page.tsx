import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote, Layers, Sparkles, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found | HASINI INFORMATICS" };
  }
  return {
    title: `${project.title} Case Study | HASINI INFORMATICS Pvt. Ltd.`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Back to Work Navigation */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-violet-600/20 text-violet-300 border border-violet-500/30">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Client: {project.client}
          </span>
          <span className="text-xs font-mono text-slate-500">• {project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
          {project.title}
        </h1>

        <div className="p-6 rounded-2xl bg-[#090e1e] border border-violet-500/30">
          <p className="text-lg sm:text-xl font-semibold text-white italic">
            &ldquo;{project.tagline}&rdquo;
          </p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {project.metrics.map((m, mIdx) => (
          <div
            key={mIdx}
            className="p-5 rounded-2xl bg-[#080d1a] border border-white/[0.08] text-center"
          >
            <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">
              {m.value}
            </div>
            <div className="text-xs text-slate-300 mt-1">{m.label}</div>
            {m.change && (
              <div className="text-[11px] font-mono text-emerald-400 mt-1">
                {m.change}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Deep Dive Problem & Solution */}
      <div className="space-y-8 mb-12">
        {/* The Problem */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-rose-400">
            The Business Imperative &amp; Bottleneck
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">The Challenge</h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* The Solution */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Our Architectural Intervention
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">The Solution</h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Key Architectural Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.architectureHighlights.map((hi, hIdx) => (
              <div
                key={hIdx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-sm text-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{hi}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot / Mockup Placeholder Slot */}
        <div className="p-8 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Production Interface &amp; Telemetry
          </div>
          <div className="aspect-[16/9] w-full rounded-2xl bg-[#0b1022] border border-white/[0.08] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              <Layers className="w-8 h-8" />
            </div>
            <div className="text-lg font-bold text-white mb-1">
              [EDIT: REPLACE WITH HIGH-RES SYSTEM SCREENSHOT OR DASHBOARD MOCKUP]
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-md">
              Slot mapped to {project.coverImage}. Replace image in public/images/projects/ anytime.
            </p>
          </div>
        </div>

        {/* Client Testimonial */}
        {project.clientQuote && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-950/40 via-purple-950/30 to-cyan-950/40 border border-violet-500/30 space-y-4">
            <Quote className="w-8 h-8 text-violet-400" />
            <p className="text-lg sm:text-xl italic text-slate-200 leading-relaxed font-serif">
              &ldquo;{project.clientQuote.quote}&rdquo;
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400">
              <span className="font-bold text-white">{project.clientQuote.author}</span> —{" "}
              {project.clientQuote.role}, {project.clientQuote.company}
            </div>
          </div>
        )}

        {/* Tech Stack Breakdown */}
        <div className="p-8 rounded-3xl bg-[#080d1a] border border-white/[0.08] space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Engineered With
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-950/60 via-purple-900/40 to-cyan-950/60 border border-violet-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need a Similar Breakthrough?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule an executive consultation directly with Dr. Suvarna Kumar &amp; Dr. Sandhya Devi.
            </p>
          </div>

          <Link
            href={`/contact?project=${project.slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] shrink-0"
          >
            <span>Consult Our Leadership</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
