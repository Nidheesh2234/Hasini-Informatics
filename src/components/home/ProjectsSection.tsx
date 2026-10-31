"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, Check, TrendingUp, Layers, ExternalLink } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";

const categories = [
  { label: "All Architecture", value: "all" },
  { label: "Agentic AI", value: "agentic-ai" },
  { label: "Cloud & DevOps", value: "cloud-devops-solutions" },
  { label: "Mobile App", value: "mobile-app-engineering" },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.serviceCategory === selectedFilter);

  return (
    <section id="selected-work" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#03060e] border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambient Violet & Cyan Spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROVEN RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
              Selected Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-400">
                Measurable Impact.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Explore how we architect high-throughput software and autonomous AI systems that redefine enterprise performance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === cat.value
                    ? "bg-violet-600 text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFlagship = project.featured;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-cursor="project"
                  className="group relative rounded-3xl bg-[#080d1e] border border-white/[0.1] hover:border-violet-500/50 transition-all duration-500 overflow-hidden p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Project Information (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-violet-600/20 text-violet-300 border border-violet-500/30">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Client: {project.client}
                        </span>
                        <span className="text-xs font-mono text-slate-500">• {project.year}</span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-cyan-300 transition-all">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 font-medium italic">
                        &ldquo;{project.tagline}&rdquo;
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-mono text-pink-400 uppercase tracking-wider">
                          The Challenge &amp; Solution
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* Metrics Showcase Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08]">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                          >
                            <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                            {m.change && (
                              <div className="text-[10px] font-mono text-emerald-400 mt-0.5">
                                {m.change}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Mockup Visual Slot (5 cols) */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-violet-500/40 via-pink-500/30 to-cyan-400/40 border border-white/[0.1] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                        <div className="w-full h-full rounded-xl bg-[#0a0f24] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                          {/* Simulated Interactive UI Wireframe / Mesh */}
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />

                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            <Layers className="w-8 h-8" />
                          </div>

                          <div className="text-base font-bold text-white mb-1">
                            {project.title}
                          </div>
                          <div className="text-xs font-mono text-cyan-400">
                            [EDIT: REPLACE WITH PROJECT MOCKUP/SCREENSHOT]
                          </div>

                          <div className="mt-4 px-3 py-1 rounded-full bg-white/[0.06] text-[11px] font-mono text-slate-400">
                            High-Throughput Architecture
                          </div>
                        </div>
                      </div>

                      {/* View Project Link */}
                      <div className="mt-6 flex items-center justify-end">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/[0.05] border border-white/[0.1] text-white hover:bg-violet-600 hover:border-violet-500 transition-all cursor-pointer"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
