"use client";

import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";

import { REVEAL_WORD_STAGGER, REVEAL_WORD_STAGGER_LIMIT } from "./const";

const WHITESPACE_PATTERN = /(\s+)/;

type WordCursor = {
  delay: number;
  index: number;
  isRevealed: boolean;
  keyframes: Variants;
};

const splitTextIntoWords = (text: string, cursor: WordCursor) =>
  text.split(WHITESPACE_PATTERN).map((chunk, chunkIndex) => {
    if (chunk.trim().length === 0) {
      return chunk;
    }

    const delay = cursor.delay + Math.min(cursor.index * REVEAL_WORD_STAGGER, REVEAL_WORD_STAGGER_LIMIT);
    cursor.index += 1;

    return (
      <motion.span
        key={`${chunk}-${chunkIndex}`}
        className="inline-block whitespace-pre"
        custom={delay}
        variants={cursor.keyframes}
        initial="concealed"
        animate={cursor.isRevealed ? "revealed" : "concealed"}
      >
        {chunk}
      </motion.span>
    );
  });

const splitWords = (node: ReactNode, cursor: WordCursor): ReactNode =>
  Children.map(node, (child) => {
    if (typeof child === "string") {
      return splitTextIntoWords(child, cursor);
    }

    if (isValidElement(child)) {
      const element = child as ReactElement<{ children?: ReactNode }>;

      return cloneElement(element, undefined, splitWords(element.props.children, cursor));
    }

    return child;
  });

export { splitWords };
export type { WordCursor };
