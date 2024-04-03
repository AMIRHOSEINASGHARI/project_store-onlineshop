import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";
import Image from "next/image";
import { icons, images } from "@/constants";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white fixed w-full top-0 z-10">
      <div className="flex items-center mainGap">
        <MobileNavMenu />
        <Link href="/" className="flex items-center gap-[10px]">
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
      </div>
      <div className="flex items-center mainGap">
        <Link href="/profile" className="iconSize">
          {icons.user}
        </Link>
        <button className="iconSize">{icons.cart}</button>
      </div>
    </header>
  );
};

export default Navbar;
