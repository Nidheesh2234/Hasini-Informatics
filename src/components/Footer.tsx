"use client";

import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin, MessageSquare, ExternalLink } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030509] border-t border-white/[0.08] text-slate-300 pt-20 pb-12 overflow-hidden">
      {/* Background Ambient Violet & Cyan Glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-l from-cyan-600/10 via-blue-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand & Purpose Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.positioning}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Engineering Operations
              </span>
            </div>
          </div>

          {/* Direct Contact & WhatsApp Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50">
              Direct Contact Lines
            </h3>
            <div className="space-y-3">
              {siteConfig.contact.phones.map((phone) => (
                <div
                  key={phone.raw}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{phone.label}</span>
                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-mono inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      WhatsApp
                    </a>
                  </div>
                  <a
                    href={`tel:${phone.raw}`}
                    className="text-base font-mono font-bold text-white hover:text-cyan-300 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{phone.display}</span>
                  </a>
                </div>
              ))}

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/40 transition-colors">
                <div className="text-xs text-slate-400 mb-1">Electronic Mail</div>
                <a
                  href={`mailto:${siteConfig.contact.emails.primary}`}
                  className="text-sm font-mono text-white hover:text-cyan-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span>{siteConfig.contact.emails.primary}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.emails.support}`}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-2 mt-1"
                >
                  <span className="text-slate-500">•</span>
                  <span>{siteConfig.contact.emails.support}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                Sitemap
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-cyan-400 transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    Leadership Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact & RFP
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                    Terms & SLA
                  </Link>
                </li>
              </ul>
            </div>


          </div>
        </div>

        {/* Giant Kinetic Wordmark Display */}
        <div className="py-12 select-none overflow-hidden">
          <div className="text-[12vw] sm:text-[14vw] font-black tracking-tighter text-white/[0.04] leading-none uppercase text-center whitespace-nowrap pointer-events-none transition-colors duration-700 hover:text-white/[0.08]">
            HASINI INFORMATICS
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 font-mono border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span>© 2026 {siteConfig.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {siteConfig.contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white hover:border-violet-500/50 transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
