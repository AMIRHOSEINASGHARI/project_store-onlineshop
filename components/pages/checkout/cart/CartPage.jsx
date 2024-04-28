"use client";

import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants";
import { reducePrice } from "@/utils/functions";
import CountButtons from "../shared/CountButtons";
import EmptyCart from "@/components/shared/cart/EmptyCart";
import RightBar from "../shared/RightBar";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/services/queryKeys";
import { getUserCart } from "@/services/queries";
import Loader from "@/components/shared/Loader";

const CartPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.user_cart],
    queryFn: getUserCart,
    cacheTime: 0,
    staleTime: 0,
  });

  if (isLoading) {
    return (
      <main className="w-full flex justify-center">
        <Loader />
      </main>
    );
  }

  if (data?.code !== 200) {
    return <p>Error!</p>;
  }

  if (data?.cart?.totalProductsCount === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="flex gap-[20px] max-lg:flex-col lg:items-start">
      <section className="max-lg:w-full lg:w-3/4 space-y-[20px]">
        {data.cart.items.map((el) => {
          const {
            productId: { image, title, price, discount, _id, stock },
            quantity,
          } = el;
          return (
            <div key={el._id} className="cardShadow3 rounded-xl px-4 py-6 flex">
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
                  <CountButtons
                    quantity={quantity}
                    productId={_id}
                    stock={stock}
                  />
                  <div className="flex items-center gap-2">
                    <p className="subtitle">Stock:</p>
                    <p
                      className={`font-medium ${stock < 10 && "text-red-500"}`}
                    >
                      {stock.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <RightBar
        cart={data.cart}
        nextRoute="shipping"
        buttonTitle="Submit Orders"
      />
    </main>
  );
};

export default CartPage;
