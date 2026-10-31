import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Terms of Service & SLA | HASINI INFORMATICS Pvt. Ltd.",
  description: "Terms of service, engineering warranty, IP transfer, and SLA standards for HASINI INFORMATICS Pvt. Ltd.",
};

export default function TermsPage() {
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          <span>LEGAL FRAMEWORK &amp; SLA TERMS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-slate-400">
          Last Updated: 2026 • Governing {siteConfig.legalName}
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">1. Contractual Agreement</h2>
          <p>
            By accessing our website, engaging our consulting advisory, or executing Statements of Work (SOWs) with {siteConfig.legalName}, you agree to be bound by these Terms of Service and any project-specific Master Service Agreements (MSAs).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">2. Intellectual Property (IP) Transfer</h2>
          <p>
            Unless explicitly agreed otherwise in a specialized licensing arrangement, all custom source code, documentation, microservices, and design assets engineered specifically for client contracts are transferred 100% to the client upon full settlement of milestone invoices.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">3. Service Level Agreements (SLAs)</h2>
          <p>
            For clients under active Web &amp; Digital Maintenance or Cloud DevOps management contracts, we uphold high-availability uptime standards (up to 99.99%) with guaranteed incident response times defined in your active tier schedule.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">4. Jurisdiction &amp; Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Republic of India. Any legal proceedings or disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts of Hyderabad, Telangana, India.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-3">
          <h2 className="text-xl font-bold text-white">5. Direct Inquiries</h2>
          <p>
            For corporate legal or procurement questions, reach out to our legal department:
          </p>
          <div className="text-xs font-mono text-cyan-300 space-y-1 pt-2">
            <div>Email: {siteConfig.contact.emails.primary}</div>
            <div>Support: {siteConfig.contact.emails.support}</div>
            <div>Executive Lines: {siteConfig.contact.phones[0].display} / {siteConfig.contact.phones[1].display}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
