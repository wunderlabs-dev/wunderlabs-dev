import { HomePageAbout } from "@/components/home-page-about";
import { HomePageContact } from "@/components/home-page-contact";
import { HomePageCommunity } from "@/components/home-page-community";
import { HomePageLab } from "@/components/home-page-lab";
import { HomePageProjects } from "@/components/home-page-projects";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomePageAbout />
      <HomePageLab />
      <HomePageProjects />
      <HomePageCommunity />
      <HomePageContact />
    </main>
  );
};

export default Home;
