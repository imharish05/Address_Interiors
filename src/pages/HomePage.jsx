import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InspirationSection from "@/components/sections/InspirationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ProcessSection />
      <TestimonialsSection />
      <InspirationSection />
    </>
  );
}
