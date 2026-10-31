"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, FileCheck, Milestone } from "lucide-react";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = processSteps[activeStepIdx];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#040711] border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>THE 5-D METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            Discover to Dedicate. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
              The Architecture of Velocity.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A battle-tested 5-stage lifecycle turning raw business ambitions into resilient, self-healing digital powerhouses.
          </p>
        </div>

        {/* Step Navigation Pills / Stepper */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIdx(idx)}
                className={`relative flex-1 min-w-[140px] p-4 rounded-2xl transition-all cursor-pointer text-left border ${
                  isActive
                    ? "bg-[#0c1224] border-violet-500/50 shadow-[0_10px_30px_rgba(139,92,246,0.25)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? "text-cyan-400" : "text-slate-500"
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {step.duration}
                  </span>
                </div>
                <div className={`text-base font-bold ${isActive ? "text-white" : "text-slate-400"}`}>
                  {step.title}
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeProcessIndicator"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#080d1e] border border-white/[0.1] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
          >
            {/* Step Detail Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  PHASE {activeStep.step}
                </span>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {activeStep.duration}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {activeStep.title}:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 font-normal">
                  {activeStep.tagline}
                </span>
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Verified Output Box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Tangible Phase Milestone Deliverable
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {activeStep.output}
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist of Core Activities (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Execution Activities Checklist
              </div>
              <ul className="space-y-3">
                {activeStep.activities.map((act, aIdx) => (
                  <li
                    key={aIdx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
