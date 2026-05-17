import NextLink from "next/link";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SvgIconContact } from "@/components/ui/svg-icon";
import { Typography } from "@/components/ui/typography";

import { HomePageContactEmail } from "@/components/home-page-contact-email";

type HomePageContactProps = ComponentProps<"section">;

const HomePageContact = ({ className, ...props }: HomePageContactProps) => {
  const t = useTranslations();

  return (
    <Section id="contact" className={cn("scroll-mt-20", className)} {...props} pb="compact">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 aspect-square w-5xl -translate-x-1/2 rounded-full border border-gray-100/50" />

      <Container variant="2xl" className="selection:bg-white selection:text-gray-400">
        <div className="flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-gray-400 p-8 text-white md:gap-16">
          <div className="flex flex-col gap-3">
            <Typography variant="code">{t("contact.kicker")}</Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="h1">{t.rich("contact.title", renderers)}</Typography>
              <Typography variant="body">{t("contact.description")}</Typography>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
            <NextLink href="mailto:office@wunderlabs.dev" target="_blank" rel="noreferrer">
              <Button type="button" variant="secondary" startAdornment={<SvgIconContact className="size-5" />}>
                {t("contact.cta")}
              </Button>
            </NextLink>

            <div className="flex flex-col gap-1 md:items-end">
              <HomePageContactEmail />
              <Typography variant="caption">{t("contact.location")}</Typography>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { HomePageContact };
