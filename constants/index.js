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
} from "react-icons/pi";
import { GoHome, GoTasklist } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiDark, CiDeliveryTruck, CiSearch, CiSettings } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const images = {
  logo: "/logo.svg",
  authLogin: "/auth-login.png",
  authRegister: "/auth-register.png",
  person_1: "/person.png",
  notFound: "/404.svg",
};

export const icons = {
  home: <GoHome />,
  deliveryTruck: <CiDeliveryTruck />,
  dollar: <PiCurrencyDollarSimpleThin />,
  basket: <PiBasketThin />,
  plus: <PiPlusSquareThin />,
  paper: <PiPaperPlaneThin />,
  users: <PiUsersThin />,
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
