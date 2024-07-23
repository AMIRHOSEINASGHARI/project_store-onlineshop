"use client";

import Loader from "@/components/shared/Loader";

export default function Loading() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <Loader />
    </div>
  );
}
