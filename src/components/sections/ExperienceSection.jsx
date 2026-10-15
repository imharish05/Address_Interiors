import React from "react";
import { EXPERIENCE_CONTENT } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Sparkles, Sun, VolumeX, ShieldCheck } from "lucide-react";

export default function ExperienceSection() {
  const icons = [Sun, VolumeX, Sparkles, ShieldCheck];

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-primary text-secondary scroll-mt-24 overflow-hidden"
    >
      {/* Cinematic Full-bleed Background Architectural Photography with Soft Espresso Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={EXPERIENCE_CONTENT.bannerImage}
          alt="Atmospheric Architecture"
          loading="lazy"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Decorative Organic Radial Ambient Rings */}
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full border border-secondary/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full border border-secondary/5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Warm Ivory Text */}
        <AnimatedSection className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium tracking-luxury uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            {EXPERIENCE_CONTENT.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-secondary mb-6 text-balance">
            {EXPERIENCE_CONTENT.heading}
          </h2>
          <p className="text-base sm:text-xl text-secondary/75 font-light leading-relaxed max-w-2xl text-balance">
            {EXPERIENCE_CONTENT.subheading}
          </p>
        </AnimatedSection>

        {/* 4 Emotional Living Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCE_CONTENT.features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <AnimatedSection
                key={feature.title}
                delay={0.15 * index}
                className="flex"
              >
                <div className="w-full p-8 rounded-3xl bg-secondary/[0.04] border border-secondary/10 hover:border-secondary/25 hover:bg-secondary/[0.07] transition-all duration-500 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-secondary tracking-tight mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-secondary/70 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-secondary/10 flex items-center justify-between text-xs text-secondary/40 font-mono">
                    <span>Phase 0{index + 1}</span>
                    <span className="w-8 h-[1px] bg-secondary/20 group-hover:w-12 transition-all duration-300" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
