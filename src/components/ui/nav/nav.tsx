"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { isNil } from "es-toolkit";

import { cn } from "@/utils/helpers";
import { indicator } from "@/utils/animations";

type NavProps = {
  children: ReactNode;
  className?: string;
};

const INDICATOR_POSITION_DIVISOR = 2;
const INDICATOR_POSITION_OFFSET = 2;

const Nav = ({ className, children }: NavProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [posX, setPosX] = useState<number | null>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const nav = navRef.current;

    if (isNil(nav)) {
      return;
    }

    const target = (event.target as HTMLElement).closest("[data-slot='nav-link']") as HTMLElement | null;

    if (isNil(target)) {
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    setPosX(targetRect.left - navRect.left + targetRect.width / INDICATOR_POSITION_DIVISOR - INDICATOR_POSITION_OFFSET);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosX(null);
  }, []);

  return (
    <nav
      ref={navRef}
      data-slot="nav"
      className={cn("relative items-center gap-1", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isNil(posX) ? null : (
          <motion.div
            className="absolute bottom-1 h-0.5 w-1 rounded-full bg-gray-400"
            initial={indicator.hidden}
            exit={indicator.hidden}
            transition={indicator.transition}
            animate={{
              ...indicator.visible,
              left: posX,
            }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export { Nav };
