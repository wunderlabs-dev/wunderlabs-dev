import { cva } from "class-variance-authority";

import type { SvgIconProps } from "./types";

import { cn } from "@/utils/helpers";

const svgIconClassNames = cva("text-white", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8",
      auto: "size-auto",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const SvgIcon = ({ children, className, size = "md", viewBox = "0 0 16 16", ...props }: SvgIconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="currentColor"
      className={cn(svgIconClassNames({ size }), className)}
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
