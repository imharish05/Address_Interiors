import React from "react";
import { ArrowUpRight, Compass, Sparkles, Feather } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden"
    >
      {/* Decorative subtle ambient wave in background */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Asymmetrical Curved Imagery & Floating Accent */}
          <div className="lg:col-span-6 relative">
            <AnimatedSection direction="right" delay={0.1}>
              {/* Main Lifestyle Architectural Photo */}
              <div className="relative z-10">
                <ImageReveal
                  src={ABOUT_CONTENT.image}
                  alt="Address Interiors Crafted Living Space with Warm Textures"
                  aspectRatio="aspect-[4/5]"
                  arch="organic"
                  className="shadow-xl"
                />

                {/* Secondary Inset Detail Image */}
                <div className="absolute -bottom-8 -right-6 sm:-bottom-12 sm:-right-8 w-1/2 sm:w-5/12 aspect-square z-20 rounded-3xl overflow-hidden border-4 border-secondary shadow-2xl bg-secondary">
                  <img
                    src={ABOUT_CONTENT.secondaryImage}
                    alt="Bespoke honed stone and oak joinery detail"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Craftsmanship Badge Overlay - Cleanly aligned inside top-left with backdrop blur */}
                <div className="absolute top-6 left-6 z-20 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-primary/95 text-secondary shadow-2xl backdrop-blur-md flex items-center gap-3 border border-secondary/20">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-luxury uppercase text-secondary/60 font-medium">
                      Standard
                    </p>
                    <p className="text-xs sm:text-sm font-medium tracking-wide text-secondary">
                      Millimeter Precision
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Editorial Brand Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            <AnimatedSection delay={0.2}>
              <SectionHeading
                badge={ABOUT_CONTENT.badge}
                title={ABOUT_CONTENT.heading}
                className="mb-6"
              />
            </AnimatedSection>

            {/* Paragraphs */}
            <div className="space-y-4 text-foreground/80 font-normal leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <AnimatedSection key={index} delay={0.25 + index * 0.1}>
                  <p>{para}</p>
                </AnimatedSection>
              ))}
            </div>

            {/* Pull Quote Box */}
            <AnimatedSection delay={0.5} className="w-full my-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-primary/5 border-l-2 border-primary">
                <blockquote className="text-base sm:text-lg font-light italic text-foreground tracking-tight leading-snug">
                  {ABOUT_CONTENT.quote}
                </blockquote>
                <cite className="block mt-3 text-xs uppercase tracking-widest text-foreground/60 not-italic font-medium">
                  {ABOUT_CONTENT.author}
                </cite>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.6}>
              <Button asChild size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  <span>{ABOUT_CONTENT.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
