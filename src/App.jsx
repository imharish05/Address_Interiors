import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PhilosophySection from "./components/sections/PhilosophySection";
import ServicesSection from "./components/sections/ServicesSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProcessSection from "./components/sections/ProcessSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import InspirationSection from "./components/sections/InspirationSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-secondary">
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
        <ProcessSection />
        <TestimonialsSection />
        <InspirationSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
