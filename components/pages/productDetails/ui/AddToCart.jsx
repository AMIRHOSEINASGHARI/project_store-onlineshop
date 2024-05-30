"use client";

// react
import { useEffect } from "react";
// next
import { useRouter } from "next/navigation";
// react query
import { useQuery } from "@tanstack/react-query";
// services
import { getUserCart } from "@/services/queries";
import { QUERY_KEY } from "@/services/queryKeys";
// actions
import { addToCart } from "@/actions/cart.action";
// utils
import { isInCart } from "@/utils/functions";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons } from "@/constants";
// components
import Loader from "@/components/shared/Loader";

const AddToCart = ({ productId, session, published }) => {
  const router = useRouter();
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [QUERY_KEY.user_cart],
    queryFn: getUserCart,
    cacheTime: 0,
    staleTime: 0,
    enabled: false,
  });
  const { loading, fn } = useServerAction(addToCart, { productId }, () =>
    refetch()
  );

  const addHandler = async () => {
    if (!session) {
      router.push("/login");
      return;
    }

    fn();
  };

  useEffect(() => {
    if (session) {
      refetch();
    }
  }, [session]);

  if (isError) {
    return (
      <div className="mt-[20px] text-center bg-red-100 rounded-lg py-2">
        <p className="text-red-500">Error!</p>
      </div>
    );
  }

  if (isLoading && isFetching) {
    return (
      <div className="mt-[20px] text-white bg-gray-800 font-semibold w-full py-3 rounded-lg flex justify-center">
        <Loader h={20} w={20} />
      </div>
    );
  }

  const buttonOptions = {
    className: `font-semibold w-full py-3 rounded-lg flex justify-center ${
      loading || isFetching || !published
        ? "bg-gray-100 text-black"
        : "bg-black text-white"
    }`,
    disabled:
      loading ||
      isFetching ||
      isInCart(productId, data?.cart?.selectedItems) >= 0,
    text:
      !loading &&
      !isFetching &&
      (isInCart(productId, data?.cart?.selectedItems) >= 0 ? (
        <div className="flex items-center gap-2 ">
          <div className="iconSize">{icons.checkSquare}</div>
          <span>View In Cart</span>
        </div>
      ) : (
        "Add To Cart"
      )),
  };

  return (
    <div className="mt-[20px]">
      <button
        type="button"
        className={buttonOptions.className}
        onClick={addHandler}
        disabled={!published || buttonOptions.disabled}
      >
        {(loading || isFetching) && <Loader h={20} w={20} />}
        {published ? buttonOptions.text : "Draft Mode"}
      </button>
    </div>
  );
};

export default AddToCart;
