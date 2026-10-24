import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopOnRoute from "./components/common/ScrollToTopOnRoute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-secondary">
      <ScrollToTopOnRoute />
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
