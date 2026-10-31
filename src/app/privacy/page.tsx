import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Privacy Policy | HASINI INFORMATICS Pvt. Ltd.",
  description: "Privacy Policy and enterprise data protection standards for HASINI INFORMATICS Pvt. Ltd.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>GOVERNANCE &amp; DATA PRIVACY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-slate-400">
          Last Updated: 2026 • Effective for {siteConfig.legalName}
        </p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">1. Executive Overview</h2>
          <p>
            {siteConfig.legalName} (&ldquo;HASINI INFORMATICS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) maintains the highest standards of confidentiality, zero-trust cybersecurity posture, and data ethics. This policy explains how we collect, process, and safeguard information when you interact with our website, consulting portals, and enterprise engineering services.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">2. Information Collection</h2>
          <p>
            We collect personal information that you provide voluntarily when submitting inquiries, requesting technical blueprints, or contacting leadership via phone, WhatsApp, or email. This includes your name, corporate email, phone number, company name, and project scope details.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">3. Enterprise Code &amp; Data Security</h2>
          <p>
            We execute strict Non-Disclosure Agreements (NDAs) prior to analyzing proprietary client systems. Client source code, database architectures, and API keys are stored in encrypted, isolated VPC perimeters with multi-factor authentication and zero unauthorized third-party sharing.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">4. Autonomous AI Telemetry &amp; Privacy</h2>
          <p>
            When building Agentic AI solutions, client datasets are never used to train public foundation models without explicit contractual consent. All inference pipelines operate under private, SOC2/ISO27001-compliant enterprise agreements with zero data retention.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">5. Contact Data Protection Officer</h2>
          <p>
            For data inquiries, access requests, or privacy governance queries, contact our leadership directly at:
          </p>
          <div className="text-xs font-mono text-cyan-300 space-y-1 pt-2">
            <div>Email: {siteConfig.contact.emails.primary}</div>
            <div>Official: {siteConfig.contact.emails.support}</div>
            <div>Phone: {siteConfig.contact.phones[0].display}</div>
            <div>Address: {siteConfig.contact.address.full}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
