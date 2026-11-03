import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import AnswerSection from "@/components/home/AnswerSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StatsSection from "@/components/home/StatsSection";
import TechMarqueeSection from "@/components/home/TechMarqueeSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Experience */}
      <HeroSection />

      {/* 2. The Problem / Industry Friction */}
      <ProblemSection />

      {/* 3. Our Answer / The 3 Pillars (Build, Run, Grow) */}
      <AnswerSection />

      {/* 4. Complete Services Bento Grid & Interactive Modal */}
      <ServicesSection />

      {/* 5. The 5-D Process Methodology Timeline */}
      <ProcessSection />

      {/* 6. Dedicated Leadership Section (Founders & Visionaries) */}
      <LeadershipSection />

      {/* 7. Selected Work / Projects Showcase & Category Filters */}
      <ProjectsSection />

      {/* 8. Numbers & Production Metrics */}
      <StatsSection />

      {/* 9. Technology Stack Infinite Marquee */}
      <TechMarqueeSection />

      {/* 10. Executive Testimonials Carousel */}
      <TestimonialsSection />

      {/* 11 & 12. Giant Final CTA & Interactive Contact Form */}
      <ContactSection />
    </div>
  );
}
