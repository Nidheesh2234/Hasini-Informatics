"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Award, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#04060c] border-t border-white/[0.08] overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/15 via-pink-600/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE VISION &amp; STEWARDSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            The Architects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
              Behind the Machine.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Founded on deep computer science rigor, doctoral academic excellence, and two decades of enterprise engineering leadership.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.leadership.map((leader, index) => {
            const isFounder = index === 0;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-3xl bg-[#080d1e]/90 border border-white/[0.1] hover:border-violet-500/50 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_70px_rgba(139,92,246,0.15)]"
              >
                {/* Ambient Card Background Glow */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${
                    isFounder ? "bg-violet-600" : "bg-cyan-500"
                  }`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Portrait & Role Row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Elegant Portrait Frame Placeholder */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-violet-500 via-pink-500 to-cyan-400 shrink-0 shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                      <div className="w-full h-full rounded-xl bg-[#0b1022] overflow-hidden flex flex-col items-center justify-center text-center p-2 relative group-hover:scale-[1.02] transition-transform duration-300">
                        {/* Elegant Fallback Monogram Avatar */}
                        <div className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                          {leader.name
                            .replace("DR. ", "")
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <span className="text-[9px] font-mono text-cyan-400 tracking-wider uppercase mt-1">
                          [PORTRAIT]
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                          {leader.role}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs font-mono text-slate-400">Leadership</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                        {leader.title}
                      </p>
                    </div>
                  </div>

                  {/* Visionary Quote Box */}
                  <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                    <Quote className="w-6 h-6 text-violet-400/50 mb-2" />
                    <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed font-serif">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Academic / Enterprise Credentials */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                      Doctoral &amp; Architecture Pillars
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {leader.credentials.map((cred, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08] flex items-center gap-1.5"
                        >
                          <Award className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{cred}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action & Direct Contact */}
                <div className="relative z-10 pt-6 mt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {leader.socials.linkedin && (
                      <a
                        href={leader.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-violet-500/50 transition-colors"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {leader.socials.email && (
                      <a
                        href={`mailto:${leader.socials.email}`}
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Executive Story</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
