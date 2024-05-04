// next
import Image from "next/image";
// constants
import { icons, images } from "@/constants";

const HeroSection = () => {
  return (
    <section className="w-full h-[85vh] relative">
      <Image
        src={images.hero_image}
        width={1920}
        height={1080}
        alt="hero"
        priority
        className="rounded-3xl w-full h-full object-cover"
      />
      <div className="absolute -bottom-[48px] w-full flex justify-center">
        <Image
          src="/icons/go-down-arrow.svg"
          width={200}
          height={200}
          alt="down"
          priority
        />
      </div>
      <div className="absolute bottom-1 text-[20px] animate-bounce w-full flex justify-center">
        {icons.downArrow}
      </div>
    </section>
  );
};

export default HeroSection;
