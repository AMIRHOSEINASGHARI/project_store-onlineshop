"use client";

import { deleteProductComment } from "@/actions/product.action";
import Loader from "@/components/shared/Loader";
import { icons } from "@/constants";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteComment = ({ commentId, productId }) => {
  const [loading, setLoading] = useState(false);

  const deleteComment = async () => {
    setLoading(() => true);
    const result = await deleteProductComment(commentId, productId);
    setLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  };

  return (
    <button
      onClick={deleteComment}
      className="flex items-center gap-2 hover:bg-gray-200 transition1 bg-gray-100 rounded-lg py-1 px-5"
    >
      {loading ? <Loader h={17} w={17} /> : icons.trash}
    </button>
  );
};

export default DeleteComment;
