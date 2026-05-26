import type { Variants } from "motion/react";

const indicator = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 18,
  },
} as const;

const routeTransitionKeyframes = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.16,
      ease: [0.25, 1, 0.5, 1],
    },
  },
} satisfies Variants;

export { indicator, routeTransitionKeyframes };
