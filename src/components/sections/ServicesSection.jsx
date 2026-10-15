import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-12">
          <AnimatedSection>
            <SectionHeading
              badge="Services & Disciplines"
              title="Tailored Architectural Disciplines"
              subtitle="From single-room sculptural renovations to comprehensive estate architecture, each discipline is guided by unhurried precision."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:self-end">
            <Button asChild variant="outline">
              <a href="#contact" className="flex items-center gap-2">
                <span>Inquire Custom Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </AnimatedSection>
        </div>

        {/* 6 Image-based Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={0.1 * (index % 3)}
              className="flex"
            >
              <div className="group relative w-full flex flex-col justify-between rounded-3xl bg-primary/[0.02] border border-primary/15 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1">
                {/* Image Container with Organic Curved Frame */}
                <div className="relative aspect-[16/11] overflow-hidden bg-primary/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-luxury font-medium bg-secondary/90 backdrop-blur-md text-primary border border-primary/10">
                    {service.category}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-primary tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-primary/75 font-normal leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Deliverables Bullet List */}
                  <div className="pt-5 border-t border-primary/10">
                    <ul className="grid grid-cols-2 gap-2 text-xs text-primary/70">
                      {service.details.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
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
