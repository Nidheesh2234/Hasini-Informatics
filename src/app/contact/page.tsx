import Link from "next/link";
import { ArrowLeft, MessageSquare, Phone, Mail, MapPin, ShieldCheck, HelpCircle } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact & RFP | HASINI INFORMATICS Pvt. Ltd.",
  description:
    "Direct contact lines (+91 9885000708, +91 9291458626), WhatsApp chat, electronic mail, and executive RFP submission for HASINI INFORMATICS Pvt. Ltd.",
};

const faqs = [
  {
    q: "How quickly can we initiate an engineering engagement?",
    a: "Following an initial 30-minute discovery call with Dr. Suvarna Kumar or Dr. Sandhya Devi, our team delivers a preliminary Architectural Scope Blueprint within 48 to 72 hours. Rapid sprint kickoff can commence within 7 business days.",
  },
  {
    q: "Who retains Intellectual Property (IP) for custom code?",
    a: "You retain 100% full intellectual property ownership. Upon milestone acceptance and payment, all production repositories, cloud configurations, Docker images, and documentation are transferred entirely to your organization.",
  },
  {
    q: "How do you guarantee zero downtime during migrations?",
    a: "We implement shadow traffic routing, bidirectional database replication, and blue/green canary deployments orchestrated via automated CI/CD pipelines. We validate multi-region failovers before cutting over production DNS records.",
  },
  {
    q: "Can we engage HASINI INFORMATICS for ongoing 24/7/365 maintenance?",
    a: "Yes. Our Web & Digital Maintenance practice provides 24/7/365 proactive synthetic monitoring, automated vulnerability patching, Core Web Vitals optimization, and guaranteed 15-minute emergency response SLAs.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Back to Home Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <div className="mt-24 pt-16 border-t border-white/[0.08] max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ENGAGEMENT TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            Frequently Addressed Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#080d1a] border border-white/[0.08] space-y-2"
            >
              <h3 className="text-base font-bold text-white tracking-tight">
                {faq.q}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
