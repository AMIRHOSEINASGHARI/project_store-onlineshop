"use client";

// actions
import { likeAction } from "@/actions/fave.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons } from "@/constants";
// components
import Loader from "@/components/shared/Loader";

const LikeBlog = ({ blogId, isLikedByUser, userId }) => {
  const { loading, fn } = useServerAction(likeAction, {
    type: "blog",
    userId,
    blogId,
    isLikedByUser,
  });

  return (
    <div className="flex items-center gap-1 justify-end">
      <p className="subtitle">Like this blog</p>
      <button onClick={fn} className={`text-[20px] rounded-full p-2`}>
        {loading ? (
          <Loader h={20} w={20} />
        ) : isLikedByUser ? (
          icons.redHeart
        ) : (
          icons.heart
        )}
      </button>
    </div>
  );
};

export default LikeBlog;
