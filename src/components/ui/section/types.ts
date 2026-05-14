import type { ComponentProps } from "react";

export const SectionVariants = ["default", "compact", "none"] as const;
export type SectionVariant = (typeof SectionVariants)[number];
export type SectionVariantClassNames = Record<SectionVariant, string>;

export type SectionProps = ComponentProps<"section"> & {
  pb?: SectionVariant;
  pt?: SectionVariant;
};
