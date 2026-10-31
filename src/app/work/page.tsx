import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2, Check, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Selected Work & Case Studies | HASINI INFORMATICS Pvt. Ltd.",
  description:
    "Explore our flagship case studies across autonomous retail, real-time banking fraud defense, and clinical telemedicine platforms.",
};

export default function WorkPage() {
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

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>ENTERPRISE CASE STUDIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
          Architected for Scale. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-400">
            Proven in Production.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Deep-dive into how we engineered high-availability event pipelines, autonomous agent swarms, and 120Hz native mobile systems for global partners.
        </p>

        <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400">
          💡 <span className="text-cyan-300">CMS-Ready Schema:</span> All projects are loaded dynamically from <code className="text-pink-300">src/data/projects.ts</code>. You can easily add more projects anytime.
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="p-8 sm:p-12 rounded-3xl bg-[#080d1e] border border-white/[0.08] hover:border-violet-500/40 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-violet-600/20 text-violet-300 border border-violet-500/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Client: {project.client}
                  </span>
                  <span className="text-xs font-mono text-slate-500">• {project.year}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {project.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 italic font-medium">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right CTA Slot */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-4">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Comprehensive Case Study
                </div>
                <div className="text-sm text-slate-300">
                  Includes full architecture topology, code review highlights, and client testimonial.
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
