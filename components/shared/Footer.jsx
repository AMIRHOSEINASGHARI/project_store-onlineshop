import Link from "next/link";
import Image from "next/image";
import { footerLinks, icons, images, socialMedia } from "@/constants";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="maxWidth w-full space-y-5 pagesPaddingX py-[70px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="space-y-3">
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
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis vero eos voluptatibus, maiores eaque corrupti fugit,
                iusto minima esse necessitatibus explicabo rerum velit quam ea,
                odio dolore veniam saepe amet.
              </p>
            </div>
            {footerLinks.map((el) => {
              if (el.isLink) {
                const { title, links } = el;
                return (
                  <div key={el.id} className="flex flex-col gap-3">
                    <h1 className="subheader">{title}</h1>
                    <div className="flex flex-col gap-2">
                      {links.map((item) => (
                        <Link
                          href="/"
                          key={item}
                          className="subtitle hover:text-violet-500 transition1"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                const { title, names } = el;
                return (
                  <div key={el.id} className="flex flex-col gap-3">
                    <h1 className="subheader">{title}</h1>
                    <div className="flex flex-col gap-2">
                      {names.map((item) => (
                        <p key={item} className="subtitle">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="border-t border-gray-100 w-full py-[15px]">
          <div className="maxWidth pagesPaddingX flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <p className="subtitle">&copy; 2024. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {socialMedia.map((el) => (
                <Link
                  href={el.link}
                  key={el.id}
                  className="rounded-2xl bg-gray-200 hover:bg-gray-100 transition1 hover:shadow-inner p-3"
                >
                  {el.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 bg-gray-50 w-full flex justify-center py-[15px]">
          <div className="maxWidth pagesPaddingX flex items-center gap-2">
            <span className="subtitle">Made with</span>{" "}
            <div className="animate-bounce">{icons.redHeart}</div>{" "}
            <Link
              href="https://t.me/Amirhosein_Asghari79"
              target="_blank"
              className="subtitle hover:text-violet-500"
            >
              By AMIRHOSEIN
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
