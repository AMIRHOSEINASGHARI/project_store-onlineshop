"use server";

import connectDB from "@/utils/connectDB";
import { Blogs } from "@/utils/models/blogs";

export const getBlogs = async () => {
  try {
    await connectDB();
    const res = await Blogs.find();
    return {
      blogs: res,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      blogs: null,
      status: "failed",
      code: 500,
    };
  }
};
