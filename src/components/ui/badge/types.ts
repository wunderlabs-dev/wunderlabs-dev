import type { ComponentProps } from "react";

export const BadgeVariants = ["solid", "contained", "overlay"] as const;
export type BadgeVariant = (typeof BadgeVariants)[number];
export type BadgeVariantMapping = Record<BadgeVariant, string>;

export type BadgeProps = ComponentProps<"span"> & {
  variant?: BadgeVariant;
};
