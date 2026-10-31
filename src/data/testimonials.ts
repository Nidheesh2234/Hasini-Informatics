export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  metricHighlight: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "[EDIT] Hasini Informatics completely dismantled our architectural bottleneck. Their engineering team didn't just deliver our autonomous commerce pipeline—they taught our internal team how to think in high-concurrency event streams.",
    author: "Kavitha Ranganathan",
    title: "Chief Technology Officer",
    company: "Zynx Retail Global [EDIT]",
    industry: "Enterprise E-Commerce",
    avatar: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    metricHighlight: "+340% Order Velocity",
  },
  {
    id: "test-2",
    quote:
      "[EDIT] When you are building healthcare systems, zero downtime is literally a matter of life safety. Dr. Suvarna Kumar and his team architected a platform that has never suffered a single outage in two years of continuous operation.",
    author: "David Vance, MD",
    title: "Head of Digital Health",
    company: "Aura Clinical Systems [EDIT]",
    industry: "HealthTech & Telemetry",
    avatar: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    metricHighlight: "99.999% Zero Downtime",
  },
  {
    id: "test-3",
    quote:
      "[EDIT] We interviewed top software consultancies across North America and Europe. Hasini Informatics out-designed, out-engineered, and out-paced every single one of them. Their Agentic AI workflows saved our operations team 1,200 hours per month.",
    author: "Alistair Finch",
    title: "VP of Enterprise Automation",
    company: "Novus Logistics Corp [EDIT]",
    industry: "Supply Chain & Logistics",
    avatar: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    metricHighlight: "1,200 hrs/mo Saved",
  },
  {
    id: "test-4",
    quote:
      "[EDIT] Dr. Sandhya Devi's operational rigor and strategic communication made our multi-cloud migration feel seamless. They delivered ahead of schedule and reduced our AWS bill by 41% on month one.",
    author: "Priya Nair",
    title: "SVP of Engineering",
    company: "PayMatrix Financial [EDIT]",
    industry: "FinTech & Payments",
    avatar: "/images/testimonials/avatar-4.jpg",
    rating: 5,
    metricHighlight: "41% Cloud Bill Reduction",
  },
];
