"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";

type SmoothScrollControls = {
  start: () => void;
  stop: () => void;
};

const useSmoothScroll = (): SmoothScrollControls => {
  const lenis = useLenis();

  const start = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  const stop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  return {
    start,
    stop,
  };
};

export { useSmoothScroll };
export type { SmoothScrollControls };
