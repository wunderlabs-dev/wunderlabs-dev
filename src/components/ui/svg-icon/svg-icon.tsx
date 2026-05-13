import type { SvgIconProps, SvgIconSize } from "./types";

import { cn } from "@/utils/helpers";

const svgIconSizeClassNames: Record<SvgIconSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
  auto: "size-auto",
} as const;

const SvgIcon = ({ children, className, size = "md", viewBox = "0 0 16 16", ...props }: SvgIconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="currentColor"
      className={cn(svgIconSizeClassNames[size], "text-white", className)}
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
