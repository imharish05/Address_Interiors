import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, ShieldCheck, Heart, Layers, SunMedium, VolumeX, Eye } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";

const PILLARS_EXPANDED = [
  {
    number: "01",
    title: "Timeless Architectural Elegance",
    subtitle: "Enduring Proportions",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description:
      "We reject transient fast-furniture trends in favor of architectural purity, balanced sightlines, and sculptural geometries that age with exceptional grace. Every room is designed around natural illumination, proportions, and negative space.",
    principles: [
      "Monolithic natural stone volumes with softened edges",
      "Calculated sightlines creating tranquil visual corridors",
      "Architectural joinery integrated directly into structural walls",
      "Anti-trend curation that remains relevant decades into the future",
    ],
    materials: "Travertine • Venetian Plaster • Patinated Bronze • Honed Quartzite",
  },
  {
    number: "02",
    title: "Everyday Sensory Comfort",
    subtitle: "Tactile Warmth & Living Ease",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury without genuine physical comfort is merely an unlived showroom. We prioritize ergonomic support, acoustic tranquility, and textiles that invite immediate touch, transforming daily routines into quiet rituals of restorative calm.",
    principles: [
      "Curved seating tailored to natural body postures",
      "Tactile bouclé, raw linen, and natural wool fiber finishes",
      "Softened radius casework eliminating sharp visual breaks",
      "Thermal and tactile warmth across all touchpoints",
    ],
    materials: "Unbleached Linen • Textured Bouclé • Cashmere • Brushed Brass",
  },
  {
    number: "03",
    title: "Artisanal Integrity & Precision Joinery",
    subtitle: "Master Craftsmanship",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "From German CNC-machined cabinetry fabricated off-site to hand-rubbed timber stains and concealed hardware, our in-house architects and master joiners deliver zero-compromise precision with a 10-year structural warranty.",
    principles: [
      "Millimeter-accurate German joinery engineered off-site",
      "Dust-free parallel execution keeping handover on committed date",
      "BWR marine grade plywood and soft-close Austrian Blum hardware",
      "Hand-finished surface treatments inspected under high-lumen audits",
    ],
    materials: "Smoked Fumed Oak • Calacatta Gold • Hand-forged Steel • Saddle Leather",
  },
];

const SENSORY_DIMENSIONS = [
  {
    icon: SunMedium,
    title: "Circadian Lighting Balance",
    description:
      "Illumination engineered to follow natural daylight cycles, transitioning smoothly from energizing cool morning light to warm, intimate 2700K ambient glow at dusk.",
  },
  {
    icon: VolumeX,
    title: "Acoustic Quietude",
    description:
      "Acoustic wall paneling, deep fabric densities, and calculated spatial dampening that absorb urban noise, creating an acoustic sanctuary where you can truly rest.",
  },
  {
    icon: Layers,
    title: "Tactile Material Honesty",
    description:
      "Authentic, unadulterated materials that patina beautifully over time — honed marble, porous limestone, oiled European oak, and natural unbleached linens.",
  },
  {
    icon: Eye,
    title: "Concealed Spatial Order",
    description:
      "Concealed air-conditioning plenums, flush wall-integrated storage planes, and invisible wire architecture that liberate spaces from visual disorder.",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. DISTINCT EDITORIAL ASYMMETRIC SPLIT HERO */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Editorial Manifesto */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Design Ethos & Atelier Manifesto
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.12] mb-6">
                Spaces Designed for Living. <br />
                <span className="font-normal italic">Crafted for Feeling.</span>
              </h1>

              <div className="border-l-2 border-primary/40 pl-5 mb-6 py-1">
                <p className="text-base sm:text-lg text-[#1A1A1A]/90 italic font-normal leading-relaxed">
                  "A home should feel like an exhale — an intimate, grounded refuge where every curve, texture, and beam of light serves your peace of mind."
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#1A1A1A]/85 leading-relaxed font-normal mb-8 max-w-xl">
                At Address Interiors, we believe genuine luxury is never about ornate spectacle or fleeting trends. It is the unhurried sensation of tactile warmth, acoustic quietude, and effortless spatial flow.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Commission An Atelier Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
                <div className="text-xs text-[#1A1A1A]/70 font-medium pl-2">
                  Est. 2012 • Richmond Road Atelier
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Architectural Photographic Frame with Tactile Palette Vignette */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-[2rem] overflow-hidden border border-primary/20 shadow-2xl bg-primary/5">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Address Interiors architectural living space"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlapping Tactile Palette Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-secondary/95 backdrop-blur-md border border-primary/20 shadow-xl">
                  <span className="text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
                    Atelier Materiality Palette
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-medium">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#E5D7C5] border border-black/10 shrink-0" />
                    <span>Honed Travertine</span>
                    <span className="text-[#1A1A1A]/30">•</span>
                    <span className="inline-block w-3 h-3 rounded-full bg-[#523F31] border border-black/10 shrink-0" />
                    <span>Smoked Oak</span>
                    <span className="text-[#1A1A1A]/30">•</span>
                    <span className="inline-block w-3 h-3 rounded-full bg-[#EAE8E3] border border-black/10 shrink-0" />
                    <span>Raw Linen</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. THREE FOUNDATIONAL PILLARS (DEEP DIVE) */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
              The Three Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
              The Core Tenets of Address Interior Architecture
            </h2>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
              Every room layout, material palette, and joinery joint we draft adheres strictly to three non-negotiable principles.
            </p>
          </AnimatedSection>

          <div className="space-y-16 sm:space-y-24">
            {PILLARS_EXPANDED.map((pillar, index) => {
              const isEven = index % 2 === 1;
              const IconComponent = pillar.icon;

              return (
                <AnimatedSection key={pillar.number} delay={0.1 * (index + 1)}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Visual Column */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-xl group">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-secondary/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-primary/15 text-primary text-xs font-medium">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>Pillar {pillar.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <span className="font-mono text-sm sm:text-base text-primary/60 font-medium block mb-2">
                        Pillar {pillar.number} — {pillar.subtitle}
                      </span>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary tracking-tight mb-4">
                        {pillar.title}
                      </h3>

                      <p className="text-base text-[#1A1A1A]/85 leading-relaxed font-normal mb-6">
                        {pillar.description}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {pillar.principles.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="text-sm text-[#1A1A1A]/90 font-normal leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-2xl bg-primary/[0.04] border border-primary/15">
                        <span className="text-xs font-semibold text-primary/70 block mb-1">
                          Tactile Signature Materials
                        </span>
                        <p className="text-sm font-medium text-[#1A1A1A]">
                          {pillar.materials}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SENSORY LIVING DIMENSIONS */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
            Sensory Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
            Designing Beyond the Visual
          </h2>
          <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-normal">
            A truly exceptional home is felt as much as it is seen. We engineer every sensory dimension so your environment actively reduces daily stress.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SENSORY_DIMENSIONS.map((dim, idx) => {
            const IconComp = dim.icon;
            return (
              <AnimatedSection key={dim.title} delay={0.1 * (idx + 1)}>
                <div className="p-8 rounded-3xl bg-primary/[0.02] border border-primary/15 hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-light text-primary tracking-tight mb-3">
                      {dim.title}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                      {dim.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-primary p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 mb-4">
                Atelier Commission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                Ready to Experience Intentional Architecture in Your Residence?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8">
                Schedule a private consultation at our Richmond Road atelier or request a dedicated site visit with our principal architects.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 hover:text-primary">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Schedule Atelier Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
