export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  isEditable?: boolean;
}

export const statsData: StatItem[] = [
  {
    id: "years",
    value: 12, // [EDIT: Years in operation]
    suffix: "+",
    label: "Years of Engineering Excellence",
    description: "Battle-tested architectural leadership since 2014.",
    isEditable: true,
  },
  {
    id: "projects",
    value: 280, // [EDIT: Number of delivered projects]
    suffix: "+",
    label: "Mission-Critical Deployments",
    description: "Across enterprise web, mobile, cloud, and AI domains.",
    isEditable: true,
  },
  {
    id: "uptime",
    value: 99.99, // [EDIT: Historical uptime percentage]
    suffix: "%",
    label: "Historical Production Uptime",
    description: "Guaranteed high-availability SLAs for global clients.",
    isEditable: true,
  },
  {
    id: "clients",
    value: 98, // [EDIT: Total active enterprise clients]
    suffix: "+",
    label: "Enterprise Partners & Brands",
    description: "From hyper-growth unicorns to Fortune 500 enterprises.",
    isEditable: true,
  },
  {
    id: "countries",
    value: 16, // [EDIT: Global geographic reach]
    suffix: "+",
    label: "Countries Reached",
    description: "Delivering solutions across India, US, UK, UAE & APAC.",
    isEditable: true,
  },
];
