import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import { Button } from "@/components/ui/button";

/* ---------- SHARED SPACING + TYPE SYSTEM ---------- */
const SECTION = "px-6 sm:px-8 lg:px-12 py-14 sm:py-20";
const CONTAINER = "max-w-7xl mx-auto";
const EYEBROW =
  "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4";
const H2 =
  "text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15]";
const BODY = "text-base text-[#1A1A1A]/80 leading-relaxed font-normal";
const HEAD_GAP = "mb-10 sm:mb-14";

const COMPARISON = [
  {
    feature: "Design",
    address: "Photorealistic 3D before work begins",
    typical: "2D sketches only",
  },
  {
    feature: "Pricing",
    address: "Fixed BOQ, no escalations",
    typical: "Loose estimates, frequent revisions",
  },
  {
    feature: "Joinery",
    address: "CNC-made off-site, zero dust",
    typical: "On-site carpentry, noise and sawdust",
  },
  {
    feature: "Timeline",
    address: "45-day handover, in writing",
    typical: "Delays spanning months",
  },
  {
    feature: "Materials",
    address: "BWR marine plywood, German hardware",
    typical: "MDF and generic fittings",
  },
  {
    feature: "Accountability",
    address: "One dedicated Project Director",
    typical: "You coordinate every trade",
  },
];

const FAQS = [
  {
    question: "How does the Fixed BOQ guarantee work?",
    answer:
      "Before execution starts, our architectural team drafts a complete itemized Bill of Quantities covering every hinge, square foot of veneer, stone slab, and electrical point. Once signed, the price is legally locked. We absorb market price fluctuations, guaranteeing no unexpected surprises.",
  },
  {
    question: "Can I inspect the materials in person before approving?",
    answer:
      "Yes. In Stage 02, we invite you to our Richmond Road atelier to review physical material trays with actual veneer cuts, marble slabs, fabric swatches, and hardware samples under specialized warm and cool lighting.",
  },
  {
    question: "How do you achieve a dust-free site during joinery?",
    answer:
      "All modular cabinetry, wardrobes, and credenzas are fabricated in our state-of-the-art German CNC facility off-site. On-site work is strictly limited to rapid, clean assembly and acoustic alignment, meaning your home stays pristine.",
  },
  {
    question: "What is included in the White-Glove Handover?",
    answer:
      "Stage 05 concludes with a thorough 50-point structural and cosmetic quality audit, professional industrial deep cleaning, curated art and botanical styling, and personal delivery of your keys along with your 10-year warranty certificate.",
  },
];

