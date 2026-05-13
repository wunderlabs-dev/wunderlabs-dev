import type NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type LinkProps = ComponentProps<typeof NextLink> & {
  endAdornment?: ReactNode;
};
