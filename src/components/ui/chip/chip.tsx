import type { ChipProps } from "./types";

import { cn } from "@/utils/helpers";

const Chip = ({ className, ...props }: ChipProps) => {
  return (
    <span
      data-slot="chip"
      className={cn("inline-flex items-center px-2 py-0.5 font-sans text-sm leading-5 text-gray-50", className)}
      {...props}
    />
  );
};

export default Chip;
