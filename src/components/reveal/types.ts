import type { ComponentProps, ElementType, ReactNode } from "react";
import type { HTMLMotionProps } from "motion/react";

import type { TypographyVariant } from "@/components/ui/typography";

export type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export type RevealGroupProps = ComponentProps<"div">;

export type RevealTitleProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: TypographyVariant;
  withBlur?: boolean;
};
