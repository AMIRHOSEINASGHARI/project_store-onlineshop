"use client";

import Loader from "@/components/shared/Loader";

const Loading = () => {
  return (
    <div className="w-full h-[30vh] flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
