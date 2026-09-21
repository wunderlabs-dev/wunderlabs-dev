// ABOUTME: a bottom margin keeps the trigger line at 90% of the viewport for every block, so tall sections do not wait until they are already on screen.
export const REVEAL_VIEWPORT = {
  margin: "0px 0px -10% 0px",
  once: true,
} as const;

export const REVEAL_WORD_STAGGER = 0.025;

// ABOUTME: long titles would otherwise trail for close to a second, so the tail words bunch up instead.
export const REVEAL_WORD_STAGGER_LIMIT = 0.2;
