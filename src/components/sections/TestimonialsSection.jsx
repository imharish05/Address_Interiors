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
      className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden border-t border-primary/10"
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
        <div className="relative p-6 sm:p-12 lg:p-16 rounded-3xl sm:rounded-[2.5rem] bg-primary/[0.03] border border-primary/15 shadow-sm">
          {/* Subtle Quote Icon */}
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 sm:mb-8">
            <Quote className="w-6 h-6 stroke-[1.5]" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-2xl lg:text-3xl font-light text-[#1A1A1A] tracking-tight leading-snug mb-8 sm:mb-10 min-h-[100px] flex items-center">
            “{current.quote}”
          </blockquote>

          {/* Author Details and Controls */}
          <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-lg font-normal text-primary tracking-wide">
                {current.author}
              </p>
              <p className="text-xs text-[#1A1A1A]/75 tracking-wider uppercase mt-1 font-medium">
                {current.residence} • <span className="font-mono text-[#1A1A1A]/85">{current.project}</span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#1A1A1A]/70 mr-2 font-medium">
                0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
              </span>

              <button
                type="button"
                onClick={prev}
                className="btn-sweep btn-sweep-primary w-12 h-12 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary bg-white hover:text-white hover:border-primary hover:-translate-y-0.5 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </button>

              <button
                type="button"
                onClick={next}
                className="btn-sweep btn-sweep-primary w-12 h-12 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary bg-white hover:text-white hover:border-primary hover:-translate-y-0.5 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
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
