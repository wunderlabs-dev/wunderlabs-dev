import { cva } from "class-variance-authority";

import type { ContainerElement, ContainerProps } from "./types";

import { cn } from "@/utils/helpers";

const containerClassNames = cva("mx-auto w-full", {
  variants: {
    variant: {
      "2xl": "max-w-2xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "7xl": "max-w-7xl",
    },
  },
  defaultVariants: {
    variant: "7xl",
  },
});

const Container = <TElement extends ContainerElement = "div">({
  as,
  className,
  variant = "7xl",
  ...props
}: ContainerProps<TElement>) => {
  const Component = as ?? "div";

  return <Component className={cn(containerClassNames({ variant }), className)} {...props} />;
};

export default Container;
