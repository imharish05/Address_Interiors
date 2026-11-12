import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT_PAGE_CONTENT } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import SmartImage from "@/components/common/SmartImage";
import { Button } from "@/components/ui/button";

/* ---------- SHARED SPACING + TYPE SYSTEM (same for every section) ---------- */
const SECTION = "px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24";
const CONTAINER = "max-w-7xl mx-auto";
const EYEBROW =
  "inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-luxury font-medium bg-primary/10 text-primary border border-primary/20 mb-3.5";
const H2 =
  "text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15]";
const BODY = "text-base text-[#1A1A1A]/80 leading-relaxed";
const HEAD_GAP = "mb-10 sm:mb-14";

/* ---------- DATA: Why Choose Us ---------- */
const WHY_CHOOSE_US = [
  {
    title: "3D Design Preview",
    description:
      "See how your home will look in 3D before we start the work.",
  },
  {
    title: "Perfect Fitting",
    description:
      "Carefully made furniture that fits perfectly in your space.",
  },
  {
    title: "Clear Pricing",
    description:
      "Know the full cost before work begins. No hidden charges.",
  },
  {
    title: "Ready in 45 Days",
    description:
      "We plan and prepare everything to complete your home in 45 days.",
  },
  {
    title: "10-Year Warranty",
    description:
      "Get a 10-year warranty on selected materials and fittings.",
  },
  {
    title: "Personal Project Manager",
    description:
      "One person will guide you and keep you updated throughout the work.",
  },
];

