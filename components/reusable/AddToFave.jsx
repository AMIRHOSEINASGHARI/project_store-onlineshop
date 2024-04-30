"use client";

import { likeAction } from "@/actions/fave.action";
import { icons } from "@/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";
import { useRouter } from "next/navigation";

const AddToFave = ({ type, userId, productId, blogId, isLikedByUser }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const faveAction = async () => {
    if (!userId) {
      router.push("/login");
      return;
    }

    setLoading(() => true);
    const result = await likeAction({
      type,
      userId,
      productId,
      blogId,
      isLikedByUser,
    });
    setLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
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
