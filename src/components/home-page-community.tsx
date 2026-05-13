import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/utils/helpers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SvgIconGlobe } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageCommunityProps = ComponentProps<"section">;

const renderers = {
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

const HomePageCommunity = ({ className, ...props }: HomePageCommunityProps) => {
  const t = useTranslations();

  return (
    <section id="community" className={cn("px-12", className)} {...props}>
      <Container variant="4xl" className="flex flex-col gap-16">
        <TitleGroup subtitle={t("community.kicker")} title={t.rich("community.title", renderers)} />

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
