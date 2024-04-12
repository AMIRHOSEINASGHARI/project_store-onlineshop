"use server";

import connectDB from "@/utils/connectDB";
import { Products } from "@/utils/models/product";

// Gets All Products By Filter
export const getProducts = async (searchParams) => {
  try {
    await connectDB();
    const { page, search } = searchParams;

    const pageNumber = page || 1;
    const perPage = 9;
    const totalProducts = await Products.countDocuments(
      search && { $text: { $search: search } }
    );
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await Products.find(
      search && { $text: { $search: search } }
    )
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });

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
    const products = await Products.find().limit(8).sort({ createdAt: -1 });

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
