import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { HomePageLabItem } from "@/components/home-page-lab-item";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SvgIconBull, SvgIconFile, SvgIconPlay } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageLabProps = ComponentProps<"section">;

const sections = [
  {
    title: "lab.pillars.eval.title",
    description: "lab.pillars.eval.description",
    Icon: SvgIconFile,
  },
  {
    title: "lab.pillars.execution.title",
    description: "lab.pillars.execution.description",
    Icon: SvgIconPlay,
  },
  {
    title: "lab.pillars.telemetry.title",
    description: "lab.pillars.telemetry.description",
    Icon: SvgIconBull,
  },
] as const;

const HomePageLab = ({ className, ...props }: HomePageLabProps) => {
  const t = useTranslations();

  return (
    <Section id="lab" className={cn("flex flex-col gap-24 px-12", className)} {...props}>
      <TitleGroup subtitle={t("lab.kicker")} title={t.rich("lab.title", renderers)} />

      <Container variant="7xl" className="border-b border-gray-100/30">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {sections.map(({ description, Icon, title }, index) => (
            <HomePageLabItem
              key={title}
              title={t(title)}
              description={t(description)}
              withRightBorder={index === sections.length - 1}
              startAdornment={<Icon size="lg" className="shrink-0 text-gray-400" />}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { HomePageLab };
