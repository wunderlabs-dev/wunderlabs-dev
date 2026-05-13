import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SvgIconGlobe } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";
import { communityRenderers } from "@/utils/renderers";

type HomePageCommunityProps = ComponentProps<"section">;

const HomePageCommunity = ({ className, ...props }: HomePageCommunityProps) => {
  const t = useTranslations();

  return (
    <section id="community" className={cn("px-12", className)} {...props}>
      <TitleGroup subtitle={t("community.kicker")} title={t.rich("community.title", communityRenderers)} />

      <Container variant="4xl" className="flex flex-col gap-16">
        <Typography variant="body">{t.rich("community.through", communityRenderers)}</Typography>

        <div className="flex items-center gap-4">
          <Typography variant="h3" className="shrink-0">
            {t("community.stat.value")}
          </Typography>
          <Typography variant="body" className="min-w-px flex-1">
            {t("community.stat.description")}
          </Typography>
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
    </section>
  );
};

export { HomePageCommunity };
