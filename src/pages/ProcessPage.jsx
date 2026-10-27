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
          <AnimatedSection delay={0.1} className="text-center max-w-3xl mx-auto">
            <span className={EYEBROW}>Studio Methodology & Roadmap</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-5">
              The Art of Architectural Realization
            </h1>
            <p className={`${BODY} sm:text-lg`}>
              A transparent, five-stage journey from first sketch to final handover.
            </p>
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
                <p className="text-base text-[#1A1A1A]/80 font-medium mb-5">
                  {activeStep.title} · {activeStep.duration}
                </p>
                <p className={`${BODY} mb-8`}>{activeStep.description}</p>

                <p className="text-sm text-[#1A1A1A]/70 font-medium mb-1">You receive</p>
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
                    className="p-3 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer group"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer group"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:text-white transition-colors" />
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
              <span className="col-span-4 text-[#1A1A1A]/70 font-medium">Typical Contractor</span>
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
                  <span className="md:hidden block text-xs text-[#1A1A1A]/70 mb-0.5 font-medium">
                    Typical contractor
                  </span>
                  {row.typical}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 4. FAQ - Clean Luxury Minimalist Accordion */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 bg-primary/[0.02] border-y border-primary/10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.1} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Client Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
              Clarity at every milestone is foundational to how we build trust.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-primary/35 shadow-md shadow-primary/[0.04]"
                        : "bg-white/80 hover:bg-white border-primary/15 hover:border-primary/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 p-6 sm:p-7 text-left cursor-pointer group"
                    >
                      <span
                        className={`text-base sm:text-lg font-light tracking-tight transition-colors duration-200 ${
                          isOpen ? "text-primary font-normal" : "text-[#1A1A1A] group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-white border-primary"
                            : "border-primary/25 text-primary group-hover:border-primary group-hover:bg-primary/5"
                        }`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-sm sm:text-base text-[#1A1A1A]/75 font-normal leading-relaxed border-t border-primary/10">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
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
                  <Button asChild size="lg" className="bg-white !text-primary hover:bg-white/95 hover:!text-primary px-8 shadow-lg font-medium">
                    <Link to="/contact" className="!text-primary font-medium">Schedule Atelier Consultation</Link>
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