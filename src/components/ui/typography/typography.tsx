import type { TypographyElement, TypographyProps, TypographyVariantClassNames } from "./types";

import { cn } from "@/utils/helpers";

const typographyVariantClassNames: TypographyVariantClassNames = {
  title: "font-sans text-5xl leading-13 font-extrabold",
  body: "font-sans text-base leading-6",
  code: "font-mono text-sm leading-5 font-normal",
  body2: "font-sans text-2xl leading-6 font-semibold",
} as const;

const Typography = <TElement extends TypographyElement = "p">({
  as,
  className,
  variant = "body",
  ...props
}: TypographyProps<TElement>) => {
  const Component = as ?? "p";

  return <Component className={cn(typographyVariantClassNames[variant], className)} {...props} />;
};

export default Typography;
