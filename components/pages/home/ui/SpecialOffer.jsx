import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";
import TextHeader from "@/components/reusable/TextHeader";

const SpecialOffer = () => {
  return (
    <section>
      <div className="textHeaderPosition">
        <TextHeader
          title="Special Offers"
          subtitle="There are many variations passages"
        />
      </div>
      <div className="flex max-xl:flex-col xl:flex-row gap-10">
        <div className="w-full h-[250px] lg:h-[350px] relative group rounded-3xl overflow-hidden">
          <Link href="/products?category=gaming" target="_blank">
            <div className="h-full w-full flex flex-col justify-center bg-gradient-to-br from-[#e3cf5f22] to-[#feea71] py-[50px] px-[30px] sm:pl-[50px]">
              <span className="text-gray-800">PlayStation Controller</span>
              <h1 className="text-gray-800 font-bold text-[30px] sm:text-[40px] sm:w-[80%] xl:w-[40%] xl:leading-[45px] leading-[35px] mt-2 mb-5 lg:mb-[50px]">
                DualSense Wireless Controller
              </h1>
              <span className="text-white bg-gray-800 text-[14px] font-semibold w-fit rounded-full py-2 px-7">
                Shop Now
              </span>
            </div>
            <div className="max-lg:hidden absolute -right-[100px] bottom-[10px] w-[380px] z-10 group-hover:-translate-x-[40px] transition1">
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
        <div className="w-full h-[250px] lg:h-[350px] relative group rounded-3xl overflow-hidden">
          <Link href="/products?category=phone" target="_blank">
            <div className="h-full w-full flex flex-col justify-center bg-gradient-to-br from-[#262626e1] to-[#1a1a1a] py-[50px] px-[30px] sm:pl-[50px]">
              <span className="text-white">iPhone 15</span>
              <h1 className="text-white font-bold text-[30px] sm:text-[40px] sm:w-[80%] xl:w-[40%] xl:leading-[45px] leading-[35px] mt-2 mb-5 lg:mb-[50px]">
                Apple iPhone 15 Pro Max
              </h1>
              <span className="text-white bg-gray-700 text-[14px] font-semibold w-fit rounded-full py-2 px-7">
                Shop Now
              </span>
            </div>
            <div className="max-lg:hidden absolute right-[30px] -bottom-[170px] w-[250px] z-10 group-hover:-translate-y-[40px] transition1">
              <Image
                src={images.ip15}
                width={682}
                height={720}
                priority
                alt="watch"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
