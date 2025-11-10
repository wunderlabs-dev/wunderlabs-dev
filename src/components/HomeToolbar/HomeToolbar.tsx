import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

import { MAILTO_ADDRESS } from "@/utils/const";
import { useWindowState } from "@/contexts/WindowProvider";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import {
  SvgIconWunderlabs,
  SvgIconChat,
  SvgIconFolderXs,
} from "@/components/SvgIcon";

import { HomeToolbarClock } from "@/components/HomeToolbar";

const HomeToolbar = () => {
  const t = useTranslations();
  const md = useMediaQuery("(max-width: 768px)");

  const { state, setState } = useWindowState();

  return (
    <footer className="bg-beige-200 grid grid-cols-12 items-center border border-t-blue-900 px-4 py-1 md:py-0">
      <div className="col-span-6 md:col-span-3">
        <SvgIconWunderlabs className="w-8" />
      </div>

      {md ? null : (
        <div className="col-span-6 flex justify-center">
          <Button
            variant={state === "OPEN" ? "default" : "contained"}
            className="border-y-0 border-r-0"
            startAdornment={<SvgIconFolderXs size="small" />}
            onClick={() => setState("OPEN")}
          >
            <Typography variant="body2" uppercase>
              {t("desktop.folder.wunder")}
            </Typography>
          </Button>
          <Link href={MAILTO_ADDRESS}>
            <Button
              endAdornment={<SvgIconChat size="small" />}
              className="border-y-0"
            >
              <Typography variant="body2" uppercase>
                {t("toolbar.letsTalk")}
              </Typography>
            </Button>
          </Link>
        </div>
      )}

      <div className="col-span-6 flex justify-end md:col-span-3">
        <HomeToolbarClock />
      </div>
    </footer>
  );
};

export default HomeToolbar;
