import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";

const ProductBanner = () => {
  return (
    <section className="w-full space-y-10">
      <div className="w-full h-[250px] lg:h-[350px] relative group">
        <Link
          href="/products?category=watch"
          target="_blank"
          className="rounded-3xl"
        >
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
          <div className="w-[360px] animate-pulse group-hover:animate-none absolute bottom-0 z-20 right-[20px] xl:right-[50px] max-lg:hidden group-hover:-translate-x-[20px] group-hover:-translate-y-[10px] group-hover:rotate-2 transition1">
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
      {/* <div className="flex max-xl:flex-col xl:flex-row gap-10">
        <div className="w-full h-[250px] lg:h-[350px] relative group rounded-3xl overflow-hidden">
          <Link href="/products?category=gaming" target="_blank">
            <div className="h-full w-full flex flex-col justify-center bg-[#feea71] py-[50px] px-[30px] sm:pl-[50px]">
              <span className="text-gray-800">PlayStation Controller</span>
              <h1 className="text-gray-800 font-bold text-[30px] sm:text-[40px] sm:w-[80%] xl:w-[40%] leading-[40px] sm:leading-[50px] lg:leading-[60px] mt-2 mb-5 lg:mb-[50px]">
                DualSense Wireless Controller
              </h1>
              <span className="text-white bg-gray-800 text-[14px] font-semibold w-fit rounded-full py-2 px-7">
                Shop Now
              </span>
            </div>
            <div className="max-lg:hidden absolute -right-[100px] bottom-[10px] w-[300px] z-10">
              <Image
                src={images.ps5_controller_black}
                width={682}
                height={720}
                priority
                alt="watch"
              />
            </div>
          </Link>
        </div>
        <div className="w-full h-[250px] lg:h-[350px] relative group">
          <Link
            href="/products?category=gaming"
            target="_blank"
            className="rounded-3xl"
          >
            <div className="h-full w-full flex flex-col justify-center bg-[#feea71] rounded-3xl py-[50px] px-[30px] sm:pl-[50px] lg:pl-[70px] xl:pl-[100px]">
              <span className="text-gray-800">PlayStation Controller</span>
              <h1 className="text-gray-800 font-bold text-[30px] sm:text-[40px] xl:text-[50px] sm:w-[80%] xl:w-[40%] leading-[40px] sm:leading-[50px] lg:leading-[60px] mt-2 mb-5 lg:mb-[50px]">
                DualSense Wireless Controller
              </h1>
              <span className="text-white bg-gray-800 text-[14px] font-semibold w-fit rounded-full py-2 px-7">
                Shop Now
              </span>
            </div>
            <div className="max-lg:hidden absolute right-0 bottom-0 w-[300px] z-10">
              <Image
                src={images.ps5_controller_black}
                width={682}
                height={720}
                priority
                alt="watch"
              />
            </div>
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default ProductBanner;
