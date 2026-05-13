import type { ContainerElement, ContainerProps, ContainerVariantClassNames } from "./types";

import { cn } from "@/utils/helpers";

const containerVariantClassNames: ContainerVariantClassNames = {
  "4xl": "max-w-4xl",
  "7xl": "max-w-7xl",
} as const;

const Container = <TElement extends ContainerElement = "div">({
  as,
  className,
  variant = "7xl",
  ...props
}: ContainerProps<TElement>) => {
  const Component = as ?? "div";

  return <Component className={cn("mx-auto", containerVariantClassNames[variant], className)} {...props} />;
};

export default Container;
