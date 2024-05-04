"use client";

// next
import { useRouter } from "next/navigation";
// actions
import { likeAction } from "@/actions/fave.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons } from "@/constants";
// components
import Loader from "../shared/Loader";

const AddToFave = ({ type, userId, productId, blogId, isLikedByUser }) => {
  const router = useRouter();
  const { loading, fn } = useServerAction(likeAction, {
    type,
    userId,
    productId,
    blogId,
    isLikedByUser,
  });

  const faveAction = async () => {
    if (!userId) {
      router.push("/login");
      return;
    }

    fn();
  };

  return (
    <button
      onClick={faveAction}
      className={`absolute top-2 right-2 text-[20px] rounded-full p-3 ${
        isLikedByUser ? "bg-red-100" : "bg-gray-200"
      }`}
    >
      {loading ? (
        <Loader h={20} w={20} />
      ) : isLikedByUser ? (
        icons.redHeart
      ) : (
        icons.heart
      )}
    </button>
  );
};

export default AddToFave;
