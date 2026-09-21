"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

import type { RevealTitleProps } from "./types";

import { Typography } from "@/components/ui/typography";

import { REVEAL_VIEWPORT } from "./const";
import { splitWords } from "./split-words";

// ABOUTME: words animate from an explicit useInView flag because variant propagation stops at the plain Typography element.
const RevealTitle = ({ as, children, className, delay = 0, variant }: RevealTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isRevealed = useInView(titleRef, REVEAL_VIEWPORT);

  return (
    <div ref={titleRef}>
      <Typography as={as} variant={variant} className={className}>
        {splitWords(children, { delay, index: 0, isRevealed })}
      </Typography>
    </div>
  );
};

export default RevealTitle;
