import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SvgIconArrowLink, SvgIconStatus } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";

type HomePageProjectsProps = ComponentProps<"section">;

const renderers = {
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

const HomePageProjects = ({ className, ...props }: HomePageProjectsProps) => {
  const t = useTranslations();

  return (
    <section id="projects" className={cn("flex flex-col gap-24 px-12", className)} {...props}>
      <Container variant="4xl">
        <TitleGroup subtitle={t("projects.kicker")} title={t.rich("projects.title", renderers)} />
      </Container>

      <Container variant="5xl">
        <Card>
          <div className="flex items-center gap-4">
            <SvgIconStatus size="xs" />
            <Typography variant="code">{t("projects.cards.claudebin.status")}</Typography>
          </div>

          <Typography variant="h2">{t("projects.cards.claudebin.title")}</Typography>
          <Typography variant="body" className="text-gray-250">
            {t("projects.cards.claudebin.description")}
          </Typography>
          <Typography variant="code" className="text-gray-250">
            {t("projects.cards.claudebin.tags")}
          </Typography>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="button" startAdornment={<SvgIconArrowLink className="size-5" />}>
              {t("projects.cards.claudebin.launchLabel")}
            </Button>
            <Button type="button" variant="outlined">
              {t("projects.cards.claudebin.githubLabel")}
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export { HomePageProjects };
