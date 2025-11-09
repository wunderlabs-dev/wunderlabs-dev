import { HTMLAttributes } from "react";

import { cn } from "@/utils/helpers";

import type { SvgIconSize, SvgIconSizeMapping } from "@/components/SvgIcon";

type SvgIconChatProps = {
  size?: SvgIconSize;
  className?: HTMLAttributes<SVGSVGElement>["className"];
} & HTMLAttributes<SVGSVGElement>;

const svgIconSizeClassNames: SvgIconSizeMapping = {
  inherit: "size-auto",
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
};

const SvgIconChat = ({
  className,
  size = "inherit",
  ...props
}: SvgIconChatProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={cn(className, svgIconSizeClassNames[size])}
      {...props}
    >
      <path d="M12 15H10V13H12V15ZM10 13H2V11H10V13ZM14 13H12V11H14V13ZM2 11H0V3H2V11ZM16 11H14V3H16V11ZM6 8H4V6H6V8ZM12 8H8V6H12V8ZM14 3H2V1H14V3Z" />
    </svg>
  );
};

export default SvgIconChat;
