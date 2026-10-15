import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [isLoaded, setIsLoaded] = useState(false);

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
        "relative overflow-hidden bg-primary/5 transition-all duration-700",
        aspectRatio,
        archClasses[arch] || archClasses.none,
        className
      )}
    >
      {/* Skeleton / Ambient backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-primary/5 transition-opacity duration-700",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      />

      <img
        src={src}
        alt={alt || "Interior Architecture Photography"}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-105",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-102",
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
