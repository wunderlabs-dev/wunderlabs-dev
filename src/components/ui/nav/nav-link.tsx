"use client";

import type { ComponentProps, MouseEvent } from "react";
import { isNil } from "es-toolkit";

import { cn } from "@/utils/helpers";

type NavLinkProps = Omit<ComponentProps<"button">, "type"> & {
  href: string;
};

const NavLink = ({ className, href, onClick, ...props }: NavLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const target = document.querySelector(href);

    if (isNil(target)) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return <button type="button" data-slot="nav-link" className={cn(className)} onClick={handleClick} {...props} />;
};

export { NavLink };
