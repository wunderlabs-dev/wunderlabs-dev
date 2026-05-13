import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/utils/helpers";

import { Typography } from "@/components/ui/typography";

type HomePageLabItemProps = ComponentProps<"article"> & {
  description: string;
  startAdornment?: ReactNode;
  title: string;
  withRightBorder?: boolean;
};

const HomePageLabItem = ({
  className,
  description,
  startAdornment,
  title,
  withRightBorder,
  ...props
}: HomePageLabItemProps) => {
  return (
    <article className={cn("flex min-w-0 flex-col gap-3 pt-12", className)} {...props}>
      <div className="flex flex-col gap-3 px-12">
        {startAdornment}
        <Typography variant="body2" as="h3">
          {title}
        </Typography>
      </div>

      <div className={cn("border-l border-gray-100/30 px-12 pb-12", withRightBorder ? "border-r" : undefined)}>
        <Typography variant="body" className="text-gray-250">
          {description}
        </Typography>
      </div>
    </article>
  );
};

export { HomePageLabItem };
