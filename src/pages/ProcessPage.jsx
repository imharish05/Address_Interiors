import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Layers,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import { Button } from "@/components/ui/button";

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
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. DISTINCT TIMELINE ROADMAP STARTING HERO */}
      <section className="px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-14 sm:pb-18 max-w-7xl mx-auto border-b border-primary/10">
        <AnimatedSection>
          <div className="max-w-3xl mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Studio Methodology & Roadmap
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.12] mb-5">
              The Art of Architectural Realization
            </h1>

            <p className="text-base sm:text-lg text-[#1A1A1A]/85 font-normal leading-relaxed">
              A transparent, five-stage architectural journey guaranteeing absolute aesthetic clarity, material integrity, and uncompromised peace of mind from first sketch to final handover.
            </p>
          </div>

          {/* 5-Step Connected Roadmap Stepper in Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-primary/15">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-primary text-secondary border-primary shadow-lg scale-[1.02]"
                      : "bg-primary/[0.025] hover:bg-primary/[0.06] border-primary/10 text-[#1A1A1A]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold block mb-1 ${
                      isActive ? "text-secondary/80" : "text-primary"
                    }`}
                  >
                    STAGE {step.step}
                  </span>
                  <h3
                    className={`text-sm font-medium tracking-tight mb-1 ${
                      isActive ? "text-secondary" : "text-[#1A1A1A]"
                    }`}
                  >
                    {step.name}
                  </h3>
                  <span
                    className={`text-xs block ${
                      isActive ? "text-secondary/70" : "text-[#1A1A1A]/60"
                    }`}
                  >
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* 2. MASTER STAGE SHOWCASE */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-7xl mx-auto">
        <AnimatedSection delay={0.15}>
          <div className="relative rounded-[2.5rem] bg-primary/[0.02] border border-primary/15 p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Narrative & Deliverables */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-primary/10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-light text-primary/40">
                        STAGE {activeStep.step}
                      </span>
                      <span className="text-xs font-semibold text-primary/75 px-3 py-1 rounded-full bg-primary/5 border border-primary/15">
                        {activeStep.focus}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary/70">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{activeStep.duration}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-2">
                    {activeStep.name}
                  </h2>
                  <h3 className="text-sm font-medium text-primary/70 mb-5">
                    {activeStep.title}
                  </h3>

                  <p className="text-base text-[#1A1A1A]/85 leading-relaxed font-normal mb-8">
                    {activeStep.description}
                  </p>

                  {/* Patron Deliverables List */}
                  <div className="mb-8">
                    <span className="text-xs font-semibold text-primary/75 block mb-3">
                      Patron Milestone Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeStep.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-secondary border border-primary/10 text-xs sm:text-sm text-[#1A1A1A] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-primary/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-secondary transition-all cursor-pointer"
                      aria-label="Previous Stage"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-secondary transition-all cursor-pointer"
                      aria-label="Next Stage"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-[#1A1A1A]/70 font-medium ml-2">
                      Stage {activeStepIndex + 1} of {PROCESS_STEPS.length}
                    </span>
                  </div>

                  <Button asChild size="sm">
                    <Link to="/contact">Begin with Stage 01</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Stage Imagery */}
              <div className="lg:col-span-6">
                <ImageReveal
                  src={activeStep.image}
                  alt={`${activeStep.name} - ${activeStep.title}`}
                  aspectRatio="aspect-[4/3]"
                  arch="organic"
                  className="shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. ADDRESS INTERIORS VS TYPICAL CONTRACTOR */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-primary/[0.02] border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
              The Address Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
              Address Interiors vs. Typical Contractors
            </h2>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
              Why discerning homeowners trust our structured design model over unorganized local contracting.
            </p>
          </AnimatedSection>

          <div className="overflow-x-auto">
            <div className="min-w-[680px] rounded-3xl bg-secondary border border-primary/15 shadow-xl overflow-hidden">
              <div className="grid grid-cols-12 bg-primary/10 p-5 border-b border-primary/15 text-xs font-semibold text-primary uppercase tracking-wider">
                <div className="col-span-4">Execution Dimension</div>
                <div className="col-span-4 flex items-center gap-1.5 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Address Interiors Standard</span>
                </div>
                <div className="col-span-4 text-[#1A1A1A]/60">Typical Local Contractor</div>
              </div>

              <div className="divide-y divide-primary/10">
                {COMPARISON.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-5 text-sm items-start gap-4 hover:bg-primary/[0.015] transition-colors">
                    <div className="col-span-4 font-medium text-primary">
                      {row.feature}
                    </div>
                    <div className="col-span-4 flex items-start gap-2 text-[#1A1A1A] font-normal leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{row.address}</span>
                    </div>
                    <div className="col-span-4 flex items-start gap-2 text-[#1A1A1A]/65 font-normal leading-relaxed">
                      <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                      <span>{row.typical}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED PROCESS QUESTIONS */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-5xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
            Client Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
            Clarity at every milestone is foundational to how we build trust.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <AnimatedSection key={idx} delay={0.08 * (idx + 1)}>
              <div className="p-7 rounded-3xl bg-primary/[0.02] border border-primary/15 hover:border-primary/35 transition-all">
                <div className="flex items-start gap-3.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-primary tracking-tight">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#1A1A1A]/85 leading-relaxed font-normal pl-11">
                  {faq.answer}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-primary p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                Begin Stage 01
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                Ready for a Stress-Free, On-Time Interior Transformation?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8">
                Book an initial spatial consultation to discuss your floor plan, review our realistic 3D renderings, and receive an itemized fixed budget overview.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 hover:text-primary">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Schedule Atelier Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                  <Link to="/projects">View Curated Residences</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
