import type { ComponentPropsWithoutRef, ElementType } from "react";

export const ContainerVariants = ["2xl", "4xl", "5xl", "7xl"] as const;

export type ContainerElement = ElementType;
export type ContainerVariant = (typeof ContainerVariants)[number];

export type ContainerProps<TElement extends ContainerElement = "div"> = {
  as?: TElement;
  variant?: ContainerVariant;
} & ComponentPropsWithoutRef<TElement>;
