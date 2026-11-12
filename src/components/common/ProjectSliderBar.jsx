import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Reusable single-line horizontal project slider navigation bar.
 * Provides touch/wheel horizontal scrolling, keyboard arrow support,
 * automatic active-tab centering, edge fade cues, and prev/next controls.
 */
export default function ProjectSliderBar({
  projects,
  activeId,
  onChange,
  eyebrow,
  heading,
}) {
  const scrollRef = useRef(null);
  const tabRefs = useRef({});
  const [scrollState, setScrollState] = useState({ left: false, right: false });

  const activeIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === activeId)
  );

  const updateScrollEdges = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      left: el.scrollLeft > 8,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    updateScrollEdges();
    window.addEventListener("resize", updateScrollEdges);
    return () => window.removeEventListener("resize", updateScrollEdges);
  }, [updateScrollEdges, projects.length]);

  // Smoothly center the active pill inside the slider track without scrolling the whole page
  useEffect(() => {
    const container = scrollRef.current;
    const activeEl = tabRefs.current[activeId];
    if (!container || !activeEl) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targetLeft =
      activeEl.offsetLeft -
      container.clientWidth / 2 +
      activeEl.clientWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }, [activeId]);

  const handlePrev = () => {
    const prevIdx = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    onChange(projects[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    onChange(projects[nextIdx].id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      {/* Header Row with Aligned Slider Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {eyebrow && (
            <span className="inline-block px-3.5 py-1 rounded-full text-xs uppercase tracking-luxury font-medium bg-primary/10 text-primary border border-primary/20 mb-2">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-primary text-balance">
            {heading}
          </h2>
        </div>

        {/* Slide Index & Prev/Next Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <span className="text-xs font-mono font-medium text-[#1A1A1A]/70 tracking-wider">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project slide"
              className="btn-sweep btn-sweep-primary min-h-[44px] min-w-[44px] rounded-full border-[1.5px] border-primary bg-white text-primary flex items-center justify-center hover:text-white hover:border-primary hover:-translate-y-0.5 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-95 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project slide"
              className="btn-sweep btn-sweep-primary min-h-[44px] min-w-[44px] rounded-full border-[1.5px] border-primary bg-white text-primary flex items-center justify-center hover:text-white hover:border-primary hover:-translate-y-0.5 transition-[color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-95 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 group"
            >
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Single-Line Horizontal Slider Track */}
      <div className="relative w-full rounded-full bg-primary/5 border border-primary/20 p-1.5 shadow-sm overflow-hidden">
        {/* Left & Right Scroll Fade Hints */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-1.5 top-1.5 bottom-1.5 w-8 rounded-l-full bg-gradient-to-r from-[#FAF6F5] to-transparent z-10 transition-opacity duration-200 ${
            scrollState.left ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-1.5 top-1.5 bottom-1.5 w-8 rounded-r-full bg-gradient-to-l from-[#FAF6F5] to-transparent z-10 transition-opacity duration-200 ${
            scrollState.right ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          role="tablist"
          aria-label="Architectural commissions slider"
          onScroll={updateScrollEdges}
          onKeyDown={handleKeyDown}
          className="flex items-center gap-1.5 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-proximity"
        >
          {projects.map((project) => {
            const isActive = activeId === project.id;
            return (
              <button
                key={project.id}
                ref={(el) => {
                  tabRefs.current[project.id] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(project.id)}
                className={`min-h-[44px] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full whitespace-nowrap shrink-0 snap-center transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-primary text-white border-[1.5px] border-primary shadow-md font-semibold"
                    : "bg-white text-[#1A1A1A] border-[1.5px] border-[#1A1A1A]/15 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:shadow-sm active:scale-95"
                }`}
              >
                {project.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
