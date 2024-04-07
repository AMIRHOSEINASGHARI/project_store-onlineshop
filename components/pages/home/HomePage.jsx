import BestSeller from "./ui/BestSeller";
import CategorySection from "./ui/CategorySection";
import HeroSection from "./ui/HeroSection";
import LatestBlogs from "./ui/LatestBlogs";
import NewArrival from "./ui/NewArrival";
import OurPoints from "./ui/OurPoints";
import ProductBanner from "./ui/ProductBanner";
import SpecialOffer from "./ui/SpecialOffer";

const HomePage = () => {
  return (
    <main className="space-y-[100px]">
      <HeroSection />
      <OurPoints />
      <BestSeller />
      <CategorySection />
      <NewArrival />
      <ProductBanner />
      <LatestBlogs />
      <SpecialOffer />
    </main>
  );
};

export default HomePage;
