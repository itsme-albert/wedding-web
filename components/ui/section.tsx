"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function Section({
  children,
  className,
  animate = true,
  ...props
}: SectionProps) {
  const content = (
    <div className={cn("max-w-6xl mx-auto px-4 md:px-8", className)} {...props}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
