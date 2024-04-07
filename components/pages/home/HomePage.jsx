import BestSeller from "./ui/BestSeller";
import CategorySection from "./ui/CategorySection";
import HeroSection from "./ui/HeroSection";
import NewArrival from "./ui/NewArrival";
import OurPoints from "./ui/OurPoints";
import ProductBanner from "./ui/ProductBanner";

const HomePage = () => {
  return (
    <main className="space-y-[100px] pb-52">
      <HeroSection />
      <OurPoints />
      <BestSeller />
      <CategorySection />
      <NewArrival />
      <ProductBanner />
    </main>
  );
};

export default HomePage;
