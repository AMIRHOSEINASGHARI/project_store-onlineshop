import BestSeller from "./ui/BestSeller";
import CategorySection from "./ui/CategorySection";
import HeroSection from "./ui/HeroSection";
import NewArrival from "./ui/NewArrival";
import OurPoints from "./ui/OurPoints";

const HomePage = () => {
  return (
    <main className="space-y-[100px]">
      <HeroSection />
      <OurPoints />
      <BestSeller />
      <CategorySection />
      <NewArrival />
    </main>
  );
};

export default HomePage;
