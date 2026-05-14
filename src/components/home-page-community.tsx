import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SvgIconGlobe } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";
import { Typography } from "@/components/ui/typography";

type HomePageCommunityProps = ComponentProps<"section">;

const HomePageCommunity = ({ className, ...props }: HomePageCommunityProps) => {
  const t = useTranslations();

  return (
    <Section id="community" pt="none" className={cn("relative px-12", className)} {...props}>
      <Container variant="4xl" className="relative z-10 flex flex-col gap-16">
        <TitleGroup subtitle={t("community.kicker")} title={t.rich("community.title", renderers)} />

        <div className="flex max-w-lg flex-col gap-2">
          <Typography variant="body">{t.rich("community.through", renderers)}</Typography>

          <div className="flex items-center gap-4">
            <Typography variant="h3" className="shrink-0">
              {t("community.stat.value")}
            </Typography>
            <Typography variant="body" className="min-w-px flex-1">
              {t("community.stat.description")}
            </Typography>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" startAdornment={<SvgIconGlobe className="size-5" />}>
            {t("community.join")}
          </Button>
          <Button type="button" variant="outlined">
            {t("community.events")}
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export { HomePageCommunity };
