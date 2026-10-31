export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  quote: string;
  bio: string;
  image: string;
  credentials: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  positioning: string;
  foundingYear: number;
  contact: {
    phones: {
      display: string;
      raw: string;
      whatsapp: string;
      label: string;
    }[];
    emails: {
      primary: string;
      support: string;
      careers: string;
    };
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      full: string;
      mapsUrl: string;
    };
    socials: {
      name: string;
      href: string;
      handle: string;
    }[];
  };
  leadership: LeadershipMember[];
}

export const siteConfig: SiteConfig = {
  name: "HASINI INFORMATICS",
  legalName: "HASINI INFORMATICS Pvt. Ltd.",
  tagline: "We Build What's Next.",
  positioning: "A full-spectrum software and digital company that builds, runs, and grows businesses end to end.",
  foundingYear: 2014,
  contact: {
    phones: [
      {
        display: "+91 9885000708",
        raw: "+919885000708",
        whatsapp: "https://wa.me/919885000708?text=Hello%20Hasini%20Informatics%20team%2C%20I%20would%20like%20to%20discuss%20a%20project.",
        label: "Direct & Leadership",
      },
      {
        display: "+91 9291458626",
        raw: "+919291458626",
        whatsapp: "https://wa.me/919291458626?text=Hello%20Hasini%20Informatics%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
        label: "Consulting & Operations",
      },
    ],
    emails: {
      primary: "emailgsk@gmail.com", // [EDIT: Primary communication email]
      support: "info@hasini-informatics.com", // [EDIT: General inquiries & official domain email]
      careers: "careers@hasini-informatics.com", // [EDIT: Recruitment mailbox]
    },
    address: {
      line1: "Plot No. 42, Tech Horizon Tower, 4th Floor", // [EDIT: Street Address]
      line2: "HITEC City, Madhapur", // [EDIT: Locality / Tech Park]
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      postalCode: "500081",
      full: "Tech Horizon Tower, HITEC City, Hyderabad, Telangana 500081, India",
      mapsUrl: "https://maps.google.com/?q=HITEC+City+Hyderabad",
    },
    socials: [
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/hasini-informatics", // [EDIT: LinkedIn profile]
        handle: "company/hasini-informatics",
      },
      {
        name: "X (Twitter)",
        href: "https://x.com/HasiniInfo", // [EDIT: X profile]
        handle: "@HasiniInfo",
      },
      {
        name: "Instagram",
        href: "https://instagram.com/hasiniinformatics", // [EDIT: Instagram profile]
        handle: "@hasiniinformatics",
      },
      {
        name: "YouTube",
        href: "https://youtube.com/@hasiniinformatics", // [EDIT: YouTube channel]
        handle: "@hasiniinformatics",
      },
      {
        name: "GitHub",
        href: "https://github.com/hasini-informatics", // [EDIT: GitHub organization]
        handle: "hasini-informatics",
      },
    ],
  },
  leadership: [
    {
      name: "DR. G. Suvarna Kumar",
      role: "Founder & CEO",
      title: "Chief Executive Officer & Chief Architect",
      quote:
        "[EDIT] True technological excellence is not merely writing code—it is creating resilient living systems that give founders the confidence to conquer uncharted markets.",
      bio: "A visionary computer scientist, academician, and enterprise engineering leader with over two decades of experience designing mission-critical architectures, distributed platforms, and high-performance engineering teams.",
      image: "/images/leadership/dr-suvarna-kumar.jpg", // [EDIT: Replace with real portrait photo]
      credentials: ["Ph.D. in Computer Science & Engineering", "Senior IEEE Member", "Enterprise Architecture Strategist"],
      socials: {
        linkedin: "https://linkedin.com/in/dr-suvarna-kumar", // [EDIT: Personal LinkedIn]
        twitter: "https://x.com/dr_suvarnakumar", // [EDIT: Personal X]
        email: "emailgsk@gmail.com",
      },
    },
    {
      name: "DR. G. Sandhya Devi",
      role: "Managing Director",
      title: "Managing Director & Head of Strategic Growth",
      quote:
        "[EDIT] Sustainable enterprise growth is born at the exact intersection of relentless empathy for the user and rigorous operational discipline.",
      bio: "An accomplished leader steering global strategy, operational excellence, client partnerships, and digital transformation initiatives across fintech, healthcare, and enterprise commerce.",
      image: "/images/leadership/dr-sandhya-devi.jpg", // [EDIT: Replace with real portrait photo]
      credentials: ["Doctor of Philosophy in Management & Information Systems", "Executive Leadership Fellow", "Digital Transformation Catalyst"],
      socials: {
        linkedin: "https://linkedin.com/in/dr-sandhya-devi", // [EDIT: Personal LinkedIn]
        email: "emailgsk@gmail.com",
      },
    },
  ],
};
