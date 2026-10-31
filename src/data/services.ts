export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  promise: string;
  shortDescription: string;
  detailedDescription: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  accentGradient: string;
  glowColor: string;
  iconName: string;
  isClosingCard?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-digital-maintenance",
    slug: "web-digital-maintenance",
    number: "01",
    title: "Web & Digital Maintenance",
    category: "Resilience & Operations",
    promise: "Zero-downtime reliability, hardened security, and sub-second page performance 24/7/365.",
    shortDescription:
      "Enterprise systems can never afford to sleep. We provide proactive surveillance, instant patch deployment, performance tuning, and continuous architectural upgrades.",
    detailedDescription:
      "Modern digital assets demand proactive care, not reactive firefighting. Our Web & Digital Maintenance practice treats your infrastructure as a living, revenue-generating engine. From continuous SSL and vulnerability auditing to Core Web Vitals hyper-optimization and database indexing, we keep your platforms resilient against traffic spikes and cyber threats.",
    capabilities: [
      "24/7/365 proactive uptime & synthetic transaction monitoring",
      "Core Web Vitals tuning & global CDN edge caching",
      "Automated security patching, malware sweeps & SSL renewal",
      "Disaster recovery planning, daily offsite snapshots & RPO/RTO SLAs",
    ],
    deliverables: [
      "Real-time status dashboards with incident alerting",
      "Monthly architectural health & performance audit reports",
      "Guaranteed 15-minute emergency response SLA",
      "Automated CI/CD rollback safety nets",
    ],
    technologies: ["Next.js", "Datadog", "Cloudflare Enterprise", "Sentry", "Prometheus", "Grafana", "AWS CloudWatch"],
    metrics: [
      { label: "Uptime Guaranteed", value: "99.99%" },
      { label: "Avg Incident MTTR", value: "< 14 mins" },
      { label: "Lighthouse Score", value: "95+" },
    ],
    accentGradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    iconName: "ShieldCheck",
  },
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    number: "02",
    title: "Custom Software Development",
    category: "Core Engineering",
    promise: "Tailored microservices and full-stack software engineered to scale with your most ambitious ambitions.",
    shortDescription:
      "Turn proprietary business logic into an untouchable competitive moat with clean-code architectures, resilient APIs, and future-proof codebases.",
    detailedDescription:
      "Off-the-shelf software forces compromise; custom engineering grants absolute market velocity. We architect distributed, high-concurrency software systems built on domain-driven design. Whether you are modernizing monolithic debt into event-driven microservices or pioneering an entirely new fintech protocol, we deliver bulletproof code with comprehensive test coverage.",
    capabilities: [
      "High-concurrency distributed backend microservices (Go, Node, Python, Java)",
      "Reactive modern frontends with micro-frontend architectures",
      "High-throughput transactional databases with zero-loss consensus",
      "Robust REST, GraphQL, and gRPC contract-driven APIs",
    ],
    deliverables: [
      "Production-grade source code with 90%+ unit and e2e test suites",
      "Interactive OpenAPI / Swagger documentation & Postman collections",
      "Modular design system with reusable component libraries",
      "Full IP transfer and CI/CD automated deployment pipelines",
    ],
    technologies: ["TypeScript", "Go", "Python", "Node.js", "PostgreSQL", "Kafka", "Docker", "Redis"],
    metrics: [
      { label: "Concurrent TPS", value: "100k+" },
      { label: "Test Coverage", value: "92%" },
      { label: "Code Quality", value: "A+ SonarQube" },
    ],
    accentGradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    iconName: "Code2",
  },
  {
    id: "mobile-app-engineering",
    slug: "mobile-app-engineering",
    number: "03",
    title: "Mobile App Engineering",
    category: "Client Experience",
    promise: "Fluid 120Hz native and cross-platform mobile apps that users obsess over and app stores feature.",
    shortDescription:
      "Native iOS (Swift), Android (Kotlin), and hyper-performant Flutter/React Native builds with offline-first synchronization and biometric security.",
    detailedDescription:
      "A great mobile app is not just a resized website; it is an intimate, tactile pocket extension of your brand. We engineer native iOS and Android apps with 120 FPS buttery physics, instant haptic responses, biometrics, offline-first local SQLite caching, and deep hardware sensor integrations that earn 4.9-star ratings.",
    capabilities: [
      "Native iOS (Swift / SwiftUI) & Native Android (Kotlin / Jetpack Compose)",
      "High-performance cross-platform Flutter & React Native architectures",
      "Offline-first synchronization with conflict resolution engines",
      "Deep sensor integration: NFC, Bluetooth Low Energy, Biometrics & ARKit",
    ],
    deliverables: [
      "Store-ready production APK / AAB and iOS IPA bundles",
      "App Store & Google Play launch management and compliance approval",
      "Integrated push notification engines and in-app analytics",
      "Automated TestFlight & Fastlane build pipelines",
    ],
    technologies: ["SwiftUI", "Jetpack Compose", "Flutter", "React Native", "Firebase", "SQLite", "Fastlane"],
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Crash-Free Users", value: "99.9%" },
      { label: "App Store Rating", value: "4.9 ★" },
    ],
    accentGradient: "from-fuchsia-500 to-pink-600",
    glowColor: "rgba(217, 70, 239, 0.4)",
    iconName: "Smartphone",
  },
  {
    id: "cloud-devops-solutions",
    slug: "cloud-devops-solutions",
    number: "04",
    title: "Cloud & DevOps Solutions",
    category: "Infrastructure",
    promise: "Self-healing Kubernetes clusters, immutable Terraform IaC, and 70% lower cloud infrastructure waste.",
    shortDescription:
      "Architect multi-cloud resilience across AWS, Azure, and GCP with automated CI/CD pipelines and real-time observability.",
    detailedDescription:
      "Scale from 100 users to 10 million without engineering panic. Our certified cloud architects build GitOps-driven, immutable infrastructure as code (Terraform/OpenTofu). We implement autonomous autoscaling, automated canary deployments, zero-trust network policies, and FinOps practices that drastically slash your AWS/Azure bills.",
    capabilities: [
      "Multi-cloud architectures across AWS, Microsoft Azure, and Google Cloud",
      "Kubernetes (EKS/GKE) orchestration with Istio service mesh",
      "Infrastructure-as-Code (Terraform / Terragrunt / Pulumi)",
      "Zero-downtime blue/green & automated canary release pipelines",
    ],
    deliverables: [
      "Production-ready Kubernetes clusters with horizontal pod autoscalers",
      "FinOps cloud spend audit with guaranteed cost optimization",
      "SOC2 & ISO27001-compliant network topology diagrams",
      "Automated backup, failover, and disaster recovery runbooks",
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "ArgoCD"],
    metrics: [
      { label: "Cloud Cost Reduction", value: "35-50%" },
      { label: "Deploy Frequency", value: "Multiple/Day" },
      { label: "Recovery Time", value: "< 5 mins" },
    ],
    accentGradient: "from-sky-400 to-indigo-600",
    glowColor: "rgba(14, 165, 233, 0.4)",
    iconName: "CloudLightning",
  },
  {
    id: "enterprise-platforms",
    slug: "enterprise-platforms",
    number: "05",
    title: "Enterprise Platforms",
    category: "Scalability & Core Systems",
    promise: "Unify fragmented departments into synchronized, automated operational powerhouses.",
    shortDescription:
      "Custom ERPs, intelligent CRM integrations, supply chain portals, and legacy system modernization engineered for massive compliance and security.",
    detailedDescription:
      "Enterprise bloat and disjointed legacy software drain millions in lost productivity. We engineer unified enterprise platforms that connect disparate data silos, legacy mainframes, SAP/Salesforce systems, and modern SaaS into one coherent, real-time command cockpit.",
    capabilities: [
      "Custom ERP and Supply Chain Execution engines with real-time analytics",
      "Enterprise CRM modernization and bidirectional SAP/Salesforce bridges",
      "Role-Based Access Control (RBAC), SSO, and SAML/OAuth enterprise auth",
      "Event-driven workflow engines replacing manual human spreadsheets",
    ],
    deliverables: [
      "Comprehensive platform architecture blueprint and entity relationship models",
      "High-throughput data migration scripts with zero data discrepancy",
      "Executive real-time KPI dashboards and audit trail logs",
      "End-user training manuals and change management documentation",
    ],
    technologies: ["PostgreSQL", "Kafka", "Temporal.io", "React", "Node.js", "Snowflake", "Docker"],
    metrics: [
      { label: "Process Velocity", value: "+300%" },
      { label: "Data Latency", value: "< 80ms" },
      { label: "Manual Effort Cut", value: "85%" },
    ],
    accentGradient: "from-amber-400 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    iconName: "Boxes",
  },
  {
    id: "logo-banner-video-production",
    slug: "logo-banner-video-production",
    number: "06",
    title: "Logo, Banner & Video Production",
    category: "Branding & Motion Design",
    promise: "Distinctive brand identities, kinetic 3D motion graphics, and cinematic video assets that demand attention.",
    shortDescription:
      "Visual storytelling that elevates your brand perception from a generic vendor to an industry-defining authority.",
    detailedDescription:
      "In a crowded digital world, design is your strongest strategic moat. Our creative studio crafts complete visual identity systems, vector brand typography, high-converting banner suites, 3D product animations, and cinematic brand video productions that convert viewers into loyal believers.",
    capabilities: [
      "Holistic visual brand identity: vector logos, typography suites & style guides",
      "High-converting digital ad banner sets (HTML5 animated & multi-aspect static)",
      "3D product modeling, rendering, and dynamic motion graphic commercials",
      "Cinematic explainer videos, brand trailers & product walkthroughs",
    ],
    deliverables: [
      "Complete Brand Guidelines Book (colors, typography, grid, usage rules)",
      "Full vector asset kit (SVG, EPS, PNG, high-res dark/light lockups)",
      "4K rendered video productions with commercial broadcast licensing",
      "Figma design component kit for seamless digital expansion",
    ],
    technologies: ["After Effects", "Blender 3D", "Figma", "Cinema 4D", "Premiere Pro", "Illustrator"],
    metrics: [
      { label: "Brand Recall Boost", value: "+210%" },
      { label: "Ad Click-Through", value: "3.4x" },
      { label: "Production Resolution", value: "4K / 8K" },
    ],
    accentGradient: "from-rose-500 to-purple-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    iconName: "Sparkles",
  },
  {
    id: "agentic-ai",
    slug: "agentic-ai",
    number: "07",
    title: "Agentic AI & Autonomous Systems",
    category: "Next-Gen Intelligence",
    promise: "Autonomous AI agents that reason, plan, execute multi-step tool calls, and run entire business workflows.",
    shortDescription:
      "Beyond basic chatbots: intelligent agents with persistent memory, tool retrieval, and real-time decision-making loops.",
    detailedDescription:
      "The era of simple LLM text generation is over; the future belongs to autonomous action. We build custom Agentic AI architectures where specialized agents collaborate: analyzing documents, executing database queries, orchestrating multi-system APIs, validating output with reflection loops, and executing complex corporate operations without human fatigue.",
    capabilities: [
      "Multi-agent swarm coordination (Supervisor, Worker & Reviewer loops)",
      "Autonomous tool use, web retrieval, SQL synthesis & API execution",
      "RAG (Retrieval-Augmented Generation) on multi-million document stores",
      "Custom domain fine-tuning and secure local/on-premise LLM inference",
    ],
    deliverables: [
      "Custom Autonomous Agent orchestrator deployed to your private VPC",
      "Vector search pipeline (pgvector / Pinecone / Milvus) with hybrid retrieval",
      "Comprehensive telemetry dashboard tracking token costs and latency",
      "Automated evaluation benchmark harness with safety guardrails",
    ],
    technologies: ["LangChain", "LlamaIndex", "Claude / GPT-4o", "DeepSeek", "pgvector", "Python", "FastAPI"],
    metrics: [
      { label: "Workflow Automation", value: "94%" },
      { label: "Decision Accuracy", value: "99.2%" },
      { label: "ROI Payback", value: "< 90 Days" },
    ],
    accentGradient: "from-purple-500 via-pink-500 to-cyan-400",
    glowColor: "rgba(168, 85, 247, 0.45)",
    iconName: "Cpu",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "08",
    title: "Digital Marketing & Growth",
    category: "Revenue & Scale",
    promise: "Data-driven performance marketing, high-intent technical SEO, and viral multi-channel acquisition funnels.",
    shortDescription:
      "Stop wasting budget on vanity metrics. We construct predictable customer acquisition pipelines with measurable CAC:LTV efficiency.",
    detailedDescription:
      "Marketing without deep analytics is guesswork. Our growth engineers combine technical SEO, programmatic content engines, hyper-targeted Google and Meta performance ads, and high-converting landing page optimization to flood your sales pipeline with qualified enterprise and consumer leads.",
    capabilities: [
      "Technical SEO & programmatic search dominance targeting buyer intent",
      "Multi-channel paid performance acquisition (Google Ads, Meta, LinkedIn Ads)",
      "Full-funnel conversion rate optimization (CRO) and multivariate A/B testing",
      "Authority content syndication, newsletter funnels & automated nurture sequences",
    ],
    deliverables: [
      "Unified Google Analytics 4 & BigQuery attribution data warehouse",
      "High-converting responsive landing page variants with heatmaps",
      "Bi-weekly CAC, ROAS, and pipeline velocity executive reports",
      "Omni-channel automated email & SMS nurture flows",
    ],
    technologies: ["GA4", "Google Tag Manager", "Meta Ads", "Google Ads", "HubSpot", "Semrush", "VWO"],
    metrics: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "Organic Search Growth", value: "+380%" },
      { label: "Lead Pipeline Velocity", value: "2.4x" },
    ],
    accentGradient: "from-emerald-400 to-teal-600",
    glowColor: "rgba(52, 211, 153, 0.4)",
    iconName: "TrendingUp",
  },
  {
    id: "and-everything-else-in-software",
    slug: "and-everything-else-in-software",
    number: "09",
    title: "And Everything Else in Software",
    category: "Full Spectrum Capabilities",
    promise: "If it can be computed, architected, secured, or designed—we engineer it with master-class precision.",
    shortDescription:
      "QA & Automated Testing, UI/UX Design, Data Warehousing, Cybersecurity Audits, ERP/CRM Customization, Legacy Migrations, and Strategic CTO Consulting.",
    detailedDescription:
      "Technology doesn't fit into neat little boxes. When complex, cross-disciplinary challenges emerge—whether it is a pre-IPO SOC2 security audit, reverse-engineering undocumented legacy firmware, building custom hardware middleware, or architecting a real-time predictive analytics lakehouse—Hasini Informatics is the single elite team you call.",
    capabilities: [
      "Quality Assurance & automated End-to-End test harnesses (Playwright, Cypress)",
      "Awwwards-level UI/UX research, wireframing & interactive micro-interactions",
      "Cybersecurity penetration testing, vulnerability remediation & zero-trust posture",
      "Data lakes, ETL data pipelines & executive business intelligence dashboards",
      "Fractional CTO advisory, technical due diligence & architecture governance",
      "Custom ERP / CRM integrations, middleware & legacy modernization",
    ],
    deliverables: [
      "Dedicated senior engineering task force customized to your problem",
      "Complete architectural documentation and disaster-ready source code",
      "Guaranteed delivery milestone schedules backed by SLA contracts",
      "Post-deployment hypercare and staff augmentation options",
    ],
    technologies: ["Playwright", "Figma", "Snowflake", "Databricks", "OWASP", "GraphQL", "Zapier", "Kubernetes"],
    metrics: [
      { label: "Engineering Breadth", value: "Full Stack" },
      { label: "Security Clearance", value: "Zero Trust" },
      { label: "Client Satisfaction", value: "100%" },
    ],
    accentGradient: "from-gradient-purple via-gradient-cyan to-gradient-pink",
    glowColor: "rgba(124, 58, 237, 0.5)",
    iconName: "Layers",
    isClosingCard: true,
  },
];
