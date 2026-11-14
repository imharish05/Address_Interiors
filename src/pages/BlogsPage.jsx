import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SmartImage from "@/components/common/SmartImage";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function BlogsPage() {
  return (
    <div className="pt-[76px] bg-secondary">
      <section className="px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-5">
                The Address Journal
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.08] mb-5">
                Spaces, stories <span className="italic">and the people behind them.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed max-w-2xl">
                Explore completed Address Interiors projects through the places, materials, and design decisions that make each one feel like home.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <AnimatedSection key={project.id} delay={(index % 3) * 0.06}>
              <Link
                to={`/blogs/${project.id}`}
                className="group h-full flex flex-col overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-primary/10">
                  <SmartImage
                    src={project.image}
                    alt={`${project.title} at ${project.location}`}
                    priority={index < 3}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-primary shadow-sm">
                    {project.blogCategory}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-3 text-xs text-[#1A1A1A]/65 mb-3">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" />{project.location}</span>
                    <span className="inline-flex items-center gap-1.5 shrink-0"><Clock3 className="w-3.5 h-3.5" />4 min read</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/75 mb-2">{project.year} · {project.area}</p>
                  <h2 className="text-xl sm:text-2xl font-light leading-snug tracking-tight text-primary mb-3">
                    {project.title}
                  </h2>
                  <p className="text-base font-light italic text-[#1A1A1A]/80 mb-3">{project.blogTitle}</p>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/75 mb-6">{project.blogExcerpt || project.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read project story
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
