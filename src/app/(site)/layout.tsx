import type { ReactNode } from "react";

import { HomePageAppBar } from "@/components/home-page-app-bar";
import { HomePageFooter } from "@/components/home-page-footer";
import { HomePageLogoConsole } from "@/components/home-page-logo-console";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HomePageAppBar />
      {children}
      <HomePageFooter />
      <HomePageLogoConsole />
    </>
  );
};

export default SiteLayout;
