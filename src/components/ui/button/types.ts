import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button";
import type { ReactNode } from "react";

export const ButtonVariants = ["contained", "outlined", "secondary"] as const;

export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonVariantClassNames = Record<ButtonVariant, string>;

export type ButtonProps = Omit<BaseButtonProps, "className"> & {
  className?: string;
  startAdornment?: ReactNode;
  variant?: ButtonVariant;
};
