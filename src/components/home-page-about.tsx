import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";

import { TitleGroup } from "@/components/ui/title-group";
import { cn } from "@/utils/helpers";

type HomePageAboutProps = ComponentProps<"section">;

const renderers = {
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

const HomePageAbout = ({ className, ...props }: HomePageAboutProps) => {
  const t = useTranslations();

  return (
    <section id="about" className={cn("px-12", className)} {...props}>
      <TitleGroup subtitle={t("about.kicker")} title={t.rich("about.title", renderers)} variant="display" />
    </section>
  );
};

export { HomePageAbout };
