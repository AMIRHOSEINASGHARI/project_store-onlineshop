"use client";

import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";
import Image from "next/image";
import { icons, images } from "@/constants";
import DesktopNavMenu from "./DesktopNavMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="border-b fixed w-full top-0 z-10">
      <div className="maxWidth w-full flex items-center justify-between px-4 max-lg:py-4">
        <div className="flex items-center lg:gap-[50px]">
          <MobileNavMenu />
          <Link href="/" className="flex items-center gap-[10px] px-2">
            <Image
              src={images.logo}
              alt="logo"
              width={70}
              height={70}
              className="max-lg:w-[35px] max-lg:h-[35px] lg:w-[45px] lg:h-[45px]"
              priority
            />
            <div className="flex items-center italic font-bold">
              <span className="text-violet-600">Online</span>
              <span>Shop</span>
            </div>
          </Link>
          <DesktopNavMenu />
        </div>
        <div className="flex items-center mainGap">
          <Link
            href="/profile"
            className={`iconSize p-2 rounded-full hover:bg-gray-100 transition1 border ${
              pathname === "/profile"
                ? "border-violet-500 text-violet-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {icons.user}
          </Link>
          <button
            className={`iconSize p-2 rounded-full hover:bg-gray-100 transition1 border ${
              pathname === "/cart"
                ? "border-violet-500 text-violet-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {icons.cart}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
