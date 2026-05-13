import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SvgIconContact } from "@/components/ui/svg-icon";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/helpers";

type HomePageContactProps = ComponentProps<"section">;

const renderers = {
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

const HomePageContact = ({ className, ...props }: HomePageContactProps) => {
  const t = useTranslations();

  return (
    <section id="contact" className={cn("px-12", className)} {...props}>
      <Container variant="2xl">
        <div className="flex flex-col justify-between gap-16 overflow-hidden rounded-3xl bg-gray-400 p-8 text-white">
          <div className="flex flex-col gap-3">
            <Typography variant="code">{t("contact.kicker")}</Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="title" as="h2">
                {t.rich("contact.title", renderers)}
              </Typography>
              <Typography variant="body">{t("contact.description")}</Typography>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button type="button" variant="secondary" startAdornment={<SvgIconContact className="size-5" />}>
              {t("contact.cta")}
            </Button>

            <div className="flex flex-col items-end gap-2">
              <Typography variant="code">{t("contact.email")}</Typography>
              <Typography variant="caption">{t("contact.location")}</Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { HomePageContact };
