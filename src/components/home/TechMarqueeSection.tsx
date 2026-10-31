"use client";

import { techStackData } from "@/data/techStack";
import { Terminal } from "lucide-react";

export default function TechMarqueeSection() {
  // Double the array for seamless infinite marquee loop
  const marqueeItems = [...techStackData, ...techStackData];

  return (
    <section className="relative py-20 bg-[#03050a] border-t border-white/[0.08] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next-Generation Enterprise Technology Stack</span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track 1 (Leftward) */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#03050a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#03050a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#080d1a] border border-white/[0.08] hover:border-violet-500/50 hover:bg-[#0c1224] transition-all shrink-0 cursor-default shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white tracking-tight">
                  {tech.name}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {tech.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
