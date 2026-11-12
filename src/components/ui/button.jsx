import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center text-center sm:whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 cursor-pointer select-none group";

    const variants = {
      default:
        "btn-sweep btn-sweep-ink bg-primary text-white border-[1.5px] border-primary shadow-[0_6px_18px_-4px_rgba(190,80,55,0.4)] hover:border-[#1A1A1A] hover:text-white hover:shadow-[0_12px_28px_-6px_rgba(26,26,26,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-background",
      secondary:
        "btn-sweep btn-sweep-primary bg-[#1A1A1A] text-white border-[1.5px] border-[#1A1A1A] shadow-[0_6px_18px_-4px_rgba(26,26,26,0.3)] hover:border-primary hover:text-white hover:shadow-[0_12px_26px_-6px_rgba(190,80,55,0.42)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:ring-primary focus-visible:ring-offset-background",
      outline:
        "btn-sweep btn-sweep-primary bg-white text-primary border-[1.5px] border-primary shadow-sm hover:border-primary hover:text-white hover:shadow-[0_12px_26px_-6px_rgba(190,80,55,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-background",
      light:
        "btn-sweep btn-sweep-ink bg-white text-primary border-[1.5px] border-white font-semibold shadow-[0_8px_22px_-4px_rgba(0,0,0,0.25)] hover:border-[#1A1A1A] hover:text-white hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:ring-white focus-visible:ring-offset-primary",
      lightOutline:
        "btn-sweep btn-sweep-white bg-transparent text-white border-[1.5px] border-white shadow-sm hover:border-white hover:text-[#1A1A1A] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:ring-white focus-visible:ring-offset-primary",
      ghost:
        "text-primary bg-transparent hover:bg-primary hover:text-white active:scale-[0.97] active:duration-100 focus-visible:ring-primary focus-visible:ring-offset-background",
      link:
        "relative text-primary font-medium p-0 h-auto rounded-none hover:text-[#1A1A1A] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:ring-primary focus-visible:ring-offset-background",
    };

    const sizes = {
      default: "min-h-[44px] sm:min-h-[48px] h-auto px-5 py-2.5 sm:px-7 sm:py-3 text-sm",
      sm: "min-h-[40px] h-auto px-4 py-2 text-xs",
      lg: "min-h-[48px] sm:min-h-[56px] h-auto px-6 py-3 sm:px-9 sm:py-3.5 text-sm sm:text-base tracking-wide sm:tracking-wider",
      icon: "h-11 w-11 min-h-[44px] min-w-[44px] p-0 rounded-full",
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
