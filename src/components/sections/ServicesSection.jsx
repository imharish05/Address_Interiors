import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import SmartImage from "@/components/common/SmartImage";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-secondary border-t border-primary/10 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 sm:mb-12">
          <AnimatedSection>
            <SectionHeading
              badge="Services & Disciplines"
              title="Tailored Architectural Disciplines"
              subtitle="From single-room sculptural renovations to comprehensive estate architecture, each discipline is guided by unhurried precision."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="w-full sm:w-auto md:self-end shrink-0">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/contact" className="flex items-center justify-center gap-2">
                <span>Enquire Custom Scope</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* 6 Image-based Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={0.1 * (index % 3)}
              className="flex"
            >
              <div className="group relative w-full flex flex-col justify-between rounded-3xl bg-primary/[0.02] border border-primary/15 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1">
                {/* Image Container with Organic Curved Frame */}
                <div className="relative aspect-[16/11] overflow-hidden bg-primary/10">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs uppercase tracking-luxury font-medium bg-secondary/90 backdrop-blur-md text-primary border border-primary/10">
                    {service.category}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-primary tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#1A1A1A]/90 font-normal leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Deliverables Bullet List */}
                  <div className="pt-5 border-t border-primary/10">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#1A1A1A]/80">
                      {service.details.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
