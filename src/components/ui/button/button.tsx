"use client";

import { Button as BaseButton } from "@base-ui/react/button";

import type { ButtonProps } from "./types";

import { cn } from "@/utils/helpers";

const Button = ({ className, ...props }: ButtonProps) => {
  return <BaseButton className={cn(className)} {...props} />;
};

export default Button;
