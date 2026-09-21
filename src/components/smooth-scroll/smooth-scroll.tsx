"use client";

import { ReactLenis } from "lenis/react";

import type { SmoothScrollProps } from "./types";

import "lenis/dist/lenis.css";

const ANCHOR_OFFSET = 96;

const lenisOptions = {
  allowNestedScroll: true,
  anchors: {
    offset: ANCHOR_OFFSET,
  },
  autoRaf: true,
  autoToggle: true,
} as const;

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return (
    <>
      <ReactLenis root options={lenisOptions} />
      {children}
    </>
  );
};

export default SmoothScroll;
