import React from "react";
import { cn } from "@/lib/utils";

/**
 * Architectural warm-tinted shimmer skeleton loader.
 * Uses GPU-composited transform animation via `.skeleton-shimmer`.
 */
function Skeleton({ className, ...props }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-primary/[0.08] skeleton-shimmer",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
