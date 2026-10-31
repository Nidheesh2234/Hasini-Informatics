"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const [complete, setComplete] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const hasSeen = sessionStorage.getItem("hasini_preloader_seen");
    if (hasSeen === "true") {
      setHidden(true);
      return;
    }

    const startTime = performance.now();
    const duration = 1100; // 1.1s to reach 100%

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Quadratic ease out for kinetic counter feel
      const eased = 1 - Math.pow(1 - progress, 2);
      const val = Math.min(100, Math.floor(eased * 100));
      setCounter(val);

      if (progress >= 1) {
        clearInterval(interval);
        setCounter(100);
        setTimeout(() => {
          setComplete(true);
          sessionStorage.setItem("hasini_preloader_seen", "true");
          setTimeout(() => setHidden(true), 900);
        }, 220); // Hold at 100% briefly: total ~1.32s
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#04060b] text-white overflow-hidden select-none"
        >
          {/* Ambient Background Glow Mesh */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/30 via-fuchsia-600/20 to-cyan-500/30 rounded-full blur-[120px] animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Animated Brand Logo Ribbon Symbol */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-28 h-20 mb-8"
            >
              <svg
                viewBox="0 0 200 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]"
              >
                <defs>
                  <linearGradient id="plGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                  <linearGradient id="plGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="50%" stopColor="#D946EF" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>

                {/* Left Animated Ring */}
                <motion.path
                  d="M 68 20 C 35 20 15 42 15 76 C 15 110 38 132 72 132 C 102 132 118 114 124 96 C 118 96 112 98 106 102 C 96 110 85 116 72 116 C 48 116 32 99 32 76 C 32 53 48 36 68 36 C 84 36 96 44 104 54 C 108 48 114 42 120 38 C 108 26 90 20 68 20 Z"
                  fill="url(#plGrad1)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                />

                {/* Right Animated Ring */}
                <motion.path
                  d="M 132 132 C 165 132 185 110 185 76 C 185 42 162 20 128 20 C 98 20 82 38 76 56 C 82 56 88 54 94 50 C 104 42 115 36 128 36 C 152 36 168 53 168 76 C 168 99 152 116 132 116 C 116 116 104 108 96 98 C 92 104 86 110 80 114 C 92 126 110 132 132 132 Z"
                  fill="url(#plGrad2)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-1"
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
                HASINI <span className="text-cyan-400 font-light">INFORMATICS</span>
              </h2>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Pvt. Ltd. • Innovation Engine
              </p>
            </motion.div>

            {/* Kinetic Counter & Progress Bar */}
            <div className="w-64 mt-8 flex flex-col items-center">
              <div className="flex items-center justify-between w-full text-xs font-mono text-slate-400 mb-2">
                <span>INITIALIZING SYSTEM</span>
                <span className="font-bold text-cyan-300">{counter}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 rounded-full"
                  style={{ width: `${counter}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Precision Coordinates */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>HYDERABAD • GLOBAL OPERATIONS</span>
            <span className="hidden sm:inline">WE BUILD WHAT&apos;S NEXT</span>
            <span>2026 ARCHITECTURE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
