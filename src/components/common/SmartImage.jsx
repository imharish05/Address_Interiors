import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * Performance-optimized image component with an architectural skeleton loader.
 * - Immediately reveals already-cached images without a skeleton flash.
 * - Uses async decoding and lazy loading by default (eager + high fetchPriority when `priority`).
 */
export default function SmartImage({
  src,
  alt = "",
  className,
  wrapperClassName,
  skeletonClassName,
  priority = false,
  ...props
}) {
  const imgRef = useRef(null);
  const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "error"

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setStatus("loaded");
    } else {
      setStatus("loading");
    }
  }, [src]);

  const isLoaded = status === "loaded";

  return (
    <div className={cn("relative w-full h-full overflow-hidden", wrapperClassName)}>
      {status === "loading" && (
        <Skeleton
          className={cn("absolute inset-0 w-full h-full z-0", skeletonClassName)}
        />
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300 ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
}
