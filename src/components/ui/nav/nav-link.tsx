import type { ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const navLinkVariants = cva(
  [
    "inline-flex items-center",
    "rounded-4xl px-4 py-3",
    "cursor-pointer select-none",
    "text-base leading-6 font-normal",
    "transition-colors duration-150 ease-in-out",
  ],
  {
    variants: {
      variant: {
        default: "text-gray-250 hover:text-gray-400",
        active: "text-gray-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type NavLinkProps = ComponentProps<typeof Link> & VariantProps<typeof navLinkVariants>;

const NavLink = ({ className, variant = "default", ...props }: NavLinkProps) => {
  return (
    <Link
      data-slot="nav-link"
      data-variant={variant}
      className={cn(navLinkVariants({ variant, className }))}
      {...props}
    />
  );
};

export { NavLink, navLinkVariants };
