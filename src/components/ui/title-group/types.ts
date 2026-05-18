import type { ComponentProps, ElementType, ReactNode } from "react";

export const TitleGroupVariants = ["display", "h1", "h2"] as const;

export type TitleGroupVariant = (typeof TitleGroupVariants)[number];

export type TitleGroupProps = Omit<ComponentProps<"div">, "title"> & {
  subtitle: ReactNode;
  title: ReactNode;
  titleAs?: ElementType;
  variant?: TitleGroupVariant;
};
