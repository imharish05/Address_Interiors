import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden border-t border-primary/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <SectionHeading
            badge="Client Perspectives"
            title="Voices of Sanctuary"
            subtitle="Reflections from patrons whose domestic landscapes were reimagined by our studio."
            align="center"
          />
        </AnimatedSection>

        {/* Carousel Container */}
        <div className="relative p-8 sm:p-14 lg:p-16 rounded-[2.5rem] bg-primary/[0.03] border border-primary/15 shadow-sm">
          {/* Subtle Quote Icon */}
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
            <Quote className="w-6 h-6 stroke-[1.5]" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight leading-snug mb-10 min-h-[140px] sm:min-h-[100px] flex items-center">
            “{current.quote}”
          </blockquote>

          {/* Author Details and Controls */}
          <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-lg font-normal text-primary tracking-wide">
                {current.author}
              </p>
              <p className="text-xs text-primary/60 tracking-wider uppercase mt-1">
                {current.residence} • <span className="font-mono text-primary/70">{current.project}</span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-primary/50 mr-2">
                0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
              </span>

              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Transparent Sample Content Disclaimer */}
        <p className="text-center text-[11px] text-primary/45 uppercase tracking-widest mt-8 font-light">
          Sample client impressions curated for portfolio presentation
        </p>
      </div>
    </section>
  );
}
