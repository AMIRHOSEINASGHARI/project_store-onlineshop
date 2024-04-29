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
  PiArrowDownLight,
  PiArrowRightLight,
  PiTwitterLogoLight,
  PiGoogleLogoLight,
  PiInstagramLogoLight,
  PiTelegramLogoLight,
  PiYoutubeLogoLight,
  PiEyeLight,
  PiArrowLeftLight,
  PiCreditCardLight,
  PiPaypalLogoLight,
  PiHandshakeLight,
} from "react-icons/pi";
import { GoHome, GoTasklist } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  CiDark,
  CiDeliveryTruck,
  CiFilter,
  CiLocationOn,
  CiMenuBurger,
  CiSearch,
  CiSettings,
} from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { FcLike } from "react-icons/fc";

export const images = {
  logo: "/images/logo.svg",
  authLogin: "/images/auth-login.png",
  authRegister: "/images/auth-register.png",
  person_1: "/images/person.jpg",
  notFound: "/images/404.svg",
  hero_image: "/images/hero.jpg",
  home_watch: "/images/products/watch.png",
  home_watch_banner_bg: "/images/watch-banner-bg.png",
  ip15: "/images/products/ip15.png",
  ps5_controller_black: "/images/products/ps5-conroller-black.png",
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
  empty_cart: "/images/empty-cart.png",
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
  redHeart: <FcLike />,
  clock: <PiClockLight />,
  lock: <PiLockSimpleOpenLight />,
  growArrow: <PiArrowBendRightUpLight />,
  downArrow: <PiArrowDownLight />,
  rightArrow: <PiArrowRightLight />,
  leftArrow: <PiArrowLeftLight />,
  fallingArrow: <PiArrowBendRightDownLight />,
  category: <PiBoundingBoxLight />,
  question: <PiQuestionLight />,
  menu: <CiMenuBurger />,
  checkSquare: <PiCheckSquareLight />,
  shield: <PiShieldCheckLight />,
  headphone: <PiHeadphonesLight />,
  twitter: <PiTwitterLogoLight />,
  google: <PiGoogleLogoLight />,
  instagram: <PiInstagramLogoLight />,
  telegram: <PiTelegramLogoLight />,
  youtube: <PiYoutubeLogoLight />,
  filter: <CiFilter />,
  eye: <PiEyeLight />,
  location: <CiLocationOn />,
  creditCard: <PiCreditCardLight />,
  paypal: <PiPaypalLogoLight />,
  handShake: <PiHandshakeLight />,
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
    query: "camera",
  },
  {
    image: images.category_gaming,
    title: "Gaming",
    query: "gaming",
  },
  {
    image: images.category_headphone,
    title: "Headphone",
    query: "headphone",
  },
  {
    image: images.category_laptop,
    title: "Laptop",
    query: "laptop",
  },
  {
    image: images.category_phone,
    title: "Phone",
    query: "phone",
  },
  {
    image: images.category_printer,
    title: "Printer",
    query: "printer",
  },
  {
    image: images.category_speaker,
    title: "Speaker",
    query: "speaker",
  },
  {
    image: images.category_tablet,
    title: "Tablet",
    query: "tablet",
  },
  {
    image: images.category_tv,
    title: "TV",
    query: "tv",
  },
  {
    image: images.category_watch,
    title: "Watch",
    query: "watch",
  },
];

export const footerLinks = [
  {
    isLink: true,
    title: "About Us",
    id: 1,
    links: [
      "Careers",
      "Our Stores",
      "Our Cares",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    isLink: true,
    title: "Customer Care",
    id: 2,
    links: [
      "Help Center",
      "Track Your Order",
      "Corporate & Bulk Purchasing",
      "Returns & Refunds",
    ],
  },
  {
    isLink: false,
    title: "Contact Us",
    id: 3,
    names: [
      "Help Center",
      "Track Your Order",
      "Corporate & Bulk Purchasing",
      "Returns & Refunds",
    ],
  },
];

export const socialMedia = [
  {
    icon: icons.youtube,
    link: "/",
    id: 1,
  },
  {
    icon: icons.twitter,
    link: "/",
    id: 2,
  },
  {
    icon: icons.google,
    link: "/",
    id: 3,
  },
  {
    icon: icons.instagram,
    link: "/",
    id: 4,
  },
  {
    icon: icons.telegram,
    link: "/",
    id: 5,
  },
];

export const sortProducts = [
  {
    sortName: "newest",
    sortId: 1,
  },
  {
    sortName: "oldest",
    sortId: 2,
  },
  {
    sortName: "most expensive",
    sortId: 3,
  },
  {
    sortName: "cheapest",
    sortId: 4,
  },
  {
    sortName: "bestselling",
    sortId: 5,
  },
];

export const profilePages = [
  {
    name: "Personal Information",
    route: "personal-information",
    icon: icons.user,
  },
  {
    name: "Orders",
    route: "orders",
    icon: icons.deliveryTruck,
  },
  {
    name: "Comments",
    route: "comments",
    icon: icons.paper,
  },
  {
    name: "Likes",
    route: "likes",
    icon: icons.heart,
  },
];

export const checkoutPages = [
  {
    name: "Cart",
    route: "cart",
  },
  {
    name: "Shipping",
    route: "shipping",
  },
  {
    name: "Payment",
    route: "payment",
  },
];

export const orderColumn = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Ordered At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Total",
    dataIndex: "totalPayable",
    key: "totalPayable",
  },
  {
    dataIndex: "detail",
    key: "detail",
  },
];

export const productColumn = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];
