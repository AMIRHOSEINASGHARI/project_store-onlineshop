"use client";

// next
import { useRouter } from "next/navigation";
// react query
import { useQueryClient } from "@tanstack/react-query";
// actions
import { createOrder } from "@/actions/order.action";
// services
import { QUERY_KEY } from "@/services/queryKeys";
// hooks
import useServerAction from "@/hooks/callServerAction";
// components
import Loader from "@/components/shared/Loader";

const PayButton = ({ data }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { loading, fn } = useServerAction(createOrder, data, () => {
    queryClient.invalidateQueries(QUERY_KEY.user_cart);
    router.push("/profile/orders");
  });

  return (
    <button
      onClick={fn}
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
