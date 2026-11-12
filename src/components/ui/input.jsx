import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-primary/25 bg-white px-4 py-2 text-sm text-[#1A1A1A] transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#1A1A1A]/55 hover:border-primary/50 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
