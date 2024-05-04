"use client";

// react query
import { useQueryClient } from "@tanstack/react-query";
// services
import { QUERY_KEY } from "@/services/queryKeys";
// actions
import {
  addToCart,
  decreaseFromCart,
  deleteFromCart,
} from "@/actions/cart.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons } from "@/constants";
// components
import Loader from "@/components/shared/Loader";

const CountButtons = ({ quantity, productId, stock }) => {
  const queryClient = useQueryClient();
  const { loading: downLoading, fn: downFN } = useServerAction(
    decreaseFromCart,
    { productId },
    () => {
      queryClient.invalidateQueries(QUERY_KEY.user_cart);
    }
  );

  const { loading: upLoading, fn: upFN } = useServerAction(
    addToCart,
    { productId },
    () => {
      queryClient.invalidateQueries(QUERY_KEY.user_cart);
    }
  );

  const { loading: deleteLoading, fn: deleteFN } = useServerAction(
    deleteFromCart,
    { productId },
    () => {
      queryClient.invalidateQueries(QUERY_KEY.user_cart);
    }
  );

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-4">
        <button
          onClick={downFN}
          disabled={downLoading || upLoading || deleteLoading}
          className="rounded-lg text-[25px] w-[35px] h-[35px] flex justify-center items-center border hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200 transition1"
        >
          {downLoading ? <Loader h={20} w={20} /> : "-"}
        </button>
        <p>{quantity}</p>
        <button
          onClick={upFN}
          disabled={
            downLoading || upLoading || deleteLoading || stock === quantity
          }
          className={`${
            upLoading || stock === quantity
              ? "text-gray-200"
              : "text-blue-500 border-blue-500 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-200 transition1"
          } border rounded-lg text-[25px] w-[35px] h-[35px] flex justify-center items-center`}
        >
          {upLoading ? <Loader h={20} w={20} /> : "+"}
        </button>
      </div>

      <button
        onClick={deleteFN}
        disabled={downLoading || upLoading || deleteLoading}
        className="text-gray-500 rounded-lg iconSize"
      >
        {deleteLoading ? <Loader h={20} w={20} /> : icons.trash}
      </button>
    </div>
  );
};

export default CountButtons;
