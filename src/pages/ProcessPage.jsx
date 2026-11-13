import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import { Button } from "@/components/ui/button";

/* ---------- SHARED SPACING + TYPE SYSTEM ---------- */
const SECTION = "px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20";
const CONTAINER = "max-w-7xl mx-auto";
const EYEBROW =
  "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4";
const H2 =
  "text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15]";
const BODY = "text-base text-[#1A1A1A]/80 leading-relaxed font-normal";
const HEAD_GAP = "mb-10 sm:mb-12";

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
    question: "How does your fixed project cost work?",
    answer:
      "Before starting the work, our team prepares a detailed list of all materials and costs, including hinges, wood, stone, and electrical fittings. Once you approve and sign it, the project cost is fixed. We will not increase the agreed price because of changes in market prices. This means no unexpected extra costs.",
  },
  {
    question: "Can I see the materials before choosing them?",
    answer:
      "Yes. During Stage 02, you can visit our office to see and compare different materials. You can check wood finishes, marble, fabrics, and hardware samples under different lighting before making your final choice.",
  },
  {
    question: "How do you keep my home clean during the work?",
    answer:
      "We prepare most furniture, including cabinets, wardrobes, and storage units, at our factory before bringing them to your home. At your home, our team mainly focuses on fitting and assembling them. This helps reduce dust, noise, and mess during the work.",
  },
  {
    question: "What happens before you hand over my home?",
    answer:
      "Before handing over your home, our team checks the quality of all the work, completes a deep cleaning, and arranges the furniture and decorations. We then hand over your keys along with your 10-year warranty certificate.",
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
    <div className="pt-20 overflow-hidden bg-secondary">
      {/* 1. HERO: headline + photo stage selector */}
      <section className="px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-16 lg:pb-20">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} className="text-center max-w-3xl mx-auto">
            <span className={EYEBROW}>Studio Methodology & Roadmap</span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-5">
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
                    type="button"
                    onClick={handlePrev}
                    className="btn-sweep btn-sweep-primary min-w-[44px] min-h-[44px] flex items-center justify-center p-3 rounded-full border-[1.5px] border-primary bg-white text-primary hover:text-white hover:border-primary hover:-translate-y-0.5 active:scale-95 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-sweep btn-sweep-primary min-w-[44px] min-h-[44px] flex items-center justify-center p-3 rounded-full border-[1.5px] border-primary bg-white text-primary hover:text-white hover:border-primary hover:-translate-y-0.5 active:scale-95 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                  <span className="text-sm text-[#1A1A1A]/75 font-medium ml-2">
                    {activeStepIndex + 1} of {PROCESS_STEPS.length}
                  </span>
                </div>

                <Button asChild className="w-full sm:w-auto">
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
      <section className={`${SECTION} bg-primary/[0.02] border-y border-primary/10`}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.1} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Client Enquiries
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
                        ? "bg-white border-primary shadow-md shadow-primary/[0.06]"
                        : "bg-white border-primary/20 hover:border-primary hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full min-h-[44px] flex items-center justify-between gap-4 sm:gap-6 p-5 sm:p-7 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-inset rounded-2xl"
                    >
                      <span
                        className={`text-base sm:text-lg tracking-tight transition-colors duration-200 ${
                          isOpen ? "text-primary font-medium" : "text-[#1A1A1A] font-normal group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <div
                        className={`w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                            : "border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                        }`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-0.5"
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
                        <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-2 text-sm sm:text-base text-[#1A1A1A]/75 font-normal leading-relaxed border-t border-primary/10">
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
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-primary/85" />

              <div className="relative z-10 px-5 py-12 sm:p-16 lg:p-20 text-center flex flex-col items-center text-white">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                  Begin Stage 01
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15] max-w-3xl mb-5">
                  Ready for a Stress-Free, On-Time Interior Transformation?
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mb-8">
                  Book an initial consultation to review your floor plan, see realistic 3D renderings, and receive an itemized fixed budget.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button asChild variant="light" size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                    <Link to="/contact">Schedule Atelier Consultation</Link>
                  </Button>
                  <Button asChild variant="lightOutline" size="lg" className="w-full sm:w-auto">
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