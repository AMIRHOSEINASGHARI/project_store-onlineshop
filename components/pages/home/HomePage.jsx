import BestSeller from "./ui/BestSeller";
import HeroSection from "./ui/HeroSection";
import OurPoints from "./ui/OurPoints";

const HomePage = () => {
  return (
    <main className="space-y-[100px]">
      <HeroSection />
      <OurPoints />
      <BestSeller />
    </main>
  );
};

export default HomePage;
