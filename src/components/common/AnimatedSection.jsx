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
        return { opacity: 0, y: 18 };
      case "down":
        return { opacity: 0, y: -18 };
      case "left":
        return { opacity: 0, x: 18 };
      case "right":
        return { opacity: 0, x: -18 };
      default:
        return { opacity: 0, y: 18 };
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
        duration: 0.45,
        delay: Math.min(delay, 0.25),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
