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

export { indicator };
