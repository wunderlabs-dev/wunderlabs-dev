import type { TitleGroupProps } from "./types";

import { cn } from "@/utils/helpers";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const TitleGroup = ({ className, subtitle, title, titleAs, variant = "h1", ...props }: TitleGroupProps) => {
  return (
    <Container variant="4xl" className={cn("flex flex-col gap-3", className)} {...props}>
      <Typography variant="code">{subtitle}</Typography>
      <Typography as={titleAs} variant={variant}>
        {title}
      </Typography>
    </Container>
  );
};

export default TitleGroup;
