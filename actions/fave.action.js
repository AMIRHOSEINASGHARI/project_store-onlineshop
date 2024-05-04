"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { Blogs } from "@/utils/models/blogs";
import { Like } from "@/utils/models/like";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";

export const likeAction = async (data) => {
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

    const { type, userId, productId, blogId, isLikedByUser } = data;

    //  this is the proccess for liking a PRODUCT
    if (type === "product") {
      const product = await Products.findById(productId);
      const user = await User.findById(userId);

      //  if USER does not liked this PRODUCT, this proccess will like it
      if (!isLikedByUser) {
        const newLike = await Like.create({
          type,
          user: userId,
          product: productId,
          blog: undefined,
        });

        product.likes.push(newLike._id);
        await product.save();

        user.likes.push(newLike._id);
        await user.save();

        revalidatePath("/products");

        return {
          message: "Product liked",
          status: "success",
          code: 200,
        };
      }
      //  if USER liked this PRODUCT, this proccess will unlike it
      else {
        const deletedLike = await Like.findOneAndDelete({
          product: productId,
          user: userId,
        });

        const product_like_index = product.likes.findIndex((item) =>
          item.equals(deletedLike._id)
        );
        const user_like_index = user.likes.findIndex((item) =>
          item.equals(deletedLike._id)
        );

        product.likes.splice(product_like_index, 1);
        await product.save();
        user.likes.splice(user_like_index, 1);
        await user.save();

        revalidatePath("/products");

        return {
          message: "Product unliked",
          status: "success",
          code: 200,
        };
      }
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

      revalidatePath("/products");

      return {
        message: "blog liked",
        status: "success",
        code: 200,
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

export const getProductLikes = async (productId) => {
  try {
    await connectDB();

    const data = await Products.findById(productId)
      .populate({
        path: "likes",
        model: Like,
      })
      .select("likes");

    return {
      likes: data.likes,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      message: "Server Error! Try again later",
      status: "failed",
      code: 500,
    };
  }
};
