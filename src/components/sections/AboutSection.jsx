import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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
            <div className="space-y-4 text-[#1A1A1A]/90 font-normal leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <AnimatedSection key={index} delay={0.25 + index * 0.1}>
                  <p>{para}</p>
                </AnimatedSection>
              ))}
            </div>

            {/* Pull Quote Box */}
            <AnimatedSection delay={0.5} className="w-full my-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-primary/5 border-l-2 border-primary">
                <blockquote className="text-base sm:text-lg font-light italic text-[#1A1A1A] tracking-tight leading-snug">
                  {ABOUT_CONTENT.quote}
                </blockquote>
                <cite className="block mt-3 text-xs uppercase tracking-widest text-[#1A1A1A]/70 not-italic font-medium">
                  {ABOUT_CONTENT.author}
                </cite>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link to="/about" className="flex items-center gap-2">
                    <span>Learn More About Us</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{ABOUT_CONTENT.ctaText}</span>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
