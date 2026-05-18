import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button";
import type { ReactNode } from "react";

export const ButtonSizes = ["sm", "md"] as const;
export const ButtonVariants = ["base", "contained", "outlined", "secondary", "transparent"] as const;

export type ButtonSize = (typeof ButtonSizes)[number];
export type ButtonVariant = (typeof ButtonVariants)[number];

export type ButtonProps = Omit<BaseButtonProps, "className"> & {
  className?: string;
  size?: ButtonSize;
  startAdornment?: ReactNode;
  variant?: ButtonVariant;
};
