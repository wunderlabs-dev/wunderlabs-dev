import type { BadgeProps } from "./types";

import { cn } from "@/utils/helpers";

const Badge = ({ className, ...props }: BadgeProps) => {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-4xl bg-gray-300 px-2 py-0.5 font-sans text-sm leading-5 text-gray-50",
        className,
      )}
      {...props}
    />
  );
};

export default Badge;
