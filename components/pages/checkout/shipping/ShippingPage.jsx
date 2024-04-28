"use client";

import RightBar from "../shared/RightBar";
import Link from "next/link";
import { icons } from "@/constants";
import Image from "next/image";
import { reducePrice } from "@/utils/functions";
import CountButtons from "../cart/ui/CountButtons";
import EmptyCart from "@/components/shared/cart/EmptyCart";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/services/queryKeys";
import { getShippingData } from "@/services/queries";
import Loader from "@/components/shared/Loader";

const ShippingPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.user_shipping_data],
    queryFn: getShippingData,
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

  if (data?.user?.cart?.totalProductsCount === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="flex gap-[20px] max-lg:flex-col lg:items-start">
      <section className="max-lg:w-full lg:w-3/4 space-y-[20px]">
        <div className="flex justify-end">
          <Link
            href="/checkout/cart"
            className="flex items-center gap-2 border-2 rounded-lg py-2 px-6"
          >
            <div>{icons.leftArrow}</div>
            <p className="subtitle">Back to cart</p>
          </Link>
        </div>
        <div className="cardShadow3 p-6 space-y-3">
          <p className="subtitle ml-[37px]">Address</p>
          <div className="flex gap-3">
            <div className="iconSize">{icons.location}</div>
            <p className="subheader">
              {data.user.address ? data.user.address : "No Address!"}
            </p>
          </div>
          <p className="subtitle ml-[37px] capitalize">
            {data.user.displayName ? data.user.displayName : "..."}
          </p>
          <p className="subtitle ml-[37px] capitalize">
            {data.user.phoneNumber ? data.user.phoneNumber : "..."}
          </p>
          <div className="flex justify-end">
            <Link
              href="/profile/personal-information"
              className="flex items-center gap-2 text-blue-500"
            >
              <div className="iconSize">{icons.pen}</div>
              <p className="subtitle">
                {!data.user.address ||
                !data.user.displayName ||
                !data.user.phoneNumber
                  ? "Complete Your Info"
                  : "Edit Your Info"}
              </p>
            </Link>
          </div>
        </div>
        <div className="p-4 rounded-xl border space-y-3">
          {data.user.cart.items.map((el) => {
            const {
              productId: { image, title, price, discount, _id },
              quantity,
            } = el;
            return (
              <div
                key={el._id}
                className="cardShadow3 rounded-xl px-4 py-6 flex"
              >
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
                      <p className="subtitle">
                        ${reducePrice(discount, price)}
                      </p>
                      <div className="text-[8px]">{icons.close}</div>
                      <p className="subtitle">{quantity}</p>
                      <p className="text-red-500 font-light text-[14px]">
                        $ {reducePrice(discount, price) * quantity}
                      </p>
                    </div>
                    <CountButtons
                      quantity={JSON.parse(JSON.stringify(quantity))}
                      productId={JSON.parse(JSON.stringify(_id))}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {!data?.user?.address ||
      !data?.user?.displayName ||
      !data?.user?.phoneNumber ? (
        <div className="bg-red-50 rounded-lg p-4 border-x-4 border-red-500 max-lg:w-full lg:w-1/4">
          <p className="text-center text-red-500">
            Complete your info to proceed!
          </p>
        </div>
      ) : (
        <RightBar
          cart={data?.user?.cart}
          nextRoute="payment"
          buttonTitle="Proceed To Payment"
        />
      )}
    </main>
  );
};

export default ShippingPage;