/* ---------- DATA: Execution stages ---------- */
const STAGES = [
  {
    name: "Consultation & Site Visit",
    summary: "We understand your needs and measure your home.",
    description:
      "We discuss your ideas, understand your daily needs, check your home, and take measurements.",
    deliverables: [
      "Understand your needs and lifestyle",
      "Visit and measure your home",
      "Prepare the first design and budget",
    ],
  },
  {
    name: "3D Design & Material Selection",
    summary: "See how your home will look before work begins.",
    description:
      "We create 3D designs of your rooms and help you choose the colours and materials you like.",
    deliverables: [
      "3D designs of your rooms",
      "Choose colours and materials",
      "Final cost approval before work starts",
    ],
  },
  {
    name: "Furniture Making",
    summary: "Your furniture is made in our factory.",
    description:
      "We make your furniture in our factory while other home works like electrical and ceiling work are done at your home.",
    deliverables: [
      "Custom-made furniture",
      "Less dust and mess at your home",
      "Electrical and ceiling work done alongside",
    ],
  },
  {
    name: "Installation & Handover",
    summary: "We install everything, check the quality, and hand over your home.",
    description:
      "Our team installs the furniture, checks everything carefully, and hands over your home on the promised date.",
    deliverables: [
      "Professional furniture installation",
      "50-point quality check",
      "On-time handover with a 10-year warranty",
    ],
  },
];
export default function AboutPage() {
  const content = ABOUT_PAGE_CONTENT;
  const [activeStage, setActiveStage] = useState(0);
  const stage = STAGES[activeStage];

  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. BANNER */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className={CONTAINER}>
          {/* Centered Typography Header */}
          <AnimatedSection delay={0.1} className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <span className={EYEBROW}>
              {content.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-4 sm:mb-5">
              {content.heroHeading}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl mx-auto">
              Since 2021, crafting bespoke residential and commercial spaces with German-precision joinery, functional space planning, and durable craftsmanship.
            </p>
          </AnimatedSection>

          {/* Wide Landscape Hero Image with Stats Box */}
          <AnimatedSection delay={0.2} className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.1/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-primary/15">
                <SmartImage
                  src="/images/projects/about-hero.jpg"
                  alt="Address Interiors living space"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Stats Box: Below hero on mobile, overlaid inside bottom on md+ */}
              <div className="relative mt-4 md:mt-0 md:absolute md:bottom-5 lg:bottom-6 md:inset-x-6 lg:inset-x-8">
                <div className="bg-secondary/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-primary/20 p-4 sm:p-5 lg:p-6 shadow-xl md:shadow-2xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 text-center md:divide-x divide-primary/15">
                    <div className="px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight mb-0.5">
                        5+ Years
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-luxury text-[#1A1A1A]/70 font-medium">
                        Experience
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight mb-0.5">
                        500+
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-luxury text-[#1A1A1A]/70 font-medium">
                        Projects Handed Over
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight mb-0.5">
                        10-Year
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-luxury text-[#1A1A1A]/70 font-medium">
                        Warranty
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight mb-0.5">
                        45-Day
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-luxury text-[#1A1A1A]/70 font-medium">
                        Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className={`${SECTION} border-t border-primary/10`}>
        <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <SmartImage
                src="/images/projects/about-story.jpg"
                alt="Address Interiors modular joinery"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <span className={EYEBROW}>{content.whoWeAre.badge}</span>
            <h2 className={`${H2} mb-6`}>Design and execution, under one roof</h2>
            <p className={`${BODY} max-w-2xl mb-10`}>
              Since 2021, we have combined bespoke spatial design, German-precision
              joinery, and complete project execution, so your home is delivered on a
              fixed timeline and a fixed budget.
            </p>
<div className="divide-y divide-primary/15 border-y border-primary/15 mb-10">
  {[
    ["Perfect Furniture Fitting", "Factory-made furniture that fits perfectly with less mess at your home."],
    ["One Dedicated Team", "One team takes care of everything, from the first step to the final finish."],
    ["Clear Pricing & Warranty", "No hidden charges, with a written 10-year warranty."],
  ].map(([title, line]) => (
    <div
      key={title}
      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-4"
    >
      <h3 className="text-base font-medium text-primary">{title}</h3>
      <p className="text-sm text-[#1A1A1A]/75">{line}</p>
    </div>
  ))}
</div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <p className="text-4xl sm:text-5xl font-light text-primary tracking-tight leading-none shrink-0">
                {content.whoWeAre.completedProjects}
              </p>
              <p className="text-xl sm:text-3xl lg:text-4xl font-light text-primary tracking-tight leading-snug sm:leading-none">
                homes designed and delivered on time
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className={`${SECTION} bg-primary/[0.03] border-y border-primary/10`}>
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} className={`max-w-2xl ${HEAD_GAP}`}>
            <span className={EYEBROW}>Our Purpose</span>
            <h2 className={H2}>Mission & Vision</h2>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 md:divide-x divide-primary/20"
          >
            <div className="md:pr-12 lg:pr-16">
              <span className={EYEBROW}>Mission</span>
              <h3 className="text-2xl sm:text-3xl font-light text-primary tracking-tight mb-4">
                {content.missionVision.mission.title}
              </h3>
              <p className={BODY}>{content.missionVision.mission.description}</p>
            </div>

            <div className="md:pl-12 lg:pl-16">
              <span className={EYEBROW}>Vision</span>
              <h3 className="text-2xl sm:text-3xl font-light text-primary tracking-tight mb-4">
                {content.missionVision.vision.title}
              </h3>
              <p className={BODY}>{content.missionVision.vision.description}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className={`${SECTION} border-t border-primary/10`}>
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} className={`text-center max-w-2xl mx-auto ${HEAD_GAP}`}>
            <span className={EYEBROW}>Why Choose Us</span>
            <h2 className={`${H2} mb-4`}>
              Built on precision, delivered with certainty
            </h2>
            <p className={BODY}>
              Six standards we guarantee on every project.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10 sm:gap-y-12"
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={item.title}
                className="group border-t border-primary/20 hover:border-primary pt-6 transition-colors duration-300"
              >
                <p className="text-sm text-[#1A1A1A]/70 font-mono font-medium mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-light text-primary tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="text-center mt-12 sm:mt-16">
            <Button asChild size="lg">
              <Link to="/#contact" className="flex items-center justify-center gap-2">
                <span>Book A Free Site Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 bg-primary/[0.025] border-t border-primary/15">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} className={`max-w-4xl ${HEAD_GAP}`}>
            <span className={EYEBROW}>How We Work</span>
            <h2 className={`${H2} mb-4`}>
              From first call to key handover, in four stages
            </h2>
            <p className={BODY}>
              Select a stage to see what we do and what you receive.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            <div className="lg:col-span-5 relative" role="tablist" aria-label="Project stages">
              <span
                aria-hidden="true"
                className="absolute left-[11px] top-3 bottom-3 w-px bg-primary/25"
              />
              {STAGES.map((s, idx) => {
                const isActive = idx === activeStage;
                const isDone = idx < activeStage;
                return (
                  <button
                    key={s.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveStage(idx)}
                    className="relative w-full text-left pl-10 pr-3 py-4 rounded-xl group cursor-pointer transition-colors duration-200 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-[1.35rem] w-[23px] h-[23px] rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? "bg-primary border-primary scale-110 shadow-sm"
                          : isDone
                          ? "bg-primary border-primary"
                          : "bg-white border-primary/50 group-hover:border-primary group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A]"
                      }`}
                    >
                      {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                    </span>
                    <span
                      className={`block text-lg sm:text-xl tracking-tight transition-colors duration-200 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-[#1A1A1A] font-normal group-hover:text-primary"
                      }`}
                    >
                      {s.name}
                    </span>
                    <span
                      className={`block text-sm mt-0.5 transition-colors duration-200 ${
                        isActive ? "text-[#1A1A1A]/90 font-medium" : "text-[#1A1A1A]/75 group-hover:text-[#1A1A1A]"
                      }`}
                    >
                      {s.summary}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl bg-primary text-secondary p-6 sm:p-10 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    role="tabpanel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-4">
                      {stage.name}
                    </h3>
                    <p className="text-base text-white/85 leading-relaxed mb-8 max-w-xl">
                      {stage.description}
                    </p>

                    <p className="text-sm text-white/65 mb-1">You receive</p>
                    <ul className="divide-y divide-white/20 border-y border-white/20">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="py-3 text-base text-white">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-3 mt-8">
                      <Button
                        type="button"
                        variant="lightOutline"
                        size="sm"
                        onClick={() => setActiveStage((i) => Math.max(0, i - 1))}
                        disabled={activeStage === 0}
                        className="min-h-[44px] px-5 text-sm"
                      >
                        Previous
                      </Button>
                      <Button
                        type="button"
                        variant="light"
                        size="sm"
                        onClick={() =>
                          setActiveStage((i) => Math.min(STAGES.length - 1, i + 1))
                        }
                        disabled={activeStage === STAGES.length - 1}
                        className="min-h-[44px] px-5 text-sm"
                      >
                        Next stage
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.15}>
            <div className="relative rounded-3xl bg-primary text-white px-5 py-12 sm:p-16 text-center shadow-2xl flex flex-col items-center overflow-hidden">
              <img
                src="/images/projects/about-cta.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px]" />
              <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto w-full">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-luxury font-medium bg-white/15 text-white border border-white/30 mb-3.5">
                Let's Start Designing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15] max-w-2xl mb-4">
                Ready to Transform Your Home?
              </h2>
              <p className="text-base text-white/85 max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Book a free consultation. We'll review your floor plan and style, and share a transparent estimate.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  variant="light"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8"
                >
                  <Link to="/#contact" className="flex items-center justify-center gap-2">
                    <span>Schedule Free Consultation</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="lightOutline"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8"
                >
                  <Link to="/">Back to Home</Link>
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