import type { ComponentPropsWithoutRef, ElementType } from "react";

export type ContainerElement = ElementType;

export type ContainerProps<TElement extends ContainerElement = "div"> = {
  as?: TElement;
} & ComponentPropsWithoutRef<TElement>;
