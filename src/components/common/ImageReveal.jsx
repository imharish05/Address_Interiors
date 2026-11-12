import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "aspect-[4/3]",
  arch = "none", // 'top' | 'left' | 'right' | 'organic' | 'none'
  overlay = true,
  priority = false,
}) {
  const imgRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setStatus("loaded");
    } else {
      setStatus("loading");
    }
  }, [src]);

  const isLoaded = status === "loaded";

  const archClasses = {
    top: "rounded-t-[8rem] sm:rounded-t-[12rem] rounded-b-2xl",
    left: "rounded-l-[6rem] sm:rounded-l-[10rem] rounded-r-2xl",
    right: "rounded-r-[6rem] sm:rounded-r-[10rem] rounded-l-2xl",
    organic: "rounded-[2.5rem] sm:rounded-[4rem]",
    none: "rounded-2xl sm:rounded-3xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-primary/5",
        aspectRatio,
        archClasses[arch] || archClasses.none,
        className
      )}
    >
      {/* Architectural skeleton shimmer until decoded */}
      {status === "loading" && (
        <Skeleton className="absolute inset-0 w-full h-full z-0" />
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt || "Interior Architecture Photography"}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "w-full h-full object-cover transition-[opacity,transform] duration-500 ease-out group-hover:scale-105",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.01]",
          imageClassName
        )}
      />

      {/* Subtle organic luxury gradient overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
