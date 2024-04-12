"use client";

import React, { useState } from "react";
import { icons } from "@/constants";
import { useRouter } from "next/navigation";

const SearchProducts = () => {
  const router = useRouter();
  const search = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(
    search.has("search") ? search.get("search") : ""
  );

  const submitSearch = (e) => {
    e.preventDefault();

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

  const clearSearchHandler = () => {
    setQuery("");
    router.push("/products");
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
          {query && (
            <>
              <div className="h-full py-[13px]">
                <div className="w-[1px] h-full bg-gray-300" />
              </div>
              <button
                type="button"
                className="p-4  text-gray-500"
                onClick={() => clearSearchHandler()}
              >
                {icons.close}
              </button>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default SearchProducts;
