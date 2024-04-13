"use client";

import { useState } from "react";
import { categories, icons, sortProducts } from "@/constants";
import { Drawer, Radio, Switch } from "antd";
import { useRouter } from "next/navigation";

const FilterProducts = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const search = new URLSearchParams(window.location.search);
  const [filterForm, setFilterForm] = useState({
    has_selling_stock: search.get("has_selling_stock") || false,
    sort: search.get("sort") || 0,
    category: search.get("category") || "",
    has_discount: Number(search.get("has_discount")) || 0,
  });

  const showDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  const submitFilter = () => {
    if (search.has("page")) {
      search.delete("page");
    }

    for (const key in filterForm) {
      if (filterForm[key]) {
        search.set(key, filterForm[key]);
        const newPathName = `${window.location.pathname}?${search.toString()}`;
        router.push(newPathName);
        closeDrawer();
      } else {
        if (search.has(key)) {
          search.delete(key);
          const newPathName = `${
            window.location.pathname
          }?${search.toString()}`;
          router.push(newPathName);
          closeDrawer();
        } else {
          closeDrawer();
        }
      }
    }
  };

  const clearFilters = () => {
    setFilterForm({
      has_selling_stock: false,
      sort: 0,
      category: "",
      has_discount: 0,
    });
    router.push("/products");
    closeDrawer();
  };

  return (
    <section>
      <button
        onClick={() => showDrawer()}
        type="button"
        className="bg-gray-100 rounded-xl p-4 flex items-center gap-2 hover:bg-gray-200 transition1"
      >
        <div className="iconSize">{icons.filter}</div>{" "}
        <p className="max-md:hidden">Filter</p>
      </button>
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <h1>Filter Products</h1>
            <button type="button" onClick={() => closeDrawer()}>
              {icons.close}
            </button>
          </div>
        }
        placement="left"
        onClose={closeDrawer}
        open={open}
        closeIcon={false}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1>Only available items</h1>
            <Switch
              value={filterForm.has_selling_stock}
              onChange={(checked) => {
                setFilterForm({ ...filterForm, has_selling_stock: checked });
              }}
            />
          </div>
          <FilterWrapper title="Sort By:">
            <div className="flex flex-wrap gap-3">
              {sortProducts.map((el) => (
                <button
                  key={el.sortId}
                  type="button"
                  className={`${
                    search.has("sort") &&
                    search.get("sort") == el.sortId &&
                    "bg-gray-700 hover:bg-gray-800 text-white"
                  } ${
                    filterForm.sort == el.sortId && "bg-gray-200"
                  } capitalize rounded-xl py-1 px-3 hover:bg-gray-200 transition1`}
                  onClick={() =>
                    setFilterForm({ ...filterForm, sort: el.sortId })
                  }
                >
                  {el.sortName}
                </button>
              ))}
            </div>
          </FilterWrapper>
          <FilterWrapper title="Category">
            <div className="flex flex-wrap gap-3">
              {categories.map((el) => (
                <button
                  key={el.title}
                  type="button"
                  className={`${
                    search.has("category") &&
                    search.get("category").toLowerCase() ==
                      el.title.toLowerCase() &&
                    "bg-gray-700 hover:bg-gray-800 text-white"
                  } ${
                    filterForm.category.toLowerCase() ==
                      el.title.toLowerCase() && "bg-gray-200"
                  } capitalize rounded-xl py-1 px-3 hover:bg-gray-200 transition1`}
                  onClick={() =>
                    setFilterForm({
                      ...filterForm,
                      category: el.title.toLowerCase(),
                    })
                  }
                >
                  {el.title}
                </button>
              ))}
            </div>
          </FilterWrapper>
          <FilterWrapper title="Discount:">
            <Radio.Group
              value={filterForm.has_discount}
              onChange={(e) =>
                setFilterForm({ ...filterForm, has_discount: e.target.value })
              }
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Radio value={1}>Discounted items only</Radio>
              <Radio value={2}>Non-Discounted items only</Radio>
            </Radio.Group>
          </FilterWrapper>
          <button
            type="button"
            onClick={() => submitFilter()}
            className="bg-black text-white w-full py-2 rounded-lg font-medium"
          >
            Submit Filter
          </button>
          <button
            type="button"
            onClick={() => clearFilters()}
            className="bg-white text-black border w-full py-2 rounded-lg font-medium"
          >
            Clear Filter
          </button>
        </div>
      </Drawer>
    </section>
  );
};

export default FilterProducts;

const FilterWrapper = ({ children, title, classNames }) => {
  return (
    <div className={`cardShadow rounded-2xl px-4 py-2 ${classNames || ""}`}>
      <h1 className="subheader mb-3">{title}</h1>
      {children}
    </div>
  );
};
