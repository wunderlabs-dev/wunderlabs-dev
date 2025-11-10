/*
 * ABOUTME: Desktop window list component
 * ABOUTME: Container for list items in a desktop window
 */

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Typography } from "@/components/Typography";
import { SvgIconFlash, SvgIconLamp, SvgIconTools } from "@/components/SvgIcon";

import { HomeDesktopWindowListItem } from "@/components/HomeDesktop";

const HomeDesktopWindowList = () => {
  const t = useTranslations();

  const renderers = {
    animation: (chunks: ReactNode) => <span>{chunks}</span>,
  };

  return (
    <div className="flex flex-col gap-6">
      <HomeDesktopWindowListItem startAdornment={<SvgIconLamp size="small" />}>
        <Typography variant="body2" uppercase>
          {t("desktop.window.everyoneShouldShipIdeas")}
        </Typography>
        <Typography variant="body2" color="muted">
          {t("desktop.window.notWaitForSprints")}
        </Typography>
      </HomeDesktopWindowListItem>

      <HomeDesktopWindowListItem startAdornment={<SvgIconFlash size="small" />}>
        <Typography variant="body2" uppercase>
          {t.rich("desktop.window.twoWeeksAnIdea", renderers)}
        </Typography>
      </HomeDesktopWindowListItem>

      <HomeDesktopWindowListItem startAdornment={<SvgIconTools size="small" />}>
        <Typography variant="body2" uppercase>
          {t("desktop.window.weAreBuildingTools")}
        </Typography>
        <Typography variant="body2" color="muted">
          {t("desktop.window.thatLetYouPrototype")}
        </Typography>
      </HomeDesktopWindowListItem>
    </div>
  );
};

export default HomeDesktopWindowList;
