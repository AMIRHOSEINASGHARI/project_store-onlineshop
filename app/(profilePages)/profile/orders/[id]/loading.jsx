"use client";

import Loader from "@/components/shared/Loader";

export default function Loading() {
  return (
    <main className="w-full flex flex-col gap-[30px]">
      <Loader />
    </main>
  );
}
