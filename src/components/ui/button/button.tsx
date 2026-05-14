"use client";

import { Button as BaseButton } from "@base-ui/react/button";

import type { ButtonProps, ButtonVariantClassNames } from "./types";

import { cn } from "@/utils/helpers";

const buttonVariantClassNames: ButtonVariantClassNames = {
  contained: "border-gray-300 bg-gray-350 text-white",
  outlined: "border-gray-300 bg-transparent text-gray-400",
  secondary: "border-gray-300 bg-gray-300 text-white",
} as const;

const buttonBaseClassName =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-4xl border px-5 py-3 text-center text-base leading-6 font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50";

const Button = ({ children, className, startAdornment, variant = "contained", ...props }: ButtonProps) => {
  return (
    <BaseButton className={cn(buttonBaseClassName, buttonVariantClassNames[variant], className)} {...props}>
      {startAdornment}
      {children}
    </BaseButton>
  );
};

export default Button;
