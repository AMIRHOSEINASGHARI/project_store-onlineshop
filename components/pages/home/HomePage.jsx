// react
import { Suspense } from "react";
// components
import BestSeller from "./ui/BestSeller";
import CategorySection from "./ui/CategorySection";
import HeroSection from "./ui/HeroSection";
import LatestBlogs from "./ui/LatestBlogs";
import NewArrival from "./ui/NewArrival";
import OurPoints from "./ui/OurPoints";
import ProductBanner from "./ui/ProductBanner";
import SpecialOffer from "./ui/SpecialOffer";
import NewArrivalSkeleton from "@/components/shared/skeleton/pages/home/NewArrivalSkeleton";
import LatestBlogsSkeleton from "@/components/shared/skeleton/pages/home/LatestBlogsSkeleton";

const HomePage = () => {
  return (
    <main className="space-y-[100px]">
      <HeroSection />
      <OurPoints />
      <BestSeller />
      <CategorySection />
      <Suspense fallback={<NewArrivalSkeleton />}>
        <NewArrival />
      </Suspense>
      <ProductBanner />
      <Suspense fallback={<LatestBlogsSkeleton />}>
        <LatestBlogs />
      </Suspense>
      <SpecialOffer />
    </main>
  );
};

export default HomePage;
