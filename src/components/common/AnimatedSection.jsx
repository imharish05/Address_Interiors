import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.15,
  id,
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 };
      case "down":
        return { opacity: 0, y: -30 };
      case "left":
        return { opacity: 0, x: 30 };
      case "right":
        return { opacity: 0, x: -30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getAnimate = () => {
    if (shouldReduceMotion) return { opacity: 1 };
    return { opacity: 1, y: 0, x: 0 };
  };

  return (
    <motion.div
      id={id}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier easing
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
