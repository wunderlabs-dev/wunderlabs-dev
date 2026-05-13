import type { TitleGroupProps } from "./types";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";

const TitleGroup = ({ className, subtitle, title, variant = "h1", ...props }: TitleGroupProps) => {
  return (
    <Container variant="4xl" className={cn("flex flex-col gap-3", className)} {...props}>
      <Typography variant="code">{subtitle}</Typography>
      <Typography variant={variant}>{title}</Typography>
    </Container>
  );
};

export default TitleGroup;
