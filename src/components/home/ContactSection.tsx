"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: servicesData[1]?.title || "Custom Software Development",
    budget: "$25k - $50k",
    message: "",
    honeypot: "", // Hidden spam field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#8B5CF6", "#EC4899", "#06B6D4", "#38BDF8"],
        });
      } catch (err) {
        // Fallback silently if canvas-confetti fails
      }

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: servicesData[1]?.title || "Custom Software Development",
        budget: "$25k - $50k",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us on WhatsApp.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#03060c] border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-600/15 via-pink-600/15 to-cyan-500/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Giant Cinematic Final CTA Banner (Section 12) */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/30 text-cyan-300 text-xs font-mono mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>LET&apos;S SHAPE WHAT&apos;S NEXT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]"
          >
            Let&apos;s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
              Unforgettable.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Whether modernizing monolithic debt, engineering autonomous AI agent swarms, or launching an enterprise flagship, our leadership is ready.
          </motion.p>
        </div>

        {/* Split Layout Contact Cockpit (Section 13) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080d1e] border border-white/[0.1] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Project Request Form
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Direct review by Dr. Suvarna Kumar &amp; Dr. Sandhya Devi. Response within 24h.
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Spam Honeypot Field (Hidden from users) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Corporate Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Phone & Service Interested Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Phone / Mobile
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="e.g. +91 9885000708"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Service Domain *
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1428] border border-white/[0.1] text-white focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  >
                    {servicesData.map((svc) => (
                      <option key={svc.id} value={svc.title} className="bg-[#0d1428] text-white">
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Range Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Expected Investment Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["<$10k", "$10k-$25k", "$25k-$50k", "$50k-$1L+"].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range })}
                      className={`py-2 px-3 rounded-xl text-xs font-mono transition-all cursor-pointer ${formData.budget === range
                          ? "bg-violet-600 text-white font-bold border border-violet-400"
                          : "bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:bg-white/[0.06] hover:text-white"
                        }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Project Scope &amp; Ambition *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell us about the business challenge, current bottlenecks, desired timeline, or architectural ambitions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                />
              </div>

              {/* Error Alert */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Notification */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Inquiry Dispatched Successfully!</div>
                      <div className="text-xs text-emerald-300 mt-1">
                        Thank you for reaching out. Dr. G. Suvarna Kumar &amp; Dr. G. Sandhya Devi have received your brief and will respond within 24 hours.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button Stack */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white hover:opacity-95 transition-opacity disabled:opacity-50 shadow-[0_0_25px_rgba(139,92,246,0.4)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Transmitting Brief..." : "Submit Project Brief"}</span>
                </button>

                {/* Instant WhatsApp Quick Link */}
                <a
                  href={siteConfig.contact.phones[0].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Skip form? Chat on WhatsApp &rarr;</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right Direct Touchpoints & Map Embed (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Cards */}
            <div className="p-8 rounded-3xl bg-[#080d1e] border border-white/[0.1] backdrop-blur-2xl space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  Immediate Reach
                </span>
                <h4 className="text-xl font-bold text-white">Direct Executive Lines</h4>
              </div>

              <div className="space-y-4">
                {siteConfig.contact.phones.map((phone) => (
                  <div
                    key={phone.raw}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                      <span>{phone.label}</span>
                      <a
                        href={phone.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-mono inline-flex items-center gap-1 text-[11px]"
                      >
                        <MessageSquare className="w-3 h-3" />
                        WhatsApp
                      </a>
                    </div>
                    <a
                      href={`tel:${phone.raw}`}
                      className="text-lg font-mono font-bold text-white hover:text-cyan-300 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        {phone.display}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Electronic Mail */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Electronic Mail
                </div>
                <a
                  href={`mailto:${siteConfig.contact.emails.primary}`}
                  className="text-sm font-mono text-white hover:text-cyan-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span>{siteConfig.contact.emails.primary}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.emails.support}`}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-2"
                >
                  <span className="text-slate-600">•</span>
                  <span>{siteConfig.contact.emails.support}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
