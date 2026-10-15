import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignClasses[align], className)}>
      {badge && (
        <Badge variant="default" className="mb-4">
          {badge}
        </Badge>
      )}

      {title && (
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-primary text-balance",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#1a1a1a]/85 font-normal leading-relaxed text-balance max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
