"use client";

import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "image" | "vector";
}

export default function BrandLogo({
  className = "",
  showText = true,
  size = "md",
  variant = "vector",
}: BrandLogoProps) {
  const dimensions = {
    sm: { symbol: 32, height: 32, text: "text-lg", gap: "gap-2.5" },
    md: { symbol: 42, height: 42, text: "text-xl", gap: "gap-3" },
    lg: { symbol: 54, height: 54, text: "text-2xl", gap: "gap-3.5" },
    xl: { symbol: 72, height: 72, text: "text-3xl", gap: "gap-4" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="HASINI INFORMATICS - Home"
      className={`group inline-flex items-center ${dimensions.gap} focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg ${className}`}
    >
      {/* Brand Dual-Spiral Symbol */}
      <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {variant === "vector" ? (
          <div
            style={{ width: dimensions.symbol, height: dimensions.symbol * 0.76 }}
            className="relative"
          >
            <svg
              viewBox="0 0 200 152"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_16px_rgba(139,92,246,0.5)]"
            >
              <defs>
                {/* Blue to Violet Spiral Gradient */}
                <linearGradient id="spiralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>

                {/* Pink/Magenta to Cyan Gradient */}
                <linearGradient id="spiralGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="50%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>

                {/* Inner Cyan Accent */}
                <linearGradient id="spiralGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>

                {/* Inner Pink Accent */}
                <linearGradient id="spiralGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>

              {/* Left Outer Swirl Ribbons */}
              <path
                d="M 68 20 C 35 20 15 42 15 76 C 15 110 38 132 72 132 C 102 132 118 114 124 96 C 118 96 112 98 106 102 C 96 110 85 116 72 116 C 48 116 32 99 32 76 C 32 53 48 36 68 36 C 84 36 96 44 104 54 C 108 48 114 42 120 38 C 108 26 90 20 68 20 Z"
                fill="url(#spiralGrad1)"
                opacity="0.95"
              />

              {/* Left Inner Swirl Ribbon */}
              <path
                d="M 68 46 C 52 46 42 58 42 76 C 42 94 54 106 70 106 C 82 106 92 100 98 90 C 104 84 108 80 114 78 C 110 88 100 98 88 104 C 82 106 76 106 70 106 C 52 106 42 94 42 76 C 42 58 54 48 70 48 C 78 48 86 52 92 58 C 96 52 102 46 108 42 C 98 34 84 30 68 46 Z"
                fill="url(#spiralGrad3)"
                opacity="0.9"
              />

              {/* Right Outer Swirl Ribbons */}
              <path
                d="M 132 132 C 165 132 185 110 185 76 C 185 42 162 20 128 20 C 98 20 82 38 76 56 C 82 56 88 54 94 50 C 104 42 115 36 128 36 C 152 36 168 53 168 76 C 168 99 152 116 132 116 C 116 116 104 108 96 98 C 92 104 86 110 80 114 C 92 126 110 132 132 132 Z"
                fill="url(#spiralGrad2)"
                opacity="0.95"
              />

              {/* Right Inner Swirl Ribbon */}
              <path
                d="M 132 106 C 148 106 158 94 158 76 C 158 58 146 46 130 46 C 118 46 108 52 102 62 C 96 68 92 72 86 74 C 90 64 100 54 112 48 C 118 46 124 46 130 46 C 148 46 158 58 158 76 C 158 94 146 104 130 104 C 122 104 114 100 108 94 C 104 100 98 106 92 110 C 102 118 116 122 132 106 Z"
                fill="url(#spiralGrad4)"
                opacity="0.9"
              />

              {/* Core Interlocking Bridge */}
              <path
                d="M 88 64 C 94 56 102 52 110 52 C 114 52 118 54 122 56 C 116 62 110 70 106 78 C 102 86 98 94 92 100 C 86 94 82 86 82 78 C 82 72 84 68 88 64 Z"
                fill="#F43F5E"
                opacity="0.85"
              />
              <path
                d="M 112 88 C 106 96 98 100 90 100 C 86 100 82 98 78 96 C 84 90 90 82 94 74 C 98 66 102 58 108 52 C 114 58 118 66 118 74 C 118 80 116 84 112 88 Z"
                fill="#22D3EE"
                opacity="0.85"
              />
            </svg>
          </div>
        ) : (
          <Image
            src="/images/hasini-logo.png"
            alt="Hasini Informatics Logo"
            width={dimensions.symbol * 1.3}
            height={dimensions.symbol}
            className="object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.4)]"
            priority
          />
        )}
      </div>

      {/* Brand Text Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-bold tracking-tight text-white uppercase ${dimensions.text} transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:via-pink-400 group-hover:to-cyan-400`}
            >
              HASINI
            </span>
            <span
              className={`font-light tracking-wider text-cyan-300 ${dimensions.text}`}
            >
              INFORMATICS
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-[0.22em] text-slate-400 uppercase mt-0.5">
            Pvt. Ltd. • Innovation Engine
          </span>
        </div>
      )}
    </Link>
  );
}
