"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import type { ButtonProps } from "./types";

import { cn } from "@/utils/helpers";

const buttonClassNames = cva(
  cn(
    "relative isolate inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-4xl border px-5 py-3",
    "text-center text-base leading-6 font-semibold whitespace-nowrap",
    "select-none transition-all duration-200 ease-out",
    "before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-200",
    "hover:before:opacity-100 active:scale-97 active:before:opacity-0",
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        contained:
          "border-gray-350 bg-gray-350 text-white before:bg-linear-to-br before:from-gray-350 before:to-gray-400",
        outlined: "border-gray-300 bg-transparent text-gray-400 before:bg-gray-150/10",
        secondary:
          "border-gray-300 bg-gray-300 text-white before:bg-linear-to-br before:from-gray-300 before:to-gray-250 hover:border-gray-250",
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
