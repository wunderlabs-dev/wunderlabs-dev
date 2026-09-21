import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";

import { HomePageLabItem } from "@/components/home-page-lab-item";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SvgIconAgenticDevEnvs, SvgIconHarnesses, SvgIconHumanLoop } from "@/components/ui/svg-icon";

type HomePageLabProps = ComponentProps<"section">;

const CARD_STAGGER = 0.05;

const sections = [
  {
    title: "lab.pillars.eval.title",
    description: "lab.pillars.eval.description",
    Icon: SvgIconHarnesses,
  },
  {
    title: "lab.pillars.execution.title",
    description: "lab.pillars.execution.description",
    Icon: SvgIconAgenticDevEnvs,
  },
  {
    title: "lab.pillars.telemetry.title",
    description: "lab.pillars.telemetry.description",
    Icon: SvgIconHumanLoop,
  },
] as const;

const HomePageLab = ({ className, ...props }: HomePageLabProps) => {
  const t = useTranslations();

  return (
    <Section id="about" pt="none" className={cn("flex flex-col gap-24", className)} {...props}>
      <Container variant="7xl" className="border-gray-100/30 lg:border-b">
        <div className="grid grid-cols-1 gap-8 pt-12 lg:grid-cols-3 lg:gap-0">
          {sections.map(({ description, Icon, title }, index) => (
            <Reveal key={title} delay={index * CARD_STAGGER} className="h-full">
              <HomePageLabItem
                className="h-full"
                title={t(title)}
                description={t(description)}
                withRightBorder={index === sections.length - 1}
                startAdornment={<Icon size="lg" className="shrink-0 text-gray-400" />}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { HomePageLab };
