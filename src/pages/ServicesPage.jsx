import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Shield, Clock, Layers, Hammer, Ruler, UserCheck, Award, Sparkles, Compass } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";

const GUARANTEES = [
  {
    icon: Shield,
    title: "Itemized Fixed BOQ",
    description: "Every nut, bolt, and square foot is documented upfront. Zero mid-project surprises or cost escalations.",
  },
  {
    icon: Hammer,
    title: "German Precision Joinery",
    description: "Modular cabinetry is precision CNC-machined in our off-site facility with millimeter fit and zero on-site sawdust.",
  },
  {
    icon: Clock,
    title: "45-Day Handover",
    description: "Parallel civil and off-site manufacturing keeps your committed key handover on date, backed in writing.",
  },
  {
    icon: Layers,
    title: "10-Year Written Warranty",
    description: "Certified BWR marine-grade plywood and authentic German hardware (Blum & Hettich) built to endure generations.",
  },
  {
    icon: Ruler,
    title: "100% Custom 3D Design",
    description: "Photorealistic 3D virtual walkthroughs and tactile material trays approved before a single nail is hammered.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Project Director",
    description: "A single accountable architect coordinates all civil, MEP, and styling trades throughout the commission.",
  },
];

const CATEGORIES = [
  "All Disciplines",
  "Full Sanctuary",
  "Social & Rest",
  "Gastronomic Design",
  "Private Quarters",
  "Artisan Craft",
  "Complete Renovation",
];

const SCOPE_PILLARS = [
  {
    number: "01",
    label: "Whole-Home Sanctuaries",
    detail: "Civil realignments, spatial planning, flooring, ceiling & seamless handover.",
  },
  {
    number: "02",
    label: "German Precision Joinery",
    detail: "Modular kitchens, custom credenzas & walk-in dressing suites crafted off-site.",
  },
  {
    number: "03",
    label: "Fixed BOQ & Warranty",
    detail: "Locked pricing with no hidden escalations and written 10-year structural warranty.",
  },
];

/* Hero highlights (same facts as before, shown as a clean list) */
const HERO_FACTS = [
  { value: "100%", label: "Bespoke Architecture" },
  { value: "10 Yrs", label: "Structural Warranty" },
  { value: "45 Days", label: "Handover Standard" },
  { value: "Fixed", label: "BOQ Upfront" },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");

  const filteredServices =
    selectedCategory === "All Disciplines"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. HERO & SERVICES SHOWCASE */}
      <section className="px-6 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-16 sm:pb-20 lg:pb-24 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-10 sm:pb-14 border-b border-primary/15">
            {/* Left: Heading, description, action */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-5">
                Architectural Scope & Precision Execution
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-6">
                Tailored Disciplines. <br />
                <span className="font-normal italic">Bespoke Precision.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#1A1A1A]/80 font-normal leading-relaxed max-w-xl mb-8">
                Sculptural interior architecture tailored with German precision joinery, fixed upfront BOQ pricing, and seamless end-to-end execution.
              </p>

              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Inquire Custom Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Right: Clean fact list separated by a vertical line */}
            <div className="lg:col-span-5 lg:border-l lg:border-primary/20 lg:pl-12">
              <p className="text-xs uppercase tracking-luxury text-primary/70 font-medium mb-4">
                Craftsmanship Standard · DIN EN 14749
              </p>

              <dl className="divide-y divide-primary/15 border-y border-primary/15">
                {HERO_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <dt className="text-sm sm:text-base text-[#1A1A1A]/75">
                      {fact.label}
                    </dt>
                    <dd className="text-2xl sm:text-3xl font-light text-primary tracking-tight">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-5">
                <span className="font-medium text-primary">Architectural Precision.</span>{" "}
                Direct execution with zero sub-contractor markups.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filter Tabs */}
        <AnimatedSection delay={0.1} className="pt-10 sm:pt-14 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-secondary shadow-md font-semibold scale-[1.02]"
                      : "text-[#1A1A1A]/75 hover:text-primary hover:bg-primary/5 border border-primary/15"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={0.08 * (index % 3)}
              className="flex"
            >
              <div className="group relative w-full flex flex-col justify-between rounded-3xl bg-primary/[0.02] border border-primary/15 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1">
                {/* Image Container with Category Badge */}
                <div className="relative aspect-[16/11] overflow-hidden bg-primary/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-medium bg-secondary/95 backdrop-blur-md text-primary border border-primary/15 shadow-sm">
                    {service.category}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-light text-primary tracking-tight mb-3">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#1A1A1A]/85 font-normal leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Deliverables Bullet List */}
                    <div className="pt-5 border-t border-primary/10 mb-6">
                      <span className="text-xs font-semibold text-primary/70 block mb-2.5">
                        Key Architectural Deliverables
                      </span>
                      <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#1A1A1A]/80">
                        {service.details.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inquire Button */}
                    <Button asChild variant="outline" className="w-full group/btn">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <span>Commission This Discipline</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 4. THE ADDRESS STANDARD GUARANTEE GRID */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 bg-primary/[0.02] border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              The Address Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15] mb-4">
              What Every Commission Includes
            </h2>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
              No hidden subcontracts, no cost revisions, and zero excuses. We back every project with written guarantees.
            </p>
          </AnimatedSection>

          {/* One bordered panel, cells split by hairlines */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/15 border border-primary/15 rounded-3xl overflow-hidden shadow-sm">
              {GUARANTEES.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative bg-secondary p-8 sm:p-10 transition-colors duration-300 hover:bg-primary/[0.035]"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-full border border-primary/25 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-secondary group-hover:border-primary group-hover:scale-105">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-primary/40 transition-colors duration-300 group-hover:text-primary">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl font-light text-primary tracking-tight mb-2.5 transition-transform duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Line that draws across on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"
                    />
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-primary p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                Private Commission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                Have a Unique Floor Plan or Architectural Scope?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8">
                Share your architectural floor plans or schedule an atelier visit to review physical material trays and 3D walkthrough examples.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 hover:text-primary">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Book Atelier Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                  <Link to="/projects">View Curated Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}