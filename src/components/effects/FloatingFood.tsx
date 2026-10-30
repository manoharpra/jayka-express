"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Gentle float. MotionConfig disables the transform when reduced motion is requested. */
export function FloatingFood({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute size-24 overflow-hidden rounded-full border-4 border-gold shadow-2xl sm:size-32 ${className ?? ""}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="relative size-full">{children}</div>
    </motion.div>
  );
}

