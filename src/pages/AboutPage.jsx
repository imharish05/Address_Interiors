import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT_PAGE_CONTENT } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";

/* ---------- SHARED SPACING + TYPE SYSTEM (same for every section) ---------- */
const SECTION = "px-6 sm:px-8 lg:px-12 py-14 sm:py-20";
const CONTAINER = "max-w-9xl mx-auto";
const EYEBROW =
  "inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-luxury font-medium bg-primary/10 text-primary border border-primary/20 mb-3.5";
const H2 =
  "text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15]";
const BODY = "text-base text-[#1A1A1A]/80 leading-relaxed";
const HEAD_GAP = "mb-10 sm:mb-14";

/* ---------- DATA: Why Choose Us ---------- */
const WHY_CHOOSE_US = [
  {
    title: "Custom 3D Design",
    description:
      "Photorealistic 3D renders and material samples, approved before work begins.",
  },
  {
    title: "German Precision Joinery",
    description:
      "Factory-made cabinetry with millimeter fit and zero dust on site.",
  },
  {
    title: "Fixed BOQ Pricing",
    description:
      "Itemized upfront pricing. No hidden costs, no mid-project increases.",
  },
  {
    title: "45-Day Handover",
    description:
      "Parallel off-site manufacturing keeps your keys on the committed date.",
  },
  {
    title: "10-Year Warranty",
    description:
      "BWR marine plywood and branded German hardware, backed in writing.",
  },
  {
    title: "Dedicated Project Manager",
    description:
      "One point of contact from civil work to final styling.",
  },
];

