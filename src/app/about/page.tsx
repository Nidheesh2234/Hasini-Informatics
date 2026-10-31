import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, Quote, ShieldCheck, Sparkles, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "About & Leadership | HASINI INFORMATICS Pvt. Ltd.",
  description:
    "Meet DR. G. Suvarna Kumar (Founder & CEO) and DR. G. Sandhya Devi (Managing Director), the visionary architects leading HASINI INFORMATICS Pvt. Ltd.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ORIGIN &amp; EXECUTIVE STEWARDSHIP</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
          Architectural Rigor. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
            Uncompromising Vision.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Founded in {siteConfig.foundingYear}, HASINI INFORMATICS Pvt. Ltd. was built on a singular conviction: enterprise software must be as reliable as critical infrastructure and as fluid as consumer technology.
        </p>
      </div>

      {/* Deep Dive Leadership Section */}
      <div className="space-y-16 mb-20">
        {siteConfig.leadership.map((leader, index) => (
          <div
            key={leader.name}
            className="p-8 sm:p-12 rounded-3xl bg-[#080d1e] border border-white/[0.08] shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Leader Photo Slot & Quick Info (4 cols) */}
              <div className="lg:col-span-4 space-y-6 text-center sm:text-left">
                <div className="relative w-36 h-36 mx-auto sm:mx-0 rounded-3xl p-1 bg-gradient-to-tr from-violet-500 via-pink-500 to-cyan-400 shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                  <div className="w-full h-full rounded-[22px] bg-[#0b1024] flex flex-col items-center justify-center p-3 text-center">
                    <div className="text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                      {leader.name
                        .replace("DR. ", "")
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase mt-1">
                      [PORTRAIT SLOT]
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    {leader.role}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {leader.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    {leader.title}
                  </p>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-3">
                  {leader.socials.linkedin && (
                    <a
                      href={leader.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-violet-500/50 transition-colors"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                  {leader.socials.email && (
                    <a
                      href={`mailto:${leader.socials.email}`}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Leader Narrative & Vision Quote (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <Quote className="w-6 h-6 text-pink-400/50 mb-2" />
                  <p className="text-base sm:text-lg italic text-slate-200 leading-relaxed font-serif">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </div>

                <p className="text-base text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Academic &amp; Professional Credentials
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leader.credentials.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08] flex items-center gap-2"
                      >
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{cred}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company Philosophy & Timeline */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#080d1e] border border-white/[0.08] space-y-8 mb-16">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
          The 4 Pillars of Our Engineering Culture
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h3 className="text-base font-bold text-white">1. Mathematical Correctness</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We favor provable distributed consensus, strict types, and automated verification over ad-hoc quick fixes.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h3 className="text-base font-bold text-white">2. High-Frame-Rate Craft</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every interface we ship is engineered for 60 to 120 FPS fluid physics and sub-50ms interaction latency.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h3 className="text-base font-bold text-white">3. Autonomous Intelligence</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We believe in Agentic AI with deterministic guardrails that augment human teams rather than hallucinate errors.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h3 className="text-base font-bold text-white">4. Total Partner Accountability</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              No outsourcing to ghost contractors. Our senior leaders personally architect and govern your code repositories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
