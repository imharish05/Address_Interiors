import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HERO_CONTENT, BRAND_INFO } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-8 sm:pt-32 sm:pb-10 px-6 sm:px-8 lg:px-12 overflow-hidden bg-secondary"
    >
      {/* Subtle organic architectural background glow */}
      <div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <AnimatedSection delay={0.1}>
              <Badge variant="default" className="mb-6">
                {HERO_CONTENT.tagline}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-light tracking-tight text-primary leading-[1.08] text-balance mb-6">
                {HERO_CONTENT.heading}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-base sm:text-lg text-[#1A1A1A]/90 font-normal leading-relaxed text-balance max-w-xl mb-10">
                {HERO_CONTENT.subheading}
              </p>
            </AnimatedSection>

            {/* CTAs - Strictly Single Line */}
            <AnimatedSection delay={0.4} className="flex flex-row flex-nowrap items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-none whitespace-nowrap">
              <Button asChild size="lg" className="shrink-0 whitespace-nowrap">
                <a href="#projects" className="flex items-center gap-2">
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="shrink-0 whitespace-nowrap"
              >
                <a href="#about">{HERO_CONTENT.secondaryCta}</a>
              </Button>
            </AnimatedSection>

            {/* Micro Stats */}
            <AnimatedSection delay={0.5} className="mt-8 pt-6 border-t border-primary/10 w-full">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {HERO_CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-light tracking-tight text-primary">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/70 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual Column — Cinematic Asymmetric Arch Frame */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <AnimatedSection
              delay={0.3}
              direction="left"
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Decorative Arch Backdrop Border */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[10rem] sm:rounded-t-[14rem] rounded-b-3xl border border-primary/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Visual Image */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-t-[10rem] sm:rounded-t-[14rem] rounded-b-3xl overflow-hidden shadow-2xl bg-primary/10 group">
                <img
                  src={HERO_CONTENT.heroImage}
                  alt="Luxury Minimalist Living Suite with Curved Sofas and Travertine"
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Ambient Bottom Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-secondary/90 backdrop-blur-md border border-primary/15 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                      Signature Commission
                    </p>
                    <p className="text-sm font-medium text-[#1A1A1A] mt-0.5">
                      Sushma Villa • South City
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A] font-mono font-medium">
                    2025
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-6 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80">
        <span className="tracking-[0.2em] uppercase font-medium">
          {BRAND_INFO.fullName} • Architectural Monograph
        </span>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer py-1"
          aria-label="Scroll to about section"
        >
          <span className="uppercase tracking-[0.18em]">Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
