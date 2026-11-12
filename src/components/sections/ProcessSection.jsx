import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import SmartImage from "@/components/common/SmartImage";

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
      className="relative py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-secondary scroll-mt-20 overflow-hidden border-t border-primary/10"
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
          <div className="flex flex-wrap sm:grid sm:grid-cols-5 gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-primary/[0.03] border border-primary/15">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`min-h-[44px] flex flex-row sm:flex-col lg:flex-row items-center justify-center gap-1.5 lg:gap-2.5 px-3 sm:px-2 lg:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-medium tracking-wide transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex-1 basis-[calc(50%-0.25rem)] sm:basis-auto active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 group ${
                    isActive
                      ? "bg-primary text-white border-[1.5px] border-primary shadow-md font-semibold"
                      : "bg-white text-[#1A1A1A] border-[1.5px] border-primary/20 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:shadow-sm"
                  }`}
                  aria-label={`View Stage ${step.step}: ${step.name}`}
                >
                  <span
                    className={`font-mono text-xs transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-primary font-semibold group-hover:text-white"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`uppercase tracking-wider sm:tracking-luxury text-[11px] sm:text-[10px] lg:text-xs transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[#1A1A1A] group-hover:text-white"
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Master Architectural Stage Showcase Card */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-primary/[0.02] border border-primary/15 p-5 sm:p-10 lg:p-14 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Stage Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Stage Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-primary/10">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="font-mono text-xl sm:text-3xl font-light text-primary/40">
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
              <div className="pt-6 border-t border-primary/10 flex flex-wrap items-center justify-between gap-4 select-none">
                <div className="flex items-center gap-2 text-xs font-mono text-primary/50">
                  <span>0{activeStepIndex + 1}</span>
                  <span>/</span>
                  <span>0{PROCESS_STEPS.length}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-sweep btn-sweep-primary min-h-[44px] flex items-center gap-1.5 px-4 py-2.5 rounded-full border-[1.5px] border-primary text-xs font-medium text-primary bg-white hover:text-white hover:border-primary hover:-translate-y-0.5 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-[0.97] group shadow-sm hover:shadow-md select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
                    aria-label="Previous process stage"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-sweep btn-sweep-ink min-h-[44px] flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white border-[1.5px] border-primary text-xs font-medium select-none hover:border-[#1A1A1A] hover:text-white hover:-translate-y-0.5 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer shadow-[0_6px_18px_-4px_rgba(190,80,55,0.4)] hover:shadow-[0_12px_26px_-6px_rgba(26,26,26,0.4)] active:scale-[0.97] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
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
                <SmartImage
                  src={activeStep.image}
                  alt={`${activeStep.name} - ${activeStep.title}`}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl bg-secondary/90 backdrop-blur-md border border-primary/15 shadow-lg flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-primary/60 font-medium block">
                      Active Trajectory
                    </span>
                    <span className="text-xs font-medium text-primary">
                      Phase 0{activeStep.step} • {activeStep.name} Execution
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary shrink-0">
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
