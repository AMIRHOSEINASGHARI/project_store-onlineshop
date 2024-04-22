import { icons } from "@/constants";
import { reducePrice, shorterText } from "@/utils/functions";
import { Image } from "antd";

const CartItemCard = ({
  productId: { image, title, price, discount },
  quantity,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <Image src={image} width={35} height={35} />
        <div>
          <h1 className="font-medium text-[14px]">{shorterText(title, 20)}</h1>
          <div className="flex items-center gap-2">
            <p>$ {reducePrice(discount, price)}</p>
            <div className="text-[8px]">{icons.close}</div>
            <p>{quantity}</p>
          </div>
        </div>
      </div>
      <button>{icons.close}</button>
    </div>
  );
};

export default CartItemCard;
