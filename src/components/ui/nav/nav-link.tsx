import type { ComponentProps } from "react";
import NextLink from "next/link";

import { cn } from "@/utils/helpers";

type NavLinkProps = ComponentProps<"a"> & {
  href: `#${string}`;
};

const NavLink = ({ children, className, href, ...props }: NavLinkProps) => {
  return (
    <NextLink
      data-slot="nav-link"
      href={href}
      {...props}
      className={cn(
        "inline-flex cursor-pointer items-center rounded-4xl text-base leading-6 font-normal text-gray-250 transition-colors duration-150 ease-in-out select-none hover:text-gray-400",
        className,
      )}
    >
      {children}
    </NextLink>
  );
};

export { NavLink };
