import NextLink from "next/link";

import type { LinkProps } from "./types";

import { cn } from "@/utils/helpers";

import { SvgIconArrowLink } from "@/components/ui/svg-icon";

const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NextLink
      data-slot="link"
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-4xl p-0 font-sans text-base leading-6 font-semibold whitespace-nowrap text-gray-400",
        className,
      )}
      {...props}
    >
      {children}
      <SvgIconArrowLink size="md" className="text-gray-400" />
    </NextLink>
  );
};

export default Link;
