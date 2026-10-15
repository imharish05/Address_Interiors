import React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    solid: "bg-primary text-secondary",
    outline: "border border-primary/30 text-primary bg-transparent",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium tracking-luxury uppercase transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge };
