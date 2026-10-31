"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#04060d] border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono mb-4">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>EXECUTIVE ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.08]">
              Trusted by Leaders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400">
                Who Bet Big on Tech.
              </span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-white hover:bg-violet-600 hover:border-violet-500 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="p-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-white hover:bg-violet-600 hover:border-violet-500 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              data-cursor="drag"
              className="group p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/[0.08] hover:border-pink-500/40 transition-all flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-pink-500/10 text-pink-300 border border-pink-500/20">
                    {test.metricHighlight}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-white/20 mb-4" />

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-white">{test.author}</div>
                  <div className="text-xs text-slate-400">
                    {test.title}, <span className="text-cyan-300">{test.company}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  {test.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
