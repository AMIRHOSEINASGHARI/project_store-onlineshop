"use client";

import { useState } from "react";
import { icons, images, navLinks } from "@/constants";
import { Drawer } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNavMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <button
        onClick={() => setOpenMenu(true)}
        className="iconSize lg:hidden paddingIcon"
      >
        {icons.menu}
      </button>
      <Drawer
        title={
          <div className="flex items-center justify-between">
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
            <button onClick={closeDrawer}>{icons.close}</button>
          </div>
        }
        placement="left"
        onClose={closeDrawer}
        open={openMenu}
        closeIcon={false}
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "30px",
          },
        }}
      >
        <nav>
          <ul className="space-y-[10px]">
            {navLinks.map((item) => {
              const { link, title } = item;
              const isActive = pathname === link;
              return (
                <li key={title} onClick={closeDrawer}>
                  <Link
                    href={link}
                    className={`block hover:text-violet-600 hover:border-b-violet-400 transition1 text-[14px] py-[10px] ${
                      isActive
                        ? "bg-violet-50 pl-[15px] border-l-2 border-violet-500 text-violet-600 font-bold"
                        : "text-gray-500 border-transparent font-light"
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default MobileNavMenu;
