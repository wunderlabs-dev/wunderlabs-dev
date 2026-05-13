import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { TitleGroup } from "@/components/ui/title-group";

type HomePageAboutProps = ComponentProps<"section">;
const HomePageAbout = ({ className, ...props }: HomePageAboutProps) => {
  const t = useTranslations();

  return (
    <section id="about" className={cn("px-12", className)} {...props}>
      <TitleGroup subtitle={t("about.kicker")} title={t.rich("about.title", renderers)} variant="display" />
    </section>
  );
};

export { HomePageAbout };
