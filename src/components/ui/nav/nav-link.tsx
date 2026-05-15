"use client";

import type { ComponentProps, MouseEvent } from "react";
import { isNil } from "es-toolkit";

import { cn } from "@/utils/helpers";

type NavLinkProps = ComponentProps<"span"> & {
  href?: `#${string}`;
};

const SCROLL_CENTER_DIVISOR = 2;

const NavLink = ({ className, href, onClick, ...props }: NavLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || isNil(href)) {
      return;
    }

    const target = document.querySelector(href);

    if (isNil(target)) {
      return;
    }

    const targetRect = target.getBoundingClientRect();
    const top = window.scrollY + targetRect.top - (window.innerHeight - targetRect.height) / SCROLL_CENTER_DIVISOR;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <span
      data-slot="nav-link"
      {...props}
      className={cn(
        "inline-flex cursor-pointer items-center rounded-4xl text-base leading-6 font-normal text-gray-250 transition-colors duration-150 ease-in-out select-none hover:text-gray-400",
        className,
      )}
      onClick={handleClick}
    />
  );
};

export { NavLink };
