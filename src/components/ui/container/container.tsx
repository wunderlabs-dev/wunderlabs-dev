import type { ContainerElement, ContainerProps } from "./types";

import { cn } from "@/utils/helpers";

const Container = <TElement extends ContainerElement = "div">({
  as,
  className,
  ...props
}: ContainerProps<TElement>) => {
  const Component = as ?? "div";

  return <Component className={cn("mx-auto max-w-7xl", className)} {...props} />;
};

export default Container;
