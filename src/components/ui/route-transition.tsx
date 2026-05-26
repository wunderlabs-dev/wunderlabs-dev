"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { routeTransitionKeyframes } from "@/utils/animations";

type RouteTransitionProps = {
  children: ReactNode;
};

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} initial="hidden" animate="visible" exit="exit" variants={routeTransitionKeyframes}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { RouteTransition };
