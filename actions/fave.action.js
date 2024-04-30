"use server";

import connectDB from "@/utils/connectDB";
import { Blogs } from "@/utils/models/blogs";
import { Like } from "@/utils/models/like";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";
import { getServerSession } from "@/utils/session";

export const addFave = async (data) => {
  try {
    await connectDB();

    const session = getServerSession();

    if (!session) {
      return {
        message: "Un-Authorized or session has expired!",
        status: "failed",
        code: 422,
      };
    }

    const { type, userId, productId, blogId } = data;

    if (type === "product") {
      const newLike = await Like.create({
        type,
        userId,
        product: productId,
        blog: undefined,
      });

      const product = await Products.findById(productId);
      product.likes.push(newLike._id);
      await product.save();

      const user = await User.findById(userId);
      user.likes.push(newLike._id);
      await user.save();

      return {
        message: "Product liked",
        status: "success",
        code: 202,
      };
    }
    if (type === "blog") {
      const newLike = await Like.create({
        type,
        userId,
        blog: blogId,
        product: undefined,
      });

      const blog = await Blogs.findById(blogId);
      blog.likes.push(newLike._id);
      await blog.save();

      const user = await User.findById(userId);
      user.likes.push(newLike._id);
      await user.save();

      return {
        message: "blog liked",
        status: "success",
        code: 202,
      };
    }
  } catch (error) {
    return {
      message: "Server Error! Try again later",
      status: "failed",
      code: 500,
    };
  }
};
