import React from "react";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const isScrolled = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={cn(
        "btn-sweep btn-sweep-ink fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 min-h-[48px] min-w-[48px] flex items-center justify-center p-3 rounded-full bg-primary text-white shadow-[0_10px_28px_rgba(26,26,26,0.3)] border-2 border-white transition-[color,background-color,border-color,transform,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 cursor-pointer group hover:border-white hover:shadow-[0_14px_32px_rgba(0,0,0,0.42)] hover:scale-105 active:scale-95",
        isScrolled
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
