import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopOnRoute from "./components/common/ScrollToTopOnRoute";
import PageSkeleton from "./components/common/PageSkeleton";
import HomePage from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const PhilosophyPage = lazy(() => import("./pages/PhilosophyPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  useEffect(() => {
    const handleChunkLoadError = (event) => {
      const message = event?.message || event?.reason?.message || "";
      const isChunkLoadError =
        event?.name === "vite:preloadError" ||
        /failed to fetch dynamically imported module|importing a module script failed/i.test(message);

      if (!isChunkLoadError) return;

      const reloadKey = `chunk-reload:${window.location.pathname}`;
      if (sessionStorage.getItem(reloadKey)) return;

      sessionStorage.setItem(reloadKey, "1");
      window.location.reload();
    };

    const clearReloadGuard = () => {
      sessionStorage.removeItem(`chunk-reload:${window.location.pathname}`);
    };

    window.addEventListener("vite:preloadError", handleChunkLoadError);
    window.addEventListener("error", handleChunkLoadError);
    window.addEventListener("load", clearReloadGuard, { once: true });

    return () => {
      window.removeEventListener("vite:preloadError", handleChunkLoadError);
      window.removeEventListener("error", handleChunkLoadError);
      window.removeEventListener("load", clearReloadGuard);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-secondary">
      <ScrollToTopOnRoute />
      <Navbar />

      <main id="main-content">
        <Suspense fallback={<PageSkeleton />}>
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
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
