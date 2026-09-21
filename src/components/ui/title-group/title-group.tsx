import type { TitleGroupProps } from "./types";

import { RevealGroup, RevealTitle } from "@/components/reveal";
import { Container } from "@/components/ui/container";

const TITLE_DELAY = 0.06;

const TitleGroup = ({ className, subtitle, title, titleAs, variant = "h1", ...props }: TitleGroupProps) => {
  return (
    <Container variant="4xl" className={className} {...props}>
      <RevealGroup className="flex flex-col gap-3">
        <RevealTitle variant="code" withBlur={false}>
          {subtitle}
        </RevealTitle>
        <RevealTitle as={titleAs} variant={variant} delay={TITLE_DELAY}>
          {title}
        </RevealTitle>
      </RevealGroup>
    </Container>
  );
};

export default TitleGroup;
