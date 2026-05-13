import { HomePageContact } from "@/components/home-page-contact";
import { HomePageLab } from "@/components/home-page-lab";
import { HomePageProjects } from "@/components/home-page-projects";

const Home = () => {
  return (
    <main>
      <HomePageLab />
      <HomePageProjects />
      <HomePageContact />
    </main>
  );
};

export default Home;
