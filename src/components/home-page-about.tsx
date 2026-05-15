"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { about } from "@/utils/animations";
import { renderers } from "@/utils/renderers";

import { Section } from "@/components/ui/section";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageAboutProps = ComponentProps<"section">;

const HomePageAbout = ({ className, ...props }: HomePageAboutProps) => {
  const t = useTranslations();

  return (
    <Section id="about" className={className} {...props}>
      <motion.div
        initial={about.initial}
        animate={about.animate}
        transition={about.transition}
        className="will-change-transform will-change-opacity"
      >
        <TitleGroup subtitle={t("about.kicker")} title={t.rich("about.title", renderers)} variant="display" />
      </motion.div>
    </Section>
  );
};

export { HomePageAbout };
