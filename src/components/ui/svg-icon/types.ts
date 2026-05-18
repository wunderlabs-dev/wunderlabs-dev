import type { HTMLAttributes, ReactNode } from "react";

export const SvgIconSizes = ["xs", "sm", "md", "lg", "xl", "auto"] as const;

export type SvgIconSize = (typeof SvgIconSizes)[number];

export type SvgIconProps = {
  children: ReactNode;
  size?: SvgIconSize;
  viewBox?: string;
  className?: HTMLAttributes<SVGSVGElement>["className"];
} & HTMLAttributes<SVGSVGElement>;
