import React from "react";
import { PHILOSOPHY_CONTENT } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 lg:pb-8 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 border-t border-primary/10 overflow-hidden"
    >
      {/* Abstract architectural contour SVG in background */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-[900px] h-[900px] text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        >
          <circle cx="400" cy="400" r="150" strokeDasharray="3 3" />
          <circle cx="400" cy="400" r="280" />
          <path d="M100 400 C 250 200, 550 600, 700 400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-10 sm:mb-12 text-center">
          <SectionHeading
            badge={PHILOSOPHY_CONTENT.badge}
            title={PHILOSOPHY_CONTENT.heading}
            subtitle={PHILOSOPHY_CONTENT.subheading}
            align="center"
          />
        </AnimatedSection>

        {/* Editorial Principles Showcase — Alternating Tiered Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {PHILOSOPHY_CONTENT.principles.map((item, index) => (
            <AnimatedSection
              key={item.number}
              delay={0.15 * (index + 1)}
              className="flex"
            >
              <div className="w-full relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-primary/[0.03] border border-primary/15 hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-500 group">
                {/* Top Section with Number and Subtitle */}
                <div>
                  <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-primary/10">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-primary/40 group-hover:text-primary transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-luxury text-primary/60 font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-primary tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1A1A1A]/85 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Material Palette Badge */}
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <span className="block text-[10px] uppercase tracking-luxury text-primary/50 mb-1.5">
                    Tactile Palette
                  </span>
                  <span className="text-xs font-mono text-primary/80">
                    {item.materials}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
