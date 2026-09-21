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

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealKeyframes = {
  concealed: {
    opacity: 0,
    y: 16,
  },
  revealed: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.4,
      ease: revealEase,
    },
  }),
} satisfies Variants;

const revealWordKeyframes = {
  concealed: {
    opacity: 0,
    y: "0.3em",
  },
  revealed: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.42,
      ease: revealEase,
    },
  }),
} satisfies Variants;

// ABOUTME: blur only reads as motion at display sizes; on small text it looks like a rendering glitch.
const revealBlurredWordKeyframes = {
  concealed: {
    opacity: 0,
    y: "0.3em",
    filter: "blur(5px)",
  },
  revealed: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay,
      duration: 0.42,
      ease: revealEase,
    },
  }),
} satisfies Variants;

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

export { indicator, revealBlurredWordKeyframes, revealKeyframes, revealWordKeyframes, routeTransitionKeyframes };
