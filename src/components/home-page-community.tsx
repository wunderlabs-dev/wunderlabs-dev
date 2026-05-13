import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { SvgIconGlobe } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";

type HomePageCommunityProps = ComponentProps<"section">;

const renderers = {
  link: (chunks: ReactNode) => <Link href="https://agentic.tm">{chunks}</Link>,
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

const HomePageCommunity = ({ className, ...props }: HomePageCommunityProps) => {
  const t = useTranslations();

  return (
    <section id="community" className={cn("px-12", className)} {...props}>
      <TitleGroup subtitle={t("community.kicker")} title={t.rich("community.title", renderers)} />

      <Container variant="4xl" className="flex flex-col gap-16">
        <Typography variant="body">{t.rich("community.through", renderers)}</Typography>

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
