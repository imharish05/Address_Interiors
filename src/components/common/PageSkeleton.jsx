import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Route-level skeleton loader displayed while lazy-loaded page chunks resolve.
 */
export default function PageSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="pt-28 pb-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-[75vh]"
    >
      {/* Hero Skeleton */}
      <div className="max-w-3xl mb-12 space-y-5">
        <Skeleton className="h-7 w-44 rounded-full" />
        <Skeleton className="h-12 sm:h-16 w-full max-w-2xl rounded-2xl" />
        <Skeleton className="h-12 sm:h-16 w-4/5 max-w-xl rounded-2xl" />
        <Skeleton className="h-5 w-full max-w-lg rounded-lg" />
      </div>

      {/* Content Cards Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-primary/10 bg-white p-4 space-y-4 shadow-sm"
          >
            <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
            <Skeleton className="h-6 w-2/3 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-5/6 rounded-md" />
            <Skeleton className="h-11 w-full rounded-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
