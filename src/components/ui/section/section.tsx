import { cva } from "class-variance-authority";

import type { SectionProps } from "./types";

import { cn } from "@/utils/helpers";

const sectionClassNames = cva("relative px-6 lg:px-12 scroll-mt-24", {
  variants: {
    pb: {
      default: "pb-28 lg:pb-48",
      compact: "pb-20 lg:pb-40",
      none: "pb-0",
    },
    pt: {
      default: "pt-28 lg:pt-48",
      compact: "pt-20 lg:pt-40",
      none: "pt-0",
    },
  },
  defaultVariants: {
    pb: "none",
    pt: "default",
  },
});

const Section = ({ className, pb = "none", pt = "default", ...props }: SectionProps) => {
  return <section className={cn(sectionClassNames({ pb, pt }), className)} {...props} />;
};

export default Section;
