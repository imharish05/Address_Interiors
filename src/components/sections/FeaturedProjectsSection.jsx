import React, { useState } from "react";
import { ArrowUpRight, Sparkles, MapPin, Maximize2 } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState(FEATURED_PROJECTS[0].id);

  const currentProject =
    FEATURED_PROJECTS.find((p) => p.id === activeTab) || FEATURED_PROJECTS[0];

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 border-t border-primary/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-12">
          <AnimatedSection>
            <SectionHeading
              badge="Portfolio Showcase"
              title="Curated Private Residences"
              subtitle="An architectural anthology of bespoke residential works balancing raw materiality with serene comfort."
            />
          </AnimatedSection>

          {/* Interactive Project Switcher Pill Tabs */}
          <AnimatedSection delay={0.2} className="md:self-end">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-primary/5 border border-primary/15">
              {FEATURED_PROJECTS.map((project) => {
                const isActive = activeTab === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveTab(project.id)}
                    className={`px-4 sm:px-5 py-2 text-xs font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary text-secondary shadow-sm"
                        : "text-primary/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {project.title}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Active Featured Project Hero Feature */}
        <div className="relative rounded-3xl bg-primary/[0.02] border border-primary/15 p-6 sm:p-10 lg:p-12 mb-10 sm:mb-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Project Imagery with Secondary Inset */}
            <div className="lg:col-span-7 relative">
              <div className="relative z-10">
                <ImageReveal
                  src={currentProject.image}
                  alt={currentProject.title}
                  aspectRatio="aspect-[16/10]"
                  arch="organic"
                  className="shadow-2xl"
                />

                {/* Secondary Inset Image */}
                <div className="hidden sm:block absolute -bottom-8 -right-6 w-5/12 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-secondary shadow-2xl z-20">
                  <img
                    src={currentProject.secondaryImage}
                    alt={`${currentProject.title} architectural detail`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right: Project Editorial Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-luxury text-primary/60 mb-3">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentProject.location}
                  </span>
                  <span>•</span>
                  <span>{currentProject.area}</span>
                  <span>•</span>
                  <span>{currentProject.year}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-primary tracking-tight leading-tight mb-4">
                  {currentProject.title}
                </h3>

                <p className="text-base font-light italic text-primary/80 mb-6 leading-relaxed">
                  "{currentProject.headline}"
                </p>

                <p className="text-sm text-primary/75 font-normal leading-relaxed mb-8">
                  {currentProject.description}
                </p>
              </div>

              {/* Materiality Palette & Tags */}
              <div className="space-y-4 pt-6 border-t border-primary/10">
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-primary/50 block mb-2 font-medium">
                    Signature Materials
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.palette.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-primary/5 border border-primary/10 text-primary font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-primary/60 font-light"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Secondary Project Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.filter((p) => p.id !== activeTab).map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveTab(proj.id)}
              className="group cursor-pointer rounded-2xl p-4 bg-primary/[0.02] border border-primary/10 hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-primary/10">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-primary/60 mb-1">
                <span>{proj.location}</span>
                <span>{proj.year}</span>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="text-lg font-light text-primary group-hover:underline underline-offset-4">
                  {proj.title}
                </h4>
                <ArrowUpRight className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
