import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none group";

    const variants = {
      default:
        "bg-primary text-secondary border border-primary hover:bg-primary/90 hover:text-secondary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm",
      secondary:
        "bg-secondary text-primary border border-primary/25 hover:bg-primary hover:text-secondary hover:border-primary hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm",
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary hover:text-secondary hover:border-primary hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm",
      ghost:
        "text-primary hover:bg-primary/10 hover:text-primary active:scale-[0.98]",
      link:
        "text-primary underline-offset-8 hover:underline hover:text-primary/80 p-0 h-auto font-normal",
    };

    const sizes = {
      default: "h-12 px-7 py-3 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-9 py-4 text-base tracking-wider",
      icon: "h-11 w-11 p-0 rounded-full",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref,
        className: cn(combinedClassName, children.props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
