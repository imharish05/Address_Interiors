import React from "react";
import { PROCESS_STEPS } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden border-t border-primary/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <SectionHeading
            badge="Studio Methodology"
            title="The Art of Turnkey Realization"
            subtitle="A disciplined five-stage trajectory guaranteeing absolute aesthetic clarity, material integrity, and uncompromised peace of mind."
            align="center"
          />
        </AnimatedSection>

        {/* Process Steps — Curved Timeline Journey */}
        <div className="relative">
          {/* Subtle curved horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-primary/20 -translate-y-8 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedSection
                key={step.step}
                delay={0.1 * index}
                className="flex"
              >
                <div className="w-full relative flex flex-col justify-between p-7 rounded-3xl bg-primary/[0.02] border border-primary/15 hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-300 group">
                  {/* Step Number Circle */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full border border-primary/25 bg-secondary flex items-center justify-center font-mono text-sm font-medium text-primary shadow-sm group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                        {step.step}
                      </div>
                      <span className="text-[10px] uppercase tracking-luxury text-primary/50 font-mono">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-light text-primary tracking-tight mb-2">
                      {step.name}
                    </h3>

                    <h4 className="text-xs uppercase tracking-wider text-primary/60 font-medium mb-4">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-primary/75 font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom aesthetic accent */}
                  <div className="mt-8 pt-4 border-t border-primary/10 flex items-center justify-between text-[11px] text-primary/40">
                    <span>Stage 0{index + 1} of 05</span>
                    <span className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
