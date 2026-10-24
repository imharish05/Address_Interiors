import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Clock, Layers } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) =>
      prev === 0 ? PROCESS_STEPS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveStepIndex((prev) =>
      prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1
    );
  };

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
            title="The Art of Architectural Realization"
            subtitle="A disciplined five-stage trajectory guaranteeing absolute aesthetic clarity, material integrity, and uncompromised peace of mind."
            align="center"
          />
        </AnimatedSection>

        {/* Step Progress Navigation Bar */}
        <AnimatedSection delay={0.1} className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-primary/[0.03] border border-primary/15 overflow-x-auto scrollbar-none">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 ease-out cursor-pointer whitespace-nowrap flex-1 justify-center active:scale-95 ${
                    isActive
                      ? "bg-primary text-secondary border border-primary hover:bg-secondary hover:text-primary shadow-md font-semibold scale-[1.01]"
                      : "text-primary/80 bg-transparent hover:bg-primary hover:text-secondary"
                  }`}
                  aria-label={`View Stage ${step.step}: ${step.name}`}
                >
                  <span className={`font-mono text-xs ${isActive ? "text-secondary" : "text-primary/50"}`}>
                    {step.step}
                  </span>
                  <span className="uppercase tracking-luxury text-[11px] sm:text-xs">
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Master Architectural Stage Showcase Card */}
        <div className="relative rounded-[2.5rem] bg-primary/[0.02] border border-primary/15 p-6 sm:p-10 lg:p-14 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Stage Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Stage Header Meta */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-light text-primary/40">
                      STAGE {activeStep.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-luxury text-primary/60 font-medium px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10">
                      {activeStep.focus}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-primary/70">
                    <Clock className="w-3.5 h-3.5 opacity-60" />
                    <span>{activeStep.duration}</span>
                  </div>
                </div>

                {/* Title & Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-2">
                  {activeStep.name}
                </h3>
                <h4 className="text-sm uppercase tracking-wider text-primary/65 font-medium mb-6">
                  {activeStep.title}
                </h4>

                {/* Narrative Description */}
                <p className="text-base text-[#1A1A1A]/90 font-normal leading-relaxed mb-8">
                  {activeStep.description}
                </p>

                {/* Deliverables Checklist Grid */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-luxury text-[#1A1A1A]/60 font-medium mb-3">
                    Phase Milestones & Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStep.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-primary/[0.03] border border-primary/10 text-xs text-[#1A1A1A]/85"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prev / Next Stage Controls */}
              <div className="pt-6 border-t border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-primary/50">
                  <span>0{activeStepIndex + 1}</span>
                  <span>/</span>
                  <span>0{PROCESS_STEPS.length}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 text-xs text-primary bg-transparent hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300 ease-out cursor-pointer active:scale-95 group shadow-sm"
                    aria-label="Previous process stage"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary text-secondary border border-primary text-xs hover:bg-secondary hover:text-primary hover:border-primary transition-all duration-300 ease-out cursor-pointer shadow-sm hover:shadow active:scale-95 group"
                    aria-label="Next process stage"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Curated Stage Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-primary/10 group">
                <img
                  src={activeStep.image}
                  alt={`${activeStep.name} - ${activeStep.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-secondary/90 backdrop-blur-md border border-primary/15 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-primary/60 font-medium block">
                      Active Trajectory
                    </span>
                    <span className="text-xs font-medium text-primary">
                      Phase 0{activeStep.step} • {activeStep.name} Execution
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {activeStep.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
