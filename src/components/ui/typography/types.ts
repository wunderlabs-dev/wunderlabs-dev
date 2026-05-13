import type { ComponentPropsWithoutRef, ElementType } from "react";

export const TypographyVariants = ["h1", "h2", "h3", "body", "code", "body2", "caption"] as const;

export type TypographyElement = ElementType;
export type TypographyVariant = (typeof TypographyVariants)[number];
export type TypographyVariantClassNames = Record<TypographyVariant, string>;
export type TypographyVariantElements = Record<TypographyVariant, TypographyElement>;

export type TypographyProps<TElement extends TypographyElement = "p"> = {
  as?: TElement;
  variant?: TypographyVariant;
} & ComponentPropsWithoutRef<TElement>;
