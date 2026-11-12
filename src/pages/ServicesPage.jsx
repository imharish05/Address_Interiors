
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Clock,
  Layers,
  Hammer,
  Ruler,
  UserCheck,
  Award,
  Sparkles,
  Compass,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";

const GUARANTEES = [
  {
    icon: Shield,
    title: "Clear & Fixed Pricing",
    description:
      "Know the full cost before work begins. No hidden charges or unexpected price increases.",
  },
  {
    icon: Hammer,
    title: "Perfect Furniture Fitting",
    description:
      "Our furniture is made in our factory to fit your home perfectly, with less dust and mess.",
  },
  {
    icon: Clock,
    title: "Home Ready in 45 Days",
    description:
      "We plan the work carefully to complete your home within 45 days, as promised.",
  },
  {
    icon: Layers,
    title: "10-Year Written Warranty",
    description:
      "We use quality plywood and trusted hardware, backed by a written 10-year warranty.",
  },
  {
    icon: Ruler,
    title: "Custom 3D Design",
    description:
      "See how your home will look in 3D and approve the designs and materials before work begins.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Project Manager",
    description:
      "One person will manage your project, coordinate the work, and keep you updated until completion.",
  },
];

const SCOPE_PILLARS = [
  {
    number: "01",
    label: "Complete Home Interiors",
    detail:
      "From room planning, flooring, and ceilings to furniture and final handover.",
  },
  {
    number: "02",
    label: "Custom Furniture & Kitchens",
    detail:
      "Beautiful kitchens, custom furniture, wardrobes, and dressing rooms made to fit your home.",
  },
  {
    number: "03",
    label: "Clear Pricing & Warranty",
    detail:
      "Know the full cost before work begins, with no hidden charges and a written 10-year warranty.",
  },
];

/* Hero highlights */
const HERO_FACTS = [
  { value: "100%", label: "Designed for You" },
  { value: "10 Yrs", label: "Written Warranty" },
  { value: "45 Days", label: "Home Handover" },
  { value: "Fixed", label: "Price Before Work" },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. HERO & SERVICES SHOWCASE */}
      <section className="px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-14 sm:pb-20 lg:pb-24 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-10 sm:pb-14 border-b border-primary/15">
            {/* Left: Heading, description, action */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-5">
                Our Interior Design Services
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-6">
                Beautiful Spaces. <br className="hidden sm:inline" />
                <span className="font-normal italic">
                  Made Just for You.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#1A1A1A]/80 font-normal leading-relaxed max-w-xl mb-8">
                We design and create beautiful homes and workspaces with
                custom furniture, quality materials, clear pricing, and
                complete support from start to finish.
              </p>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>

            {/* Right: Highlights */}
            <div className="lg:col-span-5 lg:border-l lg:border-primary/20 lg:pl-12">
              <p className="text-xs uppercase tracking-luxury text-primary/70 font-medium mb-4">
                Our Promise to You
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
                <span className="font-medium text-primary">
                  Quality You Can Trust.
                </span>{" "}
                One team takes care of your project from beginning to end.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="pt-10 sm:pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
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
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
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
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
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
                        What We Offer
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#1A1A1A]/80">
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
                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Explore This Service</span>
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

      {/* 4. OUR GUARANTEES */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 bg-primary/[0.02] border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15] mb-4">
              What You Get With Every Project
            </h2>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
              Clear prices, quality materials, timely work, and reliable
              support. We make sure you know what to expect at every step.
            </p>
          </AnimatedSection>

          {/* Guarantee Grid */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/15 border border-primary/15 rounded-3xl overflow-hidden shadow-sm">
              {GUARANTEES.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative bg-secondary p-6 sm:p-8 lg:p-10 transition-colors duration-300 hover:bg-primary/[0.035]"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-full border-[1.5px] border-primary/40 bg-white text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-105">
                        <IconComp className="w-5 h-5 transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-mono font-medium text-[#1A1A1A]/70 transition-colors duration-300 group-hover:text-primary">
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
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-primary p-6 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl">
            <img
              src="/images/projects/services-cta.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                Let's Get Started
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                Planning to Build or Improve Your Home?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8">
                Share your home plan or visit us to see our materials,
                furniture designs, and 3D home previews. Let's plan your
                space together.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button asChild variant="light" size="lg" className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="lightOutline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link to="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
