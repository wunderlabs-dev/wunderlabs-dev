import type { ReactNode } from "react";

import { HomePageAppBar } from "@/components/home-page-app-bar";
import { HomePageFooter } from "@/components/home-page-footer";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HomePageAppBar />
      {children}
      <HomePageFooter />
    </>
  );
};

export default SiteLayout;
