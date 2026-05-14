import { cva } from "class-variance-authority";

import type { SectionProps } from "./types";

import { cn } from "@/utils/helpers";

const sectionClassNames = cva("relative", {
  variants: {
    pb: {
      default: "pb-48",
      compact: "pb-40",
      none: "pb-0",
    },
    pt: {
      default: "pt-48",
      compact: "pt-40",
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
