import Image from "next/image";
import Link from "next/link";
import CountButtons from "./CountButtons";
import { reducePrice } from "@/utils/functions";
import { icons } from "@/constants";

const CartProductCard = (props) => {
  const {
    productId: { image, title, price, discount, _id, stock },
    quantity,
  } = props;

  return (
    <div className="cardShadow3 rounded-xl px-4 py-6 flex">
      <div className="flex max-lg:flex-col lg:items-center gap-10 w-full">
        <div className="p-4 flex items-center justify-center max-lg:w-full">
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            priority
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Link href={`/products/${_id}`} target="_blank">
            {title}
          </Link>
          <div className="flex items-center gap-2">
            <p className="subtitle">${reducePrice(discount, price)}</p>
            <div className="text-[8px]">{icons.close}</div>
            <p className="subtitle">{quantity}</p>
            <p className="text-red-500 font-light text-[14px]">
              $ {reducePrice(discount, price) * quantity}
            </p>
          </div>
          <CountButtons quantity={quantity} productId={_id} stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
