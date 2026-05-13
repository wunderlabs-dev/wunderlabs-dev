import type {
  TypographyElement,
  TypographyProps,
  TypographyVariantClassNames,
  TypographyVariantElements,
} from "./types";

import { cn } from "@/utils/helpers";

const typographyVariantClassNames: TypographyVariantClassNames = {
  display: "font-sans text-7xl font-extrabold",
  h1: "font-sans text-5xl leading-13 font-extrabold",
  h2: "font-sans text-3xl leading-8 font-semibold",
  h3: "font-sans text-4xl leading-10 font-semibold",
  body: "font-sans text-base leading-6",
  code: "font-mono text-sm leading-5 font-normal",
  body2: "font-sans text-2xl leading-6 font-semibold",
  caption: "font-sans text-xs leading-[18px]",
} as const;

const typographyVariantElements: TypographyVariantElements = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  code: "p",
  body2: "p",
  caption: "p",
} as const;

const Typography = <TElement extends TypographyElement = "p">({
  as,
  className,
  variant = "body",
  ...props
}: TypographyProps<TElement>) => {
  const Component = as ?? typographyVariantElements[variant];

  return <Component className={cn(typographyVariantClassNames[variant], className)} {...props} />;
};

export default Typography;
