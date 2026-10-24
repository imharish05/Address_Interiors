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
    feature: "Design Visualization",
    address: "Photorealistic 3D virtual walkthroughs & tactile material trays for every room.",
    typical: "Basic 2D sketches; client only visualizes the space after it is already built.",
  },
  {
    feature: "Pricing Transparency",
    address: "Itemized upfront Fixed BOQ. Guaranteed zero mid-project price escalations.",
    typical: "Loose estimates with frequent cost revisions, unforeseen extras, and hidden margins.",
  },
  {
    feature: "Joinery & Woodwork",
    address: "Modular units precision CNC-machined in a German off-site facility. Zero dust at home.",
    typical: "Manual carpentry on client floorboards causing months of noise, sawdust, and uneven joints.",
  },
  {
    feature: "Timeline Commitment",
    address: "Committed 45-day key handover backed in writing with financial milestone tracking.",
    typical: "Frequent timeline slippages and unaccountable contractor delays spanning months.",
  },
  {
    feature: "Quality & Hardware",
    address: "Certified BWR marine-grade plywood and branded German hardware with 10-year warranty.",
    typical: "Commercial grade MDF/particle board with generic fittings prone to premature sagging.",
  },
  {
    feature: "Client Accountability",
    address: "A single dedicated Project Director managing civil, electrical, plumbing, and styling.",
    typical: "Client must self-coordinate between carpenters, electricians, painters, and suppliers.",
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
              Why discerning homeowners trust our structured design model.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Desktop: highlighted middle column */}
            <div className="hidden md:grid grid-cols-12 text-sm lg:text-base">
              <div className="col-span-3" />
              <div className="col-span-5 bg-primary text-white rounded-t-3xl px-8 py-5 font-medium">
                The Address Interiors Standard
              </div>
              <div className="col-span-4 px-8 py-5 text-primary/60">
                Typical Local Contractor
              </div>

              {COMPARISON.map((row, idx) => {
                const isLast = idx === COMPARISON.length - 1;
                return (
                  <React.Fragment key={row.feature}>
                    <div className="col-span-3 py-6 pr-6 border-t border-primary/15 font-medium text-primary">
                      {row.feature}
                    </div>
                    <div
                      className={`col-span-5 bg-primary text-white px-8 py-6 border-t border-white/15 leading-relaxed ${
                        isLast ? "rounded-b-3xl" : ""
                      }`}
                    >
                      {row.address}
                    </div>
                    <div className="col-span-4 px-8 py-6 border-t border-primary/15 text-[#1A1A1A]/60 leading-relaxed">
                      {row.typical}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden space-y-8">
              {COMPARISON.map((row) => (
                <div key={row.feature}>
                  <h3 className="text-lg font-medium text-primary mb-3">{row.feature}</h3>
                  <div className="bg-primary text-white rounded-2xl p-5 mb-3">
                    <p className="text-xs text-white/70 mb-1">Address Interiors</p>
                    <p className="text-sm leading-relaxed">{row.address}</p>
                  </div>
                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-xs text-primary/60 mb-1">Typical contractor</p>
                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{row.typical}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className={`${SECTION} bg-primary/[0.03] border-y border-primary/10`}>
        <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start`}>
          <AnimatedSection delay={0.1} className="lg:col-span-4 lg:sticky lg:top-32">
            <span className={EYEBROW}>Client Inquiries</span>
            <h2 className={`${H2} mb-4`}>Frequently Asked Questions</h2>
            <p className={BODY}>
              Clarity at every milestone is foundational to how we build trust.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-8">
            <div className="divide-y divide-primary/15 border-y border-primary/15">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
                    >
                      <span className="text-lg sm:text-xl font-light text-primary tracking-tight">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-secondary border-primary"
                            : "border-primary/25 text-primary group-hover:border-primary"
                        }`}
                      >
                        <span className="relative block w-3.5 h-3.5">
                          <span className="absolute inset-x-0 top-1/2 h-px bg-current" />
                          <span
                            className={`absolute inset-y-0 left-1/2 w-px bg-current transition-transform duration-300 ${
                              isOpen ? "rotate-90" : ""
                            }`}
                          />
                        </span>
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className={`${BODY} pb-6 max-w-2xl`}>{faq.answer}</p>
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