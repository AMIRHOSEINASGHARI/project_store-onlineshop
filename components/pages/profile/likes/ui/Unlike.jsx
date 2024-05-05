"use client";

// actions
import { likeAction } from "@/actions/fave.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// components
import Loader from "@/components/shared/Loader";

const Unlike = ({ type, userId, blogId, productId, isLikedByUser }) => {
  const { loading, fn } = useServerAction(likeAction, {
    type,
    userId,
    blogId,
    productId,
    isLikedByUser,
  });

  return (
    <button
      onClick={fn}
      className="bg-gray-100 flex justify-center items-center rounded-lg w-full h-[32px] text-[13px]"
    >
      {loading ? <Loader w={15} h={15} /> : "Unlike"}
    </button>
  );
};

export default Unlike;
