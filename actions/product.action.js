"use server";

import connectDB from "@/utils/connectDB";
import { Products } from "@/utils/models/product";

// Gets All Products By Filter
export const getProducts = async (page) => {
  try {
    await connectDB();

    const pageNumber = page || 1;
    const perPage = 9;

    const res = await Products.find()
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });

    return {
      products: res,
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
    const res = await Products.find().sort({ createdAt: -1 });
    const products = res.slice(0, 4);
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
