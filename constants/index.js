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
  PiCheckSquareLight,
  PiShieldCheckLight,
  PiHeadphonesLight,
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
  home_watch: "/images/products/watch.png",
  home_watch_banner_bg: "/images/watch-banner-bg.png",
  category_camera: "/images/categories/camera.jpg",
  category_gaming: "/images/categories/gaming.jpg",
  category_headphone: "/images/categories/headphone.jpg",
  category_laptop: "/images/categories/laptop.jpg",
  category_phone: "/images/categories/phone.jpg",
  category_printer: "/images/categories/printer.jpg",
  category_speaker: "/images/categories/speaker.jpg",
  category_tablet: "/images/categories/tablet.jpg",
  category_tv: "/images/categories/tv.jpg",
  category_watch: "/images/categories/watch.jpg",
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
  checkSquare: <PiCheckSquareLight />,
  shield: <PiShieldCheckLight />,
  headphone: <PiHeadphonesLight />,
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

export const ourPoints = [
  {
    title: "Worldwide Delivery",
    subtitle: "We offer competitive prices on",
    icon: icons.deliveryTruck,
  },
  {
    title: "Safe Payment",
    subtitle: "We offer competitive prices on",
    icon: icons.checkSquare,
  },
  {
    title: "Shop With Confidence",
    subtitle: "We offer competitive prices on",
    icon: icons.shield,
  },
  {
    title: "24/7 Support",
    subtitle: "We offer competitive prices on",
    icon: icons.headphone,
  },
];

export const categories = [
  {
    image: images.category_camera,
    title: "Camera",
    route: "/products?category=camera",
  },
  {
    image: images.category_gaming,
    title: "Gaming",
    route: "/products?category=gaming",
  },
  {
    image: images.category_headphone,
    title: "Headphone",
    route: "/products?category=headphone",
  },
  {
    image: images.category_laptop,
    title: "Laptop",
    route: "/products?category=laptop",
  },
  {
    image: images.category_phone,
    title: "Phone",
    route: "/products?category=phone",
  },
  {
    image: images.category_printer,
    title: "Printer",
    route: "/products?category=printer",
  },
  {
    image: images.category_speaker,
    title: "Speaker",
    route: "/products?category=speaker",
  },
  {
    image: images.category_tablet,
    title: "Tablet",
    route: "/products?category=tablet",
  },
  {
    image: images.category_tv,
    title: "Television",
    route: "/products?category=tv",
  },
  {
    image: images.category_watch,
    title: "Watch",
    route: "/products?category=watch",
  },
];
