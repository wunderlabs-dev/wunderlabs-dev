"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { isNil } from "es-toolkit";

import type { RevealTitleProps } from "./types";

import { revealBlurredWordKeyframes, revealWordKeyframes } from "@/utils/animations";

import { useRevealGroup } from "@/context/reveal-group-context";

import { Typography } from "@/components/ui/typography";

import { REVEAL_VIEWPORT } from "./const";
import { splitWords } from "./split-words";

// ABOUTME: words animate from an explicit in-view flag because variant propagation stops at the plain Typography element.
const RevealTitle = ({ as, children, className, delay = 0, variant, withBlur = true }: RevealTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const group = useRevealGroup();
  const isInView = useInView(titleRef, REVEAL_VIEWPORT);
  const isRevealed = isNil(group) ? isInView : group.isRevealed;
  const keyframes = withBlur ? revealBlurredWordKeyframes : revealWordKeyframes;

  return (
    <div ref={titleRef}>
      <Typography as={as} variant={variant} className={className}>
        {splitWords(children, { delay, index: 0, isRevealed, keyframes })}
      </Typography>
    </div>
  );
};

export default RevealTitle;
