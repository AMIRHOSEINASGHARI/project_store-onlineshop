import {
  PiBasketThin,
  PiCurrencyDollarSimpleThin,
  PiLayoutLight,
  PiPaperPlaneThin,
  PiPlusSquareThin,
  PiTextBLight,
  PiTextboxLight,
  PiUsersThin,
  PiPowerThin,
  PiTrashSimple,
  PiNewspaperLight,
  PiPencilSimpleLight,
  PiUploadLight,
  PiHeartLight,
  PiClockLight,
  PiLockSimpleOpenLight,
  PiArrowBendRightUpLight,
  PiArrowBendRightDownLight,
  PiBoundingBoxLight,
  PiQuestionLight,
  PiUserLight,
  PiShoppingBagLight,
} from "react-icons/pi";
import { GoHome, GoTasklist } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  CiDark,
  CiDeliveryTruck,
  CiMenuBurger,
  CiSearch,
  CiSettings,
} from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const images = {
  logo: "/images/logo.svg",
  authLogin: "/images/auth-login.png",
  authRegister: "/images/auth-register.png",
  person_1: "/images/person.png",
  notFound: "/images/404.svg",
  hero_image: "/images/hero.jpg",
};

export const icons = {
  home: <GoHome />,
  deliveryTruck: <CiDeliveryTruck />,
  dollar: <PiCurrencyDollarSimpleThin />,
  basket: <PiBasketThin />,
  cart: <PiShoppingBagLight />,
  plus: <PiPlusSquareThin />,
  paper: <PiPaperPlaneThin />,
  users: <PiUsersThin />,
  user: <PiUserLight />,
  layout: <PiLayoutLight />,
  textB: <PiTextBLight />,
  textBox: <PiTextboxLight />,
  tasks: <GoTasklist />,
  notification: <IoIosNotificationsOutline />,
  settings: <CiSettings />,
  power: <PiPowerThin />,
  search: <CiSearch />,
  close: <TfiClose />,
  moon: <CiDark />,
  trash: <PiTrashSimple />,
  pen: <PiPencilSimpleLight />,
  document: <PiNewspaperLight />,
  upload: <PiUploadLight />,
  heart: <PiHeartLight />,
  clock: <PiClockLight />,
  lock: <PiLockSimpleOpenLight />,
  growArrow: <PiArrowBendRightUpLight />,
  fallingArrow: <PiArrowBendRightDownLight />,
  category: <PiBoundingBoxLight />,
  question: <PiQuestionLight />,
  menu: <CiMenuBurger />,
};

export const navLinks = [
  {
    title: "Home",
    image: icons.home,
    link: "/",
  },
  {
    title: "Products",
    image: icons.basket,
    link: "/products",
  },
  {
    title: "Categories",
    image: icons.category,
    link: "/categories",
  },
  {
    title: "Blogs",
    image: icons.textB,
    link: "/blogs",
  },
  {
    title: "About Us",
    image: icons.question,
    link: "/about-us",
  },
];
