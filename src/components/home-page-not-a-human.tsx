"use client";

import NextLink from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { about } from "@/utils/animations";

import { Button } from "@/components/ui/button";
import { SvgIconRobot } from "@/components/ui/svg-icon";

const NOT_A_HUMAN_DELAY = about.transition.delay + 0.24;

const HomePageNotAHuman = () => {
  const t = useTranslations();

  return (
    <motion.div
      initial={about.initial}
      animate={about.animate}
      transition={{
        ...about.transition,
        delay: NOT_A_HUMAN_DELAY,
      }}
      className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 will-change-transform will-change-opacity"
    >
      <NextLink href="/agents">
        <Button variant="transparent" size="sm" startAdornment={<SvgIconRobot size="sm" className="text-current" />}>
          {t("home.notAHuman")}
        </Button>
      </NextLink>
    </motion.div>
  );
};

export { HomePageNotAHuman };
