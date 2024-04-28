"use client";

import EmptyCart from "@/components/shared/cart/EmptyCart";
import RightBar from "../shared/RightBar";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/services/queryKeys";
import { getUserCart } from "@/services/queries";
import Loader from "@/components/shared/Loader";
import CartProductCard from "../shared/CartProductCard";
import CheckoutSteps from "../shared/CheckoutSteps";

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
    <>
      <CheckoutSteps />
      <main className="flex gap-[20px] max-lg:flex-col lg:items-start">
        <section className="max-lg:w-full lg:w-3/4 space-y-[20px]">
          {data.cart.items.map((el) => (
            <CartProductCard key={el._id} {...el} />
          ))}
        </section>
        <RightBar
          cart={data.cart}
          nextRoute="/checkout/shipping"
          buttonTitle="Submit Orders"
          buttonClassName="bg-blue-500 text-white"
        />
      </main>
    </>
  );
};

export default CartPage;
