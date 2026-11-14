import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SmartImage from "@/components/common/SmartImage";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const project = FEATURED_PROJECTS.find((item) => item.id === slug);
  if (!project || !project.blogStory) return <Navigate to="/blogs" replace />;

  return (
    <article className="pt-[76px] bg-secondary">
      <section className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-10">
        <div className="max-w-5xl mx-auto">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-4 mb-8">
            <ArrowLeft className="w-4 h-4" /> All project stories
          </Link>
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-5">
                {project.blogCategory}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.08] mb-5">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl font-light italic text-[#1A1A1A]/80 leading-relaxed mb-6">
                {project.blogTitle}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#1A1A1A]/70">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{project.location}</span>
                <span>{project.area}</span><span>{project.year}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden bg-primary/10 shadow-xl">
              <SmartImage src={project.image} alt={`${project.title}, ${project.location}`} priority />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="max-w-3xl space-y-5">
              {project.blogStory.map((paragraph, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <p className="text-base sm:text-lg leading-[1.85] text-[#1A1A1A]/85">{paragraph}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-primary/15 bg-primary/[0.03] p-6 sm:p-7 lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">Project palette</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {project.palette.map((material) => (
                  <span key={material} className="px-3 py-1.5 rounded-full text-xs bg-white border border-primary/15 text-[#1A1A1A]">{material}</span>
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-3">Design focus</p>
              <ul className="space-y-2 mb-7">
                {project.tags.map((tag) => <li key={tag} className="text-sm text-[#1A1A1A]/75">{tag}</li>)}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">
                Plan a project with us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {project.secondaryImage && (
        <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="relative aspect-[16/9] sm:aspect-[2.2/1] rounded-3xl overflow-hidden bg-primary/10">
                <SmartImage src={project.secondaryImage} alt={`${project.title} interior detail`} />
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </article>
  );
}
