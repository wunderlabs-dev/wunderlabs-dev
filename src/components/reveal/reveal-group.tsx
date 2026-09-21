"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

import type { RevealGroupProps } from "./types";

import { RevealGroupContextProvider } from "@/context/reveal-group-context";

import { REVEAL_VIEWPORT } from "./const";

// ABOUTME: one observer per group keeps the child delays meaningful; with an observer each, a delayed child would wait twice.
const RevealGroup = ({ children, ...props }: RevealGroupProps) => {
  const groupRef = useRef<HTMLDivElement>(null);
  const isRevealed = useInView(groupRef, REVEAL_VIEWPORT);

  return (
    <div ref={groupRef} {...props}>
      <RevealGroupContextProvider isRevealed={isRevealed}>{children}</RevealGroupContextProvider>
    </div>
  );
};

export default RevealGroup;
