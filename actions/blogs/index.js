"use server";

import connectDB from "@/utils/connectDB";
import { Blogs } from "@/utils/models/blogs";

export const getBlogs = async () => {
  try {
    await connectDB();
    const res = await Blogs.find().sort({ createdAt: -1 });
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

export const getBlog = async (id) => {
  try {
    await connectDB();
    const res = await Blogs.findById(id);
    return {
      blog: res,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      blog: null,
      status: "failed",
      code: 500,
    };
  }
};
