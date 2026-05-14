import type { BadgeProps } from "./types";

import { cn } from "@/utils/helpers";

const Badge = ({ className, ...props }: BadgeProps) => {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center px-2 py-0.5 font-sans text-sm leading-5 text-gray-50 bg-gray-300 rounded-4xl",
        className,
      )}
      {...props}
    />
  );
};

export default Badge;
