import type { BadgeProps, BadgeVariantMapping } from "./types";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const badgeVariantClassNames: BadgeVariantMapping = {
  solid: "bg-gray-300 px-2 py-0.5 text-sm leading-5 font-normal text-gray-50",
  contained: "bg-gray-50 px-2 py-0.5 text-xs leading-4 font-semibold text-gray-400",
};

const badgeClassNames = cva("inline-flex items-center rounded-4xl font-sans whitespace-nowrap", {
  variants: {
    variant: badgeVariantClassNames,
  },
  defaultVariants: {
    variant: "solid",
  },
});

const Badge = ({ className, variant = "solid", ...props }: BadgeProps) => {
  return <span data-slot="badge" className={cn(badgeClassNames({ variant }), className)} {...props} />;
};

export default Badge;
