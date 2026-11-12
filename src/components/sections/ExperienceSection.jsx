import React from "react";
import { EXPERIENCE_CONTENT } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Sun, VolumeX, Layers, ShieldCheck } from "lucide-react";

export default function ExperienceSection() {
  const icons = [Sun, VolumeX, Layers, ShieldCheck];

  return (
    <section
      id="experience"
      className="relative py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-primary text-secondary scroll-mt-20 overflow-hidden"
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
          <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium tracking-luxury uppercase bg-secondary/15 text-secondary border border-secondary/30 mb-4">
            {EXPERIENCE_CONTENT.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-secondary mb-6 text-balance">
            {EXPERIENCE_CONTENT.heading}
          </h2>
          <p className="text-base sm:text-xl text-secondary/90 font-light leading-relaxed max-w-2xl text-balance">
            {EXPERIENCE_CONTENT.subheading}
          </p>
        </AnimatedSection>

        {/* 4 Emotional Living Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {EXPERIENCE_CONTENT.features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <AnimatedSection
                key={feature.title}
                delay={0.15 * index}
                className="flex"
              >
                <div className="w-full p-6 sm:p-8 rounded-3xl bg-white/[0.12] border border-white/25 hover:border-white/60 hover:bg-white/[0.18] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-white/95 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/25 flex items-center justify-between text-xs text-white font-mono">
                    <span>Phase 0{index + 1}</span>
                    <span className="w-8 h-[1.5px] bg-white/60 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
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
