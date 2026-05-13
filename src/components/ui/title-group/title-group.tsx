import type { TitleGroupProps } from "./types";

import { cn } from "@/utils/helpers";

import { Typography } from "@/components/ui/typography";

const TitleGroup = ({ className, subtitle, title, ...props }: TitleGroupProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <Typography variant="code">{subtitle}</Typography>
      <Typography variant="title" as="h2">
        {title}
      </Typography>
    </div>
  );
};

export default TitleGroup;
