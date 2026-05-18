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
    <article className={cn("flex min-w-0 flex-col gap-4", className)} {...props}>
      <div className="flex flex-col gap-4 px-8 md:px-12">
        {startAdornment}
        <Typography variant="body2" as="h3">
          {title}
        </Typography>
      </div>

      <div
        className={cn(
          "h-full border-x border-b border-gray-100/30 px-8 md:px-12 pb-8 md:pb-12 lg:border-r-0 lg:border-b-0 lg:border-l",
          withRightBorder ? "lg:border-r" : undefined,
        )}
      >
        <Typography variant="body" className="text-gray-250">
          {description}
        </Typography>
      </div>
    </article>
  );
};

export { HomePageLabItem };