export default function ProcessPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];
  const ctaImage = PROCESS_STEPS[PROCESS_STEPS.length - 1]?.image;

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
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. HERO: headline + photo stage selector */}
      <section className="px-6 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-14 sm:pb-20">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} className={`text-center max-w-3xl mx-auto ${HEAD_GAP}`}>
            <span className={EYEBROW}>Studio Methodology & Roadmap</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-5">
              The Art of Architectural Realization
            </h1>
            <p className={`${BODY} sm:text-lg`}>
              A transparent, five-stage journey from first sketch to final handover.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-none lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    aria-pressed={isActive}
                    className={`group relative shrink-0 snap-start w-40 sm:w-52 lg:w-auto aspect-[3/4] rounded-2xl overflow-hidden text-left cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "ring-2 ring-primary ring-offset-4 ring-offset-secondary"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                      <p className="text-xs text-white/75 mb-0.5">Stage {step.step}</p>
                      <p className="text-sm sm:text-base font-medium leading-snug">
                        {step.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. STAGE DETAIL */}
      <section className={`${SECTION} bg-primary/[0.03] border-y border-primary/10`}>
        <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
          <AnimatedSection delay={0.1} className="lg:col-span-6">
            <ImageReveal
              src={activeStep.image}
              alt={`${activeStep.name} - ${activeStep.title}`}
              aspectRatio="aspect-[4/3]"
              arch="organic"
              className="shadow-2xl"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <span className={EYEBROW}>
                  Stage {activeStep.step} · {activeStep.focus}
                </span>
                <h2 className={`${H2} mb-2`}>{activeStep.name}</h2>
                <p className="text-base text-primary/70 mb-5">
                  {activeStep.title} · {activeStep.duration}
                </p>
                <p className={`${BODY} mb-8`}>{activeStep.description}</p>

                <p className="text-sm text-primary/70 mb-1">You receive</p>
                <ul className="divide-y divide-primary/15 border-y border-primary/15">
                  {activeStep.deliverables.map((item, idx) => (
                    <li key={idx} className="py-3 text-base text-[#1A1A1A]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Progress + controls */}
            <div className="mt-8">
              <div className="flex gap-1.5 mb-5" aria-hidden="true">
                {PROCESS_STEPS.map((s, idx) => (
                  <span
                    key={s.step}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      idx <= activeStepIndex ? "bg-primary" : "bg-primary/15"
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-secondary transition-all cursor-pointer"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-secondary transition-all cursor-pointer"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-[#1A1A1A]/70 ml-2">
                    {activeStepIndex + 1} of {PROCESS_STEPS.length}
                  </span>
                </div>

                <Button asChild>
                  <Link to="/contact">Begin with Stage 01</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. ADDRESS INTERIORS VS TYPICAL CONTRACTORS */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} className={`text-center max-w-3xl mx-auto ${HEAD_GAP}`}>
            <span className={EYEBROW}>The Address Advantage</span>
            <h2 className={`${H2} mb-4`}>
              Address Interiors vs. Typical Contractors
            </h2>
            <p className={BODY}>
              Why homeowners trust our structured design model.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="max-w-5xl mx-auto">
            {/* Column heads (desktop) */}
            <div className="hidden md:grid grid-cols-12 gap-x-8 pb-4 border-b border-primary/30 text-sm">
              <span className="col-span-4" />
              <span className="col-span-4 text-primary font-medium">Address Interiors</span>
              <span className="col-span-4 text-primary/60">Typical Contractor</span>
            </div>

            {COMPARISON.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-5 sm:py-6 border-b border-primary/15"
              >
                <h3 className="md:col-span-4 text-lg font-light text-primary tracking-tight">
                  {row.feature}
                </h3>
                <p className="md:col-span-4 text-base text-[#1A1A1A] md:border-l-2 md:border-primary md:pl-4">
                  <span className="md:hidden block text-xs text-primary mb-0.5">
                    Address Interiors
                  </span>
                  {row.address}
                </p>
                <p className="md:col-span-4 text-base text-[#1A1A1A]/55">
                  <span className="md:hidden block text-xs text-primary/50 mb-0.5">
                    Typical contractor
                  </span>
                  {row.typical}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 4. FAQ - Swiss Industrial & Minimalist Architectural Telemetry */}
      <section className={`${SECTION} bg-[#FAF9F6] border-y border-primary/15 relative overflow-hidden`}>
        <div className={CONTAINER}>
          {/* Section Header with Swiss Architectural Telemetry */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-primary/20 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-primary/70 font-semibold">
                  DOCKET // 04
                </span>
                <span className="text-primary/30">—</span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary/70 font-semibold">
                  CLIENT PROTOCOLS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.12]">
                Frequently Asked <span className="font-normal italic">Inquiries.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#1A1A1A]/75 font-normal max-w-md leading-relaxed">
              Transparency at every architectural milestone. Key standards, material vetting, and accountability protocols answered.
            </p>
          </div>

          {/* Clean Industrial Minimalist Accordion */}
          <div className="max-w-4xl mx-auto divide-y divide-primary/15 border-y border-primary/15">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const indexFormatted = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={faq.question}
                  className={`transition-colors duration-300 ${
                    isOpen ? "bg-primary/[0.025]" : "hover:bg-primary/[0.01]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start sm:items-center justify-between gap-4 sm:gap-8 py-6 sm:py-7 text-left group cursor-pointer px-2 sm:px-4"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1">
                      {/* Monospaced Technical Telemetry Index */}
                      <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-primary/50 group-hover:text-primary transition-colors shrink-0 pt-0.5 sm:pt-0">
                        [{indexFormatted}]
                      </span>

                      {/* Question Headline */}
                      <span
                        className={`text-base sm:text-xl font-light tracking-tight transition-colors duration-200 ${
                          isOpen
                            ? "text-primary font-normal"
                            : "text-[#1A1A1A] group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Brutalist Mechanical Minimalist Indicator */}
                    <div
                      className={`shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-secondary border-primary shadow-sm rotate-45"
                          : "border-primary/25 text-primary group-hover:border-primary group-hover:bg-primary/5"
                      }`}
                    >
                      +
                    </div>
                  </button>

                  {/* Smooth Collapse Content */}
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-10 sm:pl-16 pr-4 sm:pr-12 pb-7 text-sm sm:text-base text-[#1A1A1A]/80 font-normal leading-relaxed border-l-2 border-primary/20 ml-2 sm:ml-4 mb-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <AnimatedSection delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary">
              {ctaImage && (
                <img
                  src={ctaImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-primary/85" />

              <div className="relative z-10 px-6 py-14 sm:p-16 lg:p-20 text-center flex flex-col items-center text-white">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                  Begin Stage 01
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15] max-w-3xl mb-5">
                  Ready for a Stress-Free, On-Time Interior Transformation?
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mb-8">
                  Book an initial consultation to review your floor plan, see realistic 3D renderings, and receive an itemized fixed budget.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 hover:text-primary px-8">
                    <Link to="/contact">Schedule Atelier Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                    <Link to="/projects">View Curated Residences</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}