import type { TitleGroupProps } from "./types";

import { cn } from "@/utils/helpers";

import { RevealTitle } from "@/components/reveal";
import { Container } from "@/components/ui/container";

const TITLE_DELAY = 0.08;

const TitleGroup = ({ className, subtitle, title, titleAs, variant = "h1", ...props }: TitleGroupProps) => {
  return (
    <Container variant="4xl" className={cn("flex flex-col gap-3", className)} {...props}>
      <RevealTitle variant="code">{subtitle}</RevealTitle>
      <RevealTitle as={titleAs} variant={variant} delay={TITLE_DELAY}>
        {title}
      </RevealTitle>
    </Container>
  );
};

export default TitleGroup;
