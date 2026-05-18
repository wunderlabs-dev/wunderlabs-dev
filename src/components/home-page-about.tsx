"use client";

import { useTranslations } from "next-intl";
import { motion, useAnimationControls } from "motion/react";
import { useEffect, type ComponentProps } from "react";

import { about } from "@/utils/animations";
import { renderers } from "@/utils/renderers";

import { Section } from "@/components/ui/section";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageAboutProps = ComponentProps<"section">;

const HomePageAbout = ({ className, ...props }: HomePageAboutProps) => {
  const controls = useAnimationControls();
  const t = useTranslations();

  useEffect(() => {
    const replayAnimation = () => {
      if (window.location.pathname !== "/") {
        return;
      }

      controls.set(about.initial);
      requestAnimationFrame(() => {
        void controls.start({
          ...about.animate,
          transition: about.transition,
        });
      });
    };

    replayAnimation();

    window.addEventListener("pageshow", replayAnimation);
    window.addEventListener("popstate", replayAnimation);

    return () => {
      window.removeEventListener("pageshow", replayAnimation);
      window.removeEventListener("popstate", replayAnimation);
    };
  }, [controls]);

  return (
    <Section id="about" className={className} {...props}>
      <motion.div initial={about.initial} animate={controls} className="will-change-transform will-change-opacity">
        <TitleGroup subtitle={t("about.kicker")} title={t.rich("about.title", renderers)} variant="display" />
      </motion.div>
    </Section>
  );
};

export { HomePageAbout };
