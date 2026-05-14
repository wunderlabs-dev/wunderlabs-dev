"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import type { ButtonProps } from "./types";

import { cn } from "@/utils/helpers";

const buttonClassNames = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-4xl border px-5 py-3 text-center text-base leading-6 font-semibold whitespace-nowrap disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        contained:
          "border-gray-300 bg-gray-350 text-white hover:border-gray-400 hover:bg-gray-400 active:border-gray-300 active:bg-gray-300",
        outlined: "border-gray-300 bg-transparent text-gray-400 hover:bg-gray-150/10 active:bg-gray-100/30",
        secondary:
          "border-gray-300 bg-gray-300 text-white hover:border-gray-250 hover:bg-gray-250 active:border-gray-200 active:bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "contained",
    },
  },
);

const Button = ({ children, className, startAdornment, variant, ...props }: ButtonProps) => {
  return (
    <BaseButton className={cn(buttonClassNames({ variant }), className)} {...props}>
      {startAdornment}
      {children}
    </BaseButton>
  );
};

export default Button;
