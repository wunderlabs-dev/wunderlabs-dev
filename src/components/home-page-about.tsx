import type { ComponentProps } from "react";
import { useTranslations } from "next-intl";

import { renderers } from "@/utils/renderers";

import { Section } from "@/components/ui/section";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageAboutProps = ComponentProps<"section">;

const HomePageAbout = ({ className, ...props }: HomePageAboutProps) => {
  const t = useTranslations();

  return (
    <Section id="about" className={className} {...props}>
      <TitleGroup subtitle={t("about.kicker")} title={t.rich("about.title", renderers)} variant="display" />
    </Section>
  );
};

export { HomePageAbout };
