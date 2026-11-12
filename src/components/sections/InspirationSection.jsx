import React from "react";
import { ArrowUpRight } from "lucide-react";
import { INSPIRATION_GALLERY } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionDivider from "@/components/common/SectionDivider";
import SmartImage from "@/components/common/SmartImage";

export default function InspirationSection() {
  return (
    <section
      id="inspiration"
      className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden border-t border-primary/10"
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

        {/* Asymmetrical Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8">
          {INSPIRATION_GALLERY.map((item, index) => {
            const aspectClasses = {
              tall: "aspect-[4/5] sm:aspect-[3/4]",
              wide: "aspect-[4/3] md:aspect-[16/11]",
              square: "aspect-square",
            };

            return (
              <AnimatedSection
                key={item.id}
                delay={0.08 * index}
                className="break-inside-avoid mb-6 sm:mb-8"
              >
                <div
                  className={`group relative w-full overflow-hidden rounded-3xl bg-primary/10 border border-primary/15 ${
                    aspectClasses[item.aspect] || "aspect-[4/3]"
                  }`}
                >
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />

                  {/* Soft Vignette Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Category Pill Tag */}
                  <span
                    className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-luxury font-medium text-primary border border-primary/15 shadow-sm"
                    style={{ backgroundColor: "var(--secondary)" }}
                  >
                    {item.category}
                  </span>

                  {/* Architectural Caption Card - Always 100% Solid & Readable */}
                  <div
                    className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-5 rounded-2xl text-primary border border-primary/15 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/30 group-hover:-translate-y-1"
                    style={{ backgroundColor: "var(--secondary)" }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-medium text-primary tracking-tight">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-primary/60 group-hover:text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/85 font-normal mt-1 leading-relaxed">
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
