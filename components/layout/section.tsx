"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps } from "react";

import { sectionSpacing } from "@/constants/layout";
import {
  defaultTransition,
  fadeInUpVariants,
  sectionViewport,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionSpacing = keyof typeof sectionSpacing;

type SectionProps = ComponentProps<"section"> & {
  spacing?: SectionSpacing;
  animate?: boolean;
};

function Section({
  spacing = "default",
  animate = false,
  className,
  children,
  ...props
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;
  const classes = cn("relative w-full", sectionSpacing[spacing], className);

  return (
    <section className={classes} {...props}>
      {shouldAnimate ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          transition={defaultTransition}
          variants={fadeInUpVariants}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
}

export { Section, type SectionProps, type SectionSpacing };
