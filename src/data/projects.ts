export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  serviceCategory: string; // matches service slug for filtering
  tagline: string;
  featured: boolean;
  coverImage: string;
  galleryImages: string[];
  problem: string;
  solution: string;
  architectureHighlights: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "omnipulse-autonomous-commerce",
    slug: "omnipulse-autonomous-commerce",
    title: "OmniPulse Autonomous Retail Engine",
    client: "Aura Global Retail [EDIT]",
    year: "2025",
    category: "Agentic AI & Custom Software",
    serviceCategory: "agentic-ai",
    tagline: "Autonomous inventory routing and fulfillment intelligence across 14 global distribution centers.",
    featured: true,
    coverImage: "/images/projects/omnipulse-hero.jpg",
    galleryImages: [
      "/images/projects/omnipulse-hero.jpg",
      "/images/projects/omnipulse-architecture.jpg",
      "/images/projects/omnipulse-dashboard.jpg",
    ],
    problem:
      "Aura Global struggled with 14 disconnected regional ERPs, manual inventory spreadsheet reconciliation taking 18 hours per cycle, and catastrophic platform outages during multi-million-visitor flash sales.",
    solution:
      "Hasini Informatics engineered an event-driven microservices architecture orchestrating autonomous AI agent workers. The system predicts regional demand, automates warehouse allocation in 42 milliseconds, and guarantees five-nines uptime through self-healing Kubernetes clusters.",
    architectureHighlights: [
      "Event-driven microservices processing 120,000 Kafka events per second with zero data drop",
      "Autonomous AI dispatch agent with reasoning chains optimizing multi-carrier delivery costs",
      "Next.js App Router edge storefront delivering 98+ Core Web Vitals on mobile and desktop",
      "Zero-downtime multi-region failover across AWS us-east-1 and eu-central-1",
    ],
    metrics: [
      { label: "Peak Order Throughput", value: "+340%", change: "vs legacy" },
      { label: "Inventory Sync Latency", value: "< 42ms", change: "from 18 hrs" },
      { label: "Annual Cloud Cost Saved", value: "$1.85M", change: "-42%" },
      { label: "Black Friday Uptime", value: "99.999%", change: "Zero incidents" },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Python FastAPI",
      "Apache Kafka",
      "PostgreSQL / pgvector",
      "Docker & Kubernetes",
      "AWS EKS",
      "Tailwind CSS",
    ],
    clientQuote: {
      quote:
        "[EDIT] Hasini Informatics didn't just build software—they fundamentally transformed our enterprise agility. Their team operated with surgical precision, delivering ahead of deadline.",
      author: "Marcus Vance",
      role: "Chief Digital Officer",
      company: "Aura Global Retail",
    },
    liveUrl: "https://example.com/omnipulse-case-study",
  },
  {
    id: "finguard-zero-trust-banking",
    slug: "finguard-zero-trust-banking",
    title: "FinGuard Real-Time Fraud Defense",
    client: "Apex NeoBank [EDIT]",
    year: "2024",
    category: "Cloud & DevOps & Enterprise",
    serviceCategory: "cloud-devops-solutions",
    tagline: "Sub-millisecond fraud scoring and compliance telemetry securing $4.2B in annualized transactions.",
    featured: false,
    coverImage: "/images/projects/finguard-hero.jpg",
    galleryImages: [
      "/images/projects/finguard-hero.jpg",
      "/images/projects/finguard-metrics.jpg",
    ],
    problem:
      "Rapid neo-banking growth attracted sophisticated credential stuffing and synthetic identity fraud, overwhelming legacy batch-screening rule sets.",
    solution:
      "Engineered a stream-processing fraud detection engine that evaluates 400+ biometric and behavioral signals in under 12 milliseconds, reducing false positives by 78%.",
    architectureHighlights: [
      "Sub-12ms vector similarity lookup running on distributed Redis clusters",
      "Zero-trust mTLS service mesh orchestrated with Istio across hybrid clouds",
      "Immutable cryptographic audit trails for automated regulatory reporting",
    ],
    metrics: [
      { label: "Fraud Attempt Blocked", value: "99.4%" },
      { label: "Scoring Latency", value: "11.2ms" },
      { label: "False Positive Drop", value: "-78%" },
    ],
    techStack: ["Go (Golang)", "Rust", "Apache Flink", "Redis", "Terraform", "Google Cloud"],
    clientQuote: {
      quote:
        "[EDIT] The security posture and ultra-low latency architecture engineered by Dr. Suvarna Kumar's team passed our highest banking stress tests on day one.",
      author: "Elena Rostova",
      role: "VP of Engineering & Security",
      company: "Apex NeoBank",
    },
    liveUrl: "https://example.com/finguard",
  },
  {
    id: "voxelhealth-telemedicine-suite",
    slug: "voxelhealth-telemedicine-suite",
    title: "VoxelHealth 120FPS Clinical Portal",
    client: "CareWave Health Systems [EDIT]",
    year: "2024",
    category: "Mobile App & Web Maintenance",
    serviceCategory: "mobile-app-engineering",
    tagline: "HIPAA-compliant WebRTC telemedicine and clinical telemetry portal serving 350,000 active patients.",
    featured: false,
    coverImage: "/images/projects/voxelhealth-hero.jpg",
    galleryImages: ["/images/projects/voxelhealth-hero.jpg"],
    problem:
      "Laggy video consultations and confusing patient portals resulted in a 42% no-show rate and doctor burnout.",
    solution:
      "Built native iOS, Android, and WebRTC web applications with automated EHR integration, instant scheduling, and real-time vital sign biometric bluetooth pairing.",
    architectureHighlights: [
      "Adaptive WebRTC video engine with dynamic bandwidth throttling down to 2G networks",
      "End-to-end encrypted medical data pipelines adhering to HIPAA and GDPR standards",
      "Offline-first mobile client with SQLite local cache and background synchronization",
    ],
    metrics: [
      { label: "Patient No-Show Rate", value: "-64%" },
      { label: "Call Quality Rating", value: "4.95 / 5" },
      { label: "Active Mobile Users", value: "350k+" },
    ],
    techStack: ["SwiftUI", "Kotlin", "WebRTC", "Next.js", "PostgreSQL", "Node.js"],
    clientQuote: {
      quote:
        "[EDIT] Clinicians love the intuitive interface and patients rave about how fast calls connect. Hasini Informatics exceeded our expectations in every milestone.",
      author: "Dr. Arvind Patel",
      role: "Chief Medical Officer",
      company: "CareWave Health Systems",
    },
    liveUrl: "https://example.com/voxelhealth",
  },
];
