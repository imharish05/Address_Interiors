import React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-primary/25 bg-white px-4 py-3 text-sm text-[#1A1A1A] transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#1A1A1A]/55 hover:border-primary/50 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
