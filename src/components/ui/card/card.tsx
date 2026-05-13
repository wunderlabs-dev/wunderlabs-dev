import type { CardProps } from "./types";

import { cn } from "@/utils/helpers";

const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      data-slot="card"
      className={cn("flex flex-col gap-8 rounded-3xl border border-gray-100/50 p-8", className)}
      {...props}
    />
  );
};

export default Card;
