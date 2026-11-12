import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Maximize2, Calendar, Layers, CheckCircle2 } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import ProjectSliderBar from "@/components/common/ProjectSliderBar";
import { Button } from "@/components/ui/button";

const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
];

const PREVIEW_CARDS = [
  {
    id: "sushma-villa",
    title: "Sushma Villa",
    location: "South City Enclave",
    area: "5,200 sq.ft",
    image: "/images/projects/sushma-villa-1.png",
  },
  {
    id: "rahman-residence",
    title: "Rahman Residence",
    location: "Heritage Boulevard",
    area: "4,600 sq.ft",
    image: "/images/projects/rahman-residence-1.png",
  },
  {
    id: "cafe-commercial",
    title: "Artisan Cafe & Bistro",
    location: "Urban Promenade",
    area: "3,200 sq.ft",
    image: "/images/projects/cafe-commercial-1.png",
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(FEATURED_PROJECTS[0].id);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const currentProject =
    FEATURED_PROJECTS.find((p) => p.id === activeTab) || FEATURED_PROJECTS[0];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter(
          (p) => p.category === selectedCategory || p.tags.includes(selectedCategory)
        );

  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. DISTINCT VISUAL GALLERY MOSAIC STARTING HERO */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24 max-w-7xl mx-auto border-b border-primary/10">
        <AnimatedSection>
          {/* Top Title Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
                Curated Portfolio Archive
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.12]">
                Curated Portfolio Archive
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-normal max-w-md">
              Over 500 bespoke residential and commercial spaces delivered across South India, each tailored to the unique rituals, functional flow, and identity of its patrons.
            </p>
          </div>

          {/* 3-Image Panoramic Preview Gallery Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {PREVIEW_CARDS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  const el = document.getElementById("spotlight");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group text-left relative rounded-2xl overflow-hidden aspect-[16/10] border border-primary/20 hover:border-primary shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-[border-color,transform,box-shadow] duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 text-white">
                  <div className="min-w-0">
                    <span className="text-[11px] text-white/90 font-medium block truncate">
                      {item.location} • {item.area}
                    </span>
                    <h3 className="text-base sm:text-lg font-normal tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 2. FEATURED PROJECT SPOTLIGHT */}
      <section id="spotlight" className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto scroll-mt-28">
        <AnimatedSection className="w-full mb-8">
          <ProjectSliderBar
            projects={FEATURED_PROJECTS}
            activeId={activeTab}
            onChange={setActiveTab}
            eyebrow="Featured Spotlight"
            heading="Select An Architectural Commission"
          />
        </AnimatedSection>

        {/* Spotlight Showcase Card */}
        <AnimatedSection delay={0.15}>
          <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-primary/[0.02] border border-primary/15 p-5 sm:p-10 lg:p-12 shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Left: Dual Imagery */}
                <div className="lg:col-span-7 relative sm:pb-8 lg:pb-0">
                  <div className="relative z-10">
                    <ImageReveal
                      key={currentProject.id}
                      src={currentProject.image}
                      alt={currentProject.title}
                      aspectRatio="aspect-[16/10]"
                      arch="organic"
                      className="shadow-2xl"
                    />

                    {/* Secondary Inset Image */}
                    <div className="hidden sm:block absolute -bottom-8 -right-4 lg:-right-6 w-5/12 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-secondary shadow-2xl z-20">
                      <img
                        src={currentProject.secondaryImage}
                        alt={`${currentProject.title} architectural detail`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Project Narrative */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-primary/75 font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        {currentProject.location}
                      </span>
                      <span aria-hidden="true">•</span>
                      <span>{currentProject.area}</span>
                      <span aria-hidden="true">•</span>
                      <span>{currentProject.year}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-tight mb-4">
                      {currentProject.title}
                    </h3>

                    <p className="text-sm sm:text-base font-normal italic text-primary/80 border-l-2 border-primary/30 pl-4 mb-4">
                      "{currentProject.headline}"
                    </p>

                    <p className="text-sm sm:text-base text-[#1A1A1A]/85 leading-relaxed font-normal mb-6">
                      {currentProject.description}
                    </p>

                    {/* Tactile Material Palette */}
                    <div className="mb-6 pt-5 border-t border-primary/10">
                      <span className="text-xs font-semibold text-primary/70 block mb-2">
                        Tactile Materiality
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.palette.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-[#1A1A1A] border border-primary/15"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scope Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <span>Inquire Similar Commission</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. ALL RESIDENCES ARCHIVE GRID */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 bg-primary/[0.02] border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
              Comprehensive Archive
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
              Explore Our Portfolio
            </h2>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
              Every space is an original creation — designed around the lifestyle, rituals, and architectural aspirations of its patrons.
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-6 mb-6 sm:mb-8">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[44px] px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-primary text-white border-[1.5px] border-primary shadow-md font-semibold"
                      : "bg-white text-[#1A1A1A] border-[1.5px] border-[#1A1A1A]/20 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:-translate-y-0.5 active:scale-[0.97] shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 * (index + 1)}>
                <div className="group rounded-3xl bg-secondary border border-primary/15 overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 flex flex-col justify-between h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-start justify-between gap-2 pointer-events-none">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/95 backdrop-blur-md text-primary border border-primary/15 shadow-sm max-w-[65%] truncate">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      <div className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-secondary/90 backdrop-blur-md text-[#1A1A1A] border border-primary/10 shrink-0">
                        {project.area}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#1A1A1A]/75 font-medium mb-2">
                        <span>{project.tags.join(" • ")}</span>
                        <span>Completed {project.year}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-light text-primary tracking-tight mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#1A1A1A]/85 font-normal leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="pt-4 border-t border-primary/10 mb-6 flex flex-wrap gap-1.5">
                        {project.palette.map((p, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-primary/5 text-[#1A1A1A]/80 font-normal"
                          >
                            {p}
                          </span>
                        ))}
                      </div>

                      <Button asChild variant="outline" className="w-full group/btn">
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          <span>Inquire About This Style</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIAL HIGHLIGHT */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <span className="font-serif text-6xl text-primary/30 block mb-2">“</span>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight leading-relaxed mb-6">
            Address Interiors did not just redesign our penthouse; they completely changed the tempo of our lives. Coming home now feels like entering an acoustic haven of quiet calm and supreme comfort.
          </p>
          <div className="text-sm font-medium text-[#1A1A1A]">
            Julian & Claire Montgomery — <span className="text-primary font-normal">Kensington Enclave Residence</span>
          </div>
        </AnimatedSection>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-primary p-6 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl">
            <img
              src="/images/projects/projects-cta.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                Private Commission
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                Ready to Create Your Own Architectural Sanctuary?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8">
                Schedule an atelier walkthrough with our principal architects to review live material samples, previous build budgets, and floor plan feasibility.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button asChild variant="light" size="lg" className="w-full sm:w-auto">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <span>Schedule Atelier Consultation</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <Button asChild variant="lightOutline" size="lg" className="w-full sm:w-auto">
                  <Link to="/process">Explore Our 5-Stage Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
