import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";

const ProductBanner = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[250px] lg:h-[350px] relative">
        <Link href="/product?category=watch" className="rounded-3xl">
          <Image
            src={images.home_watch_banner_bg}
            width={1920}
            height={300}
            priority
            alt="banner"
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="h-full w-full absolute inset-0 z-10 flex flex-col justify-center bg-black/80 rounded-3xl py-[50px] px-[30px] sm:pl-[50px] lg:pl-[70px] xl:pl-[100px]">
            <span className="text-white">Apple Watch Series 9</span>
            <h1 className="text-white font-bold text-[30px] sm:text-[40px] xl:text-[50px] sm:w-[80%] xl:w-[40%] leading-[40px] sm:leading-[50px] lg:leading-[60px] mt-2 mb-5 lg:mb-[50px]">
              Magic. At your fingertips.
            </h1>
            <span className="text-white bg-slate-600 text-[14px] font-semibold w-fit rounded-full py-2 px-7">
              Shop Now
            </span>
          </div>
          <div className="w-[360px] absolute bottom-0 z-20 right-[20px] xl:right-[50px] max-lg:hidden">
            <Image
              src={images.home_watch}
              width={682}
              height={720}
              priority
              alt="watch"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductBanner;
