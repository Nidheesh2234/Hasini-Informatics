export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  output: string;
  duration: string;
  accent: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Unearthing the Core Imperative",
    description:
      "We immerse ourselves in your domain, legacy codebases, business bottlenecks, and unit economics. We cut through noise to define the exact technical problem that yields the highest ROI.",
    activities: [
      "Stakeholder and end-user empathy interviews",
      "Legacy architecture forensic audit and tech debt mapping",
      "Data model mapping and technical feasibility benchmarks",
      "Product roadmap definition and ROI KPI alignment",
    ],
    output: "Technical Blueprint, Scope Boundary Document & Risk Matrix",
    duration: "Week 1 - 2",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    step: "02",
    title: "Design",
    tagline: "Architectural Precision & Interactive Soul",
    description:
      "We design both the machine and the experience. System architects draft microservices topologies and database schemas while our design studio shapes award-winning design systems with tactile micro-interactions.",
    activities: [
      "Distributed system architecture and database ERD modeling",
      "Interactive high-fidelity Figma prototypes with 60FPS motion specs",
      "Design token hierarchy, accessible color systems & component specs",
      "Security threat modeling and zero-trust perimeter drafting",
    ],
    output: "Clickable High-Fi Prototype, System Architecture Map & Component Kit",
    duration: "Week 2 - 4",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    step: "03",
    title: "Develop",
    tagline: "Relentless Clean-Code Engineering",
    description:
      "We write modular, type-safe, and self-documenting code in agile two-week sprints. Every commit triggers automated linters, vulnerability scanners, and continuous integration test suites.",
    activities: [
      "Type-safe frontend and microservices development with strict linting",
      "Unit, integration, and contract-driven API test harnesses (>90% coverage)",
      "Daily asynchronous standups and bi-weekly working software demos",
      "Edge-case stress testing and concurrency benchmarking",
    ],
    output: "Tested, Documented & Audited Production Codebase",
    duration: "Sprint Cycles",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    step: "04",
    title: "Deploy",
    tagline: "Zero-Downtime Orchestrated Launch",
    description:
      "We provision immutable cloud infrastructure as code, run multi-region smoke tests, execute zero-downtime blue/green deployments, and transfer live traffic smoothly without a dropped packet.",
    activities: [
      "Automated Terraform infrastructure provisioning on AWS/GCP/Azure",
      "Simulated chaos engineering and load-testing up to 5x peak traffic",
      "Canary and blue/green automated traffic switching",
      "Real-time synthetic monitoring and alerting channel configuration",
    ],
    output: "Live High-Availability Production Environment with Autoscaling",
    duration: "Launch Window",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    step: "05",
    title: "Dedicate",
    tagline: "Continuous Evolution & Uptime Guardianship",
    description:
      "Software launch is day zero, not the finish line. Our engineers monitor performance 24/7/365, optimize cloud spend, deploy quarterly feature evolutions, and safeguard your competitive lead.",
    activities: [
      "24/7/365 synthetic monitoring and guaranteed 15-min incident MTTR",
      "Continuous Core Web Vitals and database query performance tuning",
      "Iterative user telemetry review and conversion rate experiments",
      "Quarterly architecture reviews and proactive dependency upgrades",
    ],
    output: "99.99% Uptime Guarantee, Monthly Optimization Audits & Growth Velocity",
    duration: "Ongoing Partnership",
    accent: "from-pink-500 to-amber-400",
  },
];
