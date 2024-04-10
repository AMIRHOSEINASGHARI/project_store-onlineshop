"use client";

import { useRouter } from "next/navigation";

const Pagination = ({ totalPages, searchParams }) => {
  const router = useRouter();

  const nextPage = () => {
    const search = new URLSearchParams(window.location.search);
    const newPage = Number(searchParams.page) + 1 || 2;

    search.set("page", newPage);

    const newPathName = `${window.location.pathname}?${search.toString()}`;
    router.push(newPathName);
  };

  const prevPage = () => {
    const search = new URLSearchParams(window.location.search);
    const newPage = Number(searchParams.page) - 1;

    search.set("page", newPage);

    const newPathName = `${window.location.pathname}?${search.toString()}`;
    router.push(newPathName);
  };

  return (
    <section className="flex items-center gap-3 mt-[50px] w-full justify-center">
      <button
        type="button"
        onClick={() => prevPage()}
        disabled={searchParams.page == 1 || searchParams.page === undefined}
        className={`${
          searchParams.page == 1 || searchParams.page === undefined
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-black text-white"
        } rounded-xl py-2 px-4 text-[14px]`}
      >
        Prev
      </button>
      <p className="cardShadow rounded-xl py-2 px-6">
        {searchParams.page || 1} / {totalPages}
      </p>
      <button
        type="button"
        onClick={() => nextPage()}
        disabled={searchParams.page == totalPages}
        className={`${
          searchParams.page == totalPages
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-black text-white"
        } rounded-xl py-2 px-4 text-[14px]`}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
