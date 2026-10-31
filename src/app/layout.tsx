import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasini-informatics.com"),
  title: "HASINI INFORMATICS Pvt. Ltd. | We Build What's Next",
  description:
    "HASINI INFORMATICS Pvt. Ltd. is a full-spectrum software and digital engineering company. We build, run, and grow businesses end to end with custom software, agentic AI, 120Hz mobile apps, and 24/7 cloud reliability.",
  keywords: [
    "HASINI INFORMATICS",
    "HASINI INFORMATICS Pvt Ltd",
    "Agentic AI",
    "Autonomous AI Agents",
    "Custom Software Development",
    "Mobile App Engineering",
    "Cloud & DevOps Solutions",
    "Enterprise Software",
    "Digital Marketing",
    "Dr. G. Suvarna Kumar",
    "Dr. G. Sandhya Devi",
    "Software Company Hyderabad",
  ],
  authors: [{ name: "HASINI INFORMATICS Pvt. Ltd." }],
  creator: "HASINI INFORMATICS Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hasini-informatics.com",
    title: "HASINI INFORMATICS Pvt. Ltd. | We Build What's Next",
    description:
      "A full-spectrum software and digital engineering company that builds, runs, and grows businesses end to end.",
    siteName: "HASINI INFORMATICS",
    images: [
      {
        url: "/images/hasini-logo.png",
        width: 1200,
        height: 630,
        alt: "HASINI INFORMATICS Pvt. Ltd. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HASINI INFORMATICS Pvt. Ltd. | We Build What's Next",
    description:
      "A full-spectrum software and digital engineering company that builds, runs, and grows businesses end to end.",
    creator: "@HasiniInfo",
    images: ["/images/hasini-logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured schema for rich snippet SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: "https://hasini-informatics.com",
    logo: "https://hasini-informatics.com/images/hasini-logo.png",
    description: siteConfig.positioning,
    founder: [
      {
        "@type": "Person",
        name: siteConfig.leadership[0].name,
        jobTitle: siteConfig.leadership[0].role,
      },
      {
        "@type": "Person",
        name: siteConfig.leadership[1].name,
        jobTitle: siteConfig.leadership[1].role,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phones[0].raw,
        contactType: "customer service",
        areaServed: "Global",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phones[1].raw,
        contactType: "technical support",
        areaServed: "Global",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.line1,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: siteConfig.contact.socials.map((s) => s.href),
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#05070e] text-[#f8fafc] font-sans antialiased overflow-x-hidden selection:bg-violet-600/30 selection:text-white">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
