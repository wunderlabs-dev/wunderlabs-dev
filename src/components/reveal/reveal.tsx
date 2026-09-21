"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { isNil } from "es-toolkit";

import type { RevealProps } from "./types";

import { revealKeyframes } from "@/utils/animations";

import { useRevealGroup } from "@/context/reveal-group-context";

import { REVEAL_VIEWPORT } from "./const";

// ABOUTME: an explicit in-view flag keeps these variants out of the RouteTransition variant tree, which would otherwise reveal below-fold content on mount.
const Reveal = ({ children, delay = 0, ...props }: RevealProps) => {
  const revealRef = useRef<HTMLDivElement>(null);
  const group = useRevealGroup();
  const isInView = useInView(revealRef, REVEAL_VIEWPORT);
  const isRevealed = isNil(group) ? isInView : group.isRevealed;

  return (
    <motion.div
      ref={revealRef}
      custom={delay}
      variants={revealKeyframes}
      initial="concealed"
      animate={isRevealed ? "revealed" : "concealed"}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
