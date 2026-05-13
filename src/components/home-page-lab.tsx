import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";

import { HomePageLabItem } from "@/components/home-page-lab-item";
import { Container } from "@/components/ui/container";
import { SvgIconBull, SvgIconFile, SvgIconPlay } from "@/components/ui/svg-icon";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";

type HomePageLabProps = ComponentProps<"section">;

const renderers = {
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

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
    <section id="lab" className={cn("flex flex-col gap-24 px-12", className)} {...props}>
      <Container variant="4xl">
        <div className="flex flex-col gap-3">
          <Typography variant="code">{t("lab.kicker")}</Typography>
          <Typography variant="title" as="h2">
            {t.rich("lab.title", renderers)}
          </Typography>
        </div>
      </Container>

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
    </section>
  );
};

export { HomePageLab };
