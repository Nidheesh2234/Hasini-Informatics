"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About & Leadership", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPhoneDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "py-2.5 sm:py-3 bg-[#05070e]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            : "pt-3.5 pb-3 sm:py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Brand Wordmark & Animated Dual-Spiral Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPillDesktop"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-violet-500/40 -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Stack: Phone & WhatsApp & Start Project (Desktop & Tablet) */}
            <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
              {/* Phone Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-slate-300 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/50 hover:text-white transition-all cursor-pointer"
                  aria-expanded={phoneDropdownOpen}
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden lg:inline">Call Us</span>
                  <ChevronDown
                    className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${phoneDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {phoneDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 mt-2 w-72 p-3 rounded-2xl bg-[#090d19] border border-violet-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 space-y-2"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-1">
                        Direct Lines
                      </div>
                      {siteConfig.contact.phones.map((phone) => (
                        <div
                          key={phone.raw}
                          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/40 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-medium text-slate-300">
                              {phone.label}
                            </span>
                            <a
                              href={phone.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3 h-3" />
                              WhatsApp
                            </a>
                          </div>
                          <a
                            href={`tel:${phone.raw}`}
                            className="text-sm font-mono font-bold text-white hover:text-cyan-300 flex items-center justify-between"
                          >
                            <span>{phone.display}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Primary Magnetic CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] cursor-pointer"
              >
                {/* Flowing animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10">Start a Project</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Actions: Phone Dropdown + Start + Menu */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                  className="p-2 text-slate-300 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/50 hover:text-white transition-all cursor-pointer"
                  aria-label="Direct calling lines"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                </button>

                <AnimatePresence>
                  {phoneDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 mt-2 w-72 p-3 rounded-2xl bg-[#090d19] border border-violet-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 space-y-2"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-1">
                        Direct Lines
                      </div>
                      {siteConfig.contact.phones.map((phone) => (
                        <div
                          key={phone.raw}
                          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/40 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-medium text-slate-300">
                              {phone.label}
                            </span>
                            <a
                              href={phone.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3 h-3" />
                              WhatsApp
                            </a>
                          </div>
                          <a
                            href={`tel:${phone.raw}`}
                            className="text-sm font-mono font-bold text-white hover:text-cyan-300 flex items-center justify-between"
                          >
                            <span>{phone.display}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                Start
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:text-cyan-300"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Pill Navbar Row - Matching Desktop Pill Design */}
          <div className="flex md:hidden items-center justify-center pt-2.5">
            <div className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-full overflow-x-auto no-scrollbar">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-2.5 sm:px-3.5 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-300 ${isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPillMobile"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/35 to-cyan-500/35 border border-violet-500/40 -z-10 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden pt-28 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
                Navigation
              </div>
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className={`text-2xl font-bold transition-colors ${pathname === "/" ? "text-cyan-400" : "text-white hover:text-violet-400"
                    }`}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-bold transition-colors ${pathname === link.href
                        ? "text-cyan-400"
                        : "text-white hover:text-violet-400"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Calling & WhatsApp in Mobile Drawer */}
            <div className="pt-8 border-t border-white/[0.1] space-y-4">
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                Direct Touchpoints
              </div>
              {siteConfig.contact.phones.map((phone) => (
                <div
                  key={phone.raw}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs text-slate-400">{phone.label}</div>
                    <a
                      href={`tel:${phone.raw}`}
                      className="text-base font-mono font-bold text-white hover:text-cyan-300"
                    >
                      {phone.display}
                    </a>
                  </div>
                  <a
                    href={phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                    aria-label={`WhatsApp ${phone.label}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              ))}

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]"
              >
                <span>Launch Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
