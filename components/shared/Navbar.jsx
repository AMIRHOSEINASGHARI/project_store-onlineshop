"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// react query
import { useQuery } from "@tanstack/react-query";
// services
import { QUERY_KEY } from "@/services/queryKeys";
import { getUserCart } from "@/services/queries";
// hooks
import useSession from "@/hooks/session";
// constants
import { icons, images } from "@/constants";
// components
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";
import Loader from "./Loader";
import CartDrawer from "./cart/CartDrawer";

const Navbar = () => {
  const { data: session } = useSession();
  const [openCart, setOpenCart] = useState(false);
  const pathname = usePathname();

  const { data: cartData, isLoading } = useQuery({
    queryKey: [QUERY_KEY.user_cart],
    queryFn: getUserCart,
    cacheTime: 0,
    staleTime: 0,
  });

  return (
    <header className="border-b fixed w-full top-0 z-[1000] bg-white">
      <div className="maxWidth w-full flex items-center justify-between max-lg:py-4 paddingX">
        <div className="flex items-center lg:gap-[50px]">
          <MobileNavMenu />
          <Link href="/" className="flex items-center gap-[10px] paddingIcon">
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
            href="/profile/personal-information"
            className={`iconSize paddingIcon rounded-full hover:bg-gray-100 transition1 border ${
              pathname.includes("/profile")
                ? "border-violet-500 text-violet-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {icons.user}
          </Link>
          <button
            disabled={isLoading}
            onClick={() => setOpenCart(true)}
            className={`iconSize relative paddingIcon rounded-full hover:bg-gray-100 transition1 border ${
              pathname.includes("/checkout")
                ? "border-violet-500 text-violet-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {isLoading ? <Loader h={15} w={15} /> : icons.cart}
            {cartData?.cart?.totalProductsCount > 0 && (
              <div className="w-[17px] h-[17px] flex items-center justify-center text-[10px] absolute bottom-0 right-0 bg-red-600 text-white rounded-full">
                {cartData?.cart?.totalProductsCount}
              </div>
            )}
          </button>
          {openCart && (
            <CartDrawer
              openCart={openCart}
              setOpenCart={setOpenCart}
              cart={cartData?.cart}
              session={session}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
