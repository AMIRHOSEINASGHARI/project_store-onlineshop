"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/services/queryKeys";
import { isInCart } from "@/utils/functions";
import { icons } from "@/constants";
import { getUserCart } from "@/services/queries";
import { addToCart } from "@/actions/cart.action";
import useServerAction from "@/hooks/callServerAction";

const AddToCart = ({ productId, session }) => {
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
    className: `text-white font-semibold w-full py-3 rounded-lg flex justify-center ${
      loading || isFetching ? "bg-gray-100" : "bg-black"
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
        disabled={buttonOptions.disabled}
      >
        {(loading || isFetching) && <Loader h={20} w={20} />}
        {buttonOptions.text}
      </button>
    </div>
  );
};

export default AddToCart;
