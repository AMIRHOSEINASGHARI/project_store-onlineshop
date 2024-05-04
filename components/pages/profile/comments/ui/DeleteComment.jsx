"use client";

// actions
import { deleteProductComment } from "@/actions/product.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons } from "@/constants";
// components
import Loader from "@/components/shared/Loader";

const DeleteComment = ({ commentId, productId }) => {
  const { loading, fn } = useServerAction(deleteProductComment, {
    commentId,
    productId,
  });

  return (
    <button
      onClick={fn}
      className="flex items-center gap-2 hover:bg-gray-200 transition1 bg-gray-100 rounded-lg py-1 px-5"
    >
      {loading ? <Loader h={17} w={17} /> : icons.trash}
    </button>
  );
};

export default DeleteComment;
