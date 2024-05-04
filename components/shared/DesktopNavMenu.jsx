"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// constants
import { navLinks } from "@/constants";

const DesktopNavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="max-lg:hidden">
      <ul className="flex items-center gap-[40px]">
        {navLinks.map((item) => {
          const { link, title } = item;
          const isActive = pathname === link;
          return (
            <li key={title}>
              <Link
                href={link}
                className={`block hover:text-violet-600 hover:border-b-violet-400 transition1 font-light text-[14px] py-[25px] border-b-2 border-t-2 border-t-transparent ${
                  isActive
                    ? "border-violet-500 text-violet-600"
                    : "text-gray-500 border-transparent"
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavMenu;
