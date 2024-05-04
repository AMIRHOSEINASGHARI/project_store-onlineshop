"use client";

// constants
import { icons } from "@/constants";

const LikeBlog = ({ id }) => {
  // TODO: server action to like blog

  return (
    <div className="flex items-center gap-3 justify-end">
      <p className="subtitle">Like this blog</p>
      <button
        type="button"
        className="rounded-xl group flex items-center justify-center px-4 py-2 hover:bg-red-100 transition1 bg-red-50 iconSize"
      >
        <div className="animate-bounce group-hover:animate-none">
          {icons.redHeart}
        </div>
      </button>
    </div>
  );
};

export default LikeBlog;
