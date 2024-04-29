"use client";

import { createOrder } from "@/actions/order.action";
import Loader from "@/components/shared/Loader";
import { QUERY_KEY } from "@/services/queryKeys";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const PayButton = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const pay = async () => {
    setLoading(() => true);
    const result = await createOrder(data);
    setLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      console.log(result);
      queryClient.invalidateQueries(QUERY_KEY.user_cart);
      toast.success(result.message);
      router.push("/profile/orders");
    }
  };

  return (
    <button
      onClick={pay}
      disabled={loading}
      className={`${
        loading ? "bg-gray-100" : "bg-green-500 text-white"
      } w-full py-3 rounded-xl flex justify-center items-center`}
    >
      {loading ? <Loader h={20} w={20} /> : "Pay Off"}
    </button>
  );
};

export default PayButton;