/* ---------- DATA: Execution stages ---------- */
const STAGES = [
  {
    name: "Consultation & site audit",
    summary: "We learn how you live and measure the space.",
    description:
      "We explore your lifestyle requirements, study architectural plans, and take precise laser measurements of your space.",
    deliverables: [
      "Lifestyle and daily-routine brief",
      "Laser on-site space audit",
      "Initial conceptual layout and budget",
    ],
  },
  {
    name: "3D visuals & material approval",
    summary: "You see the home before we build it.",
    description:
      "Our architects craft realistic 3D virtual walkthroughs and tactile material trays for your review and sign-off.",
    deliverables: [
      "Photorealistic 3D room renders",
      "Laminate, stone and fabric swatches",
      "Itemized fixed BOQ cost sign-off",
    ],
  },
  {
    name: "Off-site German joinery",
    summary: "Furniture is made in the factory, not on your floor.",
    description:
      "Modular cabinetry and custom furniture are fabricated in our facility with millimeter accuracy, while electrical and ceiling work run in parallel at your home.",
    deliverables: [
      "German CNC precision woodwork",
      "No sawdust or mess on site",
      "Parallel electrical and ceiling work",
    ],
  },
  {
    name: "Installation & key handover",
    summary: "We install, inspect and hand you the keys.",
    description:
      "Our assembly crew installs all fittings, runs a rigorous 50-point quality audit, and delivers your keys on the committed date.",
    deliverables: [
      "Dust-free professional installation",
      "50-point structural quality check",
      "On-time handover with 10-year warranty",
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
      <section className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-8 pb-16 sm:pb-24">
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
              Since 2012, crafting bespoke residential and commercial spaces with German-precision joinery, functional space planning, and durable craftsmanship.
            </p>
          </AnimatedSection>

          {/* Wide Landscape Hero Image with Stats Box at the Bottom End */}
          <AnimatedSection delay={0.2} className="max-w-6xl mx-auto">
            <div className="relative aspect-[16/11] sm:aspect-[16/9] lg:aspect-[2.1/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-primary/15">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
                alt="Address Interiors living space"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Stats Box inside the bottom end of the image */}
              <div className="absolute bottom-3 sm:bottom-5 lg:bottom-6 inset-x-3 sm:inset-x-6 lg:inset-x-8">
                <div className="bg-secondary/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-primary/20 p-4 sm:p-5 lg:p-6 shadow-2xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-primary/15">
                    <div className="pt-2 md:pt-0 px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight whitespace-nowrap mb-0.5">
                        14+ Years
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-luxury text-[#1A1A1A]/70 font-medium whitespace-nowrap">
                        Experience
                      </p>
                    </div>
                    <div className="pt-2 md:pt-0 px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight whitespace-nowrap mb-0.5">
                        500+
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-luxury text-[#1A1A1A]/70 font-medium whitespace-nowrap">
                        Projects Handed Over
                      </p>
                    </div>
                    <div className="pt-2 md:pt-0 px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight whitespace-nowrap mb-0.5">
                        10-Year
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-luxury text-[#1A1A1A]/70 font-medium whitespace-nowrap">
                        Warranty
                      </p>
                    </div>
                    <div className="pt-2 md:pt-0 px-2">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary tracking-tight whitespace-nowrap mb-0.5">
                        45-Day
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-luxury text-[#1A1A1A]/70 font-medium whitespace-nowrap">
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
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Address Interiors modular joinery"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <span className={EYEBROW}>{content.whoWeAre.badge}</span>
            <h2 className={`${H2} mb-6`}>Design and execution, under one roof</h2>
            <p className={`${BODY} max-w-2xl mb-10`}>
              Since 2012, we have combined bespoke spatial design, German-precision
              joinery, and complete project execution, so your home is delivered on a
              fixed timeline and a fixed budget.
            </p>

            <div className="divide-y divide-primary/15 border-y border-primary/15 mb-10">
              {[
                ["German joinery", "Factory-made, millimeter fit, no site dust."],
                ["Single-point ownership", "One dedicated team from civil work to styling."],
                ["Fixed BOQ & warranty", "No hidden costs. 10-year written cover."],
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

            <div className="flex items-end gap-4">
              <p className="text-5xl font-light text-primary tracking-tight leading-none">
                {content.whoWeAre.completedProjects} 
              </p>
              <p className="text-4xl font-light text-primary tracking-tight leading-none">
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
                <p className="text-sm text-primary/50 mb-3">
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
              <Link to="/#contact">Book A Free Site Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-6 sm:px-8 lg:px-12 py-14 sm:py-20 bg-primary/[0.025] border-t border-primary/15">
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
                    className="relative w-full text-left pl-10 py-4 group focus-visible:outline-none"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-[1.35rem] w-[23px] h-[23px] rounded-full border-2 transition-colors duration-300 flex items-center justify-center ${
                        isActive
                          ? "bg-primary border-primary"
                          : isDone
                          ? "bg-primary/40 border-primary/40"
                          : "bg-secondary border-primary/30 group-hover:border-primary"
                      }`}
                    >
                      {isActive && <span className="w-2 h-2 rounded-full bg-secondary" />}
                    </span>
                    <span
                      className={`block text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-primary font-medium"
                          : "text-primary/55 font-light group-hover:text-primary"
                      }`}
                    >
                      {s.name}
                    </span>
                    <span
                      className={`block text-sm mt-0.5 transition-colors duration-300 ${
                        isActive ? "text-[#1A1A1A]/75" : "text-[#1A1A1A]/40"
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

                    <div className="flex items-center gap-3 mt-8">
                      <button
                        type="button"
                        onClick={() => setActiveStage((i) => Math.max(0, i - 1))}
                        disabled={activeStage === 0}
                        className="px-5 py-2 rounded-full border border-white/40 text-sm text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveStage((i) => Math.min(STAGES.length - 1, i + 1))
                        }
                        disabled={activeStage === STAGES.length - 1}
                        className="px-5 py-2 rounded-full bg-secondary text-primary text-sm font-medium hover:bg-secondary/90 disabled:opacity-30 transition-colors"
                      >
                        Next stage
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.15}>
            <div className="rounded-3xl bg-primary text-secondary px-6 py-14 sm:p-16 text-center shadow-2xl flex flex-col items-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-luxury font-medium bg-secondary/15 text-secondary border border-secondary/30 mb-3.5">
                Let's Start Designing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15] max-w-2xl mb-4">
                Ready to Transform Your Home?
              </h2>
              <p className="text-base text-white/85 max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Book a free consultation. We'll review your floor plan and style, and share a transparent estimate.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white !text-primary border border-white hover:bg-white/90 hover:!text-primary shadow-md font-medium px-8 transition-all duration-200"
                >
                  <Link to="/#contact">Schedule Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-white/70 bg-transparent !text-white hover:bg-white hover:!text-primary hover:border-white shadow-sm font-medium px-8 transition-all duration-200"
                >
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}