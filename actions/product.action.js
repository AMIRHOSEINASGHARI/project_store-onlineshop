"use server";

import connectDB from "@/utils/connectDB";
import { Products } from "@/utils/models/product";

// Gets All Products By Filter
export const getProducts = async (searchParams) => {
  try {
    await connectDB();
    const { page, search, has_selling_stock, has_discount, sort, category } =
      searchParams;

    let query = {};
    let filters = {};

    // search query filter
    if (search) {
      query = { $text: { $search: search } };
    }
    // product stock filter
    if (has_selling_stock) {
      filters.stock = { $gt: 0 };
    }
    // product discount filter
    if (has_discount) {
      has_discount == 1
        ? (filters.discount = { $gt: 0 })
        : (filters.discount = 0);
    }
    // product category filter
    if (category) {
      filters.category = category;
    }

    const pageNumber = page || 1;
    const perPage = 12;
    const totalProducts = await Products.countDocuments({
      ...query,
      ...filters,
    });
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await Products.find({ ...query, ...filters })
      .sort({
        ...(sort == 1
          ? { createdAt: -1 }
          : sort == 2
          ? { createdAt: 1 }
          : sort == 3
          ? { price: -1 }
          : sort == 4
          ? { price: 1 }
          : sort == 5
          ? { orders: -1 }
          : {}),
        stock: -1,
      })
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .lean();

    return {
      products,
      totalPages,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      products: null,
      status: "failed",
      code: 500,
    };
  }
};

// Gets last 4 Products Published
export const getLatestProducts = async () => {
  try {
    await connectDB();
    const products = await Products.find({ stock: { $gt: 0 } })
      .limit(8)
      .sort({ createdAt: -1 })
      .lean();

    return {
      products,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      products: null,
      status: "failed",
      code: 500,
    };
  }
};
