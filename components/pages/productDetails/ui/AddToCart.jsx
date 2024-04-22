"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addToCart } from "@/actions/product.action";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/services/queryKeys";
import { getUser } from "@/services/queries";
import { isInCart } from "@/utils/functions";
import { icons } from "@/constants";

const AddToCart = ({ productId, session }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QUERY_KEY.user_data],
    queryFn: getUser,
    cacheTime: 0,
    staleTime: 0,
    enabled: false,
  });

  const addHandler = async () => {
    if (!session) {
      router.push("/login");
      return;
    }

    setLoading(() => true);
    const result = await addToCart(productId);
    refetch();
    setLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  };

  useEffect(() => {
    if (session) {
      refetch();
    }
  }, [session]);

  const buttonOptions = {
    className: `text-white font-semibold w-full py-3 rounded-lg flex justify-center ${
      loading || isLoading ? "bg-gray-100" : "bg-black"
    }`,
    disabled:
      loading ||
      isLoading ||
      isInCart(productId, data?.user?.cart?.selectedItems) >= 0,
    text:
      !loading &&
      !isLoading &&
      (isInCart(productId, data?.user?.cart?.selectedItems) >= 0 ? (
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
        {(loading || isLoading) && <Loader h={20} w={20} />}
        {buttonOptions.text}
      </button>
    </div>
  );
};

export default AddToCart;
