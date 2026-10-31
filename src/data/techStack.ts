export interface TechItem {
  name: string;
  category: "AI & ML" | "Frontend" | "Backend" | "Cloud & DevOps" | "Data & Storage" | "Creative";
  tag: string;
}

export const techStackData: TechItem[] = [
  { name: "Next.js", category: "Frontend", tag: "App Router / Edge" },
  { name: "React 19", category: "Frontend", tag: "Concurrent Mode" },
  { name: "TypeScript", category: "Frontend", tag: "Strict Type Safety" },
  { name: "Tailwind CSS", category: "Frontend", tag: "Modern Utility UI" },
  { name: "Agentic AI / LangChain", category: "AI & ML", tag: "Autonomous Agents" },
  { name: "Python / FastAPI", category: "Backend", tag: "High Throughput" },
  { name: "Go (Golang)", category: "Backend", tag: "Microservices" },
  { name: "Node.js", category: "Backend", tag: "Distributed Systems" },
  { name: "PostgreSQL & pgvector", category: "Data & Storage", tag: "Relational & Vector" },
  { name: "Apache Kafka", category: "Backend", tag: "Event Streaming" },
  { name: "Redis", category: "Data & Storage", tag: "In-Memory Caching" },
  { name: "Docker & Kubernetes", category: "Cloud & DevOps", tag: "Container Orchestration" },
  { name: "Terraform", category: "Cloud & DevOps", tag: "Infrastructure as Code" },
  { name: "AWS", category: "Cloud & DevOps", tag: "Cloud Architecture" },
  { name: "Google Cloud", category: "Cloud & DevOps", tag: "Global Compute" },
  { name: "Flutter", category: "Frontend", tag: "Cross-Platform Mobile" },
  { name: "Swift & Kotlin", category: "Frontend", tag: "Native 120Hz Mobile" },
  { name: "Figma & Blender 3D", category: "Creative", tag: "Motion & UI Craft" },
  { name: "Claude / GPT-4o", category: "AI & ML", tag: "Multi-Modal Reasoning" },
  { name: "Snowflake & Databricks", category: "Data & Storage", tag: "Enterprise Analytics" },
];
