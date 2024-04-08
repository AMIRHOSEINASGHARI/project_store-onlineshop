"use server";

import connectDB from "@/utils/connectDB";
import { Blogs } from "@/utils/models/blogs";

// Gets All Blogs
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

// Gets A Specific Blog By ID
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

// Gets last 4 Blogs Published
export const getLatestBlogs = async () => {
  try {
    await connectDB();
    const res = await Blogs.find().sort({ createdAt: -1 });
    const blogs = res.slice(0, 4);
    return {
      blogs,
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
