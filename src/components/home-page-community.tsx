import NextLink from "next/link";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { renderers } from "@/utils/renderers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TitleGroup } from "@/components/ui/title-group";
import { Typography } from "@/components/ui/typography";
import { SvgIconGlobe } from "@/components/ui/svg-icon";

type HomePageCommunityProps = ComponentProps<"section">;

const HomePageCommunity = ({ className, ...props }: HomePageCommunityProps) => {
  const t = useTranslations();

  return (
    <Section id="community" pt="none" className={className} {...props}>
      {/* <div className="pointer-events-none absolute top-0 left-1/2 z-0 aspect-square w-8xl -translate-x-1/2 rounded-full border border-gray-100/50" /> */}

      <Container variant="4xl" className="relative z-10 flex flex-col gap-8 md:gap-16">
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
          <NextLink href="https://agentic.tm" target="_blank" rel="noreferrer">
            <Button type="button" startAdornment={<SvgIconGlobe className="size-5" />}>
              {t("community.join")}
            </Button>
          </NextLink>
          <NextLink href="https://luma.com/agentictm" target="_blank" rel="noreferrer">
            <Button type="button" variant="outlined">
              {t("community.events")}
            </Button>
          </NextLink>
        </div>
      </Container>
    </Section>
  );
};

export { HomePageCommunity };
