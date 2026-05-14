import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SvgIconContact } from "@/components/ui/svg-icon";
import { TitleGroup } from "@/components/ui/title-group";
import { Typography } from "@/components/ui/typography";

type HomePageContactProps = ComponentProps<"section">;

const HomePageContact = ({ className, ...props }: HomePageContactProps) => {
  const t = useTranslations();

  return (
    <Section id="contact" className={cn("scroll-mt-20", className)} {...props}>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 aspect-square w-5xl -translate-x-1/2 rounded-full border border-gray-100/50" />

      <Container variant="2xl">
        <div className="flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-gray-400 p-8 text-white md:gap-16">
          <div className="flex flex-col gap-4">
            <TitleGroup subtitle={t("contact.kicker")} title={t.rich("contact.title", renderers)} />
            <Typography variant="body">{t("contact.description")}</Typography>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
            <a href="mailto:contact@wunderlabs.dev">
              <Button type="button" variant="secondary" startAdornment={<SvgIconContact className="size-5" />}>
                {t("contact.cta")}
              </Button>
            </a>

            <div className="flex flex-col gap-2 md:items-end">
              <Typography variant="code">{t("contact.email")}</Typography>
              <Typography variant="caption">{t("contact.location")}</Typography>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { HomePageContact };
