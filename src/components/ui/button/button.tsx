"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import type { ButtonProps } from "./types";

import { cn } from "@/utils/helpers";

const buttonClassNames = cva(
  cn(
    "relative isolate inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-4xl",
    "text-center text-base leading-6 font-semibold whitespace-nowrap",
    "transition-all duration-200 ease-out select-none",
    "active:scale-97",
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        base: "gap-0 bg-transparent p-0 text-inherit",
        contained:
          "border border-gray-350 bg-gray-350 px-5 py-3 text-white before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-350 before:to-gray-400 before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 active:before:opacity-0",
        outlined:
          "border border-gray-300 bg-transparent px-5 py-3 text-gray-400 before:absolute before:inset-0 before:-z-10 before:bg-gray-150/10 before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 active:before:opacity-0",
        secondary:
          "border border-gray-300 bg-gray-300 px-5 py-3 text-white before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-300 before:to-gray-250 before:opacity-0 before:transition-opacity before:duration-200 hover:border-gray-250 hover:before:opacity-100 active:before:opacity-0",
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
