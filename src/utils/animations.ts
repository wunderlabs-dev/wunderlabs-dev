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

const appBar = {
  initial: {
    opacity: 0,
    y: -12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.84,
    ease: [0.16, 1, 0.3, 1],
    delay: 0,
  },
} as const;

const about = {
  initial: {
    opacity: 0,
    y: -4,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.16,
  },
} as const;

export { about, appBar, indicator };
