import React, { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import SmartImage from "@/components/common/SmartImage";

// The homepage portfolio showcases the nine projects other than Sushma Villa.
const HOMEPAGE_PORTFOLIO_PROJECTS = FEATURED_PROJECTS.filter(
  (project) => project.id !== "sushma-villa"
);

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState(HOMEPAGE_PORTFOLIO_PROJECTS[0].id);

  const currentProject =
    HOMEPAGE_PORTFOLIO_PROJECTS.find((p) => p.id === activeTab) || HOMEPAGE_PORTFOLIO_PROJECTS[0];

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-secondary scroll-mt-20 border-t border-primary/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header + Horizontal Project Slider */}
        <AnimatedSection className="w-full mb-10 sm:mb-12">
          <div className="flex flex-col gap-5 sm:gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs uppercase tracking-luxury font-medium bg-primary/10 text-primary border border-primary/20 mb-2">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-primary text-balance">
                Curated Private Residences
              </h2>
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1" role="group" aria-label="Choose a portfolio project">
              {HOMEPAGE_PORTFOLIO_PROJECTS.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  aria-pressed={activeTab === project.id}
                  onClick={() => setActiveTab(project.id)}
                  className={`min-h-[44px] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full whitespace-nowrap shrink-0 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 ${activeTab === project.id ? "bg-primary text-white border-primary" : "bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:bg-[#1A1A1A] hover:text-white"}`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Active Featured Project Hero Feature */}
        <div className="relative rounded-3xl bg-primary/[0.02] border border-primary/15 p-5 sm:p-10 lg:p-12 mb-10 sm:mb-12 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left: Project Imagery with Secondary Inset */}
              <div className="lg:col-span-7 relative sm:pb-8">
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
                    <SmartImage
                      src={currentProject.secondaryImage}
                      alt={`${currentProject.title} architectural detail`}
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Project Editorial Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm uppercase tracking-luxury text-[#1A1A1A]/75 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {currentProject.location}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span>{currentProject.area}</span>
                    <span aria-hidden="true">•</span>
                    <span>{currentProject.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-tight mb-4">
                    {currentProject.title}
                  </h3>

                  <p className="text-base sm:text-xl font-light italic text-[#1A1A1A]/85 mb-5 sm:mb-6 leading-relaxed">
                    "{currentProject.headline}"
                  </p>

                  <p className="text-sm sm:text-base text-[#1A1A1A]/90 font-normal leading-relaxed mb-6 sm:mb-8">
                    {currentProject.description}
                  </p>
                </div>

                {/* Materiality Palette & Tags */}
                <div className="space-y-4 pt-6 border-t border-primary/10">
                  <div>
                    <span className="text-xs uppercase tracking-luxury text-primary block mb-2 font-semibold">
                      Signature Materials
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.palette.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A] font-mono font-medium"
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
                        className="text-xs sm:text-sm text-[#1A1A1A]/80 font-medium"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOMEPAGE_PORTFOLIO_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveTab(proj.id)}
              className="group text-left w-full cursor-pointer rounded-2xl p-4 bg-white border border-primary/15 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-primary/10">
                <SmartImage
                  src={proj.image}
                  alt={proj.title}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-[#1A1A1A]/75 mb-1.5 font-medium">
                <span>{proj.location}</span>
                <span>{proj.year}</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <h4 className="text-xl font-light text-primary group-hover:text-[#1A1A1A] transition-colors duration-200">
                  {proj.title}
                </h4>
                <span className="w-9 h-9 rounded-full border-[1.5px] border-primary/40 bg-white text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
