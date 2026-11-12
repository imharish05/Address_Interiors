import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HERO_CONTENT, BRAND_INFO } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SmartImage from "@/components/common/SmartImage";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] flex flex-col justify-between pt-24 pb-6 sm:pt-32 sm:pb-10 px-5 sm:px-8 lg:px-12 overflow-hidden bg-secondary"
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
          {/* Left Text Column (renders immediately for fast FCP/LCP) */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <Badge variant="default" className="mb-6">
              {HERO_CONTENT.tagline}
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-light tracking-tight text-primary leading-[1.08] text-balance mb-6">
              {HERO_CONTENT.heading}
            </h1>

            <p className="text-base sm:text-lg text-[#1A1A1A]/90 font-normal leading-relaxed text-balance max-w-xl mb-10">
              {HERO_CONTENT.subheading}
            </p>

            {/* CTAs - Responsive Stack on Mobile, Inline on Tablet/Desktop */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#projects" className="flex items-center justify-center gap-2">
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href="#about">{HERO_CONTENT.secondaryCta}</a>
              </Button>
            </div>

            {/* Micro Stats */}
            <div className="mt-8 pt-6 border-t border-primary/10 w-full">
              <div className="grid grid-cols-3 gap-3 sm:gap-8">
                {HERO_CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col min-w-0">
                    <span className="text-xl sm:text-3xl font-light tracking-tight text-primary">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wide sm:tracking-wider text-[#1A1A1A]/70 mt-1 leading-snug break-words">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Column — Cinematic Asymmetric Arch Frame */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Arch Backdrop Border */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 rounded-t-[7rem] sm:rounded-t-[12rem] lg:rounded-t-[14rem] rounded-b-3xl border border-primary/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Visual Image */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-t-[7rem] sm:rounded-t-[12rem] lg:rounded-t-[14rem] rounded-b-3xl overflow-hidden shadow-2xl bg-primary/10 group">
                <SmartImage
                  src={HERO_CONTENT.heroImage}
                  alt="Luxury Minimalist Living Suite with Curved Sofas and Travertine"
                  priority
                  className="transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Ambient Bottom Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-2xl bg-secondary/90 backdrop-blur-md border border-primary/15 shadow-lg flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-primary">
                      Signature Commission
                    </p>
                    <p className="text-sm font-medium text-[#1A1A1A] mt-0.5 truncate">
                      Sushma Villa
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A] font-mono font-medium shrink-0">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[#1A1A1A]/10 text-[11px] sm:text-xs text-[#1A1A1A]/80">
        <span className="tracking-[0.14em] sm:tracking-[0.2em] uppercase font-medium">
          {BRAND_INFO.fullName} • Architectural Monograph
        </span>

        <a
          href="#about"
          className="btn-sweep btn-sweep-ink inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-full border-[1.5px] border-primary bg-white text-primary font-semibold hover:border-[#1A1A1A] hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
          aria-label="Scroll to about section"
        >
          <span className="uppercase tracking-[0.18em]">Discover</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
