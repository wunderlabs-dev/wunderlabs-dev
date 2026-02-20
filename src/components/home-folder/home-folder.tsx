/*
 * ABOUTME: Desktop folder component
 * ABOUTME: Represents a folder on the desktop
 */

import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { useTranslations } from "next-intl";

import { useWindowState } from "@/contexts/window-provider";

import { Typography } from "@/components/typography";
import { SvgIconFolder, SvgIconFolderOpen } from "@/components/svg-icon";

const HomeFolder = () => {
  const t = useTranslations("desktop.folder");

  const { state, setState } = useWindowState();

  const ref = useRef<HTMLDivElement>(null as never);
  const hover = useHover<HTMLDivElement>(ref);

  return (
    <div
      ref={ref}
      className="flex cursor-pointer flex-col items-center justify-center gap-1 px-2 py-1"
      onClick={() => setState("OPEN")}
    >
      {hover || state === "OPEN" ? <SvgIconFolderOpen size="large" /> : <SvgIconFolder size="large" />}

      <Typography variant="body2" uppercase>
        {t("wunder")}
      </Typography>
    </div>
  );
};

export default HomeFolder;
