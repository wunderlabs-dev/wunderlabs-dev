import NextLink from "next/link";

import type { LinkProps } from "./types";

import { SvgIconExternalLink } from "@/components/ui/svg-icon";
import { cn } from "@/utils/helpers";

const Link = ({ children, className, endAdornment, ...props }: LinkProps) => {
  const adornment =
    endAdornment === undefined ? <SvgIconExternalLink className="size-5 text-gray-400" /> : endAdornment;

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
      {adornment}
    </NextLink>
  );
};

export default Link;
