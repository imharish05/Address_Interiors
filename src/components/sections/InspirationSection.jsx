import React from "react";
import { INSPIRATION_GALLERY } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionDivider from "@/components/common/SectionDivider";

export default function InspirationSection() {
  return (
    <section
      id="inspiration"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden border-t border-primary/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <SectionHeading
            badge="Visual Anthology"
            title="Moments of Living Architecture"
            subtitle="An editorial exploration of textured minimalism, natural illumination, and tactile finishes curated by Address Interiors."
            align="center"
          />
        </AnimatedSection>

        {/* Asymmetrical Masonry-Inspired Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSPIRATION_GALLERY.map((item, index) => {
            const aspectClasses = {
              tall: "aspect-[3/4]",
              wide: "aspect-[16/11]",
              square: "aspect-square",
            };

            return (
              <AnimatedSection
                key={item.id}
                delay={0.08 * index}
                className="flex"
              >
                <div
                  className={`group relative w-full overflow-hidden rounded-3xl bg-primary/10 border border-primary/15 ${
                    aspectClasses[item.aspect] || "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-40 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-luxury font-medium bg-secondary/90 backdrop-blur-md text-primary border border-primary/10">
                    {item.category}
                  </span>

                  {/* Hover Caption Reveal */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-secondary">
                    <h3 className="text-lg font-light tracking-tight mb-1 text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Abstract Architectural Separator */}
        <SectionDivider variant="contour" className="mt-8" />
      </div>
    </section>
  );
}
