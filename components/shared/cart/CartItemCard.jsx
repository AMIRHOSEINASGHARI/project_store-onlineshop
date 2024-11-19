"use client";

// next
import Link from "next/link";
import Image from "next/image";
// react query
import { useQueryClient } from "@tanstack/react-query";
// actions
import { deleteFromCart } from "@/actions/cart.action";
// services
import { QUERY_KEY } from "@/services/queryKeys";
// utils
import { reducePrice, shorterText } from "@/utils/functions";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons } from "@/constants";
// components
import Loader from "../Loader";

const CartItemCard = ({
  productId: { images, title, price, discount, _id },
  quantity,
}) => {
  const queryClient = useQueryClient();
  const { loading, fn } = useServerAction(
    deleteFromCart,
    { productId: _id },
    () => queryClient.invalidateQueries(QUERY_KEY.user_cart)
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <Image src={images[0]} width={35} height={35} priority alt={title} />
        <div>
          <Link
            href={`/products/${_id}`}
            target="_blank"
            className="font-medium text-[14px]"
          >
            {shorterText(title, 20)}
          </Link>
          <div className="flex items-center gap-2">
            <p>$ {reducePrice(discount, price)}</p>
            <div className="text-[8px]">{icons.close}</div>
            <p>{quantity}</p>
          </div>
        </div>
      </div>
      <button disabled={loading} onClick={fn} className="iconSize">
        {loading ? <Loader h={20} w={20} /> : icons.trash}
      </button>
    </div>
  );
};

export default CartItemCard;
