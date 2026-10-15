import React from "react";
import { cn } from "@/lib/utils";

export default function SectionDivider({
  variant = "contour",
  className,
  inverted = false,
}) {
  if (variant === "minimal-line") {
    return (
      <div className={cn("relative w-full py-4 flex items-center justify-center overflow-hidden", className)}>
        <div className="w-20 h-[1px] bg-primary/20" />
        <div className="mx-3 w-1.5 h-1.5 rounded-full bg-primary/40" />
        <div className="w-20 h-[1px] bg-primary/20" />
      </div>
    );
  }

  if (variant === "arch") {
    return (
      <div
        className={cn(
          "w-full overflow-hidden leading-none pointer-events-none text-secondary",
          inverted ? "rotate-180" : "",
          className
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  // Default: subtle organic architectural contour with tight, controlled vertical footprint
  return (
    <div
      className={cn(
        "relative w-full py-3 my-4 flex items-center justify-center overflow-hidden pointer-events-none opacity-30",
        inverted ? "rotate-180" : "",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl h-6 sm:h-8"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C200,10 400,50 600,30 C800,10 1000,45 1200,25"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeOpacity="0.25"
          fill="none"
        />
        <path
          d="M0,40 C300,20 500,55 800,30 C1000,15 1100,35 1200,32"
          stroke="var(--primary)"
          strokeWidth="0.75"
          strokeDasharray="4 4"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>
    </div>
  );
}
