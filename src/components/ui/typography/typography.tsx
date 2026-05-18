import { cva } from "class-variance-authority";

import type { TypographyElement, TypographyProps, TypographyVariantElements } from "./types";

import { cn } from "@/utils/helpers";

const typographyClassNames = cva(null, {
  variants: {
    variant: {
      display: "font-sans text-3xl leading-8 font-extrabold md:text-5xl md:leading-13 lg:text-7xl lg:leading-17",
      h1: "font-sans text-3xl leading-8 font-extrabold lg:text-5xl lg:leading-13",
      h2: "font-sans text-3xl leading-8 font-semibold",
      h3: "font-sans text-4xl leading-10 font-semibold",
      body: "font-sans text-base leading-6",
      body2: "font-sans text-lg leading-6 font-semibold lg:text-2xl",
      code: "font-mono text-sm leading-5 font-normal",
      caption: "font-sans text-xs",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const typographyVariantElements: TypographyVariantElements = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  body2: "p",
  code: "span",
  caption: "small",
} as const;

const Typography = <TElement extends TypographyElement = "p">({
  as,
  className,
  variant = "body",
  ...props
}: TypographyProps<TElement>) => {
  const Component = as ?? typographyVariantElements[variant];

  return <Component className={cn(typographyClassNames({ variant }), className)} {...props} />;
};

export default Typography;
