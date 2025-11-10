/*
 * ABOUTME: Desktop window component
 * ABOUTME: Represents a window on the desktop
 */
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { SvgIconX, SvgIconExpand, SvgIconMinimize, SvgIconChat } from "@/components/SvgIcon";

import { HomeDesktopWindowList, HomeDesktopWindowDivider, HomeDesktopWindowMarquee } from "@/components/HomeDesktop";

const HomeDesktopWindow = () => {
  const t = useTranslations();

  const renderers = {
    color: (chunks: ReactNode) => <span className="text-cyan-500">{chunks}</span>,
  };

  return (
    <div className="absolute left-64 top-16 bg-beige-100 outline outline-blue-400">
      <div className="flex items-center justify-between px-1 py-1 bg-beige-200 outline outline-blue-400 cursor-grab active:cursor-grabbing">
        <Typography variant="caption" uppercase>
          {t("desktop.window.title")}
        </Typography>

        <div className="flex items-center gap-1">
          <Button variant="transparent">
            <SvgIconExpand size="small" />
          </Button>
          <Button variant="transparent">
            <SvgIconMinimize size="small" />
          </Button>
          <Button variant="transparent">
            <SvgIconX size="small" />
          </Button>
        </div>
      </div>

      <div className="w-xl px-8 py-24 flex flex-col gap-24">
        <Typography variant="title">{t.rich("desktop.window.description", renderers)}</Typography>

        <div className="flex flex-col items-center gap-12 max-w-full">
          <HomeDesktopWindowMarquee />

          <div className="max-w-sm mx-auto flex flex-col gap-24">
            <HomeDesktopWindowList />
            <HomeDesktopWindowDivider />
          </div>

          <Button endAdornment={<SvgIconChat size="small" />}>
            <Typography variant="body2" uppercase>
              {t("toolbar.letsTalk")}
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktopWindow;
