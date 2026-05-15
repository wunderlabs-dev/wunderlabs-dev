import Image from "next/image";

import { HomePageAbout } from "@/components/home-page-about";
import { HomePageContact } from "@/components/home-page-contact";
import { HomePageCommunity } from "@/components/home-page-community";
import { HomePageLab } from "@/components/home-page-lab";
import { HomePageProjects } from "@/components/home-page-projects";

import copy from "@/copy/en.json";

import src1 from "../../public/app-1@2x.webp";
import src2 from "../../public/app-2@2x.webp";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomePageAbout />

      <div className="flex w-full justify-center overflow-hidden">
        <Image
          src={src2}
          alt={copy.site.label}
          sizes="(min-width: 1080px) 1080px, 100vw"
          className="pointer-events-none w-[1858px] max-w-none shrink-0 select-none"
        />
      </div>

      <HomePageLab />
      <HomePageProjects />
      <HomePageCommunity />
      <HomePageContact />

      <div className="flex w-full justify-center overflow-hidden">
        <Image
          src={src1}
          alt={copy.site.label}
          sizes="(min-width: 1080px) 1080px, 100vw"
          className="pointer-events-none relative w-[1726px] max-w-none shrink-0 select-none"
        />
      </div>
    </main>
  );
};

export default Home;
