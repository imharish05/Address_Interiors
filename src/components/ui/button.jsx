import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none";

    const variants = {
      default:
        "bg-primary text-secondary hover:bg-primary/90 shadow-sm hover:shadow active:scale-[0.98]",
      secondary:
        "bg-secondary text-primary border border-primary/20 hover:bg-primary/5 active:scale-[0.98]",
      outline:
        "border border-primary/30 text-primary bg-transparent hover:bg-primary hover:text-secondary active:scale-[0.98]",
      ghost:
        "text-primary hover:bg-primary/10 active:scale-[0.98]",
      link:
        "text-primary underline-offset-8 hover:underline p-0 h-auto font-normal",
    };

    const sizes = {
      default: "h-12 px-7 py-3 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-9 py-4 text-base tracking-wider",
      icon: "h-11 w-11 p-0 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
