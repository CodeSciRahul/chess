import type { Transition, Variants } from "framer-motion";

import { durations } from "@/constants/animations";

export const defaultTransition: Transition = {
  duration: durations.slow / 1000,
  ease: [0.21, 0.47, 0.32, 0.98],
};

export const fastTransition: Transition = {
  duration: durations.fast / 1000,
  ease: [0, 0, 0.2, 1],
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const sectionViewport = {
  once: true,
  margin: "-80px" as const,
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
