"use client";

import Link from "next/link";
import { icons } from "@/constants";
import { reducePrice, shorterText } from "@/utils/functions";
import Image from "next/image";
import { useState } from "react";
import { deleteFromCart } from "@/actions/cart.action";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/services/queryKeys";
import Loader from "../Loader";

const CartItemCard = ({
  productId: { image, title, price, discount, _id },
  quantity,
}) => {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const deleteHandler = async () => {
    setLoading(() => true);
    const result = await deleteFromCart(_id);
    setLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      queryClient.invalidateQueries(QUERY_KEY.user_cart);
      toast.success(result.message);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <Image src={image} width={35} height={35} priority alt={title} />
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
      <button disabled={loading} onClick={deleteHandler} className="iconSize">
        {loading ? <Loader h={20} w={20} /> : icons.trash}
      </button>
    </div>
  );
};

export default CartItemCard;
