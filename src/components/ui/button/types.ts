import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button";

export type ButtonProps = Omit<BaseButtonProps, "className"> & {
  className?: string;
};
