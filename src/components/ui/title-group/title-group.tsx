import type { TitleGroupProps } from "./types";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";

const TitleGroup = ({ className, subtitle, title, ...props }: TitleGroupProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <Typography variant="code">{subtitle}</Typography>
      <Typography variant="h1">{title}</Typography>
    </div>
  );
};

export default TitleGroup;
