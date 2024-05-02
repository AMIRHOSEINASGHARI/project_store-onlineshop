import { icons } from "@/constants";

const DeleteComment = ({ commentId, productId }) => {
  return (
    <button className="flex items-center gap-2 hover:bg-gray-200 transition1 bg-gray-100 rounded-lg py-1 px-5">
      <div>{icons.trash}</div>
    </button>
  );
};

export default DeleteComment;
