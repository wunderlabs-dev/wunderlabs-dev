import src1 from "../../../public/app-1@2x.webp";
import src2 from "../../../public/app-2@2x.webp";

import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { HomePageAbout } from "@/components/home-page-about";
import { HomePageAppImage } from "@/components/home-page-app-image";
import { HomePageContact } from "@/components/home-page-contact";
import { HomePageCommunity } from "@/components/home-page-community";
import { HomePageLab } from "@/components/home-page-lab";
import { HomePageProjects } from "@/components/home-page-projects";
import { Button } from "@/components/ui/button";
import { SvgIconRobot } from "@/components/ui/svg-icon";

const Home = () => {
  const t = useTranslations();

  return (
    <main className="overflow-hidden">
      <HomePageAbout />

      <div className="relative pt-8 sm:pt-0">
        <HomePageAppImage src={src1} />

        <NextLink href="/agents" className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
          <Button variant="transparent" size="sm" startAdornment={<SvgIconRobot size="sm" className="text-gray-400" />}>
            {t("home.notAHuman")}
          </Button>
        </NextLink>
      </div>

      <HomePageLab />
      <HomePageProjects />
      <HomePageCommunity />
      <HomePageContact />

      <HomePageAppImage src={src2} />
    </main>
  );
};

export default Home;
