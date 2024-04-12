"use client";

import { icons } from "@/constants";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submitSearch = (e) => {
    e.preventDefault();
    const search = new URLSearchParams(window.location.search);

    if (!query) {
      router.push("/products");
      return;
    }

    if (search.has("page")) {
      search.delete("page");
    }

    search.set("search", query);
    const newPathName = `${window.location.pathname}?${search.toString()}`;
    router.push(newPathName);
  };

  return (
    <section className="mb-[20px]">
      <form className="flex justify-center" onSubmit={submitSearch}>
        <div className="flex items-center w-full lg:w-[70%] bg-gray-100 rounded-lg">
          <button type="submit" className="p-4 iconSize text-gray-500">
            {icons.search}
          </button>
          <div className="h-full py-[13px] mr-4">
            <div className="w-[1px] h-full bg-gray-300" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Searching for ..."
            className="py-3 pr-4 bg-transparent w-full placeholder:text-[14px] placeholder:font-light outline-none"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchProducts;
