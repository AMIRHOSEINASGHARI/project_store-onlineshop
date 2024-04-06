import BestSeller from "./ui/BestSeller";
import CategorySection from "./ui/CategorySection";
import HeroSection from "./ui/HeroSection";
import OurPoints from "./ui/OurPoints";

const HomePage = () => {
  return (
    <main className="space-y-[100px]">
      <HeroSection />
      <OurPoints />
      <BestSeller />
      <CategorySection />
    </main>
  );
};

export default HomePage;
